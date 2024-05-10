/** @format */

import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
    ignores: ['node_modules'],
  },
  pluginJs.configs.recommended,
];
