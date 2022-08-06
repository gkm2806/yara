module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 0,
    'comma-dangle': 0,
    'space-before-function-paren': ['error', 'never'],
    'no-useless-constructor': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    'class-methods-use-this': 0,
    'curly': ['error', 'multi'],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'indent': 0,
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'max-classes-per-file': 0,
    'max-len': ['error', { 'code': 150, 'ignoreComments': true }],
    'no-await-in-loop': 0,
    'no-console': ['warn', { 'allow': ['warn', 'error', 'info'] }],
    'no-empty-function': 0,
    'no-extra-boolean-cast': 0,
    'no-plusplus': 0 ,
    'no-return-assign': 0,
    'no-shadow': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-useless-constructor': 0,
    'nonblock-statement-body-position': 0,
    'object-curly-newline': 0,
    'prefer-default-export': 0,
    'semi': [2, 'never']
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    }
  }
}
