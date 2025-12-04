import { beforeAll, describe, it, expect } from "vitest";
import orchestrator from "./tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("POST /status", () => {
  describe("Anonymous user", () => {
    it("Retrieving current system status", async () => {
      const response = await fetch("http://localhost:3000/status", {
        method: "POST",
      });

      expect(response.status).toBe(405);

      expect(response.statusText).toBe("Method Not Allowed");
    });
  });
});
