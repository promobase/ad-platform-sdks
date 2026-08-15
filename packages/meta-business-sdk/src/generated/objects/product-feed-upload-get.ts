// @generated
// fingerprint: sha256:2f9e04a322982feb25d3268bd3bddb7b14cf6a866a557519a99d77f93ec2f526
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ProductFeedUploadGetInputMethod } from "../enums.ts";

export interface ProductFeedUploadGetFields {
  end_time: unknown;
  error_count: number;
  error_report: unknown;
  errors: unknown;
  filename: string;
  id: number;
  input_method: ProductFeedUploadGetInputMethod;
  num_deleted_items: number;
  num_detected_items: number;
  num_invalid_items: number;
  num_persisted_items: number;
  progresses: unknown;
  start_time: unknown;
  upload_complete: boolean;
  url: string;
  warning_count: number;
}

