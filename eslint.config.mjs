import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config([
  globalIgnores(["dist", "node_modules/**", "eslint.config.*"]),

  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Base JS recommendations
      eslint.configs.recommended,
      // TypeScript: strict + stylistic (type-aware variants)
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      eslintPluginPrettierRecommended,
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: "commonjs",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      "@typescript-eslint/no-extraneous-class": [
        "error",
        {
          allowEmpty: true,
        },
      ],
      // '@typescript-eslint/no-confusing-void-expression': 'off',
      // '@typescript-eslint/consistent-type-definitions': 'off',
      // '@typescript-eslint/no-explicit-any': 'off',
      // '@typescript-eslint/no-floating-promises': 'warn',
      // '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },
]);
