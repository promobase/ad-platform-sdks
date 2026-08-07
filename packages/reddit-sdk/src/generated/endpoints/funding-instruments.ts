// Auto-generated client for Funding Instruments — do not edit
import type { RedditApiClient } from "../../api-client.ts";
import type { RedditEnvelope } from "../../envelope.ts";
import type { FundingInstrument } from "../types.ts";
import type { ListFundinginstrumentsbyaccountParams, ListFundinginstrumentsbybusinessParams } from "../params.ts";

/** Funding Instruments — 2 endpoints */
export function createFundingInstrumentsClient(api: RedditApiClient) {
  return {
    /** List funding instruments by account */
    async listFundinginstrumentsbyaccount(params: ListFundinginstrumentsbyaccountParams): Promise<FundingInstrument[]> {
      const { accountId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/accounts/${accountId}/funding_instruments`, query);
      return envelope.data as FundingInstrument[];
    },

    /** List funding instruments by business */
    async listFundinginstrumentsbybusiness(params: ListFundinginstrumentsbybusinessParams): Promise<FundingInstrument[]> {
      const { businessId, ...query } = params;
      const envelope = await api.get<RedditEnvelope>(`/businesses/${businessId}/funding_instruments`, query);
      return envelope.data as FundingInstrument[];
    },
  };
}
