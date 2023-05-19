module.exports = {
  env: { browser: true, es2020: true, es2022: true },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['**/*.cjs'],
      env: {
        node: true,
      },
    },
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  extends: [
    // By extending from a plugin config, we can get recommended rules without having to add them manually.
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:import/typescript',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'eslint-config-prettier',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'simple-import-sort', 'prettier'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    quotes: [2, 'single'],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none', varsIgnorePattern: '^_' }],
    'prettier/prettier': [
      'warn',
      {
        printWidth: 140,
        singleQuote: true,
      },
    ],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/require-default-props': 'off',
    'css-modules/no-unused-class': [0, { camelCase: true }],
    'css-modules/no-undef-class': [0, { camelCase: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': ['error', { packageDir: './', devDependencies: true }],
    'react/prefer-stateless-function': 'off',
    'react/no-danger': 'off',
    'react/no-array-index-key': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['route'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'import/order': 0,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages. `react` related packages come first.
          ['^react', '^\\w', '^@[^//]'],
          // src imports. Put `..` last.
          ['^@/'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$', '^\\./?.types$'],
          // Style imports.
          ['^.+\\.s?css$', '^.+\\.styled', '^.+\\.styles'],
        ],
      },
    ],
    'react/function-component-definition': 'off',
    'no-restricted-exports': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'req'],
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/no-named-as-default-member': 'off',
    'react/display-name': 0,
  },
};
