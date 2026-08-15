// @generated
// fingerprint: sha256:92590d95542c022a9df29e6f6641d22c626c1f220ef39c4bd279f60b5584edfa
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.

export interface AdsBrandStoresApiContractBadGatewayResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface AdsBrandStoresApiContractBadRequestResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface AdsBrandStoresApiContractBrandedRecipeDirection {
  readonly body: string;
  readonly title: string;
}

export interface AdsBrandStoresApiContractBrandedRecipeIngredient {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline3>;
}

export interface AdsBrandStoresApiContractBrandedRecipeIngredientsMetadata {
  readonly priorityAsins?: ReadonlyArray<Inline5>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface AdsBrandStoresApiContractBrandedRecipeMedia {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface AdsBrandStoresApiContractBrandedRecipeQuantityItem {
  readonly amount: number;
  readonly unit: string;
}

export interface AdsBrandStoresApiContractBrandedRecipeWidget {
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly desktopMedia?: Inline9;
  readonly directions?: ReadonlyArray<Inline10>;
  readonly encodedIngredientComposition?: string;
  readonly ingredientMetadata?: ReadonlyArray<Inline11>;
  readonly ingredients?: ReadonlyArray<Inline12>;
  readonly isInitialLoad?: boolean;
  readonly mobileMedia?: Inline13;
  readonly preparationTime: string;
  readonly refTag?: string;
  readonly servingSize: number;
  readonly title?: string;
}

export interface AdsBrandStoresApiContractBrandStore {
  readonly pageInfos?: ReadonlyArray<Inline15>;
  readonly storeId: string;
  readonly storeName?: string;
}

export interface AdsBrandStoresApiContractBrandStoreEdition {
  readonly editionId: string;
  readonly editionName: string;
  readonly storeEditionSchedule?: Inline17;
  readonly storeId: string;
}

export interface AdsBrandStoresApiContractBrandStoreEditionPublishVersion {
  readonly editionId: string;
  readonly pages?: ReadonlyArray<Inline19>;
  readonly publishState: string;
  readonly publishStatus: string;
  readonly storeEditionPublishId: string;
  readonly storeId: string;
}

export interface AdsBrandStoresApiContractBrandStoreEditionPublishVersionBrandStoreEditionIdFilter {
  readonly include: ReadonlyArray<string>;
}

export interface AdsBrandStoresApiContractBrandStoreEditionPublishVersionBrandStoreIdFilter {
  readonly include: ReadonlyArray<string>;
}

export interface AdsBrandStoresApiContractBrandStoreEditionPublishVersionMultiStatusResponse {
  readonly error?: ReadonlyArray<Inline23>;
  readonly success?: ReadonlyArray<Inline24>;
}

export interface AdsBrandStoresApiContractBrandStoreEditionPublishVersionMultiStatusSuccess {
  readonly brandStoreEditionPublishVersion: Inline26;
  readonly index: number;
}

export interface AdsBrandStoresApiContractBrandStoreEditionPublishVersionStorePublishStatusFilter {
  readonly include: ReadonlyArray<string>;
}

export interface AdsBrandStoresApiContractBrandStoreEditionPublishVersionSuccessResponse {
  readonly brandStoreEditionPublishVersions?: ReadonlyArray<Inline29>;
  readonly nextToken?: string;
}

export interface AdsBrandStoresApiContractBrandStoreEditionPublishVersionUpdate {
  readonly editionId?: string;
  readonly publishState?: string;
  readonly storeEditionPublishId: string;
  readonly storeId?: string;
}

export interface AdsBrandStoresApiContractBrandStoreEditionSuccessResponse {
  readonly brandStoreEditions?: ReadonlyArray<Inline32>;
  readonly nextToken?: string;
}

export interface AdsBrandStoresApiContractBrandStorePage {
  readonly content: Inline34;
  readonly editionId: string;
  readonly pageId: string;
  readonly pageType: string;
  readonly storeEditionPublishId?: string;
  readonly storeId: string;
}

export interface AdsBrandStoresApiContractBrandStorePageBrandStoreEditionIdFilter {
  readonly include: ReadonlyArray<string>;
}

export interface AdsBrandStoresApiContractBrandStorePageBrandStoreEditionPublishVersionIdFilter {
  readonly include: ReadonlyArray<string>;
}

export interface AdsBrandStoresApiContractBrandStorePageBrandStoreIdFilter {
  readonly include: ReadonlyArray<string>;
}

export interface AdsBrandStoresApiContractBrandStorePageInfo {
  readonly tag: string;
  readonly title: string;
}

export interface AdsBrandStoresApiContractBrandStorePageMultiStatusResponse {
  readonly error?: ReadonlyArray<Inline162>;
  readonly success?: ReadonlyArray<Inline163>;
}

export interface AdsBrandStoresApiContractBrandStorePageMultiStatusSuccess {
  readonly brandStorePage: Inline287;
  readonly index: number;
}

export interface AdsBrandStoresApiContractBrandStorePagePageIdFilter {
  readonly include: ReadonlyArray<string>;
}

export interface AdsBrandStoresApiContractBrandStorePageSuccessResponse {
  readonly brandStorePages?: ReadonlyArray<Inline412>;
  readonly nextToken?: string;
}

export interface AdsBrandStoresApiContractBrandStorePageUpdate {
  readonly content?: Inline536;
  readonly editionId?: string;
  readonly pageId: string;
  readonly storeEditionPublishId?: string;
  readonly storeId?: string;
}

export interface AdsBrandStoresApiContractBrandStoreStoreNameFilter {
  readonly include: ReadonlyArray<string>;
}

export interface AdsBrandStoresApiContractBrandStoreSuccessResponse {
  readonly brandStores?: ReadonlyArray<Inline661>;
  readonly nextToken?: string;
}

export interface AdsBrandStoresApiContractCommonTileProperties {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface AdsBrandStoresApiContractCommonWidgetProperties {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface AdsBrandStoresApiContractContentTooLargeResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface AdsBrandStoresApiContractCoordinates {
  readonly x?: number;
  readonly y?: number;
}

export interface AdsBrandStoresApiContractCreateBrandedRecipeDirection {
  readonly body: string;
  readonly title: string;
}

export interface AdsBrandStoresApiContractCreateBrandedRecipeIngredient {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline668>;
}

export interface AdsBrandStoresApiContractCreateBrandedRecipeIngredientsMetadata {
  readonly priorityAsins?: ReadonlyArray<Inline670>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface AdsBrandStoresApiContractCreateBrandedRecipeMedia {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface AdsBrandStoresApiContractCreateBrandedRecipeQuantityItem {
  readonly amount: number;
  readonly unit: string;
}

export interface AdsBrandStoresApiContractCreateBrandedRecipeWidget {
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly desktopMedia?: Inline674;
  readonly directions?: ReadonlyArray<Inline675>;
  readonly encodedIngredientComposition?: string;
  readonly ingredientMetadata?: ReadonlyArray<Inline676>;
  readonly ingredients?: ReadonlyArray<Inline677>;
  readonly isInitialLoad?: boolean;
  readonly mobileMedia?: Inline678;
  readonly preparationTime: string;
  readonly refTag?: string;
  readonly servingSize: number;
  readonly title?: string;
}

export interface AdsBrandStoresApiContractCreateCommonTileProperties {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface AdsBrandStoresApiContractCreateCommonWidgetProperties {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface AdsBrandStoresApiContractCreateCoordinates {
  readonly x?: number;
  readonly y?: number;
}

export interface AdsBrandStoresApiContractCreateCTI {
  readonly category?: string;
  readonly item?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractCreatePriorityAsin {
  readonly addToCartActionParams: string;
  readonly bottleDepositFee?: string;
  readonly bottleDepositFeeString?: string;
  readonly cartQuantity: number;
  readonly catalogDisplayPricePerUnitOfMeasure?: string;
  readonly freshButton?: string;
  readonly isAlternateSearchResult: boolean;
  readonly isRequiredQuantityInCart: boolean;
  readonly isSoldByCount: boolean;
  readonly itemAvailability: string;
  readonly offerId: string;
  readonly offerName: string;
  readonly offerUnit: string;
  readonly productAsin: string;
  readonly productDetailsUrl: string;
  readonly productImageUrl: string;
  readonly promotionDisplay?: string;
  readonly promotionId?: string;
  readonly quantityInStock?: number;
  readonly requiredQuantity: number;
  readonly retailATCButton?: string;
  readonly reviewStars?: Inline684;
  readonly searchTerm?: string;
  readonly subtotalParams: string;
  readonly vuomDisplayPrice: string;
}

export interface AdsBrandStoresApiContractCreateReviewStars {
  readonly hasHalfStar: boolean;
  readonly reviewCount: number;
  readonly wholeStars: number;
}

export interface AdsBrandStoresApiContractCreateStoreASINSlide {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface AdsBrandStoresApiContractCreateStoreAWLSTile {
  readonly commonProperties: Inline688;
  readonly content?: Inline689 | Inline694 | Inline699;
  readonly externalWidgetId: string;
}

export type AdsBrandStoresApiContractCreateStoreAWLSTileContent = Inline702 | Inline707 | Inline712;

export interface AdsBrandStoresApiContractCreateStoreAWLSWidget {
  readonly commonProperties: Inline715;
  readonly tiles: ReadonlyArray<Inline716>;
  readonly widgetDependencies?: ReadonlyArray<string>;
}

export interface AdsBrandStoresApiContractCreateStoreBannerContent {
  readonly banners?: Inline730;
  readonly tag?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractCreateStoreBanners {
  readonly blackLivesMatter: boolean;
  readonly stopAsianHate: boolean;
}

export interface AdsBrandStoresApiContractCreateStoreBannerWidget {
  readonly commonProperties: Inline733;
  readonly content: Inline734;
}

export interface AdsBrandStoresApiContractCreateStoreCallToActionData {
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsin?: string;
  readonly text?: string;
}

export interface AdsBrandStoresApiContractCreateStoreCallToActionProductData {
  readonly customUrl?: string;
  readonly productAsin?: string;
  readonly text?: string;
}

export interface AdsBrandStoresApiContractCreateStoreCanvasData {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface AdsBrandStoresApiContractCreateStoreCarouselContent {
  readonly bulk: boolean;
  readonly callToActionData: Inline739;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline740;
  readonly slides?: ReadonlyArray<Inline741>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface AdsBrandStoresApiContractCreateStoreCarouselSearch {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface AdsBrandStoresApiContractCreateStoreCropBoxData {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface AdsBrandStoresApiContractCreateStoreCroppedImage {
  readonly altText?: string;
  readonly assetId?: string;
  readonly canvasData?: Inline745;
  readonly cropBox?: Inline746;
  readonly imageKey?: string;
  readonly imageNaturalHeight?: number;
  readonly imageNaturalWidth?: number;
  readonly imageUrl?: string;
}

export interface AdsBrandStoresApiContractCreateStoreCustomCodeContent {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline748;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface AdsBrandStoresApiContractCreateStoreCustomCodeTile {
  readonly commonProperties: Inline750;
  readonly content?: Inline751;
}

export interface AdsBrandStoresApiContractCreateStoreCustomCodeWidget {
  readonly commonProperties: Inline753;
  readonly tiles: ReadonlyArray<Inline754>;
}

export interface AdsBrandStoresApiContractCreateStoreDealsConfig {
  readonly node?: string;
}

export interface AdsBrandStoresApiContractCreateStoreDealsContent {
  readonly deals?: Inline758;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractCreateStoreDealsWidget {
  readonly commonProperties: Inline760;
  readonly content?: Inline761;
}

export interface AdsBrandStoresApiContractCreateStoreEmptyTile {
  readonly commonProperties: Inline763;
  readonly content: Inline764;
}

export interface AdsBrandStoresApiContractCreateStoreEmptyTileContent {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface AdsBrandStoresApiContractCreateStoreGalleryContent {
  readonly metadata?: ReadonlyArray<Inline767>;
  readonly slides?: ReadonlyArray<Inline768>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractCreateStoreGallerySlide {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractCreateStoreGalleryWidget {
  readonly commonProperties: Inline771;
  readonly content?: Inline772;
}

export interface AdsBrandStoresApiContractCreateStoreHeroContent {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline775;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline776;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface AdsBrandStoresApiContractCreateStoreHeroImageWidget {
  readonly commonProperties: Inline778;
  readonly content?: Inline779;
}

export interface AdsBrandStoresApiContractCreateStoreImageContent {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline782;
  readonly cropBoxData?: Inline783;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface AdsBrandStoresApiContractCreateStoreImageSlide {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline785;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractCreateStoreImageTile {
  readonly commonProperties: Inline787;
  readonly content?: Inline788;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline790;
  readonly uploadMobileImage?: boolean;
}

export interface AdsBrandStoresApiContractCreateStoreImageWidget {
  readonly commonProperties: Inline793;
  readonly tiles: ReadonlyArray<Inline794>;
}

export interface AdsBrandStoresApiContractCreateStoreImageWithTextContent {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline800;
  readonly cropBoxData?: Inline801;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline802>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface AdsBrandStoresApiContractCreateStoreImageWithTextTile {
  readonly commonProperties: Inline805;
  readonly content?: Inline806;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline810;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface AdsBrandStoresApiContractCreateStoreImageWithTextWidget {
  readonly commonProperties: Inline815;
  readonly tiles: ReadonlyArray<Inline816>;
}

export interface AdsBrandStoresApiContractCreateStoreLiveVideoContent {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface AdsBrandStoresApiContractCreateStoreLiveVideoWidget {
  readonly commonProperties: Inline827;
  readonly content: Inline828;
}

export interface AdsBrandStoresApiContractCreateStoreManuallyCuratedProductCarouselWidget {
  readonly commonProperties: Inline830;
  readonly content?: Inline831;
}

export interface AdsBrandStoresApiContractCreateStoreMetadataItem {
  readonly alt?: string;
  readonly assetId?: string;
  readonly filename?: string;
  readonly imageKey?: string;
  readonly imageUrl?: string;
  readonly type?: string;
  readonly url?: string;
}

export interface AdsBrandStoresApiContractCreateStoreMobileContent {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline836;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface AdsBrandStoresApiContractCreateStoreMobileImageContent {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline838;
  readonly cropBoxData?: Inline839;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface AdsBrandStoresApiContractCreateStoreMobileImageWithTextContent {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline841;
  readonly cropBoxData?: Inline842;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline843>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export type AdsBrandStoresApiContractCreateStorePageWidget = Inline846 | Inline849 | Inline882 | Inline888 | Inline891 | Inline901 | Inline914 | Inline916 | Inline918 | Inline921 | Inline928 | Inline931 | Inline936 | Inline939 | Inline944 | Inline948 | Inline962 | Inline964 | Inline967;

export interface AdsBrandStoresApiContractCreateStoreProductCarouselContent {
  readonly callToActionData?: Inline970;
  readonly searchContent?: Inline971;
  readonly tag: string;
  readonly type: string;
}

export interface AdsBrandStoresApiContractCreateStoreProductCarouselSearch {
  readonly node?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractCreateStoreProductCarouselWidget {
  readonly commonProperties: Inline974;
  readonly content: Inline975;
}

export interface AdsBrandStoresApiContractCreateStoreProductCollectionASINGrid {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type: string;
  readonly variation?: string;
}

export interface AdsBrandStoresApiContractCreateStoreProductCollectionContent {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractCreateStoreProductCollectionImageTile {
  readonly commonProperties: Inline980;
  readonly content?: Inline981;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline985;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export type AdsBrandStoresApiContractCreateStoreProductCollectionTile = Inline990 | Inline999;

export interface AdsBrandStoresApiContractCreateStoreProductCollectionWidget {
  readonly aiMetadata?: ReadonlyArray<Inline1001>;
  readonly commonProperties: Inline1002;
  readonly content?: Inline1003;
  readonly tiles: ReadonlyArray<Inline1004 | Inline1013>;
}

export interface AdsBrandStoresApiContractCreateStoreProductGridContent {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline1015;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractCreateStoreProductGridSearch {
  readonly brandId?: string;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly sort?: string;
}

export interface AdsBrandStoresApiContractCreateStoreProductGridWidget {
  readonly commonProperties: Inline1018;
  readonly content: Inline1019;
}

export interface AdsBrandStoresApiContractCreateStoreProductSelectorAnswer {
  readonly image?: Inline1021;
  readonly nextStep: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag: string;
  readonly text?: string;
}

export interface AdsBrandStoresApiContractCreateStoreProductSelectorDesignOptions {
  readonly backgroundColor: string;
  readonly backgroundShape: string;
  readonly buttonColor?: string;
  readonly buttonShape: string;
  readonly textAlignment: string;
  readonly textSize: string;
  readonly textStyle: string;
  readonly textWeight: string;
}

export interface AdsBrandStoresApiContractCreateStoreProductSelectorImage {
  readonly assetId: string;
  readonly fileName?: string;
  readonly imageUrl: string;
  readonly layout?: string;
}

export interface AdsBrandStoresApiContractCreateStoreProductSelectorImageOptions {
  readonly image: Inline1025;
  readonly layoutConfiguration: Inline1026;
}

export interface AdsBrandStoresApiContractCreateStoreProductSelectorIntroduction {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline1028;
  readonly isEnabled: boolean;
}

export interface AdsBrandStoresApiContractCreateStoreProductSelectorLayoutConfiguration {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface AdsBrandStoresApiContractCreateStoreProductSelectorQuestion {
  readonly answerList?: ReadonlyArray<Inline1032>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface AdsBrandStoresApiContractCreateStoreProductSelectorResults {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface AdsBrandStoresApiContractCreateStoreProductSelectorWidget {
  readonly designOptions: Inline1035;
  readonly introduction?: Inline1036;
  readonly productAsins?: ReadonlyArray<string>;
  readonly questionList?: ReadonlyArray<Inline1038>;
  readonly results: Inline1039;
}

export interface AdsBrandStoresApiContractCreateStoreProductTile {
  readonly commonProperties: Inline1041;
  readonly content?: Inline1042;
}

export interface AdsBrandStoresApiContractCreateStoreProductTileContent {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface AdsBrandStoresApiContractCreateStoreProductWidget {
  readonly commonProperties: Inline1045;
  readonly tiles: ReadonlyArray<Inline1046>;
}

export interface AdsBrandStoresApiContractCreateStoreShoppableImageContent {
  readonly croppedImage?: Inline1049;
  readonly points?: ReadonlyArray<Inline1051>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1052>;
}

export interface AdsBrandStoresApiContractCreateStoreShoppableImageTile {
  readonly commonProperties: Inline1055;
  readonly content?: Inline1056;
}

export interface AdsBrandStoresApiContractCreateStoreShoppableImageWidget {
  readonly commonProperties: Inline1062;
  readonly tiles: ReadonlyArray<Inline1063>;
}

export interface AdsBrandStoresApiContractCreateStoreShoppablePoint {
  readonly coordinates: Inline1070;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractCreateStoreShopTheLookContent {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline1072;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline1073;
  readonly slides?: ReadonlyArray<Inline1074 | Inline1075>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractCreateStoreShopTheLookSearch {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export type AdsBrandStoresApiContractCreateStoreShopTheLookSlide = Inline1078 | Inline1079;

export interface AdsBrandStoresApiContractCreateStoreShopTheLookWidget {
  readonly commonProperties: Inline1081;
  readonly content?: Inline1082;
}

export interface AdsBrandStoresApiContractCreateStoreTextContent {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface AdsBrandStoresApiContractCreateStoreTextTile {
  readonly commonProperties: Inline1088;
  readonly content?: Inline1089;
}

export interface AdsBrandStoresApiContractCreateStoreTextWidget {
  readonly commonProperties: Inline1091;
  readonly tiles: ReadonlyArray<Inline1092>;
}

export type AdsBrandStoresApiContractCreateStoreTile = Inline1095 | Inline1104 | Inline1109 | Inline1111 | Inline1117 | Inline1119 | Inline1123 | Inline1125;

export interface AdsBrandStoresApiContractCreateStoreTileLayer {
  readonly colorPalette?: string;
  readonly content?: Inline1128;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1129;
  readonly tag?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractCreateStoreTileLayerContent {
  readonly bodyText?: string;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly callToActionType?: string;
  readonly customUrl?: string;
  readonly headerText?: string;
  readonly pageId?: string;
  readonly prefixText?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tileTextAlignment?: string;
  readonly tileTextSize?: string;
}

export interface AdsBrandStoresApiContractCreateStoreTilePosition {
  readonly x?: string;
  readonly y?: string;
}

export interface AdsBrandStoresApiContractCreateStoreTileWidget {
  readonly commonProperties: Inline1133;
  readonly rowHeight?: number;
  readonly tiles: ReadonlyArray<Inline1134 | Inline1143 | Inline1148 | Inline1150 | Inline1156 | Inline1158 | Inline1162 | Inline1164>;
}

export interface AdsBrandStoresApiContractCreateStoreVideoContent {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1167;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1168>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface AdsBrandStoresApiContractCreateStoreVideoRevealVideos {
  readonly desktop: Inline1171;
  readonly mobile: Inline1172;
}

export interface AdsBrandStoresApiContractCreateStoreVideoRevealVRVideo {
  readonly assetId: string;
  readonly url: string;
}

export interface AdsBrandStoresApiContractCreateStoreVideoRevealWidget {
  readonly backgroundColor: string;
  readonly csmTag: string;
  readonly fadeoutDuration: string;
  readonly objectFit: string;
  readonly skipReveal: boolean;
  readonly throttleLimit: string;
  readonly videos: Inline1175;
}

export interface AdsBrandStoresApiContractCreateStoreVideoTile {
  readonly commonProperties: Inline1178;
  readonly content?: Inline1179;
}

export interface AdsBrandStoresApiContractCreateStoreVideoWidget {
  readonly commonProperties: Inline1183;
  readonly tiles: ReadonlyArray<Inline1184>;
}

export interface AdsBrandStoresApiContractCreateTag {
  readonly key: string;
  readonly value: string;
}

export interface AdsBrandStoresApiContractCTI {
  readonly category?: string;
  readonly item?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractError {
  readonly code: string;
  readonly fieldLocation?: string;
  readonly message: string;
}

export type AdsBrandStoresApiContractErrorCode = "BAD_REQUEST" | "CONFLICT" | "DUPLICATE_RESOURCE_ID_FOUND" | "FORBIDDEN" | "INTERNAL_ERROR" | "NOT_FOUND" | "TOO_MANY_REQUESTS" | "UNAUTHORIZED" | string;

export interface AdsBrandStoresApiContractErrorsIndex {
  readonly errors: ReadonlyArray<Inline1193>;
  readonly index: number;
}

export interface AdsBrandStoresApiContractForbiddenResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface AdsBrandStoresApiContractGatewayTimeoutResponseContent {
  readonly code: string;
  readonly message: string;
}

export type AdsBrandStoresApiContractHorizontalPosition = "CENTER" | "LEFT" | "RIGHT" | string;

export interface AdsBrandStoresApiContractInternalServerErrorResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface AdsBrandStoresApiContractNotFoundResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface AdsBrandStoresApiContractPriorityAsin {
  readonly addToCartActionParams: string;
  readonly bottleDepositFee?: string;
  readonly bottleDepositFeeString?: string;
  readonly cartQuantity: number;
  readonly catalogDisplayPricePerUnitOfMeasure?: string;
  readonly freshButton?: string;
  readonly isAlternateSearchResult: boolean;
  readonly isRequiredQuantityInCart: boolean;
  readonly isSoldByCount: boolean;
  readonly itemAvailability: string;
  readonly offerId: string;
  readonly offerName: string;
  readonly offerUnit: string;
  readonly productAsin: string;
  readonly productDetailsUrl: string;
  readonly productImageUrl: string;
  readonly promotionDisplay?: string;
  readonly promotionId?: string;
  readonly quantityInStock?: number;
  readonly requiredQuantity: number;
  readonly retailATCButton?: string;
  readonly reviewStars?: Inline1200;
  readonly searchTerm?: string;
  readonly subtotalParams: string;
  readonly vuomDisplayPrice: string;
}

export interface AdsBrandStoresApiContractQueryBrandStoreEditionPublishVersionRequest {
  readonly editionIdFilter: Inline1202;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly publishStatusFilter: Inline1203;
  readonly storeIdFilter: Inline1204;
}

export interface AdsBrandStoresApiContractQueryBrandStorePageRequest {
  readonly editionIdFilter: Inline1206;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly pageIdFilter: Inline1207;
  readonly storeEditionPublishIdFilter?: Inline1208;
  readonly storeIdFilter: Inline1209;
}

export interface AdsBrandStoresApiContractQueryBrandStoreRequest {
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly storeNameFilter: Inline1211;
}

export interface AdsBrandStoresApiContractReviewStars {
  readonly hasHalfStar: boolean;
  readonly reviewCount: number;
  readonly wholeStars: number;
}

export interface AdsBrandStoresApiContractServiceUnavailableErrorResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface AdsBrandStoresApiContractStoreASINSlide {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface AdsBrandStoresApiContractStoreAWLSTile {
  readonly commonProperties: Inline1216;
  readonly content?: Inline1217 | Inline1222 | Inline1227;
  readonly externalWidgetId: string;
}

export type AdsBrandStoresApiContractStoreAWLSTileContent = Inline1230 | Inline1235 | Inline1240;

export interface AdsBrandStoresApiContractStoreAWLSWidget {
  readonly commonProperties: Inline1243;
  readonly tiles: ReadonlyArray<Inline1244>;
  readonly widgetDependencies?: ReadonlyArray<string>;
}

export interface AdsBrandStoresApiContractStoreBannerContent {
  readonly banners?: Inline1258;
  readonly tag?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractStoreBanners {
  readonly blackLivesMatter: boolean;
  readonly stopAsianHate: boolean;
}

export interface AdsBrandStoresApiContractStoreBannerWidget {
  readonly commonProperties: Inline1261;
  readonly content: Inline1262;
}

export type AdsBrandStoresApiContractStoreBleedImageType = "ALL" | "CORNER" | "NONE" | "SIDE" | string;

export interface AdsBrandStoresApiContractStoreCallToActionData {
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsin?: string;
  readonly text?: string;
}

export interface AdsBrandStoresApiContractStoreCallToActionProductData {
  readonly customUrl?: string;
  readonly productAsin?: string;
  readonly text?: string;
}

export type AdsBrandStoresApiContractStoreCallToActionType = "BUTTON" | "LINK" | string;

export interface AdsBrandStoresApiContractStoreCanvasData {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface AdsBrandStoresApiContractStoreCarouselContent {
  readonly bulk: boolean;
  readonly callToActionData: Inline1269;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline1270;
  readonly slides?: ReadonlyArray<Inline1271>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface AdsBrandStoresApiContractStoreCarouselSearch {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export type AdsBrandStoresApiContractStoreColorPalette = "DEFAULT" | "DEFAULT_INVERTED" | "SOLID_BLACK" | "SOLID_WHITE" | "TRANSLUCENT_BLACK" | "TRANSLUCENT_WHITE" | "TRANSPARENT_BLACK" | "TRANSPARENT_WHITE" | string;

export interface AdsBrandStoresApiContractStoreCropBoxData {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface AdsBrandStoresApiContractStoreCroppedImage {
  readonly altText?: string;
  readonly assetId?: string;
  readonly canvasData?: Inline1276;
  readonly cropBox?: Inline1277;
  readonly imageKey?: string;
  readonly imageNaturalHeight?: number;
  readonly imageNaturalWidth?: number;
  readonly imageUrl?: string;
}

export interface AdsBrandStoresApiContractStoreCustomCodeContent {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline1279;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface AdsBrandStoresApiContractStoreCustomCodeTile {
  readonly commonProperties: Inline1281;
  readonly content?: Inline1282;
}

export interface AdsBrandStoresApiContractStoreCustomCodeWidget {
  readonly commonProperties: Inline1284;
  readonly tiles: ReadonlyArray<Inline1285>;
}

export interface AdsBrandStoresApiContractStoreDealsConfig {
  readonly node?: string;
}

export interface AdsBrandStoresApiContractStoreDealsContent {
  readonly deals?: Inline1289;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export type AdsBrandStoresApiContractStoreDealsMode = "AUTOMATIC" | "BULK" | string;

export interface AdsBrandStoresApiContractStoreDealsWidget {
  readonly commonProperties: Inline1292;
  readonly content?: Inline1293;
}

export interface AdsBrandStoresApiContractStoreEditionSchedule {
  readonly endAt?: string;
  readonly startAt?: string;
}

export interface AdsBrandStoresApiContractStoreEmptyTile {
  readonly commonProperties: Inline1296;
  readonly content: Inline1297;
}

export interface AdsBrandStoresApiContractStoreEmptyTileContent {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface AdsBrandStoresApiContractStoreGalleryContent {
  readonly metadata?: ReadonlyArray<Inline1300>;
  readonly slides?: ReadonlyArray<Inline1301>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractStoreGallerySlide {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractStoreGalleryWidget {
  readonly commonProperties: Inline1304;
  readonly content?: Inline1305;
}

export interface AdsBrandStoresApiContractStoreHeroContent {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline1308;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline1309;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface AdsBrandStoresApiContractStoreHeroImageWidget {
  readonly commonProperties: Inline1311;
  readonly content?: Inline1312;
}

export interface AdsBrandStoresApiContractStoreImageContent {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1315;
  readonly cropBoxData?: Inline1316;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export type AdsBrandStoresApiContractStoreImageLayout = "CONTAIN" | "COVER" | "TEXT" | string;

export type AdsBrandStoresApiContractStoreImageShape = "SQUARE" | string;

export interface AdsBrandStoresApiContractStoreImageSlide {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline1320;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly tag?: string;
  readonly type?: string;
}

export type AdsBrandStoresApiContractStoreImageTextAlign = "LEFT" | "RIGHT" | string;

export interface AdsBrandStoresApiContractStoreImageTile {
  readonly commonProperties: Inline1323;
  readonly content?: Inline1324;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline1326;
  readonly uploadMobileImage?: boolean;
}

export interface AdsBrandStoresApiContractStoreImageWidget {
  readonly commonProperties: Inline1329;
  readonly tiles: ReadonlyArray<Inline1330>;
}

export interface AdsBrandStoresApiContractStoreImageWithTextContent {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1336;
  readonly cropBoxData?: Inline1337;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1338>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface AdsBrandStoresApiContractStoreImageWithTextTile {
  readonly commonProperties: Inline1341;
  readonly content?: Inline1342;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline1346;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export type AdsBrandStoresApiContractStoreImageWithTextTileVariation = "IMAGE_WITH_TEXT" | string;

export interface AdsBrandStoresApiContractStoreImageWithTextWidget {
  readonly commonProperties: Inline1352;
  readonly tiles: ReadonlyArray<Inline1353>;
}

export type AdsBrandStoresApiContractStoreLayoutType = "DEFAULT" | "SHOWCASE" | string;

export interface AdsBrandStoresApiContractStoreLiveVideoContent {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface AdsBrandStoresApiContractStoreLiveVideoWidget {
  readonly commonProperties: Inline1365;
  readonly content: Inline1366;
}

export interface AdsBrandStoresApiContractStoreManuallyCuratedProductCarouselWidget {
  readonly commonProperties: Inline1368;
  readonly content?: Inline1369;
}

export interface AdsBrandStoresApiContractStoreMetadataItem {
  readonly alt?: string;
  readonly assetId?: string;
  readonly filename?: string;
  readonly imageKey?: string;
  readonly imageUrl?: string;
  readonly type?: string;
  readonly url?: string;
}

export interface AdsBrandStoresApiContractStoreMobileContent {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline1374;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface AdsBrandStoresApiContractStoreMobileImageContent {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1376;
  readonly cropBoxData?: Inline1377;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface AdsBrandStoresApiContractStoreMobileImageWithTextContent {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1379;
  readonly cropBoxData?: Inline1380;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1381>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface AdsBrandStoresApiContractStorePageContent {
  readonly description?: string;
  readonly template: string;
  readonly title?: string;
  readonly widgets?: ReadonlyArray<Inline1384 | Inline1387 | Inline1420 | Inline1426 | Inline1429 | Inline1439 | Inline1452 | Inline1454 | Inline1456 | Inline1459 | Inline1466 | Inline1469 | Inline1474 | Inline1477 | Inline1482 | Inline1486 | Inline1500 | Inline1502 | Inline1505>;
}

export type AdsBrandStoresApiContractStorePageTemplate = "BLANK" | "HIGHLIGHT" | "MARQUEE" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | string;

export type AdsBrandStoresApiContractStorePageType = "BRAND_STORE_PAGE" | "LANDING_PAGE" | string;

export interface AdsBrandStoresApiContractStorePageVersion {
  readonly pageId: string;
  readonly version: number;
}

export type AdsBrandStoresApiContractStorePageWidget = Inline1511 | Inline1514 | Inline1547 | Inline1553 | Inline1556 | Inline1566 | Inline1579 | Inline1581 | Inline1583 | Inline1586 | Inline1593 | Inline1596 | Inline1601 | Inline1604 | Inline1609 | Inline1613 | Inline1627 | Inline1629 | Inline1632;

export interface AdsBrandStoresApiContractStoreProductCarouselContent {
  readonly callToActionData?: Inline1635;
  readonly searchContent?: Inline1636;
  readonly tag: string;
  readonly type: string;
}

export interface AdsBrandStoresApiContractStoreProductCarouselSearch {
  readonly node?: string;
  readonly type?: string;
}

export type AdsBrandStoresApiContractStoreProductCarouselSearchType = "BEST_SELLING" | "RECOMMENDATION_FOR_YOU" | string;

export interface AdsBrandStoresApiContractStoreProductCarouselWidget {
  readonly commonProperties: Inline1640;
  readonly content: Inline1641;
}

export interface AdsBrandStoresApiContractStoreProductCollectionASINGrid {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type: string;
  readonly variation?: string;
}

export interface AdsBrandStoresApiContractStoreProductCollectionContent {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractStoreProductCollectionImageTile {
  readonly commonProperties: Inline1646;
  readonly content?: Inline1647;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline1651;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export type AdsBrandStoresApiContractStoreProductCollectionTile = Inline1656 | Inline1665;

export interface AdsBrandStoresApiContractStoreProductCollectionWidget {
  readonly aiMetadata?: ReadonlyArray<Inline1667>;
  readonly commonProperties: Inline1668;
  readonly content?: Inline1669;
  readonly tiles: ReadonlyArray<Inline1670 | Inline1679>;
}

export interface AdsBrandStoresApiContractStoreProductGridContent {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline1681;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractStoreProductGridSearch {
  readonly brandId?: string;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly sort?: string;
}

export interface AdsBrandStoresApiContractStoreProductGridWidget {
  readonly commonProperties: Inline1684;
  readonly content: Inline1685;
}

export interface AdsBrandStoresApiContractStoreProductSelectorAnswer {
  readonly image?: Inline1687;
  readonly nextStep: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag: string;
  readonly text?: string;
}

export type AdsBrandStoresApiContractStoreProductSelectorButtonColor = "BLACK" | "TRANSPARENT" | "WHITE" | string;

export interface AdsBrandStoresApiContractStoreProductSelectorDesignOptions {
  readonly backgroundColor: string;
  readonly backgroundShape: string;
  readonly buttonColor?: string;
  readonly buttonShape: string;
  readonly textAlignment: string;
  readonly textSize: string;
  readonly textStyle: string;
  readonly textWeight: string;
}

export interface AdsBrandStoresApiContractStoreProductSelectorImage {
  readonly assetId: string;
  readonly fileName?: string;
  readonly imageUrl: string;
  readonly layout?: string;
}

export type AdsBrandStoresApiContractStoreProductSelectorImageLayout = "BOTTOM" | "LEFT" | "RIGHT" | "TOP" | string;

export interface AdsBrandStoresApiContractStoreProductSelectorImageOptions {
  readonly image: Inline1693;
  readonly layoutConfiguration: Inline1694;
}

export interface AdsBrandStoresApiContractStoreProductSelectorIntroduction {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline1696;
  readonly isEnabled: boolean;
}

export interface AdsBrandStoresApiContractStoreProductSelectorLayoutConfiguration {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface AdsBrandStoresApiContractStoreProductSelectorQuestion {
  readonly answerList?: ReadonlyArray<Inline1700>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface AdsBrandStoresApiContractStoreProductSelectorResults {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface AdsBrandStoresApiContractStoreProductSelectorWidget {
  readonly designOptions: Inline1703;
  readonly introduction?: Inline1704;
  readonly productAsins?: ReadonlyArray<string>;
  readonly questionList?: ReadonlyArray<Inline1706>;
  readonly results: Inline1707;
}

export interface AdsBrandStoresApiContractStoreProductTile {
  readonly commonProperties: Inline1709;
  readonly content?: Inline1710;
}

export interface AdsBrandStoresApiContractStoreProductTileContent {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface AdsBrandStoresApiContractStoreProductWidget {
  readonly commonProperties: Inline1713;
  readonly tiles: ReadonlyArray<Inline1714>;
}

export type AdsBrandStoresApiContractStorePublishState = "DRAFT" | "PUBLISH" | string;

export type AdsBrandStoresApiContractStorePublishStatus = "DRAFT" | "REVIEW_IN_PROGRESS" | string;

export interface AdsBrandStoresApiContractStoreShoppableImageContent {
  readonly croppedImage?: Inline1719;
  readonly points?: ReadonlyArray<Inline1721>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1722>;
}

export interface AdsBrandStoresApiContractStoreShoppableImageTile {
  readonly commonProperties: Inline1725;
  readonly content?: Inline1726;
}

export interface AdsBrandStoresApiContractStoreShoppableImageWidget {
  readonly commonProperties: Inline1732;
  readonly tiles: ReadonlyArray<Inline1733>;
}

export interface AdsBrandStoresApiContractStoreShoppablePoint {
  readonly coordinates: Inline1740;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export type AdsBrandStoresApiContractStoreShoppableTextOption = "NO_TEXT_UNDER_INTERACTIVE_IMAGE" | "TEXT_OVER_IMAGE" | "TEXT_UNDER_INTERACTIVE_IMAGE" | string;

export interface AdsBrandStoresApiContractStoreShopTheLookContent {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline1743;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline1744;
  readonly slides?: ReadonlyArray<Inline1745 | Inline1746>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractStoreShopTheLookSearch {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export type AdsBrandStoresApiContractStoreShopTheLookSlide = Inline1749 | Inline1750;

export interface AdsBrandStoresApiContractStoreShopTheLookWidget {
  readonly commonProperties: Inline1752;
  readonly content?: Inline1753;
}

export type AdsBrandStoresApiContractStoreSlideType = "ASIN" | "IMAGE" | string;

export type AdsBrandStoresApiContractStoreTextAlignment = "CENTER" | "JUSTIFY" | "LEFT" | "RIGHT" | string;

export interface AdsBrandStoresApiContractStoreTextContent {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export type AdsBrandStoresApiContractStoreTextOption = "TEXT_NEXT_TO_IMAGE" | "TEXT_OVER_IMAGE" | string;

export type AdsBrandStoresApiContractStoreTextOptionType = "NO_TEXT_OVER_VIDEO" | "TEXT_OVER_VIDEO" | string;

export interface AdsBrandStoresApiContractStoreTextTile {
  readonly commonProperties: Inline1763;
  readonly content?: Inline1764;
}

export interface AdsBrandStoresApiContractStoreTextWidget {
  readonly commonProperties: Inline1766;
  readonly tiles: ReadonlyArray<Inline1767>;
}

export type AdsBrandStoresApiContractStoreTile = Inline1770 | Inline1779 | Inline1784 | Inline1786 | Inline1792 | Inline1794 | Inline1798 | Inline1800;

export type AdsBrandStoresApiContractStoreTileBorderSize = "LARGE" | "MEDIUM" | "NONE" | "SMALL" | string;

export interface AdsBrandStoresApiContractStoreTileLayer {
  readonly colorPalette?: string;
  readonly content?: Inline1804;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1805;
  readonly tag?: string;
  readonly type?: string;
}

export interface AdsBrandStoresApiContractStoreTileLayerContent {
  readonly bodyText?: string;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly callToActionType?: string;
  readonly customUrl?: string;
  readonly headerText?: string;
  readonly pageId?: string;
  readonly prefixText?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tileTextAlignment?: string;
  readonly tileTextSize?: string;
}

export interface AdsBrandStoresApiContractStoreTilePosition {
  readonly x?: string;
  readonly y?: string;
}

export type AdsBrandStoresApiContractStoreTileSize = "LARGE" | "MEDIUM" | "MINI" | "SMALL" | string;

export type AdsBrandStoresApiContractStoreTileTextSize = "LARGE" | "MEDIUM" | "MINI" | "SMALL" | string;

export type AdsBrandStoresApiContractStoreTileType = "CUSTOM_CODE" | "EMPTY" | "EXTERNAL_WIDGET" | "IMAGE" | "INTERACTIVE_IMAGE" | "PRODUCT" | "TEXT" | "VIDEO" | string;

export interface AdsBrandStoresApiContractStoreTileWidget {
  readonly commonProperties: Inline1812;
  readonly rowHeight?: number;
  readonly tiles: ReadonlyArray<Inline1813 | Inline1822 | Inline1827 | Inline1829 | Inline1835 | Inline1837 | Inline1841 | Inline1843>;
}

export type AdsBrandStoresApiContractStoreVerticalAlign = "BOTTOM" | "MIDDLE" | "TOP" | string;

export interface AdsBrandStoresApiContractStoreVideoContent {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1847;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1848>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface AdsBrandStoresApiContractStoreVideoRevealVideos {
  readonly desktop: Inline1851;
  readonly mobile: Inline1852;
}

export interface AdsBrandStoresApiContractStoreVideoRevealVRVideo {
  readonly assetId: string;
  readonly url: string;
}

export interface AdsBrandStoresApiContractStoreVideoRevealWidget {
  readonly backgroundColor: string;
  readonly csmTag: string;
  readonly fadeoutDuration: string;
  readonly objectFit: string;
  readonly skipReveal: boolean;
  readonly throttleLimit: string;
  readonly videos: Inline1855;
}

export interface AdsBrandStoresApiContractStoreVideoTile {
  readonly commonProperties: Inline1858;
  readonly content?: Inline1859;
}

export interface AdsBrandStoresApiContractStoreVideoWidget {
  readonly commonProperties: Inline1863;
  readonly tiles: ReadonlyArray<Inline1864>;
}

export type AdsBrandStoresApiContractStoreWidgetSectionType = "BANNER" | "BEST_SELLING" | "DEALS_AND_COUPONS" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MANUALLY_CURATED_PRODUCT_CAROUSEL" | "PREMIUM_BEST_SELLING" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | "RECOMMENDED" | "SHOP_THE_LOOK_CAROUSEL" | string;

export type AdsBrandStoresApiContractStoreWidgetType = "BANNER" | "EDITORIAL_ROW" | "GALLERY" | "HERO" | "LIVE_VIDEO" | "MULTI_MEDIA_CAROUSEL" | "PRODUCT_CAROUSEL" | "PRODUCT_COLLECTION" | "PRODUCT_GRID" | string;

export interface AdsBrandStoresApiContractTag {
  readonly key: string;
  readonly value: string;
}

export interface AdsBrandStoresApiContractTooManyRequestsResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface AdsBrandStoresApiContractUnauthorizedResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface AdsBrandStoresApiContractUpdateBrandStoreEditionPublishVersionRequest {
  readonly brandStoreEditionPublishVersions: ReadonlyArray<Inline1874>;
}

export interface AdsBrandStoresApiContractUpdateBrandStorePageRequest {
  readonly brandStorePages: ReadonlyArray<Inline1876>;
}

export interface AdsBrandStoresApiContractUpdateStorePageContent {
  readonly description?: string;
  readonly template?: string;
  readonly title?: string;
  readonly widgets?: ReadonlyArray<Inline2000 | Inline2003 | Inline2036 | Inline2042 | Inline2045 | Inline2055 | Inline2068 | Inline2070 | Inline2072 | Inline2075 | Inline2082 | Inline2085 | Inline2090 | Inline2093 | Inline2098 | Inline2102 | Inline2116 | Inline2118 | Inline2121>;
}

export type AdsBrandStoresApiContractVerticalPosition = "BOTTOM" | "MIDDLE" | "TOP" | string;

export interface BadGatewayResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface BadRequestResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface ContentTooLargeResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface DSPAdGroupForecast {
  readonly adGroupForecastDescription: Inline2128;
  readonly creationDateTime: string;
  readonly forecastDetails: Inline2129;
  readonly warnings?: ReadonlyArray<Inline2141>;
}

export interface DSPAdGroupForecastDescription {
  readonly adGroupId: string;
  readonly enabledFeatures: Inline2143;
}

export interface DSPAdGroupForecastMultiStatusResponse {
  readonly error?: ReadonlyArray<Inline2145>;
  readonly success?: ReadonlyArray<Inline2146>;
}

export interface DSPAdGroupForecastMultiStatusSuccess {
  readonly adGroupForecast: Inline2161;
  readonly index: number;
}

export interface DSPBudget {
  readonly budgetValue: Inline2176;
}

export type DSPBudgetValue = Inline2178;

export interface DSPCampaignForecast {
  readonly availableForecastFlights?: ReadonlyArray<Inline2180>;
  readonly campaignForecastDescription: Inline2181;
  readonly creationDateTime: string;
  readonly flightForecasts?: ReadonlyArray<Inline2183>;
}

export interface DSPCampaignForecastDescription {
  readonly campaignId: string;
  readonly enabledFeatures: Inline2200;
  readonly flightIds?: ReadonlyArray<string>;
  readonly replanningSettings?: Inline2201;
}

export interface DSPCampaignForecastMultiStatusResponse {
  readonly error?: ReadonlyArray<Inline2203>;
  readonly success?: ReadonlyArray<Inline2204>;
}

export interface DSPCampaignForecastMultiStatusSuccess {
  readonly campaignForecast: Inline2224;
  readonly index: number;
}

export type DSPCurrencyCode = "AED" | "AUD" | "BRL" | "CAD" | "CHF" | "CNY" | "DKK" | "EGP" | "EUR" | "GBP" | "INR" | "JPY" | "MXN" | "MXP" | "NGN" | "NOK" | "NZD" | "PLN" | "SAR" | "SEK" | "SGD" | "TRY" | "USD" | "ZAR" | string;

export interface DSPCurve {
  readonly focusPoint?: ReadonlyArray<Inline2245>;
  readonly periodicity?: string;
  readonly points?: ReadonlyArray<Inline2247>;
}

export interface DSPDeliverInFullConfidence {
  readonly value: string;
}

export type DSPDeliverInFullConfidenceLevel = "HIGH" | "LOW" | "MEDIUM" | "UNAVAILABLE" | string;

export interface DSPEnabledFeaturesInAdGroupForecast {
  readonly campaignSettingsCache?: boolean;
  readonly curve?: boolean;
  readonly metrics?: Inline2252;
}

export interface DSPEnabledFeaturesInCampaignForecast {
  readonly campaignSettingsCache?: boolean;
  readonly curve?: boolean;
  readonly metrics?: Inline2254;
  readonly replanning?: boolean;
}

export interface DSPFlightForecast {
  readonly curves?: ReadonlyArray<Inline2256>;
  readonly deliverInFullConfidence?: Inline2260;
  readonly flightId: string;
  readonly forecastEndDateTime: string;
  readonly forecastStartDateTime: string;
  readonly metrics?: ReadonlyArray<Inline2261>;
  readonly remainingBudget: Inline2262;
  readonly replanning?: ReadonlyArray<Inline2263>;
  readonly spend: number;
  readonly totalBudget: Inline2270;
  readonly warnings?: ReadonlyArray<Inline2271>;
}

export interface DSPForecastDetails {
  readonly curves?: ReadonlyArray<Inline2273>;
  readonly metrics?: ReadonlyArray<Inline2277>;
  readonly replanning?: ReadonlyArray<Inline2278>;
}

export interface DSPForecastFlight {
  readonly budget: Inline2286;
  readonly endDateTime: string;
  readonly flightId?: string;
  readonly startDateTime: string;
}

export interface DSPForecastMetric {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2288;
}

export interface DSPForecastMetricsDescription {
  readonly allMetrics: boolean;
  readonly selectedMetrics?: string;
}

export type DSPForecastPeriodicity = "DAILY" | "LIFETIME" | "MONTHLY" | "WEEKLY" | string;

export interface DSPForecastValue {
  readonly high: number;
  readonly low: number;
  readonly mean: number;
}

export interface DSPMonetaryBudget {
  readonly currencyCode: string;
  readonly value: number;
}

export interface DSPMonetaryBudgetValue {
  readonly monetaryBudget?: Inline2294;
}

export interface DSPPoint {
  readonly pointType?: string;
  readonly x: Inline2296;
  readonly y?: ReadonlyArray<Inline2297>;
}

export type DSPPointLabel = "AIMP" | "AREA" | "BID" | "CAS" | "CPA" | "CPC" | "CPM" | "DC" | "EIMP" | "EREA" | "ROAS" | "SPEND" | "TAS" | string;

export interface DSPReplanning {
  readonly content: string;
  readonly curves?: ReadonlyArray<Inline2300>;
  readonly deliverInFullConfidence?: Inline2304;
  readonly metrics?: ReadonlyArray<Inline2305>;
  readonly scenarioFlight?: Inline2306;
  readonly scenarioType?: string;
  readonly selectedMetrics?: string;
  readonly title: string;
}

export interface DSPReplanningSettings {
  readonly flights?: ReadonlyArray<Inline2308>;
}

export interface DSPRetrieveAdGroupForecastParams {
  readonly adGroupForecastDescriptions?: ReadonlyArray<Inline2481>;
}

export interface DSPRetrieveAdGroupForecastRequest {
  readonly adGroupForecastDescriptions?: ReadonlyArray<Inline2310>;
}

export interface DSPRetrieveAdGroupForecastResponse {

}

export interface DSPRetrieveCampaignForecastParams {
  readonly campaignForecastDescriptions?: ReadonlyArray<Inline2485>;
}

export interface DSPRetrieveCampaignForecastRequest {
  readonly campaignForecastDescriptions?: ReadonlyArray<Inline2312>;
}

export interface DSPRetrieveCampaignForecastResponse {

}

export type DSPSelectedForecastMetric = "AIMP" | "AREA" | "CAS" | "CPA" | "CPC" | "CPM" | "DC" | "EIMP" | "EREA" | "ROAS" | "TAS" | string;

export interface DSPWarning {
  readonly adGroupIds?: ReadonlyArray<string>;
  readonly code: string;
  readonly message: string;
}

export interface DSPXPoint {
  readonly label: string;
  readonly value: number;
}

export interface DSPYPoint {
  readonly label: string;
  readonly value: Inline2318;
}

export interface Error {
  readonly code: string;
  readonly fieldLocation?: string;
  readonly message: string;
}

export type ErrorCode = "BAD_REQUEST" | string;

export interface ErrorsIndex {
  readonly errors: ReadonlyArray<Inline2322>;
  readonly index: number;
}

export interface ForbiddenResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface GatewayTimeoutResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface Inline10 {
  readonly body: string;
  readonly title: string;
}

export interface Inline100 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1001 {
  readonly key: string;
  readonly value: string;
}

export interface Inline1002 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1003 {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1004 {
  readonly storeProductCollectionImageTile: Inline1004;
}

export interface Inline1005 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1005;
  readonly cropBoxData?: Inline1006;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1007>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1006 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1007 {
  readonly colorPalette?: string;
  readonly content?: Inline1007;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1008;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1008 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1009 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1009;
  readonly cropBoxData?: Inline1010;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1011>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline101 {
  readonly storeProductCollectionASINGrid: Inline101;
}

export interface Inline1010 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1011 {
  readonly colorPalette?: string;
  readonly content?: Inline1011;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1012;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1012 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1013 {
  readonly storeProductCollectionASINGrid: Inline1013;
}

export interface Inline1015 {
  readonly brandId?: string;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly sort?: string;
}

export interface Inline1018 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1019 {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline1019;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline102 {
  readonly storeProductGridWidget: Inline102;
}

export interface Inline1021 {
  readonly assetId: string;
  readonly fileName?: string;
  readonly imageUrl: string;
  readonly layout?: string;
}

export interface Inline1025 {
  readonly assetId: string;
  readonly fileName?: string;
  readonly imageUrl: string;
  readonly layout?: string;
}

export interface Inline1026 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline1028 {
  readonly image: Inline1028;
  readonly layoutConfiguration: Inline1029;
}

export interface Inline1029 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline103 {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline103;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1032 {
  readonly image?: Inline1032;
  readonly nextStep: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline1035 {
  readonly backgroundColor: string;
  readonly backgroundShape: string;
  readonly buttonColor?: string;
  readonly buttonShape: string;
  readonly textAlignment: string;
  readonly textSize: string;
  readonly textStyle: string;
  readonly textWeight: string;
}

export interface Inline1036 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline1036;
  readonly isEnabled: boolean;
}

export interface Inline1037 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline1038 {
  readonly answerList?: ReadonlyArray<Inline1038>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline1039 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline104 {
  readonly storeDealsWidget: Inline104;
}

export interface Inline1041 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1042 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1045 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1046 {
  readonly commonProperties: Inline1046;
  readonly content?: Inline1047;
}

export interface Inline1047 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1049 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly canvasData?: Inline1049;
  readonly cropBox?: Inline1050;
  readonly imageKey?: string;
  readonly imageNaturalHeight?: number;
  readonly imageNaturalWidth?: number;
  readonly imageUrl?: string;
}

export interface Inline105 {
  readonly deals?: Inline105;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1050 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1051 {
  readonly coordinates: Inline1051;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1052 {
  readonly colorPalette?: string;
  readonly content?: Inline1052;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1053;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1053 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1055 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1056 {
  readonly croppedImage?: Inline1056;
  readonly points?: ReadonlyArray<Inline1058>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1059>;
}

export interface Inline1057 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1058 {
  readonly coordinates: Inline1058;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1059 {
  readonly colorPalette?: string;
  readonly content?: Inline1059;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1060;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline106 {
  readonly storeProductWidget: Inline106;
}

export interface Inline1060 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1062 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1063 {
  readonly commonProperties: Inline1063;
  readonly content?: Inline1064;
}

export interface Inline1064 {
  readonly croppedImage?: Inline1064;
  readonly points?: ReadonlyArray<Inline1066>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1067>;
}

export interface Inline1065 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1066 {
  readonly coordinates: Inline1066;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1067 {
  readonly colorPalette?: string;
  readonly content?: Inline1067;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1068;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1068 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline107 {
  readonly commonProperties: Inline107;
  readonly content?: Inline108;
}

export interface Inline1070 {
  readonly x?: number;
  readonly y?: number;
}

export interface Inline1072 {
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsin?: string;
  readonly text?: string;
}

export interface Inline1073 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline1074 {
  readonly storeImageSlide: Inline1074;
}

export interface Inline1075 {
  readonly storeASINSlide: Inline1075;
}

export interface Inline1078 {
  readonly storeImageSlide: Inline1078;
}

export interface Inline1079 {
  readonly storeASINSlide: Inline1079;
}

export interface Inline108 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1081 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1082 {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline1082;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline1083;
  readonly slides?: ReadonlyArray<Inline1084 | Inline1085>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1083 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline1084 {
  readonly storeImageSlide: Inline1084;
}

export interface Inline1085 {
  readonly storeASINSlide: Inline1085;
}

export interface Inline1088 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1089 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline109 {
  readonly storeShoppableImageWidget: Inline109;
}

export interface Inline1091 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1092 {
  readonly commonProperties: Inline1092;
  readonly content?: Inline1093;
}

export interface Inline1093 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline1095 {
  readonly storeImageWithTextTile: Inline1095;
}

export interface Inline1096 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1096;
  readonly cropBoxData?: Inline1097;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1098>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1097 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1098 {
  readonly colorPalette?: string;
  readonly content?: Inline1098;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1099;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1099 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline11 {
  readonly priorityAsins?: ReadonlyArray<Inline11>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline110 {
  readonly commonProperties: Inline110;
  readonly content?: Inline111;
}

export interface Inline1100 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1100;
  readonly cropBoxData?: Inline1101;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1102>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1101 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1102 {
  readonly colorPalette?: string;
  readonly content?: Inline1102;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1103;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1103 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1104 {
  readonly storeImageTile: Inline1104;
}

export interface Inline1105 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1105;
  readonly cropBoxData?: Inline1106;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1106 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1107 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1107;
  readonly cropBoxData?: Inline1108;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1108 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1109 {
  readonly storeProductTile: Inline1109;
}

export interface Inline111 {
  readonly croppedImage?: Inline111;
  readonly points?: ReadonlyArray<Inline113>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline114>;
}

export interface Inline1110 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1111 {
  readonly storeShoppableImageTile: Inline1111;
}

export interface Inline1112 {
  readonly croppedImage?: Inline1112;
  readonly points?: ReadonlyArray<Inline1114>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1115>;
}

export interface Inline1113 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1114 {
  readonly coordinates: Inline1114;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1115 {
  readonly colorPalette?: string;
  readonly content?: Inline1115;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1116;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1116 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1117 {
  readonly storeTextTile: Inline1117;
}

export interface Inline1118 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline1119 {
  readonly storeVideoTile: Inline1119;
}

export interface Inline112 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1120 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1120;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1121>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline1121 {
  readonly colorPalette?: string;
  readonly content?: Inline1121;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1122;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1122 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1123 {
  readonly storeEmptyTile: Inline1123;
}

export interface Inline1124 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1125 {
  readonly storeCustomCodeTile: Inline1125;
}

export interface Inline1126 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline1126;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline1128 {
  readonly bodyText?: string;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly callToActionType?: string;
  readonly customUrl?: string;
  readonly headerText?: string;
  readonly pageId?: string;
  readonly prefixText?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tileTextAlignment?: string;
  readonly tileTextSize?: string;
}

export interface Inline1129 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline113 {
  readonly coordinates: Inline113;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1133 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1134 {
  readonly storeImageWithTextTile: Inline1134;
}

export interface Inline1135 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1135;
  readonly cropBoxData?: Inline1136;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1137>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1136 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1137 {
  readonly colorPalette?: string;
  readonly content?: Inline1137;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1138;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1138 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1139 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1139;
  readonly cropBoxData?: Inline1140;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1141>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline114 {
  readonly colorPalette?: string;
  readonly content?: Inline114;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline115;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1140 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1141 {
  readonly colorPalette?: string;
  readonly content?: Inline1141;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1142;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1142 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1143 {
  readonly storeImageTile: Inline1143;
}

export interface Inline1144 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1144;
  readonly cropBoxData?: Inline1145;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1145 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1146 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1146;
  readonly cropBoxData?: Inline1147;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1147 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1148 {
  readonly storeProductTile: Inline1148;
}

export interface Inline1149 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline115 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1150 {
  readonly storeShoppableImageTile: Inline1150;
}

export interface Inline1151 {
  readonly croppedImage?: Inline1151;
  readonly points?: ReadonlyArray<Inline1153>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1154>;
}

export interface Inline1152 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1153 {
  readonly coordinates: Inline1153;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1154 {
  readonly colorPalette?: string;
  readonly content?: Inline1154;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1155;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1155 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1156 {
  readonly storeTextTile: Inline1156;
}

export interface Inline1157 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline1158 {
  readonly storeVideoTile: Inline1158;
}

export interface Inline1159 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1159;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1160>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline116 {
  readonly storeCustomCodeWidget: Inline116;
}

export interface Inline1160 {
  readonly colorPalette?: string;
  readonly content?: Inline1160;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1161;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1161 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1162 {
  readonly storeEmptyTile: Inline1162;
}

export interface Inline1163 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1164 {
  readonly storeCustomCodeTile: Inline1164;
}

export interface Inline1165 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline1165;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline1167 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1168 {
  readonly colorPalette?: string;
  readonly content?: Inline1168;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1169;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1169 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline117 {
  readonly commonProperties: Inline117;
  readonly content?: Inline118;
}

export interface Inline1171 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline1172 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline1175 {
  readonly desktop: Inline1175;
  readonly mobile: Inline1176;
}

export interface Inline1176 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline1178 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1179 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1179;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1180>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline118 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline118;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline1180 {
  readonly colorPalette?: string;
  readonly content?: Inline1180;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1181;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1181 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1183 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1184 {
  readonly commonProperties: Inline1184;
  readonly content?: Inline1185;
}

export interface Inline1185 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1185;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1186>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline1186 {
  readonly colorPalette?: string;
  readonly content?: Inline1186;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1187;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1187 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline119 {
  readonly storeVideoWidget: Inline119;
}

export interface Inline1193 {
  readonly code: string;
  readonly fieldLocation?: string;
  readonly message: string;
}

export interface Inline12 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline12>;
}

export interface Inline120 {
  readonly commonProperties: Inline120;
  readonly content?: Inline121;
}

export interface Inline1200 {
  readonly hasHalfStar: boolean;
  readonly reviewCount: number;
  readonly wholeStars: number;
}

export interface Inline1202 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1203 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1204 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1206 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1207 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1208 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1209 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline121 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline121;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline122>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline1211 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline1216 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1217 {
  readonly brandedRecipeWidget: Inline1217;
}

export interface Inline1218 {
  readonly body: string;
  readonly title: string;
}

export interface Inline1219 {
  readonly priorityAsins?: ReadonlyArray<Inline1219>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline122 {
  readonly colorPalette?: string;
  readonly content?: Inline122;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline123;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1220 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline1220>;
}

export interface Inline1221 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline1222 {
  readonly storeProductSelectorWidget: Inline1222;
}

export interface Inline1223 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline1223;
  readonly isEnabled: boolean;
}

export interface Inline1224 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline1225 {
  readonly answerList?: ReadonlyArray<Inline1225>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline1226 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline1227 {
  readonly storeVideoRevealWidget: Inline1227;
}

export interface Inline1228 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline123 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1230 {
  readonly brandedRecipeWidget: Inline1230;
}

export interface Inline1231 {
  readonly body: string;
  readonly title: string;
}

export interface Inline1232 {
  readonly priorityAsins?: ReadonlyArray<Inline1232>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline1233 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline1233>;
}

export interface Inline1234 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline1235 {
  readonly storeProductSelectorWidget: Inline1235;
}

export interface Inline1236 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline1236;
  readonly isEnabled: boolean;
}

export interface Inline1237 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline1238 {
  readonly answerList?: ReadonlyArray<Inline1238>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline1239 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline124 {
  readonly storeGalleryWidget: Inline124;
}

export interface Inline1240 {
  readonly storeVideoRevealWidget: Inline1240;
}

export interface Inline1241 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline1243 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1244 {
  readonly commonProperties: Inline1244;
  readonly content?: Inline1245 | Inline1250 | Inline1255;
  readonly externalWidgetId: string;
}

export interface Inline1245 {
  readonly brandedRecipeWidget: Inline1245;
}

export interface Inline1246 {
  readonly body: string;
  readonly title: string;
}

export interface Inline1247 {
  readonly priorityAsins?: ReadonlyArray<Inline1247>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline1248 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline1248>;
}

export interface Inline1249 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline125 {
  readonly metadata?: ReadonlyArray<Inline125>;
  readonly slides?: ReadonlyArray<Inline126>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1250 {
  readonly storeProductSelectorWidget: Inline1250;
}

export interface Inline1251 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline1251;
  readonly isEnabled: boolean;
}

export interface Inline1252 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline1253 {
  readonly answerList?: ReadonlyArray<Inline1253>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline1254 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline1255 {
  readonly storeVideoRevealWidget: Inline1255;
}

export interface Inline1256 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline1258 {
  readonly blackLivesMatter: boolean;
  readonly stopAsianHate: boolean;
}

export interface Inline126 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline1261 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1262 {
  readonly banners?: Inline1262;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1269 {
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsin?: string;
  readonly text?: string;
}

export interface Inline127 {
  readonly storeShopTheLookWidget: Inline127;
}

export interface Inline1270 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline1271 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1276 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1277 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1279 {
  readonly category?: string;
  readonly item?: string;
  readonly type?: string;
}

export interface Inline128 {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline128;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline129;
  readonly slides?: ReadonlyArray<Inline130 | Inline131>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1281 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1282 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline1282;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline1284 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1285 {
  readonly commonProperties: Inline1285;
  readonly content?: Inline1286;
}

export interface Inline1286 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline1286;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline1289 {
  readonly node?: string;
}

export interface Inline129 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline1292 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1293 {
  readonly deals?: Inline1293;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1296 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1297 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline13 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline130 {
  readonly storeImageSlide: Inline130;
}

export interface Inline1300 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly filename?: string;
  readonly imageKey?: string;
  readonly imageUrl?: string;
  readonly type?: string;
  readonly url?: string;
}

export interface Inline1301 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline1304 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1305 {
  readonly metadata?: ReadonlyArray<Inline1305>;
  readonly slides?: ReadonlyArray<Inline1306>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1306 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline1308 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1309 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline1309;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline131 {
  readonly storeASINSlide: Inline131;
}

export interface Inline1311 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1312 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline1312;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline1313;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface Inline1313 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline1313;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline1315 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1316 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline132 {
  readonly storeManuallyCuratedProductCarouselWidget: Inline132;
}

export interface Inline1320 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1323 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1324 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1324;
  readonly cropBoxData?: Inline1325;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1325 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1326 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1326;
  readonly cropBoxData?: Inline1327;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1327 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1329 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline133 {
  readonly bulk: boolean;
  readonly callToActionData: Inline133;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline134;
  readonly slides?: ReadonlyArray<Inline135>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface Inline1330 {
  readonly commonProperties: Inline1330;
  readonly content?: Inline1331;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline1333;
  readonly uploadMobileImage?: boolean;
}

export interface Inline1331 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1331;
  readonly cropBoxData?: Inline1332;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1332 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1333 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1333;
  readonly cropBoxData?: Inline1334;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1334 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1336 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1337 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1338 {
  readonly colorPalette?: string;
  readonly content?: Inline1338;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1339;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1339 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline134 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline1341 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1342 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1342;
  readonly cropBoxData?: Inline1343;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1344>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1343 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1344 {
  readonly colorPalette?: string;
  readonly content?: Inline1344;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1345;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1345 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1346 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1346;
  readonly cropBoxData?: Inline1347;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1348>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1347 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1348 {
  readonly colorPalette?: string;
  readonly content?: Inline1348;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1349;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1349 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline135 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1352 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1353 {
  readonly commonProperties: Inline1353;
  readonly content?: Inline1354;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline1358;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface Inline1354 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1354;
  readonly cropBoxData?: Inline1355;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1356>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1355 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1356 {
  readonly colorPalette?: string;
  readonly content?: Inline1356;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1357;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1357 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1358 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1358;
  readonly cropBoxData?: Inline1359;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1360>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1359 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline136 {
  readonly storeAWLSWidget: Inline136;
}

export interface Inline1360 {
  readonly colorPalette?: string;
  readonly content?: Inline1360;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1361;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1361 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1365 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1366 {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1368 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1369 {
  readonly bulk: boolean;
  readonly callToActionData: Inline1369;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline1370;
  readonly slides?: ReadonlyArray<Inline1371>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface Inline137 {
  readonly commonProperties: Inline137;
  readonly content?: Inline138 | Inline143 | Inline148;
  readonly externalWidgetId: string;
}

export interface Inline1370 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline1371 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1374 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1376 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1377 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1379 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline138 {
  readonly brandedRecipeWidget: Inline138;
}

export interface Inline1380 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1381 {
  readonly colorPalette?: string;
  readonly content?: Inline1381;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1382;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1382 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1384 {
  readonly storeHeroImageWidget: Inline1384;
}

export interface Inline1385 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline1385;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline1386;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface Inline1386 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline1386;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline1387 {
  readonly storeTileWidget: Inline1387;
}

export interface Inline1388 {
  readonly storeImageWithTextTile: Inline1388;
}

export interface Inline1389 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1389;
  readonly cropBoxData?: Inline1390;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1391>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline139 {
  readonly body: string;
  readonly title: string;
}

export interface Inline1390 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1391 {
  readonly colorPalette?: string;
  readonly content?: Inline1391;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1392;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1392 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1393 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1393;
  readonly cropBoxData?: Inline1394;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1395>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1394 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1395 {
  readonly colorPalette?: string;
  readonly content?: Inline1395;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1396;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1396 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1397 {
  readonly storeImageTile: Inline1397;
}

export interface Inline1398 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1398;
  readonly cropBoxData?: Inline1399;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1399 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline140 {
  readonly priorityAsins?: ReadonlyArray<Inline140>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline1400 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1400;
  readonly cropBoxData?: Inline1401;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1401 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1402 {
  readonly storeProductTile: Inline1402;
}

export interface Inline1403 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1404 {
  readonly storeShoppableImageTile: Inline1404;
}

export interface Inline1405 {
  readonly croppedImage?: Inline1405;
  readonly points?: ReadonlyArray<Inline1407>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1408>;
}

export interface Inline1406 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1407 {
  readonly coordinates: Inline1407;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1408 {
  readonly colorPalette?: string;
  readonly content?: Inline1408;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1409;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1409 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline141 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline141>;
}

export interface Inline1410 {
  readonly storeTextTile: Inline1410;
}

export interface Inline1411 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline1412 {
  readonly storeVideoTile: Inline1412;
}

export interface Inline1413 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1413;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1414>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline1414 {
  readonly colorPalette?: string;
  readonly content?: Inline1414;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1415;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1415 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1416 {
  readonly storeEmptyTile: Inline1416;
}

export interface Inline1417 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1418 {
  readonly storeCustomCodeTile: Inline1418;
}

export interface Inline1419 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline1419;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline142 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline1420 {
  readonly storeImageWidget: Inline1420;
}

export interface Inline1421 {
  readonly commonProperties: Inline1421;
  readonly content?: Inline1422;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline1424;
  readonly uploadMobileImage?: boolean;
}

export interface Inline1422 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1422;
  readonly cropBoxData?: Inline1423;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1423 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1424 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1424;
  readonly cropBoxData?: Inline1425;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1425 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1426 {
  readonly storeTextWidget: Inline1426;
}

export interface Inline1427 {
  readonly commonProperties: Inline1427;
  readonly content?: Inline1428;
}

export interface Inline1428 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline1429 {
  readonly storeImageWithTextWidget: Inline1429;
}

export interface Inline143 {
  readonly storeProductSelectorWidget: Inline143;
}

export interface Inline1430 {
  readonly commonProperties: Inline1430;
  readonly content?: Inline1431;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline1435;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface Inline1431 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1431;
  readonly cropBoxData?: Inline1432;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1433>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1432 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1433 {
  readonly colorPalette?: string;
  readonly content?: Inline1433;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1434;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1434 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1435 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1435;
  readonly cropBoxData?: Inline1436;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1437>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1436 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1437 {
  readonly colorPalette?: string;
  readonly content?: Inline1437;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1438;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1438 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1439 {
  readonly storeProductCollectionWidget: Inline1439;
}

export interface Inline144 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline144;
  readonly isEnabled: boolean;
}

export interface Inline1440 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1441 {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1442 {
  readonly storeProductCollectionImageTile: Inline1442;
}

export interface Inline1443 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1443;
  readonly cropBoxData?: Inline1444;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1445>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1444 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1445 {
  readonly colorPalette?: string;
  readonly content?: Inline1445;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1446;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1446 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1447 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1447;
  readonly cropBoxData?: Inline1448;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1449>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1448 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1449 {
  readonly colorPalette?: string;
  readonly content?: Inline1449;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1450;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline145 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline1450 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1451 {
  readonly storeProductCollectionASINGrid: Inline1451;
}

export interface Inline1452 {
  readonly storeProductGridWidget: Inline1452;
}

export interface Inline1453 {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline1453;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1454 {
  readonly storeDealsWidget: Inline1454;
}

export interface Inline1455 {
  readonly deals?: Inline1455;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1456 {
  readonly storeProductWidget: Inline1456;
}

export interface Inline1457 {
  readonly commonProperties: Inline1457;
  readonly content?: Inline1458;
}

export interface Inline1458 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1459 {
  readonly storeShoppableImageWidget: Inline1459;
}

export interface Inline146 {
  readonly answerList?: ReadonlyArray<Inline146>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline1460 {
  readonly commonProperties: Inline1460;
  readonly content?: Inline1461;
}

export interface Inline1461 {
  readonly croppedImage?: Inline1461;
  readonly points?: ReadonlyArray<Inline1463>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1464>;
}

export interface Inline1462 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1463 {
  readonly coordinates: Inline1463;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1464 {
  readonly colorPalette?: string;
  readonly content?: Inline1464;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1465;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1465 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1466 {
  readonly storeCustomCodeWidget: Inline1466;
}

export interface Inline1467 {
  readonly commonProperties: Inline1467;
  readonly content?: Inline1468;
}

export interface Inline1468 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline1468;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline1469 {
  readonly storeVideoWidget: Inline1469;
}

export interface Inline147 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline1470 {
  readonly commonProperties: Inline1470;
  readonly content?: Inline1471;
}

export interface Inline1471 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1471;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1472>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline1472 {
  readonly colorPalette?: string;
  readonly content?: Inline1472;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1473;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1473 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1474 {
  readonly storeGalleryWidget: Inline1474;
}

export interface Inline1475 {
  readonly metadata?: ReadonlyArray<Inline1475>;
  readonly slides?: ReadonlyArray<Inline1476>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1476 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline1477 {
  readonly storeShopTheLookWidget: Inline1477;
}

export interface Inline1478 {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline1478;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline1479;
  readonly slides?: ReadonlyArray<Inline1480 | Inline1481>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1479 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline148 {
  readonly storeVideoRevealWidget: Inline148;
}

export interface Inline1480 {
  readonly storeImageSlide: Inline1480;
}

export interface Inline1481 {
  readonly storeASINSlide: Inline1481;
}

export interface Inline1482 {
  readonly storeManuallyCuratedProductCarouselWidget: Inline1482;
}

export interface Inline1483 {
  readonly bulk: boolean;
  readonly callToActionData: Inline1483;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline1484;
  readonly slides?: ReadonlyArray<Inline1485>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface Inline1484 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline1485 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1486 {
  readonly storeAWLSWidget: Inline1486;
}

export interface Inline1487 {
  readonly commonProperties: Inline1487;
  readonly content?: Inline1488 | Inline1493 | Inline1498;
  readonly externalWidgetId: string;
}

export interface Inline1488 {
  readonly brandedRecipeWidget: Inline1488;
}

export interface Inline1489 {
  readonly body: string;
  readonly title: string;
}

export interface Inline149 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline1490 {
  readonly priorityAsins?: ReadonlyArray<Inline1490>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline1491 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline1491>;
}

export interface Inline1492 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline1493 {
  readonly storeProductSelectorWidget: Inline1493;
}

export interface Inline1494 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline1494;
  readonly isEnabled: boolean;
}

export interface Inline1495 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline1496 {
  readonly answerList?: ReadonlyArray<Inline1496>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline1497 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline1498 {
  readonly storeVideoRevealWidget: Inline1498;
}

export interface Inline1499 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline15 {
  readonly tag: string;
  readonly title: string;
}

export interface Inline150 {
  readonly storeBannerWidget: Inline150;
}

export interface Inline1500 {
  readonly storeBannerWidget: Inline1500;
}

export interface Inline1501 {
  readonly banners?: Inline1501;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1502 {
  readonly storeProductCarouselWidget: Inline1502;
}

export interface Inline1503 {
  readonly callToActionData?: Inline1503;
  readonly searchContent?: Inline1504;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1504 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline1505 {
  readonly storeLiveVideoWidget: Inline1505;
}

export interface Inline1506 {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline151 {
  readonly banners?: Inline151;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1511 {
  readonly storeHeroImageWidget: Inline1511;
}

export interface Inline1512 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline1512;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline1513;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface Inline1513 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline1513;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline1514 {
  readonly storeTileWidget: Inline1514;
}

export interface Inline1515 {
  readonly storeImageWithTextTile: Inline1515;
}

export interface Inline1516 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1516;
  readonly cropBoxData?: Inline1517;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1518>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1517 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1518 {
  readonly colorPalette?: string;
  readonly content?: Inline1518;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1519;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1519 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline152 {
  readonly storeProductCarouselWidget: Inline152;
}

export interface Inline1520 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1520;
  readonly cropBoxData?: Inline1521;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1522>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1521 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1522 {
  readonly colorPalette?: string;
  readonly content?: Inline1522;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1523;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1523 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1524 {
  readonly storeImageTile: Inline1524;
}

export interface Inline1525 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1525;
  readonly cropBoxData?: Inline1526;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1526 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1527 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1527;
  readonly cropBoxData?: Inline1528;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1528 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1529 {
  readonly storeProductTile: Inline1529;
}

export interface Inline153 {
  readonly callToActionData?: Inline153;
  readonly searchContent?: Inline154;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1530 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1531 {
  readonly storeShoppableImageTile: Inline1531;
}

export interface Inline1532 {
  readonly croppedImage?: Inline1532;
  readonly points?: ReadonlyArray<Inline1534>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1535>;
}

export interface Inline1533 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1534 {
  readonly coordinates: Inline1534;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1535 {
  readonly colorPalette?: string;
  readonly content?: Inline1535;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1536;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1536 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1537 {
  readonly storeTextTile: Inline1537;
}

export interface Inline1538 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline1539 {
  readonly storeVideoTile: Inline1539;
}

export interface Inline154 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline1540 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1540;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1541>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline1541 {
  readonly colorPalette?: string;
  readonly content?: Inline1541;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1542;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1542 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1543 {
  readonly storeEmptyTile: Inline1543;
}

export interface Inline1544 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1545 {
  readonly storeCustomCodeTile: Inline1545;
}

export interface Inline1546 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline1546;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline1547 {
  readonly storeImageWidget: Inline1547;
}

export interface Inline1548 {
  readonly commonProperties: Inline1548;
  readonly content?: Inline1549;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline1551;
  readonly uploadMobileImage?: boolean;
}

export interface Inline1549 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1549;
  readonly cropBoxData?: Inline1550;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline155 {
  readonly storeLiveVideoWidget: Inline155;
}

export interface Inline1550 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1551 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1551;
  readonly cropBoxData?: Inline1552;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1552 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1553 {
  readonly storeTextWidget: Inline1553;
}

export interface Inline1554 {
  readonly commonProperties: Inline1554;
  readonly content?: Inline1555;
}

export interface Inline1555 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline1556 {
  readonly storeImageWithTextWidget: Inline1556;
}

export interface Inline1557 {
  readonly commonProperties: Inline1557;
  readonly content?: Inline1558;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline1562;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface Inline1558 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1558;
  readonly cropBoxData?: Inline1559;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1560>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1559 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline156 {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1560 {
  readonly colorPalette?: string;
  readonly content?: Inline1560;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1561;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1561 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1562 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1562;
  readonly cropBoxData?: Inline1563;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1564>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1563 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1564 {
  readonly colorPalette?: string;
  readonly content?: Inline1564;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1565;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1565 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1566 {
  readonly storeProductCollectionWidget: Inline1566;
}

export interface Inline1567 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1568 {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1569 {
  readonly storeProductCollectionImageTile: Inline1569;
}

export interface Inline1570 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1570;
  readonly cropBoxData?: Inline1571;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1572>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1571 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1572 {
  readonly colorPalette?: string;
  readonly content?: Inline1572;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1573;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1573 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1574 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1574;
  readonly cropBoxData?: Inline1575;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1576>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1575 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1576 {
  readonly colorPalette?: string;
  readonly content?: Inline1576;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1577;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1577 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1578 {
  readonly storeProductCollectionASINGrid: Inline1578;
}

export interface Inline1579 {
  readonly storeProductGridWidget: Inline1579;
}

export interface Inline1580 {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline1580;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1581 {
  readonly storeDealsWidget: Inline1581;
}

export interface Inline1582 {
  readonly deals?: Inline1582;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1583 {
  readonly storeProductWidget: Inline1583;
}

export interface Inline1584 {
  readonly commonProperties: Inline1584;
  readonly content?: Inline1585;
}

export interface Inline1585 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1586 {
  readonly storeShoppableImageWidget: Inline1586;
}

export interface Inline1587 {
  readonly commonProperties: Inline1587;
  readonly content?: Inline1588;
}

export interface Inline1588 {
  readonly croppedImage?: Inline1588;
  readonly points?: ReadonlyArray<Inline1590>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1591>;
}

export interface Inline1589 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1590 {
  readonly coordinates: Inline1590;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1591 {
  readonly colorPalette?: string;
  readonly content?: Inline1591;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1592;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1592 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1593 {
  readonly storeCustomCodeWidget: Inline1593;
}

export interface Inline1594 {
  readonly commonProperties: Inline1594;
  readonly content?: Inline1595;
}

export interface Inline1595 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline1595;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline1596 {
  readonly storeVideoWidget: Inline1596;
}

export interface Inline1597 {
  readonly commonProperties: Inline1597;
  readonly content?: Inline1598;
}

export interface Inline1598 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1598;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1599>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline1599 {
  readonly colorPalette?: string;
  readonly content?: Inline1599;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1600;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1600 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1601 {
  readonly storeGalleryWidget: Inline1601;
}

export interface Inline1602 {
  readonly metadata?: ReadonlyArray<Inline1602>;
  readonly slides?: ReadonlyArray<Inline1603>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1603 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline1604 {
  readonly storeShopTheLookWidget: Inline1604;
}

export interface Inline1605 {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline1605;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline1606;
  readonly slides?: ReadonlyArray<Inline1607 | Inline1608>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1606 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline1607 {
  readonly storeImageSlide: Inline1607;
}

export interface Inline1608 {
  readonly storeASINSlide: Inline1608;
}

export interface Inline1609 {
  readonly storeManuallyCuratedProductCarouselWidget: Inline1609;
}

export interface Inline1610 {
  readonly bulk: boolean;
  readonly callToActionData: Inline1610;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline1611;
  readonly slides?: ReadonlyArray<Inline1612>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface Inline1611 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline1612 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1613 {
  readonly storeAWLSWidget: Inline1613;
}

export interface Inline1614 {
  readonly commonProperties: Inline1614;
  readonly content?: Inline1615 | Inline1620 | Inline1625;
  readonly externalWidgetId: string;
}

export interface Inline1615 {
  readonly brandedRecipeWidget: Inline1615;
}

export interface Inline1616 {
  readonly body: string;
  readonly title: string;
}

export interface Inline1617 {
  readonly priorityAsins?: ReadonlyArray<Inline1617>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline1618 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline1618>;
}

export interface Inline1619 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline162 {
  readonly errors: ReadonlyArray<Inline162>;
  readonly index: number;
}

export interface Inline1620 {
  readonly storeProductSelectorWidget: Inline1620;
}

export interface Inline1621 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline1621;
  readonly isEnabled: boolean;
}

export interface Inline1622 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline1623 {
  readonly answerList?: ReadonlyArray<Inline1623>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline1624 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline1625 {
  readonly storeVideoRevealWidget: Inline1625;
}

export interface Inline1626 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline1627 {
  readonly storeBannerWidget: Inline1627;
}

export interface Inline1628 {
  readonly banners?: Inline1628;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1629 {
  readonly storeProductCarouselWidget: Inline1629;
}

export interface Inline163 {
  readonly brandStorePage: Inline163;
  readonly index: number;
}

export interface Inline1630 {
  readonly callToActionData?: Inline1630;
  readonly searchContent?: Inline1631;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1631 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline1632 {
  readonly storeLiveVideoWidget: Inline1632;
}

export interface Inline1633 {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1635 {
  readonly customUrl?: string;
  readonly productAsin?: string;
  readonly text?: string;
}

export interface Inline1636 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline164 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline164;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline165;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface Inline1640 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1641 {
  readonly callToActionData?: Inline1641;
  readonly searchContent?: Inline1642;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1642 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline1646 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1647 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1647;
  readonly cropBoxData?: Inline1648;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1649>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1648 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1649 {
  readonly colorPalette?: string;
  readonly content?: Inline1649;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1650;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline165 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline165;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline1650 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1651 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1651;
  readonly cropBoxData?: Inline1652;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1653>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1652 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1653 {
  readonly colorPalette?: string;
  readonly content?: Inline1653;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1654;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1654 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1656 {
  readonly storeProductCollectionImageTile: Inline1656;
}

export interface Inline1657 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1657;
  readonly cropBoxData?: Inline1658;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1659>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1658 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1659 {
  readonly colorPalette?: string;
  readonly content?: Inline1659;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1660;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline166 {
  readonly storeTileWidget: Inline166;
}

export interface Inline1660 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1661 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1661;
  readonly cropBoxData?: Inline1662;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1663>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1662 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1663 {
  readonly colorPalette?: string;
  readonly content?: Inline1663;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1664;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1664 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1665 {
  readonly storeProductCollectionASINGrid: Inline1665;
}

export interface Inline1667 {
  readonly key: string;
  readonly value: string;
}

export interface Inline1668 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1669 {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline167 {
  readonly storeImageWithTextTile: Inline167;
}

export interface Inline1670 {
  readonly storeProductCollectionImageTile: Inline1670;
}

export interface Inline1671 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1671;
  readonly cropBoxData?: Inline1672;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1673>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1672 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1673 {
  readonly colorPalette?: string;
  readonly content?: Inline1673;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1674;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1674 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1675 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1675;
  readonly cropBoxData?: Inline1676;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1677>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1676 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1677 {
  readonly colorPalette?: string;
  readonly content?: Inline1677;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1678;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1678 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1679 {
  readonly storeProductCollectionASINGrid: Inline1679;
}

export interface Inline168 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline168;
  readonly cropBoxData?: Inline169;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline170>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1681 {
  readonly brandId?: string;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly sort?: string;
}

export interface Inline1684 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1685 {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline1685;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1687 {
  readonly assetId: string;
  readonly fileName?: string;
  readonly imageUrl: string;
  readonly layout?: string;
}

export interface Inline169 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1693 {
  readonly assetId: string;
  readonly fileName?: string;
  readonly imageUrl: string;
  readonly layout?: string;
}

export interface Inline1694 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline1696 {
  readonly image: Inline1696;
  readonly layoutConfiguration: Inline1697;
}

export interface Inline1697 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline17 {
  readonly endAt?: string;
  readonly startAt?: string;
}

export interface Inline170 {
  readonly colorPalette?: string;
  readonly content?: Inline170;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline171;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1700 {
  readonly image?: Inline1700;
  readonly nextStep: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline1703 {
  readonly backgroundColor: string;
  readonly backgroundShape: string;
  readonly buttonColor?: string;
  readonly buttonShape: string;
  readonly textAlignment: string;
  readonly textSize: string;
  readonly textStyle: string;
  readonly textWeight: string;
}

export interface Inline1704 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline1704;
  readonly isEnabled: boolean;
}

export interface Inline1705 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline1706 {
  readonly answerList?: ReadonlyArray<Inline1706>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline1707 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline1709 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline171 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1710 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1713 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1714 {
  readonly commonProperties: Inline1714;
  readonly content?: Inline1715;
}

export interface Inline1715 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1719 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly canvasData?: Inline1719;
  readonly cropBox?: Inline1720;
  readonly imageKey?: string;
  readonly imageNaturalHeight?: number;
  readonly imageNaturalWidth?: number;
  readonly imageUrl?: string;
}

export interface Inline172 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline172;
  readonly cropBoxData?: Inline173;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline174>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1720 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1721 {
  readonly coordinates: Inline1721;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1722 {
  readonly colorPalette?: string;
  readonly content?: Inline1722;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1723;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1723 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1725 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1726 {
  readonly croppedImage?: Inline1726;
  readonly points?: ReadonlyArray<Inline1728>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1729>;
}

export interface Inline1727 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1728 {
  readonly coordinates: Inline1728;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1729 {
  readonly colorPalette?: string;
  readonly content?: Inline1729;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1730;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline173 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1730 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1732 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1733 {
  readonly commonProperties: Inline1733;
  readonly content?: Inline1734;
}

export interface Inline1734 {
  readonly croppedImage?: Inline1734;
  readonly points?: ReadonlyArray<Inline1736>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1737>;
}

export interface Inline1735 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1736 {
  readonly coordinates: Inline1736;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1737 {
  readonly colorPalette?: string;
  readonly content?: Inline1737;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1738;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1738 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline174 {
  readonly colorPalette?: string;
  readonly content?: Inline174;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline175;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1740 {
  readonly x?: number;
  readonly y?: number;
}

export interface Inline1743 {
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsin?: string;
  readonly text?: string;
}

export interface Inline1744 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline1745 {
  readonly storeImageSlide: Inline1745;
}

export interface Inline1746 {
  readonly storeASINSlide: Inline1746;
}

export interface Inline1749 {
  readonly storeImageSlide: Inline1749;
}

export interface Inline175 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1750 {
  readonly storeASINSlide: Inline1750;
}

export interface Inline1752 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1753 {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline1753;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline1754;
  readonly slides?: ReadonlyArray<Inline1755 | Inline1756>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1754 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline1755 {
  readonly storeImageSlide: Inline1755;
}

export interface Inline1756 {
  readonly storeASINSlide: Inline1756;
}

export interface Inline176 {
  readonly storeImageTile: Inline176;
}

export interface Inline1763 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1764 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline1766 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1767 {
  readonly commonProperties: Inline1767;
  readonly content?: Inline1768;
}

export interface Inline1768 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline177 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline177;
  readonly cropBoxData?: Inline178;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1770 {
  readonly storeImageWithTextTile: Inline1770;
}

export interface Inline1771 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1771;
  readonly cropBoxData?: Inline1772;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1773>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1772 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1773 {
  readonly colorPalette?: string;
  readonly content?: Inline1773;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1774;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1774 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1775 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1775;
  readonly cropBoxData?: Inline1776;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1777>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1776 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1777 {
  readonly colorPalette?: string;
  readonly content?: Inline1777;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1778;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1778 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1779 {
  readonly storeImageTile: Inline1779;
}

export interface Inline178 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1780 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1780;
  readonly cropBoxData?: Inline1781;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1781 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1782 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1782;
  readonly cropBoxData?: Inline1783;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1783 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1784 {
  readonly storeProductTile: Inline1784;
}

export interface Inline1785 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1786 {
  readonly storeShoppableImageTile: Inline1786;
}

export interface Inline1787 {
  readonly croppedImage?: Inline1787;
  readonly points?: ReadonlyArray<Inline1789>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1790>;
}

export interface Inline1788 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1789 {
  readonly coordinates: Inline1789;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline179 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline179;
  readonly cropBoxData?: Inline180;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1790 {
  readonly colorPalette?: string;
  readonly content?: Inline1790;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1791;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1791 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1792 {
  readonly storeTextTile: Inline1792;
}

export interface Inline1793 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline1794 {
  readonly storeVideoTile: Inline1794;
}

export interface Inline1795 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1795;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1796>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline1796 {
  readonly colorPalette?: string;
  readonly content?: Inline1796;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1797;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1797 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1798 {
  readonly storeEmptyTile: Inline1798;
}

export interface Inline1799 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline180 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1800 {
  readonly storeCustomCodeTile: Inline1800;
}

export interface Inline1801 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline1801;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline1804 {
  readonly bodyText?: string;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly callToActionType?: string;
  readonly customUrl?: string;
  readonly headerText?: string;
  readonly pageId?: string;
  readonly prefixText?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tileTextAlignment?: string;
  readonly tileTextSize?: string;
}

export interface Inline1805 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline181 {
  readonly storeProductTile: Inline181;
}

export interface Inline1812 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1813 {
  readonly storeImageWithTextTile: Inline1813;
}

export interface Inline1814 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1814;
  readonly cropBoxData?: Inline1815;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1816>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1815 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1816 {
  readonly colorPalette?: string;
  readonly content?: Inline1816;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1817;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1817 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1818 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1818;
  readonly cropBoxData?: Inline1819;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1820>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1819 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline182 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1820 {
  readonly colorPalette?: string;
  readonly content?: Inline1820;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1821;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1821 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1822 {
  readonly storeImageTile: Inline1822;
}

export interface Inline1823 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1823;
  readonly cropBoxData?: Inline1824;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1824 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1825 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1825;
  readonly cropBoxData?: Inline1826;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1826 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1827 {
  readonly storeProductTile: Inline1827;
}

export interface Inline1828 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1829 {
  readonly storeShoppableImageTile: Inline1829;
}

export interface Inline183 {
  readonly storeShoppableImageTile: Inline183;
}

export interface Inline1830 {
  readonly croppedImage?: Inline1830;
  readonly points?: ReadonlyArray<Inline1832>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1833>;
}

export interface Inline1831 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1832 {
  readonly coordinates: Inline1832;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1833 {
  readonly colorPalette?: string;
  readonly content?: Inline1833;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1834;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1834 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1835 {
  readonly storeTextTile: Inline1835;
}

export interface Inline1836 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline1837 {
  readonly storeVideoTile: Inline1837;
}

export interface Inline1838 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1838;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1839>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline1839 {
  readonly colorPalette?: string;
  readonly content?: Inline1839;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1840;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline184 {
  readonly croppedImage?: Inline184;
  readonly points?: ReadonlyArray<Inline186>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline187>;
}

export interface Inline1840 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1841 {
  readonly storeEmptyTile: Inline1841;
}

export interface Inline1842 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1843 {
  readonly storeCustomCodeTile: Inline1843;
}

export interface Inline1844 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline1844;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline1847 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1848 {
  readonly colorPalette?: string;
  readonly content?: Inline1848;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1849;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1849 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline185 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1851 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline1852 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline1855 {
  readonly desktop: Inline1855;
  readonly mobile: Inline1856;
}

export interface Inline1856 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline1858 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1859 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1859;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1860>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline186 {
  readonly coordinates: Inline186;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1860 {
  readonly colorPalette?: string;
  readonly content?: Inline1860;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1861;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1861 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1863 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1864 {
  readonly commonProperties: Inline1864;
  readonly content?: Inline1865;
}

export interface Inline1865 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1865;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1866>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline1866 {
  readonly colorPalette?: string;
  readonly content?: Inline1866;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1867;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1867 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline187 {
  readonly colorPalette?: string;
  readonly content?: Inline187;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline188;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1874 {
  readonly editionId?: string;
  readonly publishState?: string;
  readonly storeEditionPublishId: string;
  readonly storeId?: string;
}

export interface Inline1876 {
  readonly content?: Inline1876;
  readonly editionId?: string;
  readonly pageId: string;
  readonly storeEditionPublishId?: string;
  readonly storeId?: string;
}

export interface Inline1877 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline1877;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline1878;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface Inline1878 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline1878;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline1879 {
  readonly storeTileWidget: Inline1879;
}

export interface Inline188 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1880 {
  readonly storeImageWithTextTile: Inline1880;
}

export interface Inline1881 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1881;
  readonly cropBoxData?: Inline1882;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1883>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1882 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1883 {
  readonly colorPalette?: string;
  readonly content?: Inline1883;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1884;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1884 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1885 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1885;
  readonly cropBoxData?: Inline1886;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1887>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1886 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1887 {
  readonly colorPalette?: string;
  readonly content?: Inline1887;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1888;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1888 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1889 {
  readonly storeImageTile: Inline1889;
}

export interface Inline189 {
  readonly storeTextTile: Inline189;
}

export interface Inline1890 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1890;
  readonly cropBoxData?: Inline1891;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1891 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1892 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1892;
  readonly cropBoxData?: Inline1893;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1893 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1894 {
  readonly storeProductTile: Inline1894;
}

export interface Inline1895 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1896 {
  readonly storeShoppableImageTile: Inline1896;
}

export interface Inline1897 {
  readonly croppedImage?: Inline1897;
  readonly points?: ReadonlyArray<Inline1899>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1900>;
}

export interface Inline1898 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1899 {
  readonly coordinates: Inline1899;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline19 {
  readonly pageId: string;
  readonly version: number;
}

export interface Inline190 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline1900 {
  readonly colorPalette?: string;
  readonly content?: Inline1900;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1901;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1901 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1902 {
  readonly storeTextTile: Inline1902;
}

export interface Inline1903 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline1904 {
  readonly storeVideoTile: Inline1904;
}

export interface Inline1905 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1905;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1906>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline1906 {
  readonly colorPalette?: string;
  readonly content?: Inline1906;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1907;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1907 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1908 {
  readonly storeEmptyTile: Inline1908;
}

export interface Inline1909 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline191 {
  readonly storeVideoTile: Inline191;
}

export interface Inline1910 {
  readonly storeCustomCodeTile: Inline1910;
}

export interface Inline1911 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline1911;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline1912 {
  readonly storeImageWidget: Inline1912;
}

export interface Inline1913 {
  readonly commonProperties: Inline1913;
  readonly content?: Inline1914;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline1916;
  readonly uploadMobileImage?: boolean;
}

export interface Inline1914 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1914;
  readonly cropBoxData?: Inline1915;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1915 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1916 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1916;
  readonly cropBoxData?: Inline1917;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1917 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1918 {
  readonly storeTextWidget: Inline1918;
}

export interface Inline1919 {
  readonly commonProperties: Inline1919;
  readonly content?: Inline1920;
}

export interface Inline192 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline192;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline193>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline1920 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline1921 {
  readonly storeImageWithTextWidget: Inline1921;
}

export interface Inline1922 {
  readonly commonProperties: Inline1922;
  readonly content?: Inline1923;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline1927;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface Inline1923 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1923;
  readonly cropBoxData?: Inline1924;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1925>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1924 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1925 {
  readonly colorPalette?: string;
  readonly content?: Inline1925;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1926;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1926 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1927 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1927;
  readonly cropBoxData?: Inline1928;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1929>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1928 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1929 {
  readonly colorPalette?: string;
  readonly content?: Inline1929;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1930;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline193 {
  readonly colorPalette?: string;
  readonly content?: Inline193;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline194;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1930 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1931 {
  readonly storeProductCollectionWidget: Inline1931;
}

export interface Inline1932 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline1933 {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1934 {
  readonly storeProductCollectionImageTile: Inline1934;
}

export interface Inline1935 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline1935;
  readonly cropBoxData?: Inline1936;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1937>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline1936 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1937 {
  readonly colorPalette?: string;
  readonly content?: Inline1937;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1938;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1938 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1939 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline1939;
  readonly cropBoxData?: Inline1940;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1941>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline194 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1940 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1941 {
  readonly colorPalette?: string;
  readonly content?: Inline1941;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1942;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1942 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1943 {
  readonly storeProductCollectionASINGrid: Inline1943;
}

export interface Inline1944 {
  readonly storeProductGridWidget: Inline1944;
}

export interface Inline1945 {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline1945;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1946 {
  readonly storeDealsWidget: Inline1946;
}

export interface Inline1947 {
  readonly deals?: Inline1947;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1948 {
  readonly storeProductWidget: Inline1948;
}

export interface Inline1949 {
  readonly commonProperties: Inline1949;
  readonly content?: Inline1950;
}

export interface Inline195 {
  readonly storeEmptyTile: Inline195;
}

export interface Inline1950 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1951 {
  readonly storeShoppableImageWidget: Inline1951;
}

export interface Inline1952 {
  readonly commonProperties: Inline1952;
  readonly content?: Inline1953;
}

export interface Inline1953 {
  readonly croppedImage?: Inline1953;
  readonly points?: ReadonlyArray<Inline1955>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1956>;
}

export interface Inline1954 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline1955 {
  readonly coordinates: Inline1955;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1956 {
  readonly colorPalette?: string;
  readonly content?: Inline1956;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1957;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1957 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1958 {
  readonly storeCustomCodeWidget: Inline1958;
}

export interface Inline1959 {
  readonly commonProperties: Inline1959;
  readonly content?: Inline1960;
}

export interface Inline196 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline1960 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline1960;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline1961 {
  readonly storeVideoWidget: Inline1961;
}

export interface Inline1962 {
  readonly commonProperties: Inline1962;
  readonly content?: Inline1963;
}

export interface Inline1963 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline1963;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline1964>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline1964 {
  readonly colorPalette?: string;
  readonly content?: Inline1964;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline1965;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1965 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline1966 {
  readonly storeGalleryWidget: Inline1966;
}

export interface Inline1967 {
  readonly metadata?: ReadonlyArray<Inline1967>;
  readonly slides?: ReadonlyArray<Inline1968>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1968 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline1969 {
  readonly storeShopTheLookWidget: Inline1969;
}

export interface Inline197 {
  readonly storeCustomCodeTile: Inline197;
}

export interface Inline1970 {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline1970;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline1971;
  readonly slides?: ReadonlyArray<Inline1972 | Inline1973>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline1971 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline1972 {
  readonly storeImageSlide: Inline1972;
}

export interface Inline1973 {
  readonly storeASINSlide: Inline1973;
}

export interface Inline1974 {
  readonly storeManuallyCuratedProductCarouselWidget: Inline1974;
}

export interface Inline1975 {
  readonly bulk: boolean;
  readonly callToActionData: Inline1975;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline1976;
  readonly slides?: ReadonlyArray<Inline1977>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface Inline1976 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline1977 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1978 {
  readonly storeAWLSWidget: Inline1978;
}

export interface Inline1979 {
  readonly commonProperties: Inline1979;
  readonly content?: Inline1980 | Inline1985 | Inline1990;
  readonly externalWidgetId: string;
}

export interface Inline198 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline198;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline1980 {
  readonly brandedRecipeWidget: Inline1980;
}

export interface Inline1981 {
  readonly body: string;
  readonly title: string;
}

export interface Inline1982 {
  readonly priorityAsins?: ReadonlyArray<Inline1982>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline1983 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline1983>;
}

export interface Inline1984 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline1985 {
  readonly storeProductSelectorWidget: Inline1985;
}

export interface Inline1986 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline1986;
  readonly isEnabled: boolean;
}

export interface Inline1987 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline1988 {
  readonly answerList?: ReadonlyArray<Inline1988>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline1989 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline199 {
  readonly storeImageWidget: Inline199;
}

export interface Inline1990 {
  readonly storeVideoRevealWidget: Inline1990;
}

export interface Inline1991 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline1992 {
  readonly storeBannerWidget: Inline1992;
}

export interface Inline1993 {
  readonly banners?: Inline1993;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline1994 {
  readonly storeProductCarouselWidget: Inline1994;
}

export interface Inline1995 {
  readonly callToActionData?: Inline1995;
  readonly searchContent?: Inline1996;
  readonly tag: string;
  readonly type: string;
}

export interface Inline1996 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline1997 {
  readonly storeLiveVideoWidget: Inline1997;
}

export interface Inline1998 {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline200 {
  readonly commonProperties: Inline200;
  readonly content?: Inline201;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline203;
  readonly uploadMobileImage?: boolean;
}

export interface Inline2000 {
  readonly storeHeroImageWidget: Inline2000;
}

export interface Inline2001 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline2001;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline2002;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface Inline2002 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline2002;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline2003 {
  readonly storeTileWidget: Inline2003;
}

export interface Inline2004 {
  readonly storeImageWithTextTile: Inline2004;
}

export interface Inline2005 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2005;
  readonly cropBoxData?: Inline2006;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2007>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2006 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2007 {
  readonly colorPalette?: string;
  readonly content?: Inline2007;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2008;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2008 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2009 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2009;
  readonly cropBoxData?: Inline2010;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2011>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline201 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline201;
  readonly cropBoxData?: Inline202;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2010 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2011 {
  readonly colorPalette?: string;
  readonly content?: Inline2011;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2012;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2012 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2013 {
  readonly storeImageTile: Inline2013;
}

export interface Inline2014 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2014;
  readonly cropBoxData?: Inline2015;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2015 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2016 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2016;
  readonly cropBoxData?: Inline2017;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2017 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2018 {
  readonly storeProductTile: Inline2018;
}

export interface Inline2019 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline202 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2020 {
  readonly storeShoppableImageTile: Inline2020;
}

export interface Inline2021 {
  readonly croppedImage?: Inline2021;
  readonly points?: ReadonlyArray<Inline2023>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2024>;
}

export interface Inline2022 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2023 {
  readonly coordinates: Inline2023;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2024 {
  readonly colorPalette?: string;
  readonly content?: Inline2024;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2025;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2025 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2026 {
  readonly storeTextTile: Inline2026;
}

export interface Inline2027 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline2028 {
  readonly storeVideoTile: Inline2028;
}

export interface Inline2029 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline2029;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2030>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline203 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline203;
  readonly cropBoxData?: Inline204;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2030 {
  readonly colorPalette?: string;
  readonly content?: Inline2030;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2031;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2031 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2032 {
  readonly storeEmptyTile: Inline2032;
}

export interface Inline2033 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline2034 {
  readonly storeCustomCodeTile: Inline2034;
}

export interface Inline2035 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline2035;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline2036 {
  readonly storeImageWidget: Inline2036;
}

export interface Inline2037 {
  readonly commonProperties: Inline2037;
  readonly content?: Inline2038;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline2040;
  readonly uploadMobileImage?: boolean;
}

export interface Inline2038 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2038;
  readonly cropBoxData?: Inline2039;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2039 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline204 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2040 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2040;
  readonly cropBoxData?: Inline2041;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2041 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2042 {
  readonly storeTextWidget: Inline2042;
}

export interface Inline2043 {
  readonly commonProperties: Inline2043;
  readonly content?: Inline2044;
}

export interface Inline2044 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline2045 {
  readonly storeImageWithTextWidget: Inline2045;
}

export interface Inline2046 {
  readonly commonProperties: Inline2046;
  readonly content?: Inline2047;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline2051;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface Inline2047 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2047;
  readonly cropBoxData?: Inline2048;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2049>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2048 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2049 {
  readonly colorPalette?: string;
  readonly content?: Inline2049;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2050;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline205 {
  readonly storeTextWidget: Inline205;
}

export interface Inline2050 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2051 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2051;
  readonly cropBoxData?: Inline2052;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2053>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2052 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2053 {
  readonly colorPalette?: string;
  readonly content?: Inline2053;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2054;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2054 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2055 {
  readonly storeProductCollectionWidget: Inline2055;
}

export interface Inline2056 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline2057 {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2058 {
  readonly storeProductCollectionImageTile: Inline2058;
}

export interface Inline2059 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2059;
  readonly cropBoxData?: Inline2060;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2061>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline206 {
  readonly commonProperties: Inline206;
  readonly content?: Inline207;
}

export interface Inline2060 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2061 {
  readonly colorPalette?: string;
  readonly content?: Inline2061;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2062;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2062 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2063 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2063;
  readonly cropBoxData?: Inline2064;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2065>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2064 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2065 {
  readonly colorPalette?: string;
  readonly content?: Inline2065;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2066;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2066 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2067 {
  readonly storeProductCollectionASINGrid: Inline2067;
}

export interface Inline2068 {
  readonly storeProductGridWidget: Inline2068;
}

export interface Inline2069 {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline2069;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline207 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline2070 {
  readonly storeDealsWidget: Inline2070;
}

export interface Inline2071 {
  readonly deals?: Inline2071;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2072 {
  readonly storeProductWidget: Inline2072;
}

export interface Inline2073 {
  readonly commonProperties: Inline2073;
  readonly content?: Inline2074;
}

export interface Inline2074 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline2075 {
  readonly storeShoppableImageWidget: Inline2075;
}

export interface Inline2076 {
  readonly commonProperties: Inline2076;
  readonly content?: Inline2077;
}

export interface Inline2077 {
  readonly croppedImage?: Inline2077;
  readonly points?: ReadonlyArray<Inline2079>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2080>;
}

export interface Inline2078 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2079 {
  readonly coordinates: Inline2079;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline208 {
  readonly storeImageWithTextWidget: Inline208;
}

export interface Inline2080 {
  readonly colorPalette?: string;
  readonly content?: Inline2080;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2081;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2081 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2082 {
  readonly storeCustomCodeWidget: Inline2082;
}

export interface Inline2083 {
  readonly commonProperties: Inline2083;
  readonly content?: Inline2084;
}

export interface Inline2084 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline2084;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline2085 {
  readonly storeVideoWidget: Inline2085;
}

export interface Inline2086 {
  readonly commonProperties: Inline2086;
  readonly content?: Inline2087;
}

export interface Inline2087 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline2087;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2088>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline2088 {
  readonly colorPalette?: string;
  readonly content?: Inline2088;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2089;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2089 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline209 {
  readonly commonProperties: Inline209;
  readonly content?: Inline210;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline214;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface Inline2090 {
  readonly storeGalleryWidget: Inline2090;
}

export interface Inline2091 {
  readonly metadata?: ReadonlyArray<Inline2091>;
  readonly slides?: ReadonlyArray<Inline2092>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline2092 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline2093 {
  readonly storeShopTheLookWidget: Inline2093;
}

export interface Inline2094 {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline2094;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline2095;
  readonly slides?: ReadonlyArray<Inline2096 | Inline2097>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline2095 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline2096 {
  readonly storeImageSlide: Inline2096;
}

export interface Inline2097 {
  readonly storeASINSlide: Inline2097;
}

export interface Inline2098 {
  readonly storeManuallyCuratedProductCarouselWidget: Inline2098;
}

export interface Inline2099 {
  readonly bulk: boolean;
  readonly callToActionData: Inline2099;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline2100;
  readonly slides?: ReadonlyArray<Inline2101>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface Inline210 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline210;
  readonly cropBoxData?: Inline211;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline212>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2100 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline2101 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline2102 {
  readonly storeAWLSWidget: Inline2102;
}

export interface Inline2103 {
  readonly commonProperties: Inline2103;
  readonly content?: Inline2104 | Inline2109 | Inline2114;
  readonly externalWidgetId: string;
}

export interface Inline2104 {
  readonly brandedRecipeWidget: Inline2104;
}

export interface Inline2105 {
  readonly body: string;
  readonly title: string;
}

export interface Inline2106 {
  readonly priorityAsins?: ReadonlyArray<Inline2106>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline2107 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline2107>;
}

export interface Inline2108 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline2109 {
  readonly storeProductSelectorWidget: Inline2109;
}

export interface Inline211 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2110 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline2110;
  readonly isEnabled: boolean;
}

export interface Inline2111 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline2112 {
  readonly answerList?: ReadonlyArray<Inline2112>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline2113 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline2114 {
  readonly storeVideoRevealWidget: Inline2114;
}

export interface Inline2115 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline2116 {
  readonly storeBannerWidget: Inline2116;
}

export interface Inline2117 {
  readonly banners?: Inline2117;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2118 {
  readonly storeProductCarouselWidget: Inline2118;
}

export interface Inline2119 {
  readonly callToActionData?: Inline2119;
  readonly searchContent?: Inline2120;
  readonly tag: string;
  readonly type: string;
}

export interface Inline212 {
  readonly colorPalette?: string;
  readonly content?: Inline212;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline213;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2120 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline2121 {
  readonly storeLiveVideoWidget: Inline2121;
}

export interface Inline2122 {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline2128 {
  readonly adGroupId: string;
  readonly enabledFeatures: Inline2128;
}

export interface Inline2129 {
  readonly curves?: ReadonlyArray<Inline2129>;
  readonly metrics?: ReadonlyArray<Inline2133>;
  readonly replanning?: ReadonlyArray<Inline2134>;
}

export interface Inline213 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2130 {
  readonly label: string;
  readonly value: Inline2130;
}

export interface Inline2131 {
  readonly pointType?: string;
  readonly x: Inline2131;
  readonly y?: ReadonlyArray<Inline2132>;
}

export interface Inline2132 {
  readonly label: string;
  readonly value: Inline2132;
}

export interface Inline2133 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2133;
}

export interface Inline2134 {
  readonly content: string;
  readonly curves?: ReadonlyArray<Inline2134>;
  readonly deliverInFullConfidence?: Inline2138;
  readonly metrics?: ReadonlyArray<Inline2139>;
  readonly scenarioFlight?: Inline2140;
  readonly scenarioType?: string;
  readonly selectedMetrics?: string;
  readonly title: string;
}

export interface Inline2135 {
  readonly label: string;
  readonly value: Inline2135;
}

export interface Inline2136 {
  readonly pointType?: string;
  readonly x: Inline2136;
  readonly y?: ReadonlyArray<Inline2137>;
}

export interface Inline2137 {
  readonly label: string;
  readonly value: Inline2137;
}

export interface Inline2138 {
  readonly value: string;
}

export interface Inline2139 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2139;
}

export interface Inline214 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline214;
  readonly cropBoxData?: Inline215;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline216>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2140 {
  readonly budget: Inline2140;
  readonly endDateTime: string;
  readonly flightId?: string;
  readonly startDateTime: string;
}

export interface Inline2141 {
  readonly adGroupIds?: ReadonlyArray<string>;
  readonly code: string;
  readonly message: string;
}

export interface Inline2143 {
  readonly campaignSettingsCache?: boolean;
  readonly curve?: boolean;
  readonly metrics?: Inline2143;
}

export interface Inline2145 {
  readonly errors: ReadonlyArray<Inline2145>;
  readonly index: number;
}

export interface Inline2146 {
  readonly adGroupForecast: Inline2146;
  readonly index: number;
}

export interface Inline2147 {
  readonly curves?: ReadonlyArray<Inline2147>;
  readonly metrics?: ReadonlyArray<Inline2151>;
  readonly replanning?: ReadonlyArray<Inline2152>;
}

export interface Inline2148 {
  readonly label: string;
  readonly value: Inline2148;
}

export interface Inline2149 {
  readonly pointType?: string;
  readonly x: Inline2149;
  readonly y?: ReadonlyArray<Inline2150>;
}

export interface Inline215 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2150 {
  readonly label: string;
  readonly value: Inline2150;
}

export interface Inline2151 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2151;
}

export interface Inline2152 {
  readonly content: string;
  readonly curves?: ReadonlyArray<Inline2152>;
  readonly deliverInFullConfidence?: Inline2156;
  readonly metrics?: ReadonlyArray<Inline2157>;
  readonly scenarioFlight?: Inline2158;
  readonly scenarioType?: string;
  readonly selectedMetrics?: string;
  readonly title: string;
}

export interface Inline2153 {
  readonly label: string;
  readonly value: Inline2153;
}

export interface Inline2154 {
  readonly pointType?: string;
  readonly x: Inline2154;
  readonly y?: ReadonlyArray<Inline2155>;
}

export interface Inline2155 {
  readonly label: string;
  readonly value: Inline2155;
}

export interface Inline2156 {
  readonly value: string;
}

export interface Inline2157 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2157;
}

export interface Inline2158 {
  readonly budget: Inline2158;
  readonly endDateTime: string;
  readonly flightId?: string;
  readonly startDateTime: string;
}

export interface Inline2159 {
  readonly adGroupIds?: ReadonlyArray<string>;
  readonly code: string;
  readonly message: string;
}

export interface Inline216 {
  readonly colorPalette?: string;
  readonly content?: Inline216;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline217;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2161 {
  readonly adGroupForecastDescription: Inline2161;
  readonly creationDateTime: string;
  readonly forecastDetails: Inline2162;
  readonly warnings?: ReadonlyArray<Inline2174>;
}

export interface Inline2162 {
  readonly curves?: ReadonlyArray<Inline2162>;
  readonly metrics?: ReadonlyArray<Inline2166>;
  readonly replanning?: ReadonlyArray<Inline2167>;
}

export interface Inline2163 {
  readonly label: string;
  readonly value: Inline2163;
}

export interface Inline2164 {
  readonly pointType?: string;
  readonly x: Inline2164;
  readonly y?: ReadonlyArray<Inline2165>;
}

export interface Inline2165 {
  readonly label: string;
  readonly value: Inline2165;
}

export interface Inline2166 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2166;
}

export interface Inline2167 {
  readonly content: string;
  readonly curves?: ReadonlyArray<Inline2167>;
  readonly deliverInFullConfidence?: Inline2171;
  readonly metrics?: ReadonlyArray<Inline2172>;
  readonly scenarioFlight?: Inline2173;
  readonly scenarioType?: string;
  readonly selectedMetrics?: string;
  readonly title: string;
}

export interface Inline2168 {
  readonly label: string;
  readonly value: Inline2168;
}

export interface Inline2169 {
  readonly pointType?: string;
  readonly x: Inline2169;
  readonly y?: ReadonlyArray<Inline2170>;
}

export interface Inline217 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2170 {
  readonly label: string;
  readonly value: Inline2170;
}

export interface Inline2171 {
  readonly value: string;
}

export interface Inline2172 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2172;
}

export interface Inline2173 {
  readonly budget: Inline2173;
  readonly endDateTime: string;
  readonly flightId?: string;
  readonly startDateTime: string;
}

export interface Inline2174 {
  readonly adGroupIds?: ReadonlyArray<string>;
  readonly code: string;
  readonly message: string;
}

export interface Inline2176 {
  readonly monetaryBudgetValue: Inline2176;
}

export interface Inline2178 {
  readonly monetaryBudgetValue: Inline2178;
}

export interface Inline218 {
  readonly storeProductCollectionWidget: Inline218;
}

export interface Inline2180 {
  readonly budget: Inline2180;
  readonly endDateTime: string;
  readonly flightId?: string;
  readonly startDateTime: string;
}

export interface Inline2181 {
  readonly campaignId: string;
  readonly enabledFeatures: Inline2181;
  readonly flightIds?: ReadonlyArray<string>;
  readonly replanningSettings?: Inline2182;
}

export interface Inline2182 {
  readonly flights?: ReadonlyArray<Inline2182>;
}

export interface Inline2183 {
  readonly curves?: ReadonlyArray<Inline2183>;
  readonly deliverInFullConfidence?: Inline2187;
  readonly flightId: string;
  readonly forecastEndDateTime: string;
  readonly forecastStartDateTime: string;
  readonly metrics?: ReadonlyArray<Inline2188>;
  readonly remainingBudget: Inline2189;
  readonly replanning?: ReadonlyArray<Inline2190>;
  readonly spend: number;
  readonly totalBudget: Inline2197;
  readonly warnings?: ReadonlyArray<Inline2198>;
}

export interface Inline2184 {
  readonly label: string;
  readonly value: Inline2184;
}

export interface Inline2185 {
  readonly pointType?: string;
  readonly x: Inline2185;
  readonly y?: ReadonlyArray<Inline2186>;
}

export interface Inline2186 {
  readonly label: string;
  readonly value: Inline2186;
}

export interface Inline2187 {
  readonly value: string;
}

export interface Inline2188 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2188;
}

export interface Inline2189 {
  readonly currencyCode: string;
  readonly value: number;
}

export interface Inline219 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline2190 {
  readonly content: string;
  readonly curves?: ReadonlyArray<Inline2190>;
  readonly deliverInFullConfidence?: Inline2194;
  readonly metrics?: ReadonlyArray<Inline2195>;
  readonly scenarioFlight?: Inline2196;
  readonly scenarioType?: string;
  readonly selectedMetrics?: string;
  readonly title: string;
}

export interface Inline2191 {
  readonly label: string;
  readonly value: Inline2191;
}

export interface Inline2192 {
  readonly pointType?: string;
  readonly x: Inline2192;
  readonly y?: ReadonlyArray<Inline2193>;
}

export interface Inline2193 {
  readonly label: string;
  readonly value: Inline2193;
}

export interface Inline2194 {
  readonly value: string;
}

export interface Inline2195 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2195;
}

export interface Inline2196 {
  readonly budget: Inline2196;
  readonly endDateTime: string;
  readonly flightId?: string;
  readonly startDateTime: string;
}

export interface Inline2197 {
  readonly currencyCode: string;
  readonly value: number;
}

export interface Inline2198 {
  readonly adGroupIds?: ReadonlyArray<string>;
  readonly code: string;
  readonly message: string;
}

export interface Inline220 {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2200 {
  readonly campaignSettingsCache?: boolean;
  readonly curve?: boolean;
  readonly metrics?: Inline2200;
  readonly replanning?: boolean;
}

export interface Inline2201 {
  readonly flights?: ReadonlyArray<Inline2201>;
}

export interface Inline2203 {
  readonly errors: ReadonlyArray<Inline2203>;
  readonly index: number;
}

export interface Inline2204 {
  readonly campaignForecast: Inline2204;
  readonly index: number;
}

export interface Inline2205 {
  readonly campaignId: string;
  readonly enabledFeatures: Inline2205;
  readonly flightIds?: ReadonlyArray<string>;
  readonly replanningSettings?: Inline2206;
}

export interface Inline2206 {
  readonly flights?: ReadonlyArray<Inline2206>;
}

export interface Inline2207 {
  readonly curves?: ReadonlyArray<Inline2207>;
  readonly deliverInFullConfidence?: Inline2211;
  readonly flightId: string;
  readonly forecastEndDateTime: string;
  readonly forecastStartDateTime: string;
  readonly metrics?: ReadonlyArray<Inline2212>;
  readonly remainingBudget: Inline2213;
  readonly replanning?: ReadonlyArray<Inline2214>;
  readonly spend: number;
  readonly totalBudget: Inline2221;
  readonly warnings?: ReadonlyArray<Inline2222>;
}

export interface Inline2208 {
  readonly label: string;
  readonly value: Inline2208;
}

export interface Inline2209 {
  readonly pointType?: string;
  readonly x: Inline2209;
  readonly y?: ReadonlyArray<Inline2210>;
}

export interface Inline221 {
  readonly storeProductCollectionImageTile: Inline221;
}

export interface Inline2210 {
  readonly label: string;
  readonly value: Inline2210;
}

export interface Inline2211 {
  readonly value: string;
}

export interface Inline2212 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2212;
}

export interface Inline2213 {
  readonly currencyCode: string;
  readonly value: number;
}

export interface Inline2214 {
  readonly content: string;
  readonly curves?: ReadonlyArray<Inline2214>;
  readonly deliverInFullConfidence?: Inline2218;
  readonly metrics?: ReadonlyArray<Inline2219>;
  readonly scenarioFlight?: Inline2220;
  readonly scenarioType?: string;
  readonly selectedMetrics?: string;
  readonly title: string;
}

export interface Inline2215 {
  readonly label: string;
  readonly value: Inline2215;
}

export interface Inline2216 {
  readonly pointType?: string;
  readonly x: Inline2216;
  readonly y?: ReadonlyArray<Inline2217>;
}

export interface Inline2217 {
  readonly label: string;
  readonly value: Inline2217;
}

export interface Inline2218 {
  readonly value: string;
}

export interface Inline2219 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2219;
}

export interface Inline222 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline222;
  readonly cropBoxData?: Inline223;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline224>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2220 {
  readonly budget: Inline2220;
  readonly endDateTime: string;
  readonly flightId?: string;
  readonly startDateTime: string;
}

export interface Inline2221 {
  readonly currencyCode: string;
  readonly value: number;
}

export interface Inline2222 {
  readonly adGroupIds?: ReadonlyArray<string>;
  readonly code: string;
  readonly message: string;
}

export interface Inline2224 {
  readonly availableForecastFlights?: ReadonlyArray<Inline2224>;
  readonly campaignForecastDescription: Inline2225;
  readonly creationDateTime: string;
  readonly flightForecasts?: ReadonlyArray<Inline2227>;
}

export interface Inline2225 {
  readonly campaignId: string;
  readonly enabledFeatures: Inline2225;
  readonly flightIds?: ReadonlyArray<string>;
  readonly replanningSettings?: Inline2226;
}

export interface Inline2226 {
  readonly flights?: ReadonlyArray<Inline2226>;
}

export interface Inline2227 {
  readonly curves?: ReadonlyArray<Inline2227>;
  readonly deliverInFullConfidence?: Inline2231;
  readonly flightId: string;
  readonly forecastEndDateTime: string;
  readonly forecastStartDateTime: string;
  readonly metrics?: ReadonlyArray<Inline2232>;
  readonly remainingBudget: Inline2233;
  readonly replanning?: ReadonlyArray<Inline2234>;
  readonly spend: number;
  readonly totalBudget: Inline2241;
  readonly warnings?: ReadonlyArray<Inline2242>;
}

export interface Inline2228 {
  readonly label: string;
  readonly value: Inline2228;
}

export interface Inline2229 {
  readonly pointType?: string;
  readonly x: Inline2229;
  readonly y?: ReadonlyArray<Inline2230>;
}

export interface Inline223 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2230 {
  readonly label: string;
  readonly value: Inline2230;
}

export interface Inline2231 {
  readonly value: string;
}

export interface Inline2232 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2232;
}

export interface Inline2233 {
  readonly currencyCode: string;
  readonly value: number;
}

export interface Inline2234 {
  readonly content: string;
  readonly curves?: ReadonlyArray<Inline2234>;
  readonly deliverInFullConfidence?: Inline2238;
  readonly metrics?: ReadonlyArray<Inline2239>;
  readonly scenarioFlight?: Inline2240;
  readonly scenarioType?: string;
  readonly selectedMetrics?: string;
  readonly title: string;
}

export interface Inline2235 {
  readonly label: string;
  readonly value: Inline2235;
}

export interface Inline2236 {
  readonly pointType?: string;
  readonly x: Inline2236;
  readonly y?: ReadonlyArray<Inline2237>;
}

export interface Inline2237 {
  readonly label: string;
  readonly value: Inline2237;
}

export interface Inline2238 {
  readonly value: string;
}

export interface Inline2239 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2239;
}

export interface Inline224 {
  readonly colorPalette?: string;
  readonly content?: Inline224;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline225;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2240 {
  readonly budget: Inline2240;
  readonly endDateTime: string;
  readonly flightId?: string;
  readonly startDateTime: string;
}

export interface Inline2241 {
  readonly currencyCode: string;
  readonly value: number;
}

export interface Inline2242 {
  readonly adGroupIds?: ReadonlyArray<string>;
  readonly code: string;
  readonly message: string;
}

export interface Inline2245 {
  readonly pointType?: string;
  readonly x: Inline2245;
  readonly y?: ReadonlyArray<Inline2246>;
}

export interface Inline2246 {
  readonly label: string;
  readonly value: Inline2246;
}

export interface Inline2247 {
  readonly pointType?: string;
  readonly x: Inline2247;
  readonly y?: ReadonlyArray<Inline2248>;
}

export interface Inline2248 {
  readonly label: string;
  readonly value: Inline2248;
}

export interface Inline225 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2252 {
  readonly allMetrics: boolean;
  readonly selectedMetrics?: string;
}

export interface Inline2254 {
  readonly allMetrics: boolean;
  readonly selectedMetrics?: string;
}

export interface Inline2256 {
  readonly focusPoint?: ReadonlyArray<Inline2256>;
  readonly periodicity?: string;
  readonly points?: ReadonlyArray<Inline2258>;
}

export interface Inline2257 {
  readonly label: string;
  readonly value: Inline2257;
}

export interface Inline2258 {
  readonly pointType?: string;
  readonly x: Inline2258;
  readonly y?: ReadonlyArray<Inline2259>;
}

export interface Inline2259 {
  readonly label: string;
  readonly value: Inline2259;
}

export interface Inline226 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline226;
  readonly cropBoxData?: Inline227;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline228>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2260 {
  readonly value: string;
}

export interface Inline2261 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2261;
}

export interface Inline2262 {
  readonly currencyCode: string;
  readonly value: number;
}

export interface Inline2263 {
  readonly content: string;
  readonly curves?: ReadonlyArray<Inline2263>;
  readonly deliverInFullConfidence?: Inline2267;
  readonly metrics?: ReadonlyArray<Inline2268>;
  readonly scenarioFlight?: Inline2269;
  readonly scenarioType?: string;
  readonly selectedMetrics?: string;
  readonly title: string;
}

export interface Inline2264 {
  readonly label: string;
  readonly value: Inline2264;
}

export interface Inline2265 {
  readonly pointType?: string;
  readonly x: Inline2265;
  readonly y?: ReadonlyArray<Inline2266>;
}

export interface Inline2266 {
  readonly label: string;
  readonly value: Inline2266;
}

export interface Inline2267 {
  readonly value: string;
}

export interface Inline2268 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2268;
}

export interface Inline2269 {
  readonly budget: Inline2269;
  readonly endDateTime: string;
  readonly flightId?: string;
  readonly startDateTime: string;
}

export interface Inline227 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2270 {
  readonly currencyCode: string;
  readonly value: number;
}

export interface Inline2271 {
  readonly adGroupIds?: ReadonlyArray<string>;
  readonly code: string;
  readonly message: string;
}

export interface Inline2273 {
  readonly focusPoint?: ReadonlyArray<Inline2273>;
  readonly periodicity?: string;
  readonly points?: ReadonlyArray<Inline2275>;
}

export interface Inline2274 {
  readonly label: string;
  readonly value: Inline2274;
}

export interface Inline2275 {
  readonly pointType?: string;
  readonly x: Inline2275;
  readonly y?: ReadonlyArray<Inline2276>;
}

export interface Inline2276 {
  readonly label: string;
  readonly value: Inline2276;
}

export interface Inline2277 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2277;
}

export interface Inline2278 {
  readonly content: string;
  readonly curves?: ReadonlyArray<Inline2278>;
  readonly deliverInFullConfidence?: Inline2282;
  readonly metrics?: ReadonlyArray<Inline2283>;
  readonly scenarioFlight?: Inline2284;
  readonly scenarioType?: string;
  readonly selectedMetrics?: string;
  readonly title: string;
}

export interface Inline2279 {
  readonly label: string;
  readonly value: Inline2279;
}

export interface Inline228 {
  readonly colorPalette?: string;
  readonly content?: Inline228;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline229;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2280 {
  readonly pointType?: string;
  readonly x: Inline2280;
  readonly y?: ReadonlyArray<Inline2281>;
}

export interface Inline2281 {
  readonly label: string;
  readonly value: Inline2281;
}

export interface Inline2282 {
  readonly value: string;
}

export interface Inline2283 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2283;
}

export interface Inline2284 {
  readonly budget: Inline2284;
  readonly endDateTime: string;
  readonly flightId?: string;
  readonly startDateTime: string;
}

export interface Inline2286 {
  readonly budgetValue: Inline2286;
}

export interface Inline2288 {
  readonly high: number;
  readonly low: number;
  readonly mean: number;
}

export interface Inline229 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2294 {
  readonly currencyCode: string;
  readonly value: number;
}

export interface Inline2296 {
  readonly label: string;
  readonly value: number;
}

export interface Inline2297 {
  readonly label: string;
  readonly value: Inline2297;
}

export interface Inline23 {
  readonly errors: ReadonlyArray<Inline23>;
  readonly index: number;
}

export interface Inline230 {
  readonly storeProductCollectionASINGrid: Inline230;
}

export interface Inline2300 {
  readonly focusPoint?: ReadonlyArray<Inline2300>;
  readonly periodicity?: string;
  readonly points?: ReadonlyArray<Inline2302>;
}

export interface Inline2301 {
  readonly label: string;
  readonly value: Inline2301;
}

export interface Inline2302 {
  readonly pointType?: string;
  readonly x: Inline2302;
  readonly y?: ReadonlyArray<Inline2303>;
}

export interface Inline2303 {
  readonly label: string;
  readonly value: Inline2303;
}

export interface Inline2304 {
  readonly value: string;
}

export interface Inline2305 {
  readonly metric: string;
  readonly periodicity?: string;
  readonly value: Inline2305;
}

export interface Inline2306 {
  readonly budget: Inline2306;
  readonly endDateTime: string;
  readonly flightId?: string;
  readonly startDateTime: string;
}

export interface Inline2308 {
  readonly budget: Inline2308;
  readonly endDateTime: string;
  readonly flightId?: string;
  readonly startDateTime: string;
}

export interface Inline231 {
  readonly storeProductGridWidget: Inline231;
}

export interface Inline2310 {
  readonly adGroupId: string;
  readonly enabledFeatures: Inline2310;
}

export interface Inline2312 {
  readonly campaignId: string;
  readonly enabledFeatures: Inline2312;
  readonly flightIds?: ReadonlyArray<string>;
  readonly replanningSettings?: Inline2313;
}

export interface Inline2313 {
  readonly flights?: ReadonlyArray<Inline2313>;
}

export interface Inline2318 {
  readonly high: number;
  readonly low: number;
  readonly mean: number;
}

export interface Inline232 {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline232;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline2322 {
  readonly code: string;
  readonly fieldLocation?: string;
  readonly message: string;
}

export interface Inline233 {
  readonly storeDealsWidget: Inline233;
}

export interface Inline2332 {
  readonly brandStoreEditions?: ReadonlyArray<Inline2332>;
  readonly nextToken?: string;
}

export interface Inline2334 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2335 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2336 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2338 {
  readonly brandStoreEditionPublishVersions?: ReadonlyArray<Inline2338>;
  readonly nextToken?: string;
}

export interface Inline234 {
  readonly deals?: Inline234;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2340 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2341 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2342 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2343 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2344 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2345 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2346 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2348 {
  readonly brandStorePages?: ReadonlyArray<Inline2348>;
  readonly nextToken?: string;
}

export interface Inline2349 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline2349;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline2350;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface Inline235 {
  readonly storeProductWidget: Inline235;
}

export interface Inline2350 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline2350;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline2351 {
  readonly storeTileWidget: Inline2351;
}

export interface Inline2352 {
  readonly storeImageWithTextTile: Inline2352;
}

export interface Inline2353 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2353;
  readonly cropBoxData?: Inline2354;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2355>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2354 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2355 {
  readonly colorPalette?: string;
  readonly content?: Inline2355;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2356;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2356 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2357 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2357;
  readonly cropBoxData?: Inline2358;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2359>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2358 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2359 {
  readonly colorPalette?: string;
  readonly content?: Inline2359;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2360;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline236 {
  readonly commonProperties: Inline236;
  readonly content?: Inline237;
}

export interface Inline2360 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2361 {
  readonly storeImageTile: Inline2361;
}

export interface Inline2362 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2362;
  readonly cropBoxData?: Inline2363;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2363 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2364 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2364;
  readonly cropBoxData?: Inline2365;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2365 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2366 {
  readonly storeProductTile: Inline2366;
}

export interface Inline2367 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline2368 {
  readonly storeShoppableImageTile: Inline2368;
}

export interface Inline2369 {
  readonly croppedImage?: Inline2369;
  readonly points?: ReadonlyArray<Inline2371>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2372>;
}

export interface Inline237 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline2370 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2371 {
  readonly coordinates: Inline2371;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2372 {
  readonly colorPalette?: string;
  readonly content?: Inline2372;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2373;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2373 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2374 {
  readonly storeTextTile: Inline2374;
}

export interface Inline2375 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline2376 {
  readonly storeVideoTile: Inline2376;
}

export interface Inline2377 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline2377;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2378>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline2378 {
  readonly colorPalette?: string;
  readonly content?: Inline2378;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2379;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2379 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline238 {
  readonly storeShoppableImageWidget: Inline238;
}

export interface Inline2380 {
  readonly storeEmptyTile: Inline2380;
}

export interface Inline2381 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline2382 {
  readonly storeCustomCodeTile: Inline2382;
}

export interface Inline2383 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline2383;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline2384 {
  readonly storeImageWidget: Inline2384;
}

export interface Inline2385 {
  readonly commonProperties: Inline2385;
  readonly content?: Inline2386;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline2388;
  readonly uploadMobileImage?: boolean;
}

export interface Inline2386 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2386;
  readonly cropBoxData?: Inline2387;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2387 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2388 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2388;
  readonly cropBoxData?: Inline2389;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2389 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline239 {
  readonly commonProperties: Inline239;
  readonly content?: Inline240;
}

export interface Inline2390 {
  readonly storeTextWidget: Inline2390;
}

export interface Inline2391 {
  readonly commonProperties: Inline2391;
  readonly content?: Inline2392;
}

export interface Inline2392 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline2393 {
  readonly storeImageWithTextWidget: Inline2393;
}

export interface Inline2394 {
  readonly commonProperties: Inline2394;
  readonly content?: Inline2395;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline2399;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface Inline2395 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2395;
  readonly cropBoxData?: Inline2396;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2397>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2396 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2397 {
  readonly colorPalette?: string;
  readonly content?: Inline2397;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2398;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2398 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2399 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2399;
  readonly cropBoxData?: Inline2400;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2401>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline24 {
  readonly brandStoreEditionPublishVersion: Inline24;
  readonly index: number;
}

export interface Inline240 {
  readonly croppedImage?: Inline240;
  readonly points?: ReadonlyArray<Inline242>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline243>;
}

export interface Inline2400 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2401 {
  readonly colorPalette?: string;
  readonly content?: Inline2401;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2402;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2402 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2403 {
  readonly storeProductCollectionWidget: Inline2403;
}

export interface Inline2404 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline2405 {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2406 {
  readonly storeProductCollectionImageTile: Inline2406;
}

export interface Inline2407 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2407;
  readonly cropBoxData?: Inline2408;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2409>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2408 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2409 {
  readonly colorPalette?: string;
  readonly content?: Inline2409;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2410;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline241 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2410 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2411 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2411;
  readonly cropBoxData?: Inline2412;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2413>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2412 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2413 {
  readonly colorPalette?: string;
  readonly content?: Inline2413;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2414;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2414 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2415 {
  readonly storeProductCollectionASINGrid: Inline2415;
}

export interface Inline2416 {
  readonly storeProductGridWidget: Inline2416;
}

export interface Inline2417 {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline2417;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline2418 {
  readonly storeDealsWidget: Inline2418;
}

export interface Inline2419 {
  readonly deals?: Inline2419;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline242 {
  readonly coordinates: Inline242;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2420 {
  readonly storeProductWidget: Inline2420;
}

export interface Inline2421 {
  readonly commonProperties: Inline2421;
  readonly content?: Inline2422;
}

export interface Inline2422 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline2423 {
  readonly storeShoppableImageWidget: Inline2423;
}

export interface Inline2424 {
  readonly commonProperties: Inline2424;
  readonly content?: Inline2425;
}

export interface Inline2425 {
  readonly croppedImage?: Inline2425;
  readonly points?: ReadonlyArray<Inline2427>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2428>;
}

export interface Inline2426 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2427 {
  readonly coordinates: Inline2427;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2428 {
  readonly colorPalette?: string;
  readonly content?: Inline2428;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2429;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2429 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline243 {
  readonly colorPalette?: string;
  readonly content?: Inline243;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline244;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2430 {
  readonly storeCustomCodeWidget: Inline2430;
}

export interface Inline2431 {
  readonly commonProperties: Inline2431;
  readonly content?: Inline2432;
}

export interface Inline2432 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline2432;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline2433 {
  readonly storeVideoWidget: Inline2433;
}

export interface Inline2434 {
  readonly commonProperties: Inline2434;
  readonly content?: Inline2435;
}

export interface Inline2435 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline2435;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2436>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline2436 {
  readonly colorPalette?: string;
  readonly content?: Inline2436;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2437;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2437 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2438 {
  readonly storeGalleryWidget: Inline2438;
}

export interface Inline2439 {
  readonly metadata?: ReadonlyArray<Inline2439>;
  readonly slides?: ReadonlyArray<Inline2440>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline244 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2440 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline2441 {
  readonly storeShopTheLookWidget: Inline2441;
}

export interface Inline2442 {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline2442;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline2443;
  readonly slides?: ReadonlyArray<Inline2444 | Inline2445>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline2443 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline2444 {
  readonly storeImageSlide: Inline2444;
}

export interface Inline2445 {
  readonly storeASINSlide: Inline2445;
}

export interface Inline2446 {
  readonly storeManuallyCuratedProductCarouselWidget: Inline2446;
}

export interface Inline2447 {
  readonly bulk: boolean;
  readonly callToActionData: Inline2447;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline2448;
  readonly slides?: ReadonlyArray<Inline2449>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface Inline2448 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline2449 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline245 {
  readonly storeCustomCodeWidget: Inline245;
}

export interface Inline2450 {
  readonly storeAWLSWidget: Inline2450;
}

export interface Inline2451 {
  readonly commonProperties: Inline2451;
  readonly content?: Inline2452 | Inline2457 | Inline2462;
  readonly externalWidgetId: string;
}

export interface Inline2452 {
  readonly brandedRecipeWidget: Inline2452;
}

export interface Inline2453 {
  readonly body: string;
  readonly title: string;
}

export interface Inline2454 {
  readonly priorityAsins?: ReadonlyArray<Inline2454>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline2455 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline2455>;
}

export interface Inline2456 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline2457 {
  readonly storeProductSelectorWidget: Inline2457;
}

export interface Inline2458 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline2458;
  readonly isEnabled: boolean;
}

export interface Inline2459 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline246 {
  readonly commonProperties: Inline246;
  readonly content?: Inline247;
}

export interface Inline2460 {
  readonly answerList?: ReadonlyArray<Inline2460>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline2461 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline2462 {
  readonly storeVideoRevealWidget: Inline2462;
}

export interface Inline2463 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline2464 {
  readonly storeBannerWidget: Inline2464;
}

export interface Inline2465 {
  readonly banners?: Inline2465;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2466 {
  readonly storeProductCarouselWidget: Inline2466;
}

export interface Inline2467 {
  readonly callToActionData?: Inline2467;
  readonly searchContent?: Inline2468;
  readonly tag: string;
  readonly type: string;
}

export interface Inline2468 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline2469 {
  readonly storeLiveVideoWidget: Inline2469;
}

export interface Inline247 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline247;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline2470 {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline2472 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2473 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2474 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2475 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2476 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2478 {
  readonly brandStores?: ReadonlyArray<Inline2478>;
  readonly nextToken?: string;
}

export interface Inline248 {
  readonly storeVideoWidget: Inline248;
}

export interface Inline2480 {
  readonly include: ReadonlyArray<string>;
}

export interface Inline2481 {
  readonly adGroupId: string;
  readonly enabledFeatures: Inline2481;
}

export interface Inline2484 {
  readonly adGroupId: string;
  readonly enabledFeatures: Inline2484;
}

export interface Inline2485 {
  readonly campaignId: string;
  readonly enabledFeatures: Inline2485;
  readonly flightIds?: ReadonlyArray<string>;
  readonly replanningSettings?: Inline2486;
}

export interface Inline2486 {
  readonly flights?: ReadonlyArray<Inline2486>;
}

export interface Inline2489 {
  readonly campaignId: string;
  readonly enabledFeatures: Inline2489;
  readonly flightIds?: ReadonlyArray<string>;
  readonly replanningSettings?: Inline2490;
}

export interface Inline249 {
  readonly commonProperties: Inline249;
  readonly content?: Inline250;
}

export interface Inline2490 {
  readonly flights?: ReadonlyArray<Inline2490>;
}

export interface Inline2491 {
  readonly editionId?: string;
  readonly publishState?: string;
  readonly storeEditionPublishId: string;
  readonly storeId?: string;
}

export interface Inline2494 {
  readonly editionId?: string;
  readonly publishState?: string;
  readonly storeEditionPublishId: string;
  readonly storeId?: string;
}

export interface Inline2495 {
  readonly content?: Inline2495;
  readonly editionId?: string;
  readonly pageId: string;
  readonly storeEditionPublishId?: string;
  readonly storeId?: string;
}

export interface Inline2496 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline2496;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline2497;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface Inline2497 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline2497;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline2498 {
  readonly storeTileWidget: Inline2498;
}

export interface Inline2499 {
  readonly storeImageWithTextTile: Inline2499;
}

export interface Inline250 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline250;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline251>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline2500 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2500;
  readonly cropBoxData?: Inline2501;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2502>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2501 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2502 {
  readonly colorPalette?: string;
  readonly content?: Inline2502;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2503;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2503 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2504 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2504;
  readonly cropBoxData?: Inline2505;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2506>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2505 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2506 {
  readonly colorPalette?: string;
  readonly content?: Inline2506;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2507;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2507 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2508 {
  readonly storeImageTile: Inline2508;
}

export interface Inline2509 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2509;
  readonly cropBoxData?: Inline2510;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline251 {
  readonly colorPalette?: string;
  readonly content?: Inline251;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline252;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2510 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2511 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2511;
  readonly cropBoxData?: Inline2512;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2512 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2513 {
  readonly storeProductTile: Inline2513;
}

export interface Inline2514 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline2515 {
  readonly storeShoppableImageTile: Inline2515;
}

export interface Inline2516 {
  readonly croppedImage?: Inline2516;
  readonly points?: ReadonlyArray<Inline2518>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2519>;
}

export interface Inline2517 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2518 {
  readonly coordinates: Inline2518;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2519 {
  readonly colorPalette?: string;
  readonly content?: Inline2519;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2520;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline252 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2520 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2521 {
  readonly storeTextTile: Inline2521;
}

export interface Inline2522 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline2523 {
  readonly storeVideoTile: Inline2523;
}

export interface Inline2524 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline2524;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2525>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline2525 {
  readonly colorPalette?: string;
  readonly content?: Inline2525;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2526;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2526 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2527 {
  readonly storeEmptyTile: Inline2527;
}

export interface Inline2528 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline2529 {
  readonly storeCustomCodeTile: Inline2529;
}

export interface Inline253 {
  readonly storeGalleryWidget: Inline253;
}

export interface Inline2530 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline2530;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline2531 {
  readonly storeImageWidget: Inline2531;
}

export interface Inline2532 {
  readonly commonProperties: Inline2532;
  readonly content?: Inline2533;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline2535;
  readonly uploadMobileImage?: boolean;
}

export interface Inline2533 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2533;
  readonly cropBoxData?: Inline2534;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2534 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2535 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2535;
  readonly cropBoxData?: Inline2536;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2536 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2537 {
  readonly storeTextWidget: Inline2537;
}

export interface Inline2538 {
  readonly commonProperties: Inline2538;
  readonly content?: Inline2539;
}

export interface Inline2539 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline254 {
  readonly metadata?: ReadonlyArray<Inline254>;
  readonly slides?: ReadonlyArray<Inline255>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline2540 {
  readonly storeImageWithTextWidget: Inline2540;
}

export interface Inline2541 {
  readonly commonProperties: Inline2541;
  readonly content?: Inline2542;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline2546;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface Inline2542 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2542;
  readonly cropBoxData?: Inline2543;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2544>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2543 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2544 {
  readonly colorPalette?: string;
  readonly content?: Inline2544;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2545;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2545 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2546 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2546;
  readonly cropBoxData?: Inline2547;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2548>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2547 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2548 {
  readonly colorPalette?: string;
  readonly content?: Inline2548;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2549;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2549 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline255 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline2550 {
  readonly storeProductCollectionWidget: Inline2550;
}

export interface Inline2551 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline2552 {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2553 {
  readonly storeProductCollectionImageTile: Inline2553;
}

export interface Inline2554 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2554;
  readonly cropBoxData?: Inline2555;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2556>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2555 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2556 {
  readonly colorPalette?: string;
  readonly content?: Inline2556;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2557;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2557 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2558 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2558;
  readonly cropBoxData?: Inline2559;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2560>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2559 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline256 {
  readonly storeShopTheLookWidget: Inline256;
}

export interface Inline2560 {
  readonly colorPalette?: string;
  readonly content?: Inline2560;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2561;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2561 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2562 {
  readonly storeProductCollectionASINGrid: Inline2562;
}

export interface Inline2563 {
  readonly storeProductGridWidget: Inline2563;
}

export interface Inline2564 {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline2564;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline2565 {
  readonly storeDealsWidget: Inline2565;
}

export interface Inline2566 {
  readonly deals?: Inline2566;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2567 {
  readonly storeProductWidget: Inline2567;
}

export interface Inline2568 {
  readonly commonProperties: Inline2568;
  readonly content?: Inline2569;
}

export interface Inline2569 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline257 {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline257;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline258;
  readonly slides?: ReadonlyArray<Inline259 | Inline260>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline2570 {
  readonly storeShoppableImageWidget: Inline2570;
}

export interface Inline2571 {
  readonly commonProperties: Inline2571;
  readonly content?: Inline2572;
}

export interface Inline2572 {
  readonly croppedImage?: Inline2572;
  readonly points?: ReadonlyArray<Inline2574>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2575>;
}

export interface Inline2573 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2574 {
  readonly coordinates: Inline2574;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2575 {
  readonly colorPalette?: string;
  readonly content?: Inline2575;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2576;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2576 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2577 {
  readonly storeCustomCodeWidget: Inline2577;
}

export interface Inline2578 {
  readonly commonProperties: Inline2578;
  readonly content?: Inline2579;
}

export interface Inline2579 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline2579;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline258 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline2580 {
  readonly storeVideoWidget: Inline2580;
}

export interface Inline2581 {
  readonly commonProperties: Inline2581;
  readonly content?: Inline2582;
}

export interface Inline2582 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline2582;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2583>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline2583 {
  readonly colorPalette?: string;
  readonly content?: Inline2583;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2584;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2584 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2585 {
  readonly storeGalleryWidget: Inline2585;
}

export interface Inline2586 {
  readonly metadata?: ReadonlyArray<Inline2586>;
  readonly slides?: ReadonlyArray<Inline2587>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline2587 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline2588 {
  readonly storeShopTheLookWidget: Inline2588;
}

export interface Inline2589 {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline2589;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline2590;
  readonly slides?: ReadonlyArray<Inline2591 | Inline2592>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline259 {
  readonly storeImageSlide: Inline259;
}

export interface Inline2590 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline2591 {
  readonly storeImageSlide: Inline2591;
}

export interface Inline2592 {
  readonly storeASINSlide: Inline2592;
}

export interface Inline2593 {
  readonly storeManuallyCuratedProductCarouselWidget: Inline2593;
}

export interface Inline2594 {
  readonly bulk: boolean;
  readonly callToActionData: Inline2594;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline2595;
  readonly slides?: ReadonlyArray<Inline2596>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface Inline2595 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline2596 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline2597 {
  readonly storeAWLSWidget: Inline2597;
}

export interface Inline2598 {
  readonly commonProperties: Inline2598;
  readonly content?: Inline2599 | Inline2604 | Inline2609;
  readonly externalWidgetId: string;
}

export interface Inline2599 {
  readonly brandedRecipeWidget: Inline2599;
}

export interface Inline26 {
  readonly editionId: string;
  readonly pages?: ReadonlyArray<Inline26>;
  readonly publishState: string;
  readonly publishStatus: string;
  readonly storeEditionPublishId: string;
  readonly storeId: string;
}

export interface Inline260 {
  readonly storeASINSlide: Inline260;
}

export interface Inline2600 {
  readonly body: string;
  readonly title: string;
}

export interface Inline2601 {
  readonly priorityAsins?: ReadonlyArray<Inline2601>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline2602 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline2602>;
}

export interface Inline2603 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline2604 {
  readonly storeProductSelectorWidget: Inline2604;
}

export interface Inline2605 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline2605;
  readonly isEnabled: boolean;
}

export interface Inline2606 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline2607 {
  readonly answerList?: ReadonlyArray<Inline2607>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline2608 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline2609 {
  readonly storeVideoRevealWidget: Inline2609;
}

export interface Inline261 {
  readonly storeManuallyCuratedProductCarouselWidget: Inline261;
}

export interface Inline2610 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline2611 {
  readonly storeBannerWidget: Inline2611;
}

export interface Inline2612 {
  readonly banners?: Inline2612;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2613 {
  readonly storeProductCarouselWidget: Inline2613;
}

export interface Inline2614 {
  readonly callToActionData?: Inline2614;
  readonly searchContent?: Inline2615;
  readonly tag: string;
  readonly type: string;
}

export interface Inline2615 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline2616 {
  readonly storeLiveVideoWidget: Inline2616;
}

export interface Inline2617 {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline262 {
  readonly bulk: boolean;
  readonly callToActionData: Inline262;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline263;
  readonly slides?: ReadonlyArray<Inline264>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface Inline2620 {
  readonly content?: Inline2620;
  readonly editionId?: string;
  readonly pageId: string;
  readonly storeEditionPublishId?: string;
  readonly storeId?: string;
}

export interface Inline2621 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline2621;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline2622;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface Inline2622 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline2622;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline2623 {
  readonly storeTileWidget: Inline2623;
}

export interface Inline2624 {
  readonly storeImageWithTextTile: Inline2624;
}

export interface Inline2625 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2625;
  readonly cropBoxData?: Inline2626;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2627>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2626 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2627 {
  readonly colorPalette?: string;
  readonly content?: Inline2627;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2628;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2628 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2629 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2629;
  readonly cropBoxData?: Inline2630;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2631>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline263 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline2630 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2631 {
  readonly colorPalette?: string;
  readonly content?: Inline2631;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2632;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2632 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2633 {
  readonly storeImageTile: Inline2633;
}

export interface Inline2634 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2634;
  readonly cropBoxData?: Inline2635;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2635 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2636 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2636;
  readonly cropBoxData?: Inline2637;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2637 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2638 {
  readonly storeProductTile: Inline2638;
}

export interface Inline2639 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline264 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline2640 {
  readonly storeShoppableImageTile: Inline2640;
}

export interface Inline2641 {
  readonly croppedImage?: Inline2641;
  readonly points?: ReadonlyArray<Inline2643>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2644>;
}

export interface Inline2642 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2643 {
  readonly coordinates: Inline2643;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2644 {
  readonly colorPalette?: string;
  readonly content?: Inline2644;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2645;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2645 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2646 {
  readonly storeTextTile: Inline2646;
}

export interface Inline2647 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline2648 {
  readonly storeVideoTile: Inline2648;
}

export interface Inline2649 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline2649;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2650>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline265 {
  readonly storeAWLSWidget: Inline265;
}

export interface Inline2650 {
  readonly colorPalette?: string;
  readonly content?: Inline2650;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2651;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2651 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2652 {
  readonly storeEmptyTile: Inline2652;
}

export interface Inline2653 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline2654 {
  readonly storeCustomCodeTile: Inline2654;
}

export interface Inline2655 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline2655;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline2656 {
  readonly storeImageWidget: Inline2656;
}

export interface Inline2657 {
  readonly commonProperties: Inline2657;
  readonly content?: Inline2658;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline2660;
  readonly uploadMobileImage?: boolean;
}

export interface Inline2658 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2658;
  readonly cropBoxData?: Inline2659;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2659 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline266 {
  readonly commonProperties: Inline266;
  readonly content?: Inline267 | Inline272 | Inline277;
  readonly externalWidgetId: string;
}

export interface Inline2660 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2660;
  readonly cropBoxData?: Inline2661;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2661 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2662 {
  readonly storeTextWidget: Inline2662;
}

export interface Inline2663 {
  readonly commonProperties: Inline2663;
  readonly content?: Inline2664;
}

export interface Inline2664 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline2665 {
  readonly storeImageWithTextWidget: Inline2665;
}

export interface Inline2666 {
  readonly commonProperties: Inline2666;
  readonly content?: Inline2667;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline2671;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface Inline2667 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2667;
  readonly cropBoxData?: Inline2668;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2669>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2668 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2669 {
  readonly colorPalette?: string;
  readonly content?: Inline2669;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2670;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline267 {
  readonly brandedRecipeWidget: Inline267;
}

export interface Inline2670 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2671 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2671;
  readonly cropBoxData?: Inline2672;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2673>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2672 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2673 {
  readonly colorPalette?: string;
  readonly content?: Inline2673;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2674;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2674 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2675 {
  readonly storeProductCollectionWidget: Inline2675;
}

export interface Inline2676 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline2677 {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2678 {
  readonly storeProductCollectionImageTile: Inline2678;
}

export interface Inline2679 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline2679;
  readonly cropBoxData?: Inline2680;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2681>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline268 {
  readonly body: string;
  readonly title: string;
}

export interface Inline2680 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2681 {
  readonly colorPalette?: string;
  readonly content?: Inline2681;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2682;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2682 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2683 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline2683;
  readonly cropBoxData?: Inline2684;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2685>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline2684 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2685 {
  readonly colorPalette?: string;
  readonly content?: Inline2685;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2686;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2686 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2687 {
  readonly storeProductCollectionASINGrid: Inline2687;
}

export interface Inline2688 {
  readonly storeProductGridWidget: Inline2688;
}

export interface Inline2689 {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline2689;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline269 {
  readonly priorityAsins?: ReadonlyArray<Inline269>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline2690 {
  readonly storeDealsWidget: Inline2690;
}

export interface Inline2691 {
  readonly deals?: Inline2691;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2692 {
  readonly storeProductWidget: Inline2692;
}

export interface Inline2693 {
  readonly commonProperties: Inline2693;
  readonly content?: Inline2694;
}

export interface Inline2694 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline2695 {
  readonly storeShoppableImageWidget: Inline2695;
}

export interface Inline2696 {
  readonly commonProperties: Inline2696;
  readonly content?: Inline2697;
}

export interface Inline2697 {
  readonly croppedImage?: Inline2697;
  readonly points?: ReadonlyArray<Inline2699>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2700>;
}

export interface Inline2698 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline2699 {
  readonly coordinates: Inline2699;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline270 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline270>;
}

export interface Inline2700 {
  readonly colorPalette?: string;
  readonly content?: Inline2700;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2701;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2701 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline2702 {
  readonly storeCustomCodeWidget: Inline2702;
}

export interface Inline2703 {
  readonly commonProperties: Inline2703;
  readonly content?: Inline2704;
}

export interface Inline2704 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline2704;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline2705 {
  readonly storeVideoWidget: Inline2705;
}

export interface Inline2706 {
  readonly commonProperties: Inline2706;
  readonly content?: Inline2707;
}

export interface Inline2707 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline2707;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline2708>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline2708 {
  readonly colorPalette?: string;
  readonly content?: Inline2708;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline2709;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2709 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline271 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline2710 {
  readonly storeGalleryWidget: Inline2710;
}

export interface Inline2711 {
  readonly metadata?: ReadonlyArray<Inline2711>;
  readonly slides?: ReadonlyArray<Inline2712>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline2712 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline2713 {
  readonly storeShopTheLookWidget: Inline2713;
}

export interface Inline2714 {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline2714;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline2715;
  readonly slides?: ReadonlyArray<Inline2716 | Inline2717>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline2715 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline2716 {
  readonly storeImageSlide: Inline2716;
}

export interface Inline2717 {
  readonly storeASINSlide: Inline2717;
}

export interface Inline2718 {
  readonly storeManuallyCuratedProductCarouselWidget: Inline2718;
}

export interface Inline2719 {
  readonly bulk: boolean;
  readonly callToActionData: Inline2719;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline2720;
  readonly slides?: ReadonlyArray<Inline2721>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface Inline272 {
  readonly storeProductSelectorWidget: Inline272;
}

export interface Inline2720 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline2721 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline2722 {
  readonly storeAWLSWidget: Inline2722;
}

export interface Inline2723 {
  readonly commonProperties: Inline2723;
  readonly content?: Inline2724 | Inline2729 | Inline2734;
  readonly externalWidgetId: string;
}

export interface Inline2724 {
  readonly brandedRecipeWidget: Inline2724;
}

export interface Inline2725 {
  readonly body: string;
  readonly title: string;
}

export interface Inline2726 {
  readonly priorityAsins?: ReadonlyArray<Inline2726>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline2727 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline2727>;
}

export interface Inline2728 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline2729 {
  readonly storeProductSelectorWidget: Inline2729;
}

export interface Inline273 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline273;
  readonly isEnabled: boolean;
}

export interface Inline2730 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline2730;
  readonly isEnabled: boolean;
}

export interface Inline2731 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline2732 {
  readonly answerList?: ReadonlyArray<Inline2732>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline2733 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline2734 {
  readonly storeVideoRevealWidget: Inline2734;
}

export interface Inline2735 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline2736 {
  readonly storeBannerWidget: Inline2736;
}

export interface Inline2737 {
  readonly banners?: Inline2737;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline2738 {
  readonly storeProductCarouselWidget: Inline2738;
}

export interface Inline2739 {
  readonly callToActionData?: Inline2739;
  readonly searchContent?: Inline2740;
  readonly tag: string;
  readonly type: string;
}

export interface Inline274 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline2740 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline2741 {
  readonly storeLiveVideoWidget: Inline2741;
}

export interface Inline2742 {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline275 {
  readonly answerList?: ReadonlyArray<Inline275>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline276 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline277 {
  readonly storeVideoRevealWidget: Inline277;
}

export interface Inline278 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline279 {
  readonly storeBannerWidget: Inline279;
}

export interface Inline280 {
  readonly banners?: Inline280;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline281 {
  readonly storeProductCarouselWidget: Inline281;
}

export interface Inline282 {
  readonly callToActionData?: Inline282;
  readonly searchContent?: Inline283;
  readonly tag: string;
  readonly type: string;
}

export interface Inline283 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline284 {
  readonly storeLiveVideoWidget: Inline284;
}

export interface Inline285 {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline287 {
  readonly content: Inline287;
  readonly editionId: string;
  readonly pageId: string;
  readonly pageType: string;
  readonly storeEditionPublishId?: string;
  readonly storeId: string;
}

export interface Inline288 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline288;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline289;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface Inline289 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline289;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline29 {
  readonly editionId: string;
  readonly pages?: ReadonlyArray<Inline29>;
  readonly publishState: string;
  readonly publishStatus: string;
  readonly storeEditionPublishId: string;
  readonly storeId: string;
}

export interface Inline290 {
  readonly storeTileWidget: Inline290;
}

export interface Inline291 {
  readonly storeImageWithTextTile: Inline291;
}

export interface Inline292 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline292;
  readonly cropBoxData?: Inline293;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline294>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline293 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline294 {
  readonly colorPalette?: string;
  readonly content?: Inline294;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline295;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline295 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline296 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline296;
  readonly cropBoxData?: Inline297;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline298>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline297 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline298 {
  readonly colorPalette?: string;
  readonly content?: Inline298;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline299;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline299 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline3 {
  readonly amount: number;
  readonly unit: string;
}

export interface Inline300 {
  readonly storeImageTile: Inline300;
}

export interface Inline301 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline301;
  readonly cropBoxData?: Inline302;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline302 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline303 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline303;
  readonly cropBoxData?: Inline304;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline304 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline305 {
  readonly storeProductTile: Inline305;
}

export interface Inline306 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline307 {
  readonly storeShoppableImageTile: Inline307;
}

export interface Inline308 {
  readonly croppedImage?: Inline308;
  readonly points?: ReadonlyArray<Inline310>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline311>;
}

export interface Inline309 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline310 {
  readonly coordinates: Inline310;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline311 {
  readonly colorPalette?: string;
  readonly content?: Inline311;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline312;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline312 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline313 {
  readonly storeTextTile: Inline313;
}

export interface Inline314 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline315 {
  readonly storeVideoTile: Inline315;
}

export interface Inline316 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline316;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline317>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline317 {
  readonly colorPalette?: string;
  readonly content?: Inline317;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline318;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline318 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline319 {
  readonly storeEmptyTile: Inline319;
}

export interface Inline32 {
  readonly editionId: string;
  readonly editionName: string;
  readonly storeEditionSchedule?: Inline32;
  readonly storeId: string;
}

export interface Inline320 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline321 {
  readonly storeCustomCodeTile: Inline321;
}

export interface Inline322 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline322;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline323 {
  readonly storeImageWidget: Inline323;
}

export interface Inline324 {
  readonly commonProperties: Inline324;
  readonly content?: Inline325;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline327;
  readonly uploadMobileImage?: boolean;
}

export interface Inline325 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline325;
  readonly cropBoxData?: Inline326;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline326 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline327 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline327;
  readonly cropBoxData?: Inline328;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline328 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline329 {
  readonly storeTextWidget: Inline329;
}

export interface Inline330 {
  readonly commonProperties: Inline330;
  readonly content?: Inline331;
}

export interface Inline331 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline332 {
  readonly storeImageWithTextWidget: Inline332;
}

export interface Inline333 {
  readonly commonProperties: Inline333;
  readonly content?: Inline334;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline338;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface Inline334 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline334;
  readonly cropBoxData?: Inline335;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline336>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline335 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline336 {
  readonly colorPalette?: string;
  readonly content?: Inline336;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline337;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline337 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline338 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline338;
  readonly cropBoxData?: Inline339;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline340>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline339 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline34 {
  readonly description?: string;
  readonly template: string;
  readonly title?: string;
  readonly widgets?: ReadonlyArray<Inline34 | Inline37 | Inline70 | Inline76 | Inline79 | Inline89 | Inline102 | Inline104 | Inline106 | Inline109 | Inline116 | Inline119 | Inline124 | Inline127 | Inline132 | Inline136 | Inline150 | Inline152 | Inline155>;
}

export interface Inline340 {
  readonly colorPalette?: string;
  readonly content?: Inline340;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline341;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline341 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline342 {
  readonly storeProductCollectionWidget: Inline342;
}

export interface Inline343 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline344 {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline345 {
  readonly storeProductCollectionImageTile: Inline345;
}

export interface Inline346 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline346;
  readonly cropBoxData?: Inline347;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline348>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline347 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline348 {
  readonly colorPalette?: string;
  readonly content?: Inline348;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline349;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline349 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline35 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline35;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline36;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface Inline350 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline350;
  readonly cropBoxData?: Inline351;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline352>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline351 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline352 {
  readonly colorPalette?: string;
  readonly content?: Inline352;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline353;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline353 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline354 {
  readonly storeProductCollectionASINGrid: Inline354;
}

export interface Inline355 {
  readonly storeProductGridWidget: Inline355;
}

export interface Inline356 {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline356;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline357 {
  readonly storeDealsWidget: Inline357;
}

export interface Inline358 {
  readonly deals?: Inline358;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline359 {
  readonly storeProductWidget: Inline359;
}

export interface Inline36 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline36;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline360 {
  readonly commonProperties: Inline360;
  readonly content?: Inline361;
}

export interface Inline361 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline362 {
  readonly storeShoppableImageWidget: Inline362;
}

export interface Inline363 {
  readonly commonProperties: Inline363;
  readonly content?: Inline364;
}

export interface Inline364 {
  readonly croppedImage?: Inline364;
  readonly points?: ReadonlyArray<Inline366>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline367>;
}

export interface Inline365 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline366 {
  readonly coordinates: Inline366;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline367 {
  readonly colorPalette?: string;
  readonly content?: Inline367;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline368;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline368 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline369 {
  readonly storeCustomCodeWidget: Inline369;
}

export interface Inline37 {
  readonly storeTileWidget: Inline37;
}

export interface Inline370 {
  readonly commonProperties: Inline370;
  readonly content?: Inline371;
}

export interface Inline371 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline371;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline372 {
  readonly storeVideoWidget: Inline372;
}

export interface Inline373 {
  readonly commonProperties: Inline373;
  readonly content?: Inline374;
}

export interface Inline374 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline374;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline375>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline375 {
  readonly colorPalette?: string;
  readonly content?: Inline375;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline376;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline376 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline377 {
  readonly storeGalleryWidget: Inline377;
}

export interface Inline378 {
  readonly metadata?: ReadonlyArray<Inline378>;
  readonly slides?: ReadonlyArray<Inline379>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline379 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline38 {
  readonly storeImageWithTextTile: Inline38;
}

export interface Inline380 {
  readonly storeShopTheLookWidget: Inline380;
}

export interface Inline381 {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline381;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline382;
  readonly slides?: ReadonlyArray<Inline383 | Inline384>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline382 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline383 {
  readonly storeImageSlide: Inline383;
}

export interface Inline384 {
  readonly storeASINSlide: Inline384;
}

export interface Inline385 {
  readonly storeManuallyCuratedProductCarouselWidget: Inline385;
}

export interface Inline386 {
  readonly bulk: boolean;
  readonly callToActionData: Inline386;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline387;
  readonly slides?: ReadonlyArray<Inline388>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface Inline387 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline388 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline389 {
  readonly storeAWLSWidget: Inline389;
}

export interface Inline39 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline39;
  readonly cropBoxData?: Inline40;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline41>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline390 {
  readonly commonProperties: Inline390;
  readonly content?: Inline391 | Inline396 | Inline401;
  readonly externalWidgetId: string;
}

export interface Inline391 {
  readonly brandedRecipeWidget: Inline391;
}

export interface Inline392 {
  readonly body: string;
  readonly title: string;
}

export interface Inline393 {
  readonly priorityAsins?: ReadonlyArray<Inline393>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline394 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline394>;
}

export interface Inline395 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline396 {
  readonly storeProductSelectorWidget: Inline396;
}

export interface Inline397 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline397;
  readonly isEnabled: boolean;
}

export interface Inline398 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline399 {
  readonly answerList?: ReadonlyArray<Inline399>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline40 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline400 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline401 {
  readonly storeVideoRevealWidget: Inline401;
}

export interface Inline402 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline403 {
  readonly storeBannerWidget: Inline403;
}

export interface Inline404 {
  readonly banners?: Inline404;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline405 {
  readonly storeProductCarouselWidget: Inline405;
}

export interface Inline406 {
  readonly callToActionData?: Inline406;
  readonly searchContent?: Inline407;
  readonly tag: string;
  readonly type: string;
}

export interface Inline407 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline408 {
  readonly storeLiveVideoWidget: Inline408;
}

export interface Inline409 {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline41 {
  readonly colorPalette?: string;
  readonly content?: Inline41;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline42;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline412 {
  readonly content: Inline412;
  readonly editionId: string;
  readonly pageId: string;
  readonly pageType: string;
  readonly storeEditionPublishId?: string;
  readonly storeId: string;
}

export interface Inline413 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline413;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline414;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface Inline414 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline414;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline415 {
  readonly storeTileWidget: Inline415;
}

export interface Inline416 {
  readonly storeImageWithTextTile: Inline416;
}

export interface Inline417 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline417;
  readonly cropBoxData?: Inline418;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline419>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline418 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline419 {
  readonly colorPalette?: string;
  readonly content?: Inline419;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline420;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline42 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline420 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline421 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline421;
  readonly cropBoxData?: Inline422;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline423>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline422 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline423 {
  readonly colorPalette?: string;
  readonly content?: Inline423;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline424;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline424 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline425 {
  readonly storeImageTile: Inline425;
}

export interface Inline426 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline426;
  readonly cropBoxData?: Inline427;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline427 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline428 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline428;
  readonly cropBoxData?: Inline429;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline429 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline43 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline43;
  readonly cropBoxData?: Inline44;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline45>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline430 {
  readonly storeProductTile: Inline430;
}

export interface Inline431 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline432 {
  readonly storeShoppableImageTile: Inline432;
}

export interface Inline433 {
  readonly croppedImage?: Inline433;
  readonly points?: ReadonlyArray<Inline435>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline436>;
}

export interface Inline434 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline435 {
  readonly coordinates: Inline435;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline436 {
  readonly colorPalette?: string;
  readonly content?: Inline436;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline437;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline437 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline438 {
  readonly storeTextTile: Inline438;
}

export interface Inline439 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline44 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline440 {
  readonly storeVideoTile: Inline440;
}

export interface Inline441 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline441;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline442>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline442 {
  readonly colorPalette?: string;
  readonly content?: Inline442;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline443;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline443 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline444 {
  readonly storeEmptyTile: Inline444;
}

export interface Inline445 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline446 {
  readonly storeCustomCodeTile: Inline446;
}

export interface Inline447 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline447;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline448 {
  readonly storeImageWidget: Inline448;
}

export interface Inline449 {
  readonly commonProperties: Inline449;
  readonly content?: Inline450;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline452;
  readonly uploadMobileImage?: boolean;
}

export interface Inline45 {
  readonly colorPalette?: string;
  readonly content?: Inline45;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline46;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline450 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline450;
  readonly cropBoxData?: Inline451;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline451 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline452 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline452;
  readonly cropBoxData?: Inline453;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline453 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline454 {
  readonly storeTextWidget: Inline454;
}

export interface Inline455 {
  readonly commonProperties: Inline455;
  readonly content?: Inline456;
}

export interface Inline456 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline457 {
  readonly storeImageWithTextWidget: Inline457;
}

export interface Inline458 {
  readonly commonProperties: Inline458;
  readonly content?: Inline459;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline463;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface Inline459 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline459;
  readonly cropBoxData?: Inline460;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline461>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline46 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline460 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline461 {
  readonly colorPalette?: string;
  readonly content?: Inline461;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline462;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline462 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline463 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline463;
  readonly cropBoxData?: Inline464;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline465>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline464 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline465 {
  readonly colorPalette?: string;
  readonly content?: Inline465;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline466;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline466 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline467 {
  readonly storeProductCollectionWidget: Inline467;
}

export interface Inline468 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline469 {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline47 {
  readonly storeImageTile: Inline47;
}

export interface Inline470 {
  readonly storeProductCollectionImageTile: Inline470;
}

export interface Inline471 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline471;
  readonly cropBoxData?: Inline472;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline473>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline472 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline473 {
  readonly colorPalette?: string;
  readonly content?: Inline473;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline474;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline474 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline475 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline475;
  readonly cropBoxData?: Inline476;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline477>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline476 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline477 {
  readonly colorPalette?: string;
  readonly content?: Inline477;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline478;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline478 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline479 {
  readonly storeProductCollectionASINGrid: Inline479;
}

export interface Inline48 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline48;
  readonly cropBoxData?: Inline49;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline480 {
  readonly storeProductGridWidget: Inline480;
}

export interface Inline481 {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline481;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline482 {
  readonly storeDealsWidget: Inline482;
}

export interface Inline483 {
  readonly deals?: Inline483;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline484 {
  readonly storeProductWidget: Inline484;
}

export interface Inline485 {
  readonly commonProperties: Inline485;
  readonly content?: Inline486;
}

export interface Inline486 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline487 {
  readonly storeShoppableImageWidget: Inline487;
}

export interface Inline488 {
  readonly commonProperties: Inline488;
  readonly content?: Inline489;
}

export interface Inline489 {
  readonly croppedImage?: Inline489;
  readonly points?: ReadonlyArray<Inline491>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline492>;
}

export interface Inline49 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline490 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline491 {
  readonly coordinates: Inline491;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline492 {
  readonly colorPalette?: string;
  readonly content?: Inline492;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline493;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline493 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline494 {
  readonly storeCustomCodeWidget: Inline494;
}

export interface Inline495 {
  readonly commonProperties: Inline495;
  readonly content?: Inline496;
}

export interface Inline496 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline496;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline497 {
  readonly storeVideoWidget: Inline497;
}

export interface Inline498 {
  readonly commonProperties: Inline498;
  readonly content?: Inline499;
}

export interface Inline499 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline499;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline500>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline5 {
  readonly addToCartActionParams: string;
  readonly bottleDepositFee?: string;
  readonly bottleDepositFeeString?: string;
  readonly cartQuantity: number;
  readonly catalogDisplayPricePerUnitOfMeasure?: string;
  readonly freshButton?: string;
  readonly isAlternateSearchResult: boolean;
  readonly isRequiredQuantityInCart: boolean;
  readonly isSoldByCount: boolean;
  readonly itemAvailability: string;
  readonly offerId: string;
  readonly offerName: string;
  readonly offerUnit: string;
  readonly productAsin: string;
  readonly productDetailsUrl: string;
  readonly productImageUrl: string;
  readonly promotionDisplay?: string;
  readonly promotionId?: string;
  readonly quantityInStock?: number;
  readonly requiredQuantity: number;
  readonly retailATCButton?: string;
  readonly reviewStars?: Inline5;
  readonly searchTerm?: string;
  readonly subtotalParams: string;
  readonly vuomDisplayPrice: string;
}

export interface Inline50 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline50;
  readonly cropBoxData?: Inline51;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline500 {
  readonly colorPalette?: string;
  readonly content?: Inline500;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline501;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline501 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline502 {
  readonly storeGalleryWidget: Inline502;
}

export interface Inline503 {
  readonly metadata?: ReadonlyArray<Inline503>;
  readonly slides?: ReadonlyArray<Inline504>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline504 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline505 {
  readonly storeShopTheLookWidget: Inline505;
}

export interface Inline506 {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline506;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline507;
  readonly slides?: ReadonlyArray<Inline508 | Inline509>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline507 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline508 {
  readonly storeImageSlide: Inline508;
}

export interface Inline509 {
  readonly storeASINSlide: Inline509;
}

export interface Inline51 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline510 {
  readonly storeManuallyCuratedProductCarouselWidget: Inline510;
}

export interface Inline511 {
  readonly bulk: boolean;
  readonly callToActionData: Inline511;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline512;
  readonly slides?: ReadonlyArray<Inline513>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface Inline512 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline513 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline514 {
  readonly storeAWLSWidget: Inline514;
}

export interface Inline515 {
  readonly commonProperties: Inline515;
  readonly content?: Inline516 | Inline521 | Inline526;
  readonly externalWidgetId: string;
}

export interface Inline516 {
  readonly brandedRecipeWidget: Inline516;
}

export interface Inline517 {
  readonly body: string;
  readonly title: string;
}

export interface Inline518 {
  readonly priorityAsins?: ReadonlyArray<Inline518>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline519 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline519>;
}

export interface Inline52 {
  readonly storeProductTile: Inline52;
}

export interface Inline520 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline521 {
  readonly storeProductSelectorWidget: Inline521;
}

export interface Inline522 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline522;
  readonly isEnabled: boolean;
}

export interface Inline523 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline524 {
  readonly answerList?: ReadonlyArray<Inline524>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline525 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline526 {
  readonly storeVideoRevealWidget: Inline526;
}

export interface Inline527 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline528 {
  readonly storeBannerWidget: Inline528;
}

export interface Inline529 {
  readonly banners?: Inline529;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline53 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline530 {
  readonly storeProductCarouselWidget: Inline530;
}

export interface Inline531 {
  readonly callToActionData?: Inline531;
  readonly searchContent?: Inline532;
  readonly tag: string;
  readonly type: string;
}

export interface Inline532 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline533 {
  readonly storeLiveVideoWidget: Inline533;
}

export interface Inline534 {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline536 {
  readonly description?: string;
  readonly template?: string;
  readonly title?: string;
  readonly widgets?: ReadonlyArray<Inline536 | Inline539 | Inline572 | Inline578 | Inline581 | Inline591 | Inline604 | Inline606 | Inline608 | Inline611 | Inline618 | Inline621 | Inline626 | Inline629 | Inline634 | Inline638 | Inline652 | Inline654 | Inline657>;
}

export interface Inline537 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline537;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline538;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface Inline538 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline538;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline539 {
  readonly storeTileWidget: Inline539;
}

export interface Inline54 {
  readonly storeShoppableImageTile: Inline54;
}

export interface Inline540 {
  readonly storeImageWithTextTile: Inline540;
}

export interface Inline541 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline541;
  readonly cropBoxData?: Inline542;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline543>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline542 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline543 {
  readonly colorPalette?: string;
  readonly content?: Inline543;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline544;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline544 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline545 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline545;
  readonly cropBoxData?: Inline546;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline547>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline546 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline547 {
  readonly colorPalette?: string;
  readonly content?: Inline547;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline548;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline548 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline549 {
  readonly storeImageTile: Inline549;
}

export interface Inline55 {
  readonly croppedImage?: Inline55;
  readonly points?: ReadonlyArray<Inline57>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline58>;
}

export interface Inline550 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline550;
  readonly cropBoxData?: Inline551;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline551 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline552 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline552;
  readonly cropBoxData?: Inline553;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline553 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline554 {
  readonly storeProductTile: Inline554;
}

export interface Inline555 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline556 {
  readonly storeShoppableImageTile: Inline556;
}

export interface Inline557 {
  readonly croppedImage?: Inline557;
  readonly points?: ReadonlyArray<Inline559>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline560>;
}

export interface Inline558 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline559 {
  readonly coordinates: Inline559;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline56 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline560 {
  readonly colorPalette?: string;
  readonly content?: Inline560;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline561;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline561 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline562 {
  readonly storeTextTile: Inline562;
}

export interface Inline563 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline564 {
  readonly storeVideoTile: Inline564;
}

export interface Inline565 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline565;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline566>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline566 {
  readonly colorPalette?: string;
  readonly content?: Inline566;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline567;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline567 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline568 {
  readonly storeEmptyTile: Inline568;
}

export interface Inline569 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline57 {
  readonly coordinates: Inline57;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline570 {
  readonly storeCustomCodeTile: Inline570;
}

export interface Inline571 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline571;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline572 {
  readonly storeImageWidget: Inline572;
}

export interface Inline573 {
  readonly commonProperties: Inline573;
  readonly content?: Inline574;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline576;
  readonly uploadMobileImage?: boolean;
}

export interface Inline574 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline574;
  readonly cropBoxData?: Inline575;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline575 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline576 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline576;
  readonly cropBoxData?: Inline577;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline577 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline578 {
  readonly storeTextWidget: Inline578;
}

export interface Inline579 {
  readonly commonProperties: Inline579;
  readonly content?: Inline580;
}

export interface Inline58 {
  readonly colorPalette?: string;
  readonly content?: Inline58;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline59;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline580 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline581 {
  readonly storeImageWithTextWidget: Inline581;
}

export interface Inline582 {
  readonly commonProperties: Inline582;
  readonly content?: Inline583;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline587;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface Inline583 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline583;
  readonly cropBoxData?: Inline584;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline585>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline584 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline585 {
  readonly colorPalette?: string;
  readonly content?: Inline585;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline586;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline586 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline587 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline587;
  readonly cropBoxData?: Inline588;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline589>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline588 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline589 {
  readonly colorPalette?: string;
  readonly content?: Inline589;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline590;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline59 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline590 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline591 {
  readonly storeProductCollectionWidget: Inline591;
}

export interface Inline592 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline593 {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline594 {
  readonly storeProductCollectionImageTile: Inline594;
}

export interface Inline595 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline595;
  readonly cropBoxData?: Inline596;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline597>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline596 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline597 {
  readonly colorPalette?: string;
  readonly content?: Inline597;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline598;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline598 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline599 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline599;
  readonly cropBoxData?: Inline600;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline601>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline60 {
  readonly storeTextTile: Inline60;
}

export interface Inline600 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline601 {
  readonly colorPalette?: string;
  readonly content?: Inline601;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline602;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline602 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline603 {
  readonly storeProductCollectionASINGrid: Inline603;
}

export interface Inline604 {
  readonly storeProductGridWidget: Inline604;
}

export interface Inline605 {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline605;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline606 {
  readonly storeDealsWidget: Inline606;
}

export interface Inline607 {
  readonly deals?: Inline607;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline608 {
  readonly storeProductWidget: Inline608;
}

export interface Inline609 {
  readonly commonProperties: Inline609;
  readonly content?: Inline610;
}

export interface Inline61 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline610 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline611 {
  readonly storeShoppableImageWidget: Inline611;
}

export interface Inline612 {
  readonly commonProperties: Inline612;
  readonly content?: Inline613;
}

export interface Inline613 {
  readonly croppedImage?: Inline613;
  readonly points?: ReadonlyArray<Inline615>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline616>;
}

export interface Inline614 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline615 {
  readonly coordinates: Inline615;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline616 {
  readonly colorPalette?: string;
  readonly content?: Inline616;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline617;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline617 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline618 {
  readonly storeCustomCodeWidget: Inline618;
}

export interface Inline619 {
  readonly commonProperties: Inline619;
  readonly content?: Inline620;
}

export interface Inline62 {
  readonly storeVideoTile: Inline62;
}

export interface Inline620 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline620;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline621 {
  readonly storeVideoWidget: Inline621;
}

export interface Inline622 {
  readonly commonProperties: Inline622;
  readonly content?: Inline623;
}

export interface Inline623 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline623;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline624>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline624 {
  readonly colorPalette?: string;
  readonly content?: Inline624;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline625;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline625 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline626 {
  readonly storeGalleryWidget: Inline626;
}

export interface Inline627 {
  readonly metadata?: ReadonlyArray<Inline627>;
  readonly slides?: ReadonlyArray<Inline628>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline628 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline629 {
  readonly storeShopTheLookWidget: Inline629;
}

export interface Inline63 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline63;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline64>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline630 {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline630;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline631;
  readonly slides?: ReadonlyArray<Inline632 | Inline633>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline631 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline632 {
  readonly storeImageSlide: Inline632;
}

export interface Inline633 {
  readonly storeASINSlide: Inline633;
}

export interface Inline634 {
  readonly storeManuallyCuratedProductCarouselWidget: Inline634;
}

export interface Inline635 {
  readonly bulk: boolean;
  readonly callToActionData: Inline635;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline636;
  readonly slides?: ReadonlyArray<Inline637>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface Inline636 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline637 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline638 {
  readonly storeAWLSWidget: Inline638;
}

export interface Inline639 {
  readonly commonProperties: Inline639;
  readonly content?: Inline640 | Inline645 | Inline650;
  readonly externalWidgetId: string;
}

export interface Inline64 {
  readonly colorPalette?: string;
  readonly content?: Inline64;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline65;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline640 {
  readonly brandedRecipeWidget: Inline640;
}

export interface Inline641 {
  readonly body: string;
  readonly title: string;
}

export interface Inline642 {
  readonly priorityAsins?: ReadonlyArray<Inline642>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline643 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline643>;
}

export interface Inline644 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline645 {
  readonly storeProductSelectorWidget: Inline645;
}

export interface Inline646 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline646;
  readonly isEnabled: boolean;
}

export interface Inline647 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline648 {
  readonly answerList?: ReadonlyArray<Inline648>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline649 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline65 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline650 {
  readonly storeVideoRevealWidget: Inline650;
}

export interface Inline651 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline652 {
  readonly storeBannerWidget: Inline652;
}

export interface Inline653 {
  readonly banners?: Inline653;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline654 {
  readonly storeProductCarouselWidget: Inline654;
}

export interface Inline655 {
  readonly callToActionData?: Inline655;
  readonly searchContent?: Inline656;
  readonly tag: string;
  readonly type: string;
}

export interface Inline656 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline657 {
  readonly storeLiveVideoWidget: Inline657;
}

export interface Inline658 {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline66 {
  readonly storeEmptyTile: Inline66;
}

export interface Inline661 {
  readonly pageInfos?: ReadonlyArray<Inline661>;
  readonly storeId: string;
  readonly storeName?: string;
}

export interface Inline668 {
  readonly amount: number;
  readonly unit: string;
}

export interface Inline67 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline670 {
  readonly addToCartActionParams: string;
  readonly bottleDepositFee?: string;
  readonly bottleDepositFeeString?: string;
  readonly cartQuantity: number;
  readonly catalogDisplayPricePerUnitOfMeasure?: string;
  readonly freshButton?: string;
  readonly isAlternateSearchResult: boolean;
  readonly isRequiredQuantityInCart: boolean;
  readonly isSoldByCount: boolean;
  readonly itemAvailability: string;
  readonly offerId: string;
  readonly offerName: string;
  readonly offerUnit: string;
  readonly productAsin: string;
  readonly productDetailsUrl: string;
  readonly productImageUrl: string;
  readonly promotionDisplay?: string;
  readonly promotionId?: string;
  readonly quantityInStock?: number;
  readonly requiredQuantity: number;
  readonly retailATCButton?: string;
  readonly reviewStars?: Inline670;
  readonly searchTerm?: string;
  readonly subtotalParams: string;
  readonly vuomDisplayPrice: string;
}

export interface Inline674 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline675 {
  readonly body: string;
  readonly title: string;
}

export interface Inline676 {
  readonly priorityAsins?: ReadonlyArray<Inline676>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline677 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline677>;
}

export interface Inline678 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline68 {
  readonly storeCustomCodeTile: Inline68;
}

export interface Inline684 {
  readonly hasHalfStar: boolean;
  readonly reviewCount: number;
  readonly wholeStars: number;
}

export interface Inline688 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline689 {
  readonly brandedRecipeWidget: Inline689;
}

export interface Inline69 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline69;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline690 {
  readonly body: string;
  readonly title: string;
}

export interface Inline691 {
  readonly priorityAsins?: ReadonlyArray<Inline691>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline692 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline692>;
}

export interface Inline693 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline694 {
  readonly storeProductSelectorWidget: Inline694;
}

export interface Inline695 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline695;
  readonly isEnabled: boolean;
}

export interface Inline696 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline697 {
  readonly answerList?: ReadonlyArray<Inline697>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline698 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline699 {
  readonly storeVideoRevealWidget: Inline699;
}

export interface Inline70 {
  readonly storeImageWidget: Inline70;
}

export interface Inline700 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline702 {
  readonly brandedRecipeWidget: Inline702;
}

export interface Inline703 {
  readonly body: string;
  readonly title: string;
}

export interface Inline704 {
  readonly priorityAsins?: ReadonlyArray<Inline704>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline705 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline705>;
}

export interface Inline706 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline707 {
  readonly storeProductSelectorWidget: Inline707;
}

export interface Inline708 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline708;
  readonly isEnabled: boolean;
}

export interface Inline709 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline71 {
  readonly commonProperties: Inline71;
  readonly content?: Inline72;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline74;
  readonly uploadMobileImage?: boolean;
}

export interface Inline710 {
  readonly answerList?: ReadonlyArray<Inline710>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline711 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline712 {
  readonly storeVideoRevealWidget: Inline712;
}

export interface Inline713 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline715 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline716 {
  readonly commonProperties: Inline716;
  readonly content?: Inline717 | Inline722 | Inline727;
  readonly externalWidgetId: string;
}

export interface Inline717 {
  readonly brandedRecipeWidget: Inline717;
}

export interface Inline718 {
  readonly body: string;
  readonly title: string;
}

export interface Inline719 {
  readonly priorityAsins?: ReadonlyArray<Inline719>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline72 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline72;
  readonly cropBoxData?: Inline73;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline720 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline720>;
}

export interface Inline721 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline722 {
  readonly storeProductSelectorWidget: Inline722;
}

export interface Inline723 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline723;
  readonly isEnabled: boolean;
}

export interface Inline724 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline725 {
  readonly answerList?: ReadonlyArray<Inline725>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline726 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline727 {
  readonly storeVideoRevealWidget: Inline727;
}

export interface Inline728 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline73 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline730 {
  readonly blackLivesMatter: boolean;
  readonly stopAsianHate: boolean;
}

export interface Inline733 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline734 {
  readonly banners?: Inline734;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline739 {
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsin?: string;
  readonly text?: string;
}

export interface Inline74 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline74;
  readonly cropBoxData?: Inline75;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline740 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline741 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline745 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline746 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline748 {
  readonly category?: string;
  readonly item?: string;
  readonly type?: string;
}

export interface Inline75 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline750 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline751 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline751;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline753 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline754 {
  readonly commonProperties: Inline754;
  readonly content?: Inline755;
}

export interface Inline755 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline755;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline758 {
  readonly node?: string;
}

export interface Inline76 {
  readonly storeTextWidget: Inline76;
}

export interface Inline760 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline761 {
  readonly deals?: Inline761;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline763 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline764 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline767 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly filename?: string;
  readonly imageKey?: string;
  readonly imageUrl?: string;
  readonly type?: string;
  readonly url?: string;
}

export interface Inline768 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline77 {
  readonly commonProperties: Inline77;
  readonly content?: Inline78;
}

export interface Inline771 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline772 {
  readonly metadata?: ReadonlyArray<Inline772>;
  readonly slides?: ReadonlyArray<Inline773>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline773 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline775 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline776 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline776;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline778 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline779 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline779;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline780;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface Inline78 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline780 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline780;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline782 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline783 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline785 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline787 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline788 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline788;
  readonly cropBoxData?: Inline789;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline789 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline79 {
  readonly storeImageWithTextWidget: Inline79;
}

export interface Inline790 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline790;
  readonly cropBoxData?: Inline791;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline791 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline793 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline794 {
  readonly commonProperties: Inline794;
  readonly content?: Inline795;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline797;
  readonly uploadMobileImage?: boolean;
}

export interface Inline795 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline795;
  readonly cropBoxData?: Inline796;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline796 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline797 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline797;
  readonly cropBoxData?: Inline798;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline798 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline80 {
  readonly commonProperties: Inline80;
  readonly content?: Inline81;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline85;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface Inline800 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline801 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline802 {
  readonly colorPalette?: string;
  readonly content?: Inline802;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline803;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline803 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline805 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline806 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline806;
  readonly cropBoxData?: Inline807;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline808>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline807 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline808 {
  readonly colorPalette?: string;
  readonly content?: Inline808;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline809;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline809 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline81 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline81;
  readonly cropBoxData?: Inline82;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline83>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline810 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline810;
  readonly cropBoxData?: Inline811;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline812>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline811 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline812 {
  readonly colorPalette?: string;
  readonly content?: Inline812;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline813;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline813 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline815 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline816 {
  readonly commonProperties: Inline816;
  readonly content?: Inline817;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline821;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface Inline817 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline817;
  readonly cropBoxData?: Inline818;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline819>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline818 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline819 {
  readonly colorPalette?: string;
  readonly content?: Inline819;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline820;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline82 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline820 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline821 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline821;
  readonly cropBoxData?: Inline822;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline823>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline822 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline823 {
  readonly colorPalette?: string;
  readonly content?: Inline823;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline824;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline824 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline827 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline828 {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline83 {
  readonly colorPalette?: string;
  readonly content?: Inline83;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline84;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline830 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline831 {
  readonly bulk: boolean;
  readonly callToActionData: Inline831;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline832;
  readonly slides?: ReadonlyArray<Inline833>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface Inline832 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline833 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline836 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline838 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline839 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline84 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline841 {
  readonly canvasHeight?: number;
  readonly height?: number;
  readonly left?: number;
  readonly naturalHeight?: number;
  readonly naturalWidth?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline842 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline843 {
  readonly colorPalette?: string;
  readonly content?: Inline843;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline844;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline844 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline846 {
  readonly storeHeroImageWidget: Inline846;
}

export interface Inline847 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline847;
  readonly description?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl: string;
  readonly imageWidth?: number;
  readonly mobileContent?: Inline848;
  readonly tag?: string;
  readonly textOverlay?: string;
}

export interface Inline848 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly canvasData?: Inline848;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly version?: string;
}

export interface Inline849 {
  readonly storeTileWidget: Inline849;
}

export interface Inline85 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline85;
  readonly cropBoxData?: Inline86;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline87>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline850 {
  readonly storeImageWithTextTile: Inline850;
}

export interface Inline851 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline851;
  readonly cropBoxData?: Inline852;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline853>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline852 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline853 {
  readonly colorPalette?: string;
  readonly content?: Inline853;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline854;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline854 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline855 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline855;
  readonly cropBoxData?: Inline856;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline857>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline856 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline857 {
  readonly colorPalette?: string;
  readonly content?: Inline857;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline858;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline858 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline859 {
  readonly storeImageTile: Inline859;
}

export interface Inline86 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline860 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline860;
  readonly cropBoxData?: Inline861;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline861 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline862 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline862;
  readonly cropBoxData?: Inline863;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline863 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline864 {
  readonly storeProductTile: Inline864;
}

export interface Inline865 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline866 {
  readonly storeShoppableImageTile: Inline866;
}

export interface Inline867 {
  readonly croppedImage?: Inline867;
  readonly points?: ReadonlyArray<Inline869>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline870>;
}

export interface Inline868 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline869 {
  readonly coordinates: Inline869;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline87 {
  readonly colorPalette?: string;
  readonly content?: Inline87;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline88;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline870 {
  readonly colorPalette?: string;
  readonly content?: Inline870;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline871;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline871 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline872 {
  readonly storeTextTile: Inline872;
}

export interface Inline873 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline874 {
  readonly storeVideoTile: Inline874;
}

export interface Inline875 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline875;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline876>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline876 {
  readonly colorPalette?: string;
  readonly content?: Inline876;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline877;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline877 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline878 {
  readonly storeEmptyTile: Inline878;
}

export interface Inline879 {
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline88 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline880 {
  readonly storeCustomCodeTile: Inline880;
}

export interface Inline881 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline881;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline882 {
  readonly storeImageWidget: Inline882;
}

export interface Inline883 {
  readonly commonProperties: Inline883;
  readonly content?: Inline884;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline886;
  readonly uploadMobileImage?: boolean;
}

export interface Inline884 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline884;
  readonly cropBoxData?: Inline885;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline885 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline886 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline886;
  readonly cropBoxData?: Inline887;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly tileLayers?: ReadonlyArray<string>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline887 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline888 {
  readonly storeTextWidget: Inline888;
}

export interface Inline889 {
  readonly commonProperties: Inline889;
  readonly content?: Inline890;
}

export interface Inline89 {
  readonly storeProductCollectionWidget: Inline89;
}

export interface Inline890 {
  readonly bold: boolean;
  readonly bondCustomerServiceLink?: boolean;
  readonly callToAction?: string;
  readonly customUrl?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text: string;
  readonly textAlign?: string;
  readonly title: string;
  readonly uppercase: boolean;
}

export interface Inline891 {
  readonly storeImageWithTextWidget: Inline891;
}

export interface Inline892 {
  readonly commonProperties: Inline892;
  readonly content?: Inline893;
  readonly flexHeight?: boolean;
  readonly mobileContent?: Inline897;
  readonly uploadMobileImage?: boolean;
  readonly variation: string;
}

export interface Inline893 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline893;
  readonly cropBoxData?: Inline894;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline895>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline894 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline895 {
  readonly colorPalette?: string;
  readonly content?: Inline895;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline896;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline896 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline897 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline897;
  readonly cropBoxData?: Inline898;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline899>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline898 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline899 {
  readonly colorPalette?: string;
  readonly content?: Inline899;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline900;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline9 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline90 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline900 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline901 {
  readonly storeProductCollectionWidget: Inline901;
}

export interface Inline902 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline903 {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline904 {
  readonly storeProductCollectionImageTile: Inline904;
}

export interface Inline905 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline905;
  readonly cropBoxData?: Inline906;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline907>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline906 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline907 {
  readonly colorPalette?: string;
  readonly content?: Inline907;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline908;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline908 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline909 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline909;
  readonly cropBoxData?: Inline910;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline911>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline91 {
  readonly collectionTags?: string;
  readonly productGridConversionTimestamp?: number;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline910 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline911 {
  readonly colorPalette?: string;
  readonly content?: Inline911;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline912;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline912 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline913 {
  readonly storeProductCollectionASINGrid: Inline913;
}

export interface Inline914 {
  readonly storeProductGridWidget: Inline914;
}

export interface Inline915 {
  readonly bulk?: boolean;
  readonly description?: string;
  readonly displayProductGridHeader?: boolean;
  readonly excludedProductAsins?: ReadonlyArray<string>;
  readonly includeOutOfStock?: boolean;
  readonly isAutomatedProductGrid?: boolean;
  readonly keyword?: string;
  readonly pinnedProductAsins?: ReadonlyArray<string>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly productType?: string;
  readonly search?: Inline915;
  readonly showOnlyMarkdown?: boolean;
  readonly sort?: string;
  readonly tag?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline916 {
  readonly storeDealsWidget: Inline916;
}

export interface Inline917 {
  readonly deals?: Inline917;
  readonly dealsMode?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline918 {
  readonly storeProductWidget: Inline918;
}

export interface Inline919 {
  readonly commonProperties: Inline919;
  readonly content?: Inline920;
}

export interface Inline92 {
  readonly storeProductCollectionImageTile: Inline92;
}

export interface Inline920 {
  readonly bleedImage?: string;
  readonly displayOutOfStockASIN?: boolean;
  readonly layout?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly text?: string;
  readonly textAlign?: string;
  readonly title?: string;
}

export interface Inline921 {
  readonly storeShoppableImageWidget: Inline921;
}

export interface Inline922 {
  readonly commonProperties: Inline922;
  readonly content?: Inline923;
}

export interface Inline923 {
  readonly croppedImage?: Inline923;
  readonly points?: ReadonlyArray<Inline925>;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline926>;
}

export interface Inline924 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline925 {
  readonly coordinates: Inline925;
  readonly productAsins?: ReadonlyArray<string>;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline926 {
  readonly colorPalette?: string;
  readonly content?: Inline926;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline927;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline927 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline928 {
  readonly storeCustomCodeWidget: Inline928;
}

export interface Inline929 {
  readonly commonProperties: Inline929;
  readonly content?: Inline930;
}

export interface Inline93 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline93;
  readonly cropBoxData?: Inline94;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline95>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline930 {
  readonly autoDimension?: boolean;
  readonly availableProductAsins?: ReadonlyArray<string>;
  readonly cti?: Inline930;
  readonly embedCode?: string;
  readonly integrity?: string;
  readonly widgetName?: string;
  readonly widgetTag?: string;
}

export interface Inline931 {
  readonly storeVideoWidget: Inline931;
}

export interface Inline932 {
  readonly commonProperties: Inline932;
  readonly content?: Inline933;
}

export interface Inline933 {
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly autoPlay?: boolean;
  readonly callToAction?: string;
  readonly canvasData?: Inline933;
  readonly customUrl?: string;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly mute?: boolean;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly resourceId?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline934>;
  readonly title?: string;
  readonly videoAssetId?: string;
  readonly videoAssetTags?: string;
  readonly videoDescription?: string;
  readonly videoKey?: string;
  readonly videoName?: string;
  readonly videoSize?: number;
  readonly videoUrl?: string;
}

export interface Inline934 {
  readonly colorPalette?: string;
  readonly content?: Inline934;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline935;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline935 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline936 {
  readonly storeGalleryWidget: Inline936;
}

export interface Inline937 {
  readonly metadata?: ReadonlyArray<Inline937>;
  readonly slides?: ReadonlyArray<Inline938>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline938 {
  readonly alt?: string;
  readonly assetId?: string;
  readonly imageKey?: string;
  readonly type?: string;
}

export interface Inline939 {
  readonly storeShopTheLookWidget: Inline939;
}

export interface Inline94 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline940 {
  readonly bulk?: boolean;
  readonly callToActionData?: Inline940;
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline941;
  readonly slides?: ReadonlyArray<Inline942 | Inline943>;
  readonly tag?: string;
  readonly text?: string;
  readonly title?: string;
  readonly type?: string;
}

export interface Inline941 {
  readonly includeOutOfStock?: boolean;
  readonly keyword?: string;
  readonly node?: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline942 {
  readonly storeImageSlide: Inline942;
}

export interface Inline943 {
  readonly storeASINSlide: Inline943;
}

export interface Inline944 {
  readonly storeManuallyCuratedProductCarouselWidget: Inline944;
}

export interface Inline945 {
  readonly bulk: boolean;
  readonly callToActionData: Inline945;
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly search?: Inline946;
  readonly slides?: ReadonlyArray<Inline947>;
  readonly tag: string;
  readonly text: string;
  readonly title: string;
  readonly type: string;
}

export interface Inline946 {
  readonly includeOutOfStock: boolean;
  readonly keyword: string;
  readonly node: string;
  readonly productAsins?: ReadonlyArray<string>;
}

export interface Inline947 {
  readonly productAsin: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline948 {
  readonly storeAWLSWidget: Inline948;
}

export interface Inline949 {
  readonly commonProperties: Inline949;
  readonly content?: Inline950 | Inline955 | Inline960;
  readonly externalWidgetId: string;
}

export interface Inline95 {
  readonly colorPalette?: string;
  readonly content?: Inline95;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline96;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline950 {
  readonly brandedRecipeWidget: Inline950;
}

export interface Inline951 {
  readonly body: string;
  readonly title: string;
}

export interface Inline952 {
  readonly priorityAsins?: ReadonlyArray<Inline952>;
  readonly quantity?: number;
  readonly searchText?: string;
  readonly translatedUnit?: string;
}

export interface Inline953 {
  readonly asinOverrides?: ReadonlyArray<string>;
  readonly brand: string;
  readonly displayText: string;
  readonly isAsinRestricted: boolean;
  readonly isBrandRestricted: boolean;
  readonly isExclusiveOverride: boolean;
  readonly name: string;
  readonly quantityList?: ReadonlyArray<Inline953>;
}

export interface Inline954 {
  readonly altText?: string;
  readonly assetLibraryId?: string;
  readonly mediaUrl?: string;
}

export interface Inline955 {
  readonly storeProductSelectorWidget: Inline955;
}

export interface Inline956 {
  readonly buttonText: string;
  readonly description: string;
  readonly heading: string;
  readonly headline?: string;
  readonly imageOptions: Inline956;
  readonly isEnabled: boolean;
}

export interface Inline957 {
  readonly desktopLayout: string;
  readonly mobileLayout: string;
}

export interface Inline958 {
  readonly answerList?: ReadonlyArray<Inline958>;
  readonly areImagesEnabled?: boolean;
  readonly description?: string;
  readonly hasImage?: boolean;
  readonly tag: string;
  readonly text?: string;
}

export interface Inline959 {
  readonly buttonText?: string;
  readonly description?: string;
  readonly disclaimer: string;
  readonly headline: string;
  readonly storeUrl?: string;
}

export interface Inline96 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline960 {
  readonly storeVideoRevealWidget: Inline960;
}

export interface Inline961 {
  readonly assetId: string;
  readonly url: string;
}

export interface Inline962 {
  readonly storeBannerWidget: Inline962;
}

export interface Inline963 {
  readonly banners?: Inline963;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline964 {
  readonly storeProductCarouselWidget: Inline964;
}

export interface Inline965 {
  readonly callToActionData?: Inline965;
  readonly searchContent?: Inline966;
  readonly tag: string;
  readonly type: string;
}

export interface Inline966 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline967 {
  readonly storeLiveVideoWidget: Inline967;
}

export interface Inline968 {
  readonly channel?: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline97 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline97;
  readonly cropBoxData?: Inline98;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline99>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline970 {
  readonly customUrl?: string;
  readonly productAsin?: string;
  readonly text?: string;
}

export interface Inline971 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline974 {
  readonly sectionType: string;
  readonly widgetTag: string;
  readonly widgetType: string;
}

export interface Inline975 {
  readonly callToActionData?: Inline975;
  readonly searchContent?: Inline976;
  readonly tag: string;
  readonly type: string;
}

export interface Inline976 {
  readonly node?: string;
  readonly type?: string;
}

export interface Inline98 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline980 {
  readonly size: string;
  readonly tag: string;
  readonly type: string;
}

export interface Inline981 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline981;
  readonly cropBoxData?: Inline982;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline983>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline982 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline983 {
  readonly colorPalette?: string;
  readonly content?: Inline983;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline984;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline984 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline985 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline985;
  readonly cropBoxData?: Inline986;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline987>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline986 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline987 {
  readonly colorPalette?: string;
  readonly content?: Inline987;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline988;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline988 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline99 {
  readonly colorPalette?: string;
  readonly content?: Inline99;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline100;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline990 {
  readonly storeProductCollectionImageTile: Inline990;
}

export interface Inline991 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly callToAction?: string;
  readonly canvasData?: Inline991;
  readonly cropBoxData?: Inline992;
  readonly customUrl?: string;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly pageId?: string;
  readonly productAsins?: ReadonlyArray<string>;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline993>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline992 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline993 {
  readonly colorPalette?: string;
  readonly content?: Inline993;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline994;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline994 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline995 {
  readonly altText?: string;
  readonly assetId?: string;
  readonly assetTags?: string;
  readonly bleedImage?: string;
  readonly canvasData?: Inline995;
  readonly cropBoxData?: Inline996;
  readonly hideTitle?: boolean;
  readonly imageHeight?: number;
  readonly imageKey?: string;
  readonly imageOffsetLeft?: number;
  readonly imageOffsetTop?: number;
  readonly imageUrl?: string;
  readonly imageWidth?: number;
  readonly isAiGen?: boolean;
  readonly layout?: string;
  readonly renderTileLayers?: boolean;
  readonly shape?: string;
  readonly text?: string;
  readonly textAlign?: string;
  readonly textOption?: string;
  readonly tileLayers?: ReadonlyArray<Inline997>;
  readonly title?: string;
  readonly verticalAlign?: string;
}

export interface Inline996 {
  readonly height?: number;
  readonly left?: number;
  readonly top?: number;
  readonly width?: number;
}

export interface Inline997 {
  readonly colorPalette?: string;
  readonly content?: Inline997;
  readonly coverTile?: boolean;
  readonly margin?: string;
  readonly opacity?: number;
  readonly outOfBounds?: boolean;
  readonly padding?: string;
  readonly position?: Inline998;
  readonly tag?: string;
  readonly type?: string;
}

export interface Inline998 {
  readonly x?: string;
  readonly y?: string;
}

export interface Inline999 {
  readonly storeProductCollectionASINGrid: Inline999;
}

export interface InternalServerErrorResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface ListBrandStoreEditionParams {
  readonly brandStoreId: string;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ListBrandStoreEditionResponse {
  readonly data: Inline2332;
}

export interface NotFoundResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface QueryBrandStoreEditionPublishVersionParams {
  readonly editionIdFilter: Inline2334;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly publishStatusFilter: Inline2335;
  readonly storeIdFilter: Inline2336;
}

export interface QueryBrandStoreEditionPublishVersionResponse {
  readonly data: Inline2338;
}

export interface QueryBrandStorePageParams {
  readonly editionIdFilter: Inline2343;
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly pageIdFilter: Inline2344;
  readonly storeEditionPublishIdFilter?: Inline2345;
  readonly storeIdFilter: Inline2346;
}

export interface QueryBrandStorePageResponse {
  readonly data: Inline2348;
}

export interface QueryBrandStoreParams {
  readonly maxResults?: number;
  readonly nextToken?: string;
  readonly storeNameFilter: Inline2476;
}

export interface QueryBrandStoreResponse {
  readonly data: Inline2478;
}

export interface ServiceUnavailableErrorResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface TooManyRequestsResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface UnauthorizedResponseContent {
  readonly code: string;
  readonly message: string;
}

export interface UpdateBrandStoreEditionPublishVersionParams {
  readonly brandStoreEditionPublishVersions: ReadonlyArray<Inline2491>;
}

export interface UpdateBrandStoreEditionPublishVersionResponse {

}

export interface UpdateBrandStorePageParams {
  readonly brandStorePages: ReadonlyArray<Inline2495>;
}

export interface UpdateBrandStorePageResponse {

}
