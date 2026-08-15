// @generated
// fingerprint: sha256:14b14a2595b29eef06040f3ff7d7e2e7164c2abc3713fb9bd529ccec94403df5
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for interaction-zones — do not edit

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


export interface GetInteractionZonParams {
  interactionZoneId: string;
}


export interface ListInteractionZonesParams {
  adAccountId: string;
}
