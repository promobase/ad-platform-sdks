// Auto-generated types for ads — do not edit

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
  delivery_status: unknown[];
}


export interface CreateAdParams {
  adSquadId: string;
  creative_id: string;
  name: string;
  type: string;
  status: string;
}


export interface UpdateAdParams {
  adSquadId: string;
  id: string;
  creative_id: string;
  name: string;
  type: string;
  status: string;
}


export interface ListAdsParams {
  adSquadId: string;
  limit?: string;
  sort?: string;
}


export interface ListAds2Params {
  campaignId: string;
  limit?: string;
  sort?: string;
}


export interface ListAds3Params {
  adAccountId: string;
  read_deleted_entities?: string;
  limit?: string;
  sort?: string;
}


export interface GetAdParams {
  adId: string;
  read_deleted_entities?: string;
}


export interface GetAdByIdsParams {
  adAccountId: string;
  entity_ids: {
  id: string;
}[];
}


export interface DeleteAdParams {
  adId: string;
}
