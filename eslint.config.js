// @ts-check
import eslintjs from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintQuery from "@tanstack/eslint-plugin-query";
import eslintRouter from "@tanstack/eslint-plugin-router";
import globals from "globals";

export default [
  {
    ignores: ["**/node_modules/**", "**/.output/**", "**/.vinxi/**", "**/dist/**"],
  },
  ...tseslint.config({
    ignores: ["**/node_modules/**", "**/.output/**", "**/.vinxi/**", "**/dist/**"],
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
  }),
];
