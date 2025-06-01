# Web Application Structure and Logic

This document outlines the structure and logic of the animal sales web application.

## Project Root

The root of the project contains configuration files and main entry points:

*   `firebase.json`: Configuration for Firebase services.
*   `index.html`: The main HTML file that serves as the entry point for the application.
*   `package.json`: Defines project dependencies, scripts, and metadata.
*   `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript configuration files.
*   `vite.config.ts`: Configuration for the Vite build tool.
*   `database.rules.json`: Firebase Realtime Database security rules.
*   `DEPLOYMENT.md`: Likely contains instructions or notes related to deploying the application.
*   `ERROR-MESSAGE-IMPLEMENTATION.md`: Likely details the implementation of error messaging.
*   `README.md`: General information about the project.

## `public/`

This directory contains static assets that are served directly by the web server.

*   `index.html`: Another entry point, possibly a template.
*   `vite.svg`: An SVG image, likely related to Vite.

## `scripts/`

This directory holds utility scripts for various tasks.

*   `deploy.sh`: A shell script for deploying the application.
*   `migrate-firebase-data.js`: A Node.js script for migrating Firebase data.
*   `verify-migration.js`: A Node.js script to verify the data migration.

## `src/`

This is the main source code directory for the Vue application.

*   `App.vue`: The root Vue component of the application.
*   `main.ts`: The main TypeScript file that initializes the Vue application and mounts the root component.
*   `style.css`: Global CSS styles for the application.
*   `vite-env.d.ts`: TypeScript declaration file for Vite environment variables.

### `src/__tests__/`

Contains integration tests for the application.

*   `integration/CustomerManagement.spec.ts`: Integration tests for customer management functionality.

### `src/assets/`

Static assets that are processed by the build tool (e.g., images, fonts, global styles).

*   `vue.svg`: An SVG image, likely the Vue logo.
*   `styles/`: Contains SASS stylesheets.
    *   `_variables.scss`: SASS variables.
    *   `main.scss`: Main SASS file, likely importing other SASS files.
    *   `rtl.scss`: Styles for Right-To-Left language support.

### `src/components/`

Reusable Vue components organized by feature or domain.

*   `HelloWorld.vue`: A sample or placeholder component.
*   `animal/`: Components related to animal management.
    *   `AnimalCard.vue`: Displays information about a single animal.
    *   `AnimalForm.vue`: A form for creating or editing animal details.
*   `auth/`: Components related to authentication.
    *   `LoginForm.vue`: A form for user login.
    *   `__tests__/LoginForm.spec.ts`: Unit tests for the login form.
*   `balance/`: Components related to financial balances.
    *   `BalanceSheetTable.vue`: Displays a balance sheet.
*   `common/`: General-purpose, shared components.
    *   `AppHeader.vue`: The application header.
    *   `ErrorMessage.vue`: Displays error messages.
    *   `LazyImage.vue`: A component for lazy-loading images.
    *   `LoadingSpinner.vue`: A loading indicator.
*   `customer/`: Components related to customer management.
    *   `CustomerCard.vue`: Displays information about a single customer.
    *   `CustomerForm_Simple.vue`: A simplified form for customer data.
    *   `CustomerForm.vue`: A comprehensive form for customer data.
    *   `CustomerList.vue`: Displays a list of customers.
    *   `OptimizedCustomerList.vue`: An optimized version of the customer list, possibly using virtualization or other performance techniques.
    *   `__tests__/CustomerCard.spec.ts`: Unit tests for the customer card.
*   `payment/`: Components related to payment processing.
    *   `PaymentForm.vue`: A form for submitting payments.
    *   `PaymentHistory.scss`: SASS styles for payment history.
    *   `PaymentHistory.vue`: Displays payment history.
    *   `__tests__/PaymentForm.spec.ts`: Unit tests for the payment form.
*   `relationship/`: Components managing relationships between entities (e.g., customers and sacrifices).
    *   `CustomerSacrificeManager.vue`: Manages the relationship between customers and sacrifices.
    *   `CustomerSelector.vue`: A component for selecting customers.
    *   `SacrificeForm.vue`: A form for sacrifice details.
    *   `SacrificeList.vue`: Displays a list of sacrifices.

### `src/composables/`

Vue Composition API functions (custom hooks) for reusable logic.

*   `useAuth.ts`: Handles authentication logic.
*   `useFirebaseDB.ts`: Interacts with the Firebase Realtime Database.
*   `useLazyLoading.ts`: Implements lazy loading functionality.
*   `usePerformance.ts`: Utilities for performance monitoring or optimization.
*   `usePerformanceMonitor.ts`: Monitors application performance.
*   `useVirtualScroll.ts`: Implements virtual scrolling for long lists.
*   `__tests__/usePerformance.spec.ts`: Unit tests for the performance composable.

### `src/router/`

Vue Router configuration.

*   `index.ts`: Defines the application's routes and navigation guards.

### `src/services/`

Services that encapsulate business logic or API interactions.

*   `firebase.ts`: Initializes and configures Firebase services.

### `src/store/`

Vuex store modules for state management.

*   `index.ts`: The root Vuex store configuration.
*   `modules/`: Individual store modules for different parts of the application state.
    *   `animals.ts`: Manages state related to animals.
    *   `auth.ts`: Manages authentication state.
    *   `customers.ts`: Manages customer-related state.
    *   `payments.ts`: Manages payment-related state.
    *   `ui.ts`: Manages UI-related state (e.g., loading states, modals).
    *   `__tests__/auth.spec.ts`: Unit tests for the auth store module.

### `src/views/`

Page-level Vue components, typically corresponding to routes.

*   `AddCustomerPage.vue`: Page for adding a new customer.
*   `CustomerAnimalRelationshipPage.vue`: Page for managing customer-animal relationships.
*   `CustomerListPage.vue`: Page displaying a list of customers.
*   `CustomerManagementPage.vue`: Page for overall customer management.
*   `DashboardPage.vue`: The main dashboard page after login.
*   `LoginPage.vue`: The user login page.
*   `NotFoundPage.vue`: Page displayed for invalid routes (404).
*   `PaymentFormPage.vue`: Page for making a payment.
*   `PaymentListPage.vue`: Page displaying a list of payments.
*   `PaymentManagementPage.vue`: Page for managing payments.
*   `ReportsPage.vue`: Page for viewing reports.

## Application Logic Overview

The application appears to be a sales management platform, likely for livestock or a similar business, given the "animal" and "sacrifice" terminology.

*   **Authentication**: Users log in (`LoginForm.vue`, `useAuth.ts`, `store/modules/auth.ts`) to access the application.
*   **Core Entities**: The main entities are Customers, Animals, and Payments.
*   **Customer Management**: Users can add, view, and manage customer information (`CustomerForm.vue`, `CustomerList.vue`, `CustomerCard.vue`).
*   **Animal Management**: Functionality for managing animals (`AnimalCard.vue`, `AnimalForm.vue`).
*   **Payment Processing**: Users can make and track payments (`PaymentForm.vue`, `PaymentHistory.vue`).
*   **Relationships**: The application manages relationships, such as between customers and "sacrifices" (`CustomerSacrificeManager.vue`).
*   **State Management**: Vuex is used for global state management, with modules for different domains.
*   **Routing**: Vue Router handles navigation between different views/pages.
*   **Backend**: Firebase is used as the backend, likely for database (Realtime Database) and authentication.
*   **UI/UX**: The application uses SASS for styling and includes components for common UI patterns like lazy loading, loading spinners, and error messages. Performance considerations are evident with `OptimizedCustomerList.vue` and composables like `usePerformance.ts` and `useVirtualScroll.ts`.
*   **Testing**: The project includes unit tests (Jest/Vitest, given `*.spec.ts` files) for components and composables, as well as integration tests.
