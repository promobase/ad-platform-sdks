// Auto-generated types for creatives — do not edit

export interface Creative {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  ad_account_id: string;
  type: string;
  packaging_status: string;
  review_status: string;
  shareable: boolean;
  playback_type: string;
  headline: string;
  render_type: string;
  top_snap_crop_position: string;
  composite_properties: {
  creative_ids: unknown[];
};
  ad_product: string;
  preview_creative_id: string;
  profile_properties: {
  profile_id: string;
};
  semantic_id: string;
  creator_partnership_type: string;
  creator_profile_properties: {
  profile_id: string;
};
  profile_tagged_in_headline: {
  profile_id: string;
};
}


export interface PhoneNumber {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  country_code: string;
  numerical_country_code: string;
  phone_number: string;
  verification_status: string;
}


export interface Snapcode {}


export interface CreativePreview {}


export interface CreateCreativParams {
  adAccountId: string;
  top_snap_media_id: string;
  name: string;
  profile_properties: {
  profile_id: string;
};
  type: string;
  headline: string;
  shareable: boolean;
}


export interface ListPhoneNumbersParams {
  adAccountId: string;
}


export interface ListCreativesParams {
  adAccountId: string;
  sort?: string;
  limit?: "50-1000";
  review_status?: "PENDING_REVIEW" | "APPROVED" | "DISAPPROVED";
  type?: "SNAP_AD" | "APP_INSTALL" | "WEB_VIEW" | "DEEP_LINK" | "AD_TO_LENS" | "AD_TO_CALL" | "AD_TO_MESSAGE" | "PREVIEW" | "COMPOSITE" | "LENS" | "LENS_WEB_VIEW" | "LENS_APP_INSTALL" | "LENS_DEEP_LINK" | "COLLECTION" | "LEAD_GENERATION";
}


export interface GetCreativParams {
  creativeId: string;
}


export interface GetCreativByIdsParams {
  adAccountId: string;
  entity_ids: {
  id: string;
}[];
}


export interface GetCreativSnapcodeParams {
  creativeId: string;
}


export interface GetCreativCreativePreviewParams {
  creativeId: string;
}
