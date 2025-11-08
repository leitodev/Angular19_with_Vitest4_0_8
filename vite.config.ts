/// <reference types="vitest" />
import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

export default defineConfig(async ({ mode }) => {
  const { default: angular } = await import('@analogjs/vite-plugin-angular');

  return {
    plugins: [angular(), viteTsConfigPaths()],
    test: {
      globals: true,
      environment: 'jsdom',
      environmentOptions: {
        // Optional: customize jsdom
        // url: 'http://localhost/',
      },
      setupFiles: ['./src/test-setup.ts'],
      include: ['src/**/*.{test,spec}.ts'],
      reporters: ['default'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
      },
      // Force resolve jsdom@21
      resolve: {
        alias: {
          jsdom: fileURLToPath(import.meta.resolve('jsdom')),
        },
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
