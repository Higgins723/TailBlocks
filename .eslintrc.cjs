module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'stories'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': ['error', {
      singleQuote: true,
      jsxSingleQuote: true
    }],
    'import/prefer-default-export': 'off',
    'react/no-unknown-property': ['error', { 'ignore': ['css'] }],
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
