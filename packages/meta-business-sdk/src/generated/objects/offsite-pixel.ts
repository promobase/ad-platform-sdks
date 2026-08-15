// @generated
// fingerprint: sha256:8be44b1d0579925f1c9a2bad170a8a2564cc0397b2b4a709868456e67ad0752c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface OffsitePixelFields {
  creator: string;
  id: string;
  js_pixel: string;
  last_firing_time: string;
  name: string;
  tag: string;
}

export function offsitePixelNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as OffsitePixelFields,
    get: <F extends (keyof OffsitePixelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OffsitePixelFields, F[number]>>(`${id}`, opts),
  };
}

