// @generated
// fingerprint: sha256:11500316c3cd80d90c48efdd26856383d5096f0b37aee7e98d9771272e2c355a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface ShadowIGScheduledMediaFields {
  caption: string;
  id: string;
  media_type: string;
  media_url: string;
  publish_timestamp: number;
  thumbnail_url: string;
}

export function shadowIGScheduledMediaNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ShadowIGScheduledMediaFields,
    get: <F extends (keyof ShadowIGScheduledMediaFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ShadowIGScheduledMediaFields, F[number]>>(`${id}`, opts),
  };
}

