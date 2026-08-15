// @generated
// fingerprint: sha256:3ebdd4bb735d4f4143819fa8d597e4c5d19a3b08d59dbb9b412fdf2dd77dcb16
// DO NOT EDIT: generated file; changes will be overwritten.
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
