// @generated
// fingerprint: sha256:118e85b19b30dd1cdce66acae898a836b2b52373864de8079fce4a5526e8e474
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for BC Payments — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { BcTransferParams, BcTransferResponse, AdvertiserBalanceGetParams, AdvertiserBalanceGetResponse, BcBalanceGetParams, BcBalanceGetResponse, BcAccountTransactionGetParams, BcAccountTransactionGetResponse, AdvertiserTransactionGetParams, AdvertiserTransactionGetResponse, BcTransactionGetParams, BcTransactionGetResponse, BcAccountBudgetChangelogGetParams, BcAccountBudgetChangelogGetResponse, BcAccountCostGetParams, BcAccountCostGetResponse } from "../types/bc-payments.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcPayments(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "GET",
      path,
      query: params,
    });
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "POST",
      path,
      body,
    });
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
