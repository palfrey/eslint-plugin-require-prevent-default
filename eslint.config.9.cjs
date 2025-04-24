const { defineConfig } = require("eslint/config");
const plugin = require("eslint-plugin-eslint-plugin");
const babelParser = require("@babel/eslint-parser");

module.export = defineConfig([
  {
    plugins: {"eslint-plugin": plugin},
    extends: ["eslint-plugin/recommended"],
    languageOptions: {
      parser: babelParser,
    },
  },
]);
