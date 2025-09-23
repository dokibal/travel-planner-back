import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.spec.ts'],
    globals: true,
    restoreMocks: true,
    environment: 'node',
    reporters: ['verbose', 'html'],
    outputFile: './test-report/results.html',
    coverage: {
      provider: 'v8',
      reporter: ['html', 'lcov'],
      exclude: [
        ...configDefaults.exclude,
        'test-report/',
        '**/*.module.ts',
        '**/*.data.ts',
        '**/*.dto.ts',
        'src/config.schema.ts',
        'src/enums.ts',
        'src/main.ts',
        'src/modules/prisma/',
      ],
    },
  },
});
