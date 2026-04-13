import type { HttpClient } from "@promobase/sdk-runtime";
import type { Campaign } from "../generated/v23/resources/Campaign.ts";
import type { CampaignBudget } from "../generated/v23/resources/CampaignBudget.ts";
import { campaignService, googleAdsService } from "../generated/v23/services/index.ts";
import { resolveRef, type Ref } from "./types.ts";

const GAQL_FIELDS =
  "campaign.id, campaign.name, campaign.status, campaign.advertising_channel_type, campaign.campaign_budget, campaign.start_date, campaign.end_date, campaign.resource_name";

export type CreateCampaignInput = Omit<
  Campaign,
  "resourceName" | "id" | "baseCampaign" | "trackingUrlTemplate" | "campaignBudget"
> & {
  campaignBudget: Ref<CampaignBudget>;
};

function assertSafeResourceName(name: string) {
  if (name.includes("'")) throw new Error(`unsafe resource name: ${name}`);
}

function normalize(input: CreateCampaignInput): Campaign {
  const { campaignBudget, ...rest } = input;
  return { ...rest, campaignBudget: resolveRef(campaignBudget) };
}

export function campaigns(client: HttpClient, customerId: string) {
  return {
    async create(
      input: CreateCampaignInput,
    ): Promise<Campaign & { resourceName: string }> {
      const normalized = normalize(input);
      const res = await campaignService.mutateCampaigns(client, customerId, {
        operations: [{ create: normalized }],
      });
      const resourceName = res.results?.[0]?.resourceName;
      if (!resourceName) throw new Error("campaigns.create returned no resourceName");
      return { ...normalized, resourceName };
    },

    async createMany(
      inputs: CreateCampaignInput[],
    ): Promise<Array<Campaign & { resourceName: string }>> {
      const normalized = inputs.map(normalize);
      const res = await campaignService.mutateCampaigns(client, customerId, {
        operations: normalized.map((create) => ({ create })),
      });
      const results = res.results ?? [];
      if (results.length !== inputs.length) {
        throw new Error(
          `campaigns.createMany: expected ${inputs.length} results, got ${results.length}`,
        );
      }
      return normalized.map((n, i) => {
        const rn = results[i]!.resourceName;
        if (!rn) throw new Error("campaigns.createMany: missing resourceName");
        return { ...n, resourceName: rn };
      });
    },

    async update(resourceName: string, patch: Partial<Campaign>): Promise<void> {
      assertSafeResourceName(resourceName);
      await campaignService.mutateCampaigns(client, customerId, {
        operations: [
          {
            update: { ...patch, resourceName },
            updateMask: Object.keys(patch).join(","),
          },
        ],
      });
    },

    async remove(resourceName: string): Promise<void> {
      assertSafeResourceName(resourceName);
      await campaignService.mutateCampaigns(client, customerId, {
        operations: [{ remove: resourceName }],
      });
    },

    async get(resourceName: string): Promise<Campaign | null> {
      assertSafeResourceName(resourceName);
      const res = await googleAdsService.search(client, customerId, {
        query: `SELECT ${GAQL_FIELDS} FROM campaign WHERE campaign.resource_name = '${resourceName}'`,
      });
      return res.results?.[0]?.campaign ?? null;
    },

    async list(): Promise<Campaign[]> {
      const res = await googleAdsService.search(client, customerId, {
        query: `SELECT ${GAQL_FIELDS} FROM campaign`,
      });
      return (res.results ?? [])
        .map((r) => r.campaign)
        .filter((c): c is Campaign => c !== undefined);
    },
  };
}
