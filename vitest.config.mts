import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts', '**/*.spec.ts', '**/*.ispec.ts', '**/*.test.ts'],
    globals: true,
    reporters: 'basic',
    pool: "threads",
    isolate: false,
    testTimeout: 50000,
  },
});
