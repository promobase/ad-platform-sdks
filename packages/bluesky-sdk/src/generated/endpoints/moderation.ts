// Auto-generated client for com.atproto.moderation — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { ComAtprotoModerationDefsReasonType, ComAtprotoAdminDefsRepoRef, ComAtprotoRepoStrongRef, ComAtprotoModerationCreateReportModTool, CreateReportResponse } from "../types.ts";
import type { CreateReportParams } from "../params.ts";

/** com.atproto.moderation — 1 endpoints */
export function createModerationClient(api: BlueskyApiClient) {
  return {
    /** Submit a moderation report regarding an atproto account or record. Implemented by moderation services (with PDS proxying), and requires auth. */
    async createReport(params: CreateReportParams): Promise<CreateReportResponse> {
      const envelope = await api.post<CreateReportResponse>("/xrpc/com.atproto.moderation.createReport", params, undefined);
      return envelope;
    },
  };
}
