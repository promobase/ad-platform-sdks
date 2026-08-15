// @generated
// fingerprint: sha256:4d06f9dafbe2b93bc4f96347062e9d3de6417dadd784f9430cbf979b1014204e
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Creative Tools — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { CreativeStatusGetParams, CreativeStatusGetResponse, CreativeImageEditParams, CreativeImageEditResponse, CreativeAdsPreviewCreateParams, CreativeAdsPreviewCreateResponse, CreativeVideoSoundtrackCreateParams, CreativeVideoSoundtrackCreateResponse, CreativeQuickOptimizationCreateParams, CreativeQuickOptimizationCreateResponse, CreativeSmartVideoCreateParams, CreativeSmartVideoCreateResponse, CreativeAssetShareParams, CreativeAssetShareResponse, CreativeAssetDeleteParams, CreativeAssetDeleteResponse, CreativeSmartTextGenerateParams, CreativeSmartTextGenerateResponse, CreativeCtaRecommendParams, CreativeCtaRecommendResponse, VideoFixTaskCreateParams, VideoFixTaskCreateResponse, VideoFixTaskGetParams, VideoFixTaskGetResponse, CreativeFatigueGetParams, CreativeFatigueGetResponse } from "../types/creative-tools.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCreativeTools(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
