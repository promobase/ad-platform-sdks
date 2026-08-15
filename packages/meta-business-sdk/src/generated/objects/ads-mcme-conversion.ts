// @generated
// fingerprint: sha256:75da239c2d4cdb5ceefc00f0230a16a32112f036cb32a75ab06737e91962e4b5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface AdsMcmeConversionFields {
  creation_time: string;
  description: string;
  id: string;
  is_archived: boolean;
  mcme_conversion_type: string;
  name: string;
  omnichannel_object_id: string;
}

export function adsMcmeConversionNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdsMcmeConversionFields,
    get: <F extends (keyof AdsMcmeConversionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdsMcmeConversionFields, F[number]>>(`${id}`, opts),
  };
}

