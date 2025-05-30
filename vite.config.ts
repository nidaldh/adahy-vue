/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({ 
      open: true, 
      gzipSize: true, 
      brotliSize: true,
      filename: 'dist/stats.html' 
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000, // Optional: define dev server port
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/**/*.spec.ts',
        'src/**/*.test.ts',
        'src/**/__tests__/**',
        'vitest.setup.ts',
        'src/vite-env.d.ts',
        'src/main.ts',
        '**/*.d.ts'
      ],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80
      }
    }
  },
})
