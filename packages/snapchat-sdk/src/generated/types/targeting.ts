// @generated
// fingerprint: sha256:d59550637090837786e30578d6b41e5fe3e506733806a9f3a46e2e0c7d3ec4f2
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for targeting — do not edit

export interface Option {}


export interface AgeGroup {
  name: string;
  id: string;
}


export interface Gender {
  name: string;
  id: string;
}


export interface Languages {
  id: string;
  name: string;
}


export interface AdvancedDemographics {
  name: string;
  id: string;
}


export interface OsType {
  id: string;
  name: string;
}


export interface Carrier {
  id: string;
  name: string;
  valid_country: string;
}


export interface MarketingName {}


export interface Country {}


export interface Metro {
  lat: number;
  lon: number;
  continent: {
  id: string;
  name: string;
};
  country: {
  id: string;
  name: string;
  code: string;
  code2: string;
};
  metro: {
  id: string;
  name: string;
  regions: string;
};
}


export interface PostalCode {
  country_code?: string;
  cursor?: string;
  limit?: string;
}


export interface Scl {
  country_code?: string;
  is_hec?: string;
  limit?: string;
}


export interface Vac {
  country_code?: string;
  is_hec?: string;
  limit?: string;
}


export interface Shp {
  country_code?: string;
  limit?: string;
}


export interface Dlxs {
  name: string;
  id: string;
}


export interface Dlxc {
  name: string;
  id: string;
}


export interface Dlxp {
  id: string;
  name: string;
}


export interface Nln {
  id: string;
  name: string;
  path: string;
  source: string;
}


export interface CategoriesLoi {
  proximity: string;
  proximity_unit: string;
}


export interface ListOptionsParams {
  country_code: string;
  is_intl_vac_enabled?: string;
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListAgeGroupParams {
  min_age?: string;
  max_age?: "13" | "-" | "55";
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListGenderParams {
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListLanguagesParams {
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListAdvancedDemographicsParams {
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListConnectionTypeParams {
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListOsTypeParams {
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListOsVersionParams {
  oSTYPE: string;
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListCarrierParams {
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListMarketingNameParams {
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListCountryParams {
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListRegionParams {
  countryCode: string;
  country_code?: string;
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListMetroParams {
  countryCode: string;
  country_code?: string;
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListPostalCodeParams {
  countryCode: string;
  cursor?: string;
  limit?: string;
  country_code?: string;
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListSclsParams {
  country_code?: string;
  is_hec?: string;
  limit?: string;
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListVacParams {
  country_code?: string;
  is_hec?: string;
  limit?: string;
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListShpParams {
  country_code?: string;
  limit?: string;
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListDlxsParams {
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListDlxcParams {
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListDlxpParams {
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListNlnParams {
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}


export interface ListCategoriesLoiParams {
  proximity: string;
  proximity_unit: string;
  "Get a specific Ad Squad by ID"?: string;
  "Get all Ad Squads under a Campaign"?: string;
  "Get a specific Targeting Spec by ID"?: string;
  "Get all Targeting Specs under an Ad Squad"?: string;
}
