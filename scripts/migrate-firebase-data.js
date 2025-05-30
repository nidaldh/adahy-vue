#!/usr/bin/env node

/**
 * Firebase Data Migration Script
 * 
 * This script migrates data from global Firebase paths to user-specific paths.
 * It converts the original single-user structure to a multi-user structure.
 * 
 * Original structure:
 * - /customers
 * - /payments  
 * - /globalAnimals
 * 
 * New structure:
 * - /users/{userUID}/customers
 * - /users/{userUID}/payments
 * - /users/{userUID}/globalAnimals
 * 
 * Usage:
 * 1. Install dependencies: npm install firebase-admin
 * 2. Download service account key from Firebase Console
 * 3. Set environment variables or update config below
 * 4. Run: node scripts/migrate-firebase-data.js
 */

const admin = require('firebase-admin');
const readline = require('readline');

// Configuration
const CONFIG = {
  // Update these with your Firebase project details
  databaseURL: "https://alfaree-615b6-default-rtdb.europe-west1.firebasedatabase.app/",
  
  // Path to your service account key file
  // Download from Firebase Console > Settings > Service Accounts
  serviceAccountPath: "./service-account-key.json",
  
  // Admin user UID to migrate data to (if migrating to single admin user)
  // Leave null to prompt for user selection
  adminUserUID: null,
  
  // Backup settings
  createBackup: true,
  backupPath: "./firebase-backup.json"
};

// Global paths to migrate from
const GLOBAL_PATHS = [
  'customers',
  'payments', 
  'globalAnimals'
];

// Initialize Firebase Admin
function initializeFirebase() {
  try {
    const serviceAccount = require(CONFIG.serviceAccountPath);
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: CONFIG.databaseURL
    });
    
    console.log('✅ Firebase Admin initialized successfully');
    return admin.database();
  } catch (error) {
    console.error('❌ Failed to initialize Firebase Admin:', error.message);
    console.log('\n📋 Setup required:');
    console.log('1. Download service account key from Firebase Console');
    console.log('2. Save as service-account-key.json in project root');
    console.log('3. Update CONFIG.serviceAccountPath if needed');
    process.exit(1);
  }
}

// Create backup of existing data
async function createBackup(db) {
  if (!CONFIG.createBackup) return;
  
  console.log('📦 Creating backup...');
  
  try {
    const backup = {};
    
    for (const path of GLOBAL_PATHS) {
      const snapshot = await db.ref(path).once('value');
      if (snapshot.exists()) {
        backup[path] = snapshot.val();
        console.log(`   ✅ Backed up ${path} (${Object.keys(backup[path]).length} items)`);
      } else {
        console.log(`   ⚠️  No data found at /${path}`);
      }
    }
    
    const fs = require('fs');
    fs.writeFileSync(CONFIG.backupPath, JSON.stringify(backup, null, 2));
    console.log(`✅ Backup saved to ${CONFIG.backupPath}`);
    
    return backup;
  } catch (error) {
    console.error('❌ Backup failed:', error.message);
    throw error;
  }
}

// Get list of users from Firebase Auth
async function getUsers() {
  try {
    console.log('👥 Fetching Firebase Auth users...');
    
    const listUsers = await admin.auth().listUsers();
    const users = listUsers.users.map(user => ({
      uid: user.uid,
      email: user.email || 'No email',
      displayName: user.displayName || 'No name',
      creationTime: user.metadata.creationTime
    }));
    
    console.log(`Found ${users.length} users:`);
    users.forEach((user, index) => {
      console.log(`   ${index + 1}. ${user.email} (${user.uid})`);
    });
    
    return users;
  } catch (error) {
    console.error('❌ Failed to fetch users:', error.message);
    return [];
  }
}

// Prompt user to select target user
async function selectTargetUser(users) {
  if (CONFIG.adminUserUID) {
    const adminUser = users.find(u => u.uid === CONFIG.adminUserUID);
    if (adminUser) {
      console.log(`🎯 Using configured admin user: ${adminUser.email}`);
      return adminUser;
    }
  }
  
  if (users.length === 0) {
    console.log('❌ No users found. Creating a default admin user path...');
    return { uid: 'admin', email: 'admin@local.app', displayName: 'Admin User' };
  }
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise(resolve => {
    rl.question('\n🎯 Select user to migrate data to (enter number or "all" for all users): ', (answer) => {
      rl.close();
      
      if (answer.toLowerCase() === 'all') {
        resolve('all');
      } else {
        const index = parseInt(answer) - 1;
        if (index >= 0 && index < users.length) {
          resolve(users[index]);
        } else {
          console.log('❌ Invalid selection');
          process.exit(1);
        }
      }
    });
  });
}

// Migrate data for a specific user
async function migrateDataForUser(db, userData, targetUser) {
  const userUID = targetUser.uid;
  console.log(`\n🔄 Migrating data for user: ${targetUser.email} (${userUID})`);
  
  try {
    const migrationStats = { processed: 0, errors: 0 };
    
    for (const [collection, data] of Object.entries(userData)) {
      if (!data || typeof data !== 'object') continue;
      
      const targetPath = `users/${userUID}/${collection}`;
      console.log(`   📁 Migrating ${collection} to ${targetPath}...`);
      
      // Check if data already exists
      const existingSnapshot = await db.ref(targetPath).once('value');
      if (existingSnapshot.exists()) {
        console.log(`   ⚠️  Data already exists at ${targetPath}, skipping...`);
        continue;
      }
      
      // Transform data if needed (e.g., add timestamps, fix structure)
      const transformedData = transformDataForUser(collection, data, userUID);
      
      // Write to new location
      await db.ref(targetPath).set(transformedData);
      
      const itemCount = Object.keys(transformedData).length;
      console.log(`   ✅ Migrated ${itemCount} items to ${targetPath}`);
      migrationStats.processed += itemCount;
    }
    
    // Set migration metadata
    await db.ref(`users/${userUID}/metadata`).set({
      migratedAt: Date.now(),
      migratedFrom: 'global',
      version: '1.0.0'
    });
    
    console.log(`✅ Migration completed for ${targetUser.email}`);
    console.log(`   📊 Processed: ${migrationStats.processed} items`);
    console.log(`   ❌ Errors: ${migrationStats.errors}`);
    
    return migrationStats;
  } catch (error) {
    console.error(`❌ Migration failed for ${targetUser.email}:`, error.message);
    throw error;
  }
}

// Transform data for user-specific structure
function transformDataForUser(collection, data, userUID) {
  const transformed = {};
  
  for (const [key, item] of Object.entries(data)) {
    if (!item || typeof item !== 'object') {
      transformed[key] = item;
      continue;
    }
    
    // Add metadata if missing
    const transformedItem = {
      ...item,
      updatedAt: item.updatedAt || Date.now(),
      createdAt: item.createdAt || Date.now()
    };
    
    // Collection-specific transformations
    switch (collection) {
      case 'customers':
        // Ensure customer has required fields
        transformedItem.totalAmount = transformedItem.totalAmount || 0;
        transformedItem.totalPayments = transformedItem.totalPayments || 0;
        transformedItem.balance = transformedItem.balance || transformedItem.totalAmount || 0;
        
        // Ensure animals array exists and has proper structure
        if (transformedItem.animals && Array.isArray(transformedItem.animals)) {
          transformedItem.animals = transformedItem.animals.map(animal => ({
            ...animal,
            id: animal.id || `${animal.type}-${animal.number}`,
            compositeKey: animal.compositeKey || `${animal.type}-${animal.number}`,
            total: animal.total || (animal.weight * animal.price) || 0,
            status: animal.status || 'حي'
          }));
        }
        break;
        
      case 'payments':
        // Ensure payment has required fields
        transformedItem.amount = transformedItem.amount || 0;
        transformedItem.paymentDate = transformedItem.paymentDate || transformedItem.createdAt;
        break;
        
      case 'globalAnimals':
        // Ensure animal has proper structure
        transformedItem.compositeKey = transformedItem.compositeKey || `${transformedItem.type}-${transformedItem.number}`;
        transformedItem.status = transformedItem.status || 'حي';
        break;
    }
    
    transformed[key] = transformedItem;
  }
  
  return transformed;
}

// Main migration function
async function main() {
  console.log('🚀 Firebase Data Migration Tool');
  console.log('================================\n');
  
  try {
    // Initialize Firebase
    const db = initializeFirebase();
    
    // Create backup
    const backupData = await createBackup(db);
    
    // Check if there's data to migrate
    const hasData = Object.keys(backupData).some(key => 
      backupData[key] && Object.keys(backupData[key]).length > 0
    );
    
    if (!hasData) {
      console.log('❌ No data found to migrate. Make sure the original Firebase project has data.');
      process.exit(0);
    }
    
    // Get users
    const users = await getUsers();
    
    // Select target user(s)
    const targetUser = await selectTargetUser(users);
    
    // Perform migration
    if (targetUser === 'all') {
      console.log('\n🔄 Migrating data for all users...');
      for (const user of users) {
        await migrateDataForUser(db, backupData, user);
      }
    } else {
      await migrateDataForUser(db, backupData, targetUser);
    }
    
    console.log('\n🎉 Migration completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Test the Vue.js application with migrated data');
    console.log('2. Verify all features work correctly');
    console.log('3. Consider removing global data paths if migration is successful');
    console.log('4. Update Firebase Security Rules to restrict user access');
    
  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    console.log('\n📋 Troubleshooting:');
    console.log('1. Check Firebase project configuration');
    console.log('2. Verify service account permissions');
    console.log('3. Ensure database rules allow read/write access');
    process.exit(1);
  }
}

// Run migration if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  migrateDataForUser,
  transformDataForUser,
  CONFIG
};
