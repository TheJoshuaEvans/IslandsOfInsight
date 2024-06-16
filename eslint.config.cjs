const js = require('@eslint/js');
const globals = require('globals');
const stylisticJs = require('@stylistic/eslint-plugin-js');

module.exports = [
  js.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/js/quotes': ['error', 'single', {'allowTemplateLiterals': true}],
      '@stylistic/js/semi': ['error', 'always'],
      'prefer-const': 'error',
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
];
