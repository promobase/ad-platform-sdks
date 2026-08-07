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
