import type { ApiClient } from "@promobase/sdk-runtime";
import type { LocationFields } from "./location.ts";
import type { TargetingGeoLocationCityFields } from "./targeting-geo-location-city.ts";
import type { TargetingGeoLocationCustomLocationFields } from "./targeting-geo-location-custom-location.ts";
import type { TargetingGeoLocationMarketFields } from "./targeting-geo-location-market.ts";
import type { TargetingGeoLocationRegionFields } from "./targeting-geo-location-region.ts";
import type { TargetingGeoLocationZipFields } from "./targeting-geo-location-zip.ts";

export interface AdSavedLocationFields {
  cities: TargetingGeoLocationCityFields[];
  countries: string[];
  country_groups: string[];
  custom_locations: TargetingGeoLocationCustomLocationFields[];
  geo_markets: TargetingGeoLocationMarketFields[];
  id: string;
  location_sentences: string[];
  name: string;
  regions: TargetingGeoLocationRegionFields[];
  zips: TargetingGeoLocationZipFields[];
}

export function adSavedLocationNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdSavedLocationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdSavedLocationFields, F[number]>>(`${id}`, opts),
  };
}

