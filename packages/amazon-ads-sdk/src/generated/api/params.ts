// @generated
// fingerprint: sha256:2fa5cad1eb9b4a1e3eab59b701b1f1affb214b730ac787195e7ba517121625f6
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated endpoint params for the Amazon Ads API v3 — do not edit

export interface ListBrandStoreEditionParams {
  brandStoreId: string;
  nextToken?: string;
  maxResults?: number;
}


export interface PostQueryBrandStoreEditionPublishVersionParams {
  editionIdFilter: {
    include: string[];
  };
  maxResults?: number;
  nextToken?: string;
  publishStatusFilter: {
    include: "DRAFT" | "REVIEW_IN_PROGRESS"[];
  };
  storeIdFilter: {
    include: string[];
  };
}


export interface UpdateBrandStoreEditionPublishVersionParams {
  brandStoreEditionPublishVersions: {
    editionId?: string;
    publishState?: "DRAFT" | "PUBLISH";
    storeEditionPublishId: string;
    storeId?: string;
  }[];
}


export interface PostQueryBrandStorePageParams {
  editionIdFilter: {
    include: string[];
  };
  maxResults?: number;
  nextToken?: string;
  pageIdFilter: {
    include: string[];
  };
  storeEditionPublishIdFilter?: {
    include: string[];
  };
  storeIdFilter: {
    include: string[];
  };
}


export interface UpdateBrandStorePageParams {
  brandStorePages: {
    content?: {
      description?: string;
      template?: "BLANK" | "HIGHLIGHT" | "MARQUEE" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
      title?: string;
      widgets?: {
        storeHeroImageWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          content?: {
            assetId?: string;
            assetTags?: string;
            canvasData?: {
              canvasHeight?: number;
              height?: number;
              left?: number;
              naturalHeight?: number;
              naturalWidth?: number;
              top?: number;
              width?: number;
            };
            description?: string;
            imageHeight?: number;
            imageKey?: string;
            imageOffsetLeft?: number;
            imageOffsetTop?: number;
            imageUrl: string;
            imageWidth?: number;
            mobileContent?: {
              assetId?: string;
              assetTags?: string;
              canvasData?: {
                canvasHeight?: number;
                height?: number;
                left?: number;
                naturalHeight?: number;
                naturalWidth?: number;
                top?: number;
                width?: number;
              };
              imageHeight?: number;
              imageKey?: string;
              imageOffsetLeft?: number;
              imageOffsetTop?: number;
              imageUrl?: string;
              imageWidth?: number;
              version?: string;
            };
            tag?: string;
            textOverlay?: string;
          };
        };
      } | {
        storeTileWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          rowHeight?: number;
          tiles: {
            storeImageWithTextTile: {
              commonProperties: {
                size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                tag: string;
                type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
              };
              content?: {
                altText?: string;
                assetId?: string;
                assetTags?: string;
                bleedImage?: "ALL" | "CORNER" | "NONE" | "SIDE";
                callToAction?: string;
                canvasData?: {
                  canvasHeight?: number;
                  height?: number;
                  left?: number;
                  naturalHeight?: number;
                  naturalWidth?: number;
                  top?: number;
                  width?: number;
                };
                cropBoxData?: {
                  height?: number;
                  left?: number;
                  top?: number;
                  width?: number;
                };
                customUrl?: string;
                hideTitle?: boolean;
                imageHeight?: number;
                imageKey?: string;
                imageOffsetLeft?: number;
                imageOffsetTop?: number;
                imageUrl?: string;
                imageWidth?: number;
                isAiGen?: boolean;
                layout?: "CONTAIN" | "COVER" | "TEXT";
                pageId?: string;
                productAsins?: string[];
                renderTileLayers?: boolean;
                shape?: "SQUARE";
                text?: string;
                textAlign?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                textOption?: "TEXT_NEXT_TO_IMAGE" | "TEXT_OVER_IMAGE";
                tileLayers?: {
                  colorPalette?: "DEFAULT" | "DEFAULT_INVERTED" | "SOLID_BLACK" | "SOLID_WHITE" | "TRANSLUCENT_BLACK" | "TRANSLUCENT_WHITE" | "TRANSPARENT_BLACK" | "TRANSPARENT_WHITE";
                  content?: {
                    bodyText?: string;
                    bondCustomerServiceLink?: boolean;
                    callToAction?: string;
                    callToActionType?: "BUTTON" | "LINK";
                    customUrl?: string;
                    headerText?: string;
                    pageId?: string;
                    prefixText?: string;
                    productAsins?: string[];
                    tileTextAlignment?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                    tileTextSize?: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                  };
                  coverTile?: boolean;
                  margin?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                  opacity?: number;
                  outOfBounds?: boolean;
                  padding?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                  position?: {
                    x?: "CENTER" | "LEFT" | "RIGHT";
                    y?: "BOTTOM" | "MIDDLE" | "TOP";
                  };
                  tag?: string;
                  type?: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
                }[];
                title?: string;
                verticalAlign?: "BOTTOM" | "MIDDLE" | "TOP";
              };
              flexHeight?: boolean;
              mobileContent?: {
                altText?: string;
                assetId?: string;
                assetTags?: string;
                bleedImage?: "ALL" | "CORNER" | "NONE" | "SIDE";
                canvasData?: {
                  canvasHeight?: number;
                  height?: number;
                  left?: number;
                  naturalHeight?: number;
                  naturalWidth?: number;
                  top?: number;
                  width?: number;
                };
                cropBoxData?: {
                  height?: number;
                  left?: number;
                  top?: number;
                  width?: number;
                };
                hideTitle?: boolean;
                imageHeight?: number;
                imageKey?: string;
                imageOffsetLeft?: number;
                imageOffsetTop?: number;
                imageUrl?: string;
                imageWidth?: number;
                isAiGen?: boolean;
                layout?: "CONTAIN" | "COVER" | "TEXT";
                renderTileLayers?: boolean;
                shape?: "SQUARE";
                text?: string;
                textAlign?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                textOption?: "TEXT_NEXT_TO_IMAGE" | "TEXT_OVER_IMAGE";
                tileLayers?: {
                  colorPalette?: "DEFAULT" | "DEFAULT_INVERTED" | "SOLID_BLACK" | "SOLID_WHITE" | "TRANSLUCENT_BLACK" | "TRANSLUCENT_WHITE" | "TRANSPARENT_BLACK" | "TRANSPARENT_WHITE";
                  content?: {
                    bodyText?: string;
                    bondCustomerServiceLink?: boolean;
                    callToAction?: string;
                    callToActionType?: "BUTTON" | "LINK";
                    customUrl?: string;
                    headerText?: string;
                    pageId?: string;
                    prefixText?: string;
                    productAsins?: string[];
                    tileTextAlignment?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                    tileTextSize?: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                  };
                  coverTile?: boolean;
                  margin?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                  opacity?: number;
                  outOfBounds?: boolean;
                  padding?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                  position?: {
                    x?: "CENTER" | "LEFT" | "RIGHT";
                    y?: "BOTTOM" | "MIDDLE" | "TOP";
                  };
                  tag?: string;
                  type?: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
                }[];
                title?: string;
                verticalAlign?: "BOTTOM" | "MIDDLE" | "TOP";
              };
              uploadMobileImage?: boolean;
              variation: "IMAGE_WITH_TEXT";
            };
          } | {
            storeImageTile: {
              commonProperties: {
                size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                tag: string;
                type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
              };
              content?: {
                altText?: string;
                assetId?: string;
                assetTags?: string;
                bleedImage?: "ALL" | "CORNER" | "NONE" | "SIDE";
                callToAction?: string;
                canvasData?: {
                  canvasHeight?: number;
                  height?: number;
                  left?: number;
                  naturalHeight?: number;
                  naturalWidth?: number;
                  top?: number;
                  width?: number;
                };
                cropBoxData?: {
                  height?: number;
                  left?: number;
                  top?: number;
                  width?: number;
                };
                customUrl?: string;
                hideTitle?: boolean;
                imageHeight?: number;
                imageKey?: string;
                imageOffsetLeft?: number;
                imageOffsetTop?: number;
                imageUrl?: string;
                imageWidth?: number;
                isAiGen?: boolean;
                layout?: "CONTAIN" | "COVER" | "TEXT";
                pageId?: string;
                productAsins?: string[];
                text?: string;
                textAlign?: "LEFT" | "RIGHT";
                tileLayers?: string[];
                title?: string;
                verticalAlign?: "BOTTOM" | "MIDDLE" | "TOP";
              };
              flexHeight?: boolean;
              mobileContent?: {
                altText?: string;
                assetId?: string;
                assetTags?: string;
                bleedImage?: "ALL" | "CORNER" | "NONE" | "SIDE";
                canvasData?: {
                  canvasHeight?: number;
                  height?: number;
                  left?: number;
                  naturalHeight?: number;
                  naturalWidth?: number;
                  top?: number;
                  width?: number;
                };
                cropBoxData?: {
                  height?: number;
                  left?: number;
                  top?: number;
                  width?: number;
                };
                hideTitle?: boolean;
                imageHeight?: number;
                imageKey?: string;
                imageOffsetLeft?: number;
                imageOffsetTop?: number;
                imageUrl?: string;
                imageWidth?: number;
                isAiGen?: boolean;
                layout?: "CONTAIN" | "COVER" | "TEXT";
                tileLayers?: string[];
                title?: string;
                verticalAlign?: "BOTTOM" | "MIDDLE" | "TOP";
              };
              uploadMobileImage?: boolean;
            };
          } | {
            storeProductTile: {
              commonProperties: {
                size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                tag: string;
                type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
              };
              content?: {
                bleedImage?: "ALL" | "CORNER" | "NONE" | "SIDE";
                displayOutOfStockASIN?: boolean;
                layout?: "DEFAULT" | "SHOWCASE";
                productAsins?: string[];
                text?: string;
                textAlign?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                title?: string;
              };
            };
          } | {
            storeShoppableImageTile: {
              commonProperties: {
                size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                tag: string;
                type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
              };
              content?: {
                croppedImage?: {
                  altText?: string;
                  assetId?: string;
                  canvasData?: {
                    canvasHeight?: number;
                    height?: number;
                    left?: number;
                    naturalHeight?: number;
                    naturalWidth?: number;
                    top?: number;
                    width?: number;
                  };
                  cropBox?: {
                    height?: number;
                    left?: number;
                    top?: number;
                    width?: number;
                  };
                  imageKey?: string;
                  imageNaturalHeight?: number;
                  imageNaturalWidth?: number;
                  imageUrl?: string;
                };
                points?: {
                  coordinates: {
                    x?: number;
                    y?: number;
                  };
                  productAsins?: string[];
                  tag?: string;
                  type?: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
                }[];
                productAsins?: string[];
                renderTileLayers?: boolean;
                textOption?: "NO_TEXT_UNDER_INTERACTIVE_IMAGE" | "TEXT_OVER_IMAGE" | "TEXT_UNDER_INTERACTIVE_IMAGE";
                tileLayers?: {
                  colorPalette?: "DEFAULT" | "DEFAULT_INVERTED" | "SOLID_BLACK" | "SOLID_WHITE" | "TRANSLUCENT_BLACK" | "TRANSLUCENT_WHITE" | "TRANSPARENT_BLACK" | "TRANSPARENT_WHITE";
                  content?: {
                    bodyText?: string;
                    bondCustomerServiceLink?: boolean;
                    callToAction?: string;
                    callToActionType?: "BUTTON" | "LINK";
                    customUrl?: string;
                    headerText?: string;
                    pageId?: string;
                    prefixText?: string;
                    productAsins?: string[];
                    tileTextAlignment?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                    tileTextSize?: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                  };
                  coverTile?: boolean;
                  margin?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                  opacity?: number;
                  outOfBounds?: boolean;
                  padding?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                  position?: {
                    x?: "CENTER" | "LEFT" | "RIGHT";
                    y?: "BOTTOM" | "MIDDLE" | "TOP";
                  };
                  tag?: string;
                  type?: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
                }[];
              };
            };
          } | {
            storeTextTile: {
              commonProperties: {
                size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                tag: string;
                type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
              };
              content?: {
                bold: boolean;
                bondCustomerServiceLink?: boolean;
                callToAction?: string;
                customUrl?: string;
                pageId?: string;
                productAsins?: string[];
                text: string;
                textAlign?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                title: string;
                uppercase: boolean;
              };
            };
          } | {
            storeVideoTile: {
              commonProperties: {
                size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                tag: string;
                type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
              };
              content?: {
                assetId?: string;
                assetTags?: string;
                autoPlay?: boolean;
                callToAction?: string;
                canvasData?: {
                  canvasHeight?: number;
                  height?: number;
                  left?: number;
                  naturalHeight?: number;
                  naturalWidth?: number;
                  top?: number;
                  width?: number;
                };
                customUrl?: string;
                imageHeight?: number;
                imageKey?: string;
                imageOffsetLeft?: number;
                imageOffsetTop?: number;
                imageUrl?: string;
                imageWidth?: number;
                mute?: boolean;
                pageId?: string;
                productAsins?: string[];
                renderTileLayers?: boolean;
                resourceId?: string;
                text?: string;
                textAlign?: string;
                textOption?: "NO_TEXT_OVER_VIDEO" | "TEXT_OVER_VIDEO";
                tileLayers?: {
                  colorPalette?: "DEFAULT" | "DEFAULT_INVERTED" | "SOLID_BLACK" | "SOLID_WHITE" | "TRANSLUCENT_BLACK" | "TRANSLUCENT_WHITE" | "TRANSPARENT_BLACK" | "TRANSPARENT_WHITE";
                  content?: {
                    bodyText?: string;
                    bondCustomerServiceLink?: boolean;
                    callToAction?: string;
                    callToActionType?: "BUTTON" | "LINK";
                    customUrl?: string;
                    headerText?: string;
                    pageId?: string;
                    prefixText?: string;
                    productAsins?: string[];
                    tileTextAlignment?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                    tileTextSize?: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                  };
                  coverTile?: boolean;
                  margin?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                  opacity?: number;
                  outOfBounds?: boolean;
                  padding?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                  position?: {
                    x?: "CENTER" | "LEFT" | "RIGHT";
                    y?: "BOTTOM" | "MIDDLE" | "TOP";
                  };
                  tag?: string;
                  type?: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
                }[];
                title?: string;
                videoAssetId?: string;
                videoAssetTags?: string;
                videoDescription?: string;
                videoKey?: string;
                videoName?: string;
                videoSize?: number;
                videoUrl?: string;
              };
            };
          } | {
            storeEmptyTile: {
              commonProperties: {
                size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                tag: string;
                type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
              };
              content: {
                bondCustomerServiceLink?: boolean;
                callToAction?: string;
                text?: string;
                textAlign?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                title?: string;
              };
            };
          } | {
            storeCustomCodeTile: {
              commonProperties: {
                size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                tag: string;
                type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
              };
              content?: {
                autoDimension?: boolean;
                availableProductAsins?: string[];
                cti?: {
                  category?: string;
                  item?: string;
                  type?: string;
                };
                embedCode?: string;
                integrity?: string;
                widgetName?: string;
                widgetTag?: string;
              };
            };
          }[];
        };
      } | {
        storeImageWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          tiles: {
            commonProperties: {
              size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
              tag: string;
              type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
            };
            content?: {
              altText?: string;
              assetId?: string;
              assetTags?: string;
              bleedImage?: "ALL" | "CORNER" | "NONE" | "SIDE";
              callToAction?: string;
              canvasData?: {
                canvasHeight?: number;
                height?: number;
                left?: number;
                naturalHeight?: number;
                naturalWidth?: number;
                top?: number;
                width?: number;
              };
              cropBoxData?: {
                height?: number;
                left?: number;
                top?: number;
                width?: number;
              };
              customUrl?: string;
              hideTitle?: boolean;
              imageHeight?: number;
              imageKey?: string;
              imageOffsetLeft?: number;
              imageOffsetTop?: number;
              imageUrl?: string;
              imageWidth?: number;
              isAiGen?: boolean;
              layout?: "CONTAIN" | "COVER" | "TEXT";
              pageId?: string;
              productAsins?: string[];
              text?: string;
              textAlign?: "LEFT" | "RIGHT";
              tileLayers?: string[];
              title?: string;
              verticalAlign?: "BOTTOM" | "MIDDLE" | "TOP";
            };
            flexHeight?: boolean;
            mobileContent?: {
              altText?: string;
              assetId?: string;
              assetTags?: string;
              bleedImage?: "ALL" | "CORNER" | "NONE" | "SIDE";
              canvasData?: {
                canvasHeight?: number;
                height?: number;
                left?: number;
                naturalHeight?: number;
                naturalWidth?: number;
                top?: number;
                width?: number;
              };
              cropBoxData?: {
                height?: number;
                left?: number;
                top?: number;
                width?: number;
              };
              hideTitle?: boolean;
              imageHeight?: number;
              imageKey?: string;
              imageOffsetLeft?: number;
              imageOffsetTop?: number;
              imageUrl?: string;
              imageWidth?: number;
              isAiGen?: boolean;
              layout?: "CONTAIN" | "COVER" | "TEXT";
              tileLayers?: string[];
              title?: string;
              verticalAlign?: "BOTTOM" | "MIDDLE" | "TOP";
            };
            uploadMobileImage?: boolean;
          }[];
        };
      } | {
        storeTextWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          tiles: {
            commonProperties: {
              size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
              tag: string;
              type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
            };
            content?: {
              bold: boolean;
              bondCustomerServiceLink?: boolean;
              callToAction?: string;
              customUrl?: string;
              pageId?: string;
              productAsins?: string[];
              text: string;
              textAlign?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
              title: string;
              uppercase: boolean;
            };
          }[];
        };
      } | {
        storeImageWithTextWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          tiles: {
            commonProperties: {
              size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
              tag: string;
              type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
            };
            content?: {
              altText?: string;
              assetId?: string;
              assetTags?: string;
              bleedImage?: "ALL" | "CORNER" | "NONE" | "SIDE";
              callToAction?: string;
              canvasData?: {
                canvasHeight?: number;
                height?: number;
                left?: number;
                naturalHeight?: number;
                naturalWidth?: number;
                top?: number;
                width?: number;
              };
              cropBoxData?: {
                height?: number;
                left?: number;
                top?: number;
                width?: number;
              };
              customUrl?: string;
              hideTitle?: boolean;
              imageHeight?: number;
              imageKey?: string;
              imageOffsetLeft?: number;
              imageOffsetTop?: number;
              imageUrl?: string;
              imageWidth?: number;
              isAiGen?: boolean;
              layout?: "CONTAIN" | "COVER" | "TEXT";
              pageId?: string;
              productAsins?: string[];
              renderTileLayers?: boolean;
              shape?: "SQUARE";
              text?: string;
              textAlign?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
              textOption?: "TEXT_NEXT_TO_IMAGE" | "TEXT_OVER_IMAGE";
              tileLayers?: {
                colorPalette?: "DEFAULT" | "DEFAULT_INVERTED" | "SOLID_BLACK" | "SOLID_WHITE" | "TRANSLUCENT_BLACK" | "TRANSLUCENT_WHITE" | "TRANSPARENT_BLACK" | "TRANSPARENT_WHITE";
                content?: {
                  bodyText?: string;
                  bondCustomerServiceLink?: boolean;
                  callToAction?: string;
                  callToActionType?: "BUTTON" | "LINK";
                  customUrl?: string;
                  headerText?: string;
                  pageId?: string;
                  prefixText?: string;
                  productAsins?: string[];
                  tileTextAlignment?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                  tileTextSize?: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                };
                coverTile?: boolean;
                margin?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                opacity?: number;
                outOfBounds?: boolean;
                padding?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                position?: {
                  x?: "CENTER" | "LEFT" | "RIGHT";
                  y?: "BOTTOM" | "MIDDLE" | "TOP";
                };
                tag?: string;
                type?: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
              }[];
              title?: string;
              verticalAlign?: "BOTTOM" | "MIDDLE" | "TOP";
            };
            flexHeight?: boolean;
            mobileContent?: {
              altText?: string;
              assetId?: string;
              assetTags?: string;
              bleedImage?: "ALL" | "CORNER" | "NONE" | "SIDE";
              canvasData?: {
                canvasHeight?: number;
                height?: number;
                left?: number;
                naturalHeight?: number;
                naturalWidth?: number;
                top?: number;
                width?: number;
              };
              cropBoxData?: {
                height?: number;
                left?: number;
                top?: number;
                width?: number;
              };
              hideTitle?: boolean;
              imageHeight?: number;
              imageKey?: string;
              imageOffsetLeft?: number;
              imageOffsetTop?: number;
              imageUrl?: string;
              imageWidth?: number;
              isAiGen?: boolean;
              layout?: "CONTAIN" | "COVER" | "TEXT";
              renderTileLayers?: boolean;
              shape?: "SQUARE";
              text?: string;
              textAlign?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
              textOption?: "TEXT_NEXT_TO_IMAGE" | "TEXT_OVER_IMAGE";
              tileLayers?: {
                colorPalette?: "DEFAULT" | "DEFAULT_INVERTED" | "SOLID_BLACK" | "SOLID_WHITE" | "TRANSLUCENT_BLACK" | "TRANSLUCENT_WHITE" | "TRANSPARENT_BLACK" | "TRANSPARENT_WHITE";
                content?: {
                  bodyText?: string;
                  bondCustomerServiceLink?: boolean;
                  callToAction?: string;
                  callToActionType?: "BUTTON" | "LINK";
                  customUrl?: string;
                  headerText?: string;
                  pageId?: string;
                  prefixText?: string;
                  productAsins?: string[];
                  tileTextAlignment?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                  tileTextSize?: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                };
                coverTile?: boolean;
                margin?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                opacity?: number;
                outOfBounds?: boolean;
                padding?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                position?: {
                  x?: "CENTER" | "LEFT" | "RIGHT";
                  y?: "BOTTOM" | "MIDDLE" | "TOP";
                };
                tag?: string;
                type?: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
              }[];
              title?: string;
              verticalAlign?: "BOTTOM" | "MIDDLE" | "TOP";
            };
            uploadMobileImage?: boolean;
            variation: "IMAGE_WITH_TEXT";
          }[];
        };
      } | {
        storeProductCollectionWidget: {
          aiMetadata?: {
            key: string;
            value: string;
          }[];
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          content?: {
            collectionTags?: string;
            productGridConversionTimestamp?: number;
            tag?: string;
            type?: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          tiles: {
            storeProductCollectionImageTile: {
              commonProperties: {
                size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                tag: string;
                type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
              };
              content?: {
                altText?: string;
                assetId?: string;
                assetTags?: string;
                bleedImage?: "ALL" | "CORNER" | "NONE" | "SIDE";
                callToAction?: string;
                canvasData?: {
                  canvasHeight?: number;
                  height?: number;
                  left?: number;
                  naturalHeight?: number;
                  naturalWidth?: number;
                  top?: number;
                  width?: number;
                };
                cropBoxData?: {
                  height?: number;
                  left?: number;
                  top?: number;
                  width?: number;
                };
                customUrl?: string;
                hideTitle?: boolean;
                imageHeight?: number;
                imageKey?: string;
                imageOffsetLeft?: number;
                imageOffsetTop?: number;
                imageUrl?: string;
                imageWidth?: number;
                isAiGen?: boolean;
                layout?: "CONTAIN" | "COVER" | "TEXT";
                pageId?: string;
                productAsins?: string[];
                renderTileLayers?: boolean;
                shape?: "SQUARE";
                text?: string;
                textAlign?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                textOption?: "TEXT_NEXT_TO_IMAGE" | "TEXT_OVER_IMAGE";
                tileLayers?: {
                  colorPalette?: "DEFAULT" | "DEFAULT_INVERTED" | "SOLID_BLACK" | "SOLID_WHITE" | "TRANSLUCENT_BLACK" | "TRANSLUCENT_WHITE" | "TRANSPARENT_BLACK" | "TRANSPARENT_WHITE";
                  content?: {
                    bodyText?: string;
                    bondCustomerServiceLink?: boolean;
                    callToAction?: string;
                    callToActionType?: "BUTTON" | "LINK";
                    customUrl?: string;
                    headerText?: string;
                    pageId?: string;
                    prefixText?: string;
                    productAsins?: string[];
                    tileTextAlignment?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                    tileTextSize?: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                  };
                  coverTile?: boolean;
                  margin?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                  opacity?: number;
                  outOfBounds?: boolean;
                  padding?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                  position?: {
                    x?: "CENTER" | "LEFT" | "RIGHT";
                    y?: "BOTTOM" | "MIDDLE" | "TOP";
                  };
                  tag?: string;
                  type?: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
                }[];
                title?: string;
                verticalAlign?: "BOTTOM" | "MIDDLE" | "TOP";
              };
              flexHeight?: boolean;
              mobileContent?: {
                altText?: string;
                assetId?: string;
                assetTags?: string;
                bleedImage?: "ALL" | "CORNER" | "NONE" | "SIDE";
                canvasData?: {
                  canvasHeight?: number;
                  height?: number;
                  left?: number;
                  naturalHeight?: number;
                  naturalWidth?: number;
                  top?: number;
                  width?: number;
                };
                cropBoxData?: {
                  height?: number;
                  left?: number;
                  top?: number;
                  width?: number;
                };
                hideTitle?: boolean;
                imageHeight?: number;
                imageKey?: string;
                imageOffsetLeft?: number;
                imageOffsetTop?: number;
                imageUrl?: string;
                imageWidth?: number;
                isAiGen?: boolean;
                layout?: "CONTAIN" | "COVER" | "TEXT";
                renderTileLayers?: boolean;
                shape?: "SQUARE";
                text?: string;
                textAlign?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                textOption?: "TEXT_NEXT_TO_IMAGE" | "TEXT_OVER_IMAGE";
                tileLayers?: {
                  colorPalette?: "DEFAULT" | "DEFAULT_INVERTED" | "SOLID_BLACK" | "SOLID_WHITE" | "TRANSLUCENT_BLACK" | "TRANSLUCENT_WHITE" | "TRANSPARENT_BLACK" | "TRANSPARENT_WHITE";
                  content?: {
                    bodyText?: string;
                    bondCustomerServiceLink?: boolean;
                    callToAction?: string;
                    callToActionType?: "BUTTON" | "LINK";
                    customUrl?: string;
                    headerText?: string;
                    pageId?: string;
                    prefixText?: string;
                    productAsins?: string[];
                    tileTextAlignment?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                    tileTextSize?: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                  };
                  coverTile?: boolean;
                  margin?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                  opacity?: number;
                  outOfBounds?: boolean;
                  padding?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                  position?: {
                    x?: "CENTER" | "LEFT" | "RIGHT";
                    y?: "BOTTOM" | "MIDDLE" | "TOP";
                  };
                  tag?: string;
                  type?: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
                }[];
                title?: string;
                verticalAlign?: "BOTTOM" | "MIDDLE" | "TOP";
              };
              uploadMobileImage?: boolean;
              variation: "IMAGE_WITH_TEXT";
            };
          } | {
            storeProductCollectionASINGrid: {
              bulk?: boolean;
              description?: string;
              displayProductGridHeader?: boolean;
              includeOutOfStock?: boolean;
              isAutomatedProductGrid?: boolean;
              keyword?: string;
              productAsins?: string[];
              sort?: string;
              tag?: string;
              title?: string;
              type: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
              variation?: string;
            };
          }[];
        };
      } | {
        storeProductGridWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          content: {
            bulk?: boolean;
            description?: string;
            displayProductGridHeader?: boolean;
            excludedProductAsins?: string[];
            includeOutOfStock?: boolean;
            isAutomatedProductGrid?: boolean;
            keyword?: string;
            pinnedProductAsins?: string[];
            productAsins?: string[];
            productType?: string;
            search?: {
              brandId?: string;
              includeOutOfStock?: boolean;
              keyword?: string;
              node?: string;
              productAsins?: string[];
              sort?: string;
            };
            showOnlyMarkdown?: boolean;
            sort?: string;
            tag?: string;
            title?: string;
            type?: string;
          };
        };
      } | {
        storeDealsWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          content?: {
            deals?: {
              node?: string;
            };
            dealsMode?: "AUTOMATIC" | "BULK";
            productAsins?: string[];
            tag?: string;
            type?: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
          };
        };
      } | {
        storeProductWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          tiles: {
            commonProperties: {
              size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
              tag: string;
              type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
            };
            content?: {
              bleedImage?: "ALL" | "CORNER" | "NONE" | "SIDE";
              displayOutOfStockASIN?: boolean;
              layout?: "DEFAULT" | "SHOWCASE";
              productAsins?: string[];
              text?: string;
              textAlign?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
              title?: string;
            };
          }[];
        };
      } | {
        storeShoppableImageWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          tiles: {
            commonProperties: {
              size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
              tag: string;
              type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
            };
            content?: {
              croppedImage?: {
                altText?: string;
                assetId?: string;
                canvasData?: {
                  canvasHeight?: number;
                  height?: number;
                  left?: number;
                  naturalHeight?: number;
                  naturalWidth?: number;
                  top?: number;
                  width?: number;
                };
                cropBox?: {
                  height?: number;
                  left?: number;
                  top?: number;
                  width?: number;
                };
                imageKey?: string;
                imageNaturalHeight?: number;
                imageNaturalWidth?: number;
                imageUrl?: string;
              };
              points?: {
                coordinates: {
                  x?: number;
                  y?: number;
                };
                productAsins?: string[];
                tag?: string;
                type?: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
              }[];
              productAsins?: string[];
              renderTileLayers?: boolean;
              textOption?: "NO_TEXT_UNDER_INTERACTIVE_IMAGE" | "TEXT_OVER_IMAGE" | "TEXT_UNDER_INTERACTIVE_IMAGE";
              tileLayers?: {
                colorPalette?: "DEFAULT" | "DEFAULT_INVERTED" | "SOLID_BLACK" | "SOLID_WHITE" | "TRANSLUCENT_BLACK" | "TRANSLUCENT_WHITE" | "TRANSPARENT_BLACK" | "TRANSPARENT_WHITE";
                content?: {
                  bodyText?: string;
                  bondCustomerServiceLink?: boolean;
                  callToAction?: string;
                  callToActionType?: "BUTTON" | "LINK";
                  customUrl?: string;
                  headerText?: string;
                  pageId?: string;
                  prefixText?: string;
                  productAsins?: string[];
                  tileTextAlignment?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                  tileTextSize?: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                };
                coverTile?: boolean;
                margin?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                opacity?: number;
                outOfBounds?: boolean;
                padding?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                position?: {
                  x?: "CENTER" | "LEFT" | "RIGHT";
                  y?: "BOTTOM" | "MIDDLE" | "TOP";
                };
                tag?: string;
                type?: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
              }[];
            };
          }[];
        };
      } | {
        storeCustomCodeWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          tiles: {
            commonProperties: {
              size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
              tag: string;
              type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
            };
            content?: {
              autoDimension?: boolean;
              availableProductAsins?: string[];
              cti?: {
                category?: string;
                item?: string;
                type?: string;
              };
              embedCode?: string;
              integrity?: string;
              widgetName?: string;
              widgetTag?: string;
            };
          }[];
        };
      } | {
        storeVideoWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          tiles: {
            commonProperties: {
              size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
              tag: string;
              type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
            };
            content?: {
              assetId?: string;
              assetTags?: string;
              autoPlay?: boolean;
              callToAction?: string;
              canvasData?: {
                canvasHeight?: number;
                height?: number;
                left?: number;
                naturalHeight?: number;
                naturalWidth?: number;
                top?: number;
                width?: number;
              };
              customUrl?: string;
              imageHeight?: number;
              imageKey?: string;
              imageOffsetLeft?: number;
              imageOffsetTop?: number;
              imageUrl?: string;
              imageWidth?: number;
              mute?: boolean;
              pageId?: string;
              productAsins?: string[];
              renderTileLayers?: boolean;
              resourceId?: string;
              text?: string;
              textAlign?: string;
              textOption?: "NO_TEXT_OVER_VIDEO" | "TEXT_OVER_VIDEO";
              tileLayers?: {
                colorPalette?: "DEFAULT" | "DEFAULT_INVERTED" | "SOLID_BLACK" | "SOLID_WHITE" | "TRANSLUCENT_BLACK" | "TRANSLUCENT_WHITE" | "TRANSPARENT_BLACK" | "TRANSPARENT_WHITE";
                content?: {
                  bodyText?: string;
                  bondCustomerServiceLink?: boolean;
                  callToAction?: string;
                  callToActionType?: "BUTTON" | "LINK";
                  customUrl?: string;
                  headerText?: string;
                  pageId?: string;
                  prefixText?: string;
                  productAsins?: string[];
                  tileTextAlignment?: "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT";
                  tileTextSize?: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
                };
                coverTile?: boolean;
                margin?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                opacity?: number;
                outOfBounds?: boolean;
                padding?: "LARGE" | "MEDIUM" | "NONE" | "SMALL";
                position?: {
                  x?: "CENTER" | "LEFT" | "RIGHT";
                  y?: "BOTTOM" | "MIDDLE" | "TOP";
                };
                tag?: string;
                type?: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
              }[];
              title?: string;
              videoAssetId?: string;
              videoAssetTags?: string;
              videoDescription?: string;
              videoKey?: string;
              videoName?: string;
              videoSize?: number;
              videoUrl?: string;
            };
          }[];
        };
      } | {
        storeGalleryWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          content?: {
            metadata?: {
              alt?: string;
              assetId?: string;
              filename?: string;
              imageKey?: string;
              imageUrl?: string;
              type?: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
              url?: string;
            }[];
            slides?: {
              alt?: string;
              assetId?: string;
              imageKey?: string;
              type?: "ASIN" | "IMAGE";
            }[];
            tag?: string;
            text?: string;
            title?: string;
            type?: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
        };
      } | {
        storeShopTheLookWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          content?: {
            bulk?: boolean;
            callToActionData?: {
              customUrl?: string;
              pageId?: string;
              productAsin?: string;
              text?: string;
            };
            includeOutOfStock?: boolean;
            keyword?: string;
            productAsins?: string[];
            search?: {
              includeOutOfStock?: boolean;
              keyword?: string;
              node?: string;
              productAsins?: string[];
            };
            slides?: {
              storeImageSlide: {
                assetId?: string;
                assetTags?: string;
                canvasData?: {
                  canvasHeight?: number;
                  height?: number;
                  left?: number;
                  naturalHeight?: number;
                  naturalWidth?: number;
                  top?: number;
                  width?: number;
                };
                imageHeight?: number;
                imageKey?: string;
                imageOffsetLeft?: number;
                imageOffsetTop?: number;
                imageUrl?: string;
                imageWidth?: number;
                tag?: string;
                type?: "ASIN" | "IMAGE";
              };
            } | {
              storeASINSlide: {
                productAsin: string;
                tag: string;
                type: "ASIN" | "IMAGE";
              };
            }[];
            tag?: string;
            text?: string;
            title?: string;
            type?: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
          };
        };
      } | {
        storeManuallyCuratedProductCarouselWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          content?: {
            bulk: boolean;
            callToActionData: {
              customUrl?: string;
              pageId?: string;
              productAsin?: string;
              text?: string;
            };
            includeOutOfStock: boolean;
            keyword: string;
            productAsins?: string[];
            search?: {
              includeOutOfStock: boolean;
              keyword: string;
              node: string;
              productAsins?: string[];
            };
            slides?: {
              productAsin: string;
              tag: string;
              type: "ASIN" | "IMAGE";
            }[];
            tag: string;
            text: string;
            title: string;
            type: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
          };
        };
      } | {
        storeAWLSWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          tiles: {
            commonProperties: {
              size: "LARGE" | "MEDIUM" | "MINI" | "SMALL";
              tag: string;
              type: "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO";
            };
            content?: {
              brandedRecipeWidget: {
                availableProductAsins?: string[];
                desktopMedia?: {
                  altText?: string;
                  assetLibraryId?: string;
                  mediaUrl?: string;
                };
                directions?: {
                  body: string;
                  title: string;
                }[];
                encodedIngredientComposition?: string;
                ingredientMetadata?: {
                  priorityAsins?: {
                    addToCartActionParams: string;
                    bottleDepositFee?: string;
                    bottleDepositFeeString?: string;
                    cartQuantity: number;
                    catalogDisplayPricePerUnitOfMeasure?: string;
                    freshButton?: string;
                    isAlternateSearchResult: boolean;
                    isRequiredQuantityInCart: boolean;
                    isSoldByCount: boolean;
                    itemAvailability: string;
                    offerId: string;
                    offerName: string;
                    offerUnit: string;
                    productAsin: string;
                    productDetailsUrl: string;
                    productImageUrl: string;
                    promotionDisplay?: string;
                    promotionId?: string;
                    quantityInStock?: number;
                    requiredQuantity: number;
                    retailATCButton?: string;
                    reviewStars?: {
                      hasHalfStar: boolean;
                      reviewCount: number;
                      wholeStars: number;
                    };
                    searchTerm?: string;
                    subtotalParams: string;
                    vuomDisplayPrice: string;
                  }[];
                  quantity?: number;
                  searchText?: string;
                  translatedUnit?: string;
                }[];
                ingredients?: {
                  asinOverrides?: string[];
                  brand: string;
                  displayText: string;
                  isAsinRestricted: boolean;
                  isBrandRestricted: boolean;
                  isExclusiveOverride: boolean;
                  name: string;
                  quantityList?: {
                    amount: number;
                    unit: string;
                  }[];
                }[];
                isInitialLoad?: boolean;
                mobileMedia?: {
                  altText?: string;
                  assetLibraryId?: string;
                  mediaUrl?: string;
                };
                preparationTime: string;
                refTag?: string;
                servingSize: number;
                title?: string;
              };
            } | {
              storeProductSelectorWidget: {
                designOptions: {
                  backgroundColor: string;
                  backgroundShape: string;
                  buttonColor?: "BLACK" | "TRANSPARENT" | "WHITE";
                  buttonShape: string;
                  textAlignment: string;
                  textSize: string;
                  textStyle: string;
                  textWeight: string;
                };
                introduction?: {
                  buttonText: string;
                  description: string;
                  heading: string;
                  headline?: string;
                  imageOptions: {
                    image: {
                      assetId: string;
                      fileName?: string;
                      imageUrl: string;
                      layout?: "BOTTOM" | "LEFT" | "RIGHT" | "TOP";
                    };
                    layoutConfiguration: {
                      desktopLayout: "BOTTOM" | "LEFT" | "RIGHT" | "TOP";
                      mobileLayout: "BOTTOM" | "LEFT" | "RIGHT" | "TOP";
                    };
                  };
                  isEnabled: boolean;
                };
                productAsins?: string[];
                questionList?: {
                  answerList?: {
                    image?: {
                      assetId: string;
                      fileName?: string;
                      imageUrl: string;
                      layout?: "BOTTOM" | "LEFT" | "RIGHT" | "TOP";
                    };
                    nextStep: string;
                    productAsins?: string[];
                    tag: string;
                    text?: string;
                  }[];
                  areImagesEnabled?: boolean;
                  description?: string;
                  hasImage?: boolean;
                  tag: string;
                  text?: string;
                }[];
                results: {
                  buttonText?: string;
                  description?: string;
                  disclaimer: string;
                  headline: string;
                  storeUrl?: string;
                };
              };
            } | {
              storeVideoRevealWidget: {
                backgroundColor: string;
                csmTag: string;
                fadeoutDuration: string;
                objectFit: string;
                skipReveal: boolean;
                throttleLimit: string;
                videos: {
                  desktop: {
                    assetId: string;
                    url: string;
                  };
                  mobile: {
                    assetId: string;
                    url: string;
                  };
                };
              };
            };
            externalWidgetId: string;
          }[];
          widgetDependencies?: string[];
        };
      } | {
        storeBannerWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          content: {
            banners?: {
              blackLivesMatter: boolean;
              stopAsianHate: boolean;
            };
            tag?: string;
            type?: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
        };
      } | {
        storeProductCarouselWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          content: {
            callToActionData?: {
              customUrl?: string;
              productAsin?: string;
              text?: string;
            };
            searchContent?: {
              node?: string;
              type?: "BEST_SELLING" | "RECOMMENDATION_FOR_YOU";
            };
            tag: string;
            type: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
          };
        };
      } | {
        storeLiveVideoWidget: {
          commonProperties: {
            sectionType: "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL";
            widgetTag: string;
            widgetType: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
          content: {
            channel?: string;
            tag: string;
            type: "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID";
          };
        };
      }[];
    };
    editionId?: string;
    pageId: string;
    storeEditionPublishId?: string;
    storeId?: string;
  }[];
}


export interface PostQueryBrandStoreParams {
  maxResults?: number;
  nextToken?: string;
  storeNameFilter: {
    include: string[];
  };
}


export interface PostDSPRetrieveAdGroupForecastParams {
  adGroupForecastDescriptions?: {
    adGroupId: string;
    enabledFeatures: {
      campaignSettingsCache?: boolean;
      curve?: boolean;
      metrics?: {
        allMetrics: boolean;
        selectedMetrics?: "AIMP" | "AREA" | "CAS" | "CPA" | "CPC" | "CPM" | "DC" | "EIMP" | "EREA" | "ROAS" | "TAS";
      };
    };
  }[];
}


export interface PostDSPRetrieveCampaignForecastParams {
  campaignForecastDescriptions?: {
    campaignId: string;
    enabledFeatures: {
      campaignSettingsCache?: boolean;
      curve?: boolean;
      metrics?: {
        allMetrics: boolean;
        selectedMetrics?: "AIMP" | "AREA" | "CAS" | "CPA" | "CPC" | "CPM" | "DC" | "EIMP" | "EREA" | "ROAS" | "TAS";
      };
      replanning?: boolean;
    };
    flightIds?: string[];
    replanningSettings?: {
      flights?: {
        budget: {
          budgetValue: {
            monetaryBudgetValue: {
              monetaryBudget?: {
                currencyCode: "AED" | "AUD" | "BRL" | "CAD" | "CHF" | "CNY" | "DKK" | "EGP" | "EUR" | "GBP" | "INR" | "JPY" | "MXN" | "MXP" | "NGN" | "NOK" | "NZD" | "PLN" | "SAR" | "SEK" | "SGD" | "TRY" | "USD" | "ZAR";
                value: number;
              };
            };
          };
        };
        endDateTime: string;
        flightId?: string;
        startDateTime: string;
      }[];
    };
  }[];
}
