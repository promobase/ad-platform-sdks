// @generated
// fingerprint: sha256:ea6cbb2c8c0c16cb3deba2332f5a060743b8983708a8c5a52877ecf54bce8b9d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
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

