// @generated
// fingerprint: sha256:4af3f4191e81e4866e39b2f0bb314198b37135e420e1c4a33568be8c32a906cb
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface BusinessOwnedObjectOnBehalfOfRequestFields {
  business_owned_object: string;
  id: string;
  receiving_business: BusinessFields;
  requesting_business: BusinessFields;
  status: string;
}

export function businessOwnedObjectOnBehalfOfRequestNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BusinessOwnedObjectOnBehalfOfRequestFields,
    get: <F extends (keyof BusinessOwnedObjectOnBehalfOfRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessOwnedObjectOnBehalfOfRequestFields, F[number]>>(`${id}`, opts),
  };
}

