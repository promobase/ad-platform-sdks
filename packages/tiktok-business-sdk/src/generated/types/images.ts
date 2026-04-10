// Auto-generated types for Images — do not edit

export interface FileImageAdUploadParams {
  advertiser_id: string;
  file_name?: string;
  upload_type: string;
  image_file?: File | Blob;
  image_signature?: string;
  image_url?: string;
  file_id?: string;
}


export interface FileImageAdUploadResponse {
  code?: number;
  message?: string;
  data?: {
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
};
  request_id?: string;
}


export interface FileImageAdUpdateParams {
  advertiser_id: string;
  file_name: string;
  image_id: string;
}


export interface FileImageAdUpdateResponse {
  code?: number;
  message?: string;
  data?: Record<string, unknown>;
  request_id?: string;
}


export interface FileImageAdInfoParams {
  advertiser_id: string;
  image_ids: string[];
}


export interface FileImageAdInfoResponse {
  code?: number;
  message?: string;
  data?: {
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
};
  request_id?: string;
}


export interface FileImageAdSearchParams {
  advertiser_id: string;
  filtering?: {
  height?: number;
  image_ids?: string[];
  material_ids?: string[];
  ratio?: float[];
  width?: number;
  displayable?: boolean;
};
  page?: number;
  page_size?: number;
}


export interface FileImageAdSearchResponse {
  code?: number;
  message?: string;
  data?: {
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
};
  request_id?: string;
}

