import type { ApiClient } from "@promobase/sdk-runtime";

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

