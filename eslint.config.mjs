import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import prettierPlugin from "eslint-plugin-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    "node_modules/**",
    ".next/**",
    ".dist/**",
    "out/**",
    "build/**",
    "public/**",
    "next-env.d.ts",
  ]),
  {
    files: ["**/*.{ts,js,tsx,jsx,mjs,cjs}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "no-unused-vars": "off",
      "react/jsx-uses-vars": "error",
      "no-undef": "error",
      "no-unreachable": "error",
      "no-constant-condition": "warn",
      "no-debugger": "error",

      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
      "no-useless-return": "error",
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-shadow": "error",

      "no-process-exit": "warn",
      "no-sync": "warn",

      semi: "off",
      quotes: "off",
      indent: "off",
      "comma-dangle": "off",
      "object-curly-spacing": "off",
      "arrow-spacing": "off",
      "prettier/prettier": "error",

      "no-console": "warn",
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "max-lines": ["warn", 300],
      "max-depth": ["warn", 4],

      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
]);

export default eslintConfig;
