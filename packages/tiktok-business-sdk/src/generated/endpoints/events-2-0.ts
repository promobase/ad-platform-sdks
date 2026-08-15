// @generated
// fingerprint: sha256:5aa15b24bc07c489f892e7c6c5c1e16a708b6e2f3a3e2bdae02b8228e82e9576
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Events 2.0 — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { EventTrackParams, EventTrackResponse } from "../types/events-2-0.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createEvents20(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Report App, Web, Offline, or CRM Events */
    async eventTrack(params: EventTrackParams): Promise<EventTrackResponse> {
      return post<EventTrackResponse>("/open_api/v1.3/event/track/", params as unknown as Record<string, unknown>);
    },
  };
}
