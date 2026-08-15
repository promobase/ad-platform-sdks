// @generated
// fingerprint: sha256:0e05672e9bb703cf3de0b129f7e55d110b111acfc219d4cb96aef5a64070e3c1
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Images — do not edit

export interface FileImageAdUploadParams {
  advertiser_id: string;
  file_name?: string;
  upload_type: "UPLOAD_BY_FILE" | "UPLOAD_BY_URL" | "UPLOAD_BY_FILE_ID";
  image_file?: File | Blob;
  image_signature?: string;
  image_url?: string;
  file_id?: string;
}


export interface FileImageAdUploadResponse {
  image_id?: string;
  material_id?: string;
  is_carousel_usable?: boolean;
  displayable?: boolean;
  height?: number;
  width?: number;
  format?: string;
  image_url?: string;
  signature?: string;
  size?: number;
  file_name?: string;
  create_time?: string;
  modify_time?: string;
}


export interface FileImageAdUpdateParams {
  advertiser_id: string;
  file_name: string;
  image_id: string;
}


export interface FileImageAdUpdateResponse {}


export interface FileImageAdInfoParams {
  advertiser_id: string;
  image_ids: string[];
}


export interface FileImageAdInfoResponse {
  list?: {
  image_id?: string;
  material_id?: string;
  is_carousel_usable?: boolean;
  width?: number;
  format?: string;
  image_url?: string;
  height?: number;
  signature?: string;
  size?: number;
  file_name?: string;
  create_time?: string;
  modify_time?: string;
  displayable?: boolean;
}[];
}


export interface FileImageAdSearchParams {
  advertiser_id: string;
  filtering?: {
  height?: number;
  image_ids?: string[];
  material_ids?: string[];
  ratio?: string;
  width?: number;
  displayable?: boolean;
};
  page?: number;
  page_size?: number;
}


export interface FileImageAdSearchResponse {
  list?: {
  image_id?: string;
  material_id?: string;
  is_carousel_usable?: boolean;
  width?: number;
  format?: string;
  image_url?: string;
  height?: number;
  signature?: string;
  size?: number;
  file_name?: string;
  create_time?: string;
  modify_time?: string;
  displayable?: boolean;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}
