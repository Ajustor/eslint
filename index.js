module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'babel'],
  rules: {
    indent: [
      'off',
      2,
      {
        ignoredNodes: ['ConditionalExpression'],
        MemberExpression: 1,
        SwitchCase: 1,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    complexity: ['error', 5],
    'no-console': 'error',
    'no-label-var': ['error'],
    eqeqeq: 'error',
    'id-denylist': ['error', 'data', 'value', 'e', 'cb', 'callback'],
    'id-length': 'error',
    'max-classes-per-file': ['error', 1],
    'no-else-return': ['error', { allowElseIf: false }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': ['error'],
    curly: 'error',
    'prefer-template': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'object-shorthand': ['error', 'always'],
  },
}
