module.exports = {
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      extends: 'standard-with-typescript'
    }
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    'semi': 'off',
    '@typescript-eslint/semi': 'error'
  },
  "parserOptions": {
    "project": "./tsconfig.json",
    "sourceType": "module"
  }
}
