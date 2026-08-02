import type { ApiClient } from "@openpromo/sdk-runtime";
import type { BusinessFields } from "./business.ts";
import type { ProductCatalogFields } from "./product-catalog.ts";

export interface CPASCollaborationRequestFields {
  ad_account_id: string;
  ad_account_name: string;
  brands: string[];
  catalog_segment: ProductCatalogFields;
  contact_email: string;
  contact_first_name: string;
  contact_last_name: string;
  creation_time: string;
  id: string;
  phone_number: string;
  receiver_business: BusinessFields;
  requester_agency_or_brand: string;
  seller_id: string;
  sender_business: BusinessFields;
  sender_client_business: BusinessFields;
  shop_url: string;
  source: string;
  status: string;
}

export function cPASCollaborationRequestNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CPASCollaborationRequestFields,
    get: <F extends (keyof CPASCollaborationRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CPASCollaborationRequestFields, F[number]>>(`${id}`, opts),
  };
}

