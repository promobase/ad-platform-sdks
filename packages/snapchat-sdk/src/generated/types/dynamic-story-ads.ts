// Auto-generated types for dynamic-story-ads — do not edit

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
  render_type: string;
  top_snap_crop_position: string;
  preview_properties: {
  preview_media_id: string;
  logo_media_id: string;
  preview_headline: string;
};
  ad_product: string;
}


export interface Ad {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  ad_squad_id: string;
  creative_id: string;
  status: string;
  type: string;
  render_type: string;
  review_status: string;
  review_status_reasons: unknown[];
  delivery_status: unknown[];
}


export interface CreateProductSearchParams {
  catalogId: string;
}


export interface CreateCreativParams {
  adAccountId: string;
}


export interface CreateAdParams {
  adSquadId: string;
}
