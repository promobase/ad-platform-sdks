import type { ApiClient } from "@promobase/sdk-runtime";
import type { AdsPixelFields } from "./ads-pixel.ts";
import type { ApplicationFields } from "./application.ts";
import type { OfflineConversionDataSetFields } from "./offline-conversion-data-set.ts";
import type { PageFields } from "./page.ts";
import type { ProductCatalogFields } from "./product-catalog.ts";

export interface PartnerIntegrationLinkedFields {
  ads_pixel: AdsPixelFields;
  application: ApplicationFields;
  completed_integration_types: string[];
  external_business_connection_id: string;
  external_id: string;
  has_oauth_token: boolean;
  id: string;
  mbe_app_id: string;
  mbe_asset_id: string;
  mbe_external_business_id: string;
  name: string;
  offline_conversion_data_set: OfflineConversionDataSetFields;
  page: PageFields;
  partner: string;
  product_catalog: ProductCatalogFields;
  setup_status: string;
}

export function partnerIntegrationLinkedNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof PartnerIntegrationLinkedFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PartnerIntegrationLinkedFields, F[number]>>(`${id}`, opts),
  };
}

