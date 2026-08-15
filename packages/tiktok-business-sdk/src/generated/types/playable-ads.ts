// @generated
// fingerprint: sha256:063cec72d11049e9c37ed814f18c452cd95fd44d9c49db758dbc6da6dcd98d78
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Playable Ads — do not edit

export interface PlayableUploadParams {
  advertiser_id: string;
  upload_type?: "UPLOAD_BY_FILE" | "UPLOAD_BY_FILE_ID";
  playable_package?: File | Blob;
  file_id?: string;
}


export interface PlayableUploadResponse {
  playable_id?: string;
}


export interface PlayableValidateParams {
  advertiser_id: string;
  playable_id: string;
}


export interface PlayableValidateResponse {}


export interface PlayableSaveParams {
  advertiser_id: string;
  playable_id: string;
  playable_name: string;
}


export interface PlayableSaveResponse {
  playable_id?: string;
  playable_url?: string;
  playable_name?: string;
  playable_orientation?: "BOTH" | "LANDSCAPE" | "PORTRAIT";
  status?: "AUDIT_FAIL" | "AUDIT_SUCCESS" | "VALIDATE_FAIL" | "VALIDATE_SUCCESS" | "VALIDATING";
}


export interface PlayableGetParams {
  advertiser_id: string;
  playable_id?: string;
  playable_name?: string;
  playable_url?: string;
  status?: "AUDIT_FAIL" | "AUDIT_SUCCESS" | "VALIDATE_FAIL" | "VALIDATE_SUCCESS" | "VALIDATING";
  operation_status?: "UPLOADED" | "SAVED" | "DELETED";
  page?: number;
  page_size?: number;
}


export interface PlayableGetResponse {
  list?: string;
  advertiser_id?: string;
  playable_id?: string;
  playable_url?: string;
  playable_name?: string;
  playable_orientation?: "BOTH" | "LANDSCAPE" | "PORTRAIT";
  status?: "AUDIT_FAIL" | "AUDIT_SUCCESS" | "VALIDATE_FAIL" | "VALIDATE_SUCCESS" | "VALIDATING";
  operation_status?: "UPLOADED" | "SAVED" | "DELETED";
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface PlayableDeleteParams {
  advertiser_id: string;
  playable_id: string;
}


export interface PlayableDeleteResponse {
  playable_id?: string;
}
