// @generated
// fingerprint: sha256:3f4dc45b9c1d481a11562c79bab92c905b807137acf3902a68b81ccc67cb611a
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Catalog Event Sources — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { CatalogEventsourceBindParams, CatalogEventsourceBindResponse, CatalogEventsourceUnbindParams, CatalogEventsourceUnbindResponse, CatalogEventsourceBindGetParams, CatalogEventsourceBindGetResponse } from "../types/catalog-event-sources.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCatalogEventSources(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Bind an event source to a catalog */
    async eventsourceBind(params: CatalogEventsourceBindParams): Promise<CatalogEventsourceBindResponse> {
      return post<CatalogEventsourceBindResponse>("/open_api/v1.3/catalog/eventsource/bind/", params as unknown as Record<string, unknown>);
    },

    /** Unbind an event source from a catalog */
    async eventsourceUnbind(params: CatalogEventsourceUnbindParams): Promise<CatalogEventsourceUnbindResponse> {
      return post<CatalogEventsourceUnbindResponse>("/open_api/v1.3/catalog/eventsource/unbind/", params as unknown as Record<string, unknown>);
    },

    /** Get event source binding info of a catalog */
    async getEventsourceBind(params: CatalogEventsourceBindGetParams): Promise<CatalogEventsourceBindGetResponse> {
      return get<CatalogEventsourceBindGetResponse>("/open_api/v1.3/catalog/eventsource_bind/get/", params as unknown as Record<string, unknown>);
    },
  };
}
