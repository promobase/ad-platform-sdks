// @generated
// fingerprint: sha256:1ac8c4f2dcd23d5c9785a03e365e1d4d0d4e19960f5d4c73db4035b0ccacae36
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for BC Payment Portfolios — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { PaymentPortfolioGetParams, PaymentPortfolioGetResponse, PaymentPortfolioCreateParams, PaymentPortfolioCreateResponse, PaymentPortfolioAdvertiserUpdateParams, PaymentPortfolioAdvertiserUpdateResponse, PaymentPortfolioCreditLineUpdateParams, PaymentPortfolioCreditLineUpdateResponse, PaymentPortfolioAdvertiserGetParams, PaymentPortfolioAdvertiserGetResponse, PaymentPortfolioUserGetParams, PaymentPortfolioUserGetResponse } from "../types/bc-payment-portfolios.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcPaymentPortfolios(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get Payment Portfolios */
    async getPaymentPortfolio(params: PaymentPortfolioGetParams): Promise<PaymentPortfolioGetResponse> {
      return get<PaymentPortfolioGetResponse>("/open_api/v1.3/payment_portfolio/get/", params as unknown as Record<string, unknown>);
    },

    /** Create a Payment Portfolio */
    async createPaymentPortfolio(params: PaymentPortfolioCreateParams): Promise<PaymentPortfolioCreateResponse> {
      return post<PaymentPortfolioCreateResponse>("/open_api/v1.3/payment_portfolio/create/", params as unknown as Record<string, unknown>);
    },

    /** Link ad accounts to a Payment Portfolio */
    async updateAdvertiser(params: PaymentPortfolioAdvertiserUpdateParams): Promise<PaymentPortfolioAdvertiserUpdateResponse> {
      return post<PaymentPortfolioAdvertiserUpdateResponse>("/open_api/v1.3/payment_portfolio/advertiser/update/", params as unknown as Record<string, unknown>);
    },

    /** Allocate the credit line to Payment Portfolios */
    async updateCreditLine(params: PaymentPortfolioCreditLineUpdateParams): Promise<PaymentPortfolioCreditLineUpdateResponse> {
      return post<PaymentPortfolioCreditLineUpdateResponse>("/open_api/v1.3/payment_portfolio/credit_line/update/", params as unknown as Record<string, unknown>);
    },

    /** Get ad accounts linked to a Payment Portfolio */
    async getAdvertiser(params: PaymentPortfolioAdvertiserGetParams): Promise<PaymentPortfolioAdvertiserGetResponse> {
      return get<PaymentPortfolioAdvertiserGetResponse>("/open_api/v1.3/payment_portfolio/advertiser/get/", params as unknown as Record<string, unknown>);
    },

    /** Get authorized users for a Payment Portfolio */
    async getUser(params: PaymentPortfolioUserGetParams): Promise<PaymentPortfolioUserGetResponse> {
      return get<PaymentPortfolioUserGetResponse>("/open_api/v1.3/payment_portfolio/user/get/", params as unknown as Record<string, unknown>);
    },
  };
}
