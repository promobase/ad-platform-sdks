// @generated
// fingerprint: sha256:8d9695a17a86ba72ca52675f3b7abf115370070370f65670861259405fa08e2f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
import type { AdsPixelFields } from "./ads-pixel.ts";
import type { ApplicationFields } from "./application.ts";
import type { BrandRequestFields } from "./brand-request.ts";
import type { BusinessFields } from "./business.ts";
import type { CustomConversionFields } from "./custom-conversion.ts";
import type { OfflineConversionDataSetFields } from "./offline-conversion-data-set.ts";
import type { PartnerStudyFields } from "./partner-study.ts";

export interface AdStudyObjectiveFields {
  id: string;
  is_primary: boolean;
  last_updated_results: string;
  name: string;
  results: string[];
  type: string;
}

export interface AdStudyObjectiveUpdateParams {
  adspixels?: Record<string, unknown>[];
  applications?: Record<string, unknown>[];
  customconversions?: Record<string, unknown>[];
  is_primary?: boolean;
  name?: string;
  offline_conversion_data_sets?: Record<string, unknown>[];
  offsite_datasets?: Record<string, unknown>[];
  product_catalogs?: Record<string, unknown>[];
  product_sets?: Record<string, unknown>[];
  type?: string;
  [key: string]: unknown;
}

export function adStudyObjectiveNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdStudyObjectiveFields,
    get: <F extends (keyof AdStudyObjectiveFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdStudyObjectiveFields, F[number]>>(`${id}`, opts),
    update: (params: AdStudyObjectiveUpdateParams) =>
      client.post<AdStudyObjectiveFields>(`${id}`, params as Record<string, unknown>),
    adspixels: <F extends (keyof AdsPixelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdsPixelFields, F[number]>>(client, `${id}/adspixels`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    applications: <F extends (keyof ApplicationFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ApplicationFields, F[number]>>(client, `${id}/applications`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    brandRequests: <F extends (keyof BrandRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BrandRequestFields, F[number]>>(client, `${id}/brand_requests`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    customconversions: <F extends (keyof CustomConversionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<CustomConversionFields, F[number]>>(client, `${id}/customconversions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    offlineConversionDataSets: <F extends (keyof OfflineConversionDataSetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<OfflineConversionDataSetFields, F[number]>>(client, `${id}/offline_conversion_data_sets`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    partnerPrivateStudies: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/partner_private_studies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    partnerstudies: <F extends (keyof PartnerStudyFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<PartnerStudyFields, F[number]>>(client, `${id}/partnerstudies`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

