import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '../store/modules/auth';
import { auth } from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';

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
        redirect: '/customers', // Default tab
        meta: { requiresAuth: true },
        children: [
            {
                path: 'customers',
                name: 'CustomerManagement',
                component: () => import('@/views/CustomerManagementPage.vue'),
            },
            {
                path: 'payments',
                name: 'PaymentManagement',
                component: () => import('@/views/PaymentManagementPage.vue'),
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
        next({ name: 'Dashboard' }); // Redirect to default dashboard child route
    } else {
        next();
    }
});

export default router;
