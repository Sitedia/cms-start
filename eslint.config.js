import eslintPlugin from '@eslint/js';
import typescriptEslint from 'typescript-eslint';

export default [
  { ignores: ['node_modules', 'dist'] },
  { plugins: { '@typescript-eslint': typescriptEslint.plugin } },

  // Parser for Typescript files
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Configurations
  eslintPlugin.configs.recommended,
  ...typescriptEslint.configs.strictTypeChecked.map((config) => ({
    files: ['**/*.ts'],
    ...config,
  })),

  // Custom configurations for Typescript files
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-extraneous-class': ['error', { allowEmpty: true }],
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
    },
  },
];
