// @generated
// fingerprint: sha256:36c89ea607781c631135d86a65d129cc27cc71466ee3d9f8ecb8e1213b54305f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface AnalyticsUserConfigFields {
  demo_app_nux_config: Record<string, unknown>;
  flags: Record<string, string>[];
  id: string;
}

export function analyticsUserConfigNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AnalyticsUserConfigFields,
    get: <F extends (keyof AnalyticsUserConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AnalyticsUserConfigFields, F[number]>>(`${id}`, opts),
  };
}

