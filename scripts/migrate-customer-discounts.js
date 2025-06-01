// This script migrates existing customer data to include new discount-related fields
// and recalculates balances.
// Ensure you have Firebase Admin SDK initialized and configured.
// Run this script from your project root: node scripts/migrate-customer-discounts.js

// IMPORTANT: Backup your database before running this script!

// Placeholder for Firebase Admin SDK initialization
// You'll need to replace this with your actual Firebase Admin setup
// Example:
/*
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/your/serviceAccountKey.json'); // Update path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com' // Update with your Database URL
});

const db = admin.database();
*/

// Mock Firebase setup for demonstration if not running in a full Node environment
// In a real scenario, use firebase-admin as shown above.
const MOCK_MODE = false; // Set to false when using actual Firebase Admin

let mockDb = {
  customers: {
    'customer1': {
      id: 'customer1',
      name: 'John Doe',
      totalAmount: 1000,
      totalPaidNIS: 500,
      balance: 500,
      // no discount fields initially
    },
    'customer2': {
      id: 'customer2',
      name: 'Jane Smith',
      totalAmount: 1500,
      totalPaidNIS: 1500,
      balance: 0,
      // no discount fields initially
    },
    'customer3': {
      id: 'customer3',
      name: 'Alice Brown',
      totalAmount: 200,
      totalPaidNIS: 0,
      balance: 200,
      discount: { // Customer who might already have a discount structure (rare case before migration)
        amount: 0, // but no actual discount value
      }
    }
  }
};

async function getFirebaseData(path) {
  if (MOCK_MODE) {
    console.log(`[MOCK_DB] GET ${path}`);
    const parts = path.split('/');
    let data = mockDb;
    for (const part of parts) {
      if (data && data[part]) {
        data = data[part];
      } else {
        return null;
      }
    }
    return { val: () => data, exists: () => data !== null };
  }
  // Real Firebase: return db.ref(path).once('value');
  throw new Error('Firebase Admin SDK not initialized for non-mock mode.');
}

async function updateFirebaseData(path, updates) {
  if (MOCK_MODE) {
    console.log(`[MOCK_DB] UPDATE ${path} with`, updates);
    const parts = path.split('/');
    let dataRef = mockDb;
    for (let i = 0; i < parts.length -1; i++) {
      dataRef = dataRef[parts[i]];
    }
    dataRef[parts[parts.length -1]] = { ...dataRef[parts[parts.length -1]], ...updates};
    return;
  }
  // Real Firebase: return db.ref(path).update(updates);
  throw new Error('Firebase Admin SDK not initialized for non-mock mode.');
}


async function migrateCustomers() {
  console.log('Starting customer data migration for discounts...');

  try {
    const customersSnapshot = await getFirebaseData('customers');

    if (!customersSnapshot || !customersSnapshot.exists()) {
      console.log('No customers found to migrate.');
      return;
    }

    const customers = customersSnapshot.val();
    let updatedCount = 0;
    const promises = [];

    for (const customerId in customers) {
      if (Object.prototype.hasOwnProperty.call(customers, customerId)) {
        const customer = customers[customerId];
        const updates = {};

        // Initialize totalAmountBeforeDiscount
        if (typeof customer.totalAmountBeforeDiscount === 'undefined') {
          updates.totalAmountBeforeDiscount = customer.totalAmount || 0;
        }

        // Initialize finalTotalAmount
        // If a discount object exists and has an amount, use it, otherwise default to totalAmount
        let currentDiscountAmount = 0;
        if (customer.discount && typeof customer.discount.amount === 'number' && customer.discount.amount > 0) {
            currentDiscountAmount = customer.discount.amount;
        }
        
        if (typeof customer.finalTotalAmount === 'undefined') {
          // If migrating, assume discount is not yet applied unless explicitly present
          // So finalTotalAmount will be totalAmountBeforeDiscount (which is original totalAmount)
          // minus any pre-existing discount amount found.
          updates.finalTotalAmount = (updates.totalAmountBeforeDiscount || customer.totalAmount || 0) - currentDiscountAmount;
        }
        
        // Ensure discount object structure if it's meant to be standard
        // For this migration, we'll only add it if it's missing and there was a discount amount
        // or if you want to standardize its presence.
        // If customer.discount is undefined, and you want to ensure it exists:
        // updates.discount = customer.discount || { amount: 0, reason: '', appliedBy: '', appliedAt: null };
        // For now, we only ensure it if there was a pre-existing discount amount.
        if (currentDiscountAmount > 0 && !customer.discount) {
             updates.discount = { amount: currentDiscountAmount }; // Add other fields if necessary
        }


        // Recalculate balance
        const newFinalTotalAmount = updates.finalTotalAmount || customer.finalTotalAmount || customer.totalAmount || 0;
        const totalPaid = customer.totalPaidNIS || 0;
        const newBalance = newFinalTotalAmount - totalPaid;

        if (customer.balance !== newBalance) {
          updates.balance = newBalance;
        }
        
        if (Object.keys(updates).length > 0) {
          console.log(`Updating customer ${customerId}:`, updates);
          promises.push(updateFirebaseData(`customers/${customerId}`, updates));
          updatedCount++;
        }
      }
    }

    await Promise.all(promises);
    console.log(`Migration completed. ${updatedCount} customers processed.`);

  } catch (error) {
    console.error('Error during customer migration:', error);
  }
}

// To run the migration:
// 1. Configure Firebase Admin SDK above.
// 2. Uncomment the line below.
// 3. Run `node scripts/migrate-customer-discounts.js` from your project root.

migrateCustomers();

console.log('Migration script loaded. Uncomment `migrateCustomers()` call at the bottom to run.');
if (MOCK_MODE) {
  console.warn('NB: Script is in MOCK_MODE. No actual database changes will be made.');
  console.log('To run against your actual Firebase database:');
  console.log('1. Set MOCK_MODE to false in this script.');
  console.log('2. Install firebase-admin: npm install firebase-admin');
  console.log('3. Download your serviceAccountKey.json from Firebase console.');
  console.log('4. Update the Firebase Admin SDK initialization code at the top of this script.');
  console.log('5. Ensure your DATABASE_URL is correctly set.');
  console.log('6. IMPORTANT: Backup your database before running!');
  console.log('7. Uncomment `migrateCustomers();` at the end of the script.');
  console.log('8. Run `node scripts/migrate-customer-discounts.js`');
  
  // Example of running mock migration:
  (async () => {
    console.log('\n--- Running Mock Migration ---');
    await migrateCustomers();
    console.log('--- Mock Migration Finished ---');
    console.log('Mock DB state after migration:', JSON.stringify(mockDb, null, 2));
  })();
}
