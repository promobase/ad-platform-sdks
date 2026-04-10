import type { AdCreativePromotionMetadataSpecFields } from "./ad-creative-promotion-metadata-spec.ts";
import type { AdCreativeSiteLinksSpecFields } from "./ad-creative-site-links-spec.ts";

export interface AdCreativeSourcingSpecFields {
  ad_extensions_relevancy_spec: Record<string, unknown>;
  associated_product_set_id: string;
  brand: Record<string, unknown>;
  destination_screenshot_spec: Record<string, unknown>;
  duplication_source: string;
  dynamic_site_links_spec: Record<string, unknown>;
  enable_social_feedback_preservation: boolean;
  intent: Record<string, unknown>;
  pca_spec: Record<string, unknown>;
  product_media_metadata_spec: Record<string, unknown>;
  promotion_metadata_spec: AdCreativePromotionMetadataSpecFields[];
  site_links_data_consented: Record<string, unknown>;
  site_links_spec: AdCreativeSiteLinksSpecFields[];
  source_url: string;
  website_media_spec: Record<string, unknown>;
  website_summary_spec: Record<string, unknown>;
}

