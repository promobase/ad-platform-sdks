// @generated
// fingerprint: sha256:6a4f0ee03ce0f657c5d03b7e31e47d43d212a7ba71696a2c584fb10ee9be74fc
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for dynamic-collections-ads — do not edit

export interface CreativeElement {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  ad_account_id: string;
  type: string;
  interaction_type: string;
  render_type: string;
}


export interface InteractionZone {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  ad_account_id: string;
  headline: string;
  creative_element_ids: unknown[];
  render_type: string;
}


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
  headline: string;
  brand_name: string;
  render_type: string;
  dynamic_render_properties: {
  dynamic_template_id: string;
  product_set_id: string;
};
  top_snap_crop_position: string;
  ad_product: string;
  collection_properties: {
  interaction_zone_id: string;
  default_fallback_interaction_type: string;
};
}


export interface DynamicTemplate {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  ad_account_id: string;
  ios_url: string;
  android_url: string;
  layout: string;
  text_fields: unknown[];
}


export interface CreateProductSearchParams {
  catalogId: string;
}


export interface CreateCreativeElementParams {
  adAccountId: string;
}


export interface CreateInteractionZonParams {
  adAccountId: string;
}


export interface CreateCreativParams {
  adAccountId: string;
}


export interface CreateDynamicTemplatParams {
  adAccountId: string;
  name: string;
  ios_url: string;
  android_url: string;
  layout: string;
  text_fields: unknown[];
}
