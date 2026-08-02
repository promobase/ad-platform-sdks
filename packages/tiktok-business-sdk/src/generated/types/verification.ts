// Auto-generated types for Verification — do not edit

export interface AccountVerificationFiletypeParams {
  business_type: "BUSINESS" | "INDIVIDUAL";
  region_iso_code: string;
}


export interface AccountVerificationFiletypeResponse {
  file_types?: {
  file_type_name?: string;
  file_type_code?: string;
}[];
}


export interface AccountVerificationUploadParams {
  image_file1: File | Blob;
  image_file2?: File | Blob;
}


export interface AccountVerificationUploadResponse {
  qualification_image_ids?: string[];
}


export interface AccountVerificationSubmitParams {
  advertiser_id?: string;
  bc_id?: string;
  business_form?: {
  company_name?: string;
  website_url?: string;
  industry_code?: "NOT_APPLICABLE" | "ALCOHOL" | "OTC" | "DATING_APP" | "FINANCIAL_SERVICES";
  region_iso_code?: string;
  file_type_code?: string;
  license_no?: string;
  qualification_image_ids?: string[];
};
  individual_form?: {
  individual_name?: string;
  region_iso_code?: string;
  file_type_code?: string;
  identity_no?: string;
  website_url?: string;
  qualification_image_ids?: string[];
};
}


export interface AccountVerificationSubmitResponse {}


export interface AccountVerificationStatusParams {
  advertiser_id?: string;
  bc_id?: string;
}


export interface AccountVerificationStatusResponse {
  qualification_id?: string;
  verification_status?: "NOT_SUBMITTED" | "REVIEWING" | "VERIFIED" | "FAILED" | "EXPIRED";
  rejection_reason?: string;
  audit_time?: string;
}
