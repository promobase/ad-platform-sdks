import type { ApiClient } from "@promobase/sdk-runtime";

export interface AdsStartYourDayWidgetFields {
  id: string;
  widget_id: string;
}

export function adsStartYourDayWidgetNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdsStartYourDayWidgetFields,
    get: <F extends (keyof AdsStartYourDayWidgetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsStartYourDayWidgetFields, F[number]>>(`${id}`, opts),
  };
}

