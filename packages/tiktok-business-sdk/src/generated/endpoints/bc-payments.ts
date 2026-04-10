// Auto-generated client for BC Payments — do not edit
import type { BcTransferParams, BcTransferResponse, AdvertiserBalanceGetParams, AdvertiserBalanceGetResponse, BcBalanceGetParams, BcBalanceGetResponse, BcAccountTransactionGetParams, BcAccountTransactionGetResponse, AdvertiserTransactionGetParams, AdvertiserTransactionGetResponse, BcTransactionGetParams, BcTransactionGetResponse, BcAccountBudgetChangelogGetParams, BcAccountBudgetChangelogGetResponse, BcAccountCostGetParams, BcAccountCostGetResponse } from "../types/bc-payments.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcPayments(opts: { accessToken: string; advertiserId: string }) {
  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetch(`${TT_API_BASE}${path}?${searchParams.toString()}`, {
      headers: { "Access-Token": opts.accessToken },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${TT_API_BASE}${path}`, {
      method: "POST",
      headers: { "Access-Token": opts.accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(`TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`);
    }
    return responseBody.data;
  }

  return {
    /** Process a payment */
    async bcTransfer(params: BcTransferParams): Promise<BcTransferResponse> {
      return post<BcTransferResponse>("/open_api/v1.3/bc/transfer/", params as unknown as Record<string, unknown>);
    },

    /** Get the balance and budget of ad accounts */
    async getBalance(params: AdvertiserBalanceGetParams): Promise<AdvertiserBalanceGetResponse> {
      return get<AdvertiserBalanceGetResponse>("/open_api/v1.3/advertiser/balance/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the balance of a BC */
    async getBalance2(params: BcBalanceGetParams): Promise<BcBalanceGetResponse> {
      return get<BcBalanceGetResponse>("/open_api/v1.3/bc/balance/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the transaction records of a BC or ad accounts */
    async getTransaction(params: BcAccountTransactionGetParams): Promise<BcAccountTransactionGetResponse> {
      return get<BcAccountTransactionGetResponse>("/open_api/v1.3/bc/account/transaction/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the transaction records of ad accounts */
    async getTransaction2(params: AdvertiserTransactionGetParams): Promise<AdvertiserTransactionGetResponse> {
      return get<AdvertiserTransactionGetResponse>("/open_api/v1.3/advertiser/transaction/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the transaction records of a BC */
    async getTransaction3(params: BcTransactionGetParams): Promise<BcTransactionGetResponse> {
      return get<BcTransactionGetResponse>("/open_api/v1.3/bc/transaction/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the budget change history of an ad account */
    async getChangelog(params: BcAccountBudgetChangelogGetParams): Promise<BcAccountBudgetChangelogGetResponse> {
      return get<BcAccountBudgetChangelogGetResponse>("/open_api/v1.3/bc/account/budget/changelog/get//", params as unknown as Record<string, unknown>);
    },

    /** Get the cost records of a BC and ad accounts */
    async getCost(params: BcAccountCostGetParams): Promise<BcAccountCostGetResponse> {
      return get<BcAccountCostGetResponse>("/open_api/v1.3/bc/account/cost/get/", params as unknown as Record<string, unknown>);
    },
  };
}
