/** @ts-check @type import('eslint-config-standard-typescript-prettier/types').TsEslintConfig */
const config = require('eslint-config-standard-typescript-prettier');

module.exports = {
  ...config,
  parserOptions: { project: './tsconfig.json' },
  include: [
    '.eslintrc.js',
    'next.config.js',
  ],
  rules: {
    ...config.rules,
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
