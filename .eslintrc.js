module.exports = {
  settings: {
    react: {
      "version": "detect"
    }
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ["eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:i18next/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next", "react-hooks"],
  rules: {
    indent: [1, 2],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
        ignoreAttribute: ["data-testid", "to"],
      },
    ],
    "max-len": ["error", { ignoreComments: true, code: 110 }],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
  overrides: [
    {
      files: ["**/src/**/*.{test,stories}.{ts,tsx}", "./config//jest//jestEmptyComponent.tsx"],
      rules: {
        "i18next/no-literal-string": "off",
        "max-len": "off",
      },
    },
  ],
};
