import { describe, expect, test } from "bun:test";

import * as v from "valibot";

import { AllPlatforms, AllPlatformsSchema, isAllPlatform } from "../src/platforms.ts";

describe("AllPlatforms", () => {
  test("exposes OpenPromo-compatible first-party values", () => {
    expect(AllPlatforms.FACEBOOK).toBe("FACEBOOK");
    expect(AllPlatforms.GOOGLE_BUSINESS).toBe("GOOGLE_BUSINESS");
    expect(AllPlatforms.TIKTOK).toBe("TIKTOK");
  });

  test("validates supported platform identifiers at runtime", () => {
    expect(v.parse(AllPlatformsSchema, "FACEBOOK")).toBe("FACEBOOK");
    expect(isAllPlatform("AMAZON_ADS")).toBe(true);
    expect(isAllPlatform("META")).toBe(false);
    expect(() => v.parse(AllPlatformsSchema, "META")).toThrow();
  });
});
