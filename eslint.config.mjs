// import js from '@eslint/js';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import globals from 'globals';
// import tseslint from 'typescript-eslint';

// export default tseslint.config(
//   { ignores: ['dist'] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
//     },
//   },
// );
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
