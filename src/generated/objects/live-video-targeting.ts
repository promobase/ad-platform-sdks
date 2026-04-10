import type { LocationFields } from "./location.ts";
import type { TargetingGeoLocationFields } from "./targeting-geo-location.ts";

export interface LiveVideoTargetingFields {
  age_max: number;
  age_min: number;
  excluded_countries: string[];
  geo_locations: TargetingGeoLocationFields;
}

