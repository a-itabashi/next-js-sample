module.exports = {
  ignorePatterns: [
    "!.eslintrc.js",
    "!.prettierrc.js",
    "!.stylelintrc.js",
    "design/*",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "import"],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    camelcase: "error",
    eqeqeq: ["error", "always"],
    "import/order": [
      "error",
      {
        pathGroups: [{ pattern: "@root/**", group: "internal" }],
        pathGroupsExcludedImportTypes: ["builtin"],
        groups: [
          "builtin",
          "external",
          "internal",
          "index",
          "sibling",
          "parent",
        ],
        "newlines-between": "always",
      },
    ],
    "import/no-unresolved": "off",
    "no-restricted-imports": ["error", { patterns: ["../"] }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
