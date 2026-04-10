import type { LocationFields } from "./location.ts";
import type { PlaceFields } from "./place.ts";
import type { TargetingGeoLocationCityFields } from "./targeting-geo-location-city.ts";
import type { TargetingGeoLocationCustomLocationFields } from "./targeting-geo-location-custom-location.ts";
import type { TargetingGeoLocationElectoralDistrictFields } from "./targeting-geo-location-electoral-district.ts";
import type { TargetingGeoLocationGeoEntitiesFields } from "./targeting-geo-location-geo-entities.ts";
import type { TargetingGeoLocationLocationClusterFields } from "./targeting-geo-location-location-cluster.ts";
import type { TargetingGeoLocationMarketFields } from "./targeting-geo-location-market.ts";
import type { TargetingGeoLocationPlaceFields } from "./targeting-geo-location-place.ts";
import type { TargetingGeoLocationPoliticalDistrictFields } from "./targeting-geo-location-political-district.ts";
import type { TargetingGeoLocationRegionFields } from "./targeting-geo-location-region.ts";
import type { TargetingGeoLocationZipFields } from "./targeting-geo-location-zip.ts";

export interface TargetingGeoLocationFields {
  cities: TargetingGeoLocationCityFields[];
  countries: string[];
  country_groups: string[];
  custom_locations: TargetingGeoLocationCustomLocationFields[];
  electoral_districts: TargetingGeoLocationElectoralDistrictFields[];
  geo_markets: TargetingGeoLocationMarketFields[];
  large_geo_areas: TargetingGeoLocationGeoEntitiesFields[];
  location_cluster_ids: TargetingGeoLocationLocationClusterFields[];
  location_types: string[];
  medium_geo_areas: TargetingGeoLocationGeoEntitiesFields[];
  metro_areas: TargetingGeoLocationGeoEntitiesFields[];
  neighborhoods: TargetingGeoLocationGeoEntitiesFields[];
  places: TargetingGeoLocationPlaceFields[];
  political_districts: TargetingGeoLocationPoliticalDistrictFields[];
  regions: TargetingGeoLocationRegionFields[];
  small_geo_areas: TargetingGeoLocationGeoEntitiesFields[];
  subcities: TargetingGeoLocationGeoEntitiesFields[];
  subneighborhoods: TargetingGeoLocationGeoEntitiesFields[];
  zips: TargetingGeoLocationZipFields[];
}

