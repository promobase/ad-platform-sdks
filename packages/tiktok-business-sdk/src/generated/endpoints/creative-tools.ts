// Auto-generated client for Creative Tools — do not edit
import type { CreativeStatusGetParams, CreativeStatusGetResponse, CreativeImageEditParams, CreativeImageEditResponse, CreativeAdsPreviewCreateParams, CreativeAdsPreviewCreateResponse, CreativeVideoSoundtrackCreateParams, CreativeVideoSoundtrackCreateResponse, CreativeQuickOptimizationCreateParams, CreativeQuickOptimizationCreateResponse, CreativeSmartVideoCreateParams, CreativeSmartVideoCreateResponse, CreativeAssetShareParams, CreativeAssetShareResponse, CreativeAssetDeleteParams, CreativeAssetDeleteResponse, CreativeSmartTextGenerateParams, CreativeSmartTextGenerateResponse, CreativeCtaRecommendParams, CreativeCtaRecommendResponse, VideoFixTaskCreateParams, VideoFixTaskCreateResponse, VideoFixTaskGetParams, VideoFixTaskGetResponse, CreativeFatigueGetParams, CreativeFatigueGetResponse } from "../types/creative-tools.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCreativeTools(opts: { accessToken: string; advertiserId: string }) {
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
    /** (Deprecated) Get the status of a task */
    async getStatus(params: CreativeStatusGetParams): Promise<CreativeStatusGetResponse> {
      return get<CreativeStatusGetResponse>("/open_api/v1.3/creative/status/get/", params as unknown as Record<string, unknown>);
    },

    /** Edit an image */
    async imageEdit(params: CreativeImageEditParams): Promise<CreativeImageEditResponse> {
      return post<CreativeImageEditResponse>("/open_api/v1.3/creative/image/edit/", params as unknown as Record<string, unknown>);
    },

    /** Preview an ad or a creative */
    async createAdsPreview(params: CreativeAdsPreviewCreateParams): Promise<CreativeAdsPreviewCreateResponse> {
      return post<CreativeAdsPreviewCreateResponse>("/open_api/v1.3/creative/ads_preview/create/", params as unknown as Record<string, unknown>);
    },

    /** (Deprecated) Create a Smart Video Soundtrack task */
    async createVideoSoundtrack(params: CreativeVideoSoundtrackCreateParams): Promise<CreativeVideoSoundtrackCreateResponse> {
      return post<CreativeVideoSoundtrackCreateResponse>("/open_api/v1.3/creative/video_soundtrack/create/", params as unknown as Record<string, unknown>);
    },

    /** (Deprecated) Create a Quick Optimization task */
    async createQuickOptimization(params: CreativeQuickOptimizationCreateParams): Promise<CreativeQuickOptimizationCreateResponse> {
      return post<CreativeQuickOptimizationCreateResponse>("/open_api/v1.3/creative/quick_optimization/create/", params as unknown as Record<string, unknown>);
    },

    /** (Deprecated) Create a Smart Video task */
    async createSmartVideo(params: CreativeSmartVideoCreateParams): Promise<CreativeSmartVideoCreateResponse> {
      return post<CreativeSmartVideoCreateResponse>("/open_api/v1.3/creative/smart_video/create/", params as unknown as Record<string, unknown>);
    },

    /** Share creative assets */
    async assetShare(params: CreativeAssetShareParams): Promise<CreativeAssetShareResponse> {
      return post<CreativeAssetShareResponse>("/open_api/v1.3/creative/asset/share/", params as unknown as Record<string, unknown>);
    },

    /** Delete creative assets */
    async deleteAsset(params: CreativeAssetDeleteParams): Promise<CreativeAssetDeleteResponse> {
      return post<CreativeAssetDeleteResponse>("/open_api/v1.3/creative/asset/delete/", params as unknown as Record<string, unknown>);
    },

    /** Get Smart Text recommendations */
    async smartTextGenerate(params: CreativeSmartTextGenerateParams): Promise<CreativeSmartTextGenerateResponse> {
      return post<CreativeSmartTextGenerateResponse>("/open_api/v1.3/creative/smart_text/generate/", params as unknown as Record<string, unknown>);
    },

    /** Get recommended CTAs */
    async ctaRecommend(params: CreativeCtaRecommendParams): Promise<CreativeCtaRecommendResponse> {
      return get<CreativeCtaRecommendResponse>("/open_api/v1.3/creative/cta/recommend/", params as unknown as Record<string, unknown>);
    },

    /** Create a Smart Fix task */
    async createTask(params: VideoFixTaskCreateParams): Promise<VideoFixTaskCreateResponse> {
      return post<VideoFixTaskCreateResponse>("/open_api/v1.3/video/fix/task/create/", params as unknown as Record<string, unknown>);
    },

    /** Get the results of a Smart Fix task */
    async getTask(params: VideoFixTaskGetParams): Promise<VideoFixTaskGetResponse> {
      return get<VideoFixTaskGetResponse>("/open_api/v1.3/video/fix/task/get/", params as unknown as Record<string, unknown>);
    },

    /** Get Creative Fatigue Detection results */
    async getCreativeFatigue(params: CreativeFatigueGetParams): Promise<CreativeFatigueGetResponse> {
      return get<CreativeFatigueGetResponse>("/open_api/v1.3/creative_fatigue/get/", params as unknown as Record<string, unknown>);
    },
  };
}
