// @generated
// fingerprint: sha256:76a78ed28bc0b98b2522ef05b03723f6b984036a7780c1f134a6e4dfc162dd14
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
import type { ProductFeedUploadErrorFields } from "./product-feed-upload-error.ts";
import type { ProductFeedUploadErrorReportFields } from "./product-feed-upload-error-report.ts";
import type { ProductFeedUploadInputMethod } from "../enums.ts";

export interface ProductFeedUploadFields {
  end_time: string;
  error_count: number;
  error_report: ProductFeedUploadErrorReportFields;
  filename: string;
  id: string;
  input_method: ProductFeedUploadInputMethod;
  num_deleted_items: number;
  num_detected_items: number;
  num_invalid_items: number;
  num_persisted_items: number;
  start_time: string;
  url: string;
  warning_count: number;
}

export interface ProductFeedUploadListErrorsParams {
  error_priority?: string;
  [key: string]: unknown;
}

export function productFeedUploadNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ProductFeedUploadFields,
    get: <F extends (keyof ProductFeedUploadFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProductFeedUploadFields, F[number]>>(`${id}`, opts),
    createErrorReport: (params: Record<string, unknown>) =>
      client.post<ProductFeedUploadFields>(`${id}/error_report`, params as Record<string, unknown>),
    errors: <F extends (keyof ProductFeedUploadErrorFields)[]>(opts: { fields: F; params?: ProductFeedUploadListErrorsParams }) =>
      new Cursor<Pick<ProductFeedUploadErrorFields, F[number]>>(client, `${id}/errors`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

