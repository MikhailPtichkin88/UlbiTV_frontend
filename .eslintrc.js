module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: 1,
    jest: true,
  },
  plugins: ["react", "i18next", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:i18next/recommended"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["tsconfig.json"],
  },
  rules: {
    indent: [1, 2],
    "react/jsx-indent": [1, 2],
    "react/jsx-filename-extension": [2, { extensions: ["js", "jsx", "tsx"] }],
    // "import/no-unresolved": "off",
    quotes: [
      2,
      "double",
      {
        avoidEscape: true,
      },
    ],
    "no-unused-vars": "warn",
    "react/jsx-props-no-spreading": "warn",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "i18next/no-literal-string": ["error", {markupOnly:true}]
  },
};
