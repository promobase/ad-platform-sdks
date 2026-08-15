// @generated
// fingerprint: sha256:2e7c699d17bba08a15d13de90f5630c14b34dc99f733763b2c296dfa3b14b36f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

