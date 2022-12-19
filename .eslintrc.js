module.exports = {
  parserOptions: {
    ecmaVersion: 2018
  },
  extends: ['eslint:recommended'],
  plugins: ['example'],
  rules: {
    "example/func-prefix-matching": [
      1,
      {
        include: ['some'],
        exclude: ['excludeSomeFunction']
      }
    ]
  }
}