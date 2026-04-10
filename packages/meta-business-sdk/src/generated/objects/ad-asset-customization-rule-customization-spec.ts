import type { LocationFields } from "./location.ts";
import type { TargetingGeoLocationFields } from "./targeting-geo-location.ts";

export interface AdAssetCustomizationRuleCustomizationSpecFields {
  age_max: number;
  age_min: number;
  audience_network_positions: string[];
  device_platforms: string[];
  facebook_positions: string[];
  geo_locations: TargetingGeoLocationFields;
  instagram_positions: string[];
  locales: number[];
  messenger_positions: string[];
  publisher_platforms: string[];
  threads_positions: string[];
}

