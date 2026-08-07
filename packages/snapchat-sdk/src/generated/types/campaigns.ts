// Auto-generated types for campaigns — do not edit

export interface Campaign {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  ad_account_id: string;
  status: string;
  objective: string;
  start_time: string;
  end_time: string;
  buy_model: string;
  delivery_status: unknown[];
  creation_state: string;
  objective_v2_properties: {
  objective_v2_type: string;
};
  pacing_properties_version: number;
}


export interface CreateCampaignParams {
  adAccountId: string;
  name: string;
  status: string;
  start_time: string;
  buy_model: string;
  creation_state: string;
  objective_v2_properties: {
  objective_v2_type: string;
};
}


export interface UpdateCampaignParams {
  adAccountId: string;
}


export interface ListCampaignsParams {
  adAccountId: string;
  limit?: "50-1000";
  sort?: string;
  read_deleted_entities?: string;
}


export interface GetCampaignParams {
  campaignId: string;
  read_deleted_entities?: string;
}


export interface GetCampaignByIdsParams {
  adAccountId: string;
  entity_ids: {
  id: string;
}[];
}


export interface DeleteCampaignParams {
  id: string;
}
