import { describe, it, expect, beforeEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useAuthStore } from '../auth';

// Mock router
const mockRouter = {
  push: vi.fn(),
  replace: vi.fn(),
  currentRoute: {
    value: {
      path: '/',
      params: {},
      query: {}
    }
  }
};

vi.mock('vue-router', () => ({
  useRouter: () => mockRouter
}));

// Mock Firebase auth functions
const mockSignInWithEmailAndPassword = vi.fn();
const mockSignOut = vi.fn();
const mockOnAuthStateChanged = vi.fn();

vi.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
  signOut: mockSignOut,
  onAuthStateChanged: mockOnAuthStateChanged
}));

// Mock Firebase auth service
vi.mock('@/services/firebase', () => ({
  auth: {}
}));

describe('Auth Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
    
    // Reset mock implementations
    mockSignInWithEmailAndPassword.mockReset();
    mockSignOut.mockReset();
    mockOnAuthStateChanged.mockReset();
    mockRouter.push.mockReset();
  });

  it('initializes with correct default state', () => {
    const authStore = useAuthStore();
    
    expect(authStore.userId).toBe(undefined);
    expect(authStore.loading).toBe(false);
    expect(authStore.error).toBe(null);
    expect(authStore.isAuthenticated).toBe(false);
  });

  it('sets loading state during login', async () => {
    const mockUser = { uid: 'test-user-id', email: 'test@example.com' };
    mockSignInWithEmailAndPassword.mockResolvedValue({ user: mockUser });

    const authStore = useAuthStore();
    
    const loginPromise = authStore.login('test@example.com', 'password');
    
    expect(authStore.loading).toBe(true);
    
    await loginPromise;
    
    expect(authStore.loading).toBe(false);
  });

  it('handles successful login', async () => {
    const mockUser = { uid: 'test-user-id', email: 'test@example.com' };
    mockSignInWithEmailAndPassword.mockResolvedValue({ user: mockUser });

    const authStore = useAuthStore();
    
    await authStore.login('test@example.com', 'password');
    
    expect(authStore.userId).toBe('test-user-id');
    expect(authStore.isAuthenticated).toBe(true);
    expect(authStore.error).toBe(null);
    expect(mockRouter.push).toHaveBeenCalledWith('/');
  });

  it('handles login failure', async () => {
    const mockError = { code: 'auth/wrong-password' };
    mockSignInWithEmailAndPassword.mockRejectedValue(mockError);

    const authStore = useAuthStore();
    
    await authStore.login('test@example.com', 'wrongpassword');
    
    expect(authStore.userId).toBe(undefined);
    expect(authStore.isAuthenticated).toBe(false);
    expect(authStore.error).toBe('البريد الإلكتروني أو كلمة المرور غير صحيحة.');
    expect(mockRouter.push).not.toHaveBeenCalled();
  });

  it('handles logout', async () => {
    // First login
    const mockUser = { uid: 'test-user-id', email: 'test@example.com' };
    mockSignInWithEmailAndPassword.mockResolvedValue({ user: mockUser });
    mockSignOut.mockResolvedValue(undefined);

    const authStore = useAuthStore();
    
    await authStore.login('test@example.com', 'password');
    expect(authStore.isAuthenticated).toBe(true);
    
    // Then logout
    await authStore.logout();
    
    expect(mockSignOut).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalledWith('/login');
  });

  it('clears error when clearError is called', async () => {
    const mockError = { code: 'auth/wrong-password' };
    mockSignInWithEmailAndPassword.mockRejectedValue(mockError);

    const authStore = useAuthStore();
    
    await authStore.login('test@example.com', 'wrongpassword');
    expect(authStore.error).toBeTruthy();
    
    authStore.clearError();
    expect(authStore.error).toBe(null);
  });

  it('translates Firebase error codes to Arabic', async () => {
    const testCases = [
      { code: 'auth/user-not-found', expected: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.' },
      { code: 'auth/wrong-password', expected: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.' },
      { code: 'auth/invalid-email', expected: 'البريد الإلكتروني غير صالح.' },
      { code: 'auth/unknown-error', expected: 'حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.' }
    ];

    const authStore = useAuthStore();

    for (const testCase of testCases) {
      mockSignInWithEmailAndPassword.mockRejectedValue({ code: testCase.code });
      
      await authStore.login('test@example.com', 'password');
      
      expect(authStore.error).toBe(testCase.expected);
      
      authStore.clearError();
    }
  });
});
