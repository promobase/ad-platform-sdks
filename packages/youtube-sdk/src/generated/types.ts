// This file was generated from google-discovery/youtube-v3.json.
// Do not edit by hand. Run `bun --filter='./packages/youtube-sdk' run codegen`.

export interface AbuseReport {
  abuseTypes?: AbuseType[];
  description?: string;
  relatedEntities?: RelatedEntity[];
  subject?: Entity;
}

export interface AbuseType {
  id?: string;
}

export interface AccessPolicy {
  allowed?: boolean;
  exception?: string[];
}

export interface Activity {
  contentDetails?: ActivityContentDetails;
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: ActivitySnippet;
}

export interface ActivityContentDetails {
  bulletin?: ActivityContentDetailsBulletin;
  channelItem?: ActivityContentDetailsChannelItem;
  comment?: ActivityContentDetailsComment;
  favorite?: ActivityContentDetailsFavorite;
  like?: ActivityContentDetailsLike;
  playlistItem?: ActivityContentDetailsPlaylistItem;
  promotedItem?: ActivityContentDetailsPromotedItem;
  recommendation?: ActivityContentDetailsRecommendation;
  social?: ActivityContentDetailsSocial;
  subscription?: ActivityContentDetailsSubscription;
  upload?: ActivityContentDetailsUpload;
}

export interface ActivityContentDetailsBulletin {
  resourceId?: ResourceId;
}

export interface ActivityContentDetailsChannelItem {
  resourceId?: ResourceId;
}

export interface ActivityContentDetailsComment {
  resourceId?: ResourceId;
}

export interface ActivityContentDetailsFavorite {
  resourceId?: ResourceId;
}

export interface ActivityContentDetailsLike {
  resourceId?: ResourceId;
}

export interface ActivityContentDetailsPlaylistItem {
  playlistId?: string;
  playlistItemId?: string;
  resourceId?: ResourceId;
}

export interface ActivityContentDetailsPromotedItem {
  adTag?: string;
  clickTrackingUrl?: string;
  creativeViewUrl?: string;
  ctaType?: "ctaTypeUnspecified" | "visitAdvertiserSite";
  customCtaButtonText?: string;
  descriptionText?: string;
  destinationUrl?: string;
  forecastingUrl?: string[];
  impressionUrl?: string[];
  videoId?: string;
}

export interface ActivityContentDetailsRecommendation {
  reason?: "reasonUnspecified" | "videoFavorited" | "videoLiked" | "videoWatched";
  resourceId?: ResourceId;
  seedResourceId?: ResourceId;
}

export interface ActivityContentDetailsSocial {
  author?: string;
  imageUrl?: string;
  referenceUrl?: string;
  resourceId?: ResourceId;
  type?: "unspecified" | "googlePlus" | "facebook" | "twitter";
}

export interface ActivityContentDetailsSubscription {
  resourceId?: ResourceId;
}

export interface ActivityContentDetailsUpload {
  videoId?: string;
}

export interface ActivityListResponse {
  etag?: string;
  eventId?: string;
  items?: Activity[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  prevPageToken?: string;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface ActivitySnippet {
  channelId?: string;
  channelTitle?: string;
  description?: string;
  groupId?: string;
  publishedAt?: string;
  thumbnails?: ThumbnailDetails;
  title?: string;
  type?: "typeUnspecified" | "upload" | "like" | "favorite" | "comment" | "subscription" | "playlistItem" | "recommendation" | "bulletin" | "social" | "channelItem" | "promotedItem";
}

export interface AudioTrack {
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: AudioTrackSnippet;
}

export interface AudioTrackSnippet {
  contentType?: string;
  failureReason?: string;
  language?: string;
  status?: "audioTrackStatusUnspecified" | "processing" | "succeeded" | "failed" | "rejected";
  updateTime?: string;
  videoId?: string;
}

export interface Caption {
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: CaptionSnippet;
}

export interface CaptionListResponse {
  etag?: string;
  eventId?: string;
  items?: Caption[];
  kind?: string;
  visitorId?: string;
}

export interface CaptionSnippet {
  audioTrackType?: "unknown" | "primary" | "commentary" | "descriptive";
  failureReason?: "unknownFormat" | "unsupportedFormat" | "processingFailed";
  isAutoSynced?: boolean;
  isCC?: boolean;
  isDraft?: boolean;
  isEasyReader?: boolean;
  isLarge?: boolean;
  language?: string;
  lastUpdated?: string;
  name?: string;
  status?: "serving" | "syncing" | "failed";
  trackKind?: "standard" | "ASR" | "forced";
  videoId?: string;
}

export interface CdnSettings {
  format?: string;
  frameRate?: "30fps" | "60fps" | "variable";
  ingestionInfo?: IngestionInfo;
  ingestionType?: "rtmp" | "dash" | "webrtc" | "hls";
  resolution?: "240p" | "360p" | "480p" | "720p" | "1080p" | "1440p" | "2160p" | "variable";
}

export interface Channel {
  auditDetails?: ChannelAuditDetails;
  brandingSettings?: ChannelBrandingSettings;
  contentDetails?: ChannelContentDetails;
  contentOwnerDetails?: ChannelContentOwnerDetails;
  conversionPings?: ChannelConversionPings;
  etag?: string;
  id?: string;
  kind?: string;
  localizations?: Record<string, ChannelLocalization>;
  snippet?: ChannelSnippet;
  statistics?: ChannelStatistics;
  status?: ChannelStatus;
  topicDetails?: ChannelTopicDetails;
}

export interface ChannelAuditDetails {
  communityGuidelinesGoodStanding?: boolean;
  contentIdClaimsGoodStanding?: boolean;
  copyrightStrikesGoodStanding?: boolean;
}

export interface ChannelBannerResource {
  etag?: string;
  kind?: string;
  url?: string;
}

export interface ChannelBrandingSettings {
  channel?: ChannelSettings;
  hints?: PropertyValue[];
  image?: ImageSettings;
  watch?: WatchSettings;
}

export interface ChannelContentDetails {
  relatedPlaylists?: { favorites?: string; likes?: string; uploads?: string; watchHistory?: string; watchLater?: string };
}

export interface ChannelContentOwnerDetails {
  contentOwner?: string;
  timeLinked?: string;
}

export interface ChannelConversionPing {
  context?: "subscribe" | "unsubscribe" | "cview";
  conversionUrl?: string;
}

export interface ChannelConversionPings {
  pings?: ChannelConversionPing[];
}

export interface ChannelListResponse {
  etag?: string;
  eventId?: string;
  items?: Channel[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  prevPageToken?: string;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface ChannelLocalization {
  description?: string;
  title?: string;
}

export interface ChannelProfileDetails {
  channelId?: string;
  channelUrl?: string;
  displayName?: string;
  profileImageUrl?: string;
}

export interface ChannelSection {
  contentDetails?: ChannelSectionContentDetails;
  etag?: string;
  id?: string;
  kind?: string;
  localizations?: Record<string, ChannelSectionLocalization>;
  snippet?: ChannelSectionSnippet;
  targeting?: ChannelSectionTargeting;
}

export interface ChannelSectionContentDetails {
  channels?: string[];
  playlists?: string[];
}

export interface ChannelSectionListResponse {
  etag?: string;
  eventId?: string;
  items?: ChannelSection[];
  kind?: string;
  visitorId?: string;
}

export interface ChannelSectionLocalization {
  title?: string;
}

export interface ChannelSectionSnippet {
  channelId?: string;
  defaultLanguage?: string;
  localized?: ChannelSectionLocalization;
  position?: number;
  style?: "channelsectionStyleUnspecified" | "horizontalRow" | "verticalList";
  title?: string;
  type?: "channelsectionTypeUndefined" | "singlePlaylist" | "multiplePlaylists" | "popularUploads" | "recentUploads" | "likes" | "allPlaylists" | "likedPlaylists" | "recentPosts" | "recentActivity" | "liveEvents" | "upcomingEvents" | "completedEvents" | "multipleChannels" | "postedVideos" | "postedPlaylists" | "subscriptions";
}

export interface ChannelSectionTargeting {
  countries?: string[];
  languages?: string[];
  regions?: string[];
}

export interface ChannelSettings {
  country?: string;
  defaultLanguage?: string;
  defaultTab?: string;
  description?: string;
  featuredChannelsTitle?: string;
  featuredChannelsUrls?: string[];
  keywords?: string;
  moderateComments?: boolean;
  profileColor?: string;
  showBrowseView?: boolean;
  showRelatedChannels?: boolean;
  title?: string;
  trackingAnalyticsAccountId?: string;
  unsubscribedTrailer?: string;
}

export interface ChannelSnippet {
  country?: string;
  customUrl?: string;
  defaultLanguage?: string;
  description?: string;
  localized?: ChannelLocalization;
  publishedAt?: string;
  thumbnails?: ThumbnailDetails;
  title?: string;
}

export interface ChannelStatistics {
  commentCount?: string;
  hiddenSubscriberCount?: boolean;
  subscriberCount?: string;
  videoCount?: string;
  viewCount?: string;
}

export interface ChannelStatus {
  isChannelMonetizationEnabled?: boolean;
  isLinked?: boolean;
  longUploadsStatus?: "longUploadsUnspecified" | "allowed" | "eligible" | "disallowed";
  madeForKids?: boolean;
  privacyStatus?: "public" | "unlisted" | "private";
  selfDeclaredMadeForKids?: boolean;
}

export interface ChannelTopicDetails {
  topicCategories?: string[];
  topicIds?: string[];
}

export interface ChannelToStoreLinkDetails {
  billingDetails?: ChannelToStoreLinkDetailsBillingDetails;
  merchantAffiliateProgramDetails?: ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails;
  merchantId?: string;
  storeName?: string;
  storeUrl?: string;
}

export interface ChannelToStoreLinkDetailsBillingDetails {
  billingStatus?: "billingStatusUnspecified" | "billingStatusPending" | "billingStatusActive" | "billingStatusInactive";
}

export interface ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails {
  status?: "merchantAffiliateProgramStatusUnspecified" | "merchantAffiliateProgramStatusEligible" | "merchantAffiliateProgramStatusActive" | "merchantAffiliateProgramStatusPaused";
}

export interface Comment {
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: CommentSnippet;
}

export interface CommentListResponse {
  etag?: string;
  eventId?: string;
  items?: Comment[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface CommentSnippet {
  authorChannelId?: CommentSnippetAuthorChannelId;
  authorChannelUrl?: string;
  authorDisplayName?: string;
  authorProfileImageUrl?: string;
  canRate?: boolean;
  channelId?: string;
  likeCount?: number;
  moderationStatus?: "published" | "heldForReview" | "likelySpam" | "rejected";
  parentId?: string;
  postId?: string;
  publishedAt?: string;
  textDisplay?: string;
  textOriginal?: string;
  updatedAt?: string;
  videoId?: string;
  viewerRating?: "none" | "like" | "dislike";
}

export interface CommentSnippetAuthorChannelId {
  value?: string;
}

export interface CommentThread {
  etag?: string;
  id?: string;
  kind?: string;
  replies?: CommentThreadReplies;
  snippet?: CommentThreadSnippet;
}

export interface CommentThreadListResponse {
  etag?: string;
  eventId?: string;
  items?: CommentThread[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface CommentThreadReplies {
  comments?: Comment[];
}

export interface CommentThreadSnippet {
  canReply?: boolean;
  channelId?: string;
  isPublic?: boolean;
  postId?: string;
  topLevelComment?: Comment;
  totalReplyCount?: number;
  videoId?: string;
}

export interface ContentRating {
  acbRating?: "acbUnspecified" | "acbE" | "acbP" | "acbC" | "acbG" | "acbPg" | "acbM" | "acbMa15plus" | "acbR18plus" | "acbUnrated";
  agcomRating?: "agcomUnspecified" | "agcomT" | "agcomVm14" | "agcomVm18" | "agcomUnrated";
  anatelRating?: "anatelUnspecified" | "anatelF" | "anatelI" | "anatelI7" | "anatelI10" | "anatelI12" | "anatelR" | "anatelA" | "anatelUnrated";
  bbfcRating?: "bbfcUnspecified" | "bbfcU" | "bbfcPg" | "bbfc12a" | "bbfc12" | "bbfc15" | "bbfc18" | "bbfcR18" | "bbfcUnrated";
  bfvcRating?: "bfvcUnspecified" | "bfvcG" | "bfvcE" | "bfvc13" | "bfvc15" | "bfvc18" | "bfvc20" | "bfvcB" | "bfvcUnrated";
  bmukkRating?: "bmukkUnspecified" | "bmukkAa" | "bmukk6" | "bmukk8" | "bmukk10" | "bmukk12" | "bmukk14" | "bmukk16" | "bmukkUnrated";
  catvfrRating?: "catvfrUnspecified" | "catvfrG" | "catvfr8plus" | "catvfr13plus" | "catvfr16plus" | "catvfr18plus" | "catvfrUnrated" | "catvfrE";
  catvRating?: "catvUnspecified" | "catvC" | "catvC8" | "catvG" | "catvPg" | "catv14plus" | "catv18plus" | "catvUnrated" | "catvE";
  cbfcRating?: "cbfcUnspecified" | "cbfcU" | "cbfcUA" | "cbfcUA7plus" | "cbfcUA13plus" | "cbfcUA16plus" | "cbfcA" | "cbfcS" | "cbfcUnrated";
  cccRating?: "cccUnspecified" | "cccTe" | "ccc6" | "ccc14" | "ccc18" | "ccc18v" | "ccc18s" | "cccUnrated";
  cceRating?: "cceUnspecified" | "cceM4" | "cceM6" | "cceM12" | "cceM16" | "cceM18" | "cceUnrated" | "cceM14";
  chfilmRating?: "chfilmUnspecified" | "chfilm0" | "chfilm6" | "chfilm12" | "chfilm16" | "chfilm18" | "chfilmUnrated";
  chvrsRating?: "chvrsUnspecified" | "chvrsG" | "chvrsPg" | "chvrs14a" | "chvrs18a" | "chvrsR" | "chvrsE" | "chvrsUnrated";
  cicfRating?: "cicfUnspecified" | "cicfE" | "cicfKtEa" | "cicfKntEna" | "cicfUnrated";
  cnaRating?: "cnaUnspecified" | "cnaAp" | "cna12" | "cna15" | "cna18" | "cna18plus" | "cnaUnrated";
  cncRating?: "cncUnspecified" | "cncT" | "cnc10" | "cnc12" | "cnc16" | "cnc18" | "cncE" | "cncInterdiction" | "cncUnrated";
  csaRating?: "csaUnspecified" | "csaT" | "csa10" | "csa12" | "csa16" | "csa18" | "csaInterdiction" | "csaUnrated";
  cscfRating?: "cscfUnspecified" | "cscfAl" | "cscfA" | "cscf6" | "cscf9" | "cscf12" | "cscf16" | "cscf18" | "cscfUnrated";
  czfilmRating?: "czfilmUnspecified" | "czfilmU" | "czfilm12" | "czfilm14" | "czfilm18" | "czfilmUnrated";
  djctqRating?: "djctqUnspecified" | "djctqL" | "djctq10" | "djctq12" | "djctq14" | "djctq16" | "djctq18" | "djctqEr" | "djctqL10" | "djctqL12" | "djctqL14" | "djctqL16" | "djctqL18" | "djctq1012" | "djctq1014" | "djctq1016" | "djctq1018" | "djctq1214" | "djctq1216" | "djctq1218" | "djctq1416" | "djctq1418" | "djctq1618" | "djctqUnrated";
  djctqRatingReasons?: "djctqRatingReasonUnspecified" | "djctqViolence" | "djctqExtremeViolence" | "djctqSexualContent" | "djctqNudity" | "djctqSex" | "djctqExplicitSex" | "djctqDrugs" | "djctqLegalDrugs" | "djctqIllegalDrugs" | "djctqInappropriateLanguage" | "djctqCriminalActs" | "djctqImpactingContent" | "djctqFear" | "djctqMedicalProcedures" | "djctqSensitiveTopics" | "djctqFantasyViolence"[];
  ecbmctRating?: "ecbmctUnspecified" | "ecbmctG" | "ecbmct7a" | "ecbmct7plus" | "ecbmct13a" | "ecbmct13plus" | "ecbmct15a" | "ecbmct15plus" | "ecbmct18plus" | "ecbmctUnrated";
  eefilmRating?: "eefilmUnspecified" | "eefilmPere" | "eefilmL" | "eefilmMs6" | "eefilmK6" | "eefilmMs12" | "eefilmK12" | "eefilmK14" | "eefilmK16" | "eefilmUnrated";
  egfilmRating?: "egfilmUnspecified" | "egfilmGn" | "egfilm18" | "egfilmBn" | "egfilmUnrated";
  eirinRating?: "eirinUnspecified" | "eirinG" | "eirinPg12" | "eirinR15plus" | "eirinR18plus" | "eirinUnrated";
  fcbmRating?: "fcbmUnspecified" | "fcbmU" | "fcbmPg13" | "fcbmP13" | "fcbm18" | "fcbm18sx" | "fcbm18pa" | "fcbm18sg" | "fcbm18pl" | "fcbmUnrated";
  fcoRating?: "fcoUnspecified" | "fcoI" | "fcoIia" | "fcoIib" | "fcoIi" | "fcoIii" | "fcoUnrated";
  fmocRating?: "fmocUnspecified" | "fmocU" | "fmoc10" | "fmoc12" | "fmoc16" | "fmoc18" | "fmocE" | "fmocUnrated";
  fpbRating?: "fpbUnspecified" | "fpbA" | "fpbPg" | "fpb79Pg" | "fpb1012Pg" | "fpb13" | "fpb16" | "fpb18" | "fpbX18" | "fpbXx" | "fpbUnrated" | "fpb10";
  fpbRatingReasons?: "fpbRatingReasonUnspecified" | "fpbBlasphemy" | "fpbLanguage" | "fpbNudity" | "fpbPrejudice" | "fpbSex" | "fpbViolence" | "fpbDrugs" | "fpbSexualViolence" | "fpbHorror" | "fpbCriminalTechniques" | "fpbImitativeActsTechniques"[];
  fskRating?: "fskUnspecified" | "fsk0" | "fsk6" | "fsk12" | "fsk16" | "fsk18" | "fskUnrated";
  grfilmRating?: "grfilmUnspecified" | "grfilmK" | "grfilmE" | "grfilmK12" | "grfilmK13" | "grfilmK15" | "grfilmK17" | "grfilmK18" | "grfilmUnrated";
  icaaRating?: "icaaUnspecified" | "icaaApta" | "icaa7" | "icaa12" | "icaa13" | "icaa16" | "icaa18" | "icaaX" | "icaaUnrated";
  ifcoRating?: "ifcoUnspecified" | "ifcoG" | "ifcoPg" | "ifco12" | "ifco12a" | "ifco15" | "ifco15a" | "ifco16" | "ifco18" | "ifcoUnrated";
  ilfilmRating?: "ilfilmUnspecified" | "ilfilmAa" | "ilfilm12" | "ilfilm14" | "ilfilm16" | "ilfilm18" | "ilfilmUnrated";
  incaaRating?: "incaaUnspecified" | "incaaAtp" | "incaaSam13" | "incaaSam16" | "incaaSam18" | "incaaC" | "incaaUnrated";
  kfcbRating?: "kfcbUnspecified" | "kfcbG" | "kfcbPg" | "kfcb16plus" | "kfcbR" | "kfcbUnrated";
  kijkwijzerRating?: "kijkwijzerUnspecified" | "kijkwijzerAl" | "kijkwijzer6" | "kijkwijzer9" | "kijkwijzer12" | "kijkwijzer16" | "kijkwijzer18" | "kijkwijzerUnrated";
  kmrbRating?: "kmrbUnspecified" | "kmrbAll" | "kmrb12plus" | "kmrb15plus" | "kmrbTeenr" | "kmrbR" | "kmrbUnrated";
  lsfRating?: "lsfUnspecified" | "lsfSu" | "lsfA" | "lsfBo" | "lsf13" | "lsfR" | "lsf17" | "lsfD" | "lsf21" | "lsfUnrated";
  mccaaRating?: "mccaaUnspecified" | "mccaaU" | "mccaaPg" | "mccaa12a" | "mccaa12" | "mccaa14" | "mccaa15" | "mccaa16" | "mccaa18" | "mccaaUnrated";
  mccypRating?: "mccypUnspecified" | "mccypA" | "mccyp7" | "mccyp11" | "mccyp15" | "mccypUnrated";
  mcstRating?: "mcstUnspecified" | "mcstP" | "mcst0" | "mcstC13" | "mcstC16" | "mcst16plus" | "mcstC18" | "mcstGPg" | "mcstUnrated";
  mdaRating?: "mdaUnspecified" | "mdaG" | "mdaPg" | "mdaPg13" | "mdaNc16" | "mdaM18" | "mdaR21" | "mdaUnrated";
  medietilsynetRating?: "medietilsynetUnspecified" | "medietilsynetA" | "medietilsynet6" | "medietilsynet7" | "medietilsynet9" | "medietilsynet11" | "medietilsynet12" | "medietilsynet15" | "medietilsynet18" | "medietilsynetUnrated";
  mekuRating?: "mekuUnspecified" | "mekuS" | "meku7" | "meku12" | "meku16" | "meku18" | "mekuUnrated";
  menaMpaaRating?: "menaMpaaUnspecified" | "menaMpaaG" | "menaMpaaPg" | "menaMpaaPg13" | "menaMpaaR" | "menaMpaaUnrated";
  mibacRating?: "mibacUnspecified" | "mibacT" | "mibacVap" | "mibacVm6" | "mibacVm12" | "mibacVm14" | "mibacVm16" | "mibacVm18" | "mibacUnrated";
  mocRating?: "mocUnspecified" | "mocE" | "mocT" | "moc7" | "moc12" | "moc15" | "moc18" | "mocX" | "mocBanned" | "mocUnrated";
  moctwRating?: "moctwUnspecified" | "moctwG" | "moctwP" | "moctwPg" | "moctwR" | "moctwUnrated" | "moctwR12" | "moctwR15";
  mpaaRating?: "mpaaUnspecified" | "mpaaG" | "mpaaPg" | "mpaaPg13" | "mpaaR" | "mpaaNc17" | "mpaaX" | "mpaaUnrated";
  mpaatRating?: "mpaatUnspecified" | "mpaatGb" | "mpaatRb";
  mtrcbRating?: "mtrcbUnspecified" | "mtrcbG" | "mtrcbPg" | "mtrcbR13" | "mtrcbR16" | "mtrcbR18" | "mtrcbX" | "mtrcbUnrated";
  nbcplRating?: "nbcplUnspecified" | "nbcplI" | "nbcplIi" | "nbcplIii" | "nbcplIv" | "nbcpl18plus" | "nbcplUnrated";
  nbcRating?: "nbcUnspecified" | "nbcG" | "nbcPg" | "nbc12plus" | "nbc15plus" | "nbc18plus" | "nbc18plusr" | "nbcPu" | "nbcUnrated";
  nfrcRating?: "nfrcUnspecified" | "nfrcA" | "nfrcB" | "nfrcC" | "nfrcD" | "nfrcX" | "nfrcUnrated";
  nfvcbRating?: "nfvcbUnspecified" | "nfvcbG" | "nfvcbPg" | "nfvcb12" | "nfvcb12a" | "nfvcb15" | "nfvcb18" | "nfvcbRe" | "nfvcbUnrated";
  nkclvRating?: "nkclvUnspecified" | "nkclvU" | "nkclv7plus" | "nkclv12plus" | "nkclv16plus" | "nkclv18plus" | "nkclvUnrated";
  nmcRating?: "nmcUnspecified" | "nmcG" | "nmcPg" | "nmcPg13" | "nmcPg15" | "nmc15plus" | "nmc18plus" | "nmc18tc" | "nmcUnrated";
  oflcRating?: "oflcUnspecified" | "oflcG" | "oflcPg" | "oflcM" | "oflcR13" | "oflcR15" | "oflcR16" | "oflcR18" | "oflcUnrated" | "oflcRp13" | "oflcRp16" | "oflcRp18";
  pefilmRating?: "pefilmUnspecified" | "pefilmPt" | "pefilmPg" | "pefilm14" | "pefilm18" | "pefilmUnrated";
  rcnofRating?: "rcnofUnspecified" | "rcnofI" | "rcnofIi" | "rcnofIii" | "rcnofIv" | "rcnofV" | "rcnofVi" | "rcnofUnrated";
  resorteviolenciaRating?: "resorteviolenciaUnspecified" | "resorteviolenciaA" | "resorteviolenciaB" | "resorteviolenciaC" | "resorteviolenciaD" | "resorteviolenciaE" | "resorteviolenciaUnrated";
  rtcRating?: "rtcUnspecified" | "rtcAa" | "rtcA" | "rtcB" | "rtcB15" | "rtcC" | "rtcD" | "rtcUnrated";
  rteRating?: "rteUnspecified" | "rteGa" | "rteCh" | "rtePs" | "rteMa" | "rteUnrated";
  russiaRating?: "russiaUnspecified" | "russia0" | "russia6" | "russia12" | "russia16" | "russia18" | "russiaUnrated";
  skfilmRating?: "skfilmUnspecified" | "skfilmG" | "skfilmP2" | "skfilmP5" | "skfilmP8" | "skfilmUnrated";
  smaisRating?: "smaisUnspecified" | "smaisL" | "smais7" | "smais12" | "smais14" | "smais16" | "smais18" | "smaisUnrated";
  smsaRating?: "smsaUnspecified" | "smsaA" | "smsa7" | "smsa11" | "smsa15" | "smsaUnrated";
  tvpgRating?: "tvpgUnspecified" | "tvpgY" | "tvpgY7" | "tvpgY7Fv" | "tvpgG" | "tvpgPg" | "pg14" | "tvpgMa" | "tvpgUnrated";
  ytRating?: "ytUnspecified" | "ytAgeRestricted";
}

export interface Cuepoint {
  cueType?: "cueTypeUnspecified" | "cueTypeAd";
  durationSecs?: number;
  etag?: string;
  id?: string;
  insertionOffsetTimeMs?: string;
  walltimeMs?: string;
}

export interface CuepointSchedule {
  enabled?: boolean;
  pauseAdsUntil?: string;
  repeatIntervalSecs?: number;
  scheduleStrategy?: "scheduleStrategyUnspecified" | "concurrent" | "nonConcurrent";
}

export interface Entity {
  id?: string;
  typeId?: string;
  url?: string;
}

export interface GeoPoint {
  altitude?: number;
  latitude?: number;
  longitude?: number;
}

export interface I18nLanguage {
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: I18nLanguageSnippet;
}

export interface I18nLanguageListResponse {
  etag?: string;
  eventId?: string;
  items?: I18nLanguage[];
  kind?: string;
  visitorId?: string;
}

export interface I18nLanguageSnippet {
  hl?: string;
  name?: string;
}

export interface I18nRegion {
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: I18nRegionSnippet;
}

export interface I18nRegionListResponse {
  etag?: string;
  eventId?: string;
  items?: I18nRegion[];
  kind?: string;
  visitorId?: string;
}

export interface I18nRegionSnippet {
  gl?: string;
  name?: string;
}

export interface ImageSettings {
  backgroundImageUrl?: LocalizedProperty;
  bannerExternalUrl?: string;
  bannerImageUrl?: string;
  bannerMobileExtraHdImageUrl?: string;
  bannerMobileHdImageUrl?: string;
  bannerMobileImageUrl?: string;
  bannerMobileLowImageUrl?: string;
  bannerMobileMediumHdImageUrl?: string;
  bannerTabletExtraHdImageUrl?: string;
  bannerTabletHdImageUrl?: string;
  bannerTabletImageUrl?: string;
  bannerTabletLowImageUrl?: string;
  bannerTvHighImageUrl?: string;
  bannerTvImageUrl?: string;
  bannerTvLowImageUrl?: string;
  bannerTvMediumImageUrl?: string;
  largeBrandedBannerImageImapScript?: LocalizedProperty;
  largeBrandedBannerImageUrl?: LocalizedProperty;
  smallBrandedBannerImageImapScript?: LocalizedProperty;
  smallBrandedBannerImageUrl?: LocalizedProperty;
  trackingImageUrl?: string;
  watchIconImageUrl?: string;
}

export interface IngestionInfo {
  backupIngestionAddress?: string;
  ingestionAddress?: string;
  rtmpsBackupIngestionAddress?: string;
  rtmpsIngestionAddress?: string;
  streamName?: string;
}

export interface InvideoBranding {
  imageBytes?: string;
  imageUrl?: string;
  position?: InvideoPosition;
  targetChannelId?: string;
  timing?: InvideoTiming;
}

export interface InvideoPosition {
  cornerPosition?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  type?: "corner";
}

export interface InvideoTiming {
  durationMs?: string;
  offsetMs?: string;
  type?: "offsetFromStart" | "offsetFromEnd";
}

export interface LanguageTag {
  value?: string;
}

export interface LevelDetails {
  displayName?: string;
}

export interface ListAudioTracksResponse {
  audioTracks?: AudioTrack[];
  etag?: string;
  kind?: string;
}

export interface LiveBroadcast {
  contentDetails?: LiveBroadcastContentDetails;
  etag?: string;
  id?: string;
  kind?: string;
  monetizationDetails?: LiveBroadcastMonetizationDetails;
  snippet?: LiveBroadcastSnippet;
  statistics?: LiveBroadcastStatistics;
  status?: LiveBroadcastStatus;
}

export interface LiveBroadcastContentDetails {
  boundStreamId?: string;
  boundStreamLastUpdateTimeMs?: string;
  closedCaptionsType?: "closedCaptionsTypeUnspecified" | "closedCaptionsDisabled" | "closedCaptionsHttpPost" | "closedCaptionsEmbedded";
  enableAutoStart?: boolean;
  enableAutoStop?: boolean;
  enableClosedCaptions?: boolean;
  enableContentEncryption?: boolean;
  enableDvr?: boolean;
  enableEmbed?: boolean;
  enableLowLatency?: boolean;
  latencyPreference?: "latencyPreferenceUnspecified" | "normal" | "low" | "ultraLow";
  mesh?: string;
  monitorStream?: MonitorStreamInfo;
  projection?: "projectionUnspecified" | "rectangular" | "360" | "mesh";
  recordFromStart?: boolean;
  startWithSlate?: boolean;
  stereoLayout?: "stereoLayoutUnspecified" | "mono" | "leftRight" | "topBottom";
}

export interface LiveBroadcastListResponse {
  etag?: string;
  eventId?: string;
  items?: LiveBroadcast[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  prevPageToken?: string;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface LiveBroadcastMonetizationDetails {
  cuepointSchedule?: CuepointSchedule;
}

export interface LiveBroadcastSnippet {
  actualEndTime?: string;
  actualStartTime?: string;
  channelId?: string;
  description?: string;
  isDefaultBroadcast?: boolean;
  liveChatId?: string;
  publishedAt?: string;
  scheduledEndTime?: string;
  scheduledStartTime?: string;
  thumbnails?: ThumbnailDetails;
  title?: string;
}

export interface LiveBroadcastStatistics {
  concurrentViewers?: string;
}

export interface LiveBroadcastStatus {
  lifeCycleStatus?: "lifeCycleStatusUnspecified" | "created" | "ready" | "testing" | "live" | "complete" | "revoked" | "testStarting" | "liveStarting";
  liveBroadcastPriority?: "liveBroadcastPriorityUnspecified" | "low" | "normal" | "high";
  madeForKids?: boolean;
  privacyStatus?: "public" | "unlisted" | "private";
  recordingStatus?: "liveBroadcastRecordingStatusUnspecified" | "notRecording" | "recording" | "recorded";
  selfDeclaredMadeForKids?: boolean;
}

export interface LiveChatBan {
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: LiveChatBanSnippet;
}

export interface LiveChatBanSnippet {
  banDurationSeconds?: string;
  bannedUserDetails?: ChannelProfileDetails;
  liveChatId?: string;
  type?: "liveChatBanTypeUnspecified" | "permanent" | "temporary";
}

export interface LiveChatFanFundingEventDetails {
  amountDisplayString?: string;
  amountMicros?: string;
  currency?: string;
  userComment?: string;
}

export interface LiveChatGiftDetails {
  altText?: string;
  comboCount?: number;
  giftDuration?: string;
  giftName?: string;
  giftUrl?: string;
  hasVisualEffect?: boolean;
  jewelsAmount?: number;
  language?: string;
}

export interface LiveChatGiftMembershipReceivedDetails {
  associatedMembershipGiftingMessageId?: string;
  gifterChannelId?: string;
  memberLevelName?: string;
}

export interface LiveChatMemberMilestoneChatDetails {
  memberLevelName?: string;
  memberMonth?: number;
  userComment?: string;
}

export interface LiveChatMembershipGiftingDetails {
  giftMembershipsCount?: number;
  giftMembershipsLevelName?: string;
}

export interface LiveChatMessage {
  authorDetails?: LiveChatMessageAuthorDetails;
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: LiveChatMessageSnippet;
}

export interface LiveChatMessageAuthorDetails {
  channelId?: string;
  channelUrl?: string;
  displayName?: string;
  isChatModerator?: boolean;
  isChatOwner?: boolean;
  isChatSponsor?: boolean;
  isVerified?: boolean;
  profileImageUrl?: string;
}

export interface LiveChatMessageDeletedDetails {
  deletedMessageId?: string;
}

export interface LiveChatMessageListResponse {
  activePollItem?: LiveChatMessage;
  etag?: string;
  eventId?: string;
  items?: LiveChatMessage[];
  kind?: string;
  nextPageToken?: string;
  offlineAt?: string;
  pageInfo?: PageInfo;
  pollingIntervalMillis?: number;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface LiveChatMessageRetractedDetails {
  retractedMessageId?: string;
}

export interface LiveChatMessageSnippet {
  authorChannelId?: string;
  displayMessage?: string;
  fanFundingEventDetails?: LiveChatFanFundingEventDetails;
  giftDetails?: LiveChatGiftDetails;
  giftMembershipReceivedDetails?: LiveChatGiftMembershipReceivedDetails;
  hasDisplayContent?: boolean;
  liveChatId?: string;
  memberMilestoneChatDetails?: LiveChatMemberMilestoneChatDetails;
  membershipGiftingDetails?: LiveChatMembershipGiftingDetails;
  messageDeletedDetails?: LiveChatMessageDeletedDetails;
  messageRetractedDetails?: LiveChatMessageRetractedDetails;
  newSponsorDetails?: LiveChatNewSponsorDetails;
  pollDetails?: LiveChatPollDetails;
  publishedAt?: string;
  superChatDetails?: LiveChatSuperChatDetails;
  superStickerDetails?: LiveChatSuperStickerDetails;
  textMessageDetails?: LiveChatTextMessageDetails;
  type?: "invalidType" | "textMessageEvent" | "tombstone" | "fanFundingEvent" | "chatEndedEvent" | "sponsorOnlyModeStartedEvent" | "sponsorOnlyModeEndedEvent" | "newSponsorEvent" | "memberMilestoneChatEvent" | "membershipGiftingEvent" | "giftMembershipReceivedEvent" | "messageDeletedEvent" | "messageRetractedEvent" | "userBannedEvent" | "superChatEvent" | "superStickerEvent" | "pollEvent" | "giftEvent";
  userBannedDetails?: LiveChatUserBannedMessageDetails;
}

export interface LiveChatModerator {
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: LiveChatModeratorSnippet;
}

export interface LiveChatModeratorListResponse {
  etag?: string;
  eventId?: string;
  items?: LiveChatModerator[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  prevPageToken?: string;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface LiveChatModeratorSnippet {
  liveChatId?: string;
  moderatorDetails?: ChannelProfileDetails;
}

export interface LiveChatNewSponsorDetails {
  isUpgrade?: boolean;
  memberLevelName?: string;
}

export interface LiveChatPollDetails {
  metadata?: LiveChatPollDetailsPollMetadata;
  status?: "unknown" | "active" | "closed";
}

export interface LiveChatPollDetailsPollMetadata {
  options?: LiveChatPollDetailsPollMetadataPollOption[];
  questionText?: string;
}

export interface LiveChatPollDetailsPollMetadataPollOption {
  optionText?: string;
  tally?: string;
}

export interface LiveChatSuperChatDetails {
  amountDisplayString?: string;
  amountMicros?: string;
  currency?: string;
  tier?: number;
  userComment?: string;
}

export interface LiveChatSuperStickerDetails {
  amountDisplayString?: string;
  amountMicros?: string;
  currency?: string;
  superStickerMetadata?: SuperStickerMetadata;
  tier?: number;
}

export interface LiveChatTextMessageDetails {
  messageText?: string;
}

export interface LiveChatUserBannedMessageDetails {
  banDurationSeconds?: string;
  bannedUserDetails?: ChannelProfileDetails;
  banType?: "permanent" | "temporary";
}

export interface LiveStream {
  cdn?: CdnSettings;
  contentDetails?: LiveStreamContentDetails;
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: LiveStreamSnippet;
  status?: LiveStreamStatus;
}

export interface LiveStreamConfigurationIssue {
  description?: string;
  reason?: string;
  severity?: "info" | "warning" | "error";
  type?: "gopSizeOver" | "gopSizeLong" | "gopSizeShort" | "openGop" | "badContainer" | "audioBitrateHigh" | "audioBitrateLow" | "audioSampleRate" | "bitrateHigh" | "bitrateLow" | "audioCodec" | "videoCodec" | "noAudioStream" | "noVideoStream" | "multipleVideoStreams" | "multipleAudioStreams" | "audioTooManyChannels" | "interlacedVideo" | "frameRateHigh" | "resolutionMismatch" | "videoCodecMismatch" | "videoInterlaceMismatch" | "videoProfileMismatch" | "videoBitrateMismatch" | "framerateMismatch" | "gopMismatch" | "audioSampleRateMismatch" | "audioStereoMismatch" | "audioCodecMismatch" | "audioBitrateMismatch" | "videoResolutionSuboptimal" | "videoResolutionUnsupported" | "videoIngestionStarved" | "videoIngestionFasterThanRealtime";
}

export interface LiveStreamContentDetails {
  closedCaptionsIngestionUrl?: string;
  isReusable?: boolean;
}

export interface LiveStreamHealthStatus {
  configurationIssues?: LiveStreamConfigurationIssue[];
  lastUpdateTimeSeconds?: string;
  status?: "good" | "ok" | "bad" | "noData" | "revoked";
}

export interface LiveStreamListResponse {
  etag?: string;
  eventId?: string;
  items?: LiveStream[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  prevPageToken?: string;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface LiveStreamSnippet {
  channelId?: string;
  description?: string;
  isDefaultStream?: boolean;
  publishedAt?: string;
  title?: string;
}

export interface LiveStreamStatus {
  healthStatus?: LiveStreamHealthStatus;
  streamStatus?: "created" | "ready" | "active" | "inactive" | "error";
}

export interface LocalizedProperty {
  default?: string;
  defaultLanguage?: LanguageTag;
  localized?: LocalizedString[];
}

export interface LocalizedString {
  language?: string;
  value?: string;
}

export interface Member {
  etag?: string;
  kind?: string;
  snippet?: MemberSnippet;
}

export interface MemberListResponse {
  etag?: string;
  eventId?: string;
  items?: Member[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface MembershipsDetails {
  accessibleLevels?: string[];
  highestAccessibleLevel?: string;
  highestAccessibleLevelDisplayName?: string;
  membershipsDuration?: MembershipsDuration;
  membershipsDurationAtLevels?: MembershipsDurationAtLevel[];
}

export interface MembershipsDuration {
  memberSince?: string;
  memberTotalDurationMonths?: number;
}

export interface MembershipsDurationAtLevel {
  level?: string;
  memberSince?: string;
  memberTotalDurationMonths?: number;
}

export interface MembershipsLevel {
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: MembershipsLevelSnippet;
}

export interface MembershipsLevelListResponse {
  etag?: string;
  eventId?: string;
  items?: MembershipsLevel[];
  kind?: string;
  visitorId?: string;
}

export interface MembershipsLevelSnippet {
  creatorChannelId?: string;
  levelDetails?: LevelDetails;
}

export interface MemberSnippet {
  creatorChannelId?: string;
  memberDetails?: ChannelProfileDetails;
  membershipsDetails?: MembershipsDetails;
}

export interface MonitorStreamInfo {
  broadcastStreamDelayMs?: number;
  embedHtml?: string;
  enableMonitorStream?: boolean;
}

export interface PageInfo {
  resultsPerPage?: number;
  totalResults?: number;
}

export interface Playlist {
  contentDetails?: PlaylistContentDetails;
  etag?: string;
  id?: string;
  kind?: string;
  localizations?: Record<string, PlaylistLocalization>;
  player?: PlaylistPlayer;
  snippet?: PlaylistSnippet;
  status?: PlaylistStatus;
}

export interface PlaylistContentDetails {
  itemCount?: number;
}

export interface PlaylistImage {
  id?: string;
  kind?: string;
  snippet?: PlaylistImageSnippet;
}

export interface PlaylistImageListResponse {
  items?: PlaylistImage[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  prevPageToken?: string;
}

export interface PlaylistImageSnippet {
  height?: number;
  playlistId?: string;
  type?: "hero";
  width?: number;
}

export interface PlaylistItem {
  contentDetails?: PlaylistItemContentDetails;
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: PlaylistItemSnippet;
  status?: PlaylistItemStatus;
}

export interface PlaylistItemContentDetails {
  endAt?: string;
  note?: string;
  startAt?: string;
  videoId?: string;
  videoPublishedAt?: string;
}

export interface PlaylistItemListResponse {
  etag?: string;
  eventId?: string;
  items?: PlaylistItem[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  prevPageToken?: string;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface PlaylistItemSnippet {
  channelId?: string;
  channelTitle?: string;
  description?: string;
  playlistId?: string;
  position?: number;
  publishedAt?: string;
  resourceId?: ResourceId;
  thumbnails?: ThumbnailDetails;
  title?: string;
  videoOwnerChannelId?: string;
  videoOwnerChannelTitle?: string;
}

export interface PlaylistItemStatus {
  privacyStatus?: "public" | "unlisted" | "private";
}

export interface PlaylistListResponse {
  etag?: string;
  eventId?: string;
  items?: Playlist[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  prevPageToken?: string;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface PlaylistLocalization {
  description?: string;
  title?: string;
}

export interface PlaylistPlayer {
  embedHtml?: string;
}

export interface PlaylistSnippet {
  channelId?: string;
  channelTitle?: string;
  defaultLanguage?: string;
  description?: string;
  localized?: PlaylistLocalization;
  publishedAt?: string;
  tags?: string[];
  thumbnails?: ThumbnailDetails;
  thumbnailVideoId?: string;
  title?: string;
}

export interface PlaylistStatus {
  podcastStatus?: "enabled" | "disabled";
  privacyStatus?: "public" | "unlisted" | "private";
}

export interface PropertyValue {
  property?: string;
  value?: string;
}

export interface RelatedEntity {
  entity?: Entity;
}

export interface ResourceId {
  channelId?: string;
  kind?: string;
  playlistId?: string;
  videoId?: string;
}

export interface SearchListResponse {
  etag?: string;
  eventId?: string;
  items?: SearchResult[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  prevPageToken?: string;
  regionCode?: string;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface SearchResult {
  etag?: string;
  id?: ResourceId;
  kind?: string;
  snippet?: SearchResultSnippet;
}

export interface SearchResultSnippet {
  channelId?: string;
  channelTitle?: string;
  description?: string;
  liveBroadcastContent?: "none" | "upcoming" | "live" | "completed";
  publishedAt?: string;
  thumbnails?: ThumbnailDetails;
  title?: string;
}

export interface Subscription {
  contentDetails?: SubscriptionContentDetails;
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: SubscriptionSnippet;
  subscriberSnippet?: SubscriptionSubscriberSnippet;
}

export interface SubscriptionContentDetails {
  activityType?: "subscriptionActivityTypeUnspecified" | "all" | "uploads";
  newItemCount?: number;
  totalItemCount?: number;
}

export interface SubscriptionListResponse {
  etag?: string;
  eventId?: string;
  items?: Subscription[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  prevPageToken?: string;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface SubscriptionSnippet {
  channelId?: string;
  description?: string;
  publishedAt?: string;
  resourceId?: ResourceId;
  thumbnails?: ThumbnailDetails;
  title?: string;
}

export interface SubscriptionSubscriberSnippet {
  channelId?: string;
  description?: string;
  thumbnails?: ThumbnailDetails;
  title?: string;
}

export interface SuperChatEvent {
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: SuperChatEventSnippet;
}

export interface SuperChatEventListResponse {
  etag?: string;
  eventId?: string;
  items?: SuperChatEvent[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface SuperChatEventSnippet {
  amountMicros?: string;
  channelId?: string;
  commentText?: string;
  createdAt?: string;
  currency?: string;
  displayString?: string;
  isSuperStickerEvent?: boolean;
  messageType?: number;
  superStickerMetadata?: SuperStickerMetadata;
  supporterDetails?: ChannelProfileDetails;
}

export interface SuperStickerMetadata {
  altText?: string;
  altTextLanguage?: string;
  stickerId?: string;
}

export interface TestItem {
  etag?: string;
  featuredPart?: boolean;
  gaia?: string;
  id?: string;
  snippet?: TestItemTestItemSnippet;
}

export interface TestItemTestItemSnippet {
}

export interface ThirdPartyLink {
  etag?: string;
  kind?: string;
  linkingToken?: string;
  snippet?: ThirdPartyLinkSnippet;
  status?: ThirdPartyLinkStatus;
}

export interface ThirdPartyLinkListResponse {
  etag?: string;
  items?: ThirdPartyLink[];
  kind?: string;
}

export interface ThirdPartyLinkSnippet {
  channelToStoreLink?: ChannelToStoreLinkDetails;
  type?: "linkUnspecified" | "channelToStoreLink";
}

export interface ThirdPartyLinkStatus {
  linkStatus?: "unknown" | "failed" | "pending" | "linked";
}

export interface Thumbnail {
  height?: number;
  url?: string;
  width?: number;
}

export interface ThumbnailDetails {
  default?: Thumbnail;
  high?: Thumbnail;
  maxres?: Thumbnail;
  medium?: Thumbnail;
  standard?: Thumbnail;
}

export interface ThumbnailSetResponse {
  etag?: string;
  eventId?: string;
  items?: ThumbnailDetails[];
  kind?: string;
  visitorId?: string;
}

export interface TokenPagination {
}

export interface Video {
  ageGating?: VideoAgeGating;
  contentDetails?: VideoContentDetails;
  etag?: string;
  fileDetails?: VideoFileDetails;
  id?: string;
  kind?: string;
  liveStreamingDetails?: VideoLiveStreamingDetails;
  localizations?: Record<string, VideoLocalization>;
  monetizationDetails?: VideoMonetizationDetails;
  paidProductPlacementDetails?: VideoPaidProductPlacementDetails;
  player?: VideoPlayer;
  processingDetails?: VideoProcessingDetails;
  projectDetails?: VideoProjectDetails;
  recordingDetails?: VideoRecordingDetails;
  snippet?: VideoSnippet;
  statistics?: VideoStatistics;
  status?: VideoStatus;
  suggestions?: VideoSuggestions;
  topicDetails?: VideoTopicDetails;
}

export interface VideoAbuseReport {
  comments?: string;
  language?: string;
  reasonId?: string;
  secondaryReasonId?: string;
  videoId?: string;
}

export interface VideoAbuseReportReason {
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: VideoAbuseReportReasonSnippet;
}

export interface VideoAbuseReportReasonListResponse {
  etag?: string;
  eventId?: string;
  items?: VideoAbuseReportReason[];
  kind?: string;
  visitorId?: string;
}

export interface VideoAbuseReportReasonSnippet {
  label?: string;
  secondaryReasons?: VideoAbuseReportSecondaryReason[];
}

export interface VideoAbuseReportSecondaryReason {
  id?: string;
  label?: string;
}

export interface VideoAgeGating {
  alcoholContent?: boolean;
  restricted?: boolean;
  videoGameRating?: "anyone" | "m15Plus" | "m16Plus" | "m17Plus";
}

export interface VideoCategory {
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: VideoCategorySnippet;
}

export interface VideoCategoryListResponse {
  etag?: string;
  eventId?: string;
  items?: VideoCategory[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  prevPageToken?: string;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface VideoCategorySnippet {
  assignable?: boolean;
  channelId?: string;
  title?: string;
}

export interface VideoContentDetails {
  caption?: "true" | "false";
  contentRating?: ContentRating;
  countryRestriction?: AccessPolicy;
  definition?: "sd" | "hd";
  dimension?: string;
  duration?: string;
  hasCustomThumbnail?: boolean;
  licensedContent?: boolean;
  projection?: "rectangular" | "360";
  regionRestriction?: VideoContentDetailsRegionRestriction;
}

export interface VideoContentDetailsRegionRestriction {
  allowed?: string[];
  blocked?: string[];
}

export interface VideoFileDetails {
  audioStreams?: VideoFileDetailsAudioStream[];
  bitrateBps?: string;
  container?: string;
  creationTime?: string;
  durationMs?: string;
  fileName?: string;
  fileSize?: string;
  fileType?: "video" | "audio" | "image" | "archive" | "document" | "project" | "other";
  videoStreams?: VideoFileDetailsVideoStream[];
}

export interface VideoFileDetailsAudioStream {
  bitrateBps?: string;
  channelCount?: number;
  codec?: string;
  vendor?: string;
}

export interface VideoFileDetailsVideoStream {
  aspectRatio?: number;
  bitrateBps?: string;
  codec?: string;
  frameRateFps?: number;
  heightPixels?: number;
  rotation?: "none" | "clockwise" | "upsideDown" | "counterClockwise" | "other";
  vendor?: string;
  widthPixels?: number;
}

export interface VideoGetRatingResponse {
  etag?: string;
  eventId?: string;
  items?: VideoRating[];
  kind?: string;
  visitorId?: string;
}

export interface VideoListResponse {
  etag?: string;
  eventId?: string;
  items?: Video[];
  kind?: string;
  nextPageToken?: string;
  pageInfo?: PageInfo;
  prevPageToken?: string;
  tokenPagination?: TokenPagination;
  visitorId?: string;
}

export interface VideoLiveStreamingDetails {
  activeLiveChatId?: string;
  actualEndTime?: string;
  actualStartTime?: string;
  concurrentViewers?: string;
  scheduledEndTime?: string;
  scheduledStartTime?: string;
}

export interface VideoLocalization {
  description?: string;
  title?: string;
}

export interface VideoMonetizationDetails {
  access?: AccessPolicy;
}

export interface VideoPaidProductPlacementDetails {
  hasPaidProductPlacement?: boolean;
}

export interface VideoPlayer {
  embedHeight?: string;
  embedHtml?: string;
  embedWidth?: string;
}

export interface VideoProcessingDetails {
  editorSuggestionsAvailability?: string;
  fileDetailsAvailability?: string;
  processingFailureReason?: "uploadFailed" | "transcodeFailed" | "streamingFailed" | "other";
  processingIssuesAvailability?: string;
  processingProgress?: VideoProcessingDetailsProcessingProgress;
  processingStatus?: "processing" | "succeeded" | "failed" | "terminated";
  tagSuggestionsAvailability?: string;
  thumbnailsAvailability?: string;
}

export interface VideoProcessingDetailsProcessingProgress {
  partsProcessed?: string;
  partsTotal?: string;
  timeLeftMs?: string;
}

export interface VideoProjectDetails {
}

export interface VideoRating {
  rating?: "none" | "like" | "dislike";
  videoId?: string;
}

export interface VideoRecordingDetails {
  location?: GeoPoint;
  locationDescription?: string;
  recordingDate?: string;
}

export interface VideoSnippet {
  categoryId?: string;
  channelId?: string;
  channelTitle?: string;
  defaultAudioLanguage?: string;
  defaultLanguage?: string;
  description?: string;
  liveBroadcastContent?: "none" | "upcoming" | "live" | "completed";
  localized?: VideoLocalization;
  publishedAt?: string;
  tags?: string[];
  thumbnails?: ThumbnailDetails;
  title?: string;
}

export interface VideoStatistics {
  commentCount?: string;
  dislikeCount?: string;
  favoriteCount?: string;
  likeCount?: string;
  viewCount?: string;
}

export interface VideoStatus {
  containsSyntheticMedia?: boolean;
  embeddable?: boolean;
  failureReason?: "conversion" | "invalidFile" | "emptyFile" | "tooSmall" | "codec" | "uploadAborted";
  license?: "youtube" | "creativeCommon";
  madeForKids?: boolean;
  privacyStatus?: "public" | "unlisted" | "private";
  publicStatsViewable?: boolean;
  publishAt?: string;
  rejectionReason?: "copyright" | "inappropriate" | "duplicate" | "termsOfUse" | "uploaderAccountSuspended" | "length" | "claim" | "uploaderAccountClosed" | "trademark" | "legal";
  selfDeclaredMadeForKids?: boolean;
  uploadStatus?: "uploaded" | "processed" | "failed" | "rejected" | "deleted";
}

export interface VideoSuggestions {
  editorSuggestions?: "videoAutoLevels" | "videoStabilize" | "videoCrop" | "audioQuietAudioSwap"[];
  processingErrors?: "audioFile" | "imageFile" | "projectFile" | "notAVideoFile" | "docFile" | "archiveFile" | "unsupportedSpatialAudioLayout"[];
  processingHints?: "nonStreamableMov" | "sendBestQualityVideo" | "sphericalVideo" | "spatialAudio" | "vrVideo" | "hdrVideo"[];
  processingWarnings?: "unknownContainer" | "unknownVideoCodec" | "unknownAudioCodec" | "inconsistentResolution" | "hasEditlist" | "problematicVideoCodec" | "problematicAudioCodec" | "unsupportedVrStereoMode" | "unsupportedSphericalProjectionType" | "unsupportedHdrPixelFormat" | "unsupportedHdrColorMetadata" | "problematicHdrLookupTable"[];
  tagSuggestions?: VideoSuggestionsTagSuggestion[];
}

export interface VideoSuggestionsTagSuggestion {
  categoryRestricts?: string[];
  tag?: string;
}

export interface VideoTopicDetails {
  relevantTopicIds?: string[];
  topicCategories?: string[];
  topicIds?: string[];
}

export interface VideoTrainability {
  etag?: string;
  kind?: string;
  permitted?: string[];
  videoId?: string;
}

export interface WatchSettings {
  backgroundColor?: string;
  featuredPlaylistId?: string;
  textColor?: string;
}

export interface YouTubeChannelsListParams {
  categoryId?: string;
  forHandle?: string;
  forUsername?: string;
  hl?: string;
  id?: string[];
  managedByMe?: boolean;
  maxResults?: number;
  mine?: boolean;
  mySubscribers?: boolean;
  onBehalfOfContentOwner?: string;
  pageToken?: string;
  part: string[];
}

export interface YouTubeChannelsUpdateParams {
  onBehalfOfContentOwner?: string;
  part: string[];
}

export interface YouTubeVideosListParams {
  chart?: "chartUnspecified" | "mostPopular";
  hl?: string;
  id?: string[];
  locale?: string;
  maxHeight?: number;
  maxResults?: number;
  maxWidth?: number;
  myRating?: "none" | "like" | "dislike";
  onBehalfOfContentOwner?: string;
  pageToken?: string;
  part: string[];
  regionCode?: string;
  videoCategoryId?: string;
}

export interface YouTubeVideosUpdateParams {
  onBehalfOfContentOwner?: string;
  part: string[];
}

export interface YouTubeVideosInsertParams {
  autoLevels?: boolean;
  notifySubscribers?: boolean;
  onBehalfOfContentOwner?: string;
  onBehalfOfContentOwnerChannel?: string;
  part: string[];
  stabilize?: boolean;
}

export interface YouTubeVideosReportAbuseParams {
  onBehalfOfContentOwner?: string;
}

export interface YouTubeVideosDeleteParams {
  id: string;
  onBehalfOfContentOwner?: string;
}

export interface YouTubeVideosRateParams {
  id: string;
  rating: "none" | "like" | "dislike";
}

export interface YouTubeVideosGetRatingParams {
  id: string[];
  onBehalfOfContentOwner?: string;
}

export interface YouTubePlaylistsInsertParams {
  onBehalfOfContentOwner?: string;
  onBehalfOfContentOwnerChannel?: string;
  part: string[];
}

export interface YouTubePlaylistsListParams {
  channelId?: string;
  hl?: string;
  id?: string[];
  maxResults?: number;
  mine?: boolean;
  onBehalfOfContentOwner?: string;
  onBehalfOfContentOwnerChannel?: string;
  pageToken?: string;
  part: string[];
}

export interface YouTubePlaylistsUpdateParams {
  onBehalfOfContentOwner?: string;
  part: string[];
}

export interface YouTubePlaylistsDeleteParams {
  id: string;
  onBehalfOfContentOwner?: string;
}

export interface YouTubePlaylistItemsDeleteParams {
  id: string;
  onBehalfOfContentOwner?: string;
}

export interface YouTubePlaylistItemsInsertParams {
  onBehalfOfContentOwner?: string;
  part: string[];
}

export interface YouTubePlaylistItemsListParams {
  id?: string[];
  maxResults?: number;
  onBehalfOfContentOwner?: string;
  pageToken?: string;
  part: string[];
  playlistId?: string;
  videoId?: string;
}

export interface YouTubePlaylistItemsUpdateParams {
  onBehalfOfContentOwner?: string;
  part: string[];
}

export interface YouTubeCommentsDeleteParams {
  id: string;
}

export interface YouTubeCommentsListParams {
  id?: string[];
  maxResults?: number;
  pageToken?: string;
  parentId?: string;
  part: string[];
  textFormat?: "textFormatUnspecified" | "html" | "plainText";
}

export interface YouTubeCommentsUpdateParams {
  part: string[];
}

export interface YouTubeCommentsSetModerationStatusParams {
  banAuthor?: boolean;
  id: string[];
  moderationStatus: "published" | "heldForReview" | "likelySpam" | "rejected";
}

export interface YouTubeCommentsInsertParams {
  part: string[];
}

export interface YouTubeCommentsMarkAsSpamParams {
  id: string[];
}

export interface YouTubeCommentThreadsInsertParams {
  part: string[];
}

export interface YouTubeCommentThreadsListParams {
  allThreadsRelatedToChannelId?: string;
  channelId?: string;
  id?: string[];
  maxResults?: number;
  moderationStatus?: "published" | "heldForReview" | "likelySpam" | "rejected";
  order?: "orderUnspecified" | "time" | "relevance";
  pageToken?: string;
  part: string[];
  postId?: string;
  searchTerms?: string;
  textFormat?: "textFormatUnspecified" | "html" | "plainText";
  videoId?: string;
}

export interface YouTubeCaptionsInsertParams {
  onBehalfOf?: string;
  onBehalfOfContentOwner?: string;
  part: string[];
  sync?: boolean;
}

export interface YouTubeCaptionsListParams {
  id?: string[];
  onBehalfOf?: string;
  onBehalfOfContentOwner?: string;
  part: string[];
  videoId: string;
}

export interface YouTubeCaptionsUpdateParams {
  onBehalfOf?: string;
  onBehalfOfContentOwner?: string;
  part: string[];
  sync?: boolean;
}

export interface YouTubeCaptionsDeleteParams {
  id: string;
  onBehalfOf?: string;
  onBehalfOfContentOwner?: string;
}

export interface YouTubeCaptionsDownloadParams {
  id: string;
  onBehalfOf?: string;
  onBehalfOfContentOwner?: string;
  tfmt?: string;
  tlang?: string;
}

export interface YouTubeThumbnailsSetParams {
  onBehalfOfContentOwner?: string;
  videoId: string;
}

export interface YouTubeSearchListParams {
  channelId?: string;
  channelType?: "channelTypeUnspecified" | "any" | "show";
  eventType?: "none" | "upcoming" | "live" | "completed";
  forContentOwner?: boolean;
  forDeveloper?: boolean;
  forMine?: boolean;
  location?: string;
  locationRadius?: string;
  maxResults?: number;
  onBehalfOfContentOwner?: string;
  order?: "searchSortUnspecified" | "date" | "rating" | "viewCount" | "relevance" | "title" | "videoCount";
  pageToken?: string;
  part: string[];
  publishedAfter?: string;
  publishedBefore?: string;
  q?: string;
  regionCode?: string;
  relevanceLanguage?: string;
  safeSearch?: "safeSearchSettingUnspecified" | "none" | "moderate" | "strict";
  topicId?: string;
  type?: string[];
  videoCaption?: "videoCaptionUnspecified" | "any" | "closedCaption" | "none";
  videoCategoryId?: string;
  videoDefinition?: "any" | "standard" | "high";
  videoDimension?: "any" | "2d" | "3d";
  videoDuration?: "videoDurationUnspecified" | "any" | "short" | "medium" | "long";
  videoEmbeddable?: "videoEmbeddableUnspecified" | "any" | "true";
  videoLicense?: "any" | "youtube" | "creativeCommon";
  videoPaidProductPlacement?: "videoPaidProductPlacementUnspecified" | "any" | "true";
  videoSyndicated?: "videoSyndicatedUnspecified" | "any" | "true";
  videoType?: "videoTypeUnspecified" | "any" | "movie" | "episode";
}

