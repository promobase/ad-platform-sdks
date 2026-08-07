// Auto-generated types for profile-engagement — do not edit

export interface Segment {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  ad_account_id: string;
  status: string;
  source_type: string;
  retention_in_days: number;
  approximate_number_users: number;
  targetable_status: string;
  creation_spec: {
  engagement_type: string;
  source_profile_id: string;
};
}


export interface CreateSegmentParams {
  adAccountId: string;
  name: string;
  source_type: string;
  retention_in_days: number;
  creation_spec: {
  engagement_type: string;
  source_profile_id: string;
};
}


export interface ListSegmentsParams {
  adAccountId: string;
}
