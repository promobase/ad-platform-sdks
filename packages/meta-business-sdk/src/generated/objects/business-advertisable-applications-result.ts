import type { BusinessFields } from "./business.ts";

export interface BusinessAdvertisableApplicationsResultFields {
  are_app_events_unavailable: boolean;
  business: BusinessFields;
  has_insight_permission: boolean;
  id: string;
  name: string;
  photo_url: string;
}

