import type { ApiClient } from "@promobase/sdk-runtime";
import type { AdVideoFields } from "./ad-video.ts";

export interface DynamicVideoMetadataFields {
  id: string;
  tags: string[];
  url: string;
  video: AdVideoFields;
}

export function dynamicVideoMetadataNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as DynamicVideoMetadataFields,
    get: <F extends (keyof DynamicVideoMetadataFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<DynamicVideoMetadataFields, F[number]>>(`${id}`, opts),
  };
}

