module.exports = {
  // env: {
  //   browser: true,
  //   es2021: true,
  //   node: true,
  // },
  // extends: [
  //   'eslint:recommended',
  //   'plugin:vue/essential',
  //   'plugin:@typescript-eslint/recommended',
  // ],
  // parserOptions: {
  //   ecmaVersion: 12,
  //   parser: '@typescript-eslint/parser',
  //   sourceType: 'script',
  // },
  // plugins: ['vue', '@typescript-eslint'],
  // rules: {},

  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    ecmaVersion: 12
  },
  plugins: ['vue', '@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    // 'plugin:vue/vue3-recommended', // plugin-vue
    'plugin:prettier/recommended', // plugin-prettier

    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended'
  ],

  rules: {
    '@typescript-eslint/no-var-requires': 0, // 不检查 requrie
    'prettier/prettier': 'error'
  }
}
