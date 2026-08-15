// @generated
// fingerprint: sha256:32bdd1c5d0d7609c4ad675694525e8e7c9022fd19ab7b388345ea2da6dc3f86d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
import type { ProductFeedRuleSuggestionFields } from "./product-feed-rule-suggestion.ts";
import type { ProductFeedUploadErrorSampleFields } from "./product-feed-upload-error-sample.ts";
import type { ProductFeedUploadErrorAffectedSurfaces, ProductFeedUploadErrorSeverity } from "../enums.ts";

export interface ProductFeedUploadErrorFields {
  affected_surfaces: ProductFeedUploadErrorAffectedSurfaces[];
  description: string;
  error_type: string;
  id: string;
  severity: ProductFeedUploadErrorSeverity;
  summary: string;
  total_count: number;
}

export function productFeedUploadErrorNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductFeedUploadErrorFields,
    get: <F extends (keyof ProductFeedUploadErrorFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductFeedUploadErrorFields, F[number]>>(`${id}`, opts),
    samples: <F extends (keyof ProductFeedUploadErrorSampleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProductFeedUploadErrorSampleFields, F[number]>>(client, `${id}/samples`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
    suggestedRules: <F extends (keyof ProductFeedRuleSuggestionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProductFeedRuleSuggestionFields, F[number]>>(client, `${id}/suggested_rules`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

