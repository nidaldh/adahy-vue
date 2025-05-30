import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import LoginForm from '../LoginForm.vue';
import { useAuthStore } from '@/store/modules/auth';

describe('LoginForm.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it('renders login form elements correctly', async () => {
    vi.useFakeTimers();
    
    const wrapper = mount(LoginForm, {
      global: {
        stubs: {
          LoadingSpinner: true,
          ErrorMessage: true,
        }
      }
    });

    // Fast-forward past the initial loading timeout
    vi.advanceTimersByTime(500);
    await wrapper.vm.$nextTick();

    expect(wrapper.find('h2').text()).toBe('تسجيل الدخول');
    expect(wrapper.find('input#email').exists()).toBe(true);
    expect(wrapper.find('input#password').exists()).toBe(true);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
    
    vi.useRealTimers();
  });

  it('shows validation errors for invalid email', async () => {
    vi.useFakeTimers();
    
    const wrapper = mount(LoginForm, {
      global: {
        stubs: {
          LoadingSpinner: true,
          ErrorMessage: true,
        }
      }
    });

    // Fast-forward past the initial loading timeout
    vi.advanceTimersByTime(500);
    await wrapper.vm.$nextTick();

    const emailInput = wrapper.find('input#email');
    await emailInput.setValue('invalid-email');
    await emailInput.trigger('blur');

    // This test should check if the browser's native validation works
    expect((emailInput.element as HTMLInputElement).validity.valid).toBe(false);
    
    vi.useRealTimers();
  });

  it('calls login action on form submit with valid data', async () => {
    vi.useFakeTimers();
    
    const authStore = useAuthStore();
    const loginSpy = vi.spyOn(authStore, 'login').mockResolvedValue();

    const wrapper = mount(LoginForm, {
      global: {
        stubs: {
          LoadingSpinner: true,
          ErrorMessage: true,
        }
      }
    });

    // Fast-forward past the initial loading timeout
    vi.advanceTimersByTime(500);
    await wrapper.vm.$nextTick();

    await wrapper.find('input#email').setValue('test@example.com');
    await wrapper.find('input#password').setValue('password123');
    await wrapper.find('form').trigger('submit.prevent');

    expect(loginSpy).toHaveBeenCalledWith('test@example.com', 'password123');
    
    vi.useRealTimers();
  });

  it('disables submit button when loading', async () => {
    vi.useFakeTimers();
    
    const authStore = useAuthStore();
    authStore.loading = true;

    const wrapper = mount(LoginForm, {
      global: {
        stubs: {
          LoadingSpinner: true,
          ErrorMessage: true,
        }
      }
    });

    // Fast-forward past the initial loading timeout
    vi.advanceTimersByTime(500);
    await wrapper.vm.$nextTick();

    const submitButton = wrapper.find('button[type="submit"]');
    expect(submitButton.attributes('disabled')).toBeDefined();
    
    vi.useRealTimers();
  });

  it('displays error message when login fails', async () => {
    vi.useFakeTimers();
    
    const authStore = useAuthStore();
    authStore.error = 'Invalid credentials';

    const wrapper = mount(LoginForm, {
      global: {
        stubs: {
          LoadingSpinner: true,
          ErrorMessage: false, // Don't stub this to test error display
        }
      }
    });

    // Fast-forward past the initial loading timeout
    vi.advanceTimersByTime(500);
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain('Invalid credentials');
    
    vi.useRealTimers();
  });
});
