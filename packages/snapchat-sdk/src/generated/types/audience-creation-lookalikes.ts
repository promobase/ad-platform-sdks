// @generated
// fingerprint: sha256:2fbbb1c7d50db4a9355fdaf0a42f52ffd58bfdff9803cd76f5560eccf4574baf
// DO NOT EDIT: generated file; changes will be overwritten.
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
