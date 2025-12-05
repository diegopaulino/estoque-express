import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    fileParallelism: false,
    testTimeout: 1_000,
    hookTimeout: 5_000,
  },
});
