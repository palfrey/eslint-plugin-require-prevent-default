import { defineConfig } from "eslint/config";
import plugin from "eslint-plugin-eslint-plugin";
import babelParser from "@babel/eslint-parser";

export default defineConfig([
  {
    plugins: [plugin],
    extends: [plugin.configs["flat/recommended"]],
    languageOptions: {
      parser: babelParser,
    },
  },
]);
