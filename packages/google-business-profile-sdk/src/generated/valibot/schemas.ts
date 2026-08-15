// This file is generated. Do not edit by hand.
import * as v from "valibot";

/** Request message for AccessControl.AcceptInvitation. */
export type AccountManagementAcceptInvitationRequest = {

};
export const AccountManagementAcceptInvitationRequestSchema: v.GenericSchema<unknown, AccountManagementAcceptInvitationRequest> = v.looseObject({

});

/** An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325). */
export type AccountManagementAccount = {
  readonly accountName?: string;
  readonly accountNumber?: string;
  readonly name?: string;
  readonly organizationInfo?: AccountManagementOrganizationInfo;
  readonly permissionLevel?: "PERMISSION_LEVEL_UNSPECIFIED" | "OWNER_LEVEL" | "MEMBER_LEVEL";
  readonly primaryOwner?: string;
  readonly role?: "ACCOUNT_ROLE_UNSPECIFIED" | "PRIMARY_OWNER" | "OWNER" | "MANAGER" | "SITE_MANAGER";
  readonly type?: "ACCOUNT_TYPE_UNSPECIFIED" | "PERSONAL" | "LOCATION_GROUP" | "USER_GROUP" | "ORGANIZATION";
  readonly verificationState?: "VERIFICATION_STATE_UNSPECIFIED" | "VERIFIED" | "UNVERIFIED" | "VERIFICATION_REQUESTED";
  readonly vettedState?: "VETTED_STATE_UNSPECIFIED" | "NOT_VETTED" | "VETTED" | "INVALID";
};
export const AccountManagementAccountSchema: v.GenericSchema<unknown, AccountManagementAccount> = v.looseObject({
  accountName: v.optional(v.string()),
  accountNumber: v.optional(v.string()),
  name: v.optional(v.string()),
  organizationInfo: v.optional(v.lazy(() => AccountManagementOrganizationInfoSchema)),
  permissionLevel: v.optional(v.union([v.literal("PERMISSION_LEVEL_UNSPECIFIED"), v.literal("OWNER_LEVEL"), v.literal("MEMBER_LEVEL")])),
  primaryOwner: v.optional(v.string()),
  role: v.optional(v.union([v.literal("ACCOUNT_ROLE_UNSPECIFIED"), v.literal("PRIMARY_OWNER"), v.literal("OWNER"), v.literal("MANAGER"), v.literal("SITE_MANAGER")])),
  type: v.optional(v.union([v.literal("ACCOUNT_TYPE_UNSPECIFIED"), v.literal("PERSONAL"), v.literal("LOCATION_GROUP"), v.literal("USER_GROUP"), v.literal("ORGANIZATION")])),
  verificationState: v.optional(v.union([v.literal("VERIFICATION_STATE_UNSPECIFIED"), v.literal("VERIFIED"), v.literal("UNVERIFIED"), v.literal("VERIFICATION_REQUESTED")])),
  vettedState: v.optional(v.union([v.literal("VETTED_STATE_UNSPECIFIED"), v.literal("NOT_VETTED"), v.literal("VETTED"), v.literal("INVALID")])),
});

/** An administrator of an Account or a location. */
export type AccountManagementAdmin = {
  readonly account?: string;
  readonly admin?: string;
  readonly name?: string;
  readonly pendingInvitation?: boolean;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "PRIMARY_OWNER" | "OWNER" | "MANAGER" | "SITE_MANAGER";
};
export const AccountManagementAdminSchema: v.GenericSchema<unknown, AccountManagementAdmin> = v.looseObject({
  account: v.optional(v.string()),
  admin: v.optional(v.string()),
  name: v.optional(v.string()),
  pendingInvitation: v.optional(v.boolean()),
  role: v.optional(v.union([v.literal("ADMIN_ROLE_UNSPECIFIED"), v.literal("PRIMARY_OWNER"), v.literal("OWNER"), v.literal("MANAGER"), v.literal("SITE_MANAGER")])),
});

/** Request message for AccessControl.DeclineInvitation. */
export type AccountManagementDeclineInvitationRequest = {

};
export const AccountManagementDeclineInvitationRequestSchema: v.GenericSchema<unknown, AccountManagementDeclineInvitationRequest> = v.looseObject({

});

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
export type AccountManagementEmpty = {

};
export const AccountManagementEmptySchema: v.GenericSchema<unknown, AccountManagementEmpty> = v.looseObject({

});

/** Represents a pending invitation. */
export type AccountManagementInvitation = {
  readonly name?: string;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "PRIMARY_OWNER" | "OWNER" | "MANAGER" | "SITE_MANAGER";
  readonly targetAccount?: AccountManagementAccount;
  readonly targetLocation?: AccountManagementTargetLocation;
  readonly targetType?: "TARGET_TYPE_UNSPECIFIED" | "ACCOUNTS_ONLY" | "LOCATIONS_ONLY";
};
export const AccountManagementInvitationSchema: v.GenericSchema<unknown, AccountManagementInvitation> = v.looseObject({
  name: v.optional(v.string()),
  role: v.optional(v.union([v.literal("ADMIN_ROLE_UNSPECIFIED"), v.literal("PRIMARY_OWNER"), v.literal("OWNER"), v.literal("MANAGER"), v.literal("SITE_MANAGER")])),
  targetAccount: v.optional(v.lazy(() => AccountManagementAccountSchema)),
  targetLocation: v.optional(v.lazy(() => AccountManagementTargetLocationSchema)),
  targetType: v.optional(v.union([v.literal("TARGET_TYPE_UNSPECIFIED"), v.literal("ACCOUNTS_ONLY"), v.literal("LOCATIONS_ONLY")])),
});

/** Response message for AccessControl.ListAccountAdmins. */
export type AccountManagementListAccountAdminsResponse = {
  readonly accountAdmins?: ReadonlyArray<AccountManagementAdmin>;
};
export const AccountManagementListAccountAdminsResponseSchema: v.GenericSchema<unknown, AccountManagementListAccountAdminsResponse> = v.looseObject({
  accountAdmins: v.optional(v.array(v.lazy(() => AccountManagementAdminSchema))),
});

/** Response message for Accounts.ListAccounts. */
export type AccountManagementListAccountsResponse = {
  readonly accounts?: ReadonlyArray<AccountManagementAccount>;
  readonly nextPageToken?: string;
};
export const AccountManagementListAccountsResponseSchema: v.GenericSchema<unknown, AccountManagementListAccountsResponse> = v.looseObject({
  accounts: v.optional(v.array(v.lazy(() => AccountManagementAccountSchema))),
  nextPageToken: v.optional(v.string()),
});

/** Response message for AccessControl.ListInvitations. */
export type AccountManagementListInvitationsResponse = {
  readonly invitations?: ReadonlyArray<AccountManagementInvitation>;
};
export const AccountManagementListInvitationsResponseSchema: v.GenericSchema<unknown, AccountManagementListInvitationsResponse> = v.looseObject({
  invitations: v.optional(v.array(v.lazy(() => AccountManagementInvitationSchema))),
});

/** Response message for AccessControl.ListLocationAdmins. */
export type AccountManagementListLocationAdminsResponse = {
  readonly admins?: ReadonlyArray<AccountManagementAdmin>;
};
export const AccountManagementListLocationAdminsResponseSchema: v.GenericSchema<unknown, AccountManagementListLocationAdminsResponse> = v.looseObject({
  admins: v.optional(v.array(v.lazy(() => AccountManagementAdminSchema))),
});

/** Additional information stored for an organization. */
export type AccountManagementOrganizationInfo = {
  readonly address?: AccountManagementPostalAddress;
  readonly phoneNumber?: string;
  readonly registeredDomain?: string;
};
export const AccountManagementOrganizationInfoSchema: v.GenericSchema<unknown, AccountManagementOrganizationInfo> = v.looseObject({
  address: v.optional(v.lazy(() => AccountManagementPostalAddressSchema)),
  phoneNumber: v.optional(v.string()),
  registeredDomain: v.optional(v.string()),
});

/** Represents a postal address, such as for postal delivery or payments addresses. With a postal address, a postal service can deliver items to a premise, P.O. box, or similar. A postal address is not intended to model geographical locations like roads, towns, or mountains. In typical usage, an address would be created by user input or from importing existing data, depending on the type of process. Advice on address input or editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput. - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, see: https://support.google.com/business/answer/6397478. */
export type AccountManagementPostalAddress = {
  readonly addressLines?: ReadonlyArray<string>;
  readonly administrativeArea?: string;
  readonly languageCode?: string;
  readonly locality?: string;
  readonly organization?: string;
  readonly postalCode?: string;
  readonly recipients?: ReadonlyArray<string>;
  readonly regionCode?: string;
  readonly revision?: number;
  readonly sortingCode?: string;
  readonly sublocality?: string;
};
export const AccountManagementPostalAddressSchema: v.GenericSchema<unknown, AccountManagementPostalAddress> = v.looseObject({
  addressLines: v.optional(v.array(v.string())),
  administrativeArea: v.optional(v.string()),
  languageCode: v.optional(v.string()),
  locality: v.optional(v.string()),
  organization: v.optional(v.string()),
  postalCode: v.optional(v.string()),
  recipients: v.optional(v.array(v.string())),
  regionCode: v.optional(v.string()),
  revision: v.optional(v.pipe(v.number(), v.integer())),
  sortingCode: v.optional(v.string()),
  sublocality: v.optional(v.string()),
});

/** Represents a target location for a pending invitation. */
export type AccountManagementTargetLocation = {
  readonly address?: string;
  readonly locationName?: string;
  readonly placeId?: string;
};
export const AccountManagementTargetLocationSchema: v.GenericSchema<unknown, AccountManagementTargetLocation> = v.looseObject({
  address: v.optional(v.string()),
  locationName: v.optional(v.string()),
  placeId: v.optional(v.string()),
});

/** Request message for AccessControl.TransferLocation. */
export type AccountManagementTransferLocationRequest = {
  readonly destinationAccount?: string;
};
export const AccountManagementTransferLocationRequestSchema: v.GenericSchema<unknown, AccountManagementTransferLocationRequest> = v.looseObject({
  destinationAccount: v.optional(v.string()),
});

/** Additional information that is surfaced in AdWords. */
export type BusinessInformationAdWordsLocationExtensions = {
  readonly adPhone?: string;
};
export const BusinessInformationAdWordsLocationExtensionsSchema: v.GenericSchema<unknown, BusinessInformationAdWordsLocationExtensions> = v.looseObject({
  adPhone: v.optional(v.string()),
});

/** A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes. */
export type BusinessInformationAttribute = {
  readonly name?: string;
  readonly repeatedEnumValue?: BusinessInformationRepeatedEnumAttributeValue;
  readonly uriValues?: ReadonlyArray<BusinessInformationUriAttributeValue>;
  readonly values?: ReadonlyArray<unknown>;
  readonly valueType?: "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED" | "BOOL" | "ENUM" | "URL" | "REPEATED_ENUM";
};
export const BusinessInformationAttributeSchema: v.GenericSchema<unknown, BusinessInformationAttribute> = v.looseObject({
  name: v.optional(v.string()),
  repeatedEnumValue: v.optional(v.lazy(() => BusinessInformationRepeatedEnumAttributeValueSchema)),
  uriValues: v.optional(v.array(v.lazy(() => BusinessInformationUriAttributeValueSchema))),
  values: v.optional(v.array(v.unknown())),
  valueType: v.optional(v.union([v.literal("ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"), v.literal("BOOL"), v.literal("ENUM"), v.literal("URL"), v.literal("REPEATED_ENUM")])),
});

/** Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together. */
export type BusinessInformationAttributeMetadata = {
  readonly deprecated?: boolean;
  readonly displayName?: string;
  readonly groupDisplayName?: string;
  readonly parent?: string;
  readonly repeatable?: boolean;
  readonly valueMetadata?: ReadonlyArray<BusinessInformationAttributeValueMetadata>;
  readonly valueType?: "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED" | "BOOL" | "ENUM" | "URL" | "REPEATED_ENUM";
};
export const BusinessInformationAttributeMetadataSchema: v.GenericSchema<unknown, BusinessInformationAttributeMetadata> = v.looseObject({
  deprecated: v.optional(v.boolean()),
  displayName: v.optional(v.string()),
  groupDisplayName: v.optional(v.string()),
  parent: v.optional(v.string()),
  repeatable: v.optional(v.boolean()),
  valueMetadata: v.optional(v.array(v.lazy(() => BusinessInformationAttributeValueMetadataSchema))),
  valueType: v.optional(v.union([v.literal("ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"), v.literal("BOOL"), v.literal("ENUM"), v.literal("URL"), v.literal("REPEATED_ENUM")])),
});

/** A container for all the attributes for a given location. */
export type BusinessInformationAttributes = {
  readonly attributes?: ReadonlyArray<BusinessInformationAttribute>;
  readonly name?: string;
};
export const BusinessInformationAttributesSchema: v.GenericSchema<unknown, BusinessInformationAttributes> = v.looseObject({
  attributes: v.optional(v.array(v.lazy(() => BusinessInformationAttributeSchema))),
  name: v.optional(v.string()),
});

/** Metadata for supported attribute values. */
export type BusinessInformationAttributeValueMetadata = {
  readonly displayName?: string;
  readonly value?: unknown;
};
export const BusinessInformationAttributeValueMetadataSchema: v.GenericSchema<unknown, BusinessInformationAttributeValueMetadata> = v.looseObject({
  displayName: v.optional(v.string()),
  value: v.optional(v.unknown()),
});

/** Response message for BusinessCategories.BatchGetBusinessCategories. */
export type BusinessInformationBatchGetCategoriesResponse = {
  readonly categories?: ReadonlyArray<BusinessInformationCategory>;
};
export const BusinessInformationBatchGetCategoriesResponseSchema: v.GenericSchema<unknown, BusinessInformationBatchGetCategoriesResponse> = v.looseObject({
  categories: v.optional(v.array(v.lazy(() => BusinessInformationCategorySchema))),
});

/** Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances. */
export type BusinessInformationBusinessHours = {
  readonly periods?: ReadonlyArray<BusinessInformationTimePeriod>;
};
export const BusinessInformationBusinessHoursSchema: v.GenericSchema<unknown, BusinessInformationBusinessHours> = v.looseObject({
  periods: v.optional(v.array(v.lazy(() => BusinessInformationTimePeriodSchema))),
});

/** A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask. */
export type BusinessInformationCategories = {
  readonly additionalCategories?: ReadonlyArray<BusinessInformationCategory>;
  readonly primaryCategory?: BusinessInformationCategory;
};
export const BusinessInformationCategoriesSchema: v.GenericSchema<unknown, BusinessInformationCategories> = v.looseObject({
  additionalCategories: v.optional(v.array(v.lazy(() => BusinessInformationCategorySchema))),
  primaryCategory: v.optional(v.lazy(() => BusinessInformationCategorySchema)),
});

/** A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`. */
export type BusinessInformationCategory = {
  readonly displayName?: string;
  readonly moreHoursTypes?: ReadonlyArray<BusinessInformationMoreHoursType>;
  readonly name?: string;
  readonly serviceTypes?: ReadonlyArray<BusinessInformationServiceType>;
};
export const BusinessInformationCategorySchema: v.GenericSchema<unknown, BusinessInformationCategory> = v.looseObject({
  displayName: v.optional(v.string()),
  moreHoursTypes: v.optional(v.array(v.lazy(() => BusinessInformationMoreHoursTypeSchema))),
  name: v.optional(v.string()),
  serviceTypes: v.optional(v.array(v.lazy(() => BusinessInformationServiceTypeSchema))),
});

/** A chain is a brand that your business's locations can be affiliated with. */
export type BusinessInformationChain = {
  readonly chainNames?: ReadonlyArray<BusinessInformationChainName>;
  readonly locationCount?: number;
  readonly name?: string;
  readonly websites?: ReadonlyArray<BusinessInformationChainUri>;
};
export const BusinessInformationChainSchema: v.GenericSchema<unknown, BusinessInformationChain> = v.looseObject({
  chainNames: v.optional(v.array(v.lazy(() => BusinessInformationChainNameSchema))),
  locationCount: v.optional(v.pipe(v.number(), v.integer())),
  name: v.optional(v.string()),
  websites: v.optional(v.array(v.lazy(() => BusinessInformationChainUriSchema))),
});

/** Name to be used when displaying the chain. */
export type BusinessInformationChainName = {
  readonly displayName?: string;
  readonly languageCode?: string;
};
export const BusinessInformationChainNameSchema: v.GenericSchema<unknown, BusinessInformationChainName> = v.looseObject({
  displayName: v.optional(v.string()),
  languageCode: v.optional(v.string()),
});

/** Url to be used when displaying the chain. */
export type BusinessInformationChainUri = {
  readonly uri?: string;
};
export const BusinessInformationChainUriSchema: v.GenericSchema<unknown, BusinessInformationChainUri> = v.looseObject({
  uri: v.optional(v.string()),
});

/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
export type BusinessInformationDate = {
  readonly day?: number;
  readonly month?: number;
  readonly year?: number;
};
export const BusinessInformationDateSchema: v.GenericSchema<unknown, BusinessInformationDate> = v.looseObject({
  day: v.optional(v.pipe(v.number(), v.integer())),
  month: v.optional(v.pipe(v.number(), v.integer())),
  year: v.optional(v.pipe(v.number(), v.integer())),
});

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
export type BusinessInformationEmpty = {

};
export const BusinessInformationEmptySchema: v.GenericSchema<unknown, BusinessInformationEmpty> = v.looseObject({

});

/** Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for such services using a geomerchant surface. */
export type BusinessInformationFreeFormServiceItem = {
  readonly category?: string;
  readonly label?: BusinessInformationLabel;
};
export const BusinessInformationFreeFormServiceItemSchema: v.GenericSchema<unknown, BusinessInformationFreeFormServiceItem> = v.looseObject({
  category: v.optional(v.string()),
  label: v.optional(v.lazy(() => BusinessInformationLabelSchema)),
});

/** Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed. */
export type BusinessInformationGoogleLocation = {
  readonly location?: BusinessInformationLocation;
  readonly name?: string;
  readonly requestAdminRightsUri?: string;
};
export const BusinessInformationGoogleLocationSchema: v.GenericSchema<unknown, BusinessInformationGoogleLocation> = v.looseObject({
  location: v.optional(v.lazy(() => BusinessInformationLocationSchema)),
  name: v.optional(v.string()),
  requestAdminRightsUri: v.optional(v.string()),
});

/** Represents the view of a location as it appears to consumers, which includes updates that are currently serving on Google Maps and Search. */
export type BusinessInformationGoogleUpdatedLocation = {
  readonly diffMask?: string;
  readonly location?: BusinessInformationLocation;
  readonly pendingMask?: string;
};
export const BusinessInformationGoogleUpdatedLocationSchema: v.GenericSchema<unknown, BusinessInformationGoogleUpdatedLocation> = v.looseObject({
  diffMask: v.optional(v.string()),
  location: v.optional(v.lazy(() => BusinessInformationLocationSchema)),
  pendingMask: v.optional(v.string()),
});

/** Label to be used when displaying the price list, section, or item. */
export type BusinessInformationLabel = {
  readonly description?: string;
  readonly displayName?: string;
  readonly languageCode?: string;
};
export const BusinessInformationLabelSchema: v.GenericSchema<unknown, BusinessInformationLabel> = v.looseObject({
  description: v.optional(v.string()),
  displayName: v.optional(v.string()),
  languageCode: v.optional(v.string()),
});

/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
export type BusinessInformationLatLng = {
  readonly latitude?: number;
  readonly longitude?: number;
};
export const BusinessInformationLatLngSchema: v.GenericSchema<unknown, BusinessInformationLatLng> = v.looseObject({
  latitude: v.optional(v.number()),
  longitude: v.optional(v.number()),
});

/** Response for AttributesService.ListAttributeMetadata. */
export type BusinessInformationListAttributeMetadataResponse = {
  readonly attributeMetadata?: ReadonlyArray<BusinessInformationAttributeMetadata>;
  readonly nextPageToken?: string;
};
export const BusinessInformationListAttributeMetadataResponseSchema: v.GenericSchema<unknown, BusinessInformationListAttributeMetadataResponse> = v.looseObject({
  attributeMetadata: v.optional(v.array(v.lazy(() => BusinessInformationAttributeMetadataSchema))),
  nextPageToken: v.optional(v.string()),
});

/** Response message for BusinessCategories.ListCategories. */
export type BusinessInformationListCategoriesResponse = {
  readonly categories?: ReadonlyArray<BusinessInformationCategory>;
  readonly nextPageToken?: string;
};
export const BusinessInformationListCategoriesResponseSchema: v.GenericSchema<unknown, BusinessInformationListCategoriesResponse> = v.looseObject({
  categories: v.optional(v.array(v.lazy(() => BusinessInformationCategorySchema))),
  nextPageToken: v.optional(v.string()),
});

/** Response message for Locations.ListLocations. */
export type BusinessInformationListLocationsResponse = {
  readonly locations?: ReadonlyArray<BusinessInformationLocation>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
};
export const BusinessInformationListLocationsResponseSchema: v.GenericSchema<unknown, BusinessInformationListLocationsResponse> = v.looseObject({
  locations: v.optional(v.array(v.lazy(() => BusinessInformationLocationSchema))),
  nextPageToken: v.optional(v.string()),
  totalSize: v.optional(v.pipe(v.number(), v.integer())),
});

/** A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories. */
export type BusinessInformationLocation = {
  readonly adWordsLocationExtensions?: BusinessInformationAdWordsLocationExtensions;
  readonly categories?: BusinessInformationCategories;
  readonly labels?: ReadonlyArray<string>;
  readonly languageCode?: string;
  readonly latlng?: BusinessInformationLatLng;
  readonly metadata?: BusinessInformationMetadata;
  readonly moreHours?: ReadonlyArray<BusinessInformationMoreHours>;
  readonly name?: string;
  readonly openInfo?: BusinessInformationOpenInfo;
  readonly phoneNumbers?: BusinessInformationPhoneNumbers;
  readonly profile?: BusinessInformationProfile;
  readonly regularHours?: BusinessInformationBusinessHours;
  readonly relationshipData?: BusinessInformationRelationshipData;
  readonly serviceArea?: BusinessInformationServiceAreaBusiness;
  readonly serviceItems?: ReadonlyArray<BusinessInformationServiceItem>;
  readonly specialHours?: BusinessInformationSpecialHours;
  readonly storeCode?: string;
  readonly storefrontAddress?: BusinessInformationPostalAddress;
  readonly title?: string;
  readonly websiteUri?: string;
};
export const BusinessInformationLocationSchema: v.GenericSchema<unknown, BusinessInformationLocation> = v.looseObject({
  adWordsLocationExtensions: v.optional(v.lazy(() => BusinessInformationAdWordsLocationExtensionsSchema)),
  categories: v.optional(v.lazy(() => BusinessInformationCategoriesSchema)),
  labels: v.optional(v.array(v.string())),
  languageCode: v.optional(v.string()),
  latlng: v.optional(v.lazy(() => BusinessInformationLatLngSchema)),
  metadata: v.optional(v.lazy(() => BusinessInformationMetadataSchema)),
  moreHours: v.optional(v.array(v.lazy(() => BusinessInformationMoreHoursSchema))),
  name: v.optional(v.string()),
  openInfo: v.optional(v.lazy(() => BusinessInformationOpenInfoSchema)),
  phoneNumbers: v.optional(v.lazy(() => BusinessInformationPhoneNumbersSchema)),
  profile: v.optional(v.lazy(() => BusinessInformationProfileSchema)),
  regularHours: v.optional(v.lazy(() => BusinessInformationBusinessHoursSchema)),
  relationshipData: v.optional(v.lazy(() => BusinessInformationRelationshipDataSchema)),
  serviceArea: v.optional(v.lazy(() => BusinessInformationServiceAreaBusinessSchema)),
  serviceItems: v.optional(v.array(v.lazy(() => BusinessInformationServiceItemSchema))),
  specialHours: v.optional(v.lazy(() => BusinessInformationSpecialHoursSchema)),
  storeCode: v.optional(v.string()),
  storefrontAddress: v.optional(v.lazy(() => BusinessInformationPostalAddressSchema)),
  title: v.optional(v.string()),
  websiteUri: v.optional(v.string()),
});

/** Additional non-user-editable information about the location. */
export type BusinessInformationMetadata = {
  readonly canDelete?: boolean;
  readonly canHaveBusinessCalls?: boolean;
  readonly canHaveFoodMenus?: boolean;
  readonly canModifyServiceList?: boolean;
  readonly canOperateHealthData?: boolean;
  readonly canOperateLocalPost?: boolean;
  readonly canOperateLodgingData?: boolean;
  readonly duplicateLocation?: string;
  readonly hasGoogleUpdated?: boolean;
  readonly hasPendingEdits?: boolean;
  readonly hasVoiceOfMerchant?: boolean;
  readonly isParticularlyPersonalPlace?: boolean;
  readonly mapsUri?: string;
  readonly newReviewUri?: string;
  readonly placeId?: string;
};
export const BusinessInformationMetadataSchema: v.GenericSchema<unknown, BusinessInformationMetadata> = v.looseObject({
  canDelete: v.optional(v.boolean()),
  canHaveBusinessCalls: v.optional(v.boolean()),
  canHaveFoodMenus: v.optional(v.boolean()),
  canModifyServiceList: v.optional(v.boolean()),
  canOperateHealthData: v.optional(v.boolean()),
  canOperateLocalPost: v.optional(v.boolean()),
  canOperateLodgingData: v.optional(v.boolean()),
  duplicateLocation: v.optional(v.string()),
  hasGoogleUpdated: v.optional(v.boolean()),
  hasPendingEdits: v.optional(v.boolean()),
  hasVoiceOfMerchant: v.optional(v.boolean()),
  isParticularlyPersonalPlace: v.optional(v.boolean()),
  mapsUri: v.optional(v.string()),
  newReviewUri: v.optional(v.string()),
  placeId: v.optional(v.string()),
});

/** Represents an amount of money with its currency type. */
export type BusinessInformationMoney = {
  readonly currencyCode?: string;
  readonly nanos?: number;
  readonly units?: string;
};
export const BusinessInformationMoneySchema: v.GenericSchema<unknown, BusinessInformationMoney> = v.looseObject({
  currencyCode: v.optional(v.string()),
  nanos: v.optional(v.pipe(v.number(), v.integer())),
  units: v.optional(v.string()),
});

/** The time periods during which a location is open for certain types of business. */
export type BusinessInformationMoreHours = {
  readonly hoursTypeId?: string;
  readonly periods?: ReadonlyArray<BusinessInformationTimePeriod>;
};
export const BusinessInformationMoreHoursSchema: v.GenericSchema<unknown, BusinessInformationMoreHours> = v.looseObject({
  hoursTypeId: v.optional(v.string()),
  periods: v.optional(v.array(v.lazy(() => BusinessInformationTimePeriodSchema))),
});

/** More hours types that a business can offers, in addition to its regular hours. */
export type BusinessInformationMoreHoursType = {
  readonly displayName?: string;
  readonly hoursTypeId?: string;
  readonly localizedDisplayName?: string;
};
export const BusinessInformationMoreHoursTypeSchema: v.GenericSchema<unknown, BusinessInformationMoreHoursType> = v.looseObject({
  displayName: v.optional(v.string()),
  hoursTypeId: v.optional(v.string()),
  localizedDisplayName: v.optional(v.string()),
});

/** Information related to the opening state of the business. */
export type BusinessInformationOpenInfo = {
  readonly canReopen?: boolean;
  readonly openingDate?: BusinessInformationDate;
  readonly status?: "OPEN_FOR_BUSINESS_UNSPECIFIED" | "OPEN" | "CLOSED_PERMANENTLY" | "CLOSED_TEMPORARILY";
};
export const BusinessInformationOpenInfoSchema: v.GenericSchema<unknown, BusinessInformationOpenInfo> = v.looseObject({
  canReopen: v.optional(v.boolean()),
  openingDate: v.optional(v.lazy(() => BusinessInformationDateSchema)),
  status: v.optional(v.union([v.literal("OPEN_FOR_BUSINESS_UNSPECIFIED"), v.literal("OPEN"), v.literal("CLOSED_PERMANENTLY"), v.literal("CLOSED_TEMPORARILY")])),
});

/** A collection of phone numbers for the business. During updates, both fields must be set. Clients may not update just the primary or additional phone numbers using the update mask. International phone format is preferred, such as "+1 415 555 0132", see more in (https://developers.google.com/style/phone-numbers#international-phone-numbers). */
export type BusinessInformationPhoneNumbers = {
  readonly additionalPhones?: ReadonlyArray<string>;
  readonly primaryPhone?: string;
};
export const BusinessInformationPhoneNumbersSchema: v.GenericSchema<unknown, BusinessInformationPhoneNumbers> = v.looseObject({
  additionalPhones: v.optional(v.array(v.string())),
  primaryPhone: v.optional(v.string()),
});

/** Defines an area that's represented by a place ID. */
export type BusinessInformationPlaceInfo = {
  readonly placeId?: string;
  readonly placeName?: string;
};
export const BusinessInformationPlaceInfoSchema: v.GenericSchema<unknown, BusinessInformationPlaceInfo> = v.looseObject({
  placeId: v.optional(v.string()),
  placeName: v.optional(v.string()),
});

/** Defines the union of areas represented by a set of places. */
export type BusinessInformationPlaces = {
  readonly placeInfos?: ReadonlyArray<BusinessInformationPlaceInfo>;
};
export const BusinessInformationPlacesSchema: v.GenericSchema<unknown, BusinessInformationPlaces> = v.looseObject({
  placeInfos: v.optional(v.array(v.lazy(() => BusinessInformationPlaceInfoSchema))),
});

/** Represents a postal address, such as for postal delivery or payments addresses. With a postal address, a postal service can deliver items to a premise, P.O. box, or similar. A postal address is not intended to model geographical locations like roads, towns, or mountains. In typical usage, an address would be created by user input or from importing existing data, depending on the type of process. Advice on address input or editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput. - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, see: https://support.google.com/business/answer/6397478. */
export type BusinessInformationPostalAddress = {
  readonly addressLines?: ReadonlyArray<string>;
  readonly administrativeArea?: string;
  readonly languageCode?: string;
  readonly locality?: string;
  readonly organization?: string;
  readonly postalCode?: string;
  readonly recipients?: ReadonlyArray<string>;
  readonly regionCode?: string;
  readonly revision?: number;
  readonly sortingCode?: string;
  readonly sublocality?: string;
};
export const BusinessInformationPostalAddressSchema: v.GenericSchema<unknown, BusinessInformationPostalAddress> = v.looseObject({
  addressLines: v.optional(v.array(v.string())),
  administrativeArea: v.optional(v.string()),
  languageCode: v.optional(v.string()),
  locality: v.optional(v.string()),
  organization: v.optional(v.string()),
  postalCode: v.optional(v.string()),
  recipients: v.optional(v.array(v.string())),
  regionCode: v.optional(v.string()),
  revision: v.optional(v.pipe(v.number(), v.integer())),
  sortingCode: v.optional(v.string()),
  sublocality: v.optional(v.string()),
});

/** All information pertaining to the location's profile. */
export type BusinessInformationProfile = {
  readonly description?: string;
};
export const BusinessInformationProfileSchema: v.GenericSchema<unknown, BusinessInformationProfile> = v.looseObject({
  description: v.optional(v.string()),
});

/** Information of all parent and children locations related to this one. */
export type BusinessInformationRelationshipData = {
  readonly childrenLocations?: ReadonlyArray<BusinessInformationRelevantLocation>;
  readonly parentChain?: string;
  readonly parentLocation?: BusinessInformationRelevantLocation;
};
export const BusinessInformationRelationshipDataSchema: v.GenericSchema<unknown, BusinessInformationRelationshipData> = v.looseObject({
  childrenLocations: v.optional(v.array(v.lazy(() => BusinessInformationRelevantLocationSchema))),
  parentChain: v.optional(v.string()),
  parentLocation: v.optional(v.lazy(() => BusinessInformationRelevantLocationSchema)),
});

/** Information about another location that is related to current one. The relation can be any one of DEPARTMENT_OF or INDEPENDENT_ESTABLISHMENT_OF, and the location specified here can be on either side (parent/child) of the location. */
export type BusinessInformationRelevantLocation = {
  readonly placeId?: string;
  readonly relationType?: "RELATION_TYPE_UNSPECIFIED" | "DEPARTMENT_OF" | "INDEPENDENT_ESTABLISHMENT_IN";
};
export const BusinessInformationRelevantLocationSchema: v.GenericSchema<unknown, BusinessInformationRelevantLocation> = v.looseObject({
  placeId: v.optional(v.string()),
  relationType: v.optional(v.union([v.literal("RELATION_TYPE_UNSPECIFIED"), v.literal("DEPARTMENT_OF"), v.literal("INDEPENDENT_ESTABLISHMENT_IN")])),
});

/** Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified. */
export type BusinessInformationRepeatedEnumAttributeValue = {
  readonly setValues?: ReadonlyArray<string>;
  readonly unsetValues?: ReadonlyArray<string>;
};
export const BusinessInformationRepeatedEnumAttributeValueSchema: v.GenericSchema<unknown, BusinessInformationRepeatedEnumAttributeValue> = v.looseObject({
  setValues: v.optional(v.array(v.string())),
  unsetValues: v.optional(v.array(v.string())),
});

/** Response message for Locations.SearchChains. */
export type BusinessInformationSearchChainsResponse = {
  readonly chains?: ReadonlyArray<BusinessInformationChain>;
};
export const BusinessInformationSearchChainsResponseSchema: v.GenericSchema<unknown, BusinessInformationSearchChainsResponse> = v.looseObject({
  chains: v.optional(v.array(v.lazy(() => BusinessInformationChainSchema))),
});

/** Request message for GoogleLocations.SearchGoogleLocations. */
export type BusinessInformationSearchGoogleLocationsRequest = {
  readonly location?: BusinessInformationLocation;
  readonly pageSize?: number;
  readonly query?: string;
};
export const BusinessInformationSearchGoogleLocationsRequestSchema: v.GenericSchema<unknown, BusinessInformationSearchGoogleLocationsRequest> = v.looseObject({
  location: v.optional(v.lazy(() => BusinessInformationLocationSchema)),
  pageSize: v.optional(v.pipe(v.number(), v.integer())),
  query: v.optional(v.string()),
});

/** Response message for GoogleLocations.SearchGoogleLocations. */
export type BusinessInformationSearchGoogleLocationsResponse = {
  readonly googleLocations?: ReadonlyArray<BusinessInformationGoogleLocation>;
};
export const BusinessInformationSearchGoogleLocationsResponseSchema: v.GenericSchema<unknown, BusinessInformationSearchGoogleLocationsResponse> = v.looseObject({
  googleLocations: v.optional(v.array(v.lazy(() => BusinessInformationGoogleLocationSchema))),
});

/** Service area businesses provide their service at the customer's location (for example, a locksmith or plumber). */
export type BusinessInformationServiceAreaBusiness = {
  readonly businessType?: "BUSINESS_TYPE_UNSPECIFIED" | "CUSTOMER_LOCATION_ONLY" | "CUSTOMER_AND_BUSINESS_LOCATION";
  readonly places?: BusinessInformationPlaces;
  readonly regionCode?: string;
};
export const BusinessInformationServiceAreaBusinessSchema: v.GenericSchema<unknown, BusinessInformationServiceAreaBusiness> = v.looseObject({
  businessType: v.optional(v.union([v.literal("BUSINESS_TYPE_UNSPECIFIED"), v.literal("CUSTOMER_LOCATION_ONLY"), v.literal("CUSTOMER_AND_BUSINESS_LOCATION")])),
  places: v.optional(v.lazy(() => BusinessInformationPlacesSchema)),
  regionCode: v.optional(v.string()),
});

/** A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service. */
export type BusinessInformationServiceItem = {
  readonly freeFormServiceItem?: BusinessInformationFreeFormServiceItem;
  readonly price?: BusinessInformationMoney;
  readonly structuredServiceItem?: BusinessInformationStructuredServiceItem;
};
export const BusinessInformationServiceItemSchema: v.GenericSchema<unknown, BusinessInformationServiceItem> = v.looseObject({
  freeFormServiceItem: v.optional(v.lazy(() => BusinessInformationFreeFormServiceItemSchema)),
  price: v.optional(v.lazy(() => BusinessInformationMoneySchema)),
  structuredServiceItem: v.optional(v.lazy(() => BusinessInformationStructuredServiceItemSchema)),
});

/** A message describing a service type that the business offers. */
export type BusinessInformationServiceType = {
  readonly displayName?: string;
  readonly serviceTypeId?: string;
};
export const BusinessInformationServiceTypeSchema: v.GenericSchema<unknown, BusinessInformationServiceType> = v.looseObject({
  displayName: v.optional(v.string()),
  serviceTypeId: v.optional(v.string()),
});

/** Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00 */
export type BusinessInformationSpecialHourPeriod = {
  readonly closed?: boolean;
  readonly closeTime?: BusinessInformationTimeOfDay;
  readonly endDate?: BusinessInformationDate;
  readonly openTime?: BusinessInformationTimeOfDay;
  readonly startDate?: BusinessInformationDate;
};
export const BusinessInformationSpecialHourPeriodSchema: v.GenericSchema<unknown, BusinessInformationSpecialHourPeriod> = v.looseObject({
  closed: v.optional(v.boolean()),
  closeTime: v.optional(v.lazy(() => BusinessInformationTimeOfDaySchema)),
  endDate: v.optional(v.lazy(() => BusinessInformationDateSchema)),
  openTime: v.optional(v.lazy(() => BusinessInformationTimeOfDaySchema)),
  startDate: v.optional(v.lazy(() => BusinessInformationDateSchema)),
});

/** Represents a set of time periods when a location's operational hours differ from its normal business hours. */
export type BusinessInformationSpecialHours = {
  readonly specialHourPeriods?: ReadonlyArray<BusinessInformationSpecialHourPeriod>;
};
export const BusinessInformationSpecialHoursSchema: v.GenericSchema<unknown, BusinessInformationSpecialHours> = v.looseObject({
  specialHourPeriods: v.optional(v.array(v.lazy(() => BusinessInformationSpecialHourPeriodSchema))),
});

/** Represents a structured service offered by the merchant. For eg: toilet_installation. */
export type BusinessInformationStructuredServiceItem = {
  readonly description?: string;
  readonly serviceTypeId?: string;
};
export const BusinessInformationStructuredServiceItemSchema: v.GenericSchema<unknown, BusinessInformationStructuredServiceItem> = v.looseObject({
  description: v.optional(v.string()),
  serviceTypeId: v.optional(v.string()),
});

/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
export type BusinessInformationTimeOfDay = {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
};
export const BusinessInformationTimeOfDaySchema: v.GenericSchema<unknown, BusinessInformationTimeOfDay> = v.looseObject({
  hours: v.optional(v.pipe(v.number(), v.integer())),
  minutes: v.optional(v.pipe(v.number(), v.integer())),
  nanos: v.optional(v.pipe(v.number(), v.integer())),
  seconds: v.optional(v.pipe(v.number(), v.integer())),
});

/** Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day. */
export type BusinessInformationTimePeriod = {
  readonly closeDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly closeTime?: BusinessInformationTimeOfDay;
  readonly openDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly openTime?: BusinessInformationTimeOfDay;
};
export const BusinessInformationTimePeriodSchema: v.GenericSchema<unknown, BusinessInformationTimePeriod> = v.looseObject({
  closeDay: v.optional(v.union([v.literal("DAY_OF_WEEK_UNSPECIFIED"), v.literal("MONDAY"), v.literal("TUESDAY"), v.literal("WEDNESDAY"), v.literal("THURSDAY"), v.literal("FRIDAY"), v.literal("SATURDAY"), v.literal("SUNDAY")])),
  closeTime: v.optional(v.lazy(() => BusinessInformationTimeOfDaySchema)),
  openDay: v.optional(v.union([v.literal("DAY_OF_WEEK_UNSPECIFIED"), v.literal("MONDAY"), v.literal("TUESDAY"), v.literal("WEDNESDAY"), v.literal("THURSDAY"), v.literal("FRIDAY"), v.literal("SATURDAY"), v.literal("SUNDAY")])),
  openTime: v.optional(v.lazy(() => BusinessInformationTimeOfDaySchema)),
});

/** Values for an attribute with a `value_type` of URL. */
export type BusinessInformationUriAttributeValue = {
  readonly uri?: string;
};
export const BusinessInformationUriAttributeValueSchema: v.GenericSchema<unknown, BusinessInformationUriAttributeValue> = v.looseObject({
  uri: v.optional(v.string()),
});

/** Request message for AccessControl.AcceptInvitation. */
export type LegacyV4AcceptInvitationRequest = {

};
export const LegacyV4AcceptInvitationRequestSchema: v.GenericSchema<unknown, LegacyV4AcceptInvitationRequest> = v.looseObject({

});

/** Physical adaptations made to the property in consideration of varying levels of human physical ability. */
export type LegacyV4Accessibility = {
  readonly mobilityAccessible?: boolean;
  readonly mobilityAccessibleElevator?: boolean;
  readonly mobilityAccessibleElevatorException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleParking?: boolean;
  readonly mobilityAccessibleParkingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessiblePool?: boolean;
  readonly mobilityAccessiblePoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4AccessibilitySchema: v.GenericSchema<unknown, LegacyV4Accessibility> = v.looseObject({
  mobilityAccessible: v.optional(v.boolean()),
  mobilityAccessibleElevator: v.optional(v.boolean()),
  mobilityAccessibleElevatorException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobilityAccessibleException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobilityAccessibleParking: v.optional(v.boolean()),
  mobilityAccessibleParkingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobilityAccessiblePool: v.optional(v.boolean()),
  mobilityAccessiblePoolException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** An account is a container for your business's locations. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325). */
export type LegacyV4Account = {
  readonly accountName?: string;
  readonly accountNumber?: string;
  readonly name?: string;
  readonly organizationInfo?: LegacyV4OrganizationInfo;
  readonly permissionLevel?: "PERMISSION_LEVEL_UNSPECIFIED" | "OWNER_LEVEL" | "MEMBER_LEVEL";
  readonly role?: "ACCOUNT_ROLE_UNSPECIFIED" | "OWNER" | "CO_OWNER" | "MANAGER" | "COMMUNITY_MANAGER";
  readonly state?: LegacyV4AccountState;
  readonly type?: "ACCOUNT_TYPE_UNSPECIFIED" | "PERSONAL" | "LOCATION_GROUP" | "USER_GROUP" | "ORGANIZATION";
};
export const LegacyV4AccountSchema: v.GenericSchema<unknown, LegacyV4Account> = v.looseObject({
  accountName: v.optional(v.string()),
  accountNumber: v.optional(v.string()),
  name: v.optional(v.string()),
  organizationInfo: v.optional(v.lazy(() => LegacyV4OrganizationInfoSchema)),
  permissionLevel: v.optional(v.union([v.literal("PERMISSION_LEVEL_UNSPECIFIED"), v.literal("OWNER_LEVEL"), v.literal("MEMBER_LEVEL")])),
  role: v.optional(v.union([v.literal("ACCOUNT_ROLE_UNSPECIFIED"), v.literal("OWNER"), v.literal("CO_OWNER"), v.literal("MANAGER"), v.literal("COMMUNITY_MANAGER")])),
  state: v.optional(v.lazy(() => LegacyV4AccountStateSchema)),
  type: v.optional(v.union([v.literal("ACCOUNT_TYPE_UNSPECIFIED"), v.literal("PERSONAL"), v.literal("LOCATION_GROUP"), v.literal("USER_GROUP"), v.literal("ORGANIZATION")])),
});

/** Indicates status of the account, such as whether the account has been verified by Google. */
export type LegacyV4AccountState = {
  readonly status?: "ACCOUNT_STATUS_UNSPECIFIED" | "VERIFIED" | "UNVERIFIED" | "VERIFICATION_REQUESTED";
};
export const LegacyV4AccountStateSchema: v.GenericSchema<unknown, LegacyV4AccountState> = v.looseObject({
  status: v.optional(v.union([v.literal("ACCOUNT_STATUS_UNSPECIFIED"), v.literal("VERIFIED"), v.literal("UNVERIFIED"), v.literal("VERIFICATION_REQUESTED")])),
});

/** Amenities and features related to leisure and play. */
export type LegacyV4Activities = {
  readonly beachAccess?: boolean;
  readonly beachAccessException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly beachFront?: boolean;
  readonly beachFrontException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly bicycleRental?: boolean;
  readonly bicycleRentalException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly boutiqueStores?: boolean;
  readonly boutiqueStoresException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly casino?: boolean;
  readonly casinoException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeBicycleRental?: boolean;
  readonly freeBicycleRentalException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeWatercraftRental?: boolean;
  readonly freeWatercraftRentalException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly gameRoom?: boolean;
  readonly gameRoomException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly golf?: boolean;
  readonly golfException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly horsebackRiding?: boolean;
  readonly horsebackRidingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly nightclub?: boolean;
  readonly nightclubException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly privateBeach?: boolean;
  readonly privateBeachException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly scuba?: boolean;
  readonly scubaException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly snorkeling?: boolean;
  readonly snorkelingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly tennis?: boolean;
  readonly tennisException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly watercraftRental?: boolean;
  readonly watercraftRentalException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly waterSkiing?: boolean;
  readonly waterSkiingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4ActivitiesSchema: v.GenericSchema<unknown, LegacyV4Activities> = v.looseObject({
  beachAccess: v.optional(v.boolean()),
  beachAccessException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  beachFront: v.optional(v.boolean()),
  beachFrontException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  bicycleRental: v.optional(v.boolean()),
  bicycleRentalException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  boutiqueStores: v.optional(v.boolean()),
  boutiqueStoresException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  casino: v.optional(v.boolean()),
  casinoException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeBicycleRental: v.optional(v.boolean()),
  freeBicycleRentalException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeWatercraftRental: v.optional(v.boolean()),
  freeWatercraftRentalException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  gameRoom: v.optional(v.boolean()),
  gameRoomException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  golf: v.optional(v.boolean()),
  golfException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  horsebackRiding: v.optional(v.boolean()),
  horsebackRidingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  nightclub: v.optional(v.boolean()),
  nightclubException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  privateBeach: v.optional(v.boolean()),
  privateBeachException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  scuba: v.optional(v.boolean()),
  scubaException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  snorkeling: v.optional(v.boolean()),
  snorkelingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  tennis: v.optional(v.boolean()),
  tennisException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  watercraftRental: v.optional(v.boolean()),
  watercraftRentalException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  waterSkiing: v.optional(v.boolean()),
  waterSkiingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Input for ADDRESS verification. */
export type LegacyV4AddressInput = {
  readonly mailerContactName?: string;
};
export const LegacyV4AddressInputSchema: v.GenericSchema<unknown, LegacyV4AddressInput> = v.looseObject({
  mailerContactName: v.optional(v.string()),
});

/** Display data for verifications through postcard. */
export type LegacyV4AddressVerificationData = {
  readonly address?: LegacyV4PostalAddress;
  readonly businessName?: string;
};
export const LegacyV4AddressVerificationDataSchema: v.GenericSchema<unknown, LegacyV4AddressVerificationData> = v.looseObject({
  address: v.optional(v.lazy(() => LegacyV4PostalAddressSchema)),
  businessName: v.optional(v.string()),
});

/** An administrator of an Account or a Location. */
export type LegacyV4Admin = {
  readonly adminName?: string;
  readonly name?: string;
  readonly pendingInvitation?: boolean;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "OWNER" | "CO_OWNER" | "MANAGER" | "COMMUNITY_MANAGER";
};
export const LegacyV4AdminSchema: v.GenericSchema<unknown, LegacyV4Admin> = v.looseObject({
  adminName: v.optional(v.string()),
  name: v.optional(v.string()),
  pendingInvitation: v.optional(v.boolean()),
  role: v.optional(v.union([v.literal("ADMIN_ROLE_UNSPECIFIED"), v.literal("OWNER"), v.literal("CO_OWNER"), v.literal("MANAGER"), v.literal("COMMUNITY_MANAGER")])),
});

/** Additional information that is surfaced in AdWords. */
export type LegacyV4AdWordsLocationExtensions = {
  readonly adPhone?: string;
};
export const LegacyV4AdWordsLocationExtensionsSchema: v.GenericSchema<unknown, LegacyV4AdWordsLocationExtensions> = v.looseObject({
  adPhone: v.optional(v.string()),
});

/** Represents an answer to a question */
export type LegacyV4Answer = {
  readonly author?: LegacyV4Author;
  readonly createTime?: string;
  readonly name?: string;
  readonly text?: string;
  readonly updateTime?: string;
  readonly upvoteCount?: number;
};
export const LegacyV4AnswerSchema: v.GenericSchema<unknown, LegacyV4Answer> = v.looseObject({
  author: v.optional(v.lazy(() => LegacyV4AuthorSchema)),
  createTime: v.optional(v.string()),
  name: v.optional(v.string()),
  text: v.optional(v.string()),
  updateTime: v.optional(v.string()),
  upvoteCount: v.optional(v.pipe(v.number(), v.integer())),
});

/** Request message for Locations.AssociateLocationRequest. */
export type LegacyV4AssociateLocationRequest = {
  readonly placeId?: string;
};
export const LegacyV4AssociateLocationRequestSchema: v.GenericSchema<unknown, LegacyV4AssociateLocationRequest> = v.looseObject({
  placeId: v.optional(v.string()),
});

/** A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes. */
export type LegacyV4Attribute = {
  readonly attributeId?: string;
  readonly repeatedEnumValue?: LegacyV4RepeatedEnumAttributeValue;
  readonly urlValues?: ReadonlyArray<LegacyV4UrlAttributeValue>;
  readonly values?: ReadonlyArray<unknown>;
  readonly valueType?: "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED" | "BOOL" | "ENUM" | "URL" | "REPEATED_ENUM";
};
export const LegacyV4AttributeSchema: v.GenericSchema<unknown, LegacyV4Attribute> = v.looseObject({
  attributeId: v.optional(v.string()),
  repeatedEnumValue: v.optional(v.lazy(() => LegacyV4RepeatedEnumAttributeValueSchema)),
  urlValues: v.optional(v.array(v.lazy(() => LegacyV4UrlAttributeValueSchema))),
  values: v.optional(v.array(v.unknown())),
  valueType: v.optional(v.union([v.literal("ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"), v.literal("BOOL"), v.literal("ENUM"), v.literal("URL"), v.literal("REPEATED_ENUM")])),
});

/** Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together. */
export type LegacyV4AttributeMetadata = {
  readonly attributeId?: string;
  readonly displayName?: string;
  readonly groupDisplayName?: string;
  readonly isDeprecated?: boolean;
  readonly isRepeatable?: boolean;
  readonly valueMetadata?: ReadonlyArray<LegacyV4AttributeValueMetadata>;
  readonly valueType?: "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED" | "BOOL" | "ENUM" | "URL" | "REPEATED_ENUM";
};
export const LegacyV4AttributeMetadataSchema: v.GenericSchema<unknown, LegacyV4AttributeMetadata> = v.looseObject({
  attributeId: v.optional(v.string()),
  displayName: v.optional(v.string()),
  groupDisplayName: v.optional(v.string()),
  isDeprecated: v.optional(v.boolean()),
  isRepeatable: v.optional(v.boolean()),
  valueMetadata: v.optional(v.array(v.lazy(() => LegacyV4AttributeValueMetadataSchema))),
  valueType: v.optional(v.union([v.literal("ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"), v.literal("BOOL"), v.literal("ENUM"), v.literal("URL"), v.literal("REPEATED_ENUM")])),
});

/** Metadata for supported attribute values. */
export type LegacyV4AttributeValueMetadata = {
  readonly displayName?: string;
  readonly value?: unknown;
};
export const LegacyV4AttributeValueMetadataSchema: v.GenericSchema<unknown, LegacyV4AttributeValueMetadata> = v.looseObject({
  displayName: v.optional(v.string()),
  value: v.optional(v.unknown()),
});

/** Attribution information for customer media items, such as the contributor's name and profile picture. */
export type LegacyV4Attribution = {
  readonly profileName?: string;
  readonly profilePhotoUrl?: string;
  readonly profileUrl?: string;
  readonly takedownUrl?: string;
};
export const LegacyV4AttributionSchema: v.GenericSchema<unknown, LegacyV4Attribution> = v.looseObject({
  profileName: v.optional(v.string()),
  profilePhotoUrl: v.optional(v.string()),
  profileUrl: v.optional(v.string()),
  takedownUrl: v.optional(v.string()),
});

/** Represents the author of a question or answer */
export type LegacyV4Author = {
  readonly displayName?: string;
  readonly profilePhotoUrl?: string;
  readonly type?: "AUTHOR_TYPE_UNSPECIFIED" | "REGULAR_USER" | "LOCAL_GUIDE" | "MERCHANT";
};
export const LegacyV4AuthorSchema: v.GenericSchema<unknown, LegacyV4Author> = v.looseObject({
  displayName: v.optional(v.string()),
  profilePhotoUrl: v.optional(v.string()),
  type: v.optional(v.union([v.literal("AUTHOR_TYPE_UNSPECIFIED"), v.literal("REGULAR_USER"), v.literal("LOCAL_GUIDE"), v.literal("MERCHANT")])),
});

/** A request for basic metric insights. */
export type LegacyV4BasicMetricsRequest = {
  readonly metricRequests?: ReadonlyArray<LegacyV4MetricRequest>;
  readonly timeRange?: LegacyV4TimeRange;
};
export const LegacyV4BasicMetricsRequestSchema: v.GenericSchema<unknown, LegacyV4BasicMetricsRequest> = v.looseObject({
  metricRequests: v.optional(v.array(v.lazy(() => LegacyV4MetricRequestSchema))),
  timeRange: v.optional(v.lazy(() => LegacyV4TimeRangeSchema)),
});

/** Response message for BusinessCategories.BatchGetBusinessCategories. */
export type LegacyV4BatchGetBusinessCategoriesResponse = {
  readonly categories?: ReadonlyArray<LegacyV4Category>;
};
export const LegacyV4BatchGetBusinessCategoriesResponseSchema: v.GenericSchema<unknown, LegacyV4BatchGetBusinessCategoriesResponse> = v.looseObject({
  categories: v.optional(v.array(v.lazy(() => LegacyV4CategorySchema))),
});

/** Request message for Locations.BatchGetLocations. */
export type LegacyV4BatchGetLocationsRequest = {
  readonly locationNames?: ReadonlyArray<string>;
};
export const LegacyV4BatchGetLocationsRequestSchema: v.GenericSchema<unknown, LegacyV4BatchGetLocationsRequest> = v.looseObject({
  locationNames: v.optional(v.array(v.string())),
});

/** Response message for Locations.BatchGetLocations. */
export type LegacyV4BatchGetLocationsResponse = {
  readonly locations?: ReadonlyArray<LegacyV4Location>;
};
export const LegacyV4BatchGetLocationsResponseSchema: v.GenericSchema<unknown, LegacyV4BatchGetLocationsResponse> = v.looseObject({
  locations: v.optional(v.array(v.lazy(() => LegacyV4LocationSchema))),
});

/** Request message for Reviews.BatchGetReviews. */
export type LegacyV4BatchGetReviewsRequest = {
  readonly ignoreRatingOnlyReviews?: boolean;
  readonly locationNames?: ReadonlyArray<string>;
  readonly orderBy?: string;
  readonly pageSize?: number;
  readonly pageToken?: string;
};
export const LegacyV4BatchGetReviewsRequestSchema: v.GenericSchema<unknown, LegacyV4BatchGetReviewsRequest> = v.looseObject({
  ignoreRatingOnlyReviews: v.optional(v.boolean()),
  locationNames: v.optional(v.array(v.string())),
  orderBy: v.optional(v.string()),
  pageSize: v.optional(v.pipe(v.number(), v.integer())),
  pageToken: v.optional(v.string()),
});

/** Response message for Reviews.BatchGetReviews. */
export type LegacyV4BatchGetReviewsResponse = {
  readonly locationReviews?: ReadonlyArray<LegacyV4LocationReview>;
  readonly nextPageToken?: string;
};
export const LegacyV4BatchGetReviewsResponseSchema: v.GenericSchema<unknown, LegacyV4BatchGetReviewsResponse> = v.looseObject({
  locationReviews: v.optional(v.array(v.lazy(() => LegacyV4LocationReviewSchema))),
  nextPageToken: v.optional(v.string()),
});

/** Features of the property of specific interest to the business traveler. */
export type LegacyV4Business = {
  readonly businessCenter?: boolean;
  readonly businessCenterException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRooms?: boolean;
  readonly meetingRoomsCount?: number;
  readonly meetingRoomsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRoomsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4BusinessSchema: v.GenericSchema<unknown, LegacyV4Business> = v.looseObject({
  businessCenter: v.optional(v.boolean()),
  businessCenterException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  meetingRooms: v.optional(v.boolean()),
  meetingRoomsCount: v.optional(v.pipe(v.number(), v.integer())),
  meetingRoomsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  meetingRoomsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances. */
export type LegacyV4BusinessHours = {
  readonly periods?: ReadonlyArray<LegacyV4TimePeriod>;
};
export const LegacyV4BusinessHoursSchema: v.GenericSchema<unknown, LegacyV4BusinessHours> = v.looseObject({
  periods: v.optional(v.array(v.lazy(() => LegacyV4TimePeriodSchema))),
});

/** An action that is performed when the user clicks through the post */
export type LegacyV4CallToAction = {
  readonly actionType?: "ACTION_TYPE_UNSPECIFIED" | "BOOK" | "ORDER" | "SHOP" | "LEARN_MORE" | "SIGN_UP" | "GET_OFFER" | "CALL";
  readonly url?: string;
};
export const LegacyV4CallToActionSchema: v.GenericSchema<unknown, LegacyV4CallToAction> = v.looseObject({
  actionType: v.optional(v.union([v.literal("ACTION_TYPE_UNSPECIFIED"), v.literal("BOOK"), v.literal("ORDER"), v.literal("SHOP"), v.literal("LEARN_MORE"), v.literal("SIGN_UP"), v.literal("GET_OFFER"), v.literal("CALL")])),
  url: v.optional(v.string()),
});

/** This message denotes calories information with an upper bound and lower bound range. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
export type LegacyV4CaloriesFact = {
  readonly lowerAmount?: number;
  readonly unit?: "ENERGY_UNIT_UNSPECIFIED" | "CALORIE" | "JOULE";
  readonly upperAmount?: number;
};
export const LegacyV4CaloriesFactSchema: v.GenericSchema<unknown, LegacyV4CaloriesFact> = v.looseObject({
  lowerAmount: v.optional(v.pipe(v.number(), v.integer())),
  unit: v.optional(v.union([v.literal("ENERGY_UNIT_UNSPECIFIED"), v.literal("CALORIE"), v.literal("JOULE")])),
  upperAmount: v.optional(v.pipe(v.number(), v.integer())),
});

/** A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list). */
export type LegacyV4Category = {
  readonly categoryId?: string;
  readonly displayName?: string;
  readonly moreHoursTypes?: ReadonlyArray<LegacyV4MoreHoursType>;
  readonly serviceTypes?: ReadonlyArray<LegacyV4ServiceType>;
};
export const LegacyV4CategorySchema: v.GenericSchema<unknown, LegacyV4Category> = v.looseObject({
  categoryId: v.optional(v.string()),
  displayName: v.optional(v.string()),
  moreHoursTypes: v.optional(v.array(v.lazy(() => LegacyV4MoreHoursTypeSchema))),
  serviceTypes: v.optional(v.array(v.lazy(() => LegacyV4ServiceTypeSchema))),
});

/** A chain is a brand that your business's locations can be affiliated with. */
export type LegacyV4Chain = {
  readonly chainNames?: ReadonlyArray<LegacyV4ChainName>;
  readonly locationCount?: number;
  readonly name?: string;
  readonly websites?: ReadonlyArray<LegacyV4ChainUrl>;
};
export const LegacyV4ChainSchema: v.GenericSchema<unknown, LegacyV4Chain> = v.looseObject({
  chainNames: v.optional(v.array(v.lazy(() => LegacyV4ChainNameSchema))),
  locationCount: v.optional(v.pipe(v.number(), v.integer())),
  name: v.optional(v.string()),
  websites: v.optional(v.array(v.lazy(() => LegacyV4ChainUrlSchema))),
});

/** Name to be used when displaying the chain. */
export type LegacyV4ChainName = {
  readonly displayName?: string;
  readonly languageCode?: string;
};
export const LegacyV4ChainNameSchema: v.GenericSchema<unknown, LegacyV4ChainName> = v.looseObject({
  displayName: v.optional(v.string()),
  languageCode: v.optional(v.string()),
});

/** Url to be used when displaying the chain. */
export type LegacyV4ChainUrl = {
  readonly url?: string;
};
export const LegacyV4ChainUrlSchema: v.GenericSchema<unknown, LegacyV4ChainUrl> = v.looseObject({
  url: v.optional(v.string()),
});

/** Request message for Locations.ClearLocationAssociationRequest. */
export type LegacyV4ClearLocationAssociationRequest = {

};
export const LegacyV4ClearLocationAssociationRequestSchema: v.GenericSchema<unknown, LegacyV4ClearLocationAssociationRequest> = v.looseObject({

});

/** Request message for Verifications.CompleteVerificationAction. */
export type LegacyV4CompleteVerificationRequest = {
  readonly pin?: string;
};
export const LegacyV4CompleteVerificationRequestSchema: v.GenericSchema<unknown, LegacyV4CompleteVerificationRequest> = v.looseObject({
  pin: v.optional(v.string()),
});

/** Response message for Verifications.CompleteVerificationAction. */
export type LegacyV4CompleteVerificationResponse = {
  readonly verification?: LegacyV4Verification;
};
export const LegacyV4CompleteVerificationResponseSchema: v.GenericSchema<unknown, LegacyV4CompleteVerificationResponse> = v.looseObject({
  verification: v.optional(v.lazy(() => LegacyV4VerificationSchema)),
});

/** The ways in which the property provides guests with the ability to access the internet. */
export type LegacyV4Connectivity = {
  readonly freeWifi?: boolean;
  readonly freeWifiException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly publicAreaWifiAvailable?: boolean;
  readonly publicAreaWifiAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly publicInternetTerminal?: boolean;
  readonly publicInternetTerminalException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wifiAvailable?: boolean;
  readonly wifiAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4ConnectivitySchema: v.GenericSchema<unknown, LegacyV4Connectivity> = v.looseObject({
  freeWifi: v.optional(v.boolean()),
  freeWifiException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  publicAreaWifiAvailable: v.optional(v.boolean()),
  publicAreaWifiAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  publicInternetTerminal: v.optional(v.boolean()),
  publicInternetTerminalException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  wifiAvailable: v.optional(v.boolean()),
  wifiAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`. */
export type LegacyV4Date = {
  readonly day?: number;
  readonly month?: number;
  readonly year?: number;
};
export const LegacyV4DateSchema: v.GenericSchema<unknown, LegacyV4Date> = v.looseObject({
  day: v.optional(v.pipe(v.number(), v.integer())),
  month: v.optional(v.pipe(v.number(), v.integer())),
  year: v.optional(v.pipe(v.number(), v.integer())),
});

/** Request message for AccessControl.DeclineInvitation. */
export type LegacyV4DeclineInvitationRequest = {

};
export const LegacyV4DeclineInvitationRequestSchema: v.GenericSchema<unknown, LegacyV4DeclineInvitationRequest> = v.looseObject({

});

/** A value for a single metric with a given time dimension. */
export type LegacyV4DimensionalMetricValue = {
  readonly metricOption?: "METRIC_OPTION_UNSPECIFIED" | "AGGREGATED_TOTAL" | "AGGREGATED_DAILY" | "BREAKDOWN_DAY_OF_WEEK" | "BREAKDOWN_HOUR_OF_DAY";
  readonly timeDimension?: LegacyV4TimeDimension;
  readonly value?: string;
};
export const LegacyV4DimensionalMetricValueSchema: v.GenericSchema<unknown, LegacyV4DimensionalMetricValue> = v.looseObject({
  metricOption: v.optional(v.union([v.literal("METRIC_OPTION_UNSPECIFIED"), v.literal("AGGREGATED_TOTAL"), v.literal("AGGREGATED_DAILY"), v.literal("BREAKDOWN_DAY_OF_WEEK"), v.literal("BREAKDOWN_HOUR_OF_DAY")])),
  timeDimension: v.optional(v.lazy(() => LegacyV4TimeDimensionSchema)),
  value: v.optional(v.string()),
});

/** Dimensions of the media item. */
export type LegacyV4Dimensions = {
  readonly heightPixels?: number;
  readonly widthPixels?: number;
};
export const LegacyV4DimensionsSchema: v.GenericSchema<unknown, LegacyV4Dimensions> = v.looseObject({
  heightPixels: v.optional(v.pipe(v.number(), v.integer())),
  widthPixels: v.optional(v.pipe(v.number(), v.integer())),
});

/** A request for driving direction insights. */
export type LegacyV4DrivingDirectionMetricsRequest = {
  readonly languageCode?: string;
  readonly numDays?: "SEVEN" | "THIRTY" | "NINETY";
};
export const LegacyV4DrivingDirectionMetricsRequestSchema: v.GenericSchema<unknown, LegacyV4DrivingDirectionMetricsRequest> = v.looseObject({
  languageCode: v.optional(v.string()),
  numDays: v.optional(v.union([v.literal("SEVEN"), v.literal("THIRTY"), v.literal("NINETY")])),
});

/** Information about the location that this location duplicates. */
export type LegacyV4Duplicate = {
  readonly access?: "ACCESS_UNSPECIFIED" | "ACCESS_UNKNOWN" | "ALLOWED" | "INSUFFICIENT";
  readonly locationName?: string;
  readonly placeId?: string;
};
export const LegacyV4DuplicateSchema: v.GenericSchema<unknown, LegacyV4Duplicate> = v.looseObject({
  access: v.optional(v.union([v.literal("ACCESS_UNSPECIFIED"), v.literal("ACCESS_UNKNOWN"), v.literal("ALLOWED"), v.literal("INSUFFICIENT")])),
  locationName: v.optional(v.string()),
  placeId: v.optional(v.string()),
});

/** Input for EMAIL verification. */
export type LegacyV4EmailInput = {
  readonly emailAddress?: string;
};
export const LegacyV4EmailInputSchema: v.GenericSchema<unknown, LegacyV4EmailInput> = v.looseObject({
  emailAddress: v.optional(v.string()),
});

/** Display data for verifications through email. */
export type LegacyV4EmailVerificationData = {
  readonly domainName?: string;
  readonly isUserNameEditable?: boolean;
  readonly userName?: string;
};
export const LegacyV4EmailVerificationDataSchema: v.GenericSchema<unknown, LegacyV4EmailVerificationData> = v.looseObject({
  domainName: v.optional(v.string()),
  isUserNameEditable: v.optional(v.boolean()),
  userName: v.optional(v.string()),
});

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`. */
export type LegacyV4Empty = {

};
export const LegacyV4EmptySchema: v.GenericSchema<unknown, LegacyV4Empty> = v.looseObject({

});

/** Enhanced cleaning measures implemented by the hotel during COVID-19. */
export type LegacyV4EnhancedCleaning = {
  readonly commercialGradeDisinfectantCleaning?: boolean;
  readonly commercialGradeDisinfectantCleaningException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly commonAreasEnhancedCleaning?: boolean;
  readonly commonAreasEnhancedCleaningException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly employeesTrainedCleaningProcedures?: boolean;
  readonly employeesTrainedCleaningProceduresException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly employeesTrainedThoroughHandWashing?: boolean;
  readonly employeesTrainedThoroughHandWashingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly employeesWearProtectiveEquipment?: boolean;
  readonly employeesWearProtectiveEquipmentException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly guestRoomsEnhancedCleaning?: boolean;
  readonly guestRoomsEnhancedCleaningException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4EnhancedCleaningSchema: v.GenericSchema<unknown, LegacyV4EnhancedCleaning> = v.looseObject({
  commercialGradeDisinfectantCleaning: v.optional(v.boolean()),
  commercialGradeDisinfectantCleaningException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  commonAreasEnhancedCleaning: v.optional(v.boolean()),
  commonAreasEnhancedCleaningException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  employeesTrainedCleaningProcedures: v.optional(v.boolean()),
  employeesTrainedCleaningProceduresException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  employeesTrainedThoroughHandWashing: v.optional(v.boolean()),
  employeesTrainedThoroughHandWashingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  employeesWearProtectiveEquipment: v.optional(v.boolean()),
  employeesWearProtectiveEquipmentException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  guestRoomsEnhancedCleaning: v.optional(v.boolean()),
  guestRoomsEnhancedCleaningException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Services and amenities for families and young guests. */
export type LegacyV4Families = {
  readonly babysitting?: boolean;
  readonly babysittingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsActivities?: boolean;
  readonly kidsActivitiesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsClub?: boolean;
  readonly kidsClubException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4FamiliesSchema: v.GenericSchema<unknown, LegacyV4Families> = v.looseObject({
  babysitting: v.optional(v.boolean()),
  babysittingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  kidsActivities: v.optional(v.boolean()),
  kidsActivitiesException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  kidsClub: v.optional(v.boolean()),
  kidsClubException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Request message for Verifications.FetchVerificationOptions. */
export type LegacyV4FetchVerificationOptionsRequest = {
  readonly context?: LegacyV4ServiceBusinessContext;
  readonly languageCode?: string;
};
export const LegacyV4FetchVerificationOptionsRequestSchema: v.GenericSchema<unknown, LegacyV4FetchVerificationOptionsRequest> = v.looseObject({
  context: v.optional(v.lazy(() => LegacyV4ServiceBusinessContextSchema)),
  languageCode: v.optional(v.string()),
});

/** Response message for Verifications.FetchVerificationOptions. */
export type LegacyV4FetchVerificationOptionsResponse = {
  readonly options?: ReadonlyArray<LegacyV4VerificationOption>;
};
export const LegacyV4FetchVerificationOptionsResponseSchema: v.GenericSchema<unknown, LegacyV4FetchVerificationOptionsResponse> = v.looseObject({
  options: v.optional(v.array(v.lazy(() => LegacyV4VerificationOptionSchema))),
});

/** Request message for Locations.FindMatchingLocations. */
export type LegacyV4FindMatchingLocationsRequest = {
  readonly languageCode?: string;
  readonly maxCacheDuration?: string;
  readonly numResults?: number;
};
export const LegacyV4FindMatchingLocationsRequestSchema: v.GenericSchema<unknown, LegacyV4FindMatchingLocationsRequest> = v.looseObject({
  languageCode: v.optional(v.string()),
  maxCacheDuration: v.optional(v.string()),
  numResults: v.optional(v.pipe(v.number(), v.integer())),
});

/** Response message for Locations.FindMatchingLocations. */
export type LegacyV4FindMatchingLocationsResponse = {
  readonly matchedLocations?: ReadonlyArray<LegacyV4MatchedLocation>;
  readonly matchTime?: string;
};
export const LegacyV4FindMatchingLocationsResponseSchema: v.GenericSchema<unknown, LegacyV4FindMatchingLocationsResponse> = v.looseObject({
  matchedLocations: v.optional(v.array(v.lazy(() => LegacyV4MatchedLocationSchema))),
  matchTime: v.optional(v.string()),
});

/** Follower metadata for a location. */
export type LegacyV4FollowersMetadata = {
  readonly count?: string;
  readonly name?: string;
};
export const LegacyV4FollowersMetadataSchema: v.GenericSchema<unknown, LegacyV4FollowersMetadata> = v.looseObject({
  count: v.optional(v.string()),
  name: v.optional(v.string()),
});

/** Meals, snacks, and beverages available at the property. */
export type LegacyV4FoodAndDrink = {
  readonly bar?: boolean;
  readonly barException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly breakfastAvailable?: boolean;
  readonly breakfastAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly breakfastBuffet?: boolean;
  readonly breakfastBuffetException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly buffet?: boolean;
  readonly buffetException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly dinnerBuffet?: boolean;
  readonly dinnerBuffetException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeBreakfast?: boolean;
  readonly freeBreakfastException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly restaurant?: boolean;
  readonly restaurantException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly restaurantsCount?: number;
  readonly restaurantsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly roomService?: boolean;
  readonly roomServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly tableService?: boolean;
  readonly tableServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly twentyFourHourRoomService?: boolean;
  readonly twentyFourHourRoomServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly vendingMachine?: boolean;
  readonly vendingMachineException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4FoodAndDrinkSchema: v.GenericSchema<unknown, LegacyV4FoodAndDrink> = v.looseObject({
  bar: v.optional(v.boolean()),
  barException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  breakfastAvailable: v.optional(v.boolean()),
  breakfastAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  breakfastBuffet: v.optional(v.boolean()),
  breakfastBuffetException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  buffet: v.optional(v.boolean()),
  buffetException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  dinnerBuffet: v.optional(v.boolean()),
  dinnerBuffetException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeBreakfast: v.optional(v.boolean()),
  freeBreakfastException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  restaurant: v.optional(v.boolean()),
  restaurantException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  restaurantsCount: v.optional(v.pipe(v.number(), v.integer())),
  restaurantsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  roomService: v.optional(v.boolean()),
  roomServiceException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  tableService: v.optional(v.boolean()),
  tableServiceException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  twentyFourHourRoomService: v.optional(v.boolean()),
  twentyFourHourRoomServiceException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  vendingMachine: v.optional(v.boolean()),
  vendingMachineException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Menu of a business that serves food dishes. */
export type LegacyV4FoodMenu = {
  readonly cuisines?: ReadonlyArray<"CUISINE_UNSPECIFIED" | "AMERICAN" | "ASIAN" | "BRAZILIAN" | "BREAK_FAST" | "BRUNCH" | "CHICKEN" | "CHINESE" | "FAMILY" | "FAST_FOOD" | "FRENCH" | "GREEK" | "GERMAN" | "HAMBURGER" | "INDIAN" | "INDONESIAN" | "ITALIAN" | "JAPANESE" | "KOREAN" | "LATIN_AMERICAN" | "MEDITERRANEAN" | "MEXICAN" | "PAKISTANI" | "PIZZA" | "SEAFOOD" | "SPANISH" | "SUSHI" | "THAI" | "TURKISH" | "VEGETARIAN" | "VIETNAMESE" | "OTHER_CUISINE">;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabel>;
  readonly sections?: ReadonlyArray<LegacyV4FoodMenuSection>;
  readonly sourceUrl?: string;
};
export const LegacyV4FoodMenuSchema: v.GenericSchema<unknown, LegacyV4FoodMenu> = v.looseObject({
  cuisines: v.optional(v.array(v.union([v.literal("CUISINE_UNSPECIFIED"), v.literal("AMERICAN"), v.literal("ASIAN"), v.literal("BRAZILIAN"), v.literal("BREAK_FAST"), v.literal("BRUNCH"), v.literal("CHICKEN"), v.literal("CHINESE"), v.literal("FAMILY"), v.literal("FAST_FOOD"), v.literal("FRENCH"), v.literal("GREEK"), v.literal("GERMAN"), v.literal("HAMBURGER"), v.literal("INDIAN"), v.literal("INDONESIAN"), v.literal("ITALIAN"), v.literal("JAPANESE"), v.literal("KOREAN"), v.literal("LATIN_AMERICAN"), v.literal("MEDITERRANEAN"), v.literal("MEXICAN"), v.literal("PAKISTANI"), v.literal("PIZZA"), v.literal("SEAFOOD"), v.literal("SPANISH"), v.literal("SUSHI"), v.literal("THAI"), v.literal("TURKISH"), v.literal("VEGETARIAN"), v.literal("VIETNAMESE"), v.literal("OTHER_CUISINE")]))),
  labels: v.optional(v.array(v.lazy(() => LegacyV4MenuLabelSchema))),
  sections: v.optional(v.array(v.lazy(() => LegacyV4FoodMenuSectionSchema))),
  sourceUrl: v.optional(v.string()),
});

/** Item of a Section. It can be the dish itself, or can contain multiple FoodMenuItemOption. */
export type LegacyV4FoodMenuItem = {
  readonly attributes?: LegacyV4FoodMenuItemAttributes;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabel>;
  readonly options?: ReadonlyArray<LegacyV4FoodMenuItemOption>;
};
export const LegacyV4FoodMenuItemSchema: v.GenericSchema<unknown, LegacyV4FoodMenuItem> = v.looseObject({
  attributes: v.optional(v.lazy(() => LegacyV4FoodMenuItemAttributesSchema)),
  labels: v.optional(v.array(v.lazy(() => LegacyV4MenuLabelSchema))),
  options: v.optional(v.array(v.lazy(() => LegacyV4FoodMenuItemOptionSchema))),
});

/** Attributes of a food item/dish. */
export type LegacyV4FoodMenuItemAttributes = {
  readonly allergen?: ReadonlyArray<"ALLERGEN_UNSPECIFIED" | "DAIRY" | "EGG" | "FISH" | "PEANUT" | "SHELLFISH" | "SOY" | "TREE_NUT" | "WHEAT">;
  readonly dietaryRestriction?: ReadonlyArray<"DIETARY_RESTRICTION_UNSPECIFIED" | "HALAL" | "KOSHER" | "ORGANIC" | "VEGAN" | "VEGETARIAN">;
  readonly ingredients?: ReadonlyArray<LegacyV4Ingredient>;
  readonly mediaKeys?: ReadonlyArray<string>;
  readonly nutritionFacts?: LegacyV4NutritionFacts;
  readonly portionSize?: LegacyV4PortionSize;
  readonly preparationMethods?: ReadonlyArray<"PREPARATION_METHOD_UNSPECIFIED" | "BAKED" | "BARBECUED" | "BASTED" | "BLANCHED" | "BOILED" | "BRAISED" | "CODDLED" | "FERMENTED" | "FRIED" | "GRILLED" | "KNEADED" | "MARINATED" | "PAN_FRIED" | "PICKLED" | "PRESSURE_COOKED" | "ROASTED" | "SAUTEED" | "SEARED" | "SIMMERED" | "SMOKED" | "STEAMED" | "STEEPED" | "STIR_FRIED" | "OTHER_METHOD">;
  readonly price?: LegacyV4Money;
  readonly servesNumPeople?: number;
  readonly spiciness?: "SPICINESS_UNSPECIFIED" | "MILD" | "MEDIUM" | "HOT";
};
export const LegacyV4FoodMenuItemAttributesSchema: v.GenericSchema<unknown, LegacyV4FoodMenuItemAttributes> = v.looseObject({
  allergen: v.optional(v.array(v.union([v.literal("ALLERGEN_UNSPECIFIED"), v.literal("DAIRY"), v.literal("EGG"), v.literal("FISH"), v.literal("PEANUT"), v.literal("SHELLFISH"), v.literal("SOY"), v.literal("TREE_NUT"), v.literal("WHEAT")]))),
  dietaryRestriction: v.optional(v.array(v.union([v.literal("DIETARY_RESTRICTION_UNSPECIFIED"), v.literal("HALAL"), v.literal("KOSHER"), v.literal("ORGANIC"), v.literal("VEGAN"), v.literal("VEGETARIAN")]))),
  ingredients: v.optional(v.array(v.lazy(() => LegacyV4IngredientSchema))),
  mediaKeys: v.optional(v.array(v.string())),
  nutritionFacts: v.optional(v.lazy(() => LegacyV4NutritionFactsSchema)),
  portionSize: v.optional(v.lazy(() => LegacyV4PortionSizeSchema)),
  preparationMethods: v.optional(v.array(v.union([v.literal("PREPARATION_METHOD_UNSPECIFIED"), v.literal("BAKED"), v.literal("BARBECUED"), v.literal("BASTED"), v.literal("BLANCHED"), v.literal("BOILED"), v.literal("BRAISED"), v.literal("CODDLED"), v.literal("FERMENTED"), v.literal("FRIED"), v.literal("GRILLED"), v.literal("KNEADED"), v.literal("MARINATED"), v.literal("PAN_FRIED"), v.literal("PICKLED"), v.literal("PRESSURE_COOKED"), v.literal("ROASTED"), v.literal("SAUTEED"), v.literal("SEARED"), v.literal("SIMMERED"), v.literal("SMOKED"), v.literal("STEAMED"), v.literal("STEEPED"), v.literal("STIR_FRIED"), v.literal("OTHER_METHOD")]))),
  price: v.optional(v.lazy(() => LegacyV4MoneySchema)),
  servesNumPeople: v.optional(v.pipe(v.number(), v.integer())),
  spiciness: v.optional(v.union([v.literal("SPICINESS_UNSPECIFIED"), v.literal("MILD"), v.literal("MEDIUM"), v.literal("HOT")])),
});

/** Option of an Item. It requires an explicit user selection. */
export type LegacyV4FoodMenuItemOption = {
  readonly attributes?: LegacyV4FoodMenuItemAttributes;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabel>;
};
export const LegacyV4FoodMenuItemOptionSchema: v.GenericSchema<unknown, LegacyV4FoodMenuItemOption> = v.looseObject({
  attributes: v.optional(v.lazy(() => LegacyV4FoodMenuItemAttributesSchema)),
  labels: v.optional(v.array(v.lazy(() => LegacyV4MenuLabelSchema))),
});

/** Menus of a business that serve food dishes. */
export type LegacyV4FoodMenus = {
  readonly menus?: ReadonlyArray<LegacyV4FoodMenu>;
  readonly name?: string;
};
export const LegacyV4FoodMenusSchema: v.GenericSchema<unknown, LegacyV4FoodMenus> = v.looseObject({
  menus: v.optional(v.array(v.lazy(() => LegacyV4FoodMenuSchema))),
  name: v.optional(v.string()),
});

/** Section of a menu. It can contain multiple items/dishes. */
export type LegacyV4FoodMenuSection = {
  readonly items?: ReadonlyArray<LegacyV4FoodMenuItem>;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabel>;
};
export const LegacyV4FoodMenuSectionSchema: v.GenericSchema<unknown, LegacyV4FoodMenuSection> = v.looseObject({
  items: v.optional(v.array(v.lazy(() => LegacyV4FoodMenuItemSchema))),
  labels: v.optional(v.array(v.lazy(() => LegacyV4MenuLabelSchema))),
});

/** Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface. */
export type LegacyV4FreeFormServiceItem = {
  readonly categoryId?: string;
  readonly label?: LegacyV4Label;
};
export const LegacyV4FreeFormServiceItemSchema: v.GenericSchema<unknown, LegacyV4FreeFormServiceItem> = v.looseObject({
  categoryId: v.optional(v.string()),
  label: v.optional(v.lazy(() => LegacyV4LabelSchema)),
});

/** Request message for Accounts.GenerateAccountNumber. */
export type LegacyV4GenerateAccountNumberRequest = {

};
export const LegacyV4GenerateAccountNumberRequestSchema: v.GenericSchema<unknown, LegacyV4GenerateAccountNumberRequest> = v.looseObject({

});

/** Response message for LodgingService.GetGoogleUpdatedLodging */
export type LegacyV4GetGoogleUpdatedLodgingResponse = {
  readonly diffMask?: string;
  readonly lodging?: LegacyV4Lodging;
};
export const LegacyV4GetGoogleUpdatedLodgingResponseSchema: v.GenericSchema<unknown, LegacyV4GetGoogleUpdatedLodgingResponse> = v.looseObject({
  diffMask: v.optional(v.string()),
  lodging: v.optional(v.lazy(() => LegacyV4LodgingSchema)),
});

/** Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed. */
export type LegacyV4GoogleLocation = {
  readonly location?: LegacyV4Location;
  readonly name?: string;
  readonly requestAdminRightsUrl?: string;
};
export const LegacyV4GoogleLocationSchema: v.GenericSchema<unknown, LegacyV4GoogleLocation> = v.looseObject({
  location: v.optional(v.lazy(() => LegacyV4LocationSchema)),
  name: v.optional(v.string()),
  requestAdminRightsUrl: v.optional(v.string()),
});

/** Represents a location that was modified by Google. */
export type LegacyV4GoogleUpdatedLocation = {
  readonly diffMask?: string;
  readonly location?: LegacyV4Location;
};
export const LegacyV4GoogleUpdatedLocationSchema: v.GenericSchema<unknown, LegacyV4GoogleUpdatedLocation> = v.looseObject({
  diffMask: v.optional(v.string()),
  location: v.optional(v.lazy(() => LegacyV4LocationSchema)),
});

/** Features and available amenities in the guest unit. */
export type LegacyV4GuestUnitFeatures = {
  readonly bungalowOrVilla?: boolean;
  readonly bungalowOrVillaException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly connectingUnitAvailable?: boolean;
  readonly connectingUnitAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly executiveFloor?: boolean;
  readonly executiveFloorException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly maxAdultOccupantsCount?: number;
  readonly maxAdultOccupantsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly maxChildOccupantsCount?: number;
  readonly maxChildOccupantsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly maxOccupantsCount?: number;
  readonly maxOccupantsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly privateHome?: boolean;
  readonly privateHomeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly suite?: boolean;
  readonly suiteException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly tier?: "UNIT_TIER_UNSPECIFIED" | "STANDARD_UNIT" | "DELUXE_UNIT";
  readonly tierException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly totalLivingAreas?: LegacyV4LivingArea;
  readonly views?: LegacyV4ViewsFromUnit;
};
export const LegacyV4GuestUnitFeaturesSchema: v.GenericSchema<unknown, LegacyV4GuestUnitFeatures> = v.looseObject({
  bungalowOrVilla: v.optional(v.boolean()),
  bungalowOrVillaException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  connectingUnitAvailable: v.optional(v.boolean()),
  connectingUnitAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  executiveFloor: v.optional(v.boolean()),
  executiveFloorException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  maxAdultOccupantsCount: v.optional(v.pipe(v.number(), v.integer())),
  maxAdultOccupantsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  maxChildOccupantsCount: v.optional(v.pipe(v.number(), v.integer())),
  maxChildOccupantsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  maxOccupantsCount: v.optional(v.pipe(v.number(), v.integer())),
  maxOccupantsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  privateHome: v.optional(v.boolean()),
  privateHomeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  suite: v.optional(v.boolean()),
  suiteException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  tier: v.optional(v.union([v.literal("UNIT_TIER_UNSPECIFIED"), v.literal("STANDARD_UNIT"), v.literal("DELUXE_UNIT")])),
  tierException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  totalLivingAreas: v.optional(v.lazy(() => LegacyV4LivingAreaSchema)),
  views: v.optional(v.lazy(() => LegacyV4ViewsFromUnitSchema)),
});

/** A specific type of unit primarily defined by its features. */
export type LegacyV4GuestUnitType = {
  readonly codes?: ReadonlyArray<string>;
  readonly features?: LegacyV4GuestUnitFeatures;
  readonly label?: string;
};
export const LegacyV4GuestUnitTypeSchema: v.GenericSchema<unknown, LegacyV4GuestUnitType> = v.looseObject({
  codes: v.optional(v.array(v.string())),
  features: v.optional(v.lazy(() => LegacyV4GuestUnitFeaturesSchema)),
  label: v.optional(v.string()),
});

/** Health and safety measures implemented by the hotel during COVID-19. */
export type LegacyV4HealthAndSafety = {
  readonly enhancedCleaning?: LegacyV4EnhancedCleaning;
  readonly increasedFoodSafety?: LegacyV4IncreasedFoodSafety;
  readonly minimizedContact?: LegacyV4MinimizedContact;
  readonly personalProtection?: LegacyV4PersonalProtection;
  readonly physicalDistancing?: LegacyV4PhysicalDistancing;
};
export const LegacyV4HealthAndSafetySchema: v.GenericSchema<unknown, LegacyV4HealthAndSafety> = v.looseObject({
  enhancedCleaning: v.optional(v.lazy(() => LegacyV4EnhancedCleaningSchema)),
  increasedFoodSafety: v.optional(v.lazy(() => LegacyV4IncreasedFoodSafetySchema)),
  minimizedContact: v.optional(v.lazy(() => LegacyV4MinimizedContactSchema)),
  personalProtection: v.optional(v.lazy(() => LegacyV4PersonalProtectionSchema)),
  physicalDistancing: v.optional(v.lazy(() => LegacyV4PhysicalDistancingSchema)),
});

/** The Health provider attributes linked with this location. */
export type LegacyV4HealthProviderAttributes = {
  readonly insuranceNetworks?: ReadonlyArray<LegacyV4InsuranceNetwork>;
  readonly name?: string;
};
export const LegacyV4HealthProviderAttributesSchema: v.GenericSchema<unknown, LegacyV4HealthProviderAttributes> = v.looseObject({
  insuranceNetworks: v.optional(v.array(v.lazy(() => LegacyV4InsuranceNetworkSchema))),
  name: v.optional(v.string()),
});

/** Conveniences provided in guest units to facilitate an easier, more comfortable stay. */
export type LegacyV4Housekeeping = {
  readonly dailyHousekeeping?: boolean;
  readonly dailyHousekeepingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly housekeepingAvailable?: boolean;
  readonly housekeepingAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly turndownService?: boolean;
  readonly turndownServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4HousekeepingSchema: v.GenericSchema<unknown, LegacyV4Housekeeping> = v.looseObject({
  dailyHousekeeping: v.optional(v.boolean()),
  dailyHousekeepingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  housekeepingAvailable: v.optional(v.boolean()),
  housekeepingAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  turndownService: v.optional(v.boolean()),
  turndownServiceException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Increased food safety measures implemented by the hotel during COVID-19. */
export type LegacyV4IncreasedFoodSafety = {
  readonly diningAreasAdditionalSanitation?: boolean;
  readonly diningAreasAdditionalSanitationException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly disposableFlatware?: boolean;
  readonly disposableFlatwareException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly foodPreparationAndServingAdditionalSafety?: boolean;
  readonly foodPreparationAndServingAdditionalSafetyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly individualPackagedMeals?: boolean;
  readonly individualPackagedMealsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly singleUseFoodMenus?: boolean;
  readonly singleUseFoodMenusException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4IncreasedFoodSafetySchema: v.GenericSchema<unknown, LegacyV4IncreasedFoodSafety> = v.looseObject({
  diningAreasAdditionalSanitation: v.optional(v.boolean()),
  diningAreasAdditionalSanitationException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  disposableFlatware: v.optional(v.boolean()),
  disposableFlatwareException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  foodPreparationAndServingAdditionalSafety: v.optional(v.boolean()),
  foodPreparationAndServingAdditionalSafetyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  individualPackagedMeals: v.optional(v.boolean()),
  individualPackagedMealsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  singleUseFoodMenus: v.optional(v.boolean()),
  singleUseFoodMenusException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** This message denotes an ingredient information of a food dish. */
export type LegacyV4Ingredient = {
  readonly labels?: ReadonlyArray<LegacyV4MenuLabel>;
};
export const LegacyV4IngredientSchema: v.GenericSchema<unknown, LegacyV4Ingredient> = v.looseObject({
  labels: v.optional(v.array(v.lazy(() => LegacyV4MenuLabelSchema))),
});

/** A single insurance network. Next id: 5 */
export type LegacyV4InsuranceNetwork = {
  readonly networkId?: string;
  readonly networkNames?: Readonly<Record<string, string>>;
  readonly payerNames?: Readonly<Record<string, string>>;
  readonly state?: "NETWORK_STATE_UNSPECIFIED" | "ACCEPTED" | "PENDING_ADD" | "PENDING_DELETE" | "NOT_ACCEPTED";
};
export const LegacyV4InsuranceNetworkSchema: v.GenericSchema<unknown, LegacyV4InsuranceNetwork> = v.looseObject({
  networkId: v.optional(v.string()),
  networkNames: v.optional(v.record(v.string(), v.string())),
  payerNames: v.optional(v.record(v.string(), v.string())),
  state: v.optional(v.union([v.literal("NETWORK_STATE_UNSPECIFIED"), v.literal("ACCEPTED"), v.literal("PENDING_ADD"), v.literal("PENDING_DELETE"), v.literal("NOT_ACCEPTED")])),
});

/** Output only. Represents a pending invitation. */
export type LegacyV4Invitation = {
  readonly name?: string;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "OWNER" | "CO_OWNER" | "MANAGER" | "COMMUNITY_MANAGER";
  readonly targetAccount?: LegacyV4Account;
  readonly targetLocation?: LegacyV4TargetLocation;
};
export const LegacyV4InvitationSchema: v.GenericSchema<unknown, LegacyV4Invitation> = v.looseObject({
  name: v.optional(v.string()),
  role: v.optional(v.union([v.literal("ADMIN_ROLE_UNSPECIFIED"), v.literal("OWNER"), v.literal("CO_OWNER"), v.literal("MANAGER"), v.literal("COMMUNITY_MANAGER")])),
  targetAccount: v.optional(v.lazy(() => LegacyV4AccountSchema)),
  targetLocation: v.optional(v.lazy(() => LegacyV4TargetLocationSchema)),
});

/** A single list item. Each variation of an item in the price list should have its own Item with its own price data. */
export type LegacyV4Item = {
  readonly itemId?: string;
  readonly labels?: ReadonlyArray<LegacyV4Label>;
  readonly price?: LegacyV4Money;
};
export const LegacyV4ItemSchema: v.GenericSchema<unknown, LegacyV4Item> = v.looseObject({
  itemId: v.optional(v.string()),
  labels: v.optional(v.array(v.lazy(() => LegacyV4LabelSchema))),
  price: v.optional(v.lazy(() => LegacyV4MoneySchema)),
});

/** Label to be used when displaying the price list, section, or item. */
export type LegacyV4Label = {
  readonly description?: string;
  readonly displayName?: string;
  readonly languageCode?: string;
};
export const LegacyV4LabelSchema: v.GenericSchema<unknown, LegacyV4Label> = v.looseObject({
  description: v.optional(v.string()),
  displayName: v.optional(v.string()),
  languageCode: v.optional(v.string()),
});

/** Languages spoken by at least one staff member. */
export type LegacyV4LanguagesSpoken = {
  readonly arabicSpoken?: boolean;
  readonly arabicSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly cantoneseSpoken?: boolean;
  readonly cantoneseSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly dutchSpoken?: boolean;
  readonly dutchSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly englishSpoken?: boolean;
  readonly englishSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly filipinoSpoken?: boolean;
  readonly filipinoSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly frenchSpoken?: boolean;
  readonly frenchSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly germanSpoken?: boolean;
  readonly germanSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly hindiSpoken?: boolean;
  readonly hindiSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly indonesianSpoken?: boolean;
  readonly indonesianSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly italianSpoken?: boolean;
  readonly italianSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly japaneseSpoken?: boolean;
  readonly japaneseSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly koreanSpoken?: boolean;
  readonly koreanSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mandarinSpoken?: boolean;
  readonly mandarinSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly portugueseSpoken?: boolean;
  readonly portugueseSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly russianSpoken?: boolean;
  readonly russianSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly spanishSpoken?: boolean;
  readonly spanishSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly vietnameseSpoken?: boolean;
  readonly vietnameseSpokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4LanguagesSpokenSchema: v.GenericSchema<unknown, LegacyV4LanguagesSpoken> = v.looseObject({
  arabicSpoken: v.optional(v.boolean()),
  arabicSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  cantoneseSpoken: v.optional(v.boolean()),
  cantoneseSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  dutchSpoken: v.optional(v.boolean()),
  dutchSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  englishSpoken: v.optional(v.boolean()),
  englishSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  filipinoSpoken: v.optional(v.boolean()),
  filipinoSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  frenchSpoken: v.optional(v.boolean()),
  frenchSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  germanSpoken: v.optional(v.boolean()),
  germanSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  hindiSpoken: v.optional(v.boolean()),
  hindiSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  indonesianSpoken: v.optional(v.boolean()),
  indonesianSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  italianSpoken: v.optional(v.boolean()),
  italianSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  japaneseSpoken: v.optional(v.boolean()),
  japaneseSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  koreanSpoken: v.optional(v.boolean()),
  koreanSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mandarinSpoken: v.optional(v.boolean()),
  mandarinSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  portugueseSpoken: v.optional(v.boolean()),
  portugueseSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  russianSpoken: v.optional(v.boolean()),
  russianSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  spanishSpoken: v.optional(v.boolean()),
  spanishSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  vietnameseSpoken: v.optional(v.boolean()),
  vietnameseSpokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges. */
export type LegacyV4LatLng = {
  readonly latitude?: number;
  readonly longitude?: number;
};
export const LegacyV4LatLngSchema: v.GenericSchema<unknown, LegacyV4LatLng> = v.looseObject({
  latitude: v.optional(v.number()),
  longitude: v.optional(v.number()),
});

/** Response message for AccessControl.ListAccountAdmins. */
export type LegacyV4ListAccountAdminsResponse = {
  readonly admins?: ReadonlyArray<LegacyV4Admin>;
};
export const LegacyV4ListAccountAdminsResponseSchema: v.GenericSchema<unknown, LegacyV4ListAccountAdminsResponse> = v.looseObject({
  admins: v.optional(v.array(v.lazy(() => LegacyV4AdminSchema))),
});

/** Response message for Accounts.ListAccounts. */
export type LegacyV4ListAccountsResponse = {
  readonly accounts?: ReadonlyArray<LegacyV4Account>;
  readonly nextPageToken?: string;
};
export const LegacyV4ListAccountsResponseSchema: v.GenericSchema<unknown, LegacyV4ListAccountsResponse> = v.looseObject({
  accounts: v.optional(v.array(v.lazy(() => LegacyV4AccountSchema))),
  nextPageToken: v.optional(v.string()),
});

/** Response message for QuestionsAndAnswers.ListAnswers */
export type LegacyV4ListAnswersResponse = {
  readonly answers?: ReadonlyArray<LegacyV4Answer>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
};
export const LegacyV4ListAnswersResponseSchema: v.GenericSchema<unknown, LegacyV4ListAnswersResponse> = v.looseObject({
  answers: v.optional(v.array(v.lazy(() => LegacyV4AnswerSchema))),
  nextPageToken: v.optional(v.string()),
  totalSize: v.optional(v.pipe(v.number(), v.integer())),
});

/** Response message for Locations.ListAttributeMetadata. */
export type LegacyV4ListAttributeMetadataResponse = {
  readonly attributes?: ReadonlyArray<LegacyV4AttributeMetadata>;
  readonly nextPageToken?: string;
};
export const LegacyV4ListAttributeMetadataResponseSchema: v.GenericSchema<unknown, LegacyV4ListAttributeMetadataResponse> = v.looseObject({
  attributes: v.optional(v.array(v.lazy(() => LegacyV4AttributeMetadataSchema))),
  nextPageToken: v.optional(v.string()),
});

export type LegacyV4ListBusinessCategoriesResponse = {
  readonly categories?: ReadonlyArray<LegacyV4Category>;
  readonly nextPageToken?: string;
  readonly totalCategoryCount?: number;
};
export const LegacyV4ListBusinessCategoriesResponseSchema: v.GenericSchema<unknown, LegacyV4ListBusinessCategoriesResponse> = v.looseObject({
  categories: v.optional(v.array(v.lazy(() => LegacyV4CategorySchema))),
  nextPageToken: v.optional(v.string()),
  totalCategoryCount: v.optional(v.pipe(v.number(), v.integer())),
});

/** Response message for Media.ListCustomerMediaItems. */
export type LegacyV4ListCustomerMediaItemsResponse = {
  readonly mediaItems?: ReadonlyArray<LegacyV4MediaItem>;
  readonly nextPageToken?: string;
  readonly totalMediaItemCount?: number;
};
export const LegacyV4ListCustomerMediaItemsResponseSchema: v.GenericSchema<unknown, LegacyV4ListCustomerMediaItemsResponse> = v.looseObject({
  mediaItems: v.optional(v.array(v.lazy(() => LegacyV4MediaItemSchema))),
  nextPageToken: v.optional(v.string()),
  totalMediaItemCount: v.optional(v.pipe(v.number(), v.integer())),
});

/** Response message for InsuranceNetworkService.ListInsuranceNetworks */
export type LegacyV4ListInsuranceNetworksResponse = {
  readonly networks?: ReadonlyArray<LegacyV4InsuranceNetwork>;
  readonly nextPageToken?: string;
};
export const LegacyV4ListInsuranceNetworksResponseSchema: v.GenericSchema<unknown, LegacyV4ListInsuranceNetworksResponse> = v.looseObject({
  networks: v.optional(v.array(v.lazy(() => LegacyV4InsuranceNetworkSchema))),
  nextPageToken: v.optional(v.string()),
});

/** Response message for AccessControl.ListInvitations. */
export type LegacyV4ListInvitationsResponse = {
  readonly invitations?: ReadonlyArray<LegacyV4Invitation>;
};
export const LegacyV4ListInvitationsResponseSchema: v.GenericSchema<unknown, LegacyV4ListInvitationsResponse> = v.looseObject({
  invitations: v.optional(v.array(v.lazy(() => LegacyV4InvitationSchema))),
});

/** Response message for ListLocalPosts */
export type LegacyV4ListLocalPostsResponse = {
  readonly localPosts?: ReadonlyArray<LegacyV4LocalPost>;
  readonly nextPageToken?: string;
};
export const LegacyV4ListLocalPostsResponseSchema: v.GenericSchema<unknown, LegacyV4ListLocalPostsResponse> = v.looseObject({
  localPosts: v.optional(v.array(v.lazy(() => LegacyV4LocalPostSchema))),
  nextPageToken: v.optional(v.string()),
});

/** Response message for AccessControl.ListLocationAdmins. */
export type LegacyV4ListLocationAdminsResponse = {
  readonly admins?: ReadonlyArray<LegacyV4Admin>;
};
export const LegacyV4ListLocationAdminsResponseSchema: v.GenericSchema<unknown, LegacyV4ListLocationAdminsResponse> = v.looseObject({
  admins: v.optional(v.array(v.lazy(() => LegacyV4AdminSchema))),
});

/** Response message for Locations.ListLocations. */
export type LegacyV4ListLocationsResponse = {
  readonly locations?: ReadonlyArray<LegacyV4Location>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
};
export const LegacyV4ListLocationsResponseSchema: v.GenericSchema<unknown, LegacyV4ListLocationsResponse> = v.looseObject({
  locations: v.optional(v.array(v.lazy(() => LegacyV4LocationSchema))),
  nextPageToken: v.optional(v.string()),
  totalSize: v.optional(v.pipe(v.number(), v.integer())),
});

/** Response message for Media.ListMediaItems. */
export type LegacyV4ListMediaItemsResponse = {
  readonly mediaItems?: ReadonlyArray<LegacyV4MediaItem>;
  readonly nextPageToken?: string;
  readonly totalMediaItemCount?: number;
};
export const LegacyV4ListMediaItemsResponseSchema: v.GenericSchema<unknown, LegacyV4ListMediaItemsResponse> = v.looseObject({
  mediaItems: v.optional(v.array(v.lazy(() => LegacyV4MediaItemSchema))),
  nextPageToken: v.optional(v.string()),
  totalMediaItemCount: v.optional(v.pipe(v.number(), v.integer())),
});

/** Response message for QuestionsAndAnswers.ListQuestions */
export type LegacyV4ListQuestionsResponse = {
  readonly nextPageToken?: string;
  readonly questions?: ReadonlyArray<LegacyV4Question>;
  readonly totalSize?: number;
};
export const LegacyV4ListQuestionsResponseSchema: v.GenericSchema<unknown, LegacyV4ListQuestionsResponse> = v.looseObject({
  nextPageToken: v.optional(v.string()),
  questions: v.optional(v.array(v.lazy(() => LegacyV4QuestionSchema))),
  totalSize: v.optional(v.pipe(v.number(), v.integer())),
});

/** Response message for GoogleLocations.ListRecommendedGoogleLocations. It also contains some locations that have been claimed by other Business Profile users since the last time they were recommended to this Business Profile account. */
export type LegacyV4ListRecommendedGoogleLocationsResponse = {
  readonly googleLocations?: ReadonlyArray<LegacyV4GoogleLocation>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
};
export const LegacyV4ListRecommendedGoogleLocationsResponseSchema: v.GenericSchema<unknown, LegacyV4ListRecommendedGoogleLocationsResponse> = v.looseObject({
  googleLocations: v.optional(v.array(v.lazy(() => LegacyV4GoogleLocationSchema))),
  nextPageToken: v.optional(v.string()),
  totalSize: v.optional(v.pipe(v.number(), v.integer())),
});

/** Response message for Reviews.ListReviews. */
export type LegacyV4ListReviewsResponse = {
  readonly averageRating?: number;
  readonly nextPageToken?: string;
  readonly reviews?: ReadonlyArray<LegacyV4Review>;
  readonly totalReviewCount?: number;
};
export const LegacyV4ListReviewsResponseSchema: v.GenericSchema<unknown, LegacyV4ListReviewsResponse> = v.looseObject({
  averageRating: v.optional(v.number()),
  nextPageToken: v.optional(v.string()),
  reviews: v.optional(v.array(v.lazy(() => LegacyV4ReviewSchema))),
  totalReviewCount: v.optional(v.pipe(v.number(), v.integer())),
});

/** Response message for Verifications.ListVerifications. */
export type LegacyV4ListVerificationsResponse = {
  readonly nextPageToken?: string;
  readonly verifications?: ReadonlyArray<LegacyV4Verification>;
};
export const LegacyV4ListVerificationsResponseSchema: v.GenericSchema<unknown, LegacyV4ListVerificationsResponse> = v.looseObject({
  nextPageToken: v.optional(v.string()),
  verifications: v.optional(v.array(v.lazy(() => LegacyV4VerificationSchema))),
});

/** An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit. */
export type LegacyV4LivingArea = {
  readonly accessibility?: LegacyV4LivingAreaAccessibility;
  readonly eating?: LegacyV4LivingAreaEating;
  readonly features?: LegacyV4LivingAreaFeatures;
  readonly layout?: LegacyV4LivingAreaLayout;
  readonly sleeping?: LegacyV4LivingAreaSleeping;
};
export const LegacyV4LivingAreaSchema: v.GenericSchema<unknown, LegacyV4LivingArea> = v.looseObject({
  accessibility: v.optional(v.lazy(() => LegacyV4LivingAreaAccessibilitySchema)),
  eating: v.optional(v.lazy(() => LegacyV4LivingAreaEatingSchema)),
  features: v.optional(v.lazy(() => LegacyV4LivingAreaFeaturesSchema)),
  layout: v.optional(v.lazy(() => LegacyV4LivingAreaLayoutSchema)),
  sleeping: v.optional(v.lazy(() => LegacyV4LivingAreaSleepingSchema)),
});

/** Accessibility features of the living area. */
export type LegacyV4LivingAreaAccessibility = {
  readonly adaCompliantUnit?: boolean;
  readonly adaCompliantUnitException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly hearingAccessibleDoorbell?: boolean;
  readonly hearingAccessibleDoorbellException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly hearingAccessibleFireAlarm?: boolean;
  readonly hearingAccessibleFireAlarmException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly hearingAccessibleUnit?: boolean;
  readonly hearingAccessibleUnitException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleBathtub?: boolean;
  readonly mobilityAccessibleBathtubException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleShower?: boolean;
  readonly mobilityAccessibleShowerException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleToilet?: boolean;
  readonly mobilityAccessibleToiletException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleUnit?: boolean;
  readonly mobilityAccessibleUnitException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4LivingAreaAccessibilitySchema: v.GenericSchema<unknown, LegacyV4LivingAreaAccessibility> = v.looseObject({
  adaCompliantUnit: v.optional(v.boolean()),
  adaCompliantUnitException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  hearingAccessibleDoorbell: v.optional(v.boolean()),
  hearingAccessibleDoorbellException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  hearingAccessibleFireAlarm: v.optional(v.boolean()),
  hearingAccessibleFireAlarmException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  hearingAccessibleUnit: v.optional(v.boolean()),
  hearingAccessibleUnitException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobilityAccessibleBathtub: v.optional(v.boolean()),
  mobilityAccessibleBathtubException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobilityAccessibleShower: v.optional(v.boolean()),
  mobilityAccessibleShowerException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobilityAccessibleToilet: v.optional(v.boolean()),
  mobilityAccessibleToiletException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobilityAccessibleUnit: v.optional(v.boolean()),
  mobilityAccessibleUnitException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Information about eating features in the living area. */
export type LegacyV4LivingAreaEating = {
  readonly coffeeMaker?: boolean;
  readonly coffeeMakerException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly cookware?: boolean;
  readonly cookwareException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly dishwasher?: boolean;
  readonly dishwasherException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly indoorGrill?: boolean;
  readonly indoorGrillException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kettle?: boolean;
  readonly kettleException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kitchenAvailable?: boolean;
  readonly kitchenAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly microwave?: boolean;
  readonly microwaveException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly minibar?: boolean;
  readonly minibarException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly outdoorGrill?: boolean;
  readonly outdoorGrillException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly oven?: boolean;
  readonly ovenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly refrigerator?: boolean;
  readonly refrigeratorException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly sink?: boolean;
  readonly sinkException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly snackbar?: boolean;
  readonly snackbarException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly stove?: boolean;
  readonly stoveException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly teaStation?: boolean;
  readonly teaStationException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly toaster?: boolean;
  readonly toasterException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4LivingAreaEatingSchema: v.GenericSchema<unknown, LegacyV4LivingAreaEating> = v.looseObject({
  coffeeMaker: v.optional(v.boolean()),
  coffeeMakerException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  cookware: v.optional(v.boolean()),
  cookwareException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  dishwasher: v.optional(v.boolean()),
  dishwasherException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  indoorGrill: v.optional(v.boolean()),
  indoorGrillException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  kettle: v.optional(v.boolean()),
  kettleException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  kitchenAvailable: v.optional(v.boolean()),
  kitchenAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  microwave: v.optional(v.boolean()),
  microwaveException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  minibar: v.optional(v.boolean()),
  minibarException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  outdoorGrill: v.optional(v.boolean()),
  outdoorGrillException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  oven: v.optional(v.boolean()),
  ovenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  refrigerator: v.optional(v.boolean()),
  refrigeratorException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  sink: v.optional(v.boolean()),
  sinkException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  snackbar: v.optional(v.boolean()),
  snackbarException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  stove: v.optional(v.boolean()),
  stoveException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  teaStation: v.optional(v.boolean()),
  teaStationException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  toaster: v.optional(v.boolean()),
  toasterException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Features in the living area. */
export type LegacyV4LivingAreaFeatures = {
  readonly airConditioning?: boolean;
  readonly airConditioningException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly bathtub?: boolean;
  readonly bathtubException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly bidet?: boolean;
  readonly bidetException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly dryer?: boolean;
  readonly dryerException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly electronicRoomKey?: boolean;
  readonly electronicRoomKeyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly fireplace?: boolean;
  readonly fireplaceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly hairdryer?: boolean;
  readonly hairdryerException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly heating?: boolean;
  readonly heatingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly inunitSafe?: boolean;
  readonly inunitSafeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly inunitWifiAvailable?: boolean;
  readonly inunitWifiAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly ironingEquipment?: boolean;
  readonly ironingEquipmentException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly payPerViewMovies?: boolean;
  readonly payPerViewMoviesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly privateBathroom?: boolean;
  readonly privateBathroomException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly shower?: boolean;
  readonly showerException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly toilet?: boolean;
  readonly toiletException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly tv?: boolean;
  readonly tvCasting?: boolean;
  readonly tvCastingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly tvException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly tvStreaming?: boolean;
  readonly tvStreamingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly universalPowerAdapters?: boolean;
  readonly universalPowerAdaptersException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly washer?: boolean;
  readonly washerException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4LivingAreaFeaturesSchema: v.GenericSchema<unknown, LegacyV4LivingAreaFeatures> = v.looseObject({
  airConditioning: v.optional(v.boolean()),
  airConditioningException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  bathtub: v.optional(v.boolean()),
  bathtubException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  bidet: v.optional(v.boolean()),
  bidetException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  dryer: v.optional(v.boolean()),
  dryerException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  electronicRoomKey: v.optional(v.boolean()),
  electronicRoomKeyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  fireplace: v.optional(v.boolean()),
  fireplaceException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  hairdryer: v.optional(v.boolean()),
  hairdryerException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  heating: v.optional(v.boolean()),
  heatingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  inunitSafe: v.optional(v.boolean()),
  inunitSafeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  inunitWifiAvailable: v.optional(v.boolean()),
  inunitWifiAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  ironingEquipment: v.optional(v.boolean()),
  ironingEquipmentException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  payPerViewMovies: v.optional(v.boolean()),
  payPerViewMoviesException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  privateBathroom: v.optional(v.boolean()),
  privateBathroomException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  shower: v.optional(v.boolean()),
  showerException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  toilet: v.optional(v.boolean()),
  toiletException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  tv: v.optional(v.boolean()),
  tvCasting: v.optional(v.boolean()),
  tvCastingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  tvException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  tvStreaming: v.optional(v.boolean()),
  tvStreamingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  universalPowerAdapters: v.optional(v.boolean()),
  universalPowerAdaptersException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  washer: v.optional(v.boolean()),
  washerException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Information about the layout of the living area. */
export type LegacyV4LivingAreaLayout = {
  readonly balcony?: boolean;
  readonly balconyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly livingAreaSqMeters?: number;
  readonly livingAreaSqMetersException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly loft?: boolean;
  readonly loftException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly nonSmoking?: boolean;
  readonly nonSmokingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly patio?: boolean;
  readonly patioException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly stairs?: boolean;
  readonly stairsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4LivingAreaLayoutSchema: v.GenericSchema<unknown, LegacyV4LivingAreaLayout> = v.looseObject({
  balcony: v.optional(v.boolean()),
  balconyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  livingAreaSqMeters: v.optional(v.number()),
  livingAreaSqMetersException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  loft: v.optional(v.boolean()),
  loftException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  nonSmoking: v.optional(v.boolean()),
  nonSmokingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  patio: v.optional(v.boolean()),
  patioException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  stairs: v.optional(v.boolean()),
  stairsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Information about sleeping features in the living area. */
export type LegacyV4LivingAreaSleeping = {
  readonly bedsCount?: number;
  readonly bedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly bunkBedsCount?: number;
  readonly bunkBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly cribsCount?: number;
  readonly cribsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly doubleBedsCount?: number;
  readonly doubleBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly featherPillows?: boolean;
  readonly featherPillowsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly hypoallergenicBedding?: boolean;
  readonly hypoallergenicBeddingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kingBedsCount?: number;
  readonly kingBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly memoryFoamPillows?: boolean;
  readonly memoryFoamPillowsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly otherBedsCount?: number;
  readonly otherBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly queenBedsCount?: number;
  readonly queenBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly rollAwayBedsCount?: number;
  readonly rollAwayBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly singleOrTwinBedsCount?: number;
  readonly singleOrTwinBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly sofaBedsCount?: number;
  readonly sofaBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly syntheticPillows?: boolean;
  readonly syntheticPillowsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4LivingAreaSleepingSchema: v.GenericSchema<unknown, LegacyV4LivingAreaSleeping> = v.looseObject({
  bedsCount: v.optional(v.pipe(v.number(), v.integer())),
  bedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  bunkBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  bunkBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  cribsCount: v.optional(v.pipe(v.number(), v.integer())),
  cribsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  doubleBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  doubleBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  featherPillows: v.optional(v.boolean()),
  featherPillowsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  hypoallergenicBedding: v.optional(v.boolean()),
  hypoallergenicBeddingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  kingBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  kingBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  memoryFoamPillows: v.optional(v.boolean()),
  memoryFoamPillowsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  otherBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  otherBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  queenBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  queenBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  rollAwayBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  rollAwayBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  singleOrTwinBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  singleOrTwinBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  sofaBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  sofaBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  syntheticPillows: v.optional(v.boolean()),
  syntheticPillowsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Represents a [local post](https://support.google.com/business/answer/7662907) for a location. */
export type LegacyV4LocalPost = {
  readonly alertType?: "ALERT_TYPE_UNSPECIFIED" | "COVID_19";
  readonly callToAction?: LegacyV4CallToAction;
  readonly createTime?: string;
  readonly event?: LegacyV4LocalPostEvent;
  readonly languageCode?: string;
  readonly media?: ReadonlyArray<LegacyV4MediaItem>;
  readonly name?: string;
  readonly offer?: LegacyV4LocalPostOffer;
  readonly searchUrl?: string;
  readonly state?: "LOCAL_POST_STATE_UNSPECIFIED" | "REJECTED" | "LIVE" | "PROCESSING";
  readonly summary?: string;
  readonly topicType?: "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED" | "STANDARD" | "EVENT" | "OFFER" | "ALERT";
  readonly updateTime?: string;
};
export const LegacyV4LocalPostSchema: v.GenericSchema<unknown, LegacyV4LocalPost> = v.looseObject({
  alertType: v.optional(v.union([v.literal("ALERT_TYPE_UNSPECIFIED"), v.literal("COVID_19")])),
  callToAction: v.optional(v.lazy(() => LegacyV4CallToActionSchema)),
  createTime: v.optional(v.string()),
  event: v.optional(v.lazy(() => LegacyV4LocalPostEventSchema)),
  languageCode: v.optional(v.string()),
  media: v.optional(v.array(v.lazy(() => LegacyV4MediaItemSchema))),
  name: v.optional(v.string()),
  offer: v.optional(v.lazy(() => LegacyV4LocalPostOfferSchema)),
  searchUrl: v.optional(v.string()),
  state: v.optional(v.union([v.literal("LOCAL_POST_STATE_UNSPECIFIED"), v.literal("REJECTED"), v.literal("LIVE"), v.literal("PROCESSING")])),
  summary: v.optional(v.string()),
  topicType: v.optional(v.union([v.literal("LOCAL_POST_TOPIC_TYPE_UNSPECIFIED"), v.literal("STANDARD"), v.literal("EVENT"), v.literal("OFFER"), v.literal("ALERT")])),
  updateTime: v.optional(v.string()),
});

/** All the information pertaining to an event featured in a local post. */
export type LegacyV4LocalPostEvent = {
  readonly schedule?: LegacyV4TimeInterval;
  readonly title?: string;
};
export const LegacyV4LocalPostEventSchema: v.GenericSchema<unknown, LegacyV4LocalPostEvent> = v.looseObject({
  schedule: v.optional(v.lazy(() => LegacyV4TimeIntervalSchema)),
  title: v.optional(v.string()),
});

/** All the metrics requested for a Local Post. */
export type LegacyV4LocalPostMetrics = {
  readonly localPostName?: string;
  readonly metricValues?: ReadonlyArray<LegacyV4MetricValue>;
};
export const LegacyV4LocalPostMetricsSchema: v.GenericSchema<unknown, LegacyV4LocalPostMetrics> = v.looseObject({
  localPostName: v.optional(v.string()),
  metricValues: v.optional(v.array(v.lazy(() => LegacyV4MetricValueSchema))),
});

/** Specific fields for offer posts. */
export type LegacyV4LocalPostOffer = {
  readonly couponCode?: string;
  readonly redeemOnlineUrl?: string;
  readonly termsConditions?: string;
};
export const LegacyV4LocalPostOfferSchema: v.GenericSchema<unknown, LegacyV4LocalPostOffer> = v.looseObject({
  couponCode: v.optional(v.string()),
  redeemOnlineUrl: v.optional(v.string()),
  termsConditions: v.optional(v.string()),
});

/** A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories. */
export type LegacyV4Location = {
  readonly additionalCategories?: ReadonlyArray<LegacyV4Category>;
  readonly additionalPhones?: ReadonlyArray<string>;
  readonly address?: LegacyV4PostalAddress;
  readonly adWordsLocationExtensions?: LegacyV4AdWordsLocationExtensions;
  readonly attributes?: ReadonlyArray<LegacyV4Attribute>;
  readonly labels?: ReadonlyArray<string>;
  readonly languageCode?: string;
  readonly latlng?: LegacyV4LatLng;
  readonly locationKey?: LegacyV4LocationKey;
  readonly locationName?: string;
  readonly locationState?: LegacyV4LocationState;
  readonly metadata?: LegacyV4Metadata;
  readonly moreHours?: ReadonlyArray<LegacyV4MoreHours>;
  readonly name?: string;
  readonly openInfo?: LegacyV4OpenInfo;
  readonly priceLists?: ReadonlyArray<LegacyV4PriceList>;
  readonly primaryCategory?: LegacyV4Category;
  readonly primaryPhone?: string;
  readonly profile?: LegacyV4Profile;
  readonly regularHours?: LegacyV4BusinessHours;
  readonly relationshipData?: LegacyV4RelationshipData;
  readonly serviceArea?: LegacyV4ServiceAreaBusiness;
  readonly specialHours?: LegacyV4SpecialHours;
  readonly storeCode?: string;
  readonly websiteUrl?: string;
};
export const LegacyV4LocationSchema: v.GenericSchema<unknown, LegacyV4Location> = v.looseObject({
  additionalCategories: v.optional(v.array(v.lazy(() => LegacyV4CategorySchema))),
  additionalPhones: v.optional(v.array(v.string())),
  address: v.optional(v.lazy(() => LegacyV4PostalAddressSchema)),
  adWordsLocationExtensions: v.optional(v.lazy(() => LegacyV4AdWordsLocationExtensionsSchema)),
  attributes: v.optional(v.array(v.lazy(() => LegacyV4AttributeSchema))),
  labels: v.optional(v.array(v.string())),
  languageCode: v.optional(v.string()),
  latlng: v.optional(v.lazy(() => LegacyV4LatLngSchema)),
  locationKey: v.optional(v.lazy(() => LegacyV4LocationKeySchema)),
  locationName: v.optional(v.string()),
  locationState: v.optional(v.lazy(() => LegacyV4LocationStateSchema)),
  metadata: v.optional(v.lazy(() => LegacyV4MetadataSchema)),
  moreHours: v.optional(v.array(v.lazy(() => LegacyV4MoreHoursSchema))),
  name: v.optional(v.string()),
  openInfo: v.optional(v.lazy(() => LegacyV4OpenInfoSchema)),
  priceLists: v.optional(v.array(v.lazy(() => LegacyV4PriceListSchema))),
  primaryCategory: v.optional(v.lazy(() => LegacyV4CategorySchema)),
  primaryPhone: v.optional(v.string()),
  profile: v.optional(v.lazy(() => LegacyV4ProfileSchema)),
  regularHours: v.optional(v.lazy(() => LegacyV4BusinessHoursSchema)),
  relationshipData: v.optional(v.lazy(() => LegacyV4RelationshipDataSchema)),
  serviceArea: v.optional(v.lazy(() => LegacyV4ServiceAreaBusinessSchema)),
  specialHours: v.optional(v.lazy(() => LegacyV4SpecialHoursSchema)),
  storeCode: v.optional(v.string()),
  websiteUrl: v.optional(v.string()),
});

/** How the media item is associated with its location. */
export type LegacyV4LocationAssociation = {
  readonly category?: "CATEGORY_UNSPECIFIED" | "COVER" | "PROFILE" | "LOGO" | "EXTERIOR" | "INTERIOR" | "PRODUCT" | "AT_WORK" | "FOOD_AND_DRINK" | "MENU" | "COMMON_AREA" | "ROOMS" | "TEAMS" | "ADDITIONAL";
  readonly priceListItemId?: string;
};
export const LegacyV4LocationAssociationSchema: v.GenericSchema<unknown, LegacyV4LocationAssociation> = v.looseObject({
  category: v.optional(v.union([v.literal("CATEGORY_UNSPECIFIED"), v.literal("COVER"), v.literal("PROFILE"), v.literal("LOGO"), v.literal("EXTERIOR"), v.literal("INTERIOR"), v.literal("PRODUCT"), v.literal("AT_WORK"), v.literal("FOOD_AND_DRINK"), v.literal("MENU"), v.literal("COMMON_AREA"), v.literal("ROOMS"), v.literal("TEAMS"), v.literal("ADDITIONAL")])),
  priceListItemId: v.optional(v.string()),
});

/** A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region. */
export type LegacyV4LocationDrivingDirectionMetrics = {
  readonly locationName?: string;
  readonly timeZone?: string;
  readonly topDirectionSources?: ReadonlyArray<LegacyV4TopDirectionSources>;
};
export const LegacyV4LocationDrivingDirectionMetricsSchema: v.GenericSchema<unknown, LegacyV4LocationDrivingDirectionMetrics> = v.looseObject({
  locationName: v.optional(v.string()),
  timeZone: v.optional(v.string()),
  topDirectionSources: v.optional(v.array(v.lazy(() => LegacyV4TopDirectionSourcesSchema))),
});

/** Alternate/surrogate key references for a location. */
export type LegacyV4LocationKey = {
  readonly explicitNoPlaceId?: boolean;
  readonly placeId?: string;
  readonly plusPageId?: string;
  readonly requestId?: string;
};
export const LegacyV4LocationKeySchema: v.GenericSchema<unknown, LegacyV4LocationKey> = v.looseObject({
  explicitNoPlaceId: v.optional(v.boolean()),
  placeId: v.optional(v.string()),
  plusPageId: v.optional(v.string()),
  requestId: v.optional(v.string()),
});

/** A series of Metrics and BreakdownMetrics associated with a Location over some time range. */
export type LegacyV4LocationMetrics = {
  readonly locationName?: string;
  readonly metricValues?: ReadonlyArray<LegacyV4MetricValue>;
  readonly timeZone?: string;
};
export const LegacyV4LocationMetricsSchema: v.GenericSchema<unknown, LegacyV4LocationMetrics> = v.looseObject({
  locationName: v.optional(v.string()),
  metricValues: v.optional(v.array(v.lazy(() => LegacyV4MetricValueSchema))),
  timeZone: v.optional(v.string()),
});

/** Represents a review with location information. */
export type LegacyV4LocationReview = {
  readonly name?: string;
  readonly review?: LegacyV4Review;
};
export const LegacyV4LocationReviewSchema: v.GenericSchema<unknown, LegacyV4LocationReview> = v.looseObject({
  name: v.optional(v.string()),
  review: v.optional(v.lazy(() => LegacyV4ReviewSchema)),
});

/** Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862) */
export type LegacyV4LocationState = {
  readonly canDelete?: boolean;
  readonly canHaveFoodMenus?: boolean;
  readonly canModifyServiceList?: boolean;
  readonly canOperateHealthData?: boolean;
  readonly canOperateLodgingData?: boolean;
  readonly canUpdate?: boolean;
  readonly hasPendingEdits?: boolean;
  readonly hasPendingVerification?: boolean;
  readonly isDisabled?: boolean;
  readonly isDisconnected?: boolean;
  readonly isDuplicate?: boolean;
  readonly isGoogleUpdated?: boolean;
  readonly isLocalPostApiDisabled?: boolean;
  readonly isPendingReview?: boolean;
  readonly isPublished?: boolean;
  readonly isSuspended?: boolean;
  readonly isVerified?: boolean;
  readonly needsReverification?: boolean;
};
export const LegacyV4LocationStateSchema: v.GenericSchema<unknown, LegacyV4LocationState> = v.looseObject({
  canDelete: v.optional(v.boolean()),
  canHaveFoodMenus: v.optional(v.boolean()),
  canModifyServiceList: v.optional(v.boolean()),
  canOperateHealthData: v.optional(v.boolean()),
  canOperateLodgingData: v.optional(v.boolean()),
  canUpdate: v.optional(v.boolean()),
  hasPendingEdits: v.optional(v.boolean()),
  hasPendingVerification: v.optional(v.boolean()),
  isDisabled: v.optional(v.boolean()),
  isDisconnected: v.optional(v.boolean()),
  isDuplicate: v.optional(v.boolean()),
  isGoogleUpdated: v.optional(v.boolean()),
  isLocalPostApiDisabled: v.optional(v.boolean()),
  isPendingReview: v.optional(v.boolean()),
  isPublished: v.optional(v.boolean()),
  isSuspended: v.optional(v.boolean()),
  isVerified: v.optional(v.boolean()),
  needsReverification: v.optional(v.boolean()),
});

/** Lodging of a location that provides accomodations. */
export type LegacyV4Lodging = {
  readonly accessibility?: LegacyV4Accessibility;
  readonly activities?: LegacyV4Activities;
  readonly allUnits?: LegacyV4GuestUnitFeatures;
  readonly business?: LegacyV4Business;
  readonly commonLivingArea?: LegacyV4LivingArea;
  readonly connectivity?: LegacyV4Connectivity;
  readonly families?: LegacyV4Families;
  readonly foodAndDrink?: LegacyV4FoodAndDrink;
  readonly guestUnits?: ReadonlyArray<LegacyV4GuestUnitType>;
  readonly healthAndSafety?: LegacyV4HealthAndSafety;
  readonly housekeeping?: LegacyV4Housekeeping;
  readonly metadata?: LegacyV4LodgingMetadata;
  readonly name?: string;
  readonly parking?: LegacyV4Parking;
  readonly pets?: LegacyV4Pets;
  readonly policies?: LegacyV4Policies;
  readonly pools?: LegacyV4Pools;
  readonly property?: LegacyV4Property;
  readonly services?: LegacyV4Services;
  readonly someUnits?: LegacyV4GuestUnitFeatures;
  readonly transportation?: LegacyV4Transportation;
  readonly wellness?: LegacyV4Wellness;
};
export const LegacyV4LodgingSchema: v.GenericSchema<unknown, LegacyV4Lodging> = v.looseObject({
  accessibility: v.optional(v.lazy(() => LegacyV4AccessibilitySchema)),
  activities: v.optional(v.lazy(() => LegacyV4ActivitiesSchema)),
  allUnits: v.optional(v.lazy(() => LegacyV4GuestUnitFeaturesSchema)),
  business: v.optional(v.lazy(() => LegacyV4BusinessSchema)),
  commonLivingArea: v.optional(v.lazy(() => LegacyV4LivingAreaSchema)),
  connectivity: v.optional(v.lazy(() => LegacyV4ConnectivitySchema)),
  families: v.optional(v.lazy(() => LegacyV4FamiliesSchema)),
  foodAndDrink: v.optional(v.lazy(() => LegacyV4FoodAndDrinkSchema)),
  guestUnits: v.optional(v.array(v.lazy(() => LegacyV4GuestUnitTypeSchema))),
  healthAndSafety: v.optional(v.lazy(() => LegacyV4HealthAndSafetySchema)),
  housekeeping: v.optional(v.lazy(() => LegacyV4HousekeepingSchema)),
  metadata: v.optional(v.lazy(() => LegacyV4LodgingMetadataSchema)),
  name: v.optional(v.string()),
  parking: v.optional(v.lazy(() => LegacyV4ParkingSchema)),
  pets: v.optional(v.lazy(() => LegacyV4PetsSchema)),
  policies: v.optional(v.lazy(() => LegacyV4PoliciesSchema)),
  pools: v.optional(v.lazy(() => LegacyV4PoolsSchema)),
  property: v.optional(v.lazy(() => LegacyV4PropertySchema)),
  services: v.optional(v.lazy(() => LegacyV4ServicesSchema)),
  someUnits: v.optional(v.lazy(() => LegacyV4GuestUnitFeaturesSchema)),
  transportation: v.optional(v.lazy(() => LegacyV4TransportationSchema)),
  wellness: v.optional(v.lazy(() => LegacyV4WellnessSchema)),
});

/** Metadata for the Lodging. */
export type LegacyV4LodgingMetadata = {
  readonly updateTime?: string;
};
export const LegacyV4LodgingMetadataSchema: v.GenericSchema<unknown, LegacyV4LodgingMetadata> = v.looseObject({
  updateTime: v.optional(v.string()),
});

/** Represents a possible match to a location. */
export type LegacyV4MatchedLocation = {
  readonly isExactMatch?: boolean;
  readonly location?: LegacyV4Location;
};
export const LegacyV4MatchedLocationSchema: v.GenericSchema<unknown, LegacyV4MatchedLocation> = v.looseObject({
  isExactMatch: v.optional(v.boolean()),
  location: v.optional(v.lazy(() => LegacyV4LocationSchema)),
});

/** Insights and statistics for the media item. */
export type LegacyV4MediaInsights = {
  readonly viewCount?: string;
};
export const LegacyV4MediaInsightsSchema: v.GenericSchema<unknown, LegacyV4MediaInsights> = v.looseObject({
  viewCount: v.optional(v.string()),
});

/** A single media item. */
export type LegacyV4MediaItem = {
  readonly attribution?: LegacyV4Attribution;
  readonly createTime?: string;
  readonly dataRef?: LegacyV4MediaItemDataRef;
  readonly description?: string;
  readonly dimensions?: LegacyV4Dimensions;
  readonly googleUrl?: string;
  readonly insights?: LegacyV4MediaInsights;
  readonly locationAssociation?: LegacyV4LocationAssociation;
  readonly mediaFormat?: "MEDIA_FORMAT_UNSPECIFIED" | "PHOTO" | "VIDEO";
  readonly name?: string;
  readonly sourceUrl?: string;
  readonly thumbnailUrl?: string;
};
export const LegacyV4MediaItemSchema: v.GenericSchema<unknown, LegacyV4MediaItem> = v.looseObject({
  attribution: v.optional(v.lazy(() => LegacyV4AttributionSchema)),
  createTime: v.optional(v.string()),
  dataRef: v.optional(v.lazy(() => LegacyV4MediaItemDataRefSchema)),
  description: v.optional(v.string()),
  dimensions: v.optional(v.lazy(() => LegacyV4DimensionsSchema)),
  googleUrl: v.optional(v.string()),
  insights: v.optional(v.lazy(() => LegacyV4MediaInsightsSchema)),
  locationAssociation: v.optional(v.lazy(() => LegacyV4LocationAssociationSchema)),
  mediaFormat: v.optional(v.union([v.literal("MEDIA_FORMAT_UNSPECIFIED"), v.literal("PHOTO"), v.literal("VIDEO")])),
  name: v.optional(v.string()),
  sourceUrl: v.optional(v.string()),
  thumbnailUrl: v.optional(v.string()),
});

/** Reference to the photo binary data of a `MediaItem` uploaded through the Google My Business API. Create a data ref using StartUploadMediaItemData, and use this ref when uploading bytes to [UpdateMedia] and subsequently calling CreateMediaItem. */
export type LegacyV4MediaItemDataRef = {
  readonly resourceName?: string;
};
export const LegacyV4MediaItemDataRefSchema: v.GenericSchema<unknown, LegacyV4MediaItemDataRef> = v.looseObject({
  resourceName: v.optional(v.string()),
});

/** Label to be used when displaying the menu and its various sub-components. */
export type LegacyV4MenuLabel = {
  readonly description?: string;
  readonly displayName?: string;
  readonly languageCode?: string;
};
export const LegacyV4MenuLabelSchema: v.GenericSchema<unknown, LegacyV4MenuLabel> = v.looseObject({
  description: v.optional(v.string()),
  displayName: v.optional(v.string()),
  languageCode: v.optional(v.string()),
});

/** Additional non-user-editable information about the location. */
export type LegacyV4Metadata = {
  readonly duplicate?: LegacyV4Duplicate;
  readonly mapsUrl?: string;
  readonly newReviewUrl?: string;
};
export const LegacyV4MetadataSchema: v.GenericSchema<unknown, LegacyV4Metadata> = v.looseObject({
  duplicate: v.optional(v.lazy(() => LegacyV4DuplicateSchema)),
  mapsUrl: v.optional(v.string()),
  newReviewUrl: v.optional(v.string()),
});

/** A request to return values for one metric and the options for how those values should be returned. */
export type LegacyV4MetricRequest = {
  readonly metric?: "METRIC_UNSPECIFIED" | "ALL" | "QUERIES_DIRECT" | "QUERIES_INDIRECT" | "QUERIES_CHAIN" | "VIEWS_MAPS" | "VIEWS_SEARCH" | "ACTIONS_WEBSITE" | "ACTIONS_PHONE" | "ACTIONS_DRIVING_DIRECTIONS" | "PHOTOS_VIEWS_MERCHANT" | "PHOTOS_VIEWS_CUSTOMERS" | "PHOTOS_COUNT_MERCHANT" | "PHOTOS_COUNT_CUSTOMERS" | "LOCAL_POST_VIEWS_SEARCH" | "LOCAL_POST_ACTIONS_CALL_TO_ACTION";
  readonly options?: ReadonlyArray<"METRIC_OPTION_UNSPECIFIED" | "AGGREGATED_TOTAL" | "AGGREGATED_DAILY" | "BREAKDOWN_DAY_OF_WEEK" | "BREAKDOWN_HOUR_OF_DAY">;
};
export const LegacyV4MetricRequestSchema: v.GenericSchema<unknown, LegacyV4MetricRequest> = v.looseObject({
  metric: v.optional(v.union([v.literal("METRIC_UNSPECIFIED"), v.literal("ALL"), v.literal("QUERIES_DIRECT"), v.literal("QUERIES_INDIRECT"), v.literal("QUERIES_CHAIN"), v.literal("VIEWS_MAPS"), v.literal("VIEWS_SEARCH"), v.literal("ACTIONS_WEBSITE"), v.literal("ACTIONS_PHONE"), v.literal("ACTIONS_DRIVING_DIRECTIONS"), v.literal("PHOTOS_VIEWS_MERCHANT"), v.literal("PHOTOS_VIEWS_CUSTOMERS"), v.literal("PHOTOS_COUNT_MERCHANT"), v.literal("PHOTOS_COUNT_CUSTOMERS"), v.literal("LOCAL_POST_VIEWS_SEARCH"), v.literal("LOCAL_POST_ACTIONS_CALL_TO_ACTION")])),
  options: v.optional(v.array(v.union([v.literal("METRIC_OPTION_UNSPECIFIED"), v.literal("AGGREGATED_TOTAL"), v.literal("AGGREGATED_DAILY"), v.literal("BREAKDOWN_DAY_OF_WEEK"), v.literal("BREAKDOWN_HOUR_OF_DAY")]))),
});

/** A value for a single Metric from a starting time. */
export type LegacyV4MetricValue = {
  readonly dimensionalValues?: ReadonlyArray<LegacyV4DimensionalMetricValue>;
  readonly metric?: "METRIC_UNSPECIFIED" | "ALL" | "QUERIES_DIRECT" | "QUERIES_INDIRECT" | "QUERIES_CHAIN" | "VIEWS_MAPS" | "VIEWS_SEARCH" | "ACTIONS_WEBSITE" | "ACTIONS_PHONE" | "ACTIONS_DRIVING_DIRECTIONS" | "PHOTOS_VIEWS_MERCHANT" | "PHOTOS_VIEWS_CUSTOMERS" | "PHOTOS_COUNT_MERCHANT" | "PHOTOS_COUNT_CUSTOMERS" | "LOCAL_POST_VIEWS_SEARCH" | "LOCAL_POST_ACTIONS_CALL_TO_ACTION";
  readonly totalValue?: LegacyV4DimensionalMetricValue;
};
export const LegacyV4MetricValueSchema: v.GenericSchema<unknown, LegacyV4MetricValue> = v.looseObject({
  dimensionalValues: v.optional(v.array(v.lazy(() => LegacyV4DimensionalMetricValueSchema))),
  metric: v.optional(v.union([v.literal("METRIC_UNSPECIFIED"), v.literal("ALL"), v.literal("QUERIES_DIRECT"), v.literal("QUERIES_INDIRECT"), v.literal("QUERIES_CHAIN"), v.literal("VIEWS_MAPS"), v.literal("VIEWS_SEARCH"), v.literal("ACTIONS_WEBSITE"), v.literal("ACTIONS_PHONE"), v.literal("ACTIONS_DRIVING_DIRECTIONS"), v.literal("PHOTOS_VIEWS_MERCHANT"), v.literal("PHOTOS_VIEWS_CUSTOMERS"), v.literal("PHOTOS_COUNT_MERCHANT"), v.literal("PHOTOS_COUNT_CUSTOMERS"), v.literal("LOCAL_POST_VIEWS_SEARCH"), v.literal("LOCAL_POST_ACTIONS_CALL_TO_ACTION")])),
  totalValue: v.optional(v.lazy(() => LegacyV4DimensionalMetricValueSchema)),
});

/** Minimized contact measures implemented by the hotel during COVID-19. */
export type LegacyV4MinimizedContact = {
  readonly contactlessCheckinCheckout?: boolean;
  readonly contactlessCheckinCheckoutException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly digitalGuestRoomKeys?: boolean;
  readonly digitalGuestRoomKeysException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly housekeepingScheduledRequestOnly?: boolean;
  readonly housekeepingScheduledRequestOnlyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly noHighTouchItemsCommonAreas?: boolean;
  readonly noHighTouchItemsCommonAreasException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly noHighTouchItemsGuestRooms?: boolean;
  readonly noHighTouchItemsGuestRoomsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly plasticKeycardsDisinfected?: boolean;
  readonly plasticKeycardsDisinfectedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly roomBookingsBuffer?: boolean;
  readonly roomBookingsBufferException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4MinimizedContactSchema: v.GenericSchema<unknown, LegacyV4MinimizedContact> = v.looseObject({
  contactlessCheckinCheckout: v.optional(v.boolean()),
  contactlessCheckinCheckoutException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  digitalGuestRoomKeys: v.optional(v.boolean()),
  digitalGuestRoomKeysException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  housekeepingScheduledRequestOnly: v.optional(v.boolean()),
  housekeepingScheduledRequestOnlyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  noHighTouchItemsCommonAreas: v.optional(v.boolean()),
  noHighTouchItemsCommonAreasException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  noHighTouchItemsGuestRooms: v.optional(v.boolean()),
  noHighTouchItemsGuestRoomsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  plasticKeycardsDisinfected: v.optional(v.boolean()),
  plasticKeycardsDisinfectedException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  roomBookingsBuffer: v.optional(v.boolean()),
  roomBookingsBufferException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Represents an amount of money with its currency type. */
export type LegacyV4Money = {
  readonly currencyCode?: string;
  readonly nanos?: number;
  readonly units?: string;
};
export const LegacyV4MoneySchema: v.GenericSchema<unknown, LegacyV4Money> = v.looseObject({
  currencyCode: v.optional(v.string()),
  nanos: v.optional(v.pipe(v.number(), v.integer())),
  units: v.optional(v.string()),
});

/** The time periods during which a location is open for certain types of business. */
export type LegacyV4MoreHours = {
  readonly hoursTypeId?: string;
  readonly periods?: ReadonlyArray<LegacyV4TimePeriod>;
};
export const LegacyV4MoreHoursSchema: v.GenericSchema<unknown, LegacyV4MoreHours> = v.looseObject({
  hoursTypeId: v.optional(v.string()),
  periods: v.optional(v.array(v.lazy(() => LegacyV4TimePeriodSchema))),
});

/** More hours types that a business can offers, in addition to its regular hours. */
export type LegacyV4MoreHoursType = {
  readonly displayName?: string;
  readonly hoursTypeId?: string;
  readonly localizedDisplayName?: string;
};
export const LegacyV4MoreHoursTypeSchema: v.GenericSchema<unknown, LegacyV4MoreHoursType> = v.looseObject({
  displayName: v.optional(v.string()),
  hoursTypeId: v.optional(v.string()),
  localizedDisplayName: v.optional(v.string()),
});

/** A Google Cloud Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification settings resource per-account. */
export type LegacyV4Notifications = {
  readonly name?: string;
  readonly notificationTypes?: ReadonlyArray<"NOTIFICATION_TYPE_UNSPECIFIED" | "GOOGLE_UPDATE" | "NEW_REVIEW" | "UPDATED_REVIEW" | "NEW_CUSTOMER_MEDIA" | "NEW_QUESTION" | "UPDATED_QUESTION" | "NEW_ANSWER" | "UPDATED_ANSWER" | "UPDATED_LOCATION_STATE">;
  readonly topicName?: string;
};
export const LegacyV4NotificationsSchema: v.GenericSchema<unknown, LegacyV4Notifications> = v.looseObject({
  name: v.optional(v.string()),
  notificationTypes: v.optional(v.array(v.union([v.literal("NOTIFICATION_TYPE_UNSPECIFIED"), v.literal("GOOGLE_UPDATE"), v.literal("NEW_REVIEW"), v.literal("UPDATED_REVIEW"), v.literal("NEW_CUSTOMER_MEDIA"), v.literal("NEW_QUESTION"), v.literal("UPDATED_QUESTION"), v.literal("NEW_ANSWER"), v.literal("UPDATED_ANSWER"), v.literal("UPDATED_LOCATION_STATE")]))),
  topicName: v.optional(v.string()),
});

/** This message denotes nutrition information with an upper bound and lower bound range and can be represented by mass unit. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
export type LegacyV4NutritionFact = {
  readonly lowerAmount?: number;
  readonly unit?: "MASS_UNIT_UNSPECIFIED" | "GRAM" | "MILLIGRAM";
  readonly upperAmount?: number;
};
export const LegacyV4NutritionFactSchema: v.GenericSchema<unknown, LegacyV4NutritionFact> = v.looseObject({
  lowerAmount: v.optional(v.number()),
  unit: v.optional(v.union([v.literal("MASS_UNIT_UNSPECIFIED"), v.literal("GRAM"), v.literal("MILLIGRAM")])),
  upperAmount: v.optional(v.number()),
});

/** This message represents nutrition facts for a food dish. */
export type LegacyV4NutritionFacts = {
  readonly calories?: LegacyV4CaloriesFact;
  readonly cholesterol?: LegacyV4NutritionFact;
  readonly protein?: LegacyV4NutritionFact;
  readonly sodium?: LegacyV4NutritionFact;
  readonly totalCarbohydrate?: LegacyV4NutritionFact;
  readonly totalFat?: LegacyV4NutritionFact;
};
export const LegacyV4NutritionFactsSchema: v.GenericSchema<unknown, LegacyV4NutritionFacts> = v.looseObject({
  calories: v.optional(v.lazy(() => LegacyV4CaloriesFactSchema)),
  cholesterol: v.optional(v.lazy(() => LegacyV4NutritionFactSchema)),
  protein: v.optional(v.lazy(() => LegacyV4NutritionFactSchema)),
  sodium: v.optional(v.lazy(() => LegacyV4NutritionFactSchema)),
  totalCarbohydrate: v.optional(v.lazy(() => LegacyV4NutritionFactSchema)),
  totalFat: v.optional(v.lazy(() => LegacyV4NutritionFactSchema)),
});

/** Information related to the opening state of the business. */
export type LegacyV4OpenInfo = {
  readonly canReopen?: boolean;
  readonly openingDate?: LegacyV4Date;
  readonly status?: "OPEN_FOR_BUSINESS_UNSPECIFIED" | "OPEN" | "CLOSED_PERMANENTLY" | "CLOSED_TEMPORARILY";
};
export const LegacyV4OpenInfoSchema: v.GenericSchema<unknown, LegacyV4OpenInfo> = v.looseObject({
  canReopen: v.optional(v.boolean()),
  openingDate: v.optional(v.lazy(() => LegacyV4DateSchema)),
  status: v.optional(v.union([v.literal("OPEN_FOR_BUSINESS_UNSPECIFIED"), v.literal("OPEN"), v.literal("CLOSED_PERMANENTLY"), v.literal("CLOSED_TEMPORARILY")])),
});

/** Additional Info stored for an organization. */
export type LegacyV4OrganizationInfo = {
  readonly phoneNumber?: string;
  readonly postalAddress?: LegacyV4PostalAddress;
  readonly registeredDomain?: string;
};
export const LegacyV4OrganizationInfoSchema: v.GenericSchema<unknown, LegacyV4OrganizationInfo> = v.looseObject({
  phoneNumber: v.optional(v.string()),
  postalAddress: v.optional(v.lazy(() => LegacyV4PostalAddressSchema)),
  registeredDomain: v.optional(v.string()),
});

/** Parking options at the property. */
export type LegacyV4Parking = {
  readonly electricCarChargingStations?: boolean;
  readonly electricCarChargingStationsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeParking?: boolean;
  readonly freeParkingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeSelfParking?: boolean;
  readonly freeSelfParkingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeValetParking?: boolean;
  readonly freeValetParkingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly parkingAvailable?: boolean;
  readonly parkingAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly selfParkingAvailable?: boolean;
  readonly selfParkingAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly valetParkingAvailable?: boolean;
  readonly valetParkingAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4ParkingSchema: v.GenericSchema<unknown, LegacyV4Parking> = v.looseObject({
  electricCarChargingStations: v.optional(v.boolean()),
  electricCarChargingStationsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeParking: v.optional(v.boolean()),
  freeParkingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeSelfParking: v.optional(v.boolean()),
  freeSelfParkingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeValetParking: v.optional(v.boolean()),
  freeValetParkingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  parkingAvailable: v.optional(v.boolean()),
  parkingAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  selfParkingAvailable: v.optional(v.boolean()),
  selfParkingAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  valetParkingAvailable: v.optional(v.boolean()),
  valetParkingAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Forms of payment accepted at the property. */
export type LegacyV4PaymentOptions = {
  readonly cash?: boolean;
  readonly cashException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly cheque?: boolean;
  readonly chequeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly creditCard?: boolean;
  readonly creditCardException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly debitCard?: boolean;
  readonly debitCardException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobileNfc?: boolean;
  readonly mobileNfcException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4PaymentOptionsSchema: v.GenericSchema<unknown, LegacyV4PaymentOptions> = v.looseObject({
  cash: v.optional(v.boolean()),
  cashException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  cheque: v.optional(v.boolean()),
  chequeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  creditCard: v.optional(v.boolean()),
  creditCardException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  debitCard: v.optional(v.boolean()),
  debitCardException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobileNfc: v.optional(v.boolean()),
  mobileNfcException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Personal protection measures implemented by the hotel during COVID-19. */
export type LegacyV4PersonalProtection = {
  readonly commonAreasOfferSanitizingItems?: boolean;
  readonly commonAreasOfferSanitizingItemsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly faceMaskRequired?: boolean;
  readonly faceMaskRequiredException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly guestRoomHygieneKitsAvailable?: boolean;
  readonly guestRoomHygieneKitsAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly protectiveEquipmentAvailable?: boolean;
  readonly protectiveEquipmentAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4PersonalProtectionSchema: v.GenericSchema<unknown, LegacyV4PersonalProtection> = v.looseObject({
  commonAreasOfferSanitizingItems: v.optional(v.boolean()),
  commonAreasOfferSanitizingItemsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  faceMaskRequired: v.optional(v.boolean()),
  faceMaskRequiredException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  guestRoomHygieneKitsAvailable: v.optional(v.boolean()),
  guestRoomHygieneKitsAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  protectiveEquipmentAvailable: v.optional(v.boolean()),
  protectiveEquipmentAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Policies regarding guest-owned animals. */
export type LegacyV4Pets = {
  readonly catsAllowed?: boolean;
  readonly catsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly dogsAllowed?: boolean;
  readonly dogsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly petsAllowed?: boolean;
  readonly petsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly petsAllowedFree?: boolean;
  readonly petsAllowedFreeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4PetsSchema: v.GenericSchema<unknown, LegacyV4Pets> = v.looseObject({
  catsAllowed: v.optional(v.boolean()),
  catsAllowedException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  dogsAllowed: v.optional(v.boolean()),
  dogsAllowedException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  petsAllowed: v.optional(v.boolean()),
  petsAllowedException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  petsAllowedFree: v.optional(v.boolean()),
  petsAllowedFreeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Input for PHONE_CALL/SMS verification. */
export type LegacyV4PhoneInput = {
  readonly phoneNumber?: string;
};
export const LegacyV4PhoneInputSchema: v.GenericSchema<unknown, LegacyV4PhoneInput> = v.looseObject({
  phoneNumber: v.optional(v.string()),
});

/** Display Data for verifications through phone, e.g. phone call, sms. */
export type LegacyV4PhoneVerificationData = {
  readonly phoneNumber?: string;
};
export const LegacyV4PhoneVerificationDataSchema: v.GenericSchema<unknown, LegacyV4PhoneVerificationData> = v.looseObject({
  phoneNumber: v.optional(v.string()),
});

/** Physical distancing measures implemented by the hotel during COVID-19. */
export type LegacyV4PhysicalDistancing = {
  readonly commonAreasPhysicalDistancingArranged?: boolean;
  readonly commonAreasPhysicalDistancingArrangedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly physicalDistancingRequired?: boolean;
  readonly physicalDistancingRequiredException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly safetyDividers?: boolean;
  readonly safetyDividersException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly sharedAreasLimitedOccupancy?: boolean;
  readonly sharedAreasLimitedOccupancyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wellnessAreasHavePrivateSpaces?: boolean;
  readonly wellnessAreasHavePrivateSpacesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4PhysicalDistancingSchema: v.GenericSchema<unknown, LegacyV4PhysicalDistancing> = v.looseObject({
  commonAreasPhysicalDistancingArranged: v.optional(v.boolean()),
  commonAreasPhysicalDistancingArrangedException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  physicalDistancingRequired: v.optional(v.boolean()),
  physicalDistancingRequiredException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  safetyDividers: v.optional(v.boolean()),
  safetyDividersException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  sharedAreasLimitedOccupancy: v.optional(v.boolean()),
  sharedAreasLimitedOccupancyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  wellnessAreasHavePrivateSpaces: v.optional(v.boolean()),
  wellnessAreasHavePrivateSpacesException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Defines an area that's represented by a place ID. */
export type LegacyV4PlaceInfo = {
  readonly name?: string;
  readonly placeId?: string;
};
export const LegacyV4PlaceInfoSchema: v.GenericSchema<unknown, LegacyV4PlaceInfo> = v.looseObject({
  name: v.optional(v.string()),
  placeId: v.optional(v.string()),
});

/** Defines the union of areas represented by a set of places. */
export type LegacyV4Places = {
  readonly placeInfos?: ReadonlyArray<LegacyV4PlaceInfo>;
};
export const LegacyV4PlacesSchema: v.GenericSchema<unknown, LegacyV4Places> = v.looseObject({
  placeInfos: v.optional(v.array(v.lazy(() => LegacyV4PlaceInfoSchema))),
});

/** A radius around a particular point (latitude/longitude). */
export type LegacyV4PointRadius = {
  readonly latlng?: LegacyV4LatLng;
  readonly radiusKm?: number;
};
export const LegacyV4PointRadiusSchema: v.GenericSchema<unknown, LegacyV4PointRadius> = v.looseObject({
  latlng: v.optional(v.lazy(() => LegacyV4LatLngSchema)),
  radiusKm: v.optional(v.number()),
});

/** Property rules that impact guests. */
export type LegacyV4Policies = {
  readonly allInclusiveAvailable?: boolean;
  readonly allInclusiveAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly allInclusiveOnly?: boolean;
  readonly allInclusiveOnlyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly checkinTime?: LegacyV4TimeOfDay;
  readonly checkinTimeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly checkoutTime?: LegacyV4TimeOfDay;
  readonly checkoutTimeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsStayFree?: boolean;
  readonly kidsStayFreeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly maxChildAge?: number;
  readonly maxChildAgeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly maxKidsStayFreeCount?: number;
  readonly maxKidsStayFreeCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly paymentOptions?: LegacyV4PaymentOptions;
  readonly smokeFreeProperty?: boolean;
  readonly smokeFreePropertyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4PoliciesSchema: v.GenericSchema<unknown, LegacyV4Policies> = v.looseObject({
  allInclusiveAvailable: v.optional(v.boolean()),
  allInclusiveAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  allInclusiveOnly: v.optional(v.boolean()),
  allInclusiveOnlyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  checkinTime: v.optional(v.lazy(() => LegacyV4TimeOfDaySchema)),
  checkinTimeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  checkoutTime: v.optional(v.lazy(() => LegacyV4TimeOfDaySchema)),
  checkoutTimeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  kidsStayFree: v.optional(v.boolean()),
  kidsStayFreeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  maxChildAge: v.optional(v.pipe(v.number(), v.integer())),
  maxChildAgeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  maxKidsStayFreeCount: v.optional(v.pipe(v.number(), v.integer())),
  maxKidsStayFreeCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  paymentOptions: v.optional(v.lazy(() => LegacyV4PaymentOptionsSchema)),
  smokeFreeProperty: v.optional(v.boolean()),
  smokeFreePropertyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Swimming pool or recreational water facilities available at the hotel. */
export type LegacyV4Pools = {
  readonly adultPool?: boolean;
  readonly adultPoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly hotTub?: boolean;
  readonly hotTubException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly indoorPool?: boolean;
  readonly indoorPoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly indoorPoolsCount?: number;
  readonly indoorPoolsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly lazyRiver?: boolean;
  readonly lazyRiverException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly lifeguard?: boolean;
  readonly lifeguardException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly outdoorPool?: boolean;
  readonly outdoorPoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly outdoorPoolsCount?: number;
  readonly outdoorPoolsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly pool?: boolean;
  readonly poolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly poolsCount?: number;
  readonly poolsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wadingPool?: boolean;
  readonly wadingPoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly waterPark?: boolean;
  readonly waterParkException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly waterslide?: boolean;
  readonly waterslideException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wavePool?: boolean;
  readonly wavePoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4PoolsSchema: v.GenericSchema<unknown, LegacyV4Pools> = v.looseObject({
  adultPool: v.optional(v.boolean()),
  adultPoolException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  hotTub: v.optional(v.boolean()),
  hotTubException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  indoorPool: v.optional(v.boolean()),
  indoorPoolException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  indoorPoolsCount: v.optional(v.pipe(v.number(), v.integer())),
  indoorPoolsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  lazyRiver: v.optional(v.boolean()),
  lazyRiverException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  lifeguard: v.optional(v.boolean()),
  lifeguardException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  outdoorPool: v.optional(v.boolean()),
  outdoorPoolException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  outdoorPoolsCount: v.optional(v.pipe(v.number(), v.integer())),
  outdoorPoolsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  pool: v.optional(v.boolean()),
  poolException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  poolsCount: v.optional(v.pipe(v.number(), v.integer())),
  poolsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  wadingPool: v.optional(v.boolean()),
  wadingPoolException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  waterPark: v.optional(v.boolean()),
  waterParkException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  waterslide: v.optional(v.boolean()),
  waterslideException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  wavePool: v.optional(v.boolean()),
  wavePoolException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Serving portion size of a food dish. */
export type LegacyV4PortionSize = {
  readonly quantity?: number;
  readonly unit?: ReadonlyArray<LegacyV4MenuLabel>;
};
export const LegacyV4PortionSizeSchema: v.GenericSchema<unknown, LegacyV4PortionSize> = v.looseObject({
  quantity: v.optional(v.pipe(v.number(), v.integer())),
  unit: v.optional(v.array(v.lazy(() => LegacyV4MenuLabelSchema))),
});

/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
export type LegacyV4PostalAddress = {
  readonly addressLines?: ReadonlyArray<string>;
  readonly administrativeArea?: string;
  readonly languageCode?: string;
  readonly locality?: string;
  readonly organization?: string;
  readonly postalCode?: string;
  readonly recipients?: ReadonlyArray<string>;
  readonly regionCode?: string;
  readonly revision?: number;
  readonly sortingCode?: string;
  readonly sublocality?: string;
};
export const LegacyV4PostalAddressSchema: v.GenericSchema<unknown, LegacyV4PostalAddress> = v.looseObject({
  addressLines: v.optional(v.array(v.string())),
  administrativeArea: v.optional(v.string()),
  languageCode: v.optional(v.string()),
  locality: v.optional(v.string()),
  organization: v.optional(v.string()),
  postalCode: v.optional(v.string()),
  recipients: v.optional(v.array(v.string())),
  regionCode: v.optional(v.string()),
  revision: v.optional(v.pipe(v.number(), v.integer())),
  sortingCode: v.optional(v.string()),
  sublocality: v.optional(v.string()),
});

/** A list of item price information. Price lists are structured as one or more price lists, each containing one or more sections with one or more items. For example, food price lists may represent breakfast/lunch/dinner menus, with sections for burgers/steak/seafood. */
export type LegacyV4PriceList = {
  readonly labels?: ReadonlyArray<LegacyV4Label>;
  readonly priceListId?: string;
  readonly sections?: ReadonlyArray<LegacyV4Section>;
  readonly sourceUrl?: string;
};
export const LegacyV4PriceListSchema: v.GenericSchema<unknown, LegacyV4PriceList> = v.looseObject({
  labels: v.optional(v.array(v.lazy(() => LegacyV4LabelSchema))),
  priceListId: v.optional(v.string()),
  sections: v.optional(v.array(v.lazy(() => LegacyV4SectionSchema))),
  sourceUrl: v.optional(v.string()),
});

/** All information pertaining to the location's profile. */
export type LegacyV4Profile = {
  readonly description?: string;
};
export const LegacyV4ProfileSchema: v.GenericSchema<unknown, LegacyV4Profile> = v.looseObject({
  description: v.optional(v.string()),
});

/** General factual information about the property's physical structure and important dates. */
export type LegacyV4Property = {
  readonly builtYear?: number;
  readonly builtYearException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly floorsCount?: number;
  readonly floorsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly lastRenovatedYear?: number;
  readonly lastRenovatedYearException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly roomsCount?: number;
  readonly roomsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4PropertySchema: v.GenericSchema<unknown, LegacyV4Property> = v.looseObject({
  builtYear: v.optional(v.pipe(v.number(), v.integer())),
  builtYearException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  floorsCount: v.optional(v.pipe(v.number(), v.integer())),
  floorsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  lastRenovatedYear: v.optional(v.pipe(v.number(), v.integer())),
  lastRenovatedYearException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  roomsCount: v.optional(v.pipe(v.number(), v.integer())),
  roomsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Represents a single question and some of its answers. */
export type LegacyV4Question = {
  readonly author?: LegacyV4Author;
  readonly createTime?: string;
  readonly name?: string;
  readonly text?: string;
  readonly topAnswers?: ReadonlyArray<LegacyV4Answer>;
  readonly totalAnswerCount?: number;
  readonly updateTime?: string;
  readonly upvoteCount?: number;
};
export const LegacyV4QuestionSchema: v.GenericSchema<unknown, LegacyV4Question> = v.looseObject({
  author: v.optional(v.lazy(() => LegacyV4AuthorSchema)),
  createTime: v.optional(v.string()),
  name: v.optional(v.string()),
  text: v.optional(v.string()),
  topAnswers: v.optional(v.array(v.lazy(() => LegacyV4AnswerSchema))),
  totalAnswerCount: v.optional(v.pipe(v.number(), v.integer())),
  updateTime: v.optional(v.string()),
  upvoteCount: v.optional(v.pipe(v.number(), v.integer())),
});

/** A region with its associated request count. */
export type LegacyV4RegionCount = {
  readonly count?: string;
  readonly label?: string;
  readonly latlng?: LegacyV4LatLng;
};
export const LegacyV4RegionCountSchema: v.GenericSchema<unknown, LegacyV4RegionCount> = v.looseObject({
  count: v.optional(v.string()),
  label: v.optional(v.string()),
  latlng: v.optional(v.lazy(() => LegacyV4LatLngSchema)),
});

/** Information of all parent and children locations related to this one. */
export type LegacyV4RelationshipData = {
  readonly parentChain?: string;
};
export const LegacyV4RelationshipDataSchema: v.GenericSchema<unknown, LegacyV4RelationshipData> = v.looseObject({
  parentChain: v.optional(v.string()),
});

/** Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified. */
export type LegacyV4RepeatedEnumAttributeValue = {
  readonly setValues?: ReadonlyArray<string>;
  readonly unsetValues?: ReadonlyArray<string>;
};
export const LegacyV4RepeatedEnumAttributeValueSchema: v.GenericSchema<unknown, LegacyV4RepeatedEnumAttributeValue> = v.looseObject({
  setValues: v.optional(v.array(v.string())),
  unsetValues: v.optional(v.array(v.string())),
});

/** Request message for reporting a GoogleLocation. */
export type LegacyV4ReportGoogleLocationRequest = {
  readonly locationGroupName?: string;
  readonly reportReasonBadLocation?: "BAD_LOCATION_REASON_UNSPECIFIED" | "NOT_A_LOCATION" | "PERMANENTLY_CLOSED" | "DOES_NOT_EXIST" | "SPAM" | "NOT_A_BUSINESS" | "MOVED" | "DUPLICATE";
  readonly reportReasonBadRecommendation?: "BAD_RECOMMENDATION_REASON_UNSPECIFIED" | "NOT_A_STORE_FRONT" | "NOT_PART_OF_SUGGESTED_CHAIN" | "IRRELEVANT";
  readonly reportReasonElaboration?: string;
  readonly reportReasonLanguageCode?: string;
};
export const LegacyV4ReportGoogleLocationRequestSchema: v.GenericSchema<unknown, LegacyV4ReportGoogleLocationRequest> = v.looseObject({
  locationGroupName: v.optional(v.string()),
  reportReasonBadLocation: v.optional(v.union([v.literal("BAD_LOCATION_REASON_UNSPECIFIED"), v.literal("NOT_A_LOCATION"), v.literal("PERMANENTLY_CLOSED"), v.literal("DOES_NOT_EXIST"), v.literal("SPAM"), v.literal("NOT_A_BUSINESS"), v.literal("MOVED"), v.literal("DUPLICATE")])),
  reportReasonBadRecommendation: v.optional(v.union([v.literal("BAD_RECOMMENDATION_REASON_UNSPECIFIED"), v.literal("NOT_A_STORE_FRONT"), v.literal("NOT_PART_OF_SUGGESTED_CHAIN"), v.literal("IRRELEVANT")])),
  reportReasonElaboration: v.optional(v.string()),
  reportReasonLanguageCode: v.optional(v.string()),
});

/** Request message for Insights.ReportLocalPostInsights */
export type LegacyV4ReportLocalPostInsightsRequest = {
  readonly basicRequest?: LegacyV4BasicMetricsRequest;
  readonly localPostNames?: ReadonlyArray<string>;
};
export const LegacyV4ReportLocalPostInsightsRequestSchema: v.GenericSchema<unknown, LegacyV4ReportLocalPostInsightsRequest> = v.looseObject({
  basicRequest: v.optional(v.lazy(() => LegacyV4BasicMetricsRequestSchema)),
  localPostNames: v.optional(v.array(v.string())),
});

/** Response message for Insights.ReportLocalPostInsights */
export type LegacyV4ReportLocalPostInsightsResponse = {
  readonly localPostMetrics?: ReadonlyArray<LegacyV4LocalPostMetrics>;
  readonly name?: string;
  readonly timeZone?: string;
};
export const LegacyV4ReportLocalPostInsightsResponseSchema: v.GenericSchema<unknown, LegacyV4ReportLocalPostInsightsResponse> = v.looseObject({
  localPostMetrics: v.optional(v.array(v.lazy(() => LegacyV4LocalPostMetricsSchema))),
  name: v.optional(v.string()),
  timeZone: v.optional(v.string()),
});

/** Request message for Insights.ReportLocationInsights. */
export type LegacyV4ReportLocationInsightsRequest = {
  readonly basicRequest?: LegacyV4BasicMetricsRequest;
  readonly drivingDirectionsRequest?: LegacyV4DrivingDirectionMetricsRequest;
  readonly locationNames?: ReadonlyArray<string>;
};
export const LegacyV4ReportLocationInsightsRequestSchema: v.GenericSchema<unknown, LegacyV4ReportLocationInsightsRequest> = v.looseObject({
  basicRequest: v.optional(v.lazy(() => LegacyV4BasicMetricsRequestSchema)),
  drivingDirectionsRequest: v.optional(v.lazy(() => LegacyV4DrivingDirectionMetricsRequestSchema)),
  locationNames: v.optional(v.array(v.string())),
});

/** Response message for `Insights.ReportLocationInsights`. */
export type LegacyV4ReportLocationInsightsResponse = {
  readonly locationDrivingDirectionMetrics?: ReadonlyArray<LegacyV4LocationDrivingDirectionMetrics>;
  readonly locationMetrics?: ReadonlyArray<LegacyV4LocationMetrics>;
};
export const LegacyV4ReportLocationInsightsResponseSchema: v.GenericSchema<unknown, LegacyV4ReportLocationInsightsResponse> = v.looseObject({
  locationDrivingDirectionMetrics: v.optional(v.array(v.lazy(() => LegacyV4LocationDrivingDirectionMetricsSchema))),
  locationMetrics: v.optional(v.array(v.lazy(() => LegacyV4LocationMetricsSchema))),
});

/** Output only. Represents a review for a location. */
export type LegacyV4Review = {
  readonly comment?: string;
  readonly createTime?: string;
  readonly name?: string;
  readonly reviewer?: LegacyV4Reviewer;
  readonly reviewId?: string;
  readonly reviewReply?: LegacyV4ReviewReply;
  readonly starRating?: "STAR_RATING_UNSPECIFIED" | "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";
  readonly updateTime?: string;
};
export const LegacyV4ReviewSchema: v.GenericSchema<unknown, LegacyV4Review> = v.looseObject({
  comment: v.optional(v.string()),
  createTime: v.optional(v.string()),
  name: v.optional(v.string()),
  reviewer: v.optional(v.lazy(() => LegacyV4ReviewerSchema)),
  reviewId: v.optional(v.string()),
  reviewReply: v.optional(v.lazy(() => LegacyV4ReviewReplySchema)),
  starRating: v.optional(v.union([v.literal("STAR_RATING_UNSPECIFIED"), v.literal("ONE"), v.literal("TWO"), v.literal("THREE"), v.literal("FOUR"), v.literal("FIVE")])),
  updateTime: v.optional(v.string()),
});

/** Represents the author of the review. */
export type LegacyV4Reviewer = {
  readonly displayName?: string;
  readonly isAnonymous?: boolean;
  readonly profilePhotoUrl?: string;
};
export const LegacyV4ReviewerSchema: v.GenericSchema<unknown, LegacyV4Reviewer> = v.looseObject({
  displayName: v.optional(v.string()),
  isAnonymous: v.optional(v.boolean()),
  profilePhotoUrl: v.optional(v.string()),
});

/** Represents the location owner/manager's reply to a review. */
export type LegacyV4ReviewReply = {
  readonly comment?: string;
  readonly updateTime?: string;
};
export const LegacyV4ReviewReplySchema: v.GenericSchema<unknown, LegacyV4ReviewReply> = v.looseObject({
  comment: v.optional(v.string()),
  updateTime: v.optional(v.string()),
});

/** Response message for Locations.SearchChains. */
export type LegacyV4SearchChainsResponse = {
  readonly chains?: ReadonlyArray<LegacyV4Chain>;
};
export const LegacyV4SearchChainsResponseSchema: v.GenericSchema<unknown, LegacyV4SearchChainsResponse> = v.looseObject({
  chains: v.optional(v.array(v.lazy(() => LegacyV4ChainSchema))),
});

/** Request message for GoogleLocations.SearchGoogleLocations. */
export type LegacyV4SearchGoogleLocationsRequest = {
  readonly location?: LegacyV4Location;
  readonly query?: string;
  readonly resultCount?: number;
};
export const LegacyV4SearchGoogleLocationsRequestSchema: v.GenericSchema<unknown, LegacyV4SearchGoogleLocationsRequest> = v.looseObject({
  location: v.optional(v.lazy(() => LegacyV4LocationSchema)),
  query: v.optional(v.string()),
  resultCount: v.optional(v.pipe(v.number(), v.integer())),
});

/** Response message for GoogleLocations.SearchGoogleLocations. */
export type LegacyV4SearchGoogleLocationsResponse = {
  readonly googleLocations?: ReadonlyArray<LegacyV4GoogleLocation>;
};
export const LegacyV4SearchGoogleLocationsResponseSchema: v.GenericSchema<unknown, LegacyV4SearchGoogleLocationsResponse> = v.looseObject({
  googleLocations: v.optional(v.array(v.lazy(() => LegacyV4GoogleLocationSchema))),
});

/** A section of the price list containing one or more items. */
export type LegacyV4Section = {
  readonly items?: ReadonlyArray<LegacyV4Item>;
  readonly labels?: ReadonlyArray<LegacyV4Label>;
  readonly sectionId?: string;
  readonly sectionType?: "SECTION_TYPE_UNSPECIFIED" | "FOOD" | "SERVICES";
};
export const LegacyV4SectionSchema: v.GenericSchema<unknown, LegacyV4Section> = v.looseObject({
  items: v.optional(v.array(v.lazy(() => LegacyV4ItemSchema))),
  labels: v.optional(v.array(v.lazy(() => LegacyV4LabelSchema))),
  sectionId: v.optional(v.string()),
  sectionType: v.optional(v.union([v.literal("SECTION_TYPE_UNSPECIFIED"), v.literal("FOOD"), v.literal("SERVICES")])),
});

/** Service area businesses provide their service at the customer's location (for example, a locksmith or plumber). */
export type LegacyV4ServiceAreaBusiness = {
  readonly businessType?: "BUSINESS_TYPE_UNSPECIFIED" | "CUSTOMER_LOCATION_ONLY" | "CUSTOMER_AND_BUSINESS_LOCATION";
  readonly places?: LegacyV4Places;
  readonly radius?: LegacyV4PointRadius;
};
export const LegacyV4ServiceAreaBusinessSchema: v.GenericSchema<unknown, LegacyV4ServiceAreaBusiness> = v.looseObject({
  businessType: v.optional(v.union([v.literal("BUSINESS_TYPE_UNSPECIFIED"), v.literal("CUSTOMER_LOCATION_ONLY"), v.literal("CUSTOMER_AND_BUSINESS_LOCATION")])),
  places: v.optional(v.lazy(() => LegacyV4PlacesSchema)),
  radius: v.optional(v.lazy(() => LegacyV4PointRadiusSchema)),
});

/** Additional data for service business verification. */
export type LegacyV4ServiceBusinessContext = {
  readonly address?: LegacyV4PostalAddress;
};
export const LegacyV4ServiceBusinessContextSchema: v.GenericSchema<unknown, LegacyV4ServiceBusinessContext> = v.looseObject({
  address: v.optional(v.lazy(() => LegacyV4PostalAddressSchema)),
});

/** A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service. */
export type LegacyV4ServiceItem = {
  readonly freeFormServiceItem?: LegacyV4FreeFormServiceItem;
  readonly isOffered?: boolean;
  readonly price?: LegacyV4Money;
  readonly structuredServiceItem?: LegacyV4StructuredServiceItem;
};
export const LegacyV4ServiceItemSchema: v.GenericSchema<unknown, LegacyV4ServiceItem> = v.looseObject({
  freeFormServiceItem: v.optional(v.lazy(() => LegacyV4FreeFormServiceItemSchema)),
  isOffered: v.optional(v.boolean()),
  price: v.optional(v.lazy(() => LegacyV4MoneySchema)),
  structuredServiceItem: v.optional(v.lazy(() => LegacyV4StructuredServiceItemSchema)),
});

/** A service list containing one or more service items. */
export type LegacyV4ServiceList = {
  readonly name?: string;
  readonly serviceItems?: ReadonlyArray<LegacyV4ServiceItem>;
};
export const LegacyV4ServiceListSchema: v.GenericSchema<unknown, LegacyV4ServiceList> = v.looseObject({
  name: v.optional(v.string()),
  serviceItems: v.optional(v.array(v.lazy(() => LegacyV4ServiceItemSchema))),
});

/** Conveniences or help provided by the property to facilitate an easier, more comfortable stay. */
export type LegacyV4Services = {
  readonly baggageStorage?: boolean;
  readonly baggageStorageException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly concierge?: boolean;
  readonly conciergeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly convenienceStore?: boolean;
  readonly convenienceStoreException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly currencyExchange?: boolean;
  readonly currencyExchangeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly elevator?: boolean;
  readonly elevatorException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly frontDesk?: boolean;
  readonly frontDeskException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly fullServiceLaundry?: boolean;
  readonly fullServiceLaundryException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly giftShop?: boolean;
  readonly giftShopException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly languagesSpoken?: LegacyV4LanguagesSpoken;
  readonly selfServiceLaundry?: boolean;
  readonly selfServiceLaundryException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly socialHour?: boolean;
  readonly socialHourException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly twentyFourHourFrontDesk?: boolean;
  readonly twentyFourHourFrontDeskException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wakeUpCalls?: boolean;
  readonly wakeUpCallsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4ServicesSchema: v.GenericSchema<unknown, LegacyV4Services> = v.looseObject({
  baggageStorage: v.optional(v.boolean()),
  baggageStorageException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  concierge: v.optional(v.boolean()),
  conciergeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  convenienceStore: v.optional(v.boolean()),
  convenienceStoreException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  currencyExchange: v.optional(v.boolean()),
  currencyExchangeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  elevator: v.optional(v.boolean()),
  elevatorException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  frontDesk: v.optional(v.boolean()),
  frontDeskException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  fullServiceLaundry: v.optional(v.boolean()),
  fullServiceLaundryException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  giftShop: v.optional(v.boolean()),
  giftShopException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  languagesSpoken: v.optional(v.lazy(() => LegacyV4LanguagesSpokenSchema)),
  selfServiceLaundry: v.optional(v.boolean()),
  selfServiceLaundryException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  socialHour: v.optional(v.boolean()),
  socialHourException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  twentyFourHourFrontDesk: v.optional(v.boolean()),
  twentyFourHourFrontDeskException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  wakeUpCalls: v.optional(v.boolean()),
  wakeUpCallsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** A message describing a service type that the business offers. */
export type LegacyV4ServiceType = {
  readonly displayName?: string;
  readonly serviceTypeId?: string;
};
export const LegacyV4ServiceTypeSchema: v.GenericSchema<unknown, LegacyV4ServiceType> = v.looseObject({
  displayName: v.optional(v.string()),
  serviceTypeId: v.optional(v.string()),
});

/** Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00 */
export type LegacyV4SpecialHourPeriod = {
  readonly closeTime?: string;
  readonly endDate?: LegacyV4Date;
  readonly isClosed?: boolean;
  readonly openTime?: string;
  readonly startDate?: LegacyV4Date;
};
export const LegacyV4SpecialHourPeriodSchema: v.GenericSchema<unknown, LegacyV4SpecialHourPeriod> = v.looseObject({
  closeTime: v.optional(v.string()),
  endDate: v.optional(v.lazy(() => LegacyV4DateSchema)),
  isClosed: v.optional(v.boolean()),
  openTime: v.optional(v.string()),
  startDate: v.optional(v.lazy(() => LegacyV4DateSchema)),
});

/** Represents a set of time periods when a location's operational hours differ from its normal business hours. */
export type LegacyV4SpecialHours = {
  readonly specialHourPeriods?: ReadonlyArray<LegacyV4SpecialHourPeriod>;
};
export const LegacyV4SpecialHoursSchema: v.GenericSchema<unknown, LegacyV4SpecialHours> = v.looseObject({
  specialHourPeriods: v.optional(v.array(v.lazy(() => LegacyV4SpecialHourPeriodSchema))),
});

/** Request message for Media.StartUploadMediaItemData. */
export type LegacyV4StartUploadMediaItemDataRequest = {

};
export const LegacyV4StartUploadMediaItemDataRequestSchema: v.GenericSchema<unknown, LegacyV4StartUploadMediaItemDataRequest> = v.looseObject({

});

/** Represents a structured service offered by the merchant. For eg: toilet_installation. */
export type LegacyV4StructuredServiceItem = {
  readonly description?: string;
  readonly serviceTypeId?: string;
};
export const LegacyV4StructuredServiceItemSchema: v.GenericSchema<unknown, LegacyV4StructuredServiceItem> = v.looseObject({
  description: v.optional(v.string()),
  serviceTypeId: v.optional(v.string()),
});

/** Represents a target location for a pending invitation. */
export type LegacyV4TargetLocation = {
  readonly locationAddress?: string;
  readonly locationName?: string;
};
export const LegacyV4TargetLocationSchema: v.GenericSchema<unknown, LegacyV4TargetLocation> = v.looseObject({
  locationAddress: v.optional(v.string()),
  locationName: v.optional(v.string()),
});

/** The dimension for which data is divided over. */
export type LegacyV4TimeDimension = {
  readonly dayOfWeek?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly timeOfDay?: LegacyV4TimeOfDay;
  readonly timeRange?: LegacyV4TimeRange;
};
export const LegacyV4TimeDimensionSchema: v.GenericSchema<unknown, LegacyV4TimeDimension> = v.looseObject({
  dayOfWeek: v.optional(v.union([v.literal("DAY_OF_WEEK_UNSPECIFIED"), v.literal("MONDAY"), v.literal("TUESDAY"), v.literal("WEDNESDAY"), v.literal("THURSDAY"), v.literal("FRIDAY"), v.literal("SATURDAY"), v.literal("SUNDAY")])),
  timeOfDay: v.optional(v.lazy(() => LegacyV4TimeOfDaySchema)),
  timeRange: v.optional(v.lazy(() => LegacyV4TimeRangeSchema)),
});

/** An interval of time, inclusive. It must contain all fields to be valid. */
export type LegacyV4TimeInterval = {
  readonly endDate?: LegacyV4Date;
  readonly endTime?: LegacyV4TimeOfDay;
  readonly startDate?: LegacyV4Date;
  readonly startTime?: LegacyV4TimeOfDay;
};
export const LegacyV4TimeIntervalSchema: v.GenericSchema<unknown, LegacyV4TimeInterval> = v.looseObject({
  endDate: v.optional(v.lazy(() => LegacyV4DateSchema)),
  endTime: v.optional(v.lazy(() => LegacyV4TimeOfDaySchema)),
  startDate: v.optional(v.lazy(() => LegacyV4DateSchema)),
  startTime: v.optional(v.lazy(() => LegacyV4TimeOfDaySchema)),
});

/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
export type LegacyV4TimeOfDay = {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
};
export const LegacyV4TimeOfDaySchema: v.GenericSchema<unknown, LegacyV4TimeOfDay> = v.looseObject({
  hours: v.optional(v.pipe(v.number(), v.integer())),
  minutes: v.optional(v.pipe(v.number(), v.integer())),
  nanos: v.optional(v.pipe(v.number(), v.integer())),
  seconds: v.optional(v.pipe(v.number(), v.integer())),
});

/** Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day. */
export type LegacyV4TimePeriod = {
  readonly closeDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly closeTime?: string;
  readonly openDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly openTime?: string;
};
export const LegacyV4TimePeriodSchema: v.GenericSchema<unknown, LegacyV4TimePeriod> = v.looseObject({
  closeDay: v.optional(v.union([v.literal("DAY_OF_WEEK_UNSPECIFIED"), v.literal("MONDAY"), v.literal("TUESDAY"), v.literal("WEDNESDAY"), v.literal("THURSDAY"), v.literal("FRIDAY"), v.literal("SATURDAY"), v.literal("SUNDAY")])),
  closeTime: v.optional(v.string()),
  openDay: v.optional(v.union([v.literal("DAY_OF_WEEK_UNSPECIFIED"), v.literal("MONDAY"), v.literal("TUESDAY"), v.literal("WEDNESDAY"), v.literal("THURSDAY"), v.literal("FRIDAY"), v.literal("SATURDAY"), v.literal("SUNDAY")])),
  openTime: v.optional(v.string()),
});

/** A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)). */
export type LegacyV4TimeRange = {
  readonly endTime?: string;
  readonly startTime?: string;
};
export const LegacyV4TimeRangeSchema: v.GenericSchema<unknown, LegacyV4TimeRange> = v.looseObject({
  endTime: v.optional(v.string()),
  startTime: v.optional(v.string()),
});

/** Top regions where driving-direction requests originated from. */
export type LegacyV4TopDirectionSources = {
  readonly dayCount?: number;
  readonly regionCounts?: ReadonlyArray<LegacyV4RegionCount>;
};
export const LegacyV4TopDirectionSourcesSchema: v.GenericSchema<unknown, LegacyV4TopDirectionSources> = v.looseObject({
  dayCount: v.optional(v.pipe(v.number(), v.integer())),
  regionCounts: v.optional(v.array(v.lazy(() => LegacyV4RegionCountSchema))),
});

/** Request message for Locations.TransferLocation. */
export type LegacyV4TransferLocationRequest = {
  readonly toAccount?: string;
};
export const LegacyV4TransferLocationRequestSchema: v.GenericSchema<unknown, LegacyV4TransferLocationRequest> = v.looseObject({
  toAccount: v.optional(v.string()),
});

/** Vehicles or vehicular services facilitated or owned by the property. */
export type LegacyV4Transportation = {
  readonly airportShuttle?: boolean;
  readonly airportShuttleException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly carRentalOnProperty?: boolean;
  readonly carRentalOnPropertyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeAirportShuttle?: boolean;
  readonly freeAirportShuttleException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freePrivateCarService?: boolean;
  readonly freePrivateCarServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly localShuttle?: boolean;
  readonly localShuttleException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly privateCarService?: boolean;
  readonly privateCarServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly transfer?: boolean;
  readonly transferException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4TransportationSchema: v.GenericSchema<unknown, LegacyV4Transportation> = v.looseObject({
  airportShuttle: v.optional(v.boolean()),
  airportShuttleException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  carRentalOnProperty: v.optional(v.boolean()),
  carRentalOnPropertyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeAirportShuttle: v.optional(v.boolean()),
  freeAirportShuttleException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freePrivateCarService: v.optional(v.boolean()),
  freePrivateCarServiceException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  localShuttle: v.optional(v.boolean()),
  localShuttleException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  privateCarService: v.optional(v.boolean()),
  privateCarServiceException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  transfer: v.optional(v.boolean()),
  transferException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Request message for QuestionsAndAnswers.UpsertAnswer */
export type LegacyV4UpsertAnswerRequest = {
  readonly answer?: LegacyV4Answer;
};
export const LegacyV4UpsertAnswerRequestSchema: v.GenericSchema<unknown, LegacyV4UpsertAnswerRequest> = v.looseObject({
  answer: v.optional(v.lazy(() => LegacyV4AnswerSchema)),
});

/** Values for an attribute with a `value_type` of URL. */
export type LegacyV4UrlAttributeValue = {
  readonly url?: string;
};
export const LegacyV4UrlAttributeValueSchema: v.GenericSchema<unknown, LegacyV4UrlAttributeValue> = v.looseObject({
  url: v.optional(v.string()),
});

/** A verification represents a verification attempt on a location. */
export type LegacyV4Verification = {
  readonly createTime?: string;
  readonly method?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO";
  readonly name?: string;
  readonly state?: "VERIFICATION_STATE_UNSPECIFIED" | "PENDING" | "COMPLETED" | "FAILED";
};
export const LegacyV4VerificationSchema: v.GenericSchema<unknown, LegacyV4Verification> = v.looseObject({
  createTime: v.optional(v.string()),
  method: v.optional(v.union([v.literal("VERIFICATION_METHOD_UNSPECIFIED"), v.literal("ADDRESS"), v.literal("EMAIL"), v.literal("PHONE_CALL"), v.literal("SMS"), v.literal("AUTO")])),
  name: v.optional(v.string()),
  state: v.optional(v.union([v.literal("VERIFICATION_STATE_UNSPECIFIED"), v.literal("PENDING"), v.literal("COMPLETED"), v.literal("FAILED")])),
});

/** The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data). */
export type LegacyV4VerificationOption = {
  readonly addressData?: LegacyV4AddressVerificationData;
  readonly emailData?: LegacyV4EmailVerificationData;
  readonly phoneData?: LegacyV4PhoneVerificationData;
  readonly verificationMethod?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO";
};
export const LegacyV4VerificationOptionSchema: v.GenericSchema<unknown, LegacyV4VerificationOption> = v.looseObject({
  addressData: v.optional(v.lazy(() => LegacyV4AddressVerificationDataSchema)),
  emailData: v.optional(v.lazy(() => LegacyV4EmailVerificationDataSchema)),
  phoneData: v.optional(v.lazy(() => LegacyV4PhoneVerificationDataSchema)),
  verificationMethod: v.optional(v.union([v.literal("VERIFICATION_METHOD_UNSPECIFIED"), v.literal("ADDRESS"), v.literal("EMAIL"), v.literal("PHONE_CALL"), v.literal("SMS"), v.literal("AUTO")])),
});

/** Request message for Verifications.VerifyLocation. */
export type LegacyV4VerifyLocationRequest = {
  readonly addressInput?: LegacyV4AddressInput;
  readonly context?: LegacyV4ServiceBusinessContext;
  readonly emailInput?: LegacyV4EmailInput;
  readonly languageCode?: string;
  readonly method?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO";
  readonly phoneInput?: LegacyV4PhoneInput;
};
export const LegacyV4VerifyLocationRequestSchema: v.GenericSchema<unknown, LegacyV4VerifyLocationRequest> = v.looseObject({
  addressInput: v.optional(v.lazy(() => LegacyV4AddressInputSchema)),
  context: v.optional(v.lazy(() => LegacyV4ServiceBusinessContextSchema)),
  emailInput: v.optional(v.lazy(() => LegacyV4EmailInputSchema)),
  languageCode: v.optional(v.string()),
  method: v.optional(v.union([v.literal("VERIFICATION_METHOD_UNSPECIFIED"), v.literal("ADDRESS"), v.literal("EMAIL"), v.literal("PHONE_CALL"), v.literal("SMS"), v.literal("AUTO")])),
  phoneInput: v.optional(v.lazy(() => LegacyV4PhoneInputSchema)),
});

/** Response message for Verifications.VerifyLocation. */
export type LegacyV4VerifyLocationResponse = {
  readonly verification?: LegacyV4Verification;
};
export const LegacyV4VerifyLocationResponseSchema: v.GenericSchema<unknown, LegacyV4VerifyLocationResponse> = v.looseObject({
  verification: v.optional(v.lazy(() => LegacyV4VerificationSchema)),
});

/** Views available from the guest unit itself. */
export type LegacyV4ViewsFromUnit = {
  readonly beachView?: boolean;
  readonly beachViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly cityView?: boolean;
  readonly cityViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly gardenView?: boolean;
  readonly gardenViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly lakeView?: boolean;
  readonly lakeViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly landmarkView?: boolean;
  readonly landmarkViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly oceanView?: boolean;
  readonly oceanViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly poolView?: boolean;
  readonly poolViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly valleyView?: boolean;
  readonly valleyViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4ViewsFromUnitSchema: v.GenericSchema<unknown, LegacyV4ViewsFromUnit> = v.looseObject({
  beachView: v.optional(v.boolean()),
  beachViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  cityView: v.optional(v.boolean()),
  cityViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  gardenView: v.optional(v.boolean()),
  gardenViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  lakeView: v.optional(v.boolean()),
  lakeViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  landmarkView: v.optional(v.boolean()),
  landmarkViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  oceanView: v.optional(v.boolean()),
  oceanViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  poolView: v.optional(v.boolean()),
  poolViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  valleyView: v.optional(v.boolean()),
  valleyViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Guest facilities at the property to promote or maintain health, beauty, and fitness. */
export type LegacyV4Wellness = {
  readonly doctorOnCall?: boolean;
  readonly doctorOnCallException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly ellipticalMachine?: boolean;
  readonly ellipticalMachineException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly fitnessCenter?: boolean;
  readonly fitnessCenterException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeFitnessCenter?: boolean;
  readonly freeFitnessCenterException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeWeights?: boolean;
  readonly freeWeightsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly massage?: boolean;
  readonly massageException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly salon?: boolean;
  readonly salonException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly sauna?: boolean;
  readonly saunaException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly spa?: boolean;
  readonly spaException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly treadmill?: boolean;
  readonly treadmillException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly weightMachine?: boolean;
  readonly weightMachineException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LegacyV4WellnessSchema: v.GenericSchema<unknown, LegacyV4Wellness> = v.looseObject({
  doctorOnCall: v.optional(v.boolean()),
  doctorOnCallException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  ellipticalMachine: v.optional(v.boolean()),
  ellipticalMachineException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  fitnessCenter: v.optional(v.boolean()),
  fitnessCenterException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeFitnessCenter: v.optional(v.boolean()),
  freeFitnessCenterException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeWeights: v.optional(v.boolean()),
  freeWeightsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  massage: v.optional(v.boolean()),
  massageException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  salon: v.optional(v.boolean()),
  salonException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  sauna: v.optional(v.boolean()),
  saunaException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  spa: v.optional(v.boolean()),
  spaException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  treadmill: v.optional(v.boolean()),
  treadmillException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  weightMachine: v.optional(v.boolean()),
  weightMachineException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Physical adaptations made to the property in consideration of varying levels of human physical ability. */
export type LodgingAccessibility = {
  readonly mobilityAccessible?: boolean;
  readonly mobilityAccessibleElevator?: boolean;
  readonly mobilityAccessibleElevatorException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleParking?: boolean;
  readonly mobilityAccessibleParkingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessiblePool?: boolean;
  readonly mobilityAccessiblePoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingAccessibilitySchema: v.GenericSchema<unknown, LodgingAccessibility> = v.looseObject({
  mobilityAccessible: v.optional(v.boolean()),
  mobilityAccessibleElevator: v.optional(v.boolean()),
  mobilityAccessibleElevatorException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobilityAccessibleException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobilityAccessibleParking: v.optional(v.boolean()),
  mobilityAccessibleParkingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobilityAccessiblePool: v.optional(v.boolean()),
  mobilityAccessiblePoolException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Amenities and features related to leisure and play. */
export type LodgingActivities = {
  readonly beachAccess?: boolean;
  readonly beachAccessException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly beachFront?: boolean;
  readonly beachFrontException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly bicycleRental?: boolean;
  readonly bicycleRentalException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly boutiqueStores?: boolean;
  readonly boutiqueStoresException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly casino?: boolean;
  readonly casinoException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeBicycleRental?: boolean;
  readonly freeBicycleRentalException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeWatercraftRental?: boolean;
  readonly freeWatercraftRentalException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly gameRoom?: boolean;
  readonly gameRoomException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly golf?: boolean;
  readonly golfException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly horsebackRiding?: boolean;
  readonly horsebackRidingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly nightclub?: boolean;
  readonly nightclubException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly privateBeach?: boolean;
  readonly privateBeachException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly scuba?: boolean;
  readonly scubaException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly snorkeling?: boolean;
  readonly snorkelingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly tennis?: boolean;
  readonly tennisException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly watercraftRental?: boolean;
  readonly watercraftRentalException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly waterSkiing?: boolean;
  readonly waterSkiingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingActivitiesSchema: v.GenericSchema<unknown, LodgingActivities> = v.looseObject({
  beachAccess: v.optional(v.boolean()),
  beachAccessException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  beachFront: v.optional(v.boolean()),
  beachFrontException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  bicycleRental: v.optional(v.boolean()),
  bicycleRentalException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  boutiqueStores: v.optional(v.boolean()),
  boutiqueStoresException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  casino: v.optional(v.boolean()),
  casinoException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeBicycleRental: v.optional(v.boolean()),
  freeBicycleRentalException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeWatercraftRental: v.optional(v.boolean()),
  freeWatercraftRentalException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  gameRoom: v.optional(v.boolean()),
  gameRoomException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  golf: v.optional(v.boolean()),
  golfException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  horsebackRiding: v.optional(v.boolean()),
  horsebackRidingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  nightclub: v.optional(v.boolean()),
  nightclubException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  privateBeach: v.optional(v.boolean()),
  privateBeachException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  scuba: v.optional(v.boolean()),
  scubaException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  snorkeling: v.optional(v.boolean()),
  snorkelingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  tennis: v.optional(v.boolean()),
  tennisException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  watercraftRental: v.optional(v.boolean()),
  watercraftRentalException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  waterSkiing: v.optional(v.boolean()),
  waterSkiingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Features of the property of specific interest to the business traveler. */
export type LodgingBusiness = {
  readonly businessCenter?: boolean;
  readonly businessCenterException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRooms?: boolean;
  readonly meetingRoomsCount?: number;
  readonly meetingRoomsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRoomsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingBusinessSchema: v.GenericSchema<unknown, LodgingBusiness> = v.looseObject({
  businessCenter: v.optional(v.boolean()),
  businessCenterException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  meetingRooms: v.optional(v.boolean()),
  meetingRoomsCount: v.optional(v.pipe(v.number(), v.integer())),
  meetingRoomsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  meetingRoomsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** The ways in which the property provides guests with the ability to access the internet. */
export type LodgingConnectivity = {
  readonly freeWifi?: boolean;
  readonly freeWifiException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly publicAreaWifiAvailable?: boolean;
  readonly publicAreaWifiAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly publicInternetTerminal?: boolean;
  readonly publicInternetTerminalException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wifiAvailable?: boolean;
  readonly wifiAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingConnectivitySchema: v.GenericSchema<unknown, LodgingConnectivity> = v.looseObject({
  freeWifi: v.optional(v.boolean()),
  freeWifiException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  publicAreaWifiAvailable: v.optional(v.boolean()),
  publicAreaWifiAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  publicInternetTerminal: v.optional(v.boolean()),
  publicInternetTerminalException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  wifiAvailable: v.optional(v.boolean()),
  wifiAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** An eco certificate awarded to the hotel. Deprecated: this message is no longer populated. All certification data is now provided by BeCause. */
export type LodgingEcoCertification = {
  readonly awarded?: boolean;
  readonly awardedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly ecoCertificate?: "ECO_CERTIFICATE_UNSPECIFIED" | "ISO14001" | "ISO50001" | "ASIAN_ECOTOURISM" | "BIOSPHERE_RESPOSNIBLE_TOURISM" | "BUREAU_VERITAS" | "CONTROL_UNION" | "EARTHCHECK" | "ECO_CERTIFICATION_MALTA" | "ECOTOURISM_AUSTRALIAS_ECO" | "GREAT_GREEN_DEAL" | "GREEN_GLOBE" | "GREEN_GROWTH2050" | "GREEN_KEY" | "GREEN_KEY_ECO_RATING" | "GREEN_SEAL" | "GREEN_STAR" | "GREEN_TOURISM_ACTIVE" | "HILTON_LIGHTSTAY" | "HOSTELLING_INTERNATIONALS_QUALITY_AND_SUSTAINABILITY" | "HOTELES_MAS_VERDES" | "NORDIC_SWAN_ECOLABEL" | "PREFERRED_BY_NATURE_SUSTAINABLE_TOURISM" | "SUSTAINABLE_TRAVEL_IRELAND" | "TOF_TIGERS_INITITIVES_PUG" | "TRAVELIFE" | "UNITED_CERTIFICATION_SYSTEMS_LIMITED" | "VIREO_SRL";
};
export const LodgingEcoCertificationSchema: v.GenericSchema<unknown, LodgingEcoCertification> = v.looseObject({
  awarded: v.optional(v.boolean()),
  awardedException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  ecoCertificate: v.optional(v.union([v.literal("ECO_CERTIFICATE_UNSPECIFIED"), v.literal("ISO14001"), v.literal("ISO50001"), v.literal("ASIAN_ECOTOURISM"), v.literal("BIOSPHERE_RESPOSNIBLE_TOURISM"), v.literal("BUREAU_VERITAS"), v.literal("CONTROL_UNION"), v.literal("EARTHCHECK"), v.literal("ECO_CERTIFICATION_MALTA"), v.literal("ECOTOURISM_AUSTRALIAS_ECO"), v.literal("GREAT_GREEN_DEAL"), v.literal("GREEN_GLOBE"), v.literal("GREEN_GROWTH2050"), v.literal("GREEN_KEY"), v.literal("GREEN_KEY_ECO_RATING"), v.literal("GREEN_SEAL"), v.literal("GREEN_STAR"), v.literal("GREEN_TOURISM_ACTIVE"), v.literal("HILTON_LIGHTSTAY"), v.literal("HOSTELLING_INTERNATIONALS_QUALITY_AND_SUSTAINABILITY"), v.literal("HOTELES_MAS_VERDES"), v.literal("NORDIC_SWAN_ECOLABEL"), v.literal("PREFERRED_BY_NATURE_SUSTAINABLE_TOURISM"), v.literal("SUSTAINABLE_TRAVEL_IRELAND"), v.literal("TOF_TIGERS_INITITIVES_PUG"), v.literal("TRAVELIFE"), v.literal("UNITED_CERTIFICATION_SYSTEMS_LIMITED"), v.literal("VIREO_SRL")])),
});

/** Energy efficiency practices implemented at the hotel. */
export type LodgingEnergyEfficiency = {
  readonly carbonFreeEnergySources?: boolean;
  readonly carbonFreeEnergySourcesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly energyConservationProgram?: boolean;
  readonly energyConservationProgramException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly energyEfficientHeatingAndCoolingSystems?: boolean;
  readonly energyEfficientHeatingAndCoolingSystemsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly energyEfficientLighting?: boolean;
  readonly energyEfficientLightingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly energySavingThermostats?: boolean;
  readonly energySavingThermostatsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly greenBuildingDesign?: boolean;
  readonly greenBuildingDesignException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly independentOrganizationAuditsEnergyUse?: boolean;
  readonly independentOrganizationAuditsEnergyUseException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingEnergyEfficiencySchema: v.GenericSchema<unknown, LodgingEnergyEfficiency> = v.looseObject({
  carbonFreeEnergySources: v.optional(v.boolean()),
  carbonFreeEnergySourcesException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  energyConservationProgram: v.optional(v.boolean()),
  energyConservationProgramException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  energyEfficientHeatingAndCoolingSystems: v.optional(v.boolean()),
  energyEfficientHeatingAndCoolingSystemsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  energyEfficientLighting: v.optional(v.boolean()),
  energyEfficientLightingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  energySavingThermostats: v.optional(v.boolean()),
  energySavingThermostatsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  greenBuildingDesign: v.optional(v.boolean()),
  greenBuildingDesignException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  independentOrganizationAuditsEnergyUse: v.optional(v.boolean()),
  independentOrganizationAuditsEnergyUseException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Enhanced cleaning measures implemented by the hotel during COVID-19. */
export type LodgingEnhancedCleaning = {
  readonly commercialGradeDisinfectantCleaning?: boolean;
  readonly commercialGradeDisinfectantCleaningException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly commonAreasEnhancedCleaning?: boolean;
  readonly commonAreasEnhancedCleaningException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly employeesTrainedCleaningProcedures?: boolean;
  readonly employeesTrainedCleaningProceduresException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly employeesTrainedThoroughHandWashing?: boolean;
  readonly employeesTrainedThoroughHandWashingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly employeesWearProtectiveEquipment?: boolean;
  readonly employeesWearProtectiveEquipmentException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly guestRoomsEnhancedCleaning?: boolean;
  readonly guestRoomsEnhancedCleaningException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingEnhancedCleaningSchema: v.GenericSchema<unknown, LodgingEnhancedCleaning> = v.looseObject({
  commercialGradeDisinfectantCleaning: v.optional(v.boolean()),
  commercialGradeDisinfectantCleaningException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  commonAreasEnhancedCleaning: v.optional(v.boolean()),
  commonAreasEnhancedCleaningException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  employeesTrainedCleaningProcedures: v.optional(v.boolean()),
  employeesTrainedCleaningProceduresException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  employeesTrainedThoroughHandWashing: v.optional(v.boolean()),
  employeesTrainedThoroughHandWashingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  employeesWearProtectiveEquipment: v.optional(v.boolean()),
  employeesWearProtectiveEquipmentException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  guestRoomsEnhancedCleaning: v.optional(v.boolean()),
  guestRoomsEnhancedCleaningException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Services and amenities for families and young guests. */
export type LodgingFamilies = {
  readonly babysitting?: boolean;
  readonly babysittingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsActivities?: boolean;
  readonly kidsActivitiesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsClub?: boolean;
  readonly kidsClubException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsFriendly?: boolean;
  readonly kidsFriendlyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingFamiliesSchema: v.GenericSchema<unknown, LodgingFamilies> = v.looseObject({
  babysitting: v.optional(v.boolean()),
  babysittingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  kidsActivities: v.optional(v.boolean()),
  kidsActivitiesException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  kidsClub: v.optional(v.boolean()),
  kidsClubException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  kidsFriendly: v.optional(v.boolean()),
  kidsFriendlyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Meals, snacks, and beverages available at the property. */
export type LodgingFoodAndDrink = {
  readonly bar?: boolean;
  readonly barException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly breakfastAvailable?: boolean;
  readonly breakfastAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly breakfastBuffet?: boolean;
  readonly breakfastBuffetException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly buffet?: boolean;
  readonly buffetException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly dinnerBuffet?: boolean;
  readonly dinnerBuffetException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeBreakfast?: boolean;
  readonly freeBreakfastException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly restaurant?: boolean;
  readonly restaurantException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly restaurantsCount?: number;
  readonly restaurantsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly roomService?: boolean;
  readonly roomServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly tableService?: boolean;
  readonly tableServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly twentyFourHourRoomService?: boolean;
  readonly twentyFourHourRoomServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly vendingMachine?: boolean;
  readonly vendingMachineException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingFoodAndDrinkSchema: v.GenericSchema<unknown, LodgingFoodAndDrink> = v.looseObject({
  bar: v.optional(v.boolean()),
  barException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  breakfastAvailable: v.optional(v.boolean()),
  breakfastAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  breakfastBuffet: v.optional(v.boolean()),
  breakfastBuffetException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  buffet: v.optional(v.boolean()),
  buffetException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  dinnerBuffet: v.optional(v.boolean()),
  dinnerBuffetException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeBreakfast: v.optional(v.boolean()),
  freeBreakfastException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  restaurant: v.optional(v.boolean()),
  restaurantException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  restaurantsCount: v.optional(v.pipe(v.number(), v.integer())),
  restaurantsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  roomService: v.optional(v.boolean()),
  roomServiceException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  tableService: v.optional(v.boolean()),
  tableServiceException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  twentyFourHourRoomService: v.optional(v.boolean()),
  twentyFourHourRoomServiceException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  vendingMachine: v.optional(v.boolean()),
  vendingMachineException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Response message for LodgingService.GetGoogleUpdatedLodging */
export type LodgingGetGoogleUpdatedLodgingResponse = {
  readonly diffMask?: string;
  readonly lodging?: LodgingLodging;
};
export const LodgingGetGoogleUpdatedLodgingResponseSchema: v.GenericSchema<unknown, LodgingGetGoogleUpdatedLodgingResponse> = v.looseObject({
  diffMask: v.optional(v.string()),
  lodging: v.optional(v.lazy(() => LodgingLodgingSchema)),
});

/** Features and available amenities in the guest unit. */
export type LodgingGuestUnitFeatures = {
  readonly bungalowOrVilla?: boolean;
  readonly bungalowOrVillaException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly connectingUnitAvailable?: boolean;
  readonly connectingUnitAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly executiveFloor?: boolean;
  readonly executiveFloorException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly maxAdultOccupantsCount?: number;
  readonly maxAdultOccupantsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly maxChildOccupantsCount?: number;
  readonly maxChildOccupantsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly maxOccupantsCount?: number;
  readonly maxOccupantsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly privateHome?: boolean;
  readonly privateHomeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly suite?: boolean;
  readonly suiteException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly tier?: "UNIT_TIER_UNSPECIFIED" | "STANDARD_UNIT" | "DELUXE_UNIT";
  readonly tierException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly totalLivingAreas?: LodgingLivingArea;
  readonly views?: LodgingViewsFromUnit;
};
export const LodgingGuestUnitFeaturesSchema: v.GenericSchema<unknown, LodgingGuestUnitFeatures> = v.looseObject({
  bungalowOrVilla: v.optional(v.boolean()),
  bungalowOrVillaException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  connectingUnitAvailable: v.optional(v.boolean()),
  connectingUnitAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  executiveFloor: v.optional(v.boolean()),
  executiveFloorException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  maxAdultOccupantsCount: v.optional(v.pipe(v.number(), v.integer())),
  maxAdultOccupantsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  maxChildOccupantsCount: v.optional(v.pipe(v.number(), v.integer())),
  maxChildOccupantsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  maxOccupantsCount: v.optional(v.pipe(v.number(), v.integer())),
  maxOccupantsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  privateHome: v.optional(v.boolean()),
  privateHomeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  suite: v.optional(v.boolean()),
  suiteException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  tier: v.optional(v.union([v.literal("UNIT_TIER_UNSPECIFIED"), v.literal("STANDARD_UNIT"), v.literal("DELUXE_UNIT")])),
  tierException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  totalLivingAreas: v.optional(v.lazy(() => LodgingLivingAreaSchema)),
  views: v.optional(v.lazy(() => LodgingViewsFromUnitSchema)),
});

/** A specific type of unit primarily defined by its features. */
export type LodgingGuestUnitType = {
  readonly codes?: ReadonlyArray<string>;
  readonly features?: LodgingGuestUnitFeatures;
  readonly label?: string;
};
export const LodgingGuestUnitTypeSchema: v.GenericSchema<unknown, LodgingGuestUnitType> = v.looseObject({
  codes: v.optional(v.array(v.string())),
  features: v.optional(v.lazy(() => LodgingGuestUnitFeaturesSchema)),
  label: v.optional(v.string()),
});

/** Health and safety measures implemented by the hotel during COVID-19. */
export type LodgingHealthAndSafety = {
  readonly enhancedCleaning?: LodgingEnhancedCleaning;
  readonly increasedFoodSafety?: LodgingIncreasedFoodSafety;
  readonly minimizedContact?: LodgingMinimizedContact;
  readonly personalProtection?: LodgingPersonalProtection;
  readonly physicalDistancing?: LodgingPhysicalDistancing;
};
export const LodgingHealthAndSafetySchema: v.GenericSchema<unknown, LodgingHealthAndSafety> = v.looseObject({
  enhancedCleaning: v.optional(v.lazy(() => LodgingEnhancedCleaningSchema)),
  increasedFoodSafety: v.optional(v.lazy(() => LodgingIncreasedFoodSafetySchema)),
  minimizedContact: v.optional(v.lazy(() => LodgingMinimizedContactSchema)),
  personalProtection: v.optional(v.lazy(() => LodgingPersonalProtectionSchema)),
  physicalDistancing: v.optional(v.lazy(() => LodgingPhysicalDistancingSchema)),
});

/** Conveniences provided in guest units to facilitate an easier, more comfortable stay. */
export type LodgingHousekeeping = {
  readonly dailyHousekeeping?: boolean;
  readonly dailyHousekeepingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly housekeepingAvailable?: boolean;
  readonly housekeepingAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly turndownService?: boolean;
  readonly turndownServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingHousekeepingSchema: v.GenericSchema<unknown, LodgingHousekeeping> = v.looseObject({
  dailyHousekeeping: v.optional(v.boolean()),
  dailyHousekeepingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  housekeepingAvailable: v.optional(v.boolean()),
  housekeepingAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  turndownService: v.optional(v.boolean()),
  turndownServiceException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Increased food safety measures implemented by the hotel during COVID-19. */
export type LodgingIncreasedFoodSafety = {
  readonly diningAreasAdditionalSanitation?: boolean;
  readonly diningAreasAdditionalSanitationException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly disposableFlatware?: boolean;
  readonly disposableFlatwareException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly foodPreparationAndServingAdditionalSafety?: boolean;
  readonly foodPreparationAndServingAdditionalSafetyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly individualPackagedMeals?: boolean;
  readonly individualPackagedMealsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly singleUseFoodMenus?: boolean;
  readonly singleUseFoodMenusException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingIncreasedFoodSafetySchema: v.GenericSchema<unknown, LodgingIncreasedFoodSafety> = v.looseObject({
  diningAreasAdditionalSanitation: v.optional(v.boolean()),
  diningAreasAdditionalSanitationException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  disposableFlatware: v.optional(v.boolean()),
  disposableFlatwareException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  foodPreparationAndServingAdditionalSafety: v.optional(v.boolean()),
  foodPreparationAndServingAdditionalSafetyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  individualPackagedMeals: v.optional(v.boolean()),
  individualPackagedMealsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  singleUseFoodMenus: v.optional(v.boolean()),
  singleUseFoodMenusException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Language spoken by at least one staff member. */
export type LodgingLanguageSpoken = {
  readonly languageCode?: string;
  readonly spoken?: boolean;
  readonly spokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingLanguageSpokenSchema: v.GenericSchema<unknown, LodgingLanguageSpoken> = v.looseObject({
  languageCode: v.optional(v.string()),
  spoken: v.optional(v.boolean()),
  spokenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit. */
export type LodgingLivingArea = {
  readonly accessibility?: LodgingLivingAreaAccessibility;
  readonly eating?: LodgingLivingAreaEating;
  readonly features?: LodgingLivingAreaFeatures;
  readonly layout?: LodgingLivingAreaLayout;
  readonly sleeping?: LodgingLivingAreaSleeping;
};
export const LodgingLivingAreaSchema: v.GenericSchema<unknown, LodgingLivingArea> = v.looseObject({
  accessibility: v.optional(v.lazy(() => LodgingLivingAreaAccessibilitySchema)),
  eating: v.optional(v.lazy(() => LodgingLivingAreaEatingSchema)),
  features: v.optional(v.lazy(() => LodgingLivingAreaFeaturesSchema)),
  layout: v.optional(v.lazy(() => LodgingLivingAreaLayoutSchema)),
  sleeping: v.optional(v.lazy(() => LodgingLivingAreaSleepingSchema)),
});

/** Accessibility features of the living area. */
export type LodgingLivingAreaAccessibility = {
  readonly adaCompliantUnit?: boolean;
  readonly adaCompliantUnitException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly hearingAccessibleDoorbell?: boolean;
  readonly hearingAccessibleDoorbellException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly hearingAccessibleFireAlarm?: boolean;
  readonly hearingAccessibleFireAlarmException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly hearingAccessibleUnit?: boolean;
  readonly hearingAccessibleUnitException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleBathtub?: boolean;
  readonly mobilityAccessibleBathtubException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleShower?: boolean;
  readonly mobilityAccessibleShowerException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleToilet?: boolean;
  readonly mobilityAccessibleToiletException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleUnit?: boolean;
  readonly mobilityAccessibleUnitException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingLivingAreaAccessibilitySchema: v.GenericSchema<unknown, LodgingLivingAreaAccessibility> = v.looseObject({
  adaCompliantUnit: v.optional(v.boolean()),
  adaCompliantUnitException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  hearingAccessibleDoorbell: v.optional(v.boolean()),
  hearingAccessibleDoorbellException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  hearingAccessibleFireAlarm: v.optional(v.boolean()),
  hearingAccessibleFireAlarmException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  hearingAccessibleUnit: v.optional(v.boolean()),
  hearingAccessibleUnitException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobilityAccessibleBathtub: v.optional(v.boolean()),
  mobilityAccessibleBathtubException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobilityAccessibleShower: v.optional(v.boolean()),
  mobilityAccessibleShowerException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobilityAccessibleToilet: v.optional(v.boolean()),
  mobilityAccessibleToiletException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobilityAccessibleUnit: v.optional(v.boolean()),
  mobilityAccessibleUnitException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Information about eating features in the living area. */
export type LodgingLivingAreaEating = {
  readonly coffeeMaker?: boolean;
  readonly coffeeMakerException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly cookware?: boolean;
  readonly cookwareException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly dishwasher?: boolean;
  readonly dishwasherException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly indoorGrill?: boolean;
  readonly indoorGrillException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kettle?: boolean;
  readonly kettleException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kitchenAvailable?: boolean;
  readonly kitchenAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly microwave?: boolean;
  readonly microwaveException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly minibar?: boolean;
  readonly minibarException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly outdoorGrill?: boolean;
  readonly outdoorGrillException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly oven?: boolean;
  readonly ovenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly refrigerator?: boolean;
  readonly refrigeratorException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly sink?: boolean;
  readonly sinkException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly snackbar?: boolean;
  readonly snackbarException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly stove?: boolean;
  readonly stoveException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly teaStation?: boolean;
  readonly teaStationException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly toaster?: boolean;
  readonly toasterException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingLivingAreaEatingSchema: v.GenericSchema<unknown, LodgingLivingAreaEating> = v.looseObject({
  coffeeMaker: v.optional(v.boolean()),
  coffeeMakerException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  cookware: v.optional(v.boolean()),
  cookwareException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  dishwasher: v.optional(v.boolean()),
  dishwasherException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  indoorGrill: v.optional(v.boolean()),
  indoorGrillException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  kettle: v.optional(v.boolean()),
  kettleException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  kitchenAvailable: v.optional(v.boolean()),
  kitchenAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  microwave: v.optional(v.boolean()),
  microwaveException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  minibar: v.optional(v.boolean()),
  minibarException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  outdoorGrill: v.optional(v.boolean()),
  outdoorGrillException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  oven: v.optional(v.boolean()),
  ovenException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  refrigerator: v.optional(v.boolean()),
  refrigeratorException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  sink: v.optional(v.boolean()),
  sinkException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  snackbar: v.optional(v.boolean()),
  snackbarException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  stove: v.optional(v.boolean()),
  stoveException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  teaStation: v.optional(v.boolean()),
  teaStationException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  toaster: v.optional(v.boolean()),
  toasterException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Features in the living area. */
export type LodgingLivingAreaFeatures = {
  readonly airConditioning?: boolean;
  readonly airConditioningException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly bathtub?: boolean;
  readonly bathtubException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly bidet?: boolean;
  readonly bidetException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly dryer?: boolean;
  readonly dryerException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly electronicRoomKey?: boolean;
  readonly electronicRoomKeyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly fireplace?: boolean;
  readonly fireplaceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly hairdryer?: boolean;
  readonly hairdryerException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly heating?: boolean;
  readonly heatingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly inunitSafe?: boolean;
  readonly inunitSafeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly inunitWifiAvailable?: boolean;
  readonly inunitWifiAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly ironingEquipment?: boolean;
  readonly ironingEquipmentException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly payPerViewMovies?: boolean;
  readonly payPerViewMoviesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly privateBathroom?: boolean;
  readonly privateBathroomException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly shower?: boolean;
  readonly showerException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly toilet?: boolean;
  readonly toiletException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly tv?: boolean;
  readonly tvCasting?: boolean;
  readonly tvCastingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly tvException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly tvStreaming?: boolean;
  readonly tvStreamingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly universalPowerAdapters?: boolean;
  readonly universalPowerAdaptersException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly washer?: boolean;
  readonly washerException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingLivingAreaFeaturesSchema: v.GenericSchema<unknown, LodgingLivingAreaFeatures> = v.looseObject({
  airConditioning: v.optional(v.boolean()),
  airConditioningException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  bathtub: v.optional(v.boolean()),
  bathtubException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  bidet: v.optional(v.boolean()),
  bidetException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  dryer: v.optional(v.boolean()),
  dryerException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  electronicRoomKey: v.optional(v.boolean()),
  electronicRoomKeyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  fireplace: v.optional(v.boolean()),
  fireplaceException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  hairdryer: v.optional(v.boolean()),
  hairdryerException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  heating: v.optional(v.boolean()),
  heatingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  inunitSafe: v.optional(v.boolean()),
  inunitSafeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  inunitWifiAvailable: v.optional(v.boolean()),
  inunitWifiAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  ironingEquipment: v.optional(v.boolean()),
  ironingEquipmentException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  payPerViewMovies: v.optional(v.boolean()),
  payPerViewMoviesException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  privateBathroom: v.optional(v.boolean()),
  privateBathroomException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  shower: v.optional(v.boolean()),
  showerException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  toilet: v.optional(v.boolean()),
  toiletException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  tv: v.optional(v.boolean()),
  tvCasting: v.optional(v.boolean()),
  tvCastingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  tvException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  tvStreaming: v.optional(v.boolean()),
  tvStreamingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  universalPowerAdapters: v.optional(v.boolean()),
  universalPowerAdaptersException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  washer: v.optional(v.boolean()),
  washerException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Information about the layout of the living area. */
export type LodgingLivingAreaLayout = {
  readonly balcony?: boolean;
  readonly balconyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly livingAreaSqMeters?: number;
  readonly livingAreaSqMetersException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly loft?: boolean;
  readonly loftException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly nonSmoking?: boolean;
  readonly nonSmokingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly patio?: boolean;
  readonly patioException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly stairs?: boolean;
  readonly stairsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingLivingAreaLayoutSchema: v.GenericSchema<unknown, LodgingLivingAreaLayout> = v.looseObject({
  balcony: v.optional(v.boolean()),
  balconyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  livingAreaSqMeters: v.optional(v.number()),
  livingAreaSqMetersException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  loft: v.optional(v.boolean()),
  loftException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  nonSmoking: v.optional(v.boolean()),
  nonSmokingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  patio: v.optional(v.boolean()),
  patioException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  stairs: v.optional(v.boolean()),
  stairsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Information about sleeping features in the living area. */
export type LodgingLivingAreaSleeping = {
  readonly bedsCount?: number;
  readonly bedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly bunkBedsCount?: number;
  readonly bunkBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly cribsCount?: number;
  readonly cribsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly doubleBedsCount?: number;
  readonly doubleBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly featherPillows?: boolean;
  readonly featherPillowsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly hypoallergenicBedding?: boolean;
  readonly hypoallergenicBeddingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kingBedsCount?: number;
  readonly kingBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly memoryFoamPillows?: boolean;
  readonly memoryFoamPillowsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly otherBedsCount?: number;
  readonly otherBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly queenBedsCount?: number;
  readonly queenBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly rollAwayBedsCount?: number;
  readonly rollAwayBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly singleOrTwinBedsCount?: number;
  readonly singleOrTwinBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly sofaBedsCount?: number;
  readonly sofaBedsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly syntheticPillows?: boolean;
  readonly syntheticPillowsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingLivingAreaSleepingSchema: v.GenericSchema<unknown, LodgingLivingAreaSleeping> = v.looseObject({
  bedsCount: v.optional(v.pipe(v.number(), v.integer())),
  bedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  bunkBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  bunkBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  cribsCount: v.optional(v.pipe(v.number(), v.integer())),
  cribsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  doubleBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  doubleBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  featherPillows: v.optional(v.boolean()),
  featherPillowsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  hypoallergenicBedding: v.optional(v.boolean()),
  hypoallergenicBeddingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  kingBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  kingBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  memoryFoamPillows: v.optional(v.boolean()),
  memoryFoamPillowsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  otherBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  otherBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  queenBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  queenBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  rollAwayBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  rollAwayBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  singleOrTwinBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  singleOrTwinBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  sofaBedsCount: v.optional(v.pipe(v.number(), v.integer())),
  sofaBedsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  syntheticPillows: v.optional(v.boolean()),
  syntheticPillowsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Lodging of a location that provides accomodations. */
export type LodgingLodging = {
  readonly accessibility?: LodgingAccessibility;
  readonly activities?: LodgingActivities;
  readonly allUnits?: LodgingGuestUnitFeatures;
  readonly business?: LodgingBusiness;
  readonly commonLivingArea?: LodgingLivingArea;
  readonly connectivity?: LodgingConnectivity;
  readonly families?: LodgingFamilies;
  readonly foodAndDrink?: LodgingFoodAndDrink;
  readonly guestUnits?: ReadonlyArray<LodgingGuestUnitType>;
  readonly healthAndSafety?: LodgingHealthAndSafety;
  readonly housekeeping?: LodgingHousekeeping;
  readonly metadata?: LodgingLodgingMetadata;
  readonly name?: string;
  readonly parking?: LodgingParking;
  readonly pets?: LodgingPets;
  readonly policies?: LodgingPolicies;
  readonly pools?: LodgingPools;
  readonly property?: LodgingProperty;
  readonly services?: LodgingServices;
  readonly someUnits?: LodgingGuestUnitFeatures;
  readonly sustainability?: LodgingSustainability;
  readonly transportation?: LodgingTransportation;
  readonly wellness?: LodgingWellness;
};
export const LodgingLodgingSchema: v.GenericSchema<unknown, LodgingLodging> = v.looseObject({
  accessibility: v.optional(v.lazy(() => LodgingAccessibilitySchema)),
  activities: v.optional(v.lazy(() => LodgingActivitiesSchema)),
  allUnits: v.optional(v.lazy(() => LodgingGuestUnitFeaturesSchema)),
  business: v.optional(v.lazy(() => LodgingBusinessSchema)),
  commonLivingArea: v.optional(v.lazy(() => LodgingLivingAreaSchema)),
  connectivity: v.optional(v.lazy(() => LodgingConnectivitySchema)),
  families: v.optional(v.lazy(() => LodgingFamiliesSchema)),
  foodAndDrink: v.optional(v.lazy(() => LodgingFoodAndDrinkSchema)),
  guestUnits: v.optional(v.array(v.lazy(() => LodgingGuestUnitTypeSchema))),
  healthAndSafety: v.optional(v.lazy(() => LodgingHealthAndSafetySchema)),
  housekeeping: v.optional(v.lazy(() => LodgingHousekeepingSchema)),
  metadata: v.optional(v.lazy(() => LodgingLodgingMetadataSchema)),
  name: v.optional(v.string()),
  parking: v.optional(v.lazy(() => LodgingParkingSchema)),
  pets: v.optional(v.lazy(() => LodgingPetsSchema)),
  policies: v.optional(v.lazy(() => LodgingPoliciesSchema)),
  pools: v.optional(v.lazy(() => LodgingPoolsSchema)),
  property: v.optional(v.lazy(() => LodgingPropertySchema)),
  services: v.optional(v.lazy(() => LodgingServicesSchema)),
  someUnits: v.optional(v.lazy(() => LodgingGuestUnitFeaturesSchema)),
  sustainability: v.optional(v.lazy(() => LodgingSustainabilitySchema)),
  transportation: v.optional(v.lazy(() => LodgingTransportationSchema)),
  wellness: v.optional(v.lazy(() => LodgingWellnessSchema)),
});

/** Metadata for the Lodging. */
export type LodgingLodgingMetadata = {
  readonly updateTime?: string;
};
export const LodgingLodgingMetadataSchema: v.GenericSchema<unknown, LodgingLodgingMetadata> = v.looseObject({
  updateTime: v.optional(v.string()),
});

/** Minimized contact measures implemented by the hotel during COVID-19. */
export type LodgingMinimizedContact = {
  readonly contactlessCheckinCheckout?: boolean;
  readonly contactlessCheckinCheckoutException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly digitalGuestRoomKeys?: boolean;
  readonly digitalGuestRoomKeysException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly housekeepingScheduledRequestOnly?: boolean;
  readonly housekeepingScheduledRequestOnlyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly noHighTouchItemsCommonAreas?: boolean;
  readonly noHighTouchItemsCommonAreasException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly noHighTouchItemsGuestRooms?: boolean;
  readonly noHighTouchItemsGuestRoomsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly plasticKeycardsDisinfected?: boolean;
  readonly plasticKeycardsDisinfectedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly roomBookingsBuffer?: boolean;
  readonly roomBookingsBufferException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingMinimizedContactSchema: v.GenericSchema<unknown, LodgingMinimizedContact> = v.looseObject({
  contactlessCheckinCheckout: v.optional(v.boolean()),
  contactlessCheckinCheckoutException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  digitalGuestRoomKeys: v.optional(v.boolean()),
  digitalGuestRoomKeysException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  housekeepingScheduledRequestOnly: v.optional(v.boolean()),
  housekeepingScheduledRequestOnlyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  noHighTouchItemsCommonAreas: v.optional(v.boolean()),
  noHighTouchItemsCommonAreasException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  noHighTouchItemsGuestRooms: v.optional(v.boolean()),
  noHighTouchItemsGuestRoomsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  plasticKeycardsDisinfected: v.optional(v.boolean()),
  plasticKeycardsDisinfectedException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  roomBookingsBuffer: v.optional(v.boolean()),
  roomBookingsBufferException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Parking options at the property. */
export type LodgingParking = {
  readonly electricCarChargingStations?: boolean;
  readonly electricCarChargingStationsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeParking?: boolean;
  readonly freeParkingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeSelfParking?: boolean;
  readonly freeSelfParkingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeValetParking?: boolean;
  readonly freeValetParkingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly parkingAvailable?: boolean;
  readonly parkingAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly selfParkingAvailable?: boolean;
  readonly selfParkingAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly valetParkingAvailable?: boolean;
  readonly valetParkingAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingParkingSchema: v.GenericSchema<unknown, LodgingParking> = v.looseObject({
  electricCarChargingStations: v.optional(v.boolean()),
  electricCarChargingStationsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeParking: v.optional(v.boolean()),
  freeParkingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeSelfParking: v.optional(v.boolean()),
  freeSelfParkingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeValetParking: v.optional(v.boolean()),
  freeValetParkingException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  parkingAvailable: v.optional(v.boolean()),
  parkingAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  selfParkingAvailable: v.optional(v.boolean()),
  selfParkingAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  valetParkingAvailable: v.optional(v.boolean()),
  valetParkingAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Forms of payment accepted at the property. */
export type LodgingPaymentOptions = {
  readonly cash?: boolean;
  readonly cashException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly cheque?: boolean;
  readonly chequeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly creditCard?: boolean;
  readonly creditCardException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly debitCard?: boolean;
  readonly debitCardException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobileNfc?: boolean;
  readonly mobileNfcException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingPaymentOptionsSchema: v.GenericSchema<unknown, LodgingPaymentOptions> = v.looseObject({
  cash: v.optional(v.boolean()),
  cashException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  cheque: v.optional(v.boolean()),
  chequeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  creditCard: v.optional(v.boolean()),
  creditCardException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  debitCard: v.optional(v.boolean()),
  debitCardException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  mobileNfc: v.optional(v.boolean()),
  mobileNfcException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Personal protection measures implemented by the hotel during COVID-19. */
export type LodgingPersonalProtection = {
  readonly commonAreasOfferSanitizingItems?: boolean;
  readonly commonAreasOfferSanitizingItemsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly faceMaskRequired?: boolean;
  readonly faceMaskRequiredException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly guestRoomHygieneKitsAvailable?: boolean;
  readonly guestRoomHygieneKitsAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly protectiveEquipmentAvailable?: boolean;
  readonly protectiveEquipmentAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingPersonalProtectionSchema: v.GenericSchema<unknown, LodgingPersonalProtection> = v.looseObject({
  commonAreasOfferSanitizingItems: v.optional(v.boolean()),
  commonAreasOfferSanitizingItemsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  faceMaskRequired: v.optional(v.boolean()),
  faceMaskRequiredException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  guestRoomHygieneKitsAvailable: v.optional(v.boolean()),
  guestRoomHygieneKitsAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  protectiveEquipmentAvailable: v.optional(v.boolean()),
  protectiveEquipmentAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Policies regarding guest-owned animals. */
export type LodgingPets = {
  readonly catsAllowed?: boolean;
  readonly catsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly dogsAllowed?: boolean;
  readonly dogsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly petsAllowed?: boolean;
  readonly petsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly petsAllowedFree?: boolean;
  readonly petsAllowedFreeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingPetsSchema: v.GenericSchema<unknown, LodgingPets> = v.looseObject({
  catsAllowed: v.optional(v.boolean()),
  catsAllowedException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  dogsAllowed: v.optional(v.boolean()),
  dogsAllowedException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  petsAllowed: v.optional(v.boolean()),
  petsAllowedException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  petsAllowedFree: v.optional(v.boolean()),
  petsAllowedFreeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Physical distancing measures implemented by the hotel during COVID-19. */
export type LodgingPhysicalDistancing = {
  readonly commonAreasPhysicalDistancingArranged?: boolean;
  readonly commonAreasPhysicalDistancingArrangedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly physicalDistancingRequired?: boolean;
  readonly physicalDistancingRequiredException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly safetyDividers?: boolean;
  readonly safetyDividersException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly sharedAreasLimitedOccupancy?: boolean;
  readonly sharedAreasLimitedOccupancyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wellnessAreasHavePrivateSpaces?: boolean;
  readonly wellnessAreasHavePrivateSpacesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingPhysicalDistancingSchema: v.GenericSchema<unknown, LodgingPhysicalDistancing> = v.looseObject({
  commonAreasPhysicalDistancingArranged: v.optional(v.boolean()),
  commonAreasPhysicalDistancingArrangedException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  physicalDistancingRequired: v.optional(v.boolean()),
  physicalDistancingRequiredException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  safetyDividers: v.optional(v.boolean()),
  safetyDividersException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  sharedAreasLimitedOccupancy: v.optional(v.boolean()),
  sharedAreasLimitedOccupancyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  wellnessAreasHavePrivateSpaces: v.optional(v.boolean()),
  wellnessAreasHavePrivateSpacesException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Property rules that impact guests. */
export type LodgingPolicies = {
  readonly allInclusiveAvailable?: boolean;
  readonly allInclusiveAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly allInclusiveOnly?: boolean;
  readonly allInclusiveOnlyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly checkinTime?: LodgingTimeOfDay;
  readonly checkinTimeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly checkoutTime?: LodgingTimeOfDay;
  readonly checkoutTimeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsStayFree?: boolean;
  readonly kidsStayFreeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly maxChildAge?: number;
  readonly maxChildAgeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly maxKidsStayFreeCount?: number;
  readonly maxKidsStayFreeCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly paymentOptions?: LodgingPaymentOptions;
  readonly smokeFreeProperty?: boolean;
  readonly smokeFreePropertyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingPoliciesSchema: v.GenericSchema<unknown, LodgingPolicies> = v.looseObject({
  allInclusiveAvailable: v.optional(v.boolean()),
  allInclusiveAvailableException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  allInclusiveOnly: v.optional(v.boolean()),
  allInclusiveOnlyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  checkinTime: v.optional(v.lazy(() => LodgingTimeOfDaySchema)),
  checkinTimeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  checkoutTime: v.optional(v.lazy(() => LodgingTimeOfDaySchema)),
  checkoutTimeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  kidsStayFree: v.optional(v.boolean()),
  kidsStayFreeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  maxChildAge: v.optional(v.pipe(v.number(), v.integer())),
  maxChildAgeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  maxKidsStayFreeCount: v.optional(v.pipe(v.number(), v.integer())),
  maxKidsStayFreeCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  paymentOptions: v.optional(v.lazy(() => LodgingPaymentOptionsSchema)),
  smokeFreeProperty: v.optional(v.boolean()),
  smokeFreePropertyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Swimming pool or recreational water facilities available at the hotel. */
export type LodgingPools = {
  readonly adultPool?: boolean;
  readonly adultPoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly hotTub?: boolean;
  readonly hotTubException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly indoorPool?: boolean;
  readonly indoorPoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly indoorPoolsCount?: number;
  readonly indoorPoolsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly lazyRiver?: boolean;
  readonly lazyRiverException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly lifeguard?: boolean;
  readonly lifeguardException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly outdoorPool?: boolean;
  readonly outdoorPoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly outdoorPoolsCount?: number;
  readonly outdoorPoolsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly pool?: boolean;
  readonly poolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly poolsCount?: number;
  readonly poolsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wadingPool?: boolean;
  readonly wadingPoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly waterPark?: boolean;
  readonly waterParkException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly waterslide?: boolean;
  readonly waterslideException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wavePool?: boolean;
  readonly wavePoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingPoolsSchema: v.GenericSchema<unknown, LodgingPools> = v.looseObject({
  adultPool: v.optional(v.boolean()),
  adultPoolException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  hotTub: v.optional(v.boolean()),
  hotTubException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  indoorPool: v.optional(v.boolean()),
  indoorPoolException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  indoorPoolsCount: v.optional(v.pipe(v.number(), v.integer())),
  indoorPoolsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  lazyRiver: v.optional(v.boolean()),
  lazyRiverException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  lifeguard: v.optional(v.boolean()),
  lifeguardException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  outdoorPool: v.optional(v.boolean()),
  outdoorPoolException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  outdoorPoolsCount: v.optional(v.pipe(v.number(), v.integer())),
  outdoorPoolsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  pool: v.optional(v.boolean()),
  poolException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  poolsCount: v.optional(v.pipe(v.number(), v.integer())),
  poolsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  wadingPool: v.optional(v.boolean()),
  wadingPoolException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  waterPark: v.optional(v.boolean()),
  waterParkException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  waterslide: v.optional(v.boolean()),
  waterslideException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  wavePool: v.optional(v.boolean()),
  wavePoolException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** General factual information about the property's physical structure and important dates. */
export type LodgingProperty = {
  readonly builtYear?: number;
  readonly builtYearException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly floorsCount?: number;
  readonly floorsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly lastRenovatedYear?: number;
  readonly lastRenovatedYearException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly roomsCount?: number;
  readonly roomsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingPropertySchema: v.GenericSchema<unknown, LodgingProperty> = v.looseObject({
  builtYear: v.optional(v.pipe(v.number(), v.integer())),
  builtYearException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  floorsCount: v.optional(v.pipe(v.number(), v.integer())),
  floorsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  lastRenovatedYear: v.optional(v.pipe(v.number(), v.integer())),
  lastRenovatedYearException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  roomsCount: v.optional(v.pipe(v.number(), v.integer())),
  roomsCountException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Conveniences or help provided by the property to facilitate an easier, more comfortable stay. */
export type LodgingServices = {
  readonly baggageStorage?: boolean;
  readonly baggageStorageException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly concierge?: boolean;
  readonly conciergeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly convenienceStore?: boolean;
  readonly convenienceStoreException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly currencyExchange?: boolean;
  readonly currencyExchangeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly elevator?: boolean;
  readonly elevatorException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly frontDesk?: boolean;
  readonly frontDeskException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly fullServiceLaundry?: boolean;
  readonly fullServiceLaundryException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly giftShop?: boolean;
  readonly giftShopException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly languagesSpoken?: ReadonlyArray<LodgingLanguageSpoken>;
  readonly selfServiceLaundry?: boolean;
  readonly selfServiceLaundryException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly socialHour?: boolean;
  readonly socialHourException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly twentyFourHourFrontDesk?: boolean;
  readonly twentyFourHourFrontDeskException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wakeUpCalls?: boolean;
  readonly wakeUpCallsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingServicesSchema: v.GenericSchema<unknown, LodgingServices> = v.looseObject({
  baggageStorage: v.optional(v.boolean()),
  baggageStorageException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  concierge: v.optional(v.boolean()),
  conciergeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  convenienceStore: v.optional(v.boolean()),
  convenienceStoreException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  currencyExchange: v.optional(v.boolean()),
  currencyExchangeException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  elevator: v.optional(v.boolean()),
  elevatorException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  frontDesk: v.optional(v.boolean()),
  frontDeskException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  fullServiceLaundry: v.optional(v.boolean()),
  fullServiceLaundryException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  giftShop: v.optional(v.boolean()),
  giftShopException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  languagesSpoken: v.optional(v.array(v.lazy(() => LodgingLanguageSpokenSchema))),
  selfServiceLaundry: v.optional(v.boolean()),
  selfServiceLaundryException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  socialHour: v.optional(v.boolean()),
  socialHourException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  twentyFourHourFrontDesk: v.optional(v.boolean()),
  twentyFourHourFrontDeskException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  wakeUpCalls: v.optional(v.boolean()),
  wakeUpCallsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Sustainability practices implemented at the hotel. */
export type LodgingSustainability = {
  readonly energyEfficiency?: LodgingEnergyEfficiency;
  readonly sustainabilityCertifications?: LodgingSustainabilityCertifications;
  readonly sustainableSourcing?: LodgingSustainableSourcing;
  readonly wasteReduction?: LodgingWasteReduction;
  readonly waterConservation?: LodgingWaterConservation;
};
export const LodgingSustainabilitySchema: v.GenericSchema<unknown, LodgingSustainability> = v.looseObject({
  energyEfficiency: v.optional(v.lazy(() => LodgingEnergyEfficiencySchema)),
  sustainabilityCertifications: v.optional(v.lazy(() => LodgingSustainabilityCertificationsSchema)),
  sustainableSourcing: v.optional(v.lazy(() => LodgingSustainableSourcingSchema)),
  wasteReduction: v.optional(v.lazy(() => LodgingWasteReductionSchema)),
  waterConservation: v.optional(v.lazy(() => LodgingWaterConservationSchema)),
});

/** Sustainability certifications the hotel has been awarded. Deprecated: this message is no longer populated. All certification data is now provided by BeCause. */
export type LodgingSustainabilityCertifications = {
  readonly breeamCertification?: "BREEAM_CERTIFICATION_UNSPECIFIED" | "NO_BREEAM_CERTIFICATION" | "BREEAM_PASS" | "BREEAM_GOOD" | "BREEAM_VERY_GOOD" | "BREEAM_EXCELLENT" | "BREEAM_OUTSTANDING";
  readonly breeamCertificationException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly ecoCertifications?: ReadonlyArray<LodgingEcoCertification>;
  readonly leedCertification?: "LEED_CERTIFICATION_UNSPECIFIED" | "NO_LEED_CERTIFICATION" | "LEED_CERTIFIED" | "LEED_SILVER" | "LEED_GOLD" | "LEED_PLATINUM";
  readonly leedCertificationException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingSustainabilityCertificationsSchema: v.GenericSchema<unknown, LodgingSustainabilityCertifications> = v.looseObject({
  breeamCertification: v.optional(v.union([v.literal("BREEAM_CERTIFICATION_UNSPECIFIED"), v.literal("NO_BREEAM_CERTIFICATION"), v.literal("BREEAM_PASS"), v.literal("BREEAM_GOOD"), v.literal("BREEAM_VERY_GOOD"), v.literal("BREEAM_EXCELLENT"), v.literal("BREEAM_OUTSTANDING")])),
  breeamCertificationException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  ecoCertifications: v.optional(v.array(v.lazy(() => LodgingEcoCertificationSchema))),
  leedCertification: v.optional(v.union([v.literal("LEED_CERTIFICATION_UNSPECIFIED"), v.literal("NO_LEED_CERTIFICATION"), v.literal("LEED_CERTIFIED"), v.literal("LEED_SILVER"), v.literal("LEED_GOLD"), v.literal("LEED_PLATINUM")])),
  leedCertificationException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Sustainable sourcing practices implemented at the hotel. */
export type LodgingSustainableSourcing = {
  readonly ecoFriendlyToiletries?: boolean;
  readonly ecoFriendlyToiletriesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly locallySourcedFoodAndBeverages?: boolean;
  readonly locallySourcedFoodAndBeveragesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly organicCageFreeEggs?: boolean;
  readonly organicCageFreeEggsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly organicFoodAndBeverages?: boolean;
  readonly organicFoodAndBeveragesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly responsiblePurchasingPolicy?: boolean;
  readonly responsiblePurchasingPolicyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly responsiblySourcesSeafood?: boolean;
  readonly responsiblySourcesSeafoodException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly veganMeals?: boolean;
  readonly veganMealsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly vegetarianMeals?: boolean;
  readonly vegetarianMealsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingSustainableSourcingSchema: v.GenericSchema<unknown, LodgingSustainableSourcing> = v.looseObject({
  ecoFriendlyToiletries: v.optional(v.boolean()),
  ecoFriendlyToiletriesException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  locallySourcedFoodAndBeverages: v.optional(v.boolean()),
  locallySourcedFoodAndBeveragesException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  organicCageFreeEggs: v.optional(v.boolean()),
  organicCageFreeEggsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  organicFoodAndBeverages: v.optional(v.boolean()),
  organicFoodAndBeveragesException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  responsiblePurchasingPolicy: v.optional(v.boolean()),
  responsiblePurchasingPolicyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  responsiblySourcesSeafood: v.optional(v.boolean()),
  responsiblySourcesSeafoodException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  veganMeals: v.optional(v.boolean()),
  veganMealsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  vegetarianMeals: v.optional(v.boolean()),
  vegetarianMealsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
export type LodgingTimeOfDay = {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
};
export const LodgingTimeOfDaySchema: v.GenericSchema<unknown, LodgingTimeOfDay> = v.looseObject({
  hours: v.optional(v.pipe(v.number(), v.integer())),
  minutes: v.optional(v.pipe(v.number(), v.integer())),
  nanos: v.optional(v.pipe(v.number(), v.integer())),
  seconds: v.optional(v.pipe(v.number(), v.integer())),
});

/** Vehicles or vehicular services facilitated or owned by the property. */
export type LodgingTransportation = {
  readonly airportShuttle?: boolean;
  readonly airportShuttleException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly carRentalOnProperty?: boolean;
  readonly carRentalOnPropertyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeAirportShuttle?: boolean;
  readonly freeAirportShuttleException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freePrivateCarService?: boolean;
  readonly freePrivateCarServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly localShuttle?: boolean;
  readonly localShuttleException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly privateCarService?: boolean;
  readonly privateCarServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly transfer?: boolean;
  readonly transferException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingTransportationSchema: v.GenericSchema<unknown, LodgingTransportation> = v.looseObject({
  airportShuttle: v.optional(v.boolean()),
  airportShuttleException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  carRentalOnProperty: v.optional(v.boolean()),
  carRentalOnPropertyException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeAirportShuttle: v.optional(v.boolean()),
  freeAirportShuttleException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freePrivateCarService: v.optional(v.boolean()),
  freePrivateCarServiceException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  localShuttle: v.optional(v.boolean()),
  localShuttleException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  privateCarService: v.optional(v.boolean()),
  privateCarServiceException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  transfer: v.optional(v.boolean()),
  transferException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Views available from the guest unit itself. */
export type LodgingViewsFromUnit = {
  readonly beachView?: boolean;
  readonly beachViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly cityView?: boolean;
  readonly cityViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly gardenView?: boolean;
  readonly gardenViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly lakeView?: boolean;
  readonly lakeViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly landmarkView?: boolean;
  readonly landmarkViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly oceanView?: boolean;
  readonly oceanViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly poolView?: boolean;
  readonly poolViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly valleyView?: boolean;
  readonly valleyViewException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingViewsFromUnitSchema: v.GenericSchema<unknown, LodgingViewsFromUnit> = v.looseObject({
  beachView: v.optional(v.boolean()),
  beachViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  cityView: v.optional(v.boolean()),
  cityViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  gardenView: v.optional(v.boolean()),
  gardenViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  lakeView: v.optional(v.boolean()),
  lakeViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  landmarkView: v.optional(v.boolean()),
  landmarkViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  oceanView: v.optional(v.boolean()),
  oceanViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  poolView: v.optional(v.boolean()),
  poolViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  valleyView: v.optional(v.boolean()),
  valleyViewException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Waste reduction practices implemented at the hotel. */
export type LodgingWasteReduction = {
  readonly compostableFoodContainersAndCutlery?: boolean;
  readonly compostableFoodContainersAndCutleryException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly compostsExcessFood?: boolean;
  readonly compostsExcessFoodException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly donatesExcessFood?: boolean;
  readonly donatesExcessFoodException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly foodWasteReductionProgram?: boolean;
  readonly foodWasteReductionProgramException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly noSingleUsePlasticStraws?: boolean;
  readonly noSingleUsePlasticStrawsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly noSingleUsePlasticWaterBottles?: boolean;
  readonly noSingleUsePlasticWaterBottlesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly noStyrofoamFoodContainers?: boolean;
  readonly noStyrofoamFoodContainersException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly recyclingProgram?: boolean;
  readonly recyclingProgramException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly refillableToiletryContainers?: boolean;
  readonly refillableToiletryContainersException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly safelyDisposesBatteries?: boolean;
  readonly safelyDisposesBatteriesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly safelyDisposesElectronics?: boolean;
  readonly safelyDisposesElectronicsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly safelyDisposesLightbulbs?: boolean;
  readonly safelyDisposesLightbulbsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly safelyHandlesHazardousSubstances?: boolean;
  readonly safelyHandlesHazardousSubstancesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly soapDonationProgram?: boolean;
  readonly soapDonationProgramException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly toiletryDonationProgram?: boolean;
  readonly toiletryDonationProgramException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly waterBottleFillingStations?: boolean;
  readonly waterBottleFillingStationsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingWasteReductionSchema: v.GenericSchema<unknown, LodgingWasteReduction> = v.looseObject({
  compostableFoodContainersAndCutlery: v.optional(v.boolean()),
  compostableFoodContainersAndCutleryException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  compostsExcessFood: v.optional(v.boolean()),
  compostsExcessFoodException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  donatesExcessFood: v.optional(v.boolean()),
  donatesExcessFoodException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  foodWasteReductionProgram: v.optional(v.boolean()),
  foodWasteReductionProgramException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  noSingleUsePlasticStraws: v.optional(v.boolean()),
  noSingleUsePlasticStrawsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  noSingleUsePlasticWaterBottles: v.optional(v.boolean()),
  noSingleUsePlasticWaterBottlesException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  noStyrofoamFoodContainers: v.optional(v.boolean()),
  noStyrofoamFoodContainersException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  recyclingProgram: v.optional(v.boolean()),
  recyclingProgramException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  refillableToiletryContainers: v.optional(v.boolean()),
  refillableToiletryContainersException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  safelyDisposesBatteries: v.optional(v.boolean()),
  safelyDisposesBatteriesException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  safelyDisposesElectronics: v.optional(v.boolean()),
  safelyDisposesElectronicsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  safelyDisposesLightbulbs: v.optional(v.boolean()),
  safelyDisposesLightbulbsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  safelyHandlesHazardousSubstances: v.optional(v.boolean()),
  safelyHandlesHazardousSubstancesException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  soapDonationProgram: v.optional(v.boolean()),
  soapDonationProgramException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  toiletryDonationProgram: v.optional(v.boolean()),
  toiletryDonationProgramException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  waterBottleFillingStations: v.optional(v.boolean()),
  waterBottleFillingStationsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Water conservation practices implemented at the hotel. */
export type LodgingWaterConservation = {
  readonly independentOrganizationAuditsWaterUse?: boolean;
  readonly independentOrganizationAuditsWaterUseException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly linenReuseProgram?: boolean;
  readonly linenReuseProgramException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly towelReuseProgram?: boolean;
  readonly towelReuseProgramException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly waterSavingShowers?: boolean;
  readonly waterSavingShowersException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly waterSavingSinks?: boolean;
  readonly waterSavingSinksException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly waterSavingToilets?: boolean;
  readonly waterSavingToiletsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingWaterConservationSchema: v.GenericSchema<unknown, LodgingWaterConservation> = v.looseObject({
  independentOrganizationAuditsWaterUse: v.optional(v.boolean()),
  independentOrganizationAuditsWaterUseException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  linenReuseProgram: v.optional(v.boolean()),
  linenReuseProgramException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  towelReuseProgram: v.optional(v.boolean()),
  towelReuseProgramException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  waterSavingShowers: v.optional(v.boolean()),
  waterSavingShowersException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  waterSavingSinks: v.optional(v.boolean()),
  waterSavingSinksException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  waterSavingToilets: v.optional(v.boolean()),
  waterSavingToiletsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** Guest facilities at the property to promote or maintain health, beauty, and fitness. */
export type LodgingWellness = {
  readonly doctorOnCall?: boolean;
  readonly doctorOnCallException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly ellipticalMachine?: boolean;
  readonly ellipticalMachineException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly fitnessCenter?: boolean;
  readonly fitnessCenterException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeFitnessCenter?: boolean;
  readonly freeFitnessCenterException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly freeWeights?: boolean;
  readonly freeWeightsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly massage?: boolean;
  readonly massageException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly salon?: boolean;
  readonly salonException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly sauna?: boolean;
  readonly saunaException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly spa?: boolean;
  readonly spaException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly treadmill?: boolean;
  readonly treadmillException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly weightMachine?: boolean;
  readonly weightMachineException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
};
export const LodgingWellnessSchema: v.GenericSchema<unknown, LodgingWellness> = v.looseObject({
  doctorOnCall: v.optional(v.boolean()),
  doctorOnCallException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  ellipticalMachine: v.optional(v.boolean()),
  ellipticalMachineException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  fitnessCenter: v.optional(v.boolean()),
  fitnessCenterException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeFitnessCenter: v.optional(v.boolean()),
  freeFitnessCenterException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  freeWeights: v.optional(v.boolean()),
  freeWeightsException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  massage: v.optional(v.boolean()),
  massageException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  salon: v.optional(v.boolean()),
  salonException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  sauna: v.optional(v.boolean()),
  saunaException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  spa: v.optional(v.boolean()),
  spaException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  treadmill: v.optional(v.boolean()),
  treadmillException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
  weightMachine: v.optional(v.boolean()),
  weightMachineException: v.optional(v.union([v.literal("EXCEPTION_UNSPECIFIED"), v.literal("UNDER_CONSTRUCTION"), v.literal("DEPENDENT_ON_SEASON"), v.literal("DEPENDENT_ON_DAY_OF_WEEK")])),
});

/** A Google Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification setting resource per-account. */
export type NotificationsNotificationSetting = {
  readonly name?: string;
  readonly notificationTypes?: ReadonlyArray<"NOTIFICATION_TYPE_UNSPECIFIED" | "GOOGLE_UPDATE" | "NEW_REVIEW" | "UPDATED_REVIEW" | "NEW_CUSTOMER_MEDIA" | "NEW_QUESTION" | "UPDATED_QUESTION" | "NEW_ANSWER" | "UPDATED_ANSWER" | "DUPLICATE_LOCATION" | "LOSS_OF_VOICE_OF_MERCHANT" | "VOICE_OF_MERCHANT_UPDATED">;
  readonly pubsubTopic?: string;
};
export const NotificationsNotificationSettingSchema: v.GenericSchema<unknown, NotificationsNotificationSetting> = v.looseObject({
  name: v.optional(v.string()),
  notificationTypes: v.optional(v.array(v.union([v.literal("NOTIFICATION_TYPE_UNSPECIFIED"), v.literal("GOOGLE_UPDATE"), v.literal("NEW_REVIEW"), v.literal("UPDATED_REVIEW"), v.literal("NEW_CUSTOMER_MEDIA"), v.literal("NEW_QUESTION"), v.literal("UPDATED_QUESTION"), v.literal("NEW_ANSWER"), v.literal("UPDATED_ANSWER"), v.literal("DUPLICATE_LOCATION"), v.literal("LOSS_OF_VOICE_OF_MERCHANT"), v.literal("VOICE_OF_MERCHANT_UPDATED")]))),
  pubsubTopic: v.optional(v.string()),
});

/** Represents a single datapoint, where each datapoint is a DailyMetric-DailySubEntityType-TimeSeries tuple. */
export type PerformanceDailyMetricTimeSeries = {
  readonly dailyMetric?: "DAILY_METRIC_UNKNOWN" | "BUSINESS_IMPRESSIONS_DESKTOP_MAPS" | "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH" | "BUSINESS_IMPRESSIONS_MOBILE_MAPS" | "BUSINESS_IMPRESSIONS_MOBILE_SEARCH" | "BUSINESS_CONVERSATIONS" | "BUSINESS_DIRECTION_REQUESTS" | "CALL_CLICKS" | "WEBSITE_CLICKS" | "BUSINESS_BOOKINGS" | "BUSINESS_FOOD_ORDERS" | "BUSINESS_FOOD_MENU_CLICKS";
  readonly dailySubEntityType?: PerformanceDailySubEntityType;
  readonly timeSeries?: PerformanceTimeSeries;
};
export const PerformanceDailyMetricTimeSeriesSchema: v.GenericSchema<unknown, PerformanceDailyMetricTimeSeries> = v.looseObject({
  dailyMetric: v.optional(v.union([v.literal("DAILY_METRIC_UNKNOWN"), v.literal("BUSINESS_IMPRESSIONS_DESKTOP_MAPS"), v.literal("BUSINESS_IMPRESSIONS_DESKTOP_SEARCH"), v.literal("BUSINESS_IMPRESSIONS_MOBILE_MAPS"), v.literal("BUSINESS_IMPRESSIONS_MOBILE_SEARCH"), v.literal("BUSINESS_CONVERSATIONS"), v.literal("BUSINESS_DIRECTION_REQUESTS"), v.literal("CALL_CLICKS"), v.literal("WEBSITE_CLICKS"), v.literal("BUSINESS_BOOKINGS"), v.literal("BUSINESS_FOOD_ORDERS"), v.literal("BUSINESS_FOOD_MENU_CLICKS")])),
  dailySubEntityType: v.optional(v.lazy(() => PerformanceDailySubEntityTypeSchema)),
  timeSeries: v.optional(v.lazy(() => PerformanceTimeSeriesSchema)),
});

/** Represents all possible subentity types that are associated with DailyMetrics. Note: Currently, all metrics are returned as daily aggregates and sub-entity breakdowns are not supported. */
export type PerformanceDailySubEntityType = {
  readonly dayOfWeek?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly timeOfDay?: PerformanceTimeOfDay;
};
export const PerformanceDailySubEntityTypeSchema: v.GenericSchema<unknown, PerformanceDailySubEntityType> = v.looseObject({
  dayOfWeek: v.optional(v.union([v.literal("DAY_OF_WEEK_UNSPECIFIED"), v.literal("MONDAY"), v.literal("TUESDAY"), v.literal("WEDNESDAY"), v.literal("THURSDAY"), v.literal("FRIDAY"), v.literal("SATURDAY"), v.literal("SUNDAY")])),
  timeOfDay: v.optional(v.lazy(() => PerformanceTimeOfDaySchema)),
});

/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
export type PerformanceDate = {
  readonly day?: number;
  readonly month?: number;
  readonly year?: number;
};
export const PerformanceDateSchema: v.GenericSchema<unknown, PerformanceDate> = v.looseObject({
  day: v.optional(v.pipe(v.number(), v.integer())),
  month: v.optional(v.pipe(v.number(), v.integer())),
  year: v.optional(v.pipe(v.number(), v.integer())),
});

/** Represents a single datapoint in the timeseries, where each datapoint is a date-value pair. */
export type PerformanceDatedValue = {
  readonly date?: PerformanceDate;
  readonly value?: string;
};
export const PerformanceDatedValueSchema: v.GenericSchema<unknown, PerformanceDatedValue> = v.looseObject({
  date: v.optional(v.lazy(() => PerformanceDateSchema)),
  value: v.optional(v.string()),
});

/** Represents the response for FetchMultiDailyMetricsTimeSeries. */
export type PerformanceFetchMultiDailyMetricsTimeSeriesResponse = {
  readonly multiDailyMetricTimeSeries?: ReadonlyArray<PerformanceMultiDailyMetricTimeSeries>;
};
export const PerformanceFetchMultiDailyMetricsTimeSeriesResponseSchema: v.GenericSchema<unknown, PerformanceFetchMultiDailyMetricsTimeSeriesResponse> = v.looseObject({
  multiDailyMetricTimeSeries: v.optional(v.array(v.lazy(() => PerformanceMultiDailyMetricTimeSeriesSchema))),
});

/** Represents the response for GetDailyMetricsTimeSeries. */
export type PerformanceGetDailyMetricsTimeSeriesResponse = {
  readonly timeSeries?: PerformanceTimeSeries;
};
export const PerformanceGetDailyMetricsTimeSeriesResponseSchema: v.GenericSchema<unknown, PerformanceGetDailyMetricsTimeSeriesResponse> = v.looseObject({
  timeSeries: v.optional(v.lazy(() => PerformanceTimeSeriesSchema)),
});

/** Represents an insights value. */
export type PerformanceInsightsValue = {
  readonly threshold?: string;
  readonly value?: string;
};
export const PerformanceInsightsValueSchema: v.GenericSchema<unknown, PerformanceInsightsValue> = v.looseObject({
  threshold: v.optional(v.string()),
  value: v.optional(v.string()),
});

/** Represents the response for ListSearchKeywordImpressionsMonthly. */
export type PerformanceListSearchKeywordImpressionsMonthlyResponse = {
  readonly nextPageToken?: string;
  readonly searchKeywordsCounts?: ReadonlyArray<PerformanceSearchKeywordCount>;
};
export const PerformanceListSearchKeywordImpressionsMonthlyResponseSchema: v.GenericSchema<unknown, PerformanceListSearchKeywordImpressionsMonthlyResponse> = v.looseObject({
  nextPageToken: v.optional(v.string()),
  searchKeywordsCounts: v.optional(v.array(v.lazy(() => PerformanceSearchKeywordCountSchema))),
});

/** Represents a list of tuples of DailyMetric-DailySubEntityType-TimeSeries. */
export type PerformanceMultiDailyMetricTimeSeries = {
  readonly dailyMetricTimeSeries?: ReadonlyArray<PerformanceDailyMetricTimeSeries>;
};
export const PerformanceMultiDailyMetricTimeSeriesSchema: v.GenericSchema<unknown, PerformanceMultiDailyMetricTimeSeries> = v.looseObject({
  dailyMetricTimeSeries: v.optional(v.array(v.lazy(() => PerformanceDailyMetricTimeSeriesSchema))),
});

/** Represents a single search keyword and its value. */
export type PerformanceSearchKeywordCount = {
  readonly insightsValue?: PerformanceInsightsValue;
  readonly searchKeyword?: string;
};
export const PerformanceSearchKeywordCountSchema: v.GenericSchema<unknown, PerformanceSearchKeywordCount> = v.looseObject({
  insightsValue: v.optional(v.lazy(() => PerformanceInsightsValueSchema)),
  searchKeyword: v.optional(v.string()),
});

/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
export type PerformanceTimeOfDay = {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
};
export const PerformanceTimeOfDaySchema: v.GenericSchema<unknown, PerformanceTimeOfDay> = v.looseObject({
  hours: v.optional(v.pipe(v.number(), v.integer())),
  minutes: v.optional(v.pipe(v.number(), v.integer())),
  nanos: v.optional(v.pipe(v.number(), v.integer())),
  seconds: v.optional(v.pipe(v.number(), v.integer())),
});

/** Represents a timeseries. */
export type PerformanceTimeSeries = {
  readonly datedValues?: ReadonlyArray<PerformanceDatedValue>;
};
export const PerformanceTimeSeriesSchema: v.GenericSchema<unknown, PerformanceTimeSeries> = v.looseObject({
  datedValues: v.optional(v.array(v.lazy(() => PerformanceDatedValueSchema))),
});

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
export type PlaceActionsEmpty = {

};
export const PlaceActionsEmptySchema: v.GenericSchema<unknown, PlaceActionsEmpty> = v.looseObject({

});

/** Response message for PlaceActions.ListPlaceActionLinks. */
export type PlaceActionsListPlaceActionLinksResponse = {
  readonly nextPageToken?: string;
  readonly placeActionLinks?: ReadonlyArray<PlaceActionsPlaceActionLink>;
};
export const PlaceActionsListPlaceActionLinksResponseSchema: v.GenericSchema<unknown, PlaceActionsListPlaceActionLinksResponse> = v.looseObject({
  nextPageToken: v.optional(v.string()),
  placeActionLinks: v.optional(v.array(v.lazy(() => PlaceActionsPlaceActionLinkSchema))),
});

/** Response message for PlaceActions.ListPlaceActionTypeMetadata. */
export type PlaceActionsListPlaceActionTypeMetadataResponse = {
  readonly nextPageToken?: string;
  readonly placeActionTypeMetadata?: ReadonlyArray<PlaceActionsPlaceActionTypeMetadata>;
};
export const PlaceActionsListPlaceActionTypeMetadataResponseSchema: v.GenericSchema<unknown, PlaceActionsListPlaceActionTypeMetadataResponse> = v.looseObject({
  nextPageToken: v.optional(v.string()),
  placeActionTypeMetadata: v.optional(v.array(v.lazy(() => PlaceActionsPlaceActionTypeMetadataSchema))),
});

/** Represents a place action link and its attributes. */
export type PlaceActionsPlaceActionLink = {
  readonly createTime?: string;
  readonly isEditable?: boolean;
  readonly isPreferred?: boolean;
  readonly name?: string;
  readonly placeActionType?: "PLACE_ACTION_TYPE_UNSPECIFIED" | "APPOINTMENT" | "ONLINE_APPOINTMENT" | "DINING_RESERVATION" | "FOOD_ORDERING" | "FOOD_DELIVERY" | "FOOD_TAKEOUT" | "SHOP_ONLINE" | "SOLOPRENEUR_APPOINTMENT";
  readonly providerType?: "PROVIDER_TYPE_UNSPECIFIED" | "MERCHANT" | "AGGREGATOR_3P";
  readonly updateTime?: string;
  readonly uri?: string;
};
export const PlaceActionsPlaceActionLinkSchema: v.GenericSchema<unknown, PlaceActionsPlaceActionLink> = v.looseObject({
  createTime: v.optional(v.string()),
  isEditable: v.optional(v.boolean()),
  isPreferred: v.optional(v.boolean()),
  name: v.optional(v.string()),
  placeActionType: v.optional(v.union([v.literal("PLACE_ACTION_TYPE_UNSPECIFIED"), v.literal("APPOINTMENT"), v.literal("ONLINE_APPOINTMENT"), v.literal("DINING_RESERVATION"), v.literal("FOOD_ORDERING"), v.literal("FOOD_DELIVERY"), v.literal("FOOD_TAKEOUT"), v.literal("SHOP_ONLINE"), v.literal("SOLOPRENEUR_APPOINTMENT")])),
  providerType: v.optional(v.union([v.literal("PROVIDER_TYPE_UNSPECIFIED"), v.literal("MERCHANT"), v.literal("AGGREGATOR_3P")])),
  updateTime: v.optional(v.string()),
  uri: v.optional(v.string()),
});

/** Metadata for supported place action types. */
export type PlaceActionsPlaceActionTypeMetadata = {
  readonly displayName?: string;
  readonly placeActionType?: "PLACE_ACTION_TYPE_UNSPECIFIED" | "APPOINTMENT" | "ONLINE_APPOINTMENT" | "DINING_RESERVATION" | "FOOD_ORDERING" | "FOOD_DELIVERY" | "FOOD_TAKEOUT" | "SHOP_ONLINE" | "SOLOPRENEUR_APPOINTMENT";
};
export const PlaceActionsPlaceActionTypeMetadataSchema: v.GenericSchema<unknown, PlaceActionsPlaceActionTypeMetadata> = v.looseObject({
  displayName: v.optional(v.string()),
  placeActionType: v.optional(v.union([v.literal("PLACE_ACTION_TYPE_UNSPECIFIED"), v.literal("APPOINTMENT"), v.literal("ONLINE_APPOINTMENT"), v.literal("DINING_RESERVATION"), v.literal("FOOD_ORDERING"), v.literal("FOOD_DELIVERY"), v.literal("FOOD_TAKEOUT"), v.literal("SHOP_ONLINE"), v.literal("SOLOPRENEUR_APPOINTMENT")])),
});

/** Represents an answer to a question */
export type QAndAAnswer = {
  readonly author?: QAndAAuthor;
  readonly createTime?: string;
  readonly name?: string;
  readonly text?: string;
  readonly updateTime?: string;
  readonly upvoteCount?: number;
};
export const QAndAAnswerSchema: v.GenericSchema<unknown, QAndAAnswer> = v.looseObject({
  author: v.optional(v.lazy(() => QAndAAuthorSchema)),
  createTime: v.optional(v.string()),
  name: v.optional(v.string()),
  text: v.optional(v.string()),
  updateTime: v.optional(v.string()),
  upvoteCount: v.optional(v.pipe(v.number(), v.integer())),
});

/** Represents the author of a question or answer */
export type QAndAAuthor = {
  readonly displayName?: string;
  readonly profilePhotoUri?: string;
  readonly type?: "AUTHOR_TYPE_UNSPECIFIED" | "REGULAR_USER" | "LOCAL_GUIDE" | "MERCHANT";
};
export const QAndAAuthorSchema: v.GenericSchema<unknown, QAndAAuthor> = v.looseObject({
  displayName: v.optional(v.string()),
  profilePhotoUri: v.optional(v.string()),
  type: v.optional(v.union([v.literal("AUTHOR_TYPE_UNSPECIFIED"), v.literal("REGULAR_USER"), v.literal("LOCAL_GUIDE"), v.literal("MERCHANT")])),
});

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
export type QAndAEmpty = {

};
export const QAndAEmptySchema: v.GenericSchema<unknown, QAndAEmpty> = v.looseObject({

});

/** Response message for QuestionsAndAnswers.ListAnswers */
export type QAndAListAnswersResponse = {
  readonly answers?: ReadonlyArray<QAndAAnswer>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
};
export const QAndAListAnswersResponseSchema: v.GenericSchema<unknown, QAndAListAnswersResponse> = v.looseObject({
  answers: v.optional(v.array(v.lazy(() => QAndAAnswerSchema))),
  nextPageToken: v.optional(v.string()),
  totalSize: v.optional(v.pipe(v.number(), v.integer())),
});

/** Response message for QuestionsAndAnswers.ListQuestions */
export type QAndAListQuestionsResponse = {
  readonly nextPageToken?: string;
  readonly questions?: ReadonlyArray<QAndAQuestion>;
  readonly totalSize?: number;
};
export const QAndAListQuestionsResponseSchema: v.GenericSchema<unknown, QAndAListQuestionsResponse> = v.looseObject({
  nextPageToken: v.optional(v.string()),
  questions: v.optional(v.array(v.lazy(() => QAndAQuestionSchema))),
  totalSize: v.optional(v.pipe(v.number(), v.integer())),
});

/** Represents a single question and some of its answers. */
export type QAndAQuestion = {
  readonly author?: QAndAAuthor;
  readonly createTime?: string;
  readonly name?: string;
  readonly text?: string;
  readonly topAnswers?: ReadonlyArray<QAndAAnswer>;
  readonly totalAnswerCount?: number;
  readonly updateTime?: string;
  readonly upvoteCount?: number;
};
export const QAndAQuestionSchema: v.GenericSchema<unknown, QAndAQuestion> = v.looseObject({
  author: v.optional(v.lazy(() => QAndAAuthorSchema)),
  createTime: v.optional(v.string()),
  name: v.optional(v.string()),
  text: v.optional(v.string()),
  topAnswers: v.optional(v.array(v.lazy(() => QAndAAnswerSchema))),
  totalAnswerCount: v.optional(v.pipe(v.number(), v.integer())),
  updateTime: v.optional(v.string()),
  upvoteCount: v.optional(v.pipe(v.number(), v.integer())),
});

/** Request message for QuestionsAndAnswers.UpsertAnswer */
export type QAndAUpsertAnswerRequest = {
  readonly answer?: QAndAAnswer;
};
export const QAndAUpsertAnswerRequestSchema: v.GenericSchema<unknown, QAndAUpsertAnswerRequest> = v.looseObject({
  answer: v.optional(v.lazy(() => QAndAAnswerSchema)),
});

/** Display data for verifications through postcard. */
export type VerificationsAddressVerificationData = {
  readonly address?: VerificationsPostalAddress;
  readonly business?: string;
  readonly expectedDeliveryDaysRegion?: number;
};
export const VerificationsAddressVerificationDataSchema: v.GenericSchema<unknown, VerificationsAddressVerificationData> = v.looseObject({
  address: v.optional(v.lazy(() => VerificationsPostalAddressSchema)),
  business: v.optional(v.string()),
  expectedDeliveryDaysRegion: v.optional(v.pipe(v.number(), v.integer())),
});

/** Request message for Verifications.CompleteVerificationAction. */
export type VerificationsCompleteVerificationRequest = {
  readonly pin?: string;
};
export const VerificationsCompleteVerificationRequestSchema: v.GenericSchema<unknown, VerificationsCompleteVerificationRequest> = v.looseObject({
  pin: v.optional(v.string()),
});

/** Response message for Verifications.CompleteVerificationAction. */
export type VerificationsCompleteVerificationResponse = {
  readonly verification?: VerificationsVerification;
};
export const VerificationsCompleteVerificationResponseSchema: v.GenericSchema<unknown, VerificationsCompleteVerificationResponse> = v.looseObject({
  verification: v.optional(v.lazy(() => VerificationsVerificationSchema)),
});

/** Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177). */
export type VerificationsComplyWithGuidelines = {
  readonly recommendationReason?: "RECOMMENDATION_REASON_UNSPECIFIED" | "BUSINESS_LOCATION_SUSPENDED" | "BUSINESS_LOCATION_DISABLED";
};
export const VerificationsComplyWithGuidelinesSchema: v.GenericSchema<unknown, VerificationsComplyWithGuidelines> = v.looseObject({
  recommendationReason: v.optional(v.union([v.literal("RECOMMENDATION_REASON_UNSPECIFIED"), v.literal("BUSINESS_LOCATION_SUSPENDED"), v.literal("BUSINESS_LOCATION_DISABLED")])),
});

/** Display data for verifications through email. */
export type VerificationsEmailVerificationData = {
  readonly domain?: string;
  readonly isUserNameEditable?: boolean;
  readonly user?: string;
};
export const VerificationsEmailVerificationDataSchema: v.GenericSchema<unknown, VerificationsEmailVerificationData> = v.looseObject({
  domain: v.optional(v.string()),
  isUserNameEditable: v.optional(v.boolean()),
  user: v.optional(v.string()),
});

/** Request message for Verifications.FetchVerificationOptions. */
export type VerificationsFetchVerificationOptionsRequest = {
  readonly context?: VerificationsServiceBusinessContext;
  readonly languageCode?: string;
};
export const VerificationsFetchVerificationOptionsRequestSchema: v.GenericSchema<unknown, VerificationsFetchVerificationOptionsRequest> = v.looseObject({
  context: v.optional(v.lazy(() => VerificationsServiceBusinessContextSchema)),
  languageCode: v.optional(v.string()),
});

/** Response message for Verifications.FetchVerificationOptions. */
export type VerificationsFetchVerificationOptionsResponse = {
  readonly options?: ReadonlyArray<VerificationsVerificationOption>;
};
export const VerificationsFetchVerificationOptionsResponseSchema: v.GenericSchema<unknown, VerificationsFetchVerificationOptionsResponse> = v.looseObject({
  options: v.optional(v.array(v.lazy(() => VerificationsVerificationOptionSchema))),
});

/** Request message for Verifications.GenerateInstantVerificationToken. */
export type VerificationsGenerateInstantVerificationTokenRequest = {
  readonly locationId?: string;
};
export const VerificationsGenerateInstantVerificationTokenRequestSchema: v.GenericSchema<unknown, VerificationsGenerateInstantVerificationTokenRequest> = v.looseObject({
  locationId: v.optional(v.string()),
});

/** Response message for Verifications.GenerateInstantVerificationToken. */
export type VerificationsGenerateInstantVerificationTokenResponse = {
  readonly instantVerificationToken?: string;
  readonly result?: "RESULT_UNSPECIFIED" | "SUCCEEDED" | "FAILED";
};
export const VerificationsGenerateInstantVerificationTokenResponseSchema: v.GenericSchema<unknown, VerificationsGenerateInstantVerificationTokenResponse> = v.looseObject({
  instantVerificationToken: v.optional(v.string()),
  result: v.optional(v.union([v.literal("RESULT_UNSPECIFIED"), v.literal("SUCCEEDED"), v.literal("FAILED")])),
});

/** Response message for Verifications.ListVerifications. */
export type VerificationsListVerificationsResponse = {
  readonly nextPageToken?: string;
  readonly verifications?: ReadonlyArray<VerificationsVerification>;
};
export const VerificationsListVerificationsResponseSchema: v.GenericSchema<unknown, VerificationsListVerificationsResponse> = v.looseObject({
  nextPageToken: v.optional(v.string()),
  verifications: v.optional(v.array(v.lazy(() => VerificationsVerificationSchema))),
});

/** Represents a postal address, such as for postal delivery or payments addresses. With a postal address, a postal service can deliver items to a premise, P.O. box, or similar. A postal address is not intended to model geographical locations like roads, towns, or mountains. In typical usage, an address would be created by user input or from importing existing data, depending on the type of process. Advice on address input or editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput. - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, see: https://support.google.com/business/answer/6397478. */
export type VerificationsPostalAddress = {
  readonly addressLines?: ReadonlyArray<string>;
  readonly administrativeArea?: string;
  readonly languageCode?: string;
  readonly locality?: string;
  readonly organization?: string;
  readonly postalCode?: string;
  readonly recipients?: ReadonlyArray<string>;
  readonly regionCode?: string;
  readonly revision?: number;
  readonly sortingCode?: string;
  readonly sublocality?: string;
};
export const VerificationsPostalAddressSchema: v.GenericSchema<unknown, VerificationsPostalAddress> = v.looseObject({
  addressLines: v.optional(v.array(v.string())),
  administrativeArea: v.optional(v.string()),
  languageCode: v.optional(v.string()),
  locality: v.optional(v.string()),
  organization: v.optional(v.string()),
  postalCode: v.optional(v.string()),
  recipients: v.optional(v.array(v.string())),
  regionCode: v.optional(v.string()),
  revision: v.optional(v.pipe(v.number(), v.integer())),
  sortingCode: v.optional(v.string()),
  sublocality: v.optional(v.string()),
});

/** Indicates that the location duplicates another location that is in good standing. */
export type VerificationsResolveOwnershipConflict = {

};
export const VerificationsResolveOwnershipConflictSchema: v.GenericSchema<unknown, VerificationsResolveOwnershipConflict> = v.looseObject({

});

/** Additional data for service business verification. */
export type VerificationsServiceBusinessContext = {
  readonly address?: VerificationsPostalAddress;
};
export const VerificationsServiceBusinessContextSchema: v.GenericSchema<unknown, VerificationsServiceBusinessContext> = v.looseObject({
  address: v.optional(v.lazy(() => VerificationsPostalAddressSchema)),
});

/** A verification represents a verification attempt on a location. */
export type VerificationsVerification = {
  readonly announcement?: string;
  readonly createTime?: string;
  readonly method?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO" | "TRUSTED_PARTNER";
  readonly name?: string;
  readonly state?: "STATE_UNSPECIFIED" | "PENDING" | "COMPLETED" | "FAILED";
};
export const VerificationsVerificationSchema: v.GenericSchema<unknown, VerificationsVerification> = v.looseObject({
  announcement: v.optional(v.string()),
  createTime: v.optional(v.string()),
  method: v.optional(v.union([v.literal("VERIFICATION_METHOD_UNSPECIFIED"), v.literal("ADDRESS"), v.literal("EMAIL"), v.literal("PHONE_CALL"), v.literal("SMS"), v.literal("AUTO"), v.literal("TRUSTED_PARTNER")])),
  name: v.optional(v.string()),
  state: v.optional(v.union([v.literal("STATE_UNSPECIFIED"), v.literal("PENDING"), v.literal("COMPLETED"), v.literal("FAILED")])),
});

/** The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data). */
export type VerificationsVerificationOption = {
  readonly addressData?: VerificationsAddressVerificationData;
  readonly announcement?: string;
  readonly emailData?: VerificationsEmailVerificationData;
  readonly phoneNumber?: string;
  readonly verificationMethod?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO" | "TRUSTED_PARTNER";
};
export const VerificationsVerificationOptionSchema: v.GenericSchema<unknown, VerificationsVerificationOption> = v.looseObject({
  addressData: v.optional(v.lazy(() => VerificationsAddressVerificationDataSchema)),
  announcement: v.optional(v.string()),
  emailData: v.optional(v.lazy(() => VerificationsEmailVerificationDataSchema)),
  phoneNumber: v.optional(v.string()),
  verificationMethod: v.optional(v.union([v.literal("VERIFICATION_METHOD_UNSPECIFIED"), v.literal("ADDRESS"), v.literal("EMAIL"), v.literal("PHONE_CALL"), v.literal("SMS"), v.literal("AUTO"), v.literal("TRUSTED_PARTNER")])),
});

/** Token generated by a vetted [partner](https://support.google.com/business/answer/7674102). */
export type VerificationsVerificationToken = {
  readonly tokenString?: string;
};
export const VerificationsVerificationTokenSchema: v.GenericSchema<unknown, VerificationsVerificationToken> = v.looseObject({
  tokenString: v.optional(v.string()),
});

/** Indicates that the location requires verification. Contains information about the current verification actions performed on the location. */
export type VerificationsVerify = {
  readonly hasPendingVerification?: boolean;
};
export const VerificationsVerifySchema: v.GenericSchema<unknown, VerificationsVerify> = v.looseObject({
  hasPendingVerification: v.optional(v.boolean()),
});

/** Request message for Verifications.VerifyLocation. */
export type VerificationsVerifyLocationRequest = {
  readonly context?: VerificationsServiceBusinessContext;
  readonly emailAddress?: string;
  readonly languageCode?: string;
  readonly mailerContact?: string;
  readonly method?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO" | "TRUSTED_PARTNER";
  readonly phoneNumber?: string;
  readonly token?: VerificationsVerificationToken;
  readonly trustedPartnerToken?: string;
};
export const VerificationsVerifyLocationRequestSchema: v.GenericSchema<unknown, VerificationsVerifyLocationRequest> = v.looseObject({
  context: v.optional(v.lazy(() => VerificationsServiceBusinessContextSchema)),
  emailAddress: v.optional(v.string()),
  languageCode: v.optional(v.string()),
  mailerContact: v.optional(v.string()),
  method: v.optional(v.union([v.literal("VERIFICATION_METHOD_UNSPECIFIED"), v.literal("ADDRESS"), v.literal("EMAIL"), v.literal("PHONE_CALL"), v.literal("SMS"), v.literal("AUTO"), v.literal("TRUSTED_PARTNER")])),
  phoneNumber: v.optional(v.string()),
  token: v.optional(v.lazy(() => VerificationsVerificationTokenSchema)),
  trustedPartnerToken: v.optional(v.string()),
});

/** Response message for Verifications.VerifyLocation. */
export type VerificationsVerifyLocationResponse = {
  readonly verification?: VerificationsVerification;
};
export const VerificationsVerifyLocationResponseSchema: v.GenericSchema<unknown, VerificationsVerifyLocationResponse> = v.looseObject({
  verification: v.optional(v.lazy(() => VerificationsVerificationSchema)),
});

/** Response message for VoiceOfMerchant.GetVoiceOfMerchantState. */
export type VerificationsVoiceOfMerchantState = {
  readonly complyWithGuidelines?: VerificationsComplyWithGuidelines;
  readonly hasBusinessAuthority?: boolean;
  readonly hasVoiceOfMerchant?: boolean;
  readonly resolveOwnershipConflict?: VerificationsResolveOwnershipConflict;
  readonly verify?: VerificationsVerify;
  readonly waitForVoiceOfMerchant?: VerificationsWaitForVoiceOfMerchant;
};
export const VerificationsVoiceOfMerchantStateSchema: v.GenericSchema<unknown, VerificationsVoiceOfMerchantState> = v.looseObject({
  complyWithGuidelines: v.optional(v.lazy(() => VerificationsComplyWithGuidelinesSchema)),
  hasBusinessAuthority: v.optional(v.boolean()),
  hasVoiceOfMerchant: v.optional(v.boolean()),
  resolveOwnershipConflict: v.optional(v.lazy(() => VerificationsResolveOwnershipConflictSchema)),
  verify: v.optional(v.lazy(() => VerificationsVerifySchema)),
  waitForVoiceOfMerchant: v.optional(v.lazy(() => VerificationsWaitForVoiceOfMerchantSchema)),
});

/** Indicates that the location will gain voice of merchant after passing review. */
export type VerificationsWaitForVoiceOfMerchant = {

};
export const VerificationsWaitForVoiceOfMerchantSchema: v.GenericSchema<unknown, VerificationsWaitForVoiceOfMerchant> = v.looseObject({

});
