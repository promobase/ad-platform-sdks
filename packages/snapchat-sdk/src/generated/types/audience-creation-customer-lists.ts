// Auto-generated types for customer-lists — do not edit

export interface Segment {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  ad_account_id: string;
  status: string;
  targetable_status: string;
  upload_status: string;
  source_type: string;
  retention_in_days: number;
  approximate_number_users: number;
  creation_spec: {
  seed_segment_id: string;
  country: string;
  type: string;
};
}


export interface User {
  number_uploaded_users: number;
}


export interface CreateSegmentParams {
  adAccountId: string;
  name: string;
  description: string;
  source_type: string;
  retention_in_days: number;
}


export interface ListSegmentsParams {
  adAccountId: string;
}


export interface GetSegmentParams {
  segmentId: string;
}


export interface UpdateSegmentParams {
  adAccountId: string;
}


export interface CreateUserParams {
  segmentId: string;
  schema: unknown[];
  data: string;
}


export interface DeleteUserParams {
  segmentId: string;
}


export interface DeleteAllUserParams {
  segmentId: string;
}


export interface DeleteSegmentParams {
  segmentId: string;
}
