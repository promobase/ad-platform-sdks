// Auto-generated client for BC Payment Portfolios — do not edit
import type { PaymentPortfolioGetParams, PaymentPortfolioGetResponse, PaymentPortfolioCreateParams, PaymentPortfolioCreateResponse, PaymentPortfolioAdvertiserUpdateParams, PaymentPortfolioAdvertiserUpdateResponse, PaymentPortfolioCreditLineUpdateParams, PaymentPortfolioCreditLineUpdateResponse, PaymentPortfolioAdvertiserGetParams, PaymentPortfolioAdvertiserGetResponse, PaymentPortfolioUserGetParams, PaymentPortfolioUserGetResponse } from "../types/bc-payment-portfolios.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcPaymentPortfolios(opts: { accessToken: string; advertiserId: string }) {
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
