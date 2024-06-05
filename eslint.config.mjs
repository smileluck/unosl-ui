import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default [
  {
    ignores: [
      "dist",
      "node_modules",
      "public",
      ".husky",
      ".vscode",
      ".idea",
      "*.sh",
      "*.md",
      "site/docs",
      "src/assets",
      ".eslintrc.cjs",
      ".prettierrc.cjs",
      ".stylelintrc.cjs"
    ]
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];