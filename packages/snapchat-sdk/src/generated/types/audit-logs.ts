// Auto-generated types for audit-logs — do not edit

export interface Changelog {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  action: string;
  user_id: string;
  email: string;
  event_at: string;
  app_id: string;
  app_name: string;
  entity_id: string;
  entity_type: string;
  update_value_records: {
  status: {
    before_value: string;
    after_value: string;
  };
};
}


export interface ListExternalChangelogsParams {
  campaignId: string;
  limit?: string;
}


export interface ListExternalChangelogs2Params {
  adsquadId: string;
  limit?: string;
}


export interface ListExternalChangelogs3Params {
  adId: string;
  limit?: string;
}


export interface ListExternalChangelogs4Params {
  creativeId: string;
  limit?: string;
}


export interface ListExternalChangelogs5Params {
  dynamicTemplateId: string;
  limit?: string;
}
