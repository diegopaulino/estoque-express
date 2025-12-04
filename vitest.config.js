import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    fileParallelism: false,
    testTimeout: 1000,
    hookTimeout: 1000,
  },
});
