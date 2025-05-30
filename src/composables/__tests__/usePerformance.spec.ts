import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { ref, nextTick } from 'vue';
import { useDebounce, useThrottle } from '../usePerformance';

describe('usePerformance', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('useDebounce', () => {
    it('should return initial value immediately', () => {
      const value = ref('initial');
      const debouncedValue = useDebounce(value);

      expect(debouncedValue.value).toBe('initial');
    });

    it('should debounce value changes', async () => {
      const value = ref('initial');
      const debouncedValue = useDebounce(value, 300);

      // Change value multiple times quickly
      value.value = 'first';
      value.value = 'second';
      value.value = 'third';

      // Should still be initial value
      expect(debouncedValue.value).toBe('initial');

      // Fast forward time
      vi.advanceTimersByTime(300);
      await nextTick();

      // Should now be the final value
      expect(debouncedValue.value).toBe('third');
    });

    it('should cancel previous debounce when value changes quickly', async () => {
      const value = ref('initial');
      const debouncedValue = useDebounce(value, 300);

      value.value = 'first';
      vi.advanceTimersByTime(200); // Not enough time

      value.value = 'second';
      vi.advanceTimersByTime(200); // Not enough time again

      value.value = 'final';
      vi.advanceTimersByTime(300); // Full time
      await nextTick();

      expect(debouncedValue.value).toBe('final');
    });

    it('should work with custom delay', async () => {
      const value = ref('initial');
      const debouncedValue = useDebounce(value, 500);

      value.value = 'changed';
      vi.advanceTimersByTime(300);
      await nextTick();

      // Should still be initial
      expect(debouncedValue.value).toBe('initial');

      vi.advanceTimersByTime(200);
      await nextTick();

      // Now should be changed
      expect(debouncedValue.value).toBe('changed');
    });
  });

  describe('useThrottle', () => {
    it('should call function immediately on first call', () => {
      const mockFn = vi.fn();
      const throttledFn = useThrottle(mockFn, 300);

      throttledFn('arg1', 'arg2');

      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
    });

    it('should throttle subsequent calls', () => {
      const mockFn = vi.fn();
      const throttledFn = useThrottle(mockFn, 300);

      // First call should go through
      throttledFn('call1');
      expect(mockFn).toHaveBeenCalledTimes(1);

      // Second call should be throttled
      throttledFn('call2');
      expect(mockFn).toHaveBeenCalledTimes(1);

      // Third call should also be throttled
      throttledFn('call3');
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should allow calls after throttle period', () => {
      const mockFn = vi.fn();
      const throttledFn = useThrottle(mockFn, 300);

      // First call
      throttledFn('call1');
      expect(mockFn).toHaveBeenCalledTimes(1);

      // Fast forward time
      vi.advanceTimersByTime(300);

      // Next call should go through
      throttledFn('call2');
      expect(mockFn).toHaveBeenCalledTimes(2);
      expect(mockFn).toHaveBeenLastCalledWith('call2');
    });

    it('should work with custom delay', () => {
      const mockFn = vi.fn();
      const throttledFn = useThrottle(mockFn, 500);

      throttledFn('call1');
      expect(mockFn).toHaveBeenCalledTimes(1);

      vi.advanceTimersByTime(300);
      throttledFn('call2');
      expect(mockFn).toHaveBeenCalledTimes(1); // Still throttled

      vi.advanceTimersByTime(200);
      throttledFn('call3');
      expect(mockFn).toHaveBeenCalledTimes(2); // Now allowed
    });

    it('should preserve function return value', () => {
      const mockFn = vi.fn().mockReturnValue('result');
      const throttledFn = useThrottle(mockFn, 300);

      const result = throttledFn('arg');
      expect(result).toBe('result');
    });
  });
});
