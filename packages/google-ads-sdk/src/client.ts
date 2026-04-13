import type { DelayFn, RateLimiter, RetryConfig } from "@promobase/sdk-runtime";
import { HttpClient } from "@promobase/sdk-runtime";
import { parseGoogleAdsError } from "./errors.ts";

export interface GoogleAdsClientOptions {
  getAccessToken: () => string | Promise<string>;
  developerToken: string;
  loginCustomerId?: string;
  apiVersion?: "v23";
  fetch?: typeof fetch;
  rateLimiter?: RateLimiter;
  delay?: DelayFn;
  retry?: Partial<RetryConfig>;
  debug?: boolean;
}

export interface GoogleAdsClient {
  http: HttpClient;
  apiVersion: string;
}

export function createClient(opts: GoogleAdsClientOptions): GoogleAdsClient {
  const apiVersion = opts.apiVersion ?? "v23";
  const http = new HttpClient({
    baseUrl: "https://googleads.googleapis.com",
    getHeaders: async () => {
      const token = await opts.getAccessToken();
      const headers: Record<string, string> = {
        authorization: `Bearer ${token}`,
        "developer-token": opts.developerToken,
      };
      if (opts.loginCustomerId) headers["login-customer-id"] = opts.loginCustomerId;
      return headers;
    },
    fetch: opts.fetch,
    rateLimiter: opts.rateLimiter,
    delay: opts.delay,
    retry: opts.retry,
    debug: opts.debug,
    onError: (status, body) => parseGoogleAdsError(status, body),
  });
  return { http, apiVersion };
}
