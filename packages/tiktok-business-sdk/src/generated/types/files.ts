// Auto-generated types for Files — do not edit

export interface FileTemporarilyUploadParams {}


export interface FileTemporarilyUploadResponse {
  code?: number;
  message?: string;
  data?: {
  file_id?: string;
  signature?: string;
  file_size?: number;
  create_time?: string;
};
  request_id?: string;
}


export interface FileStartUploadParams {
  advertiser_id: string;
  size: number;
  content_type: string;
  name?: string;
}


export interface FileStartUploadResponse {
  code?: number;
  message?: string;
  data?: {
  upload_id?: string;
  file_name?: string;
  start_offset?: number;
  end_offset?: number;
};
  request_id?: string;
}


export interface FileTransferUploadParams {
  advertiser_id: string;
  upload_id: string;
  signature: string;
  start_offset: number;
  file: File | Blob;
}


export interface FileTransferUploadResponse {
  code?: number;
  message?: string;
  data?: {
  start_offset?: number;
  end_offset?: number;
};
  request_id?: string;
}


export interface FileFinishUploadParams {
  advertiser_id: string;
  upload_id: string;
}


export interface FileFinishUploadResponse {
  code?: number;
  message?: string;
  data?: {
  file_id?: string;
  file_name?: string;
  create_time?: string;
  size?: number;
};
  request_id?: string;
}


export interface FileNameCheckParams {}


export interface FileNameCheckResponse {}

