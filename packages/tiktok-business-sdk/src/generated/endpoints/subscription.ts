// @generated
// fingerprint: sha256:3d97500621c2ecc6c382fc867d02bcefafa87d34d31f6375851670e472209955
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Subscription — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { SubscriptionSubscribeParams, SubscriptionSubscribeResponse, SubscriptionGetParams, SubscriptionGetResponse, SubscriptionUnsubscribeParams, SubscriptionUnsubscribeResponse } from "../types/subscription.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createSubscription(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Create a subscription */
    async subscriptionSubscribe(params: SubscriptionSubscribeParams): Promise<SubscriptionSubscribeResponse> {
      return post<SubscriptionSubscribeResponse>("/open_api/v1.3/subscription/subscribe/", params as unknown as Record<string, unknown>);
    },

    /** Get subscription details of a developer app */
    async getSubscription(params: SubscriptionGetParams): Promise<SubscriptionGetResponse> {
      return get<SubscriptionGetResponse>("/open_api/v1.3/subscription/get/", params as unknown as Record<string, unknown>);
    },

    /** Cancel a subscription */
    async subscriptionUnsubscribe(params: SubscriptionUnsubscribeParams): Promise<SubscriptionUnsubscribeResponse> {
      return post<SubscriptionUnsubscribeResponse>("/open_api/v1.3/subscription/unsubscribe/", params as unknown as Record<string, unknown>);
    },
  };
}
