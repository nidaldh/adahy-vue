#!/usr/bin/env node

/**
 * Data Migration Verification Script
 * 
 * This script verifies that data migration from global paths to user-specific paths
 * was completed successfully and validates data integrity.
 */

const admin = require('firebase-admin');
const fs = require('fs');

// Configuration
const CONFIG = {
  databaseURL: "https://alfaree-615b6-default-rtdb.europe-west1.firebasedatabase.app/",
  serviceAccountPath: "./service-account-key.json",
  backupPath: "./firebase-backup.json"
};

// Collections to verify
const COLLECTIONS = ['customers', 'payments', 'globalAnimals'];

// Initialize Firebase Admin
function initializeFirebase() {
  try {
    const serviceAccount = require(CONFIG.serviceAccountPath);
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: CONFIG.databaseURL
    });
    
    console.log('✅ Firebase Admin initialized');
    return admin.database();
  } catch (error) {
    console.error('❌ Failed to initialize Firebase Admin:', error.message);
    process.exit(1);
  }
}

// Load backup data for comparison
function loadBackupData() {
  try {
    if (!fs.existsSync(CONFIG.backupPath)) {
      console.error('❌ Backup file not found:', CONFIG.backupPath);
      return null;
    }
    
    const backupData = JSON.parse(fs.readFileSync(CONFIG.backupPath, 'utf8'));
    console.log('✅ Backup data loaded');
    return backupData;
  } catch (error) {
    console.error('❌ Failed to load backup data:', error.message);
    return null;
  }
}

// Get all users from Firebase Auth
async function getUsers() {
  try {
    const listUsers = await admin.auth().listUsers();
    const users = listUsers.users.map(user => ({
      uid: user.uid,
      email: user.email || 'No email'
    }));
    
    console.log(`✅ Found ${users.length} users`);
    return users;
  } catch (error) {
    console.error('❌ Failed to fetch users:', error.message);
    return [];
  }
}

// Verify user data integrity
async function verifyUserData(db, userUID, backupData) {
  console.log(`\n🔍 Verifying data for user: ${userUID}`);
  
  const verification = {
    user: userUID,
    collections: {},
    errors: [],
    warnings: []
  };
  
  for (const collection of COLLECTIONS) {
    console.log(`   📁 Checking ${collection}...`);
    
    try {
      // Get user-specific data
      const userDataRef = db.ref(`users/${userUID}/${collection}`);
      const userSnapshot = await userDataRef.once('value');
      const userData = userSnapshot.val() || {};
      
      // Get original global data for comparison
      const originalData = backupData[collection] || {};
      
      // Verify data integrity
      const userDataCount = Object.keys(userData).length;
      const originalDataCount = Object.keys(originalData).length;
      
      verification.collections[collection] = {
        userDataCount,
        originalDataCount,
        migrated: userDataCount > 0,
        complete: userDataCount === originalDataCount
      };
      
      if (userDataCount === 0) {
        verification.warnings.push(`No ${collection} data found for user ${userUID}`);
      } else if (userDataCount !== originalDataCount) {
        verification.warnings.push(
          `${collection} count mismatch: user=${userDataCount}, original=${originalDataCount}`
        );
      } else {
        console.log(`   ✅ ${collection}: ${userDataCount} items migrated successfully`);
      }
      
      // Validate data structure for customers
      if (collection === 'customers' && userDataCount > 0) {
        await validateCustomerData(userData, verification);
      }
      
      // Validate data structure for payments
      if (collection === 'payments' && userDataCount > 0) {
        await validatePaymentData(userData, verification);
      }
      
    } catch (error) {
      verification.errors.push(`Failed to verify ${collection}: ${error.message}`);
      console.log(`   ❌ Error checking ${collection}: ${error.message}`);
    }
  }
  
  return verification;
}

// Validate customer data structure
async function validateCustomerData(customerData, verification) {
  const requiredFields = ['name', 'animals', 'totalAmount', 'createdAt'];
  
  for (const [customerId, customer] of Object.entries(customerData)) {
    // Check required fields
    for (const field of requiredFields) {
      if (!(field in customer)) {
        verification.errors.push(`Customer ${customerId} missing required field: ${field}`);
      }
    }
    
    // Validate animals array
    if (customer.animals && Array.isArray(customer.animals)) {
      customer.animals.forEach((animal, index) => {
        const requiredAnimalFields = ['type', 'number', 'weight', 'price'];
        for (const field of requiredAnimalFields) {
          if (!(field in animal)) {
            verification.errors.push(
              `Customer ${customerId} animal ${index} missing field: ${field}`
            );
          }
        }
        
        // Check composite key
        if (!animal.compositeKey) {
          verification.warnings.push(
            `Customer ${customerId} animal ${index} missing compositeKey`
          );
        }
      });
    } else {
      verification.warnings.push(`Customer ${customerId} has invalid animals array`);
    }
    
    // Validate financial calculations
    if (typeof customer.totalAmount !== 'number' || customer.totalAmount < 0) {
      verification.errors.push(`Customer ${customerId} has invalid totalAmount`);
    }
    
    if ('balance' in customer && typeof customer.balance !== 'number') {
      verification.errors.push(`Customer ${customerId} has invalid balance`);
    }
  }
}

// Validate payment data structure
async function validatePaymentData(paymentData, verification) {
  const requiredFields = ['customerId', 'amount', 'paymentDate', 'createdAt'];
  
  for (const [paymentId, payment] of Object.entries(paymentData)) {
    // Check required fields
    for (const field of requiredFields) {
      if (!(field in payment)) {
        verification.errors.push(`Payment ${paymentId} missing required field: ${field}`);
      }
    }
    
    // Validate amount
    if (typeof payment.amount !== 'number' || payment.amount <= 0) {
      verification.errors.push(`Payment ${paymentId} has invalid amount`);
    }
    
    // Validate dates
    if (typeof payment.paymentDate !== 'number') {
      verification.errors.push(`Payment ${paymentId} has invalid paymentDate`);
    }
  }
}

// Check for global data remnants
async function checkGlobalDataRemnants(db) {
  console.log('\n🔍 Checking for global data remnants...');
  
  const remnants = {};
  
  for (const collection of COLLECTIONS) {
    try {
      const globalRef = db.ref(collection);
      const snapshot = await globalRef.once('value');
      
      if (snapshot.exists()) {
        const data = snapshot.val();
        const count = Object.keys(data).length;
        remnants[collection] = count;
        console.log(`   ⚠️  Found ${count} items in global /${collection}`);
      } else {
        console.log(`   ✅ No data in global /${collection}`);
      }
    } catch (error) {
      console.log(`   ❌ Error checking global /${collection}: ${error.message}`);
    }
  }
  
  return remnants;
}

// Generate verification report
function generateReport(verifications, globalRemnants) {
  console.log('\n📊 Migration Verification Report');
  console.log('================================');
  
  const totalUsers = verifications.length;
  const usersWithData = verifications.filter(v => 
    Object.values(v.collections).some(c => c.userDataCount > 0)
  ).length;
  
  const totalErrors = verifications.reduce((sum, v) => sum + v.errors.length, 0);
  const totalWarnings = verifications.reduce((sum, v) => sum + v.warnings.length, 0);
  
  console.log(`\n📈 Summary:`);
  console.log(`   Total users: ${totalUsers}`);
  console.log(`   Users with migrated data: ${usersWithData}`);
  console.log(`   Total errors: ${totalErrors}`);
  console.log(`   Total warnings: ${totalWarnings}`);
  
  // Collection statistics
  console.log(`\n📊 Collection Statistics:`);
  const collectionStats = {};
  
  COLLECTIONS.forEach(collection => {
    const stats = verifications.reduce((acc, v) => {
      const col = v.collections[collection];
      if (col) {
        acc.totalItems += col.userDataCount;
        acc.usersWithData += col.userDataCount > 0 ? 1 : 0;
      }
      return acc;
    }, { totalItems: 0, usersWithData: 0 });
    
    collectionStats[collection] = stats;
    console.log(`   ${collection}: ${stats.totalItems} items across ${stats.usersWithData} users`);
  });
  
  // Global remnants
  if (Object.keys(globalRemnants).length > 0) {
    console.log(`\n⚠️  Global Data Remnants:`);
    Object.entries(globalRemnants).forEach(([collection, count]) => {
      console.log(`   /${collection}: ${count} items remaining`);
    });
    console.log(`\n💡 Consider cleaning up global data after verifying migration`);
  }
  
  // Detailed errors and warnings
  if (totalErrors > 0) {
    console.log(`\n❌ Errors Found:`);
    verifications.forEach(v => {
      if (v.errors.length > 0) {
        console.log(`   User ${v.user}:`);
        v.errors.forEach(error => console.log(`     - ${error}`));
      }
    });
  }
  
  if (totalWarnings > 0) {
    console.log(`\n⚠️  Warnings:`);
    verifications.forEach(v => {
      if (v.warnings.length > 0) {
        console.log(`   User ${v.user}:`);
        v.warnings.forEach(warning => console.log(`     - ${warning}`));
      }
    });
  }
  
  // Save detailed report
  const report = {
    timestamp: Date.now(),
    summary: {
      totalUsers,
      usersWithData,
      totalErrors,
      totalWarnings
    },
    collectionStats,
    globalRemnants,
    verifications
  };
  
  fs.writeFileSync('migration-verification-report.json', JSON.stringify(report, null, 2));
  console.log(`\n📄 Detailed report saved to: migration-verification-report.json`);
  
  // Final status
  if (totalErrors === 0) {
    console.log(`\n🎉 Migration verification completed successfully!`);
    return true;
  } else {
    console.log(`\n❌ Migration verification found ${totalErrors} errors that need attention`);
    return false;
  }
}

// Main verification function
async function main() {
  console.log('🔍 Firebase Data Migration Verification');
  console.log('========================================\n');
  
  try {
    // Initialize Firebase
    const db = initializeFirebase();
    
    // Load backup data
    const backupData = loadBackupData();
    if (!backupData) {
      console.log('⚠️  No backup data available for comparison');
      console.log('Proceeding with structure validation only...\n');
    }
    
    // Get users
    const users = await getUsers();
    
    if (users.length === 0) {
      console.log('❌ No users found in Firebase Auth');
      process.exit(1);
    }
    
    // Verify data for each user
    const verifications = [];
    for (const user of users) {
      const verification = await verifyUserData(db, user.uid, backupData || {});
      verifications.push(verification);
    }
    
    // Check for global data remnants
    const globalRemnants = await checkGlobalDataRemnants(db);
    
    // Generate and display report
    const success = generateReport(verifications, globalRemnants);
    
    process.exit(success ? 0 : 1);
    
  } catch (error) {
    console.error('\n❌ Verification failed:', error.message);
    process.exit(1);
  }
}

// Run verification if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  verifyUserData,
  validateCustomerData,
  validatePaymentData,
  CONFIG
};
