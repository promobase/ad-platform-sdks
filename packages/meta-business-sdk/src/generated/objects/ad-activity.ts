import type { AdActivityEventType, EventType } from "../enums.ts";

export interface AdActivityFields {
  actor_id: string;
  actor_name: string;
  application_id: string;
  application_name: string;
  date_time_in_timezone: string;
  event_time: string;
  event_type: AdActivityEventType;
  extra_data: string;
  object_id: string;
  object_name: string;
  object_type: string;
  translated_event_type: string;
}

