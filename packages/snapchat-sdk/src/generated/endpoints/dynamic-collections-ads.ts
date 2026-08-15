// @generated
// fingerprint: sha256:f9b708885ac0ebda06ae62e6737c4fc5a7df5d67c9cd29d465b29e85c3c90984
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for dynamic-collections-ads — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { CreativeElement, InteractionZone, Creative, DynamicTemplate, CreateProductSearchParams, CreateCreativeElementParams, CreateInteractionZonParams, CreateCreativParams, CreateDynamicTemplatParams } from "../types/dynamic-collections-ads.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — dynamic-collections-ads */
export function createDynamicCollectionsAdsClient(api: SnapchatApiClient) {
  return {
    /** dynamic-collections-ads */
    async createProductSearch(params: CreateProductSearchParams): Promise<CreativeElement> {
      const { catalogId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/catalogs/${catalogId}/product_search`, rest);
      return ensureOne<CreativeElement>(unpack<CreativeElement>(envelope, "creative_elements", "creative_element"), "CreativeElement");
    },

    /** dynamic-collections-ads */
    async createCreativeElement(params: CreateCreativeElementParams): Promise<CreativeElement> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/creative_elements`, rest);
      return ensureOne<CreativeElement>(unpack<CreativeElement>(envelope, "creative_elements", "creative_element"), "CreativeElement");
    },

    /** Example - Fully Dynamic Collection Ad ​ */
    async createInteractionZon(params: CreateInteractionZonParams): Promise<InteractionZone> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/interaction_zones`, rest);
      return ensureOne<InteractionZone>(unpack<InteractionZone>(envelope, "interaction_zones", "interaction_zone"), "InteractionZone");
    },

    /** Example - Partly Dynamic Collection Ad ​ */
    async createCreativ(params: CreateCreativParams): Promise<Creative> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/creatives`, rest);
      return ensureOne<Creative>(unpack<Creative>(envelope, "creatives", "creative"), "Creative");
    },

    /** Example 2 - Create a SLIDESHOW Dynamic Template ​ */
    async createDynamicTemplat(params: CreateDynamicTemplatParams): Promise<DynamicTemplate> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/dynamic_templates`, { dynamic_templates: [{ ...rest }] });
      return ensureOne<DynamicTemplate>(unpack<DynamicTemplate>(envelope, "dynamic_templates", "dynamic_template"), "DynamicTemplate");
    },
  };
}
