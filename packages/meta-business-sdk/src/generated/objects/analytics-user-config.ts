import type { ApiClient } from "@promobase/sdk-runtime";

export interface AnalyticsUserConfigFields {
  demo_app_nux_config: Record<string, unknown>;
  flags: Record<string, string>[];
  id: string;
}

export function analyticsUserConfigNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AnalyticsUserConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AnalyticsUserConfigFields, F[number]>>(`${id}`, opts),
  };
}

