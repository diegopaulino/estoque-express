import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    languageOptions: {
      // Define environments for this configuration object
      globals: {
        // Node.js globals
        process: "readonly",
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        __filename: "readonly",

        // Browser globals (example)
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
      },
    },
    rules: {
      // Custom rules
      "no-unused-vars": "warn",
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: { globals: globals.browser },
    plugins: { js },
    extends: ["js/recommended"],
  },
  { files: ["**/*.js"], plugins: { js }, extends: ["js/recommended"] },
]);
