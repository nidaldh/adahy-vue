import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '../store/modules/auth';
import { auth } from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import AddCustomerPage from '@/views/AddCustomerPage.vue';
import CustomerListPage from '@/views/CustomerListPage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/LoginPage.vue'),
        meta: { requiresGuest: true }
    },
    {
        path: '/',
        component: () => import('@/views/DashboardPage.vue'),
        redirect: '/customer-list', // Changed default redirect to customer list
        meta: { requiresAuth: true },
        children: [
            {
                path: 'add-customer',
                name: 'AddCustomer',
                component: AddCustomerPage,
                meta: { requiresAuth: true },
            },
            {
                path: 'edit-customer/:id',
                name: 'EditCustomer',
                component: AddCustomerPage, // Reusing AddCustomerPage for editing
                meta: { requiresAuth: true },
                props: true, // Pass route params as props
            },
            {
                path: 'customer-list',
                name: 'CustomerList',
                component: CustomerListPage,
                meta: { requiresAuth: true },
            },
            {
                path: 'payments',
                redirect: { name: 'PaymentList' },
            },
            {
                path: 'payments/list',
                name: 'PaymentList',
                component: () => import('@/views/PaymentListPage.vue'),
            },
            {
                path: 'payments/add',
                name: 'PaymentForm',
                component: () => import('@/views/PaymentFormPage.vue'),
            },
            {
                path: 'reports',
                name: 'Reports',
                component: () => import('@/views/ReportsPage.vue'),
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFoundPage.vue')
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach(async (to, _from, next) => {
    const authStore = useAuthStore();

    // Wait for Firebase to initialize and auth state to be known
    await new Promise<void>(resolve => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!authStore.user && user) { // Check if store user is not yet set
                authStore.setUser(user);
            }
            unsubscribe();
            resolve();
        }, () => {
            // On error, still resolve to allow navigation guards to handle it
            unsubscribe();
            resolve();
        });
    });

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next({ name: 'Login', query: { redirect: to.fullPath } });
    } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
        next({ name: 'CustomerList' }); // Redirect to customer list for authenticated guests
    } else {
        next();
    }
});

export default router;
