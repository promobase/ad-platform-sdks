import type { ApiClient } from "@promobase/sdk-runtime";

export interface BCPCampaignFields {
  ads_permission_required: boolean;
  application_deadline: string;
  campaign_goal: string;
  campaign_goal_other: string;
  content_delivery_deadline: string;
  content_delivery_start_date: string;
  content_requirements: Record<string, number>[];
  content_requirements_description: string;
  currency: string;
  deal_negotiation_type: string;
  description: string;
  has_free_product: boolean;
  id: string;
  name: string;
  payment_amount_for_ads: number;
  payment_amount_for_content: number;
  payment_description: string;
}

export function bCPCampaignNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BCPCampaignFields,
    get: <F extends (keyof BCPCampaignFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BCPCampaignFields, F[number]>>(`${id}`, opts),
  };
}

