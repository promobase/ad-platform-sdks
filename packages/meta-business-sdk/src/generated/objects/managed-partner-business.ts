// @generated
// fingerprint: sha256:36c45407e3d848516d87d9188f5de0b26b857c80814313dc9748c818f9f7472c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdAccountFields } from "./ad-account.ts";
import type { ExtendedCreditFields } from "./extended-credit.ts";
import type { ManagedPartnerExtendedCreditFields } from "./managed-partner-extended-credit.ts";
import type { PageFields } from "./page.ts";
import type { ProductCatalogFields } from "./product-catalog.ts";

export interface ManagedPartnerBusinessFields {
  ad_account: AdAccountFields;
  catalog_segment: ProductCatalogFields;
  extended_credit: ManagedPartnerExtendedCreditFields;
  page: PageFields;
  seller_business_info: Record<string, unknown>;
  seller_business_status: string;
  template: Record<string, unknown>[];
}

