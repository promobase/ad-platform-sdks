// @generated
// fingerprint: sha256:3537f21a2ff3406f97cdef2e4f5406638fe489d65e18aea7c6172b7cb60fc6b8
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Creative Portfolios — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { CreativePortfolioCreateParams, CreativePortfolioCreateResponse, CreativePortfolioGetParams, CreativePortfolioGetResponse, CreativePortfolioListParams, CreativePortfolioListResponse, CreativePortfolioDeleteParams, CreativePortfolioDeleteResponse } from "../types/creative-portfolios.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCreativePortfolios(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Create a portfolio */
    async createPortfolio(params: CreativePortfolioCreateParams): Promise<CreativePortfolioCreateResponse> {
      return post<CreativePortfolioCreateResponse>("/open_api/v1.3/creative/portfolio/create/", params as unknown as Record<string, unknown>);
    },

    /** Get a portfolio by ID */
    async getPortfolio(params: CreativePortfolioGetParams): Promise<CreativePortfolioGetResponse> {
      return get<CreativePortfolioGetResponse>("/open_api/v1.3/creative/portfolio/get/", params as unknown as Record<string, unknown>);
    },

    /** Get portfolios within an ad account */
    async listPortfolio(params: CreativePortfolioListParams): Promise<CreativePortfolioListResponse> {
      return get<CreativePortfolioListResponse>("/open_api/v1.3/creative/portfolio/list/", params as unknown as Record<string, unknown>);
    },

    /** Delete portfolios */
    async deletePortfolio(params: CreativePortfolioDeleteParams): Promise<CreativePortfolioDeleteResponse> {
      return post<CreativePortfolioDeleteResponse>("/open_api/v1.3/creative/portfolio/delete/", params as unknown as Record<string, unknown>);
    },
  };
}
