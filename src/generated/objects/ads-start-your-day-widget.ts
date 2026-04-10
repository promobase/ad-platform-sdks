import type { ApiClient } from "../../runtime/client.ts";

export interface AdsStartYourDayWidgetFields {
  id: string;
  widget_id: string;
}

export function adsStartYourDayWidgetNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdsStartYourDayWidgetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsStartYourDayWidgetFields, F[number]>>(`${id}`, opts),
  };
}

