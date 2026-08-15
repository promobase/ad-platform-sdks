// @generated
// fingerprint: sha256:2348b8238e32da367297bb062df0327bac1dbd97ac3e882888f9131489eef228
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Files — do not edit

export interface FileTemporarilyUploadParams {
  advertiser_id: string;
  upload_type: "FILE" | "URL";
  content_type: string;
  file?: File | Blob;
  url?: string;
  signature?: string;
  name?: string;
}


export interface FileTemporarilyUploadResponse {
  file_id?: string;
  signature?: string;
  file_size?: number;
  create_time?: string;
}


export interface FileStartUploadParams {
  advertiser_id: string;
  size: number;
  content_type: string;
  name?: string;
}


export interface FileStartUploadResponse {
  upload_id?: string;
  file_name?: string;
  start_offset?: number;
  end_offset?: number;
}


export interface FileTransferUploadParams {
  advertiser_id: string;
  upload_id: string;
  signature: string;
  start_offset: number;
  file: File | Blob;
}


export interface FileTransferUploadResponse {
  start_offset?: number;
  end_offset?: number;
}


export interface FileFinishUploadParams {
  advertiser_id: string;
  upload_id: string;
}


export interface FileFinishUploadResponse {
  file_id?: string;
  file_name?: string;
  create_time?: string;
  size?: number;
}


export interface FileNameCheckParams {
  advertiser_id: string;
  files?: {
  file_name?: string;
  file_type?: "VIDEO" | "IMAGE";
}[];
  file_name?: string;
  file_type?: "VIDEO" | "IMAGE";
}


export interface FileNameCheckResponse {
  duplicate?: boolean;
  duplicate_material_id?: string;
  batch_results?: {
  file_name?: string;
  duplicate?: boolean;
  duplicate_material_id?: string;
}[];
}
