// @generated
// fingerprint: sha256:13bcf50e901ee1990bd2c8aad2a6cb202cff1a4505a97084473d334f6b8fbec7
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for event-details — do not edit

export interface EventDetail {
  id: string;
  updated_at: string;
  created_at: string;
  event_name: string;
  event_start_time: string;
  event_time_zone: string;
  ad_account_id: string;
}


export interface CreateEventDetailParams {
  adAccountId: string;
}


export interface GetEventDetailParams {
  eventDetailsId: string;
}


export interface ListEventDetailsParams {
  adAccountId: string;
}


export interface DeleteEventDetailParams {
  eventDetailsId: string;
}
