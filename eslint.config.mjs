import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import globals from 'globals';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**', 'coverage/**'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [
      // TypeScript
      ...tseslint.configs.recommended,
      // React
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
      // React Hooks
      reactHooks.configs.flat.recommended,
      // Prettier (должен быть последним среди extends)
      eslintConfigPrettier,
    ],

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    plugins: {
      'simple-import-sort': simpleImportSort,
      prettier: prettierPlugin,
    },

    rules: {
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      quotes: [2, 'single'],

      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: { array: false, object: true },
          AssignmentExpression: { array: false, object: false },
        },
        { enforceForRenamedProperties: false },
      ],

      'no-unused-vars': 'off',

      'prettier/prettier': [
          'warn',
          {
            printWidth: 140,
            singleQuote: true,
          },
        ],

      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'react/prefer-stateless-function': 'off',
      'react/no-danger': 'off',
      'react/no-array-index-key': 'off',
      'react/function-component-definition': 'off',
      'react/display-name': 0,

      'max-len': 'off',
      'no-restricted-exports': 'off',
      'no-shadow': 'off',

      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['state', 'req'],
        },
      ],

      // simple-import-sort
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^\\w', '^@[^//]'],
            ['^@/'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$', '^\\./?.types$'],
            ['^.+\\.s?css$', '^.+\\.styled', '^.+\\.styles'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
]);
