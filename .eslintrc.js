const { off } = require("process");

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: 1,
  },
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["tsconfig.json"],
  },
  rules: {
    indent: [2, 4],
    "react/jsx-indent": [2, 4],
    // "react/jsx-filename-extension": [2, { extensions: ["js", "jsx", "tsx"] }],
    // "import/no-unresolved": "off",
    quotes: [2, "double", { avoidEscape: true }],
    "no-unused-vars": "warn",
  },
};