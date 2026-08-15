// @generated
// fingerprint: sha256:00cc74c4d8ffafa8d24d7a9eb056727cecbb0f32e636840e75630ea50ab4316f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { LocationFields } from "./location.ts";
import type { TargetingGeoLocationFields } from "./targeting-geo-location.ts";
import type { AdAssetTargetRuleTargetingDevicePlatforms, TargetingDevicePlatforms } from "../enums.ts";

export interface AdAssetTargetRuleTargetingFields {
  age_max: number;
  age_min: number;
  audience_network_positions: string[];
  device_platforms: AdAssetTargetRuleTargetingDevicePlatforms[];
  facebook_positions: string[];
  geo_locations: TargetingGeoLocationFields;
  instagram_positions: string[];
  publisher_platforms: string[];
  threads_positions: string[];
  whatsapp_positions: string[];
}

