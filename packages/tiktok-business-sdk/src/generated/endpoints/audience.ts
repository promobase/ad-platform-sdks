// @generated
// fingerprint: sha256:1fb8e51956d50d125dd1f424498f3ece6a9a4146856b41d5211918aeadbfb631
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Audience — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { DmpCustomAudienceFileUploadParams, DmpCustomAudienceFileUploadResponse, DmpCustomAudienceCreateParams, DmpCustomAudienceCreateResponse, SegmentAudienceParams, SegmentAudienceResponse, SegmentMappingParams, SegmentMappingResponse, DmpCustomAudienceUpdateParams, DmpCustomAudienceUpdateResponse, DmpCustomAudienceListParams, DmpCustomAudienceListResponse, DmpCustomAudienceGetParams, DmpCustomAudienceGetResponse, DmpCustomAudienceRuleCreateParams, DmpCustomAudienceRuleCreateResponse, DmpCustomAudienceLookalikeCreateParams, DmpCustomAudienceLookalikeCreateResponse, DmpCustomAudienceLookalikeUpdateParams, DmpCustomAudienceLookalikeUpdateResponse, DmpCustomAudienceDeleteParams, DmpCustomAudienceDeleteResponse, DmpCustomAudienceShareParams, DmpCustomAudienceShareResponse, DmpCustomAudienceShareCancelParams, DmpCustomAudienceShareCancelResponse, DmpCustomAudienceShareLogParams, DmpCustomAudienceShareLogResponse, DmpCustomAudienceApplyParams, DmpCustomAudienceApplyResponse, DmpCustomAudienceApplyLogParams, DmpCustomAudienceApplyLogResponse, DmpSavedAudienceCreateParams, DmpSavedAudienceCreateResponse, DmpSavedAudienceListParams, DmpSavedAudienceListResponse, DmpSavedAudienceDeleteParams, DmpSavedAudienceDeleteResponse, AudienceInsightInfoParams, AudienceInsightInfoResponse, AudienceInsightOverlapParams, AudienceInsightOverlapResponse } from "../types/audience.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAudience(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Upload an audience file */
    async fileUpload(params: DmpCustomAudienceFileUploadParams): Promise<DmpCustomAudienceFileUploadResponse> {
      return post<DmpCustomAudienceFileUploadResponse>("/open_api/v1.3/dmp/custom_audience/file/upload/", params as unknown as Record<string, unknown>);
    },

    /** Create an audience by file */
    async createCustomAudience(params: DmpCustomAudienceCreateParams): Promise<DmpCustomAudienceCreateResponse> {
      return post<DmpCustomAudienceCreateResponse>("/open_api/v1.3/dmp/custom_audience/create/", params as unknown as Record<string, unknown>);
    },

    /** Create/Delete an audience segment */
    async segmentAudience(params: SegmentAudienceParams): Promise<SegmentAudienceResponse> {
      return post<SegmentAudienceResponse>("/open_api/v1.3/segment/audience/", params as unknown as Record<string, unknown>);
    },

    /** Add/Delete audience segment mappings */
    async segmentMapping(params: SegmentMappingParams): Promise<SegmentMappingResponse> {
      return post<SegmentMappingResponse>("/open_api/v1.3/segment/mapping/", params as unknown as Record<string, unknown>);
    },

    /** Update an audience */
    async updateCustomAudience(params: DmpCustomAudienceUpdateParams): Promise<DmpCustomAudienceUpdateResponse> {
      return post<DmpCustomAudienceUpdateResponse>("/open_api/v1.3/dmp/custom_audience/update/", params as unknown as Record<string, unknown>);
    },

    /** Get all audiences */
    async listCustomAudience(params: DmpCustomAudienceListParams): Promise<DmpCustomAudienceListResponse> {
      return get<DmpCustomAudienceListResponse>("/open_api/v1.3/dmp/custom_audience/list/", params as unknown as Record<string, unknown>);
    },

    /** Get audience details */
    async getCustomAudience(params: DmpCustomAudienceGetParams): Promise<DmpCustomAudienceGetResponse> {
      return get<DmpCustomAudienceGetResponse>("/open_api/v1.3/dmp/custom_audience/get/", params as unknown as Record<string, unknown>);
    },

    /** Create an audience by rule */
    async createRule(params: DmpCustomAudienceRuleCreateParams): Promise<DmpCustomAudienceRuleCreateResponse> {
      return post<DmpCustomAudienceRuleCreateResponse>("/open_api/v1.3/dmp/custom_audience/rule/create/", params as unknown as Record<string, unknown>);
    },

    /** Create a lookalike audience */
    async createLookalike(params: DmpCustomAudienceLookalikeCreateParams): Promise<DmpCustomAudienceLookalikeCreateResponse> {
      return post<DmpCustomAudienceLookalikeCreateResponse>("/open_api/v1.3/dmp/custom_audience/lookalike/create/", params as unknown as Record<string, unknown>);
    },

    /** Refresh a lookalike audience  */
    async updateLookalike(params: DmpCustomAudienceLookalikeUpdateParams): Promise<DmpCustomAudienceLookalikeUpdateResponse> {
      return post<DmpCustomAudienceLookalikeUpdateResponse>("/open_api/v1.3/dmp/custom_audience/lookalike/update/", params as unknown as Record<string, unknown>);
    },

    /** Delete audiences */
    async deleteCustomAudience(params: DmpCustomAudienceDeleteParams): Promise<DmpCustomAudienceDeleteResponse> {
      return post<DmpCustomAudienceDeleteResponse>("/open_api/v1.3/dmp/custom_audience/delete/", params as unknown as Record<string, unknown>);
    },

    /** Share audiences */
    async customAudienceShare(params: DmpCustomAudienceShareParams): Promise<DmpCustomAudienceShareResponse> {
      return post<DmpCustomAudienceShareResponse>("/open_api/v1.3/dmp/custom_audience/share/", params as unknown as Record<string, unknown>);
    },

    /** Cancel the sharing of an audience */
    async shareCancel(params: DmpCustomAudienceShareCancelParams): Promise<DmpCustomAudienceShareCancelResponse> {
      return post<DmpCustomAudienceShareCancelResponse>("/open_api/v1.3/dmp/custom_audience/share/cancel/", params as unknown as Record<string, unknown>);
    },

    /** Get the sharing log of an audience */
    async shareLog(params: DmpCustomAudienceShareLogParams): Promise<DmpCustomAudienceShareLogResponse> {
      return get<DmpCustomAudienceShareLogResponse>("/open_api/v1.3/dmp/custom_audience/share/log/", params as unknown as Record<string, unknown>);
    },

    /** Apply audiences to ad groups */
    async customAudienceApply(params: DmpCustomAudienceApplyParams): Promise<DmpCustomAudienceApplyResponse> {
      return post<DmpCustomAudienceApplyResponse>("/open_api/v1.3/dmp/custom_audience/apply/", params as unknown as Record<string, unknown>);
    },

    /** Get the application log of audiences  */
    async applyLog(params: DmpCustomAudienceApplyLogParams): Promise<DmpCustomAudienceApplyLogResponse> {
      return get<DmpCustomAudienceApplyLogResponse>("/open_api/v1.3/dmp/custom_audience/apply/log/", params as unknown as Record<string, unknown>);
    },

    /** Create a Saved Audience */
    async createSavedAudience(params: DmpSavedAudienceCreateParams): Promise<DmpSavedAudienceCreateResponse> {
      return post<DmpSavedAudienceCreateResponse>("/open_api/v1.3/dmp/saved_audience/create/", params as unknown as Record<string, unknown>);
    },

    /** Get details of Saved Audiences */
    async listSavedAudience(params: DmpSavedAudienceListParams): Promise<DmpSavedAudienceListResponse> {
      return get<DmpSavedAudienceListResponse>("/open_api/v1.3/dmp/saved_audience/list/", params as unknown as Record<string, unknown>);
    },

    /** Delete Saved Audiences */
    async deleteSavedAudience(params: DmpSavedAudienceDeleteParams): Promise<DmpSavedAudienceDeleteResponse> {
      return post<DmpSavedAudienceDeleteResponse>("/open_api/v1.3/dmp/saved_audience/delete/", params as unknown as Record<string, unknown>);
    },

    /** Get details of potential audiences */
    async insightInfo(params: AudienceInsightInfoParams): Promise<AudienceInsightInfoResponse> {
      return post<AudienceInsightInfoResponse>("/open_api/v1.3/audience/insight/info/", params as unknown as Record<string, unknown>);
    },

    /** Get details of audience overlap */
    async insightOverlap(params: AudienceInsightOverlapParams): Promise<AudienceInsightOverlapResponse> {
      return get<AudienceInsightOverlapResponse>("/open_api/v1.3/audience/insight/overlap/", params as unknown as Record<string, unknown>);
    },
  };
}
