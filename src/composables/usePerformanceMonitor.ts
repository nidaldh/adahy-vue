/**
 * Performance monitoring utilities for the application
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Start measuring performance for a specific operation
   */
  startMeasurement(name: string): () => void {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      this.addMetric({
        name,
        value: duration,
        timestamp: Date.now()
      });
    };
  }

  /**
   * Add a custom metric
   */
  addMetric(metric: PerformanceMetric): void {
    this.metrics.push(metric);
    
    // Keep only last 100 metrics to prevent memory leaks
    if (this.metrics.length > 100) {
      this.metrics.shift();
    }
  }

  /**
   * Get all metrics or filter by name
   */
  getMetrics(name?: string): PerformanceMetric[] {
    if (name) {
      return this.metrics.filter(metric => metric.name === name);
    }
    return [...this.metrics];
  }

  /**
   * Get average performance for a specific metric
   */
  getAveragePerformance(name: string): number {
    const metrics = this.getMetrics(name);
    if (metrics.length === 0) return 0;
    
    const sum = metrics.reduce((acc, metric) => acc + metric.value, 0);
    return sum / metrics.length;
  }

  /**
   * Monitor Web Vitals
   */
  startWebVitalsMonitoring(): void {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Monitor Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        this.addMetric({
          name: 'LCP',
          value: lastEntry.startTime,
          timestamp: Date.now()
        });
      });

      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (e) {
        // LCP not supported
      }

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as any; // Type assertion for FID specific properties
          if (fidEntry.processingStart) {
            this.addMetric({
              name: 'FID',
              value: fidEntry.processingStart - entry.startTime,
              timestamp: Date.now()
            });
          }
        }
      });

      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (e) {
        // FID not supported
      }
    }
  }

  /**
   * Monitor route changes performance
   */
  measureRouteChange(fromRoute: string, toRoute: string): () => void {
    return this.startMeasurement(`route-change-${fromRoute}-to-${toRoute}`);
  }

  /**
   * Monitor component mount time
   */
  measureComponentMount(componentName: string): () => void {
    return this.startMeasurement(`component-mount-${componentName}`);
  }

  /**
   * Monitor API call performance
   */
  measureApiCall(apiName: string): () => void {
    return this.startMeasurement(`api-call-${apiName}`);
  }

  /**
   * Generate performance report
   */
  generateReport(): string {
    const report = {
      totalMetrics: this.metrics.length,
      averages: {} as Record<string, number>,
      recent: this.metrics.slice(-10)
    };

    // Calculate averages for each metric type
    const metricNames = [...new Set(this.metrics.map(m => m.name))];
    for (const name of metricNames) {
      report.averages[name] = this.getAveragePerformance(name);
    }

    return JSON.stringify(report, null, 2);
  }

  /**
   * Clear all metrics
   */
  clear(): void {
    this.metrics = [];
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();

/**
 * Vue composable for performance monitoring
 */
export function usePerformanceMonitor() {
  return {
    startMeasurement: performanceMonitor.startMeasurement.bind(performanceMonitor),
    addMetric: performanceMonitor.addMetric.bind(performanceMonitor),
    getMetrics: performanceMonitor.getMetrics.bind(performanceMonitor),
    getAveragePerformance: performanceMonitor.getAveragePerformance.bind(performanceMonitor),
    measureRouteChange: performanceMonitor.measureRouteChange.bind(performanceMonitor),
    measureComponentMount: performanceMonitor.measureComponentMount.bind(performanceMonitor),
    measureApiCall: performanceMonitor.measureApiCall.bind(performanceMonitor),
    generateReport: performanceMonitor.generateReport.bind(performanceMonitor)
  };
}
