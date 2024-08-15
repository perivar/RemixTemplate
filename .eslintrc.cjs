/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  ignorePatterns: ['!**/.server', '!**/.client'],

  // Base config
  extends: ['eslint:recommended'],

  overrides: [
    // React
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: [
        'react',
        'jsx-a11y',
        'prettier',
        'simple-import-sort',
        'unused-imports',
      ],
      extends: [
        'prettier',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      rules: {
        semi: 'off',
        curly: 'off',
        radix: ['warn', 'as-needed'],
        'no-console': 'off',
        'react/self-closing-comp': 'off',
        'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
        'react-hooks/exhaustive-deps': 'off',
        'react-native/no-color-literals': 'off',
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'unused-imports/no-unused-imports-ts': 'warn',
        'prettier/prettier': 'error',
        'simple-import-sort/imports': 'error',
        // have to disable since eslint reports errors on enums
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
      },
      settings: {
        react: {
          version: 'detect',
        },
        formComponents: ['Form'],
        linkComponents: [
          { name: 'Link', linkAttribute: 'to' },
          { name: 'NavLink', linkAttribute: 'to' },
        ],
        'import/resolver': {
          typescript: {},
        },
      },
    },

    // Typescript
    {
      files: ['**/*.{ts,tsx}'],
      plugins: ['@typescript-eslint', 'import'],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/internal-regex': '^~/',
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx'],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
      ],
    },

    // Node
    {
      files: ['.eslintrc.cjs'],
      env: {
        node: true,
      },
    },
  ],
};
