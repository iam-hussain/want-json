module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["airbnb-base", "plugin:import/errors", "plugin:import/warnings"],
  settings: {
    "import/resolver": {
      "babel-module": {},
    },
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "consistent-return": 2,
    indent: [1, 4],
    "no-else-return": 1,
    semi: [1, "always"],
    "space-unary-ops": 2,
  },
};
