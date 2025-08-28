// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,            // allows using expect, test, etc. without imports
    environment: 'jsdom',     // DOM-like environment
    setupFiles: './src/setupTests.ts', // file to run before tests
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
});
