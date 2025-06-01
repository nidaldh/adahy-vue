# Application Logic

This document outlines the core business logic, user flows, and key functionalities of the animal sales web application.

## Core User Flows

### 1. User Authentication
    - **Login:**
        - User navigates to the `/login` page.
        - Enters credentials (e.g., email and password).
        - `LoginForm.vue` captures input and calls `useAuth.ts` composable.
        - `useAuth.ts` interacts with Firebase Authentication via `src/services/firebase.ts`.
        - Upon successful authentication, user state is updated in the Vuex `auth` module (`src/store/modules/auth.ts`).
        - User is redirected to the `DashboardPage.vue`.
        - Error messages are displayed via `ErrorMessage.vue` on failure.
    - **Logout:**
        - User clicks a logout button (likely in `AppHeader.vue`).
        - `useAuth.ts` handles Firebase sign-out.
        - Vuex `auth` state is cleared.
        - User is redirected to the `LoginPage.vue`.

### 2. Customer Management
    - **View Customers:**
        - User navigates to `CustomerListPage.vue` or `CustomerManagementPage.vue`.
        - `CustomerList.vue` or `OptimizedCustomerList.vue` fetches customer data.
        - Data is likely retrieved from Firebase Realtime Database via `useFirebaseDB.ts` and managed by the Vuex `customers` module.
        - Each customer is displayed using `CustomerCard.vue`.
    - **Add New Customer:**
        - User navigates to `AddCustomerPage.vue` or clicks an "Add Customer" button.
        - `CustomerForm.vue` (or `CustomerForm_Simple.vue`) is used to input customer details.
        - On submission, data is sent to Firebase via `useFirebaseDB.ts` and the Vuex `customers` store is updated.
    - **Edit Customer:**
        - User selects a customer to edit from a list.
        - `CustomerForm.vue` is populated with existing customer data.
        - On submission, updated data is saved to Firebase and the Vuex store.
    - **View Customer Details:**
        - Clicking on a `CustomerCard.vue` might navigate to a detailed view or expand the card (not explicitly detailed but a common pattern).

### 3. Animal Management (Assumed based on components)
    - **View Animals:**
        - A dedicated page or section (e.g., linked from `DashboardPage.vue`) would list animals.
        - `AnimalCard.vue` would display individual animal details.
        - Data fetched via `useFirebaseDB.ts` and managed by Vuex `animals` module.
    - **Add/Edit Animal:**
        - `AnimalForm.vue` would be used for creating or updating animal records.
        - Logic similar to customer management for data persistence.

### 4. Payment Processing
    - **Make a Payment:**
        - User navigates to `PaymentFormPage.vue`.
        - `PaymentForm.vue` captures payment details.
        - Submission likely involves `useFirebaseDB.ts` to record the payment and updates the Vuex `payments` module.
    - **View Payment History:**
        - User navigates to `PaymentListPage.vue` or a section within `PaymentManagementPage.vue`.
        - `PaymentHistory.vue` displays a list of payments, potentially filterable or sortable.
        - Data fetched from Firebase and managed by the Vuex `payments` store.

### 5. Customer-Sacrifice Relationship Management
    - User navigates to `CustomerAnimalRelationshipPage.vue`.
    - `CustomerSacrificeManager.vue` allows associating customers (selected via `CustomerSelector.vue`) with sacrifices.
    - `SacrificeForm.vue` is used to input details for a sacrifice.
    - `SacrificeList.vue` displays existing sacrifices.
    - This flow suggests a many-to-many or one-to-many relationship between customers and "sacrifices" (which might be a specific type of animal or event).

### 6. Reporting (Assumed)
    - User navigates to `ReportsPage.vue`.
    - This page would display various reports, potentially using data aggregated from customers, animals, and payments.
    - `BalanceSheetTable.vue` might be used here or on the dashboard to show financial summaries.

## Key Functionalities & Business Logic

### Authentication and Authorization
- Firebase Authentication is the primary mechanism.
- Vue Router navigation guards (`src/router/index.ts`) protect routes based on authentication status.
- User roles and permissions might be implicitly handled or defined within Firebase rules/application logic (not explicitly detailed).

### Data Management
- **Firebase Realtime Database:** Serves as the primary data store. `useFirebaseDB.ts` is the main composable for database interactions (CRUD operations).
- **Vuex Store (`src/store/`):**
    - Centralized state management for different modules: `auth`, `animals`, `customers`, `payments`, `ui`.
    - Actions in store modules handle asynchronous operations (e.g., fetching data from Firebase) and commit mutations to update the state.
    - Getters provide convenient access to derived state or filtered data.
- **Data Integrity:**
    - Forms (`CustomerForm.vue`, `AnimalForm.vue`, `PaymentForm.vue`, `SacrificeForm.vue`) are responsible for input validation before submission.
    - Firebase Database Rules (`database.rules.json`) provide server-side validation and security.

### UI and User Experience
- **Responsive Design:** (Assumed, standard practice) The application should adapt to different screen sizes.
- **Lazy Loading:** `LazyImage.vue` and `useLazyLoading.ts` improve initial page load performance by deferring image loading.
- **Virtual Scrolling:** `useVirtualScroll.ts` and `OptimizedCustomerList.vue` enhance performance for long lists by only rendering visible items.
- **Loading States:** `LoadingSpinner.vue` and the Vuex `ui` module manage visual feedback during data fetching or processing.
- **Error Handling:** `ErrorMessage.vue` provides a consistent way to display errors to the user. `ERROR-MESSAGE-IMPLEMENTATION.md` likely details this strategy.
- **Performance Monitoring:** `usePerformance.ts` and `usePerformanceMonitor.ts` suggest tools are in place to track and potentially optimize application performance.

### Modularity and Reusability
- **Components (`src/components/`):** Well-organized by feature (animal, auth, customer, payment, etc.) and common UI elements.
- **Composables (`src/composables/`):** Vue Composition API functions encapsulate reusable logic (auth, Firebase interaction, lazy loading, performance).
- **Services (`src/services/`):** `firebase.ts` centralizes Firebase initialization and configuration.

### Navigation
- **Vue Router (`src/router/index.ts`):** Defines application routes and manages navigation between views (`src/views/`).
- **Programmatic Navigation:** Likely used within components and composables to redirect users after certain actions (e.g., after login, form submission).

## Specific Business Rules (Inferred)

- **Sacrifices:** This term suggests a specific type of transaction or event related to animals, possibly for religious or cultural purposes. The `CustomerSacrificeManager.vue` indicates a clear link between customers and these events.
- **Balance Sheets:** The presence of `BalanceSheetTable.vue` implies financial tracking and reporting capabilities beyond simple payment lists.
- **Data Migration:** `scripts/migrate-firebase-data.js` and `verify-migration.js` indicate that data structure changes or migrations have occurred or are planned, highlighting the importance of data integrity.

This document provides a high-level overview. Detailed logic for specific calculations, validations, or complex interactions would reside within the respective components, composables, and store modules.

## Security Rules (`database.rules.json`) Highlights

*   **User Ownership:**
    *   Users can only read/write their own data within `/users/$uid/`.
    *   Specific validation rules are applied to `customers` and `payments` ensuring data integrity (required fields, data types, specific value formats like animal status).
*   **Customers:**
    *   `customerId`, `name`, `contactInfo`, `address`, `createdAt` are mandatory.
    *   `customerId` must be unique.
    *   `status` field must be either "active" or "inactive".
*   **Payments:**
    *   `customerId`, `amount`, `paymentDate`, `createdAt` are mandatory.

This revised structure, based on your actual codebase, provides a more accurate representation. If other entities like "sacrifices" are part of the application, their structure and rules would need to be added.
