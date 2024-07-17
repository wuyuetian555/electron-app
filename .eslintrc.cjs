/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@electron-toolkit',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'standard/no-callback-literal': 'off',
    'no-var': 'error', // 禁用var，用let和const代替
    'space-before-function-paren': [0, 'always'], // 函数定义时括号前面要不要有空格
    'eol-last': 0,
    'no-multiple-empty-lines': [1, { max: 3 }] // 空行最多不能超过2行
  }
}
