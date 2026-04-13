import type { HttpClient } from "@promobase/sdk-runtime";
import { campaignBudgets } from "./campaign-budgets.ts";
import { campaigns } from "./campaigns.ts";
import { adGroups } from "./ad-groups.ts";
import { adGroupAds } from "./ad-group-ads.ts";
import { ads } from "./ads.ts";

export interface Customer {
  campaignBudgets: ReturnType<typeof campaignBudgets>;
  campaigns: ReturnType<typeof campaigns>;
  adGroups: ReturnType<typeof adGroups>;
  adGroupAds: ReturnType<typeof adGroupAds>;
  ads: ReturnType<typeof ads>;
}

export function createCustomer(client: HttpClient, customerId: string): Customer {
  return {
    campaignBudgets: campaignBudgets(client, customerId),
    campaigns: campaigns(client, customerId),
    adGroups: adGroups(client, customerId),
    adGroupAds: adGroupAds(client, customerId),
    ads: ads(client, customerId),
  };
}
