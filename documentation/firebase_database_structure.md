# Firebase Realtime Database Structure

This document outlines the Firebase Realtime Database structure for the animal sales web application, informed by `database.rules.json`, form components, and Vuex store modules.

## Root Path and Namespacing

The primary data for each user is stored under a path namespaced by their Firebase Authentication User ID (`$uid`):

```json
{
  "users": {
    "$uid": {
      // User-specific data collections like customers, payments, etc.
      "customers": { /* ... */ },
      "payments": { /* ... */ }
    }
  }
}
```

This structure is evident from `useFirebaseDB.ts` where `getFullPath` constructs paths like `users/${authStore.userId}/${collectionPath}`.

## Detailed Node Structures (within `users/$uid/`)

**Important Note:** The data structures described below are primarily derived from the Vue components (forms and data handling logic), which are considered the source of truth. The `database.rules.json` file provides validation for existing fields but may not reflect the complete or most current data structures, especially for nested objects or newly added fields.

### 1. `users/$uid/customers`

Stores customer information specific to the authenticated user.

```json
// Path: /users/$uid/customers/$customerId
{
  "$customerId": { // Auto-generated unique ID by Firebase push()
    "name": "string",         // Required
    "phone": "string",        // Optional, validated as string
    "address": "string",      // Optional (from CustomerForm.vue)
    "notes": "string",        // Optional (from CustomerForm.vue)
    "animals": {              // Nested collection of animals for this customer
      "$animalIdGenerated": { // Auto-generated unique ID (or id from AnimalForm's initialAnimal)
        "id": "string",       // UUIDv4, from AnimalForm's initialAnimal() in CustomerForm.vue
        "type": "string",     // Required, from AnimalForm
        "number": "string",   // Required (e.g., tag number), from AnimalForm
        "count": "number",    // From AnimalForm (defaults to 1)
        "weight": "number",   // Required, >= 0, from AnimalForm
        "pricePerUnit": "number", // From AnimalForm (defaults to 0)
        "total": "number",    // Inferred from AnimalForm's `processedAnimals` (calculated as weight * pricePerUnit).
                              // This field is stored in Firebase. It corresponds to `price` in database.rules.json.
        "status": "string",   // Required, from AnimalForm (defaults to 'حي'), validated by rules like /^(حي|جاهز|مذبوح|ملغي)$/
        "compositeKey": "string", // From AnimalForm (type_number)
        "createdAt": "number" // From AnimalForm or processing step (timestamp)
      }
    },
    "totalAmount": "number",    // Required, >= 0 (sum of animal prices/totals)
    "totalPayments": "number",  // Required, >= 0 (sum of payments made by this customer)
    "balance": "number",        // Required (totalAmount - totalPayments)
    "createdAt": "number",      // Required (timestamp)
    "updatedAt": "number",      // Optional (timestamp, added by updateData)
    "payments": []            // From CustomerForm.vue, initialized as empty array.
                              // This might store payment IDs or simplified payment details related to this customer.
                              // The main payment details are in the top-level `payments` collection.
  }
}
```

- **New fields from `CustomerForm.vue`**: `address`, `notes`.
- **Animal fields from `AnimalForm.vue` (within `CustomerForm.vue`)**: `id` (uuidv4), `type`, `number`, `count`, `weight`, `pricePerUnit`, `status`, `compositeKey`, `createdAt`. The `total` field (calculated from `weight` and `pricePerUnit`) is stored in the database.

### 2. `users/$uid/payments`

Stores payment information specific to the authenticated user. The structure is derived from `PaymentForm.vue`.

```json
// Path: /users/$uid/payments/$paymentId
{
  "$paymentId": { // Auto-generated unique ID by Firebase push() or similar
    "customerId": "string",      // ID of the customer this payment is for (from PaymentForm props/selection)
    "paymentDate": "number",     // Timestamp (from PaymentForm.vue paymentTransactionDetails)
    "notes": "string",           // Optional (from PaymentForm.vue paymentTransactionDetails)
    "paymentEntries": [          // Array of individual payment parts/methods used in this transaction
      {
        "id": "string",          // Unique ID for this payment entry (e.g., nanoid from PaymentForm.vue)
        "amount": "number",      // Amount for this specific entry
        "currency": "string",    // Currency code (e.g., 'NIS', 'JOD', 'USD' from PaymentForm.vue)
        "nisEquivalent": "number", // Optional, the amount converted to NIS (from PaymentForm.vue)
        "method": "string"       // Payment method (e.g., 'cash', 'bank_transfer', 'card' from PaymentForm.vue)
      }
      // ... potentially more entries if a single payment is made via multiple methods/currencies
    ],
    "totalAmountNIS": "number",  // Calculated total amount of the payment in NIS, summing up nisEquivalents
                                 // (derived from paymentSummaryTotalNIS in PaymentForm.vue)
    "createdAt": "number",       // Timestamp of when the payment record was created
    "updatedAt": "number"        // Optional, timestamp of the last update
  }
}
```

- **Source of Truth**: This structure is based on `PaymentForm.vue` (specifically the `PaymentEntry` interface and `paymentTransactionDetails`).
- **Discrepancy with `database.rules.json`**: The `database.rules.json` suggests a simpler structure for payments with a single `amount` field. The structure above, with `paymentEntries`, is more accurate as per the application's form logic. The rules file might need updating to correctly validate this detailed structure.

## Key Observations from `useFirebaseDB.ts`

- **Data Scoping:** All primary database operations (`subscribe`, `fetchData`, `addData`, `updateData`, `setData`, `removeData`) are scoped to the authenticated user's path (`users/$uid/...`).
- **Timestamps:** `addData` automatically adds a `createdAt` timestamp. `updateData` automatically adds an `updatedAt` timestamp.
- **Data Transformation:** An optional `transform` function can be provided to process data after it's fetched.
- **Collections vs. Single Docs:** The composable can handle fetching collections (returning arrays of objects with `id`s) or single documents.

## Missing Entities (from previous assumption, to be confirmed)

- **`sacrifices` / `customerSacrifices`:** These were in the initial assumption. If this functionality exists, its Firebase structure needs to be defined and secured in `database.rules.json`. It would likely follow the same user-namespaced pattern:
  - `users/$uid/sacrifices/{sacrificeId}`
  - `users/$uid/customerSacrifices/{relationshipId}` (or nested under customer/sacrifice)
- **`appSettings` (Truly Global):** If there are settings global to the entire application (not user-specific), they would reside outside the `users` node (e.g., `/appSettings`). This is not evident from the current `database.rules.json` or `useFirebaseDB.ts`.

## Security Rules (`database.rules.json`) Highlights

- **User Ownership:**
  - Users can only read/write their own data within `/users/$uid/`.
  - Specific validation rules are applied to `customers` and `payments` ensuring data integrity (required fields, data types, specific value formats like animal status).
- **Customers:**
  - `name`, `animals` (as an object), `totalAmount`, `createdAt` are mandatory.
  - Nested animal objects also have mandatory fields (`type`, `number`, `weight`, `price`).
- **Payments:**
  - `customerId`, `amount`, `paymentDate`, `createdAt` are mandatory.

This revised structure, based on your actual codebase, provides a more accurate representation. If other entities like "sacrifices" are part of the application, their structure and rules would need to be added.
