// Auto-generated types for dynamic-product-ads — do not edit

export interface Catalog {
  created_at: string;
  updated_at: string;
  id: string;
  name: string;
  organization_id: string;
  event_sources: {
  id: string;
  type: string;
}[];
  default_product_set_id: string;
  vertical: string;
}


export interface ProductFeed {
  created_at: string;
  updated_at: string;
  id: string;
  catalog_id: string;
  name: string;
  default_currency: string;
  schedule: {
  interval_type: string;
  timezone: string;
  minute: number;
  interval_count: number;
  url: string;
};
}


export interface FeedUpload {
  created_at: string;
  updated_at: string;
  id: string;
  feed_id: string;
  summary: {
  issues_summary: Record<string, unknown>;
};
  url: string;
  update_type: string;
  status: string;
}


export interface Facet {
  property: string;
}


export interface Search {
  catalog_id: string;
}


export interface Product {
  id: string;
  external_id: string;
  created_at: string;
  updated_at: string;
  catalog_id: string;
  name: string;
  description: string;
  link: string;
  mobile_link: string;
  main_media: {
  url: string;
  tags: unknown[];
};
  additional_media: {
  url: string;
  tags: unknown[];
}[];
  address: {
  line: string;
  line2: string;
  locality: string;
  postal_code: string;
  region: string;
  country_code: string;
};
  price: {
  value: string;
  currency: string;
};
  sale_price: {
  value: string;
  currency: string;
};
  neighborhoods: unknown[];
  geographic_coordinates: {
  longitude: number;
  latitude: number;
};
  guest_ratings: {
  rating_system: string;
  score: string;
  max_score: string;
  number_of_reviewers: string;
};
  star_rating: string;
  ios_app_link: {
  url: string;
  app_store_id: string;
  app_name: string;
};
  android_app_link: {
  url: string;
  package: string;
  app_name: string;
};
  loyalty_program: string;
  custom_labels: Record<string, unknown>;
  activity: string;
}


export interface ProductSet {
  id: string;
  catalog_id: string;
  name: string;
  filter: {
  AVAILABILITY: {
    EQ: string;
  };
};
  created_at: string;
  updated_at: string;
}


export interface DynamicTemplate {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  ad_account_id: string;
  ios_url: string;
  android_url: string;
  layout: string;
  text_fields: unknown[];
  background_color: string;
  preferred_image_tags: unknown[];
  overlay_specs: {
  type: string;
  media_id: string;
  position: string;
}[];
}


export interface CreateCatalogParams {
  organizationId: string;
  name: string;
  vertical: string;
  event_sources: {
  id: string;
  type: string;
}[];
}


export interface UpdateCatalogParams {
  organizationId: string;
}


export interface ListCatalogsParams {
  organizationId: string;
}


export interface GetCatalogParams {
  catalogId: string;
}


export interface DeleteCatalogParams {
  catalogId: string;
}


export interface CreateProductFeedParams {
  catalogId: string;
  name: string;
  default_currency: string;
  status: string;
  schedule: {
  url: string;
  username: string;
  password: string;
  interval_type: string;
  interval_count: string;
  timezone: string;
  minute: string;
};
}


export interface UpdateProductFeedParams {
  catalogId: string;
  id: string;
  name: string;
  default_currency: string;
  status: string;
  schedule: {
  url: string;
  username: string;
  password: string;
  interval_type: string;
  interval_count: string;
  timezone: string;
  hour: string;
  minute: string;
};
}


export interface ListProductFeedsParams {
  catalogId: string;
}


export interface GetProductFeedParams {
  productFeedId: string;
}


export interface DeleteProductFeedParams {
  productFeedId: string;
}


export interface ListFeedUploadsParams {
  productFeedId: string;
}


export interface CreateFeedUploadParams {
  productFeedId: string;
  catalog_id: string;
  name: string;
  default_currency: string;
  status: string;
}


export interface CreateFacetParams {
  catalogId: string;
  property: string;
}


export interface CreateSearchParams {
  catalogId: string;
  limit: number;
}


export interface CreateSearch2Params {
  catalogId: string;
  limit: number;
}


export interface CreateSearch3Params {
  catalogId: string;
  limit: number;
}


export interface CreateProductSetParams {
  catalogId: string;
  id: string;
  name: string;
  filter: {
  AND: {
    AVAILABILITY: {
      EQ: string;
    };
  }[];
};
}


export interface UpdateProductSetParams {
  catalogId: string;
  id: string;
  name: string;
  filter: {
  AND: {
    AVAILABILITY: {
      EQ: string;
    };
  }[];
};
}


export interface UpdateProductSet2Params {
  productSetId: string;
}


export interface ListProductSetsParams {
  catalogId: string;
  cursor?: string;
  limit?: string;
}


export interface CreateDynamicTemplatParams {
  adAccountId: string;
  name: string;
  ios_url: string;
  android_url: string;
  layout: string;
  text_fields: unknown[];
  background_color: string;
  overlay_specs: {
  type: string;
  media_id: string;
  position: string;
}[];
}


export interface UpdateDynamicTemplatParams {
  adAccountId: string;
}


export interface GetDynamicTemplatParams {
  dynamicTemplateId: string;
}


export interface ListDynamicTemplatesParams {
  adAccountId: string;
}
