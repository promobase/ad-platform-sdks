import * as v from "valibot";

/**
 * Canonical platform identifiers shared by Mosaic packages and consumers.
 * These are product/platform identities, not package or API-surface IDs.
 */
export const AllPlatforms = {
  FACEBOOK: "FACEBOOK",
  INSTAGRAM: "INSTAGRAM",
  TIKTOK: "TIKTOK",
  LINKEDIN: "LINKEDIN",
  YOUTUBE: "YOUTUBE",
  X: "X",
  THREADS: "THREADS",
  GOOGLE_BUSINESS: "GOOGLE_BUSINESS",
  SNAPCHAT: "SNAPCHAT",
  REDDIT: "REDDIT",
  PINTEREST: "PINTEREST",
  BLUESKY: "BLUESKY",
  GOOGLE_ADS: "GOOGLE_ADS",
  AMAZON_ADS: "AMAZON_ADS",
  WHATSAPP: "WHATSAPP",
} as const;

export type AllPlatform = (typeof AllPlatforms)[keyof typeof AllPlatforms];
/** Compatibility alias matching OpenPromo's shared content contract. */
export type AllPlatforms = AllPlatform;

const allPlatformValues = Object.values(AllPlatforms) as [AllPlatform, ...AllPlatform[]];

/** Runtime validation for canonical platform identifiers. */
export const AllPlatformsSchema = v.picklist(allPlatformValues);

export function isAllPlatform(value: unknown): value is AllPlatform {
  return v.is(AllPlatformsSchema, value);
}
