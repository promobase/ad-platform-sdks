import type { BusinessFields } from "./business.ts";

export interface PagePartnerWithLeadsAccessFields {
  can_access_leads: boolean;
  partner_business: BusinessFields;
  permitted_tasks: string[];
}

