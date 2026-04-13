import type { HttpClient } from "@promobase/sdk-runtime";
import type { CampaignBudget } from "../generated/v23/resources/CampaignBudget.ts";
import { campaignBudgetService, googleAdsService } from "../generated/v23/services/index.ts";

const GAQL_FIELDS =
  "campaign_budget.id, campaign_budget.name, campaign_budget.amount_micros, campaign_budget.delivery_method, campaign_budget.resource_name";

export type CreateCampaignBudgetInput = Omit<
  CampaignBudget,
  | "resourceName"
  | "id"
  | "referenceCount"
  | "hasRecommendedBudget"
  | "recommendedBudgetAmountMicros"
>;

function assertSafeResourceName(name: string) {
  if (name.includes("'")) throw new Error(`unsafe resource name: ${name}`);
}

export function campaignBudgets(client: HttpClient, customerId: string) {
  return {
    async create(
      input: CreateCampaignBudgetInput,
    ): Promise<CreateCampaignBudgetInput & { resourceName: string }> {
      const res = await campaignBudgetService.mutateCampaignBudgets(client, customerId, {
        operations: [{ create: input }],
      });
      const resourceName = res.results?.[0]?.resourceName;
      if (!resourceName) throw new Error("campaignBudgets.create returned no resourceName");
      return { ...input, resourceName };
    },

    async createMany(
      inputs: CreateCampaignBudgetInput[],
    ): Promise<Array<CreateCampaignBudgetInput & { resourceName: string }>> {
      const res = await campaignBudgetService.mutateCampaignBudgets(client, customerId, {
        operations: inputs.map((input) => ({ create: input })),
      });
      const results = res.results ?? [];
      if (results.length !== inputs.length) {
        throw new Error(
          `campaignBudgets.createMany: expected ${inputs.length} results, got ${results.length}`,
        );
      }
      return inputs.map((input, i) => {
        const rn = results[i]!.resourceName;
        if (!rn) throw new Error("campaignBudgets.createMany: missing resourceName");
        return { ...input, resourceName: rn };
      });
    },

    async update(resourceName: string, patch: Partial<CampaignBudget>): Promise<void> {
      assertSafeResourceName(resourceName);
      await campaignBudgetService.mutateCampaignBudgets(client, customerId, {
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
      await campaignBudgetService.mutateCampaignBudgets(client, customerId, {
        operations: [{ remove: resourceName }],
      });
    },

    async get(resourceName: string): Promise<CampaignBudget | null> {
      assertSafeResourceName(resourceName);
      const res = await googleAdsService.search(client, customerId, {
        query: `SELECT ${GAQL_FIELDS} FROM campaign_budget WHERE campaign_budget.resource_name = '${resourceName}'`,
      });
      return res.results?.[0]?.campaignBudget ?? null;
    },

    async list(): Promise<CampaignBudget[]> {
      const res = await googleAdsService.search(client, customerId, {
        query: `SELECT ${GAQL_FIELDS} FROM campaign_budget`,
      });
      return (res.results ?? [])
        .map((r) => r.campaignBudget)
        .filter((b): b is CampaignBudget => b !== undefined);
    },
  };
}
