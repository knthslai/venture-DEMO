module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-children-prop': 'off',
    'no-case-declarations': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'no-debugger': 'off'
  },

  overrides: [
    {
      files: ['*.ejs.t'],
      rules: {
        'eol-last': 0
      }
    }
  ]
};
