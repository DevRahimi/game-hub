// @ts-check
import eslintjs from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintQuery from "@tanstack/eslint-plugin-query";
import eslintRouter from "@tanstack/eslint-plugin-router";
import globals from "globals";

export default tseslint.config({
  ignores: ["node_modules", ".output", ".vinxi"],
  extends: [
    eslintjs.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintRouter.configs["flat/recommended"],
    ...eslintQuery.configs["flat/recommended"],
    // ...tseslint.configs.strict,
    // ...tseslint.configs.stylistic
  ],
  files: ["**/*.{ts,tsx,js,jsx}"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@tanstack/router/create-route-property-order": "warn",
  },
});

// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:react-hooks/recommended",
//     "airbnb",
//     "airbnb-typescript",
//     "plugin:prettier/recommended",
//   ],
//   // Remove linting from dist, eslintrc.cjs and vite.config.ts
//   ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     project: "./tsconfig.json",
//   },
//   plugins: ["react-refresh"],
//   rules: {
//     "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
//     // Since react 17 we don't need to have React imported at the top
//     "react/react-in-jsx-scope": "off",
//     "import/order": "off",
//     "import/prefer-default-export": "off",
//     "react/jsx-props-no-spreading": "off",
//     "react/require-default-props": "off",
//     "react/button-has-type": "off",
//   },
// };
