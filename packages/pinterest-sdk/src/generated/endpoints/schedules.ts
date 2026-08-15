// @generated
// fingerprint: sha256:518a81f0994e3b385cf4d47f4d8441f0412169d3e438a4b3b903ae167ef82e38
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for schedules — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { SchedulesListResponse, SchedulesCreateResponse, SchedulesUpdateResponse } from "../types.ts";
import type { ListSchedulesParams, CreateScheduleParams, UpdateScheduleParams } from "../params.ts";

/** schedules — 3 endpoints */
export function createSchedulesClient(api: PinterestApiClient) {
  return {
    /** Get Schedules
   * Requires pinterest_oauth2: ads:read. */
    async listSchedules(params: ListSchedulesParams): Promise<SchedulesListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<SchedulesListResponse>(`/ad_accounts/${adAccountId}/schedules`, query);
      return envelope;
    },

    /** Create schedules
   * Requires pinterest_oauth2: ads:write. */
    async createSchedule(params: CreateScheduleParams): Promise<SchedulesCreateResponse> {
      const { adAccountId, body, ...query } = params;
      const envelope = await api.post<SchedulesCreateResponse>(`/ad_accounts/${adAccountId}/schedules`, body);
      return envelope;
    },

    /** Update schedules
   * Requires pinterest_oauth2: ads:write. */
    async updateSchedule(params: UpdateScheduleParams): Promise<SchedulesUpdateResponse> {
      const { adAccountId, body, ...query } = params;
      const envelope = await api.patch<SchedulesUpdateResponse>(`/ad_accounts/${adAccountId}/schedules`, body);
      return envelope;
    },
  };
}
