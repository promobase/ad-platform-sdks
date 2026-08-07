// Auto-generated client for dynamic-product-ads — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Catalog, ProductFeed, FeedUpload, Facet, Search, Product, ProductSet, DynamicTemplate, CreateCatalogParams, UpdateCatalogParams, ListCatalogsParams, GetCatalogParams, DeleteCatalogParams, CreateProductFeedParams, UpdateProductFeedParams, ListProductFeedsParams, GetProductFeedParams, DeleteProductFeedParams, ListFeedUploadsParams, CreateFeedUploadParams, CreateFacetParams, CreateSearchParams, CreateSearch2Params, CreateSearch3Params, CreateProductSetParams, UpdateProductSetParams, UpdateProductSet2Params, ListProductSetsParams, CreateDynamicTemplatParams, UpdateDynamicTemplatParams, GetDynamicTemplatParams, ListDynamicTemplatesParams } from "../types/dynamic-product-ads.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — dynamic-product-ads */
export function createDynamicProductAdsClient(api: SnapchatApiClient) {
  return {
    /** dynamic-product-ads */
    async createCatalog(params: CreateCatalogParams): Promise<Catalog> {
      const { organizationId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/organizations/${organizationId}/catalogs`, { catalogs: [{ ...rest }] });
      return ensureOne<Catalog>(unpack<Catalog>(envelope, "catalogs", "catalog"), "Catalog");
    },

    /** dynamic-product-ads */
    async updateCatalog(params: UpdateCatalogParams): Promise<Catalog> {
      const { organizationId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/organizations/${organizationId}/catalogs`, rest);
      return ensureOne<Catalog>(unpack<Catalog>(envelope, "catalogs", "catalog"), "Catalog");
    },

    /** dynamic-product-ads */
    listCatalogs(params: ListCatalogsParams): SnapchatCursor<Catalog> {
      const { organizationId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/organizations/${organizationId}/catalogs`, link ? undefined : query).then((envelope) => ({
          items: unpack<Catalog>(envelope, "catalogs", "catalog"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** dynamic-product-ads */
    async getCatalog(params: GetCatalogParams): Promise<Catalog> {
      const { catalogId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/catalogs/${catalogId}`, query);
      return ensureOne<Catalog>(unpack<Catalog>(envelope, "catalogs", "catalog"), "Catalog");
    },

    /** dynamic-product-ads */
    async deleteCatalog(params: DeleteCatalogParams): Promise<void> {
      const { catalogId, ...query } = params;
      await api.delete<SnapchatEnvelope>(`/catalogs/${catalogId}`);
    },

    /** Example 1 - Creating a PRIMARY Product Feed ​ */
    async createProductFeed(params: CreateProductFeedParams): Promise<ProductFeed> {
      const { catalogId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/catalogs/${catalogId}/product_feeds`, { product_feeds: [{ ...rest }] });
      return ensureOne<ProductFeed>(unpack<ProductFeed>(envelope, "product_feeds", "product_feed"), "ProductFeed");
    },

    /** dynamic-product-ads */
    async updateProductFeed(params: UpdateProductFeedParams): Promise<ProductFeed> {
      const { catalogId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/catalogs/${catalogId}/product_feeds`, { product_feeds: [{ ...rest }] });
      return ensureOne<ProductFeed>(unpack<ProductFeed>(envelope, "product_feeds", "product_feed"), "ProductFeed");
    },

    /** dynamic-product-ads */
    listProductFeeds(params: ListProductFeedsParams): SnapchatCursor<ProductFeed> {
      const { catalogId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/catalogs/${catalogId}/product_feeds`, link ? undefined : query).then((envelope) => ({
          items: unpack<ProductFeed>(envelope, "product_feeds", "product_feed"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** dynamic-product-ads */
    async getProductFeed(params: GetProductFeedParams): Promise<ProductFeed> {
      const { productFeedId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/product_feeds/${productFeedId}`, query);
      return ensureOne<ProductFeed>(unpack<ProductFeed>(envelope, "product_feeds", "product_feed"), "ProductFeed");
    },

    /** dynamic-product-ads */
    async deleteProductFeed(params: DeleteProductFeedParams): Promise<void> {
      const { productFeedId, ...query } = params;
      await api.delete<SnapchatEnvelope>(`/product_feeds/${productFeedId}`);
    },

    /** dynamic-product-ads */
    listFeedUploads(params: ListFeedUploadsParams): SnapchatCursor<FeedUpload> {
      const { productFeedId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/product_feeds/${productFeedId}/feed_uploads`, link ? undefined : query).then((envelope) => ({
          items: unpack<FeedUpload>(envelope, "feed_uploads", "feed_upload"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** Example 1 - Feed upload using update_type REPLACE ​ */
    async createFeedUpload(params: CreateFeedUploadParams): Promise<ProductFeed> {
      const { productFeedId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/product_feeds/${productFeedId}/feed_uploads`, { product_feeds: [{ ...rest }] });
      return ensureOne<ProductFeed>(unpack<ProductFeed>(envelope, "product_feeds", "product_feed"), "ProductFeed");
    },

    /** dynamic-product-ads */
    async createFacet(params: CreateFacetParams): Promise<Facet> {
      const { catalogId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/catalogs/${catalogId}/facets`, { facets: [{ ...rest }] });
      return ensureOne<Facet>(unpack<Facet>(envelope, "facets", "facet"), "Facet");
    },

    /** Example 1 - Product Search ​ */
    async createSearch(params: CreateSearchParams): Promise<Search> {
      const { catalogId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/catalogs/${catalogId}/products/search`, rest);
      return ensureOne<Search>(unpack<Search>(envelope, "search", "search"), "Search");
    },

    /** Example 1 - Hotel Search ​ */
    async createSearch2(params: CreateSearch2Params): Promise<Product> {
      const { catalogId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/catalogs/${catalogId}/hotels/search`, rest);
      return ensureOne<Product>(unpack<Product>(envelope, "hotels", "product"), "Product");
    },

    /** Example 1 - Flight Search ​ */
    async createSearch3(params: CreateSearch3Params): Promise<ProductSet> {
      const { catalogId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/catalogs/${catalogId}/flights/search`, rest);
      return ensureOne<ProductSet>(unpack<ProductSet>(envelope, "product_sets", "product_set"), "ProductSet");
    },

    /** dynamic-product-ads */
    async createProductSet(params: CreateProductSetParams): Promise<ProductSet> {
      const { catalogId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/catalogs/${catalogId}/product_sets`, { product_sets: [{ ...rest }] });
      return ensureOne<ProductSet>(unpack<ProductSet>(envelope, "product_sets", "product_set"), "ProductSet");
    },

    /** dynamic-product-ads */
    async updateProductSet(params: UpdateProductSetParams): Promise<ProductSet> {
      const { catalogId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/catalogs/${catalogId}/product_sets`, { product_sets: [{ ...rest }] });
      return ensureOne<ProductSet>(unpack<ProductSet>(envelope, "product_sets", "product_set"), "ProductSet");
    },

    /** dynamic-product-ads */
    async updateProductSet2(params: UpdateProductSet2Params): Promise<ProductSet> {
      const { productSetId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/product_sets/${productSetId}`, rest);
      return ensureOne<ProductSet>(unpack<ProductSet>(envelope, "product_sets", "product_set"), "ProductSet");
    },

    /** dynamic-product-ads */
    listProductSets(params: ListProductSetsParams): SnapchatCursor<ProductSet> {
      const { catalogId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/catalogs/${catalogId}/product_sets`, link ? undefined : query).then((envelope) => ({
          items: unpack<ProductSet>(envelope, "product_sets", "product_set"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** dynamic-product-ads */
    async createDynamicTemplat(params: CreateDynamicTemplatParams): Promise<DynamicTemplate> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/dynamic_templates`, { dynamic_templates: [{ ...rest }] });
      return ensureOne<DynamicTemplate>(unpack<DynamicTemplate>(envelope, "dynamic_templates", "dynamic_template"), "DynamicTemplate");
    },

    /** dynamic-product-ads */
    async updateDynamicTemplat(params: UpdateDynamicTemplatParams): Promise<DynamicTemplate> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/adaccounts/${adAccountId}/dynamic_templates`, rest);
      return ensureOne<DynamicTemplate>(unpack<DynamicTemplate>(envelope, "dynamic_templates", "dynamic_template"), "DynamicTemplate");
    },

    /** dynamic-product-ads */
    async getDynamicTemplat(params: GetDynamicTemplatParams): Promise<DynamicTemplate> {
      const { dynamicTemplateId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/dynamic_templates/${dynamicTemplateId}`, query);
      return ensureOne<DynamicTemplate>(unpack<DynamicTemplate>(envelope, "dynamic_templates", "dynamic_template"), "DynamicTemplate");
    },

    /** dynamic-product-ads */
    listDynamicTemplates(params: ListDynamicTemplatesParams): SnapchatCursor<DynamicTemplate> {
      const { adAccountId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/adaccounts/${adAccountId}/dynamic_templates`, link ? undefined : query).then((envelope) => ({
          items: unpack<DynamicTemplate>(envelope, "dynamic_templates", "dynamic_template"),
          nextLink: nextLink(envelope),
        })),
      );
    },
  };
}
