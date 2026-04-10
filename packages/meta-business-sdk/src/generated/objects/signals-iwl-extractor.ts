import type { ApiClient } from "@promobase/sdk-runtime";

export interface SignalsIWLExtractorFields {
  domain_uri: string;
  event_type: string;
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

