import type { ApiClient } from "@promobase/sdk-runtime";

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

