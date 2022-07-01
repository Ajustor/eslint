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
  plugins: ['@typescript-eslint'],
  rules: {
    'sort-keys': ['error', 'asc'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    complexity: ['error', 5],
    'no-console': 'error',
    'no-label-var': ['error'],
    eqeqeq: 'error',
    'id-denylist': ['data', 'value', 'e', 'cb', 'callback'],
    'id-length': 'error',
    'max-classes-per-file': ['error', 1],
    'no-else-return': ['error', { allowElseIf: false }],
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
  },
}
