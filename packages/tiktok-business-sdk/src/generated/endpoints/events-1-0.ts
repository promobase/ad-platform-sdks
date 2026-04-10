// Auto-generated client for Events 1.0 — do not edit
import type { AppTrackParams, AppTrackResponse, AppBatchParams, AppBatchResponse, AppInfoParams, AppInfoResponse, AppCreateParams, AppCreateResponse, AppUpdateParams, AppUpdateResponse, AppListParams, AppListResponse, AppOptimizationEventParams, AppOptimizationEventResponse, AppOptimizationEventRetargetingParams, AppOptimizationEventRetargetingResponse, PixelTrackParams, PixelTrackResponse, PixelBatchParams, PixelBatchResponse, PixelListParams, PixelListResponse, PixelCreateParams, PixelCreateResponse, PixelUpdateParams, PixelUpdateResponse, PixelEventCreateParams, PixelEventCreateResponse, PixelEventUpdateParams, PixelEventUpdateResponse, PixelEventDeleteParams, PixelEventDeleteResponse, PixelInstantPageEventParams, PixelInstantPageEventResponse, PixelEventStatsParams, PixelEventStatsResponse, OfflineCreateParams, OfflineCreateResponse, OfflineUpdateParams, OfflineUpdateResponse, OfflineDeleteParams, OfflineDeleteResponse, OfflineGetParams, OfflineGetResponse, OfflineTrackParams, OfflineTrackResponse, OfflineBatchParams, OfflineBatchResponse, CrmListParams, CrmListResponse, CrmCreateParams, CrmCreateResponse, CtmMessageEventSetGetParams, CtmMessageEventSetGetResponse } from "../types/events-1-0.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createEvents10(opts: { accessToken: string; advertiserId: string }) {
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
    /** Report an App Event */
    async appTrack(params: AppTrackParams): Promise<AppTrackResponse> {
      return post<AppTrackResponse>("/open_api/v1.3/app/track/", params as unknown as Record<string, unknown>);
    },

    /** Report App Events in bulk */
    async appBatch(params: AppBatchParams): Promise<AppBatchResponse> {
      return post<AppBatchResponse>("/open_api/v1.3/app/batch/", params as unknown as Record<string, unknown>);
    },

    /** Get info of an app */
    async appInfo(params: AppInfoParams): Promise<AppInfoResponse> {
      return get<AppInfoResponse>("/open_api/v1.3/app/info/", params as unknown as Record<string, unknown>);
    },

    /** Create an app */
    async createApp(params: AppCreateParams): Promise<AppCreateResponse> {
      return post<AppCreateResponse>("/open_api/v1.3/app/create/", params as unknown as Record<string, unknown>);
    },

    /** Update an app */
    async updateApp(params: AppUpdateParams): Promise<AppUpdateResponse> {
      return post<AppUpdateResponse>("/open_api/v1.3/app/update/", params as unknown as Record<string, unknown>);
    },

    /** Get the app list */
    async listApp(params: AppListParams): Promise<AppListResponse> {
      return get<AppListResponse>("/open_api/v1.3/app/list/", params as unknown as Record<string, unknown>);
    },

    /** Get App Conversion Events */
    async appOptimizationEvent(params: AppOptimizationEventParams): Promise<AppOptimizationEventResponse> {
      return get<AppOptimizationEventResponse>("/open_api/v1.3/app/optimization_event/", params as unknown as Record<string, unknown>);
    },

    /** Get App Retargeting Events  */
    async optimizationEventRetargeting(params: AppOptimizationEventRetargetingParams): Promise<AppOptimizationEventRetargetingResponse> {
      return get<AppOptimizationEventRetargetingResponse>("/open_api/v1.3/app/optimization_event/retargeting/", params as unknown as Record<string, unknown>);
    },

    /** Report a Web Event */
    async pixelTrack(params: PixelTrackParams): Promise<PixelTrackResponse> {
      return post<PixelTrackResponse>("/open_api/v1.3/pixel/track/", params as unknown as Record<string, unknown>);
    },

    /** Report Web Events in bulk */
    async pixelBatch(params: PixelBatchParams): Promise<PixelBatchResponse> {
      return post<PixelBatchResponse>("/open_api/v1.3/pixel/batch/", params as unknown as Record<string, unknown>);
    },

    /** Get pixels */
    async listPixel(params: PixelListParams): Promise<PixelListResponse> {
      return get<PixelListResponse>("/open_api/v1.3/pixel/list/", params as unknown as Record<string, unknown>);
    },

    /** Create a pixel */
    async createPixel(params: PixelCreateParams): Promise<PixelCreateResponse> {
      return post<PixelCreateResponse>("/open_api/v1.3/pixel/create/", params as unknown as Record<string, unknown>);
    },

    /** Update a pixel */
    async updatePixel(params: PixelUpdateParams): Promise<PixelUpdateResponse> {
      return post<PixelUpdateResponse>("/open_api/v1.3/pixel/update/", params as unknown as Record<string, unknown>);
    },

    /** Create Pixel Events */
    async createEvent(params: PixelEventCreateParams): Promise<PixelEventCreateResponse> {
      return post<PixelEventCreateResponse>("/open_api/v1.3/pixel/event/create/", params as unknown as Record<string, unknown>);
    },

    /** Update a Pixel Event */
    async updateEvent(params: PixelEventUpdateParams): Promise<PixelEventUpdateResponse> {
      return post<PixelEventUpdateResponse>("/open_api/v1.3/pixel/event/update/", params as unknown as Record<string, unknown>);
    },

    /** Delete a Pixel Event */
    async deleteEvent(params: PixelEventDeleteParams): Promise<PixelEventDeleteResponse> {
      return post<PixelEventDeleteResponse>("/open_api/v1.3/pixel/event/delete/", params as unknown as Record<string, unknown>);
    },

    /** Get Instant Page events */
    async instantPageEvent(params: PixelInstantPageEventParams): Promise<PixelInstantPageEventResponse> {
      return get<PixelInstantPageEventResponse>("/open_api/v1.3/pixel/instant_page/event/", params as unknown as Record<string, unknown>);
    },

    /** Get Pixel Event statistics */
    async eventStats(params: PixelEventStatsParams): Promise<PixelEventStatsResponse> {
      return get<PixelEventStatsResponse>("/open_api/v1.3/pixel/event/stats/", params as unknown as Record<string, unknown>);
    },

    /** Create an Offline Event set */
    async createOffline(params: OfflineCreateParams): Promise<OfflineCreateResponse> {
      return post<OfflineCreateResponse>("/open_api/v1.3/offline/create/", params as unknown as Record<string, unknown>);
    },

    /** Update an Offline Event set */
    async updateOffline(params: OfflineUpdateParams): Promise<OfflineUpdateResponse> {
      return post<OfflineUpdateResponse>("/open_api/v1.3/offline/update/", params as unknown as Record<string, unknown>);
    },

    /** Delete an Offline Event set */
    async deleteOffline(params: OfflineDeleteParams): Promise<OfflineDeleteResponse> {
      return post<OfflineDeleteResponse>("/open_api/v1.3/offline/delete/", params as unknown as Record<string, unknown>);
    },

    /** Get Offline Event sets */
    async getOffline(params: OfflineGetParams): Promise<OfflineGetResponse> {
      return get<OfflineGetResponse>("/open_api/v1.3/offline/get/", params as unknown as Record<string, unknown>);
    },

    /** Report an Offline Event */
    async offlineTrack(params: OfflineTrackParams): Promise<OfflineTrackResponse> {
      return post<OfflineTrackResponse>("/open_api/v1.3/offline/track/", params as unknown as Record<string, unknown>);
    },

    /** Report Offline Events in bulk */
    async offlineBatch(params: OfflineBatchParams): Promise<OfflineBatchResponse> {
      return post<OfflineBatchResponse>("/open_api/v1.3/offline/batch/", params as unknown as Record<string, unknown>);
    },

    /** Get CRM Event Sets */
    async listCrm(params: CrmListParams): Promise<CrmListResponse> {
      return get<CrmListResponse>("/open_api/v1.3/crm/list/", params as unknown as Record<string, unknown>);
    },

    /** Create a CRM Event Set */
    async createCrm(params: CrmCreateParams): Promise<CrmCreateResponse> {
      return post<CrmCreateResponse>("/open_api/v1.3/crm/create/", params as unknown as Record<string, unknown>);
    },

    /** Get the message event sets for ad creation */
    async getMessageEventSet(params: CtmMessageEventSetGetParams): Promise<CtmMessageEventSetGetResponse> {
      return get<CtmMessageEventSetGetResponse>("/open_api/v1.3/ctm/message_event_set/get/", params as unknown as Record<string, unknown>);
    },
  };
}
