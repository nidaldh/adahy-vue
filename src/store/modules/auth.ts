import { defineStore } from 'pinia';
import { ref, computed, onUnmounted } from 'vue';
import { auth } from '../../services/firebase'; // Corrected path
import {
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged,
    type User
} from 'firebase/auth';
import { useRouter } from 'vue-router';

function getArabicErrorMessage(errorCode: string): string {
    switch (errorCode) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
            return 'البريد الإلكتروني أو كلمة المرور غير صحيحة.';
        case 'auth/invalid-email':
            return 'البريد الإلكتروني غير صالح.';
        default:
            return 'حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.';
    }
}

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);
    const router = useRouter();

    const isAuthenticated = computed(() => !!user.value);
    const userId = computed(() => user.value?.uid);

    const login = async (emailVal: string, passwordVal: string) => {
        loading.value = true;
        error.value = null;
        try {
            const userCredential = await signInWithEmailAndPassword(auth, emailVal, passwordVal);
            user.value = userCredential.user;
            router.push('/');
        } catch (err: any) {
            error.value = getArabicErrorMessage(err.code);
            user.value = null;
        } finally {
            loading.value = false;
        }
    };

    const logout = async () => {
        loading.value = true;
        try {
            await firebaseSignOut(auth);
            user.value = null;
            router.push('/login');
        } catch (err: any) {
            error.value = 'حدث خطأ أثناء تسجيل الخروج.';
        } finally {
            loading.value = false;
        }
    };

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        user.value = firebaseUser;
        if (!loading.value && !firebaseUser) {
          if (router.currentRoute.value.name !== 'Login') {
               router.push('/login').catch(err => {
                  if (err.name !== 'NavigationDuplicated') console.error(err);
               });
          }
        }
    });

    onUnmounted(() => {
        unsubscribe();
    });
    
    const setUser = (firebaseUser: User | null) => {
      user.value = firebaseUser;
    };

    const clearError = () => {
      error.value = null;
    };

    return { user, loading, error, isAuthenticated, userId, login, logout, setUser, clearError };
});
