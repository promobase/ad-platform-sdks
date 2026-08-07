// Auto-generated types for lookalikes — do not edit

export interface Segment {
  ad_account_id?: string;
}


export interface CreateSegmentParams {
  adAccountId: string;
  name: string;
  description: string;
  source_type: string;
  retention_in_days: number;
  creation_spec: {
  seed_segment_id: string;
  country: string;
  type: string;
};
}
