import { init } from '@fullstacksjs/eslint-config';

export default [
  ...init({
    typescript: {
      // Point to the specific tsconfig files
      project: ['./tsconfig.app.json', './tsconfig.node.json'],
      tsconfigRootDir: '.',
    },
    react: true,
    strict: true,
    prettier: true,
    tailwind: true,
  }),
  {
    // Global ignores
    ignores: ['dist', 'build', 'node_modules'],
  },
  {
    // Configuration for source files
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: '.',
      },
    },
  },
  {
    // Configuration for Vite config and other node files
    files: ['*.config.{ts,js}', 'scripts/**/*.{ts,js}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.node.json',
        tsconfigRootDir: '.',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'import/no-default-export': 'off',
    },
  },
];
