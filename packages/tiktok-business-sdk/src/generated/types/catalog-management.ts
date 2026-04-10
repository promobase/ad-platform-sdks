// Auto-generated types for Catalog Management — do not edit

export interface CatalogCreateParams {}


export interface CatalogCreateResponse {}


export interface CatalogUpdateParams {}


export interface CatalogUpdateResponse {}


export interface CatalogDeleteParams {}


export interface CatalogDeleteResponse {}


export interface CatalogGetParams {}


export interface CatalogGetResponse {}


export interface CatalogLexiconGetParams {}


export interface CatalogLexiconGetResponse {}


export interface CatalogCapitalizeParams {}


export interface CatalogCapitalizeResponse {}


export interface CatalogAvailableCountryGetParams {}


export interface CatalogAvailableCountryGetResponse {}


export interface CatalogLocationCurrencyGetParams {}


export interface CatalogLocationCurrencyGetResponse {}


export interface CatalogOverviewParams {
  bc_id: string;
  catalog_id: string;
}


export interface CatalogOverviewResponse {
  code?: number;
  message?: string;
  data?: {
  approved?: number;
  rejected?: number;
  processing?: number;
  organic_approved?: number;
  organic_rejected?: number;
  organic_processing?: number;
};
  request_id?: string;
}

