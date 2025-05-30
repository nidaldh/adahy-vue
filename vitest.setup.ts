import { vi } from 'vitest';

// Mock Firebase services for testing
const mockAuth = {
  currentUser: null,
  signInWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
  onAuthStateChanged: vi.fn((callback) => {
    // Mock the subscription and return an unsubscribe function
    callback(null);
    return vi.fn(); // unsubscribe function
  })
};

vi.mock('@/services/firebase', () => ({
  auth: mockAuth,
  database: {
    ref: vi.fn(() => ({
      push: vi.fn(),
      on: vi.fn(),
      off: vi.fn(),
      once: vi.fn()
    }))
  }
}));

// Mock vue-router
const mockRouter = {
  push: vi.fn().mockResolvedValue(undefined),
  replace: vi.fn().mockResolvedValue(undefined),
  go: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  currentRoute: {
    value: {
      name: 'Home',
      path: '/',
      params: {},
      query: {}
    }
  }
};

vi.mock('vue-router', async () => {
  const actual = await vi.importActual('vue-router')
  return {
    ...actual,
    useRouter: vi.fn(() => mockRouter),
    useRoute: vi.fn(() => ({
      params: {},
      query: {},
      path: '/',
      name: 'home'
    }))
  }
});

// Global test utilities
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
