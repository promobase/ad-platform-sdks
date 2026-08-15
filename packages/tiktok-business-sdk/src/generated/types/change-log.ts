// @generated
// fingerprint: sha256:7b369f736bbd730ac913d02576a153ea6988d5f63ea3c18e9f5935892b40d668
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Change Log — do not edit

export interface ChangelogTaskCreateParams {
  advertiser_id: string;
  start_time?: string;
  end_time?: string;
  timezone?: string;
  module?: string;
  object_ids?: string[];
  object_type?: string;
  operation_types?: string[];
  order_fields?: string[];
}


export interface ChangelogTaskCreateResponse {
  task_id?: string;
}


export interface ChangelogTaskCheckParams {
  advertiser_id: string;
  task_id: string;
}


export interface ChangelogTaskCheckResponse {
  status?: string;
}


export interface ChangelogTaskDownloadParams {
  advertiser_id: string;
  task_id: string;
}


export interface ChangelogTaskDownloadResponse {
  status?: "PROCESSING" | "SUCCESS" | "FAILED";
  changelog?: string;
}
