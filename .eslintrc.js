module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  // parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  rules: {
    'vue/multi-word-component-names': 0
  }
}
