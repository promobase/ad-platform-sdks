// @generated
// fingerprint: sha256:61de9dc17c7d4b532a251f6e738abd498fd2f02edea0ea713fdb6d95316b1805
// DO NOT EDIT: generated file; changes will be overwritten.
import type { LocationFields } from "./location.ts";
import type { TargetingGeoLocationFields } from "./targeting-geo-location.ts";
import type { AdAssetCustomizationRuleCustomizationSpecDevicePlatforms } from "../enums.ts";

export interface AdAssetCustomizationRuleCustomizationSpecFields {
  age_max: number;
  age_min: number;
  audience_network_positions: string[];
  device_platforms: AdAssetCustomizationRuleCustomizationSpecDevicePlatforms[];
  facebook_positions: string[];
  geo_locations: TargetingGeoLocationFields;
  instagram_positions: string[];
  locales: number[];
  messenger_positions: string[];
  publisher_platforms: string[];
  threads_positions: string[];
}

