// @generated
// fingerprint: sha256:b25b24307637ffe4283700e9e652aab9081c63a50cdd787ead04373f60e7c69f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface SignalsIWLExtractorFields {
  domain_uri: string;
  event_type: string;
  extractor_config: Record<string, unknown>;
  extractor_type: string;
  id: string;
}

export function signalsIWLExtractorNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as SignalsIWLExtractorFields,
    get: <F extends (keyof SignalsIWLExtractorFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<SignalsIWLExtractorFields, F[number]>>(`${id}`, opts),
  };
}

