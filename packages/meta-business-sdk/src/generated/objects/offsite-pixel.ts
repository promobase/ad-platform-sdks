import type { ApiClient } from "@promobase/sdk-runtime";

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
    get: <F extends (keyof OffsitePixelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<OffsitePixelFields, F[number]>>(`${id}`, opts),
  };
}

