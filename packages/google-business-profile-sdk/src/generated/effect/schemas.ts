// @generated
// fingerprint: sha256:6d9163f52a3aae262d6c00b275771915bfd8b4a759058941464e2f2815d80638
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.
import { Schema } from "effect";

/** Request message for AccessControl.AcceptInvitation. */
export interface AccountManagementAcceptInvitationRequest {

}
export interface AccountManagementAcceptInvitationRequestEncoded {

}
export const AccountManagementAcceptInvitationRequest: Schema.Schema<AccountManagementAcceptInvitationRequest, AccountManagementAcceptInvitationRequestEncoded, never> = Schema.Struct({

});

/** An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325). */
export interface AccountManagementAccount {
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
}
export interface AccountManagementAccountEncoded {
  readonly accountName?: string;
  readonly accountNumber?: string;
  readonly name?: string;
  readonly organizationInfo?: AccountManagementOrganizationInfoEncoded;
  readonly permissionLevel?: "PERMISSION_LEVEL_UNSPECIFIED" | "OWNER_LEVEL" | "MEMBER_LEVEL";
  readonly primaryOwner?: string;
  readonly role?: "ACCOUNT_ROLE_UNSPECIFIED" | "PRIMARY_OWNER" | "OWNER" | "MANAGER" | "SITE_MANAGER";
  readonly type?: "ACCOUNT_TYPE_UNSPECIFIED" | "PERSONAL" | "LOCATION_GROUP" | "USER_GROUP" | "ORGANIZATION";
  readonly verificationState?: "VERIFICATION_STATE_UNSPECIFIED" | "VERIFIED" | "UNVERIFIED" | "VERIFICATION_REQUESTED";
  readonly vettedState?: "VETTED_STATE_UNSPECIFIED" | "NOT_VETTED" | "VETTED" | "INVALID";
}
export const AccountManagementAccount: Schema.Schema<AccountManagementAccount, AccountManagementAccountEncoded, never> = Schema.Struct({
  accountName: Schema.optional(Schema.String),
  accountNumber: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  organizationInfo: Schema.optional(Schema.suspend(() => AccountManagementOrganizationInfo)),
  permissionLevel: Schema.optional(Schema.Union(Schema.Literal("PERMISSION_LEVEL_UNSPECIFIED"), Schema.Literal("OWNER_LEVEL"), Schema.Literal("MEMBER_LEVEL"))),
  primaryOwner: Schema.optional(Schema.String),
  role: Schema.optional(Schema.Union(Schema.Literal("ACCOUNT_ROLE_UNSPECIFIED"), Schema.Literal("PRIMARY_OWNER"), Schema.Literal("OWNER"), Schema.Literal("MANAGER"), Schema.Literal("SITE_MANAGER"))),
  type: Schema.optional(Schema.Union(Schema.Literal("ACCOUNT_TYPE_UNSPECIFIED"), Schema.Literal("PERSONAL"), Schema.Literal("LOCATION_GROUP"), Schema.Literal("USER_GROUP"), Schema.Literal("ORGANIZATION"))),
  verificationState: Schema.optional(Schema.Union(Schema.Literal("VERIFICATION_STATE_UNSPECIFIED"), Schema.Literal("VERIFIED"), Schema.Literal("UNVERIFIED"), Schema.Literal("VERIFICATION_REQUESTED"))),
  vettedState: Schema.optional(Schema.Union(Schema.Literal("VETTED_STATE_UNSPECIFIED"), Schema.Literal("NOT_VETTED"), Schema.Literal("VETTED"), Schema.Literal("INVALID"))),
});

/** An administrator of an Account or a location. */
export interface AccountManagementAdmin {
  readonly account?: string;
  readonly admin?: string;
  readonly name?: string;
  readonly pendingInvitation?: boolean;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "PRIMARY_OWNER" | "OWNER" | "MANAGER" | "SITE_MANAGER";
}
export interface AccountManagementAdminEncoded {
  readonly account?: string;
  readonly admin?: string;
  readonly name?: string;
  readonly pendingInvitation?: boolean;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "PRIMARY_OWNER" | "OWNER" | "MANAGER" | "SITE_MANAGER";
}
export const AccountManagementAdmin: Schema.Schema<AccountManagementAdmin, AccountManagementAdminEncoded, never> = Schema.Struct({
  account: Schema.optional(Schema.String),
  admin: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  pendingInvitation: Schema.optional(Schema.Boolean),
  role: Schema.optional(Schema.Union(Schema.Literal("ADMIN_ROLE_UNSPECIFIED"), Schema.Literal("PRIMARY_OWNER"), Schema.Literal("OWNER"), Schema.Literal("MANAGER"), Schema.Literal("SITE_MANAGER"))),
});

/** Request message for AccessControl.DeclineInvitation. */
export interface AccountManagementDeclineInvitationRequest {

}
export interface AccountManagementDeclineInvitationRequestEncoded {

}
export const AccountManagementDeclineInvitationRequest: Schema.Schema<AccountManagementDeclineInvitationRequest, AccountManagementDeclineInvitationRequestEncoded, never> = Schema.Struct({

});

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
export interface AccountManagementEmpty {

}
export interface AccountManagementEmptyEncoded {

}
export const AccountManagementEmpty: Schema.Schema<AccountManagementEmpty, AccountManagementEmptyEncoded, never> = Schema.Struct({

});

/** Represents a pending invitation. */
export interface AccountManagementInvitation {
  readonly name?: string;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "PRIMARY_OWNER" | "OWNER" | "MANAGER" | "SITE_MANAGER";
  readonly targetAccount?: AccountManagementAccount;
  readonly targetLocation?: AccountManagementTargetLocation;
  readonly targetType?: "TARGET_TYPE_UNSPECIFIED" | "ACCOUNTS_ONLY" | "LOCATIONS_ONLY";
}
export interface AccountManagementInvitationEncoded {
  readonly name?: string;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "PRIMARY_OWNER" | "OWNER" | "MANAGER" | "SITE_MANAGER";
  readonly targetAccount?: AccountManagementAccountEncoded;
  readonly targetLocation?: AccountManagementTargetLocationEncoded;
  readonly targetType?: "TARGET_TYPE_UNSPECIFIED" | "ACCOUNTS_ONLY" | "LOCATIONS_ONLY";
}
export const AccountManagementInvitation: Schema.Schema<AccountManagementInvitation, AccountManagementInvitationEncoded, never> = Schema.Struct({
  name: Schema.optional(Schema.String),
  role: Schema.optional(Schema.Union(Schema.Literal("ADMIN_ROLE_UNSPECIFIED"), Schema.Literal("PRIMARY_OWNER"), Schema.Literal("OWNER"), Schema.Literal("MANAGER"), Schema.Literal("SITE_MANAGER"))),
  targetAccount: Schema.optional(Schema.suspend(() => AccountManagementAccount)),
  targetLocation: Schema.optional(Schema.suspend(() => AccountManagementTargetLocation)),
  targetType: Schema.optional(Schema.Union(Schema.Literal("TARGET_TYPE_UNSPECIFIED"), Schema.Literal("ACCOUNTS_ONLY"), Schema.Literal("LOCATIONS_ONLY"))),
});

/** Response message for AccessControl.ListAccountAdmins. */
export interface AccountManagementListAccountAdminsResponse {
  readonly accountAdmins?: ReadonlyArray<AccountManagementAdmin>;
}
export interface AccountManagementListAccountAdminsResponseEncoded {
  readonly accountAdmins?: ReadonlyArray<AccountManagementAdminEncoded>;
}
export const AccountManagementListAccountAdminsResponse: Schema.Schema<AccountManagementListAccountAdminsResponse, AccountManagementListAccountAdminsResponseEncoded, never> = Schema.Struct({
  accountAdmins: Schema.optional(Schema.Array(Schema.suspend(() => AccountManagementAdmin))),
});

/** Response message for Accounts.ListAccounts. */
export interface AccountManagementListAccountsResponse {
  readonly accounts?: ReadonlyArray<AccountManagementAccount>;
  readonly nextPageToken?: string;
}
export interface AccountManagementListAccountsResponseEncoded {
  readonly accounts?: ReadonlyArray<AccountManagementAccountEncoded>;
  readonly nextPageToken?: string;
}
export const AccountManagementListAccountsResponse: Schema.Schema<AccountManagementListAccountsResponse, AccountManagementListAccountsResponseEncoded, never> = Schema.Struct({
  accounts: Schema.optional(Schema.Array(Schema.suspend(() => AccountManagementAccount))),
  nextPageToken: Schema.optional(Schema.String),
});

/** Response message for AccessControl.ListInvitations. */
export interface AccountManagementListInvitationsResponse {
  readonly invitations?: ReadonlyArray<AccountManagementInvitation>;
}
export interface AccountManagementListInvitationsResponseEncoded {
  readonly invitations?: ReadonlyArray<AccountManagementInvitationEncoded>;
}
export const AccountManagementListInvitationsResponse: Schema.Schema<AccountManagementListInvitationsResponse, AccountManagementListInvitationsResponseEncoded, never> = Schema.Struct({
  invitations: Schema.optional(Schema.Array(Schema.suspend(() => AccountManagementInvitation))),
});

/** Response message for AccessControl.ListLocationAdmins. */
export interface AccountManagementListLocationAdminsResponse {
  readonly admins?: ReadonlyArray<AccountManagementAdmin>;
}
export interface AccountManagementListLocationAdminsResponseEncoded {
  readonly admins?: ReadonlyArray<AccountManagementAdminEncoded>;
}
export const AccountManagementListLocationAdminsResponse: Schema.Schema<AccountManagementListLocationAdminsResponse, AccountManagementListLocationAdminsResponseEncoded, never> = Schema.Struct({
  admins: Schema.optional(Schema.Array(Schema.suspend(() => AccountManagementAdmin))),
});

/** Additional information stored for an organization. */
export interface AccountManagementOrganizationInfo {
  readonly address?: AccountManagementPostalAddress;
  readonly phoneNumber?: string;
  readonly registeredDomain?: string;
}
export interface AccountManagementOrganizationInfoEncoded {
  readonly address?: AccountManagementPostalAddressEncoded;
  readonly phoneNumber?: string;
  readonly registeredDomain?: string;
}
export const AccountManagementOrganizationInfo: Schema.Schema<AccountManagementOrganizationInfo, AccountManagementOrganizationInfoEncoded, never> = Schema.Struct({
  address: Schema.optional(Schema.suspend(() => AccountManagementPostalAddress)),
  phoneNumber: Schema.optional(Schema.String),
  registeredDomain: Schema.optional(Schema.String),
});

/** Represents a postal address, such as for postal delivery or payments addresses. With a postal address, a postal service can deliver items to a premise, P.O. box, or similar. A postal address is not intended to model geographical locations like roads, towns, or mountains. In typical usage, an address would be created by user input or from importing existing data, depending on the type of process. Advice on address input or editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput. - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, see: https://support.google.com/business/answer/6397478. */
export interface AccountManagementPostalAddress {
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
}
export interface AccountManagementPostalAddressEncoded {
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
}
export const AccountManagementPostalAddress: Schema.Schema<AccountManagementPostalAddress, AccountManagementPostalAddressEncoded, never> = Schema.Struct({
  addressLines: Schema.optional(Schema.Array(Schema.String)),
  administrativeArea: Schema.optional(Schema.String),
  languageCode: Schema.optional(Schema.String),
  locality: Schema.optional(Schema.String),
  organization: Schema.optional(Schema.String),
  postalCode: Schema.optional(Schema.String),
  recipients: Schema.optional(Schema.Array(Schema.String)),
  regionCode: Schema.optional(Schema.String),
  revision: Schema.optional(Schema.Int),
  sortingCode: Schema.optional(Schema.String),
  sublocality: Schema.optional(Schema.String),
});

/** Represents a target location for a pending invitation. */
export interface AccountManagementTargetLocation {
  readonly address?: string;
  readonly locationName?: string;
  readonly placeId?: string;
}
export interface AccountManagementTargetLocationEncoded {
  readonly address?: string;
  readonly locationName?: string;
  readonly placeId?: string;
}
export const AccountManagementTargetLocation: Schema.Schema<AccountManagementTargetLocation, AccountManagementTargetLocationEncoded, never> = Schema.Struct({
  address: Schema.optional(Schema.String),
  locationName: Schema.optional(Schema.String),
  placeId: Schema.optional(Schema.String),
});

/** Request message for AccessControl.TransferLocation. */
export interface AccountManagementTransferLocationRequest {
  readonly destinationAccount?: string;
}
export interface AccountManagementTransferLocationRequestEncoded {
  readonly destinationAccount?: string;
}
export const AccountManagementTransferLocationRequest: Schema.Schema<AccountManagementTransferLocationRequest, AccountManagementTransferLocationRequestEncoded, never> = Schema.Struct({
  destinationAccount: Schema.optional(Schema.String),
});

/** Additional information that is surfaced in AdWords. */
export interface BusinessInformationAdWordsLocationExtensions {
  readonly adPhone?: string;
}
export interface BusinessInformationAdWordsLocationExtensionsEncoded {
  readonly adPhone?: string;
}
export const BusinessInformationAdWordsLocationExtensions: Schema.Schema<BusinessInformationAdWordsLocationExtensions, BusinessInformationAdWordsLocationExtensionsEncoded, never> = Schema.Struct({
  adPhone: Schema.optional(Schema.String),
});

/** A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes. */
export interface BusinessInformationAttribute {
  readonly name?: string;
  readonly repeatedEnumValue?: BusinessInformationRepeatedEnumAttributeValue;
  readonly uriValues?: ReadonlyArray<BusinessInformationUriAttributeValue>;
  readonly values?: ReadonlyArray<unknown>;
  readonly valueType?: "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED" | "BOOL" | "ENUM" | "URL" | "REPEATED_ENUM";
}
export interface BusinessInformationAttributeEncoded {
  readonly name?: string;
  readonly repeatedEnumValue?: BusinessInformationRepeatedEnumAttributeValueEncoded;
  readonly uriValues?: ReadonlyArray<BusinessInformationUriAttributeValueEncoded>;
  readonly values?: ReadonlyArray<unknown>;
  readonly valueType?: "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED" | "BOOL" | "ENUM" | "URL" | "REPEATED_ENUM";
}
export const BusinessInformationAttribute: Schema.Schema<BusinessInformationAttribute, BusinessInformationAttributeEncoded, never> = Schema.Struct({
  name: Schema.optional(Schema.String),
  repeatedEnumValue: Schema.optional(Schema.suspend(() => BusinessInformationRepeatedEnumAttributeValue)),
  uriValues: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationUriAttributeValue))),
  values: Schema.optional(Schema.Array(Schema.Unknown)),
  valueType: Schema.optional(Schema.Union(Schema.Literal("ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"), Schema.Literal("BOOL"), Schema.Literal("ENUM"), Schema.Literal("URL"), Schema.Literal("REPEATED_ENUM"))),
});

/** Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together. */
export interface BusinessInformationAttributeMetadata {
  readonly deprecated?: boolean;
  readonly displayName?: string;
  readonly groupDisplayName?: string;
  readonly parent?: string;
  readonly repeatable?: boolean;
  readonly valueMetadata?: ReadonlyArray<BusinessInformationAttributeValueMetadata>;
  readonly valueType?: "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED" | "BOOL" | "ENUM" | "URL" | "REPEATED_ENUM";
}
export interface BusinessInformationAttributeMetadataEncoded {
  readonly deprecated?: boolean;
  readonly displayName?: string;
  readonly groupDisplayName?: string;
  readonly parent?: string;
  readonly repeatable?: boolean;
  readonly valueMetadata?: ReadonlyArray<BusinessInformationAttributeValueMetadataEncoded>;
  readonly valueType?: "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED" | "BOOL" | "ENUM" | "URL" | "REPEATED_ENUM";
}
export const BusinessInformationAttributeMetadata: Schema.Schema<BusinessInformationAttributeMetadata, BusinessInformationAttributeMetadataEncoded, never> = Schema.Struct({
  deprecated: Schema.optional(Schema.Boolean),
  displayName: Schema.optional(Schema.String),
  groupDisplayName: Schema.optional(Schema.String),
  parent: Schema.optional(Schema.String),
  repeatable: Schema.optional(Schema.Boolean),
  valueMetadata: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationAttributeValueMetadata))),
  valueType: Schema.optional(Schema.Union(Schema.Literal("ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"), Schema.Literal("BOOL"), Schema.Literal("ENUM"), Schema.Literal("URL"), Schema.Literal("REPEATED_ENUM"))),
});

/** A container for all the attributes for a given location. */
export interface BusinessInformationAttributes {
  readonly attributes?: ReadonlyArray<BusinessInformationAttribute>;
  readonly name?: string;
}
export interface BusinessInformationAttributesEncoded {
  readonly attributes?: ReadonlyArray<BusinessInformationAttributeEncoded>;
  readonly name?: string;
}
export const BusinessInformationAttributes: Schema.Schema<BusinessInformationAttributes, BusinessInformationAttributesEncoded, never> = Schema.Struct({
  attributes: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationAttribute))),
  name: Schema.optional(Schema.String),
});

/** Metadata for supported attribute values. */
export interface BusinessInformationAttributeValueMetadata {
  readonly displayName?: string;
  readonly value?: unknown;
}
export interface BusinessInformationAttributeValueMetadataEncoded {
  readonly displayName?: string;
  readonly value?: unknown;
}
export const BusinessInformationAttributeValueMetadata: Schema.Schema<BusinessInformationAttributeValueMetadata, BusinessInformationAttributeValueMetadataEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Unknown),
});

/** Response message for BusinessCategories.BatchGetBusinessCategories. */
export interface BusinessInformationBatchGetCategoriesResponse {
  readonly categories?: ReadonlyArray<BusinessInformationCategory>;
}
export interface BusinessInformationBatchGetCategoriesResponseEncoded {
  readonly categories?: ReadonlyArray<BusinessInformationCategoryEncoded>;
}
export const BusinessInformationBatchGetCategoriesResponse: Schema.Schema<BusinessInformationBatchGetCategoriesResponse, BusinessInformationBatchGetCategoriesResponseEncoded, never> = Schema.Struct({
  categories: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationCategory))),
});

/** Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances. */
export interface BusinessInformationBusinessHours {
  readonly periods?: ReadonlyArray<BusinessInformationTimePeriod>;
}
export interface BusinessInformationBusinessHoursEncoded {
  readonly periods?: ReadonlyArray<BusinessInformationTimePeriodEncoded>;
}
export const BusinessInformationBusinessHours: Schema.Schema<BusinessInformationBusinessHours, BusinessInformationBusinessHoursEncoded, never> = Schema.Struct({
  periods: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationTimePeriod))),
});

/** A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask. */
export interface BusinessInformationCategories {
  readonly additionalCategories?: ReadonlyArray<BusinessInformationCategory>;
  readonly primaryCategory?: BusinessInformationCategory;
}
export interface BusinessInformationCategoriesEncoded {
  readonly additionalCategories?: ReadonlyArray<BusinessInformationCategoryEncoded>;
  readonly primaryCategory?: BusinessInformationCategoryEncoded;
}
export const BusinessInformationCategories: Schema.Schema<BusinessInformationCategories, BusinessInformationCategoriesEncoded, never> = Schema.Struct({
  additionalCategories: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationCategory))),
  primaryCategory: Schema.optional(Schema.suspend(() => BusinessInformationCategory)),
});

/** A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`. */
export interface BusinessInformationCategory {
  readonly displayName?: string;
  readonly moreHoursTypes?: ReadonlyArray<BusinessInformationMoreHoursType>;
  readonly name?: string;
  readonly serviceTypes?: ReadonlyArray<BusinessInformationServiceType>;
}
export interface BusinessInformationCategoryEncoded {
  readonly displayName?: string;
  readonly moreHoursTypes?: ReadonlyArray<BusinessInformationMoreHoursTypeEncoded>;
  readonly name?: string;
  readonly serviceTypes?: ReadonlyArray<BusinessInformationServiceTypeEncoded>;
}
export const BusinessInformationCategory: Schema.Schema<BusinessInformationCategory, BusinessInformationCategoryEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  moreHoursTypes: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationMoreHoursType))),
  name: Schema.optional(Schema.String),
  serviceTypes: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationServiceType))),
});

/** A chain is a brand that your business's locations can be affiliated with. */
export interface BusinessInformationChain {
  readonly chainNames?: ReadonlyArray<BusinessInformationChainName>;
  readonly locationCount?: number;
  readonly name?: string;
  readonly websites?: ReadonlyArray<BusinessInformationChainUri>;
}
export interface BusinessInformationChainEncoded {
  readonly chainNames?: ReadonlyArray<BusinessInformationChainNameEncoded>;
  readonly locationCount?: number;
  readonly name?: string;
  readonly websites?: ReadonlyArray<BusinessInformationChainUriEncoded>;
}
export const BusinessInformationChain: Schema.Schema<BusinessInformationChain, BusinessInformationChainEncoded, never> = Schema.Struct({
  chainNames: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationChainName))),
  locationCount: Schema.optional(Schema.Int),
  name: Schema.optional(Schema.String),
  websites: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationChainUri))),
});

/** Name to be used when displaying the chain. */
export interface BusinessInformationChainName {
  readonly displayName?: string;
  readonly languageCode?: string;
}
export interface BusinessInformationChainNameEncoded {
  readonly displayName?: string;
  readonly languageCode?: string;
}
export const BusinessInformationChainName: Schema.Schema<BusinessInformationChainName, BusinessInformationChainNameEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  languageCode: Schema.optional(Schema.String),
});

/** Url to be used when displaying the chain. */
export interface BusinessInformationChainUri {
  readonly uri?: string;
}
export interface BusinessInformationChainUriEncoded {
  readonly uri?: string;
}
export const BusinessInformationChainUri: Schema.Schema<BusinessInformationChainUri, BusinessInformationChainUriEncoded, never> = Schema.Struct({
  uri: Schema.optional(Schema.String),
});

/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
export interface BusinessInformationDate {
  readonly day?: number;
  readonly month?: number;
  readonly year?: number;
}
export interface BusinessInformationDateEncoded {
  readonly day?: number;
  readonly month?: number;
  readonly year?: number;
}
export const BusinessInformationDate: Schema.Schema<BusinessInformationDate, BusinessInformationDateEncoded, never> = Schema.Struct({
  day: Schema.optional(Schema.Int),
  month: Schema.optional(Schema.Int),
  year: Schema.optional(Schema.Int),
});

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
export interface BusinessInformationEmpty {

}
export interface BusinessInformationEmptyEncoded {

}
export const BusinessInformationEmpty: Schema.Schema<BusinessInformationEmpty, BusinessInformationEmptyEncoded, never> = Schema.Struct({

});

/** Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for such services using a geomerchant surface. */
export interface BusinessInformationFreeFormServiceItem {
  readonly category?: string;
  readonly label?: BusinessInformationLabel;
}
export interface BusinessInformationFreeFormServiceItemEncoded {
  readonly category?: string;
  readonly label?: BusinessInformationLabelEncoded;
}
export const BusinessInformationFreeFormServiceItem: Schema.Schema<BusinessInformationFreeFormServiceItem, BusinessInformationFreeFormServiceItemEncoded, never> = Schema.Struct({
  category: Schema.optional(Schema.String),
  label: Schema.optional(Schema.suspend(() => BusinessInformationLabel)),
});

/** Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed. */
export interface BusinessInformationGoogleLocation {
  readonly location?: BusinessInformationLocation;
  readonly name?: string;
  readonly requestAdminRightsUri?: string;
}
export interface BusinessInformationGoogleLocationEncoded {
  readonly location?: BusinessInformationLocationEncoded;
  readonly name?: string;
  readonly requestAdminRightsUri?: string;
}
export const BusinessInformationGoogleLocation: Schema.Schema<BusinessInformationGoogleLocation, BusinessInformationGoogleLocationEncoded, never> = Schema.Struct({
  location: Schema.optional(Schema.suspend(() => BusinessInformationLocation)),
  name: Schema.optional(Schema.String),
  requestAdminRightsUri: Schema.optional(Schema.String),
});

/** Represents the view of a location as it appears to consumers, which includes updates that are currently serving on Google Maps and Search. */
export interface BusinessInformationGoogleUpdatedLocation {
  readonly diffMask?: string;
  readonly location?: BusinessInformationLocation;
  readonly pendingMask?: string;
}
export interface BusinessInformationGoogleUpdatedLocationEncoded {
  readonly diffMask?: string;
  readonly location?: BusinessInformationLocationEncoded;
  readonly pendingMask?: string;
}
export const BusinessInformationGoogleUpdatedLocation: Schema.Schema<BusinessInformationGoogleUpdatedLocation, BusinessInformationGoogleUpdatedLocationEncoded, never> = Schema.Struct({
  diffMask: Schema.optional(Schema.String),
  location: Schema.optional(Schema.suspend(() => BusinessInformationLocation)),
  pendingMask: Schema.optional(Schema.String),
});

/** Label to be used when displaying the price list, section, or item. */
export interface BusinessInformationLabel {
  readonly description?: string;
  readonly displayName?: string;
  readonly languageCode?: string;
}
export interface BusinessInformationLabelEncoded {
  readonly description?: string;
  readonly displayName?: string;
  readonly languageCode?: string;
}
export const BusinessInformationLabel: Schema.Schema<BusinessInformationLabel, BusinessInformationLabelEncoded, never> = Schema.Struct({
  description: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  languageCode: Schema.optional(Schema.String),
});

/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
export interface BusinessInformationLatLng {
  readonly latitude?: number;
  readonly longitude?: number;
}
export interface BusinessInformationLatLngEncoded {
  readonly latitude?: number;
  readonly longitude?: number;
}
export const BusinessInformationLatLng: Schema.Schema<BusinessInformationLatLng, BusinessInformationLatLngEncoded, never> = Schema.Struct({
  latitude: Schema.optional(Schema.Number),
  longitude: Schema.optional(Schema.Number),
});

/** Response for AttributesService.ListAttributeMetadata. */
export interface BusinessInformationListAttributeMetadataResponse {
  readonly attributeMetadata?: ReadonlyArray<BusinessInformationAttributeMetadata>;
  readonly nextPageToken?: string;
}
export interface BusinessInformationListAttributeMetadataResponseEncoded {
  readonly attributeMetadata?: ReadonlyArray<BusinessInformationAttributeMetadataEncoded>;
  readonly nextPageToken?: string;
}
export const BusinessInformationListAttributeMetadataResponse: Schema.Schema<BusinessInformationListAttributeMetadataResponse, BusinessInformationListAttributeMetadataResponseEncoded, never> = Schema.Struct({
  attributeMetadata: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationAttributeMetadata))),
  nextPageToken: Schema.optional(Schema.String),
});

/** Response message for BusinessCategories.ListCategories. */
export interface BusinessInformationListCategoriesResponse {
  readonly categories?: ReadonlyArray<BusinessInformationCategory>;
  readonly nextPageToken?: string;
}
export interface BusinessInformationListCategoriesResponseEncoded {
  readonly categories?: ReadonlyArray<BusinessInformationCategoryEncoded>;
  readonly nextPageToken?: string;
}
export const BusinessInformationListCategoriesResponse: Schema.Schema<BusinessInformationListCategoriesResponse, BusinessInformationListCategoriesResponseEncoded, never> = Schema.Struct({
  categories: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationCategory))),
  nextPageToken: Schema.optional(Schema.String),
});

/** Response message for Locations.ListLocations. */
export interface BusinessInformationListLocationsResponse {
  readonly locations?: ReadonlyArray<BusinessInformationLocation>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
}
export interface BusinessInformationListLocationsResponseEncoded {
  readonly locations?: ReadonlyArray<BusinessInformationLocationEncoded>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
}
export const BusinessInformationListLocationsResponse: Schema.Schema<BusinessInformationListLocationsResponse, BusinessInformationListLocationsResponseEncoded, never> = Schema.Struct({
  locations: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationLocation))),
  nextPageToken: Schema.optional(Schema.String),
  totalSize: Schema.optional(Schema.Int),
});

/** A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories. */
export interface BusinessInformationLocation {
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
}
export interface BusinessInformationLocationEncoded {
  readonly adWordsLocationExtensions?: BusinessInformationAdWordsLocationExtensionsEncoded;
  readonly categories?: BusinessInformationCategoriesEncoded;
  readonly labels?: ReadonlyArray<string>;
  readonly languageCode?: string;
  readonly latlng?: BusinessInformationLatLngEncoded;
  readonly metadata?: BusinessInformationMetadataEncoded;
  readonly moreHours?: ReadonlyArray<BusinessInformationMoreHoursEncoded>;
  readonly name?: string;
  readonly openInfo?: BusinessInformationOpenInfoEncoded;
  readonly phoneNumbers?: BusinessInformationPhoneNumbersEncoded;
  readonly profile?: BusinessInformationProfileEncoded;
  readonly regularHours?: BusinessInformationBusinessHoursEncoded;
  readonly relationshipData?: BusinessInformationRelationshipDataEncoded;
  readonly serviceArea?: BusinessInformationServiceAreaBusinessEncoded;
  readonly serviceItems?: ReadonlyArray<BusinessInformationServiceItemEncoded>;
  readonly specialHours?: BusinessInformationSpecialHoursEncoded;
  readonly storeCode?: string;
  readonly storefrontAddress?: BusinessInformationPostalAddressEncoded;
  readonly title?: string;
  readonly websiteUri?: string;
}
export const BusinessInformationLocation: Schema.Schema<BusinessInformationLocation, BusinessInformationLocationEncoded, never> = Schema.Struct({
  adWordsLocationExtensions: Schema.optional(Schema.suspend(() => BusinessInformationAdWordsLocationExtensions)),
  categories: Schema.optional(Schema.suspend(() => BusinessInformationCategories)),
  labels: Schema.optional(Schema.Array(Schema.String)),
  languageCode: Schema.optional(Schema.String),
  latlng: Schema.optional(Schema.suspend(() => BusinessInformationLatLng)),
  metadata: Schema.optional(Schema.suspend(() => BusinessInformationMetadata)),
  moreHours: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationMoreHours))),
  name: Schema.optional(Schema.String),
  openInfo: Schema.optional(Schema.suspend(() => BusinessInformationOpenInfo)),
  phoneNumbers: Schema.optional(Schema.suspend(() => BusinessInformationPhoneNumbers)),
  profile: Schema.optional(Schema.suspend(() => BusinessInformationProfile)),
  regularHours: Schema.optional(Schema.suspend(() => BusinessInformationBusinessHours)),
  relationshipData: Schema.optional(Schema.suspend(() => BusinessInformationRelationshipData)),
  serviceArea: Schema.optional(Schema.suspend(() => BusinessInformationServiceAreaBusiness)),
  serviceItems: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationServiceItem))),
  specialHours: Schema.optional(Schema.suspend(() => BusinessInformationSpecialHours)),
  storeCode: Schema.optional(Schema.String),
  storefrontAddress: Schema.optional(Schema.suspend(() => BusinessInformationPostalAddress)),
  title: Schema.optional(Schema.String),
  websiteUri: Schema.optional(Schema.String),
});

/** Additional non-user-editable information about the location. */
export interface BusinessInformationMetadata {
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
}
export interface BusinessInformationMetadataEncoded {
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
}
export const BusinessInformationMetadata: Schema.Schema<BusinessInformationMetadata, BusinessInformationMetadataEncoded, never> = Schema.Struct({
  canDelete: Schema.optional(Schema.Boolean),
  canHaveBusinessCalls: Schema.optional(Schema.Boolean),
  canHaveFoodMenus: Schema.optional(Schema.Boolean),
  canModifyServiceList: Schema.optional(Schema.Boolean),
  canOperateHealthData: Schema.optional(Schema.Boolean),
  canOperateLocalPost: Schema.optional(Schema.Boolean),
  canOperateLodgingData: Schema.optional(Schema.Boolean),
  duplicateLocation: Schema.optional(Schema.String),
  hasGoogleUpdated: Schema.optional(Schema.Boolean),
  hasPendingEdits: Schema.optional(Schema.Boolean),
  hasVoiceOfMerchant: Schema.optional(Schema.Boolean),
  isParticularlyPersonalPlace: Schema.optional(Schema.Boolean),
  mapsUri: Schema.optional(Schema.String),
  newReviewUri: Schema.optional(Schema.String),
  placeId: Schema.optional(Schema.String),
});

/** Represents an amount of money with its currency type. */
export interface BusinessInformationMoney {
  readonly currencyCode?: string;
  readonly nanos?: number;
  readonly units?: string;
}
export interface BusinessInformationMoneyEncoded {
  readonly currencyCode?: string;
  readonly nanos?: number;
  readonly units?: string;
}
export const BusinessInformationMoney: Schema.Schema<BusinessInformationMoney, BusinessInformationMoneyEncoded, never> = Schema.Struct({
  currencyCode: Schema.optional(Schema.String),
  nanos: Schema.optional(Schema.Int),
  units: Schema.optional(Schema.String),
});

/** The time periods during which a location is open for certain types of business. */
export interface BusinessInformationMoreHours {
  readonly hoursTypeId?: string;
  readonly periods?: ReadonlyArray<BusinessInformationTimePeriod>;
}
export interface BusinessInformationMoreHoursEncoded {
  readonly hoursTypeId?: string;
  readonly periods?: ReadonlyArray<BusinessInformationTimePeriodEncoded>;
}
export const BusinessInformationMoreHours: Schema.Schema<BusinessInformationMoreHours, BusinessInformationMoreHoursEncoded, never> = Schema.Struct({
  hoursTypeId: Schema.optional(Schema.String),
  periods: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationTimePeriod))),
});

/** More hours types that a business can offers, in addition to its regular hours. */
export interface BusinessInformationMoreHoursType {
  readonly displayName?: string;
  readonly hoursTypeId?: string;
  readonly localizedDisplayName?: string;
}
export interface BusinessInformationMoreHoursTypeEncoded {
  readonly displayName?: string;
  readonly hoursTypeId?: string;
  readonly localizedDisplayName?: string;
}
export const BusinessInformationMoreHoursType: Schema.Schema<BusinessInformationMoreHoursType, BusinessInformationMoreHoursTypeEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  hoursTypeId: Schema.optional(Schema.String),
  localizedDisplayName: Schema.optional(Schema.String),
});

/** Information related to the opening state of the business. */
export interface BusinessInformationOpenInfo {
  readonly canReopen?: boolean;
  readonly openingDate?: BusinessInformationDate;
  readonly status?: "OPEN_FOR_BUSINESS_UNSPECIFIED" | "OPEN" | "CLOSED_PERMANENTLY" | "CLOSED_TEMPORARILY";
}
export interface BusinessInformationOpenInfoEncoded {
  readonly canReopen?: boolean;
  readonly openingDate?: BusinessInformationDateEncoded;
  readonly status?: "OPEN_FOR_BUSINESS_UNSPECIFIED" | "OPEN" | "CLOSED_PERMANENTLY" | "CLOSED_TEMPORARILY";
}
export const BusinessInformationOpenInfo: Schema.Schema<BusinessInformationOpenInfo, BusinessInformationOpenInfoEncoded, never> = Schema.Struct({
  canReopen: Schema.optional(Schema.Boolean),
  openingDate: Schema.optional(Schema.suspend(() => BusinessInformationDate)),
  status: Schema.optional(Schema.Union(Schema.Literal("OPEN_FOR_BUSINESS_UNSPECIFIED"), Schema.Literal("OPEN"), Schema.Literal("CLOSED_PERMANENTLY"), Schema.Literal("CLOSED_TEMPORARILY"))),
});

/** A collection of phone numbers for the business. During updates, both fields must be set. Clients may not update just the primary or additional phone numbers using the update mask. International phone format is preferred, such as "+1 415 555 0132", see more in (https://developers.google.com/style/phone-numbers#international-phone-numbers). */
export interface BusinessInformationPhoneNumbers {
  readonly additionalPhones?: ReadonlyArray<string>;
  readonly primaryPhone?: string;
}
export interface BusinessInformationPhoneNumbersEncoded {
  readonly additionalPhones?: ReadonlyArray<string>;
  readonly primaryPhone?: string;
}
export const BusinessInformationPhoneNumbers: Schema.Schema<BusinessInformationPhoneNumbers, BusinessInformationPhoneNumbersEncoded, never> = Schema.Struct({
  additionalPhones: Schema.optional(Schema.Array(Schema.String)),
  primaryPhone: Schema.optional(Schema.String),
});

/** Defines an area that's represented by a place ID. */
export interface BusinessInformationPlaceInfo {
  readonly placeId?: string;
  readonly placeName?: string;
}
export interface BusinessInformationPlaceInfoEncoded {
  readonly placeId?: string;
  readonly placeName?: string;
}
export const BusinessInformationPlaceInfo: Schema.Schema<BusinessInformationPlaceInfo, BusinessInformationPlaceInfoEncoded, never> = Schema.Struct({
  placeId: Schema.optional(Schema.String),
  placeName: Schema.optional(Schema.String),
});

/** Defines the union of areas represented by a set of places. */
export interface BusinessInformationPlaces {
  readonly placeInfos?: ReadonlyArray<BusinessInformationPlaceInfo>;
}
export interface BusinessInformationPlacesEncoded {
  readonly placeInfos?: ReadonlyArray<BusinessInformationPlaceInfoEncoded>;
}
export const BusinessInformationPlaces: Schema.Schema<BusinessInformationPlaces, BusinessInformationPlacesEncoded, never> = Schema.Struct({
  placeInfos: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationPlaceInfo))),
});

/** Represents a postal address, such as for postal delivery or payments addresses. With a postal address, a postal service can deliver items to a premise, P.O. box, or similar. A postal address is not intended to model geographical locations like roads, towns, or mountains. In typical usage, an address would be created by user input or from importing existing data, depending on the type of process. Advice on address input or editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput. - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, see: https://support.google.com/business/answer/6397478. */
export interface BusinessInformationPostalAddress {
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
}
export interface BusinessInformationPostalAddressEncoded {
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
}
export const BusinessInformationPostalAddress: Schema.Schema<BusinessInformationPostalAddress, BusinessInformationPostalAddressEncoded, never> = Schema.Struct({
  addressLines: Schema.optional(Schema.Array(Schema.String)),
  administrativeArea: Schema.optional(Schema.String),
  languageCode: Schema.optional(Schema.String),
  locality: Schema.optional(Schema.String),
  organization: Schema.optional(Schema.String),
  postalCode: Schema.optional(Schema.String),
  recipients: Schema.optional(Schema.Array(Schema.String)),
  regionCode: Schema.optional(Schema.String),
  revision: Schema.optional(Schema.Int),
  sortingCode: Schema.optional(Schema.String),
  sublocality: Schema.optional(Schema.String),
});

/** All information pertaining to the location's profile. */
export interface BusinessInformationProfile {
  readonly description?: string;
}
export interface BusinessInformationProfileEncoded {
  readonly description?: string;
}
export const BusinessInformationProfile: Schema.Schema<BusinessInformationProfile, BusinessInformationProfileEncoded, never> = Schema.Struct({
  description: Schema.optional(Schema.String),
});

/** Information of all parent and children locations related to this one. */
export interface BusinessInformationRelationshipData {
  readonly childrenLocations?: ReadonlyArray<BusinessInformationRelevantLocation>;
  readonly parentChain?: string;
  readonly parentLocation?: BusinessInformationRelevantLocation;
}
export interface BusinessInformationRelationshipDataEncoded {
  readonly childrenLocations?: ReadonlyArray<BusinessInformationRelevantLocationEncoded>;
  readonly parentChain?: string;
  readonly parentLocation?: BusinessInformationRelevantLocationEncoded;
}
export const BusinessInformationRelationshipData: Schema.Schema<BusinessInformationRelationshipData, BusinessInformationRelationshipDataEncoded, never> = Schema.Struct({
  childrenLocations: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationRelevantLocation))),
  parentChain: Schema.optional(Schema.String),
  parentLocation: Schema.optional(Schema.suspend(() => BusinessInformationRelevantLocation)),
});

/** Information about another location that is related to current one. The relation can be any one of DEPARTMENT_OF or INDEPENDENT_ESTABLISHMENT_OF, and the location specified here can be on either side (parent/child) of the location. */
export interface BusinessInformationRelevantLocation {
  readonly placeId?: string;
  readonly relationType?: "RELATION_TYPE_UNSPECIFIED" | "DEPARTMENT_OF" | "INDEPENDENT_ESTABLISHMENT_IN";
}
export interface BusinessInformationRelevantLocationEncoded {
  readonly placeId?: string;
  readonly relationType?: "RELATION_TYPE_UNSPECIFIED" | "DEPARTMENT_OF" | "INDEPENDENT_ESTABLISHMENT_IN";
}
export const BusinessInformationRelevantLocation: Schema.Schema<BusinessInformationRelevantLocation, BusinessInformationRelevantLocationEncoded, never> = Schema.Struct({
  placeId: Schema.optional(Schema.String),
  relationType: Schema.optional(Schema.Union(Schema.Literal("RELATION_TYPE_UNSPECIFIED"), Schema.Literal("DEPARTMENT_OF"), Schema.Literal("INDEPENDENT_ESTABLISHMENT_IN"))),
});

/** Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified. */
export interface BusinessInformationRepeatedEnumAttributeValue {
  readonly setValues?: ReadonlyArray<string>;
  readonly unsetValues?: ReadonlyArray<string>;
}
export interface BusinessInformationRepeatedEnumAttributeValueEncoded {
  readonly setValues?: ReadonlyArray<string>;
  readonly unsetValues?: ReadonlyArray<string>;
}
export const BusinessInformationRepeatedEnumAttributeValue: Schema.Schema<BusinessInformationRepeatedEnumAttributeValue, BusinessInformationRepeatedEnumAttributeValueEncoded, never> = Schema.Struct({
  setValues: Schema.optional(Schema.Array(Schema.String)),
  unsetValues: Schema.optional(Schema.Array(Schema.String)),
});

/** Response message for Locations.SearchChains. */
export interface BusinessInformationSearchChainsResponse {
  readonly chains?: ReadonlyArray<BusinessInformationChain>;
}
export interface BusinessInformationSearchChainsResponseEncoded {
  readonly chains?: ReadonlyArray<BusinessInformationChainEncoded>;
}
export const BusinessInformationSearchChainsResponse: Schema.Schema<BusinessInformationSearchChainsResponse, BusinessInformationSearchChainsResponseEncoded, never> = Schema.Struct({
  chains: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationChain))),
});

/** Request message for GoogleLocations.SearchGoogleLocations. */
export interface BusinessInformationSearchGoogleLocationsRequest {
  readonly location?: BusinessInformationLocation;
  readonly pageSize?: number;
  readonly query?: string;
}
export interface BusinessInformationSearchGoogleLocationsRequestEncoded {
  readonly location?: BusinessInformationLocationEncoded;
  readonly pageSize?: number;
  readonly query?: string;
}
export const BusinessInformationSearchGoogleLocationsRequest: Schema.Schema<BusinessInformationSearchGoogleLocationsRequest, BusinessInformationSearchGoogleLocationsRequestEncoded, never> = Schema.Struct({
  location: Schema.optional(Schema.suspend(() => BusinessInformationLocation)),
  pageSize: Schema.optional(Schema.Int),
  query: Schema.optional(Schema.String),
});

/** Response message for GoogleLocations.SearchGoogleLocations. */
export interface BusinessInformationSearchGoogleLocationsResponse {
  readonly googleLocations?: ReadonlyArray<BusinessInformationGoogleLocation>;
}
export interface BusinessInformationSearchGoogleLocationsResponseEncoded {
  readonly googleLocations?: ReadonlyArray<BusinessInformationGoogleLocationEncoded>;
}
export const BusinessInformationSearchGoogleLocationsResponse: Schema.Schema<BusinessInformationSearchGoogleLocationsResponse, BusinessInformationSearchGoogleLocationsResponseEncoded, never> = Schema.Struct({
  googleLocations: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationGoogleLocation))),
});

/** Service area businesses provide their service at the customer's location (for example, a locksmith or plumber). */
export interface BusinessInformationServiceAreaBusiness {
  readonly businessType?: "BUSINESS_TYPE_UNSPECIFIED" | "CUSTOMER_LOCATION_ONLY" | "CUSTOMER_AND_BUSINESS_LOCATION";
  readonly places?: BusinessInformationPlaces;
  readonly regionCode?: string;
}
export interface BusinessInformationServiceAreaBusinessEncoded {
  readonly businessType?: "BUSINESS_TYPE_UNSPECIFIED" | "CUSTOMER_LOCATION_ONLY" | "CUSTOMER_AND_BUSINESS_LOCATION";
  readonly places?: BusinessInformationPlacesEncoded;
  readonly regionCode?: string;
}
export const BusinessInformationServiceAreaBusiness: Schema.Schema<BusinessInformationServiceAreaBusiness, BusinessInformationServiceAreaBusinessEncoded, never> = Schema.Struct({
  businessType: Schema.optional(Schema.Union(Schema.Literal("BUSINESS_TYPE_UNSPECIFIED"), Schema.Literal("CUSTOMER_LOCATION_ONLY"), Schema.Literal("CUSTOMER_AND_BUSINESS_LOCATION"))),
  places: Schema.optional(Schema.suspend(() => BusinessInformationPlaces)),
  regionCode: Schema.optional(Schema.String),
});

/** A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service. */
export interface BusinessInformationServiceItem {
  readonly freeFormServiceItem?: BusinessInformationFreeFormServiceItem;
  readonly price?: BusinessInformationMoney;
  readonly structuredServiceItem?: BusinessInformationStructuredServiceItem;
}
export interface BusinessInformationServiceItemEncoded {
  readonly freeFormServiceItem?: BusinessInformationFreeFormServiceItemEncoded;
  readonly price?: BusinessInformationMoneyEncoded;
  readonly structuredServiceItem?: BusinessInformationStructuredServiceItemEncoded;
}
export const BusinessInformationServiceItem: Schema.Schema<BusinessInformationServiceItem, BusinessInformationServiceItemEncoded, never> = Schema.Struct({
  freeFormServiceItem: Schema.optional(Schema.suspend(() => BusinessInformationFreeFormServiceItem)),
  price: Schema.optional(Schema.suspend(() => BusinessInformationMoney)),
  structuredServiceItem: Schema.optional(Schema.suspend(() => BusinessInformationStructuredServiceItem)),
});

/** A message describing a service type that the business offers. */
export interface BusinessInformationServiceType {
  readonly displayName?: string;
  readonly serviceTypeId?: string;
}
export interface BusinessInformationServiceTypeEncoded {
  readonly displayName?: string;
  readonly serviceTypeId?: string;
}
export const BusinessInformationServiceType: Schema.Schema<BusinessInformationServiceType, BusinessInformationServiceTypeEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  serviceTypeId: Schema.optional(Schema.String),
});

/** Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00 */
export interface BusinessInformationSpecialHourPeriod {
  readonly closed?: boolean;
  readonly closeTime?: BusinessInformationTimeOfDay;
  readonly endDate?: BusinessInformationDate;
  readonly openTime?: BusinessInformationTimeOfDay;
  readonly startDate?: BusinessInformationDate;
}
export interface BusinessInformationSpecialHourPeriodEncoded {
  readonly closed?: boolean;
  readonly closeTime?: BusinessInformationTimeOfDayEncoded;
  readonly endDate?: BusinessInformationDateEncoded;
  readonly openTime?: BusinessInformationTimeOfDayEncoded;
  readonly startDate?: BusinessInformationDateEncoded;
}
export const BusinessInformationSpecialHourPeriod: Schema.Schema<BusinessInformationSpecialHourPeriod, BusinessInformationSpecialHourPeriodEncoded, never> = Schema.Struct({
  closed: Schema.optional(Schema.Boolean),
  closeTime: Schema.optional(Schema.suspend(() => BusinessInformationTimeOfDay)),
  endDate: Schema.optional(Schema.suspend(() => BusinessInformationDate)),
  openTime: Schema.optional(Schema.suspend(() => BusinessInformationTimeOfDay)),
  startDate: Schema.optional(Schema.suspend(() => BusinessInformationDate)),
});

/** Represents a set of time periods when a location's operational hours differ from its normal business hours. */
export interface BusinessInformationSpecialHours {
  readonly specialHourPeriods?: ReadonlyArray<BusinessInformationSpecialHourPeriod>;
}
export interface BusinessInformationSpecialHoursEncoded {
  readonly specialHourPeriods?: ReadonlyArray<BusinessInformationSpecialHourPeriodEncoded>;
}
export const BusinessInformationSpecialHours: Schema.Schema<BusinessInformationSpecialHours, BusinessInformationSpecialHoursEncoded, never> = Schema.Struct({
  specialHourPeriods: Schema.optional(Schema.Array(Schema.suspend(() => BusinessInformationSpecialHourPeriod))),
});

/** Represents a structured service offered by the merchant. For eg: toilet_installation. */
export interface BusinessInformationStructuredServiceItem {
  readonly description?: string;
  readonly serviceTypeId?: string;
}
export interface BusinessInformationStructuredServiceItemEncoded {
  readonly description?: string;
  readonly serviceTypeId?: string;
}
export const BusinessInformationStructuredServiceItem: Schema.Schema<BusinessInformationStructuredServiceItem, BusinessInformationStructuredServiceItemEncoded, never> = Schema.Struct({
  description: Schema.optional(Schema.String),
  serviceTypeId: Schema.optional(Schema.String),
});

/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
export interface BusinessInformationTimeOfDay {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
}
export interface BusinessInformationTimeOfDayEncoded {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
}
export const BusinessInformationTimeOfDay: Schema.Schema<BusinessInformationTimeOfDay, BusinessInformationTimeOfDayEncoded, never> = Schema.Struct({
  hours: Schema.optional(Schema.Int),
  minutes: Schema.optional(Schema.Int),
  nanos: Schema.optional(Schema.Int),
  seconds: Schema.optional(Schema.Int),
});

/** Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day. */
export interface BusinessInformationTimePeriod {
  readonly closeDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly closeTime?: BusinessInformationTimeOfDay;
  readonly openDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly openTime?: BusinessInformationTimeOfDay;
}
export interface BusinessInformationTimePeriodEncoded {
  readonly closeDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly closeTime?: BusinessInformationTimeOfDayEncoded;
  readonly openDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly openTime?: BusinessInformationTimeOfDayEncoded;
}
export const BusinessInformationTimePeriod: Schema.Schema<BusinessInformationTimePeriod, BusinessInformationTimePeriodEncoded, never> = Schema.Struct({
  closeDay: Schema.optional(Schema.Union(Schema.Literal("DAY_OF_WEEK_UNSPECIFIED"), Schema.Literal("MONDAY"), Schema.Literal("TUESDAY"), Schema.Literal("WEDNESDAY"), Schema.Literal("THURSDAY"), Schema.Literal("FRIDAY"), Schema.Literal("SATURDAY"), Schema.Literal("SUNDAY"))),
  closeTime: Schema.optional(Schema.suspend(() => BusinessInformationTimeOfDay)),
  openDay: Schema.optional(Schema.Union(Schema.Literal("DAY_OF_WEEK_UNSPECIFIED"), Schema.Literal("MONDAY"), Schema.Literal("TUESDAY"), Schema.Literal("WEDNESDAY"), Schema.Literal("THURSDAY"), Schema.Literal("FRIDAY"), Schema.Literal("SATURDAY"), Schema.Literal("SUNDAY"))),
  openTime: Schema.optional(Schema.suspend(() => BusinessInformationTimeOfDay)),
});

/** Values for an attribute with a `value_type` of URL. */
export interface BusinessInformationUriAttributeValue {
  readonly uri?: string;
}
export interface BusinessInformationUriAttributeValueEncoded {
  readonly uri?: string;
}
export const BusinessInformationUriAttributeValue: Schema.Schema<BusinessInformationUriAttributeValue, BusinessInformationUriAttributeValueEncoded, never> = Schema.Struct({
  uri: Schema.optional(Schema.String),
});

/** Request message for AccessControl.AcceptInvitation. */
export interface LegacyV4AcceptInvitationRequest {

}
export interface LegacyV4AcceptInvitationRequestEncoded {

}
export const LegacyV4AcceptInvitationRequest: Schema.Schema<LegacyV4AcceptInvitationRequest, LegacyV4AcceptInvitationRequestEncoded, never> = Schema.Struct({

});

/** Physical adaptations made to the property in consideration of varying levels of human physical ability. */
export interface LegacyV4Accessibility {
  readonly mobilityAccessible?: boolean;
  readonly mobilityAccessibleElevator?: boolean;
  readonly mobilityAccessibleElevatorException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleParking?: boolean;
  readonly mobilityAccessibleParkingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessiblePool?: boolean;
  readonly mobilityAccessiblePoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LegacyV4AccessibilityEncoded {
  readonly mobilityAccessible?: boolean;
  readonly mobilityAccessibleElevator?: boolean;
  readonly mobilityAccessibleElevatorException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleParking?: boolean;
  readonly mobilityAccessibleParkingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessiblePool?: boolean;
  readonly mobilityAccessiblePoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LegacyV4Accessibility: Schema.Schema<LegacyV4Accessibility, LegacyV4AccessibilityEncoded, never> = Schema.Struct({
  mobilityAccessible: Schema.optional(Schema.Boolean),
  mobilityAccessibleElevator: Schema.optional(Schema.Boolean),
  mobilityAccessibleElevatorException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobilityAccessibleException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobilityAccessibleParking: Schema.optional(Schema.Boolean),
  mobilityAccessibleParkingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobilityAccessiblePool: Schema.optional(Schema.Boolean),
  mobilityAccessiblePoolException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** An account is a container for your business's locations. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325). */
export interface LegacyV4Account {
  readonly accountName?: string;
  readonly accountNumber?: string;
  readonly name?: string;
  readonly organizationInfo?: LegacyV4OrganizationInfo;
  readonly permissionLevel?: "PERMISSION_LEVEL_UNSPECIFIED" | "OWNER_LEVEL" | "MEMBER_LEVEL";
  readonly role?: "ACCOUNT_ROLE_UNSPECIFIED" | "OWNER" | "CO_OWNER" | "MANAGER" | "COMMUNITY_MANAGER";
  readonly state?: LegacyV4AccountState;
  readonly type?: "ACCOUNT_TYPE_UNSPECIFIED" | "PERSONAL" | "LOCATION_GROUP" | "USER_GROUP" | "ORGANIZATION";
}
export interface LegacyV4AccountEncoded {
  readonly accountName?: string;
  readonly accountNumber?: string;
  readonly name?: string;
  readonly organizationInfo?: LegacyV4OrganizationInfoEncoded;
  readonly permissionLevel?: "PERMISSION_LEVEL_UNSPECIFIED" | "OWNER_LEVEL" | "MEMBER_LEVEL";
  readonly role?: "ACCOUNT_ROLE_UNSPECIFIED" | "OWNER" | "CO_OWNER" | "MANAGER" | "COMMUNITY_MANAGER";
  readonly state?: LegacyV4AccountStateEncoded;
  readonly type?: "ACCOUNT_TYPE_UNSPECIFIED" | "PERSONAL" | "LOCATION_GROUP" | "USER_GROUP" | "ORGANIZATION";
}
export const LegacyV4Account: Schema.Schema<LegacyV4Account, LegacyV4AccountEncoded, never> = Schema.Struct({
  accountName: Schema.optional(Schema.String),
  accountNumber: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  organizationInfo: Schema.optional(Schema.suspend(() => LegacyV4OrganizationInfo)),
  permissionLevel: Schema.optional(Schema.Union(Schema.Literal("PERMISSION_LEVEL_UNSPECIFIED"), Schema.Literal("OWNER_LEVEL"), Schema.Literal("MEMBER_LEVEL"))),
  role: Schema.optional(Schema.Union(Schema.Literal("ACCOUNT_ROLE_UNSPECIFIED"), Schema.Literal("OWNER"), Schema.Literal("CO_OWNER"), Schema.Literal("MANAGER"), Schema.Literal("COMMUNITY_MANAGER"))),
  state: Schema.optional(Schema.suspend(() => LegacyV4AccountState)),
  type: Schema.optional(Schema.Union(Schema.Literal("ACCOUNT_TYPE_UNSPECIFIED"), Schema.Literal("PERSONAL"), Schema.Literal("LOCATION_GROUP"), Schema.Literal("USER_GROUP"), Schema.Literal("ORGANIZATION"))),
});

/** Indicates status of the account, such as whether the account has been verified by Google. */
export interface LegacyV4AccountState {
  readonly status?: "ACCOUNT_STATUS_UNSPECIFIED" | "VERIFIED" | "UNVERIFIED" | "VERIFICATION_REQUESTED";
}
export interface LegacyV4AccountStateEncoded {
  readonly status?: "ACCOUNT_STATUS_UNSPECIFIED" | "VERIFIED" | "UNVERIFIED" | "VERIFICATION_REQUESTED";
}
export const LegacyV4AccountState: Schema.Schema<LegacyV4AccountState, LegacyV4AccountStateEncoded, never> = Schema.Struct({
  status: Schema.optional(Schema.Union(Schema.Literal("ACCOUNT_STATUS_UNSPECIFIED"), Schema.Literal("VERIFIED"), Schema.Literal("UNVERIFIED"), Schema.Literal("VERIFICATION_REQUESTED"))),
});

/** Amenities and features related to leisure and play. */
export interface LegacyV4Activities {
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
}
export interface LegacyV4ActivitiesEncoded {
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
}
export const LegacyV4Activities: Schema.Schema<LegacyV4Activities, LegacyV4ActivitiesEncoded, never> = Schema.Struct({
  beachAccess: Schema.optional(Schema.Boolean),
  beachAccessException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  beachFront: Schema.optional(Schema.Boolean),
  beachFrontException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  bicycleRental: Schema.optional(Schema.Boolean),
  bicycleRentalException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  boutiqueStores: Schema.optional(Schema.Boolean),
  boutiqueStoresException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  casino: Schema.optional(Schema.Boolean),
  casinoException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeBicycleRental: Schema.optional(Schema.Boolean),
  freeBicycleRentalException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeWatercraftRental: Schema.optional(Schema.Boolean),
  freeWatercraftRentalException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  gameRoom: Schema.optional(Schema.Boolean),
  gameRoomException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  golf: Schema.optional(Schema.Boolean),
  golfException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  horsebackRiding: Schema.optional(Schema.Boolean),
  horsebackRidingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  nightclub: Schema.optional(Schema.Boolean),
  nightclubException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  privateBeach: Schema.optional(Schema.Boolean),
  privateBeachException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  scuba: Schema.optional(Schema.Boolean),
  scubaException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  snorkeling: Schema.optional(Schema.Boolean),
  snorkelingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  tennis: Schema.optional(Schema.Boolean),
  tennisException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  watercraftRental: Schema.optional(Schema.Boolean),
  watercraftRentalException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  waterSkiing: Schema.optional(Schema.Boolean),
  waterSkiingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Input for ADDRESS verification. */
export interface LegacyV4AddressInput {
  readonly mailerContactName?: string;
}
export interface LegacyV4AddressInputEncoded {
  readonly mailerContactName?: string;
}
export const LegacyV4AddressInput: Schema.Schema<LegacyV4AddressInput, LegacyV4AddressInputEncoded, never> = Schema.Struct({
  mailerContactName: Schema.optional(Schema.String),
});

/** Display data for verifications through postcard. */
export interface LegacyV4AddressVerificationData {
  readonly address?: LegacyV4PostalAddress;
  readonly businessName?: string;
}
export interface LegacyV4AddressVerificationDataEncoded {
  readonly address?: LegacyV4PostalAddressEncoded;
  readonly businessName?: string;
}
export const LegacyV4AddressVerificationData: Schema.Schema<LegacyV4AddressVerificationData, LegacyV4AddressVerificationDataEncoded, never> = Schema.Struct({
  address: Schema.optional(Schema.suspend(() => LegacyV4PostalAddress)),
  businessName: Schema.optional(Schema.String),
});

/** An administrator of an Account or a Location. */
export interface LegacyV4Admin {
  readonly adminName?: string;
  readonly name?: string;
  readonly pendingInvitation?: boolean;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "OWNER" | "CO_OWNER" | "MANAGER" | "COMMUNITY_MANAGER";
}
export interface LegacyV4AdminEncoded {
  readonly adminName?: string;
  readonly name?: string;
  readonly pendingInvitation?: boolean;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "OWNER" | "CO_OWNER" | "MANAGER" | "COMMUNITY_MANAGER";
}
export const LegacyV4Admin: Schema.Schema<LegacyV4Admin, LegacyV4AdminEncoded, never> = Schema.Struct({
  adminName: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  pendingInvitation: Schema.optional(Schema.Boolean),
  role: Schema.optional(Schema.Union(Schema.Literal("ADMIN_ROLE_UNSPECIFIED"), Schema.Literal("OWNER"), Schema.Literal("CO_OWNER"), Schema.Literal("MANAGER"), Schema.Literal("COMMUNITY_MANAGER"))),
});

/** Additional information that is surfaced in AdWords. */
export interface LegacyV4AdWordsLocationExtensions {
  readonly adPhone?: string;
}
export interface LegacyV4AdWordsLocationExtensionsEncoded {
  readonly adPhone?: string;
}
export const LegacyV4AdWordsLocationExtensions: Schema.Schema<LegacyV4AdWordsLocationExtensions, LegacyV4AdWordsLocationExtensionsEncoded, never> = Schema.Struct({
  adPhone: Schema.optional(Schema.String),
});

/** Represents an answer to a question */
export interface LegacyV4Answer {
  readonly author?: LegacyV4Author;
  readonly createTime?: string;
  readonly name?: string;
  readonly text?: string;
  readonly updateTime?: string;
  readonly upvoteCount?: number;
}
export interface LegacyV4AnswerEncoded {
  readonly author?: LegacyV4AuthorEncoded;
  readonly createTime?: string;
  readonly name?: string;
  readonly text?: string;
  readonly updateTime?: string;
  readonly upvoteCount?: number;
}
export const LegacyV4Answer: Schema.Schema<LegacyV4Answer, LegacyV4AnswerEncoded, never> = Schema.Struct({
  author: Schema.optional(Schema.suspend(() => LegacyV4Author)),
  createTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  text: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  upvoteCount: Schema.optional(Schema.Int),
});

/** Request message for Locations.AssociateLocationRequest. */
export interface LegacyV4AssociateLocationRequest {
  readonly placeId?: string;
}
export interface LegacyV4AssociateLocationRequestEncoded {
  readonly placeId?: string;
}
export const LegacyV4AssociateLocationRequest: Schema.Schema<LegacyV4AssociateLocationRequest, LegacyV4AssociateLocationRequestEncoded, never> = Schema.Struct({
  placeId: Schema.optional(Schema.String),
});

/** A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes. */
export interface LegacyV4Attribute {
  readonly attributeId?: string;
  readonly repeatedEnumValue?: LegacyV4RepeatedEnumAttributeValue;
  readonly urlValues?: ReadonlyArray<LegacyV4UrlAttributeValue>;
  readonly values?: ReadonlyArray<unknown>;
  readonly valueType?: "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED" | "BOOL" | "ENUM" | "URL" | "REPEATED_ENUM";
}
export interface LegacyV4AttributeEncoded {
  readonly attributeId?: string;
  readonly repeatedEnumValue?: LegacyV4RepeatedEnumAttributeValueEncoded;
  readonly urlValues?: ReadonlyArray<LegacyV4UrlAttributeValueEncoded>;
  readonly values?: ReadonlyArray<unknown>;
  readonly valueType?: "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED" | "BOOL" | "ENUM" | "URL" | "REPEATED_ENUM";
}
export const LegacyV4Attribute: Schema.Schema<LegacyV4Attribute, LegacyV4AttributeEncoded, never> = Schema.Struct({
  attributeId: Schema.optional(Schema.String),
  repeatedEnumValue: Schema.optional(Schema.suspend(() => LegacyV4RepeatedEnumAttributeValue)),
  urlValues: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4UrlAttributeValue))),
  values: Schema.optional(Schema.Array(Schema.Unknown)),
  valueType: Schema.optional(Schema.Union(Schema.Literal("ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"), Schema.Literal("BOOL"), Schema.Literal("ENUM"), Schema.Literal("URL"), Schema.Literal("REPEATED_ENUM"))),
});

/** Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together. */
export interface LegacyV4AttributeMetadata {
  readonly attributeId?: string;
  readonly displayName?: string;
  readonly groupDisplayName?: string;
  readonly isDeprecated?: boolean;
  readonly isRepeatable?: boolean;
  readonly valueMetadata?: ReadonlyArray<LegacyV4AttributeValueMetadata>;
  readonly valueType?: "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED" | "BOOL" | "ENUM" | "URL" | "REPEATED_ENUM";
}
export interface LegacyV4AttributeMetadataEncoded {
  readonly attributeId?: string;
  readonly displayName?: string;
  readonly groupDisplayName?: string;
  readonly isDeprecated?: boolean;
  readonly isRepeatable?: boolean;
  readonly valueMetadata?: ReadonlyArray<LegacyV4AttributeValueMetadataEncoded>;
  readonly valueType?: "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED" | "BOOL" | "ENUM" | "URL" | "REPEATED_ENUM";
}
export const LegacyV4AttributeMetadata: Schema.Schema<LegacyV4AttributeMetadata, LegacyV4AttributeMetadataEncoded, never> = Schema.Struct({
  attributeId: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  groupDisplayName: Schema.optional(Schema.String),
  isDeprecated: Schema.optional(Schema.Boolean),
  isRepeatable: Schema.optional(Schema.Boolean),
  valueMetadata: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4AttributeValueMetadata))),
  valueType: Schema.optional(Schema.Union(Schema.Literal("ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"), Schema.Literal("BOOL"), Schema.Literal("ENUM"), Schema.Literal("URL"), Schema.Literal("REPEATED_ENUM"))),
});

/** Metadata for supported attribute values. */
export interface LegacyV4AttributeValueMetadata {
  readonly displayName?: string;
  readonly value?: unknown;
}
export interface LegacyV4AttributeValueMetadataEncoded {
  readonly displayName?: string;
  readonly value?: unknown;
}
export const LegacyV4AttributeValueMetadata: Schema.Schema<LegacyV4AttributeValueMetadata, LegacyV4AttributeValueMetadataEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Unknown),
});

/** Attribution information for customer media items, such as the contributor's name and profile picture. */
export interface LegacyV4Attribution {
  readonly profileName?: string;
  readonly profilePhotoUrl?: string;
  readonly profileUrl?: string;
  readonly takedownUrl?: string;
}
export interface LegacyV4AttributionEncoded {
  readonly profileName?: string;
  readonly profilePhotoUrl?: string;
  readonly profileUrl?: string;
  readonly takedownUrl?: string;
}
export const LegacyV4Attribution: Schema.Schema<LegacyV4Attribution, LegacyV4AttributionEncoded, never> = Schema.Struct({
  profileName: Schema.optional(Schema.String),
  profilePhotoUrl: Schema.optional(Schema.String),
  profileUrl: Schema.optional(Schema.String),
  takedownUrl: Schema.optional(Schema.String),
});

/** Represents the author of a question or answer */
export interface LegacyV4Author {
  readonly displayName?: string;
  readonly profilePhotoUrl?: string;
  readonly type?: "AUTHOR_TYPE_UNSPECIFIED" | "REGULAR_USER" | "LOCAL_GUIDE" | "MERCHANT";
}
export interface LegacyV4AuthorEncoded {
  readonly displayName?: string;
  readonly profilePhotoUrl?: string;
  readonly type?: "AUTHOR_TYPE_UNSPECIFIED" | "REGULAR_USER" | "LOCAL_GUIDE" | "MERCHANT";
}
export const LegacyV4Author: Schema.Schema<LegacyV4Author, LegacyV4AuthorEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  profilePhotoUrl: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Union(Schema.Literal("AUTHOR_TYPE_UNSPECIFIED"), Schema.Literal("REGULAR_USER"), Schema.Literal("LOCAL_GUIDE"), Schema.Literal("MERCHANT"))),
});

/** A request for basic metric insights. */
export interface LegacyV4BasicMetricsRequest {
  readonly metricRequests?: ReadonlyArray<LegacyV4MetricRequest>;
  readonly timeRange?: LegacyV4TimeRange;
}
export interface LegacyV4BasicMetricsRequestEncoded {
  readonly metricRequests?: ReadonlyArray<LegacyV4MetricRequestEncoded>;
  readonly timeRange?: LegacyV4TimeRangeEncoded;
}
export const LegacyV4BasicMetricsRequest: Schema.Schema<LegacyV4BasicMetricsRequest, LegacyV4BasicMetricsRequestEncoded, never> = Schema.Struct({
  metricRequests: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4MetricRequest))),
  timeRange: Schema.optional(Schema.suspend(() => LegacyV4TimeRange)),
});

/** Response message for BusinessCategories.BatchGetBusinessCategories. */
export interface LegacyV4BatchGetBusinessCategoriesResponse {
  readonly categories?: ReadonlyArray<LegacyV4Category>;
}
export interface LegacyV4BatchGetBusinessCategoriesResponseEncoded {
  readonly categories?: ReadonlyArray<LegacyV4CategoryEncoded>;
}
export const LegacyV4BatchGetBusinessCategoriesResponse: Schema.Schema<LegacyV4BatchGetBusinessCategoriesResponse, LegacyV4BatchGetBusinessCategoriesResponseEncoded, never> = Schema.Struct({
  categories: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Category))),
});

/** Request message for Locations.BatchGetLocations. */
export interface LegacyV4BatchGetLocationsRequest {
  readonly locationNames?: ReadonlyArray<string>;
}
export interface LegacyV4BatchGetLocationsRequestEncoded {
  readonly locationNames?: ReadonlyArray<string>;
}
export const LegacyV4BatchGetLocationsRequest: Schema.Schema<LegacyV4BatchGetLocationsRequest, LegacyV4BatchGetLocationsRequestEncoded, never> = Schema.Struct({
  locationNames: Schema.optional(Schema.Array(Schema.String)),
});

/** Response message for Locations.BatchGetLocations. */
export interface LegacyV4BatchGetLocationsResponse {
  readonly locations?: ReadonlyArray<LegacyV4Location>;
}
export interface LegacyV4BatchGetLocationsResponseEncoded {
  readonly locations?: ReadonlyArray<LegacyV4LocationEncoded>;
}
export const LegacyV4BatchGetLocationsResponse: Schema.Schema<LegacyV4BatchGetLocationsResponse, LegacyV4BatchGetLocationsResponseEncoded, never> = Schema.Struct({
  locations: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Location))),
});

/** Request message for Reviews.BatchGetReviews. */
export interface LegacyV4BatchGetReviewsRequest {
  readonly ignoreRatingOnlyReviews?: boolean;
  readonly locationNames?: ReadonlyArray<string>;
  readonly orderBy?: string;
  readonly pageSize?: number;
  readonly pageToken?: string;
}
export interface LegacyV4BatchGetReviewsRequestEncoded {
  readonly ignoreRatingOnlyReviews?: boolean;
  readonly locationNames?: ReadonlyArray<string>;
  readonly orderBy?: string;
  readonly pageSize?: number;
  readonly pageToken?: string;
}
export const LegacyV4BatchGetReviewsRequest: Schema.Schema<LegacyV4BatchGetReviewsRequest, LegacyV4BatchGetReviewsRequestEncoded, never> = Schema.Struct({
  ignoreRatingOnlyReviews: Schema.optional(Schema.Boolean),
  locationNames: Schema.optional(Schema.Array(Schema.String)),
  orderBy: Schema.optional(Schema.String),
  pageSize: Schema.optional(Schema.Int),
  pageToken: Schema.optional(Schema.String),
});

/** Response message for Reviews.BatchGetReviews. */
export interface LegacyV4BatchGetReviewsResponse {
  readonly locationReviews?: ReadonlyArray<LegacyV4LocationReview>;
  readonly nextPageToken?: string;
}
export interface LegacyV4BatchGetReviewsResponseEncoded {
  readonly locationReviews?: ReadonlyArray<LegacyV4LocationReviewEncoded>;
  readonly nextPageToken?: string;
}
export const LegacyV4BatchGetReviewsResponse: Schema.Schema<LegacyV4BatchGetReviewsResponse, LegacyV4BatchGetReviewsResponseEncoded, never> = Schema.Struct({
  locationReviews: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4LocationReview))),
  nextPageToken: Schema.optional(Schema.String),
});

/** Features of the property of specific interest to the business traveler. */
export interface LegacyV4Business {
  readonly businessCenter?: boolean;
  readonly businessCenterException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRooms?: boolean;
  readonly meetingRoomsCount?: number;
  readonly meetingRoomsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRoomsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LegacyV4BusinessEncoded {
  readonly businessCenter?: boolean;
  readonly businessCenterException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRooms?: boolean;
  readonly meetingRoomsCount?: number;
  readonly meetingRoomsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRoomsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LegacyV4Business: Schema.Schema<LegacyV4Business, LegacyV4BusinessEncoded, never> = Schema.Struct({
  businessCenter: Schema.optional(Schema.Boolean),
  businessCenterException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  meetingRooms: Schema.optional(Schema.Boolean),
  meetingRoomsCount: Schema.optional(Schema.Int),
  meetingRoomsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  meetingRoomsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances. */
export interface LegacyV4BusinessHours {
  readonly periods?: ReadonlyArray<LegacyV4TimePeriod>;
}
export interface LegacyV4BusinessHoursEncoded {
  readonly periods?: ReadonlyArray<LegacyV4TimePeriodEncoded>;
}
export const LegacyV4BusinessHours: Schema.Schema<LegacyV4BusinessHours, LegacyV4BusinessHoursEncoded, never> = Schema.Struct({
  periods: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4TimePeriod))),
});

/** An action that is performed when the user clicks through the post */
export interface LegacyV4CallToAction {
  readonly actionType?: "ACTION_TYPE_UNSPECIFIED" | "BOOK" | "ORDER" | "SHOP" | "LEARN_MORE" | "SIGN_UP" | "GET_OFFER" | "CALL";
  readonly url?: string;
}
export interface LegacyV4CallToActionEncoded {
  readonly actionType?: "ACTION_TYPE_UNSPECIFIED" | "BOOK" | "ORDER" | "SHOP" | "LEARN_MORE" | "SIGN_UP" | "GET_OFFER" | "CALL";
  readonly url?: string;
}
export const LegacyV4CallToAction: Schema.Schema<LegacyV4CallToAction, LegacyV4CallToActionEncoded, never> = Schema.Struct({
  actionType: Schema.optional(Schema.Union(Schema.Literal("ACTION_TYPE_UNSPECIFIED"), Schema.Literal("BOOK"), Schema.Literal("ORDER"), Schema.Literal("SHOP"), Schema.Literal("LEARN_MORE"), Schema.Literal("SIGN_UP"), Schema.Literal("GET_OFFER"), Schema.Literal("CALL"))),
  url: Schema.optional(Schema.String),
});

/** This message denotes calories information with an upper bound and lower bound range. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
export interface LegacyV4CaloriesFact {
  readonly lowerAmount?: number;
  readonly unit?: "ENERGY_UNIT_UNSPECIFIED" | "CALORIE" | "JOULE";
  readonly upperAmount?: number;
}
export interface LegacyV4CaloriesFactEncoded {
  readonly lowerAmount?: number;
  readonly unit?: "ENERGY_UNIT_UNSPECIFIED" | "CALORIE" | "JOULE";
  readonly upperAmount?: number;
}
export const LegacyV4CaloriesFact: Schema.Schema<LegacyV4CaloriesFact, LegacyV4CaloriesFactEncoded, never> = Schema.Struct({
  lowerAmount: Schema.optional(Schema.Int),
  unit: Schema.optional(Schema.Union(Schema.Literal("ENERGY_UNIT_UNSPECIFIED"), Schema.Literal("CALORIE"), Schema.Literal("JOULE"))),
  upperAmount: Schema.optional(Schema.Int),
});

/** A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list). */
export interface LegacyV4Category {
  readonly categoryId?: string;
  readonly displayName?: string;
  readonly moreHoursTypes?: ReadonlyArray<LegacyV4MoreHoursType>;
  readonly serviceTypes?: ReadonlyArray<LegacyV4ServiceType>;
}
export interface LegacyV4CategoryEncoded {
  readonly categoryId?: string;
  readonly displayName?: string;
  readonly moreHoursTypes?: ReadonlyArray<LegacyV4MoreHoursTypeEncoded>;
  readonly serviceTypes?: ReadonlyArray<LegacyV4ServiceTypeEncoded>;
}
export const LegacyV4Category: Schema.Schema<LegacyV4Category, LegacyV4CategoryEncoded, never> = Schema.Struct({
  categoryId: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  moreHoursTypes: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4MoreHoursType))),
  serviceTypes: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4ServiceType))),
});

/** A chain is a brand that your business's locations can be affiliated with. */
export interface LegacyV4Chain {
  readonly chainNames?: ReadonlyArray<LegacyV4ChainName>;
  readonly locationCount?: number;
  readonly name?: string;
  readonly websites?: ReadonlyArray<LegacyV4ChainUrl>;
}
export interface LegacyV4ChainEncoded {
  readonly chainNames?: ReadonlyArray<LegacyV4ChainNameEncoded>;
  readonly locationCount?: number;
  readonly name?: string;
  readonly websites?: ReadonlyArray<LegacyV4ChainUrlEncoded>;
}
export const LegacyV4Chain: Schema.Schema<LegacyV4Chain, LegacyV4ChainEncoded, never> = Schema.Struct({
  chainNames: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4ChainName))),
  locationCount: Schema.optional(Schema.Int),
  name: Schema.optional(Schema.String),
  websites: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4ChainUrl))),
});

/** Name to be used when displaying the chain. */
export interface LegacyV4ChainName {
  readonly displayName?: string;
  readonly languageCode?: string;
}
export interface LegacyV4ChainNameEncoded {
  readonly displayName?: string;
  readonly languageCode?: string;
}
export const LegacyV4ChainName: Schema.Schema<LegacyV4ChainName, LegacyV4ChainNameEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  languageCode: Schema.optional(Schema.String),
});

/** Url to be used when displaying the chain. */
export interface LegacyV4ChainUrl {
  readonly url?: string;
}
export interface LegacyV4ChainUrlEncoded {
  readonly url?: string;
}
export const LegacyV4ChainUrl: Schema.Schema<LegacyV4ChainUrl, LegacyV4ChainUrlEncoded, never> = Schema.Struct({
  url: Schema.optional(Schema.String),
});

/** Request message for Locations.ClearLocationAssociationRequest. */
export interface LegacyV4ClearLocationAssociationRequest {

}
export interface LegacyV4ClearLocationAssociationRequestEncoded {

}
export const LegacyV4ClearLocationAssociationRequest: Schema.Schema<LegacyV4ClearLocationAssociationRequest, LegacyV4ClearLocationAssociationRequestEncoded, never> = Schema.Struct({

});

/** Request message for Verifications.CompleteVerificationAction. */
export interface LegacyV4CompleteVerificationRequest {
  readonly pin?: string;
}
export interface LegacyV4CompleteVerificationRequestEncoded {
  readonly pin?: string;
}
export const LegacyV4CompleteVerificationRequest: Schema.Schema<LegacyV4CompleteVerificationRequest, LegacyV4CompleteVerificationRequestEncoded, never> = Schema.Struct({
  pin: Schema.optional(Schema.String),
});

/** Response message for Verifications.CompleteVerificationAction. */
export interface LegacyV4CompleteVerificationResponse {
  readonly verification?: LegacyV4Verification;
}
export interface LegacyV4CompleteVerificationResponseEncoded {
  readonly verification?: LegacyV4VerificationEncoded;
}
export const LegacyV4CompleteVerificationResponse: Schema.Schema<LegacyV4CompleteVerificationResponse, LegacyV4CompleteVerificationResponseEncoded, never> = Schema.Struct({
  verification: Schema.optional(Schema.suspend(() => LegacyV4Verification)),
});

/** The ways in which the property provides guests with the ability to access the internet. */
export interface LegacyV4Connectivity {
  readonly freeWifi?: boolean;
  readonly freeWifiException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly publicAreaWifiAvailable?: boolean;
  readonly publicAreaWifiAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly publicInternetTerminal?: boolean;
  readonly publicInternetTerminalException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wifiAvailable?: boolean;
  readonly wifiAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LegacyV4ConnectivityEncoded {
  readonly freeWifi?: boolean;
  readonly freeWifiException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly publicAreaWifiAvailable?: boolean;
  readonly publicAreaWifiAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly publicInternetTerminal?: boolean;
  readonly publicInternetTerminalException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wifiAvailable?: boolean;
  readonly wifiAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LegacyV4Connectivity: Schema.Schema<LegacyV4Connectivity, LegacyV4ConnectivityEncoded, never> = Schema.Struct({
  freeWifi: Schema.optional(Schema.Boolean),
  freeWifiException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  publicAreaWifiAvailable: Schema.optional(Schema.Boolean),
  publicAreaWifiAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  publicInternetTerminal: Schema.optional(Schema.Boolean),
  publicInternetTerminalException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  wifiAvailable: Schema.optional(Schema.Boolean),
  wifiAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`. */
export interface LegacyV4Date {
  readonly day?: number;
  readonly month?: number;
  readonly year?: number;
}
export interface LegacyV4DateEncoded {
  readonly day?: number;
  readonly month?: number;
  readonly year?: number;
}
export const LegacyV4Date: Schema.Schema<LegacyV4Date, LegacyV4DateEncoded, never> = Schema.Struct({
  day: Schema.optional(Schema.Int),
  month: Schema.optional(Schema.Int),
  year: Schema.optional(Schema.Int),
});

/** Request message for AccessControl.DeclineInvitation. */
export interface LegacyV4DeclineInvitationRequest {

}
export interface LegacyV4DeclineInvitationRequestEncoded {

}
export const LegacyV4DeclineInvitationRequest: Schema.Schema<LegacyV4DeclineInvitationRequest, LegacyV4DeclineInvitationRequestEncoded, never> = Schema.Struct({

});

/** A value for a single metric with a given time dimension. */
export interface LegacyV4DimensionalMetricValue {
  readonly metricOption?: "METRIC_OPTION_UNSPECIFIED" | "AGGREGATED_TOTAL" | "AGGREGATED_DAILY" | "BREAKDOWN_DAY_OF_WEEK" | "BREAKDOWN_HOUR_OF_DAY";
  readonly timeDimension?: LegacyV4TimeDimension;
  readonly value?: string;
}
export interface LegacyV4DimensionalMetricValueEncoded {
  readonly metricOption?: "METRIC_OPTION_UNSPECIFIED" | "AGGREGATED_TOTAL" | "AGGREGATED_DAILY" | "BREAKDOWN_DAY_OF_WEEK" | "BREAKDOWN_HOUR_OF_DAY";
  readonly timeDimension?: LegacyV4TimeDimensionEncoded;
  readonly value?: string;
}
export const LegacyV4DimensionalMetricValue: Schema.Schema<LegacyV4DimensionalMetricValue, LegacyV4DimensionalMetricValueEncoded, never> = Schema.Struct({
  metricOption: Schema.optional(Schema.Union(Schema.Literal("METRIC_OPTION_UNSPECIFIED"), Schema.Literal("AGGREGATED_TOTAL"), Schema.Literal("AGGREGATED_DAILY"), Schema.Literal("BREAKDOWN_DAY_OF_WEEK"), Schema.Literal("BREAKDOWN_HOUR_OF_DAY"))),
  timeDimension: Schema.optional(Schema.suspend(() => LegacyV4TimeDimension)),
  value: Schema.optional(Schema.String),
});

/** Dimensions of the media item. */
export interface LegacyV4Dimensions {
  readonly heightPixels?: number;
  readonly widthPixels?: number;
}
export interface LegacyV4DimensionsEncoded {
  readonly heightPixels?: number;
  readonly widthPixels?: number;
}
export const LegacyV4Dimensions: Schema.Schema<LegacyV4Dimensions, LegacyV4DimensionsEncoded, never> = Schema.Struct({
  heightPixels: Schema.optional(Schema.Int),
  widthPixels: Schema.optional(Schema.Int),
});

/** A request for driving direction insights. */
export interface LegacyV4DrivingDirectionMetricsRequest {
  readonly languageCode?: string;
  readonly numDays?: "SEVEN" | "THIRTY" | "NINETY";
}
export interface LegacyV4DrivingDirectionMetricsRequestEncoded {
  readonly languageCode?: string;
  readonly numDays?: "SEVEN" | "THIRTY" | "NINETY";
}
export const LegacyV4DrivingDirectionMetricsRequest: Schema.Schema<LegacyV4DrivingDirectionMetricsRequest, LegacyV4DrivingDirectionMetricsRequestEncoded, never> = Schema.Struct({
  languageCode: Schema.optional(Schema.String),
  numDays: Schema.optional(Schema.Union(Schema.Literal("SEVEN"), Schema.Literal("THIRTY"), Schema.Literal("NINETY"))),
});

/** Information about the location that this location duplicates. */
export interface LegacyV4Duplicate {
  readonly access?: "ACCESS_UNSPECIFIED" | "ACCESS_UNKNOWN" | "ALLOWED" | "INSUFFICIENT";
  readonly locationName?: string;
  readonly placeId?: string;
}
export interface LegacyV4DuplicateEncoded {
  readonly access?: "ACCESS_UNSPECIFIED" | "ACCESS_UNKNOWN" | "ALLOWED" | "INSUFFICIENT";
  readonly locationName?: string;
  readonly placeId?: string;
}
export const LegacyV4Duplicate: Schema.Schema<LegacyV4Duplicate, LegacyV4DuplicateEncoded, never> = Schema.Struct({
  access: Schema.optional(Schema.Union(Schema.Literal("ACCESS_UNSPECIFIED"), Schema.Literal("ACCESS_UNKNOWN"), Schema.Literal("ALLOWED"), Schema.Literal("INSUFFICIENT"))),
  locationName: Schema.optional(Schema.String),
  placeId: Schema.optional(Schema.String),
});

/** Input for EMAIL verification. */
export interface LegacyV4EmailInput {
  readonly emailAddress?: string;
}
export interface LegacyV4EmailInputEncoded {
  readonly emailAddress?: string;
}
export const LegacyV4EmailInput: Schema.Schema<LegacyV4EmailInput, LegacyV4EmailInputEncoded, never> = Schema.Struct({
  emailAddress: Schema.optional(Schema.String),
});

/** Display data for verifications through email. */
export interface LegacyV4EmailVerificationData {
  readonly domainName?: string;
  readonly isUserNameEditable?: boolean;
  readonly userName?: string;
}
export interface LegacyV4EmailVerificationDataEncoded {
  readonly domainName?: string;
  readonly isUserNameEditable?: boolean;
  readonly userName?: string;
}
export const LegacyV4EmailVerificationData: Schema.Schema<LegacyV4EmailVerificationData, LegacyV4EmailVerificationDataEncoded, never> = Schema.Struct({
  domainName: Schema.optional(Schema.String),
  isUserNameEditable: Schema.optional(Schema.Boolean),
  userName: Schema.optional(Schema.String),
});

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`. */
export interface LegacyV4Empty {

}
export interface LegacyV4EmptyEncoded {

}
export const LegacyV4Empty: Schema.Schema<LegacyV4Empty, LegacyV4EmptyEncoded, never> = Schema.Struct({

});

/** Enhanced cleaning measures implemented by the hotel during COVID-19. */
export interface LegacyV4EnhancedCleaning {
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
}
export interface LegacyV4EnhancedCleaningEncoded {
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
}
export const LegacyV4EnhancedCleaning: Schema.Schema<LegacyV4EnhancedCleaning, LegacyV4EnhancedCleaningEncoded, never> = Schema.Struct({
  commercialGradeDisinfectantCleaning: Schema.optional(Schema.Boolean),
  commercialGradeDisinfectantCleaningException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  commonAreasEnhancedCleaning: Schema.optional(Schema.Boolean),
  commonAreasEnhancedCleaningException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  employeesTrainedCleaningProcedures: Schema.optional(Schema.Boolean),
  employeesTrainedCleaningProceduresException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  employeesTrainedThoroughHandWashing: Schema.optional(Schema.Boolean),
  employeesTrainedThoroughHandWashingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  employeesWearProtectiveEquipment: Schema.optional(Schema.Boolean),
  employeesWearProtectiveEquipmentException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  guestRoomsEnhancedCleaning: Schema.optional(Schema.Boolean),
  guestRoomsEnhancedCleaningException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Services and amenities for families and young guests. */
export interface LegacyV4Families {
  readonly babysitting?: boolean;
  readonly babysittingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsActivities?: boolean;
  readonly kidsActivitiesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsClub?: boolean;
  readonly kidsClubException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LegacyV4FamiliesEncoded {
  readonly babysitting?: boolean;
  readonly babysittingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsActivities?: boolean;
  readonly kidsActivitiesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsClub?: boolean;
  readonly kidsClubException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LegacyV4Families: Schema.Schema<LegacyV4Families, LegacyV4FamiliesEncoded, never> = Schema.Struct({
  babysitting: Schema.optional(Schema.Boolean),
  babysittingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  kidsActivities: Schema.optional(Schema.Boolean),
  kidsActivitiesException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  kidsClub: Schema.optional(Schema.Boolean),
  kidsClubException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Request message for Verifications.FetchVerificationOptions. */
export interface LegacyV4FetchVerificationOptionsRequest {
  readonly context?: LegacyV4ServiceBusinessContext;
  readonly languageCode?: string;
}
export interface LegacyV4FetchVerificationOptionsRequestEncoded {
  readonly context?: LegacyV4ServiceBusinessContextEncoded;
  readonly languageCode?: string;
}
export const LegacyV4FetchVerificationOptionsRequest: Schema.Schema<LegacyV4FetchVerificationOptionsRequest, LegacyV4FetchVerificationOptionsRequestEncoded, never> = Schema.Struct({
  context: Schema.optional(Schema.suspend(() => LegacyV4ServiceBusinessContext)),
  languageCode: Schema.optional(Schema.String),
});

/** Response message for Verifications.FetchVerificationOptions. */
export interface LegacyV4FetchVerificationOptionsResponse {
  readonly options?: ReadonlyArray<LegacyV4VerificationOption>;
}
export interface LegacyV4FetchVerificationOptionsResponseEncoded {
  readonly options?: ReadonlyArray<LegacyV4VerificationOptionEncoded>;
}
export const LegacyV4FetchVerificationOptionsResponse: Schema.Schema<LegacyV4FetchVerificationOptionsResponse, LegacyV4FetchVerificationOptionsResponseEncoded, never> = Schema.Struct({
  options: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4VerificationOption))),
});

/** Request message for Locations.FindMatchingLocations. */
export interface LegacyV4FindMatchingLocationsRequest {
  readonly languageCode?: string;
  readonly maxCacheDuration?: string;
  readonly numResults?: number;
}
export interface LegacyV4FindMatchingLocationsRequestEncoded {
  readonly languageCode?: string;
  readonly maxCacheDuration?: string;
  readonly numResults?: number;
}
export const LegacyV4FindMatchingLocationsRequest: Schema.Schema<LegacyV4FindMatchingLocationsRequest, LegacyV4FindMatchingLocationsRequestEncoded, never> = Schema.Struct({
  languageCode: Schema.optional(Schema.String),
  maxCacheDuration: Schema.optional(Schema.String),
  numResults: Schema.optional(Schema.Int),
});

/** Response message for Locations.FindMatchingLocations. */
export interface LegacyV4FindMatchingLocationsResponse {
  readonly matchedLocations?: ReadonlyArray<LegacyV4MatchedLocation>;
  readonly matchTime?: string;
}
export interface LegacyV4FindMatchingLocationsResponseEncoded {
  readonly matchedLocations?: ReadonlyArray<LegacyV4MatchedLocationEncoded>;
  readonly matchTime?: string;
}
export const LegacyV4FindMatchingLocationsResponse: Schema.Schema<LegacyV4FindMatchingLocationsResponse, LegacyV4FindMatchingLocationsResponseEncoded, never> = Schema.Struct({
  matchedLocations: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4MatchedLocation))),
  matchTime: Schema.optional(Schema.String),
});

/** Follower metadata for a location. */
export interface LegacyV4FollowersMetadata {
  readonly count?: string;
  readonly name?: string;
}
export interface LegacyV4FollowersMetadataEncoded {
  readonly count?: string;
  readonly name?: string;
}
export const LegacyV4FollowersMetadata: Schema.Schema<LegacyV4FollowersMetadata, LegacyV4FollowersMetadataEncoded, never> = Schema.Struct({
  count: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});

/** Meals, snacks, and beverages available at the property. */
export interface LegacyV4FoodAndDrink {
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
}
export interface LegacyV4FoodAndDrinkEncoded {
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
}
export const LegacyV4FoodAndDrink: Schema.Schema<LegacyV4FoodAndDrink, LegacyV4FoodAndDrinkEncoded, never> = Schema.Struct({
  bar: Schema.optional(Schema.Boolean),
  barException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  breakfastAvailable: Schema.optional(Schema.Boolean),
  breakfastAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  breakfastBuffet: Schema.optional(Schema.Boolean),
  breakfastBuffetException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  buffet: Schema.optional(Schema.Boolean),
  buffetException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  dinnerBuffet: Schema.optional(Schema.Boolean),
  dinnerBuffetException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeBreakfast: Schema.optional(Schema.Boolean),
  freeBreakfastException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  restaurant: Schema.optional(Schema.Boolean),
  restaurantException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  restaurantsCount: Schema.optional(Schema.Int),
  restaurantsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  roomService: Schema.optional(Schema.Boolean),
  roomServiceException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  tableService: Schema.optional(Schema.Boolean),
  tableServiceException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  twentyFourHourRoomService: Schema.optional(Schema.Boolean),
  twentyFourHourRoomServiceException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  vendingMachine: Schema.optional(Schema.Boolean),
  vendingMachineException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Menu of a business that serves food dishes. */
export interface LegacyV4FoodMenu {
  readonly cuisines?: ReadonlyArray<"CUISINE_UNSPECIFIED" | "AMERICAN" | "ASIAN" | "BRAZILIAN" | "BREAK_FAST" | "BRUNCH" | "CHICKEN" | "CHINESE" | "FAMILY" | "FAST_FOOD" | "FRENCH" | "GREEK" | "GERMAN" | "HAMBURGER" | "INDIAN" | "INDONESIAN" | "ITALIAN" | "JAPANESE" | "KOREAN" | "LATIN_AMERICAN" | "MEDITERRANEAN" | "MEXICAN" | "PAKISTANI" | "PIZZA" | "SEAFOOD" | "SPANISH" | "SUSHI" | "THAI" | "TURKISH" | "VEGETARIAN" | "VIETNAMESE" | "OTHER_CUISINE">;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabel>;
  readonly sections?: ReadonlyArray<LegacyV4FoodMenuSection>;
  readonly sourceUrl?: string;
}
export interface LegacyV4FoodMenuEncoded {
  readonly cuisines?: ReadonlyArray<"CUISINE_UNSPECIFIED" | "AMERICAN" | "ASIAN" | "BRAZILIAN" | "BREAK_FAST" | "BRUNCH" | "CHICKEN" | "CHINESE" | "FAMILY" | "FAST_FOOD" | "FRENCH" | "GREEK" | "GERMAN" | "HAMBURGER" | "INDIAN" | "INDONESIAN" | "ITALIAN" | "JAPANESE" | "KOREAN" | "LATIN_AMERICAN" | "MEDITERRANEAN" | "MEXICAN" | "PAKISTANI" | "PIZZA" | "SEAFOOD" | "SPANISH" | "SUSHI" | "THAI" | "TURKISH" | "VEGETARIAN" | "VIETNAMESE" | "OTHER_CUISINE">;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabelEncoded>;
  readonly sections?: ReadonlyArray<LegacyV4FoodMenuSectionEncoded>;
  readonly sourceUrl?: string;
}
export const LegacyV4FoodMenu: Schema.Schema<LegacyV4FoodMenu, LegacyV4FoodMenuEncoded, never> = Schema.Struct({
  cuisines: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("CUISINE_UNSPECIFIED"), Schema.Literal("AMERICAN"), Schema.Literal("ASIAN"), Schema.Literal("BRAZILIAN"), Schema.Literal("BREAK_FAST"), Schema.Literal("BRUNCH"), Schema.Literal("CHICKEN"), Schema.Literal("CHINESE"), Schema.Literal("FAMILY"), Schema.Literal("FAST_FOOD"), Schema.Literal("FRENCH"), Schema.Literal("GREEK"), Schema.Literal("GERMAN"), Schema.Literal("HAMBURGER"), Schema.Literal("INDIAN"), Schema.Literal("INDONESIAN"), Schema.Literal("ITALIAN"), Schema.Literal("JAPANESE"), Schema.Literal("KOREAN"), Schema.Literal("LATIN_AMERICAN"), Schema.Literal("MEDITERRANEAN"), Schema.Literal("MEXICAN"), Schema.Literal("PAKISTANI"), Schema.Literal("PIZZA"), Schema.Literal("SEAFOOD"), Schema.Literal("SPANISH"), Schema.Literal("SUSHI"), Schema.Literal("THAI"), Schema.Literal("TURKISH"), Schema.Literal("VEGETARIAN"), Schema.Literal("VIETNAMESE"), Schema.Literal("OTHER_CUISINE")))),
  labels: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4MenuLabel))),
  sections: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4FoodMenuSection))),
  sourceUrl: Schema.optional(Schema.String),
});

/** Item of a Section. It can be the dish itself, or can contain multiple FoodMenuItemOption. */
export interface LegacyV4FoodMenuItem {
  readonly attributes?: LegacyV4FoodMenuItemAttributes;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabel>;
  readonly options?: ReadonlyArray<LegacyV4FoodMenuItemOption>;
}
export interface LegacyV4FoodMenuItemEncoded {
  readonly attributes?: LegacyV4FoodMenuItemAttributesEncoded;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabelEncoded>;
  readonly options?: ReadonlyArray<LegacyV4FoodMenuItemOptionEncoded>;
}
export const LegacyV4FoodMenuItem: Schema.Schema<LegacyV4FoodMenuItem, LegacyV4FoodMenuItemEncoded, never> = Schema.Struct({
  attributes: Schema.optional(Schema.suspend(() => LegacyV4FoodMenuItemAttributes)),
  labels: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4MenuLabel))),
  options: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4FoodMenuItemOption))),
});

/** Attributes of a food item/dish. */
export interface LegacyV4FoodMenuItemAttributes {
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
}
export interface LegacyV4FoodMenuItemAttributesEncoded {
  readonly allergen?: ReadonlyArray<"ALLERGEN_UNSPECIFIED" | "DAIRY" | "EGG" | "FISH" | "PEANUT" | "SHELLFISH" | "SOY" | "TREE_NUT" | "WHEAT">;
  readonly dietaryRestriction?: ReadonlyArray<"DIETARY_RESTRICTION_UNSPECIFIED" | "HALAL" | "KOSHER" | "ORGANIC" | "VEGAN" | "VEGETARIAN">;
  readonly ingredients?: ReadonlyArray<LegacyV4IngredientEncoded>;
  readonly mediaKeys?: ReadonlyArray<string>;
  readonly nutritionFacts?: LegacyV4NutritionFactsEncoded;
  readonly portionSize?: LegacyV4PortionSizeEncoded;
  readonly preparationMethods?: ReadonlyArray<"PREPARATION_METHOD_UNSPECIFIED" | "BAKED" | "BARBECUED" | "BASTED" | "BLANCHED" | "BOILED" | "BRAISED" | "CODDLED" | "FERMENTED" | "FRIED" | "GRILLED" | "KNEADED" | "MARINATED" | "PAN_FRIED" | "PICKLED" | "PRESSURE_COOKED" | "ROASTED" | "SAUTEED" | "SEARED" | "SIMMERED" | "SMOKED" | "STEAMED" | "STEEPED" | "STIR_FRIED" | "OTHER_METHOD">;
  readonly price?: LegacyV4MoneyEncoded;
  readonly servesNumPeople?: number;
  readonly spiciness?: "SPICINESS_UNSPECIFIED" | "MILD" | "MEDIUM" | "HOT";
}
export const LegacyV4FoodMenuItemAttributes: Schema.Schema<LegacyV4FoodMenuItemAttributes, LegacyV4FoodMenuItemAttributesEncoded, never> = Schema.Struct({
  allergen: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("ALLERGEN_UNSPECIFIED"), Schema.Literal("DAIRY"), Schema.Literal("EGG"), Schema.Literal("FISH"), Schema.Literal("PEANUT"), Schema.Literal("SHELLFISH"), Schema.Literal("SOY"), Schema.Literal("TREE_NUT"), Schema.Literal("WHEAT")))),
  dietaryRestriction: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("DIETARY_RESTRICTION_UNSPECIFIED"), Schema.Literal("HALAL"), Schema.Literal("KOSHER"), Schema.Literal("ORGANIC"), Schema.Literal("VEGAN"), Schema.Literal("VEGETARIAN")))),
  ingredients: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Ingredient))),
  mediaKeys: Schema.optional(Schema.Array(Schema.String)),
  nutritionFacts: Schema.optional(Schema.suspend(() => LegacyV4NutritionFacts)),
  portionSize: Schema.optional(Schema.suspend(() => LegacyV4PortionSize)),
  preparationMethods: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("PREPARATION_METHOD_UNSPECIFIED"), Schema.Literal("BAKED"), Schema.Literal("BARBECUED"), Schema.Literal("BASTED"), Schema.Literal("BLANCHED"), Schema.Literal("BOILED"), Schema.Literal("BRAISED"), Schema.Literal("CODDLED"), Schema.Literal("FERMENTED"), Schema.Literal("FRIED"), Schema.Literal("GRILLED"), Schema.Literal("KNEADED"), Schema.Literal("MARINATED"), Schema.Literal("PAN_FRIED"), Schema.Literal("PICKLED"), Schema.Literal("PRESSURE_COOKED"), Schema.Literal("ROASTED"), Schema.Literal("SAUTEED"), Schema.Literal("SEARED"), Schema.Literal("SIMMERED"), Schema.Literal("SMOKED"), Schema.Literal("STEAMED"), Schema.Literal("STEEPED"), Schema.Literal("STIR_FRIED"), Schema.Literal("OTHER_METHOD")))),
  price: Schema.optional(Schema.suspend(() => LegacyV4Money)),
  servesNumPeople: Schema.optional(Schema.Int),
  spiciness: Schema.optional(Schema.Union(Schema.Literal("SPICINESS_UNSPECIFIED"), Schema.Literal("MILD"), Schema.Literal("MEDIUM"), Schema.Literal("HOT"))),
});

/** Option of an Item. It requires an explicit user selection. */
export interface LegacyV4FoodMenuItemOption {
  readonly attributes?: LegacyV4FoodMenuItemAttributes;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabel>;
}
export interface LegacyV4FoodMenuItemOptionEncoded {
  readonly attributes?: LegacyV4FoodMenuItemAttributesEncoded;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabelEncoded>;
}
export const LegacyV4FoodMenuItemOption: Schema.Schema<LegacyV4FoodMenuItemOption, LegacyV4FoodMenuItemOptionEncoded, never> = Schema.Struct({
  attributes: Schema.optional(Schema.suspend(() => LegacyV4FoodMenuItemAttributes)),
  labels: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4MenuLabel))),
});

/** Menus of a business that serve food dishes. */
export interface LegacyV4FoodMenus {
  readonly menus?: ReadonlyArray<LegacyV4FoodMenu>;
  readonly name?: string;
}
export interface LegacyV4FoodMenusEncoded {
  readonly menus?: ReadonlyArray<LegacyV4FoodMenuEncoded>;
  readonly name?: string;
}
export const LegacyV4FoodMenus: Schema.Schema<LegacyV4FoodMenus, LegacyV4FoodMenusEncoded, never> = Schema.Struct({
  menus: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4FoodMenu))),
  name: Schema.optional(Schema.String),
});

/** Section of a menu. It can contain multiple items/dishes. */
export interface LegacyV4FoodMenuSection {
  readonly items?: ReadonlyArray<LegacyV4FoodMenuItem>;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabel>;
}
export interface LegacyV4FoodMenuSectionEncoded {
  readonly items?: ReadonlyArray<LegacyV4FoodMenuItemEncoded>;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabelEncoded>;
}
export const LegacyV4FoodMenuSection: Schema.Schema<LegacyV4FoodMenuSection, LegacyV4FoodMenuSectionEncoded, never> = Schema.Struct({
  items: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4FoodMenuItem))),
  labels: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4MenuLabel))),
});

/** Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface. */
export interface LegacyV4FreeFormServiceItem {
  readonly categoryId?: string;
  readonly label?: LegacyV4Label;
}
export interface LegacyV4FreeFormServiceItemEncoded {
  readonly categoryId?: string;
  readonly label?: LegacyV4LabelEncoded;
}
export const LegacyV4FreeFormServiceItem: Schema.Schema<LegacyV4FreeFormServiceItem, LegacyV4FreeFormServiceItemEncoded, never> = Schema.Struct({
  categoryId: Schema.optional(Schema.String),
  label: Schema.optional(Schema.suspend(() => LegacyV4Label)),
});

/** Request message for Accounts.GenerateAccountNumber. */
export interface LegacyV4GenerateAccountNumberRequest {

}
export interface LegacyV4GenerateAccountNumberRequestEncoded {

}
export const LegacyV4GenerateAccountNumberRequest: Schema.Schema<LegacyV4GenerateAccountNumberRequest, LegacyV4GenerateAccountNumberRequestEncoded, never> = Schema.Struct({

});

/** Response message for LodgingService.GetGoogleUpdatedLodging */
export interface LegacyV4GetGoogleUpdatedLodgingResponse {
  readonly diffMask?: string;
  readonly lodging?: LegacyV4Lodging;
}
export interface LegacyV4GetGoogleUpdatedLodgingResponseEncoded {
  readonly diffMask?: string;
  readonly lodging?: LegacyV4LodgingEncoded;
}
export const LegacyV4GetGoogleUpdatedLodgingResponse: Schema.Schema<LegacyV4GetGoogleUpdatedLodgingResponse, LegacyV4GetGoogleUpdatedLodgingResponseEncoded, never> = Schema.Struct({
  diffMask: Schema.optional(Schema.String),
  lodging: Schema.optional(Schema.suspend(() => LegacyV4Lodging)),
});

/** Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed. */
export interface LegacyV4GoogleLocation {
  readonly location?: LegacyV4Location;
  readonly name?: string;
  readonly requestAdminRightsUrl?: string;
}
export interface LegacyV4GoogleLocationEncoded {
  readonly location?: LegacyV4LocationEncoded;
  readonly name?: string;
  readonly requestAdminRightsUrl?: string;
}
export const LegacyV4GoogleLocation: Schema.Schema<LegacyV4GoogleLocation, LegacyV4GoogleLocationEncoded, never> = Schema.Struct({
  location: Schema.optional(Schema.suspend(() => LegacyV4Location)),
  name: Schema.optional(Schema.String),
  requestAdminRightsUrl: Schema.optional(Schema.String),
});

/** Represents a location that was modified by Google. */
export interface LegacyV4GoogleUpdatedLocation {
  readonly diffMask?: string;
  readonly location?: LegacyV4Location;
}
export interface LegacyV4GoogleUpdatedLocationEncoded {
  readonly diffMask?: string;
  readonly location?: LegacyV4LocationEncoded;
}
export const LegacyV4GoogleUpdatedLocation: Schema.Schema<LegacyV4GoogleUpdatedLocation, LegacyV4GoogleUpdatedLocationEncoded, never> = Schema.Struct({
  diffMask: Schema.optional(Schema.String),
  location: Schema.optional(Schema.suspend(() => LegacyV4Location)),
});

/** Features and available amenities in the guest unit. */
export interface LegacyV4GuestUnitFeatures {
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
}
export interface LegacyV4GuestUnitFeaturesEncoded {
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
  readonly totalLivingAreas?: LegacyV4LivingAreaEncoded;
  readonly views?: LegacyV4ViewsFromUnitEncoded;
}
export const LegacyV4GuestUnitFeatures: Schema.Schema<LegacyV4GuestUnitFeatures, LegacyV4GuestUnitFeaturesEncoded, never> = Schema.Struct({
  bungalowOrVilla: Schema.optional(Schema.Boolean),
  bungalowOrVillaException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  connectingUnitAvailable: Schema.optional(Schema.Boolean),
  connectingUnitAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  executiveFloor: Schema.optional(Schema.Boolean),
  executiveFloorException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  maxAdultOccupantsCount: Schema.optional(Schema.Int),
  maxAdultOccupantsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  maxChildOccupantsCount: Schema.optional(Schema.Int),
  maxChildOccupantsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  maxOccupantsCount: Schema.optional(Schema.Int),
  maxOccupantsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  privateHome: Schema.optional(Schema.Boolean),
  privateHomeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  suite: Schema.optional(Schema.Boolean),
  suiteException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  tier: Schema.optional(Schema.Union(Schema.Literal("UNIT_TIER_UNSPECIFIED"), Schema.Literal("STANDARD_UNIT"), Schema.Literal("DELUXE_UNIT"))),
  tierException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  totalLivingAreas: Schema.optional(Schema.suspend(() => LegacyV4LivingArea)),
  views: Schema.optional(Schema.suspend(() => LegacyV4ViewsFromUnit)),
});

/** A specific type of unit primarily defined by its features. */
export interface LegacyV4GuestUnitType {
  readonly codes?: ReadonlyArray<string>;
  readonly features?: LegacyV4GuestUnitFeatures;
  readonly label?: string;
}
export interface LegacyV4GuestUnitTypeEncoded {
  readonly codes?: ReadonlyArray<string>;
  readonly features?: LegacyV4GuestUnitFeaturesEncoded;
  readonly label?: string;
}
export const LegacyV4GuestUnitType: Schema.Schema<LegacyV4GuestUnitType, LegacyV4GuestUnitTypeEncoded, never> = Schema.Struct({
  codes: Schema.optional(Schema.Array(Schema.String)),
  features: Schema.optional(Schema.suspend(() => LegacyV4GuestUnitFeatures)),
  label: Schema.optional(Schema.String),
});

/** Health and safety measures implemented by the hotel during COVID-19. */
export interface LegacyV4HealthAndSafety {
  readonly enhancedCleaning?: LegacyV4EnhancedCleaning;
  readonly increasedFoodSafety?: LegacyV4IncreasedFoodSafety;
  readonly minimizedContact?: LegacyV4MinimizedContact;
  readonly personalProtection?: LegacyV4PersonalProtection;
  readonly physicalDistancing?: LegacyV4PhysicalDistancing;
}
export interface LegacyV4HealthAndSafetyEncoded {
  readonly enhancedCleaning?: LegacyV4EnhancedCleaningEncoded;
  readonly increasedFoodSafety?: LegacyV4IncreasedFoodSafetyEncoded;
  readonly minimizedContact?: LegacyV4MinimizedContactEncoded;
  readonly personalProtection?: LegacyV4PersonalProtectionEncoded;
  readonly physicalDistancing?: LegacyV4PhysicalDistancingEncoded;
}
export const LegacyV4HealthAndSafety: Schema.Schema<LegacyV4HealthAndSafety, LegacyV4HealthAndSafetyEncoded, never> = Schema.Struct({
  enhancedCleaning: Schema.optional(Schema.suspend(() => LegacyV4EnhancedCleaning)),
  increasedFoodSafety: Schema.optional(Schema.suspend(() => LegacyV4IncreasedFoodSafety)),
  minimizedContact: Schema.optional(Schema.suspend(() => LegacyV4MinimizedContact)),
  personalProtection: Schema.optional(Schema.suspend(() => LegacyV4PersonalProtection)),
  physicalDistancing: Schema.optional(Schema.suspend(() => LegacyV4PhysicalDistancing)),
});

/** The Health provider attributes linked with this location. */
export interface LegacyV4HealthProviderAttributes {
  readonly insuranceNetworks?: ReadonlyArray<LegacyV4InsuranceNetwork>;
  readonly name?: string;
}
export interface LegacyV4HealthProviderAttributesEncoded {
  readonly insuranceNetworks?: ReadonlyArray<LegacyV4InsuranceNetworkEncoded>;
  readonly name?: string;
}
export const LegacyV4HealthProviderAttributes: Schema.Schema<LegacyV4HealthProviderAttributes, LegacyV4HealthProviderAttributesEncoded, never> = Schema.Struct({
  insuranceNetworks: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4InsuranceNetwork))),
  name: Schema.optional(Schema.String),
});

/** Conveniences provided in guest units to facilitate an easier, more comfortable stay. */
export interface LegacyV4Housekeeping {
  readonly dailyHousekeeping?: boolean;
  readonly dailyHousekeepingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly housekeepingAvailable?: boolean;
  readonly housekeepingAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly turndownService?: boolean;
  readonly turndownServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LegacyV4HousekeepingEncoded {
  readonly dailyHousekeeping?: boolean;
  readonly dailyHousekeepingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly housekeepingAvailable?: boolean;
  readonly housekeepingAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly turndownService?: boolean;
  readonly turndownServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LegacyV4Housekeeping: Schema.Schema<LegacyV4Housekeeping, LegacyV4HousekeepingEncoded, never> = Schema.Struct({
  dailyHousekeeping: Schema.optional(Schema.Boolean),
  dailyHousekeepingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  housekeepingAvailable: Schema.optional(Schema.Boolean),
  housekeepingAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  turndownService: Schema.optional(Schema.Boolean),
  turndownServiceException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Increased food safety measures implemented by the hotel during COVID-19. */
export interface LegacyV4IncreasedFoodSafety {
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
}
export interface LegacyV4IncreasedFoodSafetyEncoded {
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
}
export const LegacyV4IncreasedFoodSafety: Schema.Schema<LegacyV4IncreasedFoodSafety, LegacyV4IncreasedFoodSafetyEncoded, never> = Schema.Struct({
  diningAreasAdditionalSanitation: Schema.optional(Schema.Boolean),
  diningAreasAdditionalSanitationException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  disposableFlatware: Schema.optional(Schema.Boolean),
  disposableFlatwareException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  foodPreparationAndServingAdditionalSafety: Schema.optional(Schema.Boolean),
  foodPreparationAndServingAdditionalSafetyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  individualPackagedMeals: Schema.optional(Schema.Boolean),
  individualPackagedMealsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  singleUseFoodMenus: Schema.optional(Schema.Boolean),
  singleUseFoodMenusException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** This message denotes an ingredient information of a food dish. */
export interface LegacyV4Ingredient {
  readonly labels?: ReadonlyArray<LegacyV4MenuLabel>;
}
export interface LegacyV4IngredientEncoded {
  readonly labels?: ReadonlyArray<LegacyV4MenuLabelEncoded>;
}
export const LegacyV4Ingredient: Schema.Schema<LegacyV4Ingredient, LegacyV4IngredientEncoded, never> = Schema.Struct({
  labels: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4MenuLabel))),
});

/** A single insurance network. Next id: 5 */
export interface LegacyV4InsuranceNetwork {
  readonly networkId?: string;
  readonly networkNames?: Readonly<Record<string, string>>;
  readonly payerNames?: Readonly<Record<string, string>>;
  readonly state?: "NETWORK_STATE_UNSPECIFIED" | "ACCEPTED" | "PENDING_ADD" | "PENDING_DELETE" | "NOT_ACCEPTED";
}
export interface LegacyV4InsuranceNetworkEncoded {
  readonly networkId?: string;
  readonly networkNames?: Readonly<Record<string, string>>;
  readonly payerNames?: Readonly<Record<string, string>>;
  readonly state?: "NETWORK_STATE_UNSPECIFIED" | "ACCEPTED" | "PENDING_ADD" | "PENDING_DELETE" | "NOT_ACCEPTED";
}
export const LegacyV4InsuranceNetwork: Schema.Schema<LegacyV4InsuranceNetwork, LegacyV4InsuranceNetworkEncoded, never> = Schema.Struct({
  networkId: Schema.optional(Schema.String),
  networkNames: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  payerNames: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  state: Schema.optional(Schema.Union(Schema.Literal("NETWORK_STATE_UNSPECIFIED"), Schema.Literal("ACCEPTED"), Schema.Literal("PENDING_ADD"), Schema.Literal("PENDING_DELETE"), Schema.Literal("NOT_ACCEPTED"))),
});

/** Output only. Represents a pending invitation. */
export interface LegacyV4Invitation {
  readonly name?: string;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "OWNER" | "CO_OWNER" | "MANAGER" | "COMMUNITY_MANAGER";
  readonly targetAccount?: LegacyV4Account;
  readonly targetLocation?: LegacyV4TargetLocation;
}
export interface LegacyV4InvitationEncoded {
  readonly name?: string;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "OWNER" | "CO_OWNER" | "MANAGER" | "COMMUNITY_MANAGER";
  readonly targetAccount?: LegacyV4AccountEncoded;
  readonly targetLocation?: LegacyV4TargetLocationEncoded;
}
export const LegacyV4Invitation: Schema.Schema<LegacyV4Invitation, LegacyV4InvitationEncoded, never> = Schema.Struct({
  name: Schema.optional(Schema.String),
  role: Schema.optional(Schema.Union(Schema.Literal("ADMIN_ROLE_UNSPECIFIED"), Schema.Literal("OWNER"), Schema.Literal("CO_OWNER"), Schema.Literal("MANAGER"), Schema.Literal("COMMUNITY_MANAGER"))),
  targetAccount: Schema.optional(Schema.suspend(() => LegacyV4Account)),
  targetLocation: Schema.optional(Schema.suspend(() => LegacyV4TargetLocation)),
});

/** A single list item. Each variation of an item in the price list should have its own Item with its own price data. */
export interface LegacyV4Item {
  readonly itemId?: string;
  readonly labels?: ReadonlyArray<LegacyV4Label>;
  readonly price?: LegacyV4Money;
}
export interface LegacyV4ItemEncoded {
  readonly itemId?: string;
  readonly labels?: ReadonlyArray<LegacyV4LabelEncoded>;
  readonly price?: LegacyV4MoneyEncoded;
}
export const LegacyV4Item: Schema.Schema<LegacyV4Item, LegacyV4ItemEncoded, never> = Schema.Struct({
  itemId: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Label))),
  price: Schema.optional(Schema.suspend(() => LegacyV4Money)),
});

/** Label to be used when displaying the price list, section, or item. */
export interface LegacyV4Label {
  readonly description?: string;
  readonly displayName?: string;
  readonly languageCode?: string;
}
export interface LegacyV4LabelEncoded {
  readonly description?: string;
  readonly displayName?: string;
  readonly languageCode?: string;
}
export const LegacyV4Label: Schema.Schema<LegacyV4Label, LegacyV4LabelEncoded, never> = Schema.Struct({
  description: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  languageCode: Schema.optional(Schema.String),
});

/** Languages spoken by at least one staff member. */
export interface LegacyV4LanguagesSpoken {
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
}
export interface LegacyV4LanguagesSpokenEncoded {
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
}
export const LegacyV4LanguagesSpoken: Schema.Schema<LegacyV4LanguagesSpoken, LegacyV4LanguagesSpokenEncoded, never> = Schema.Struct({
  arabicSpoken: Schema.optional(Schema.Boolean),
  arabicSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  cantoneseSpoken: Schema.optional(Schema.Boolean),
  cantoneseSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  dutchSpoken: Schema.optional(Schema.Boolean),
  dutchSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  englishSpoken: Schema.optional(Schema.Boolean),
  englishSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  filipinoSpoken: Schema.optional(Schema.Boolean),
  filipinoSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  frenchSpoken: Schema.optional(Schema.Boolean),
  frenchSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  germanSpoken: Schema.optional(Schema.Boolean),
  germanSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  hindiSpoken: Schema.optional(Schema.Boolean),
  hindiSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  indonesianSpoken: Schema.optional(Schema.Boolean),
  indonesianSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  italianSpoken: Schema.optional(Schema.Boolean),
  italianSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  japaneseSpoken: Schema.optional(Schema.Boolean),
  japaneseSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  koreanSpoken: Schema.optional(Schema.Boolean),
  koreanSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mandarinSpoken: Schema.optional(Schema.Boolean),
  mandarinSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  portugueseSpoken: Schema.optional(Schema.Boolean),
  portugueseSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  russianSpoken: Schema.optional(Schema.Boolean),
  russianSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  spanishSpoken: Schema.optional(Schema.Boolean),
  spanishSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  vietnameseSpoken: Schema.optional(Schema.Boolean),
  vietnameseSpokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges. */
export interface LegacyV4LatLng {
  readonly latitude?: number;
  readonly longitude?: number;
}
export interface LegacyV4LatLngEncoded {
  readonly latitude?: number;
  readonly longitude?: number;
}
export const LegacyV4LatLng: Schema.Schema<LegacyV4LatLng, LegacyV4LatLngEncoded, never> = Schema.Struct({
  latitude: Schema.optional(Schema.Number),
  longitude: Schema.optional(Schema.Number),
});

/** Response message for AccessControl.ListAccountAdmins. */
export interface LegacyV4ListAccountAdminsResponse {
  readonly admins?: ReadonlyArray<LegacyV4Admin>;
}
export interface LegacyV4ListAccountAdminsResponseEncoded {
  readonly admins?: ReadonlyArray<LegacyV4AdminEncoded>;
}
export const LegacyV4ListAccountAdminsResponse: Schema.Schema<LegacyV4ListAccountAdminsResponse, LegacyV4ListAccountAdminsResponseEncoded, never> = Schema.Struct({
  admins: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Admin))),
});

/** Response message for Accounts.ListAccounts. */
export interface LegacyV4ListAccountsResponse {
  readonly accounts?: ReadonlyArray<LegacyV4Account>;
  readonly nextPageToken?: string;
}
export interface LegacyV4ListAccountsResponseEncoded {
  readonly accounts?: ReadonlyArray<LegacyV4AccountEncoded>;
  readonly nextPageToken?: string;
}
export const LegacyV4ListAccountsResponse: Schema.Schema<LegacyV4ListAccountsResponse, LegacyV4ListAccountsResponseEncoded, never> = Schema.Struct({
  accounts: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Account))),
  nextPageToken: Schema.optional(Schema.String),
});

/** Response message for QuestionsAndAnswers.ListAnswers */
export interface LegacyV4ListAnswersResponse {
  readonly answers?: ReadonlyArray<LegacyV4Answer>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
}
export interface LegacyV4ListAnswersResponseEncoded {
  readonly answers?: ReadonlyArray<LegacyV4AnswerEncoded>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
}
export const LegacyV4ListAnswersResponse: Schema.Schema<LegacyV4ListAnswersResponse, LegacyV4ListAnswersResponseEncoded, never> = Schema.Struct({
  answers: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Answer))),
  nextPageToken: Schema.optional(Schema.String),
  totalSize: Schema.optional(Schema.Int),
});

/** Response message for Locations.ListAttributeMetadata. */
export interface LegacyV4ListAttributeMetadataResponse {
  readonly attributes?: ReadonlyArray<LegacyV4AttributeMetadata>;
  readonly nextPageToken?: string;
}
export interface LegacyV4ListAttributeMetadataResponseEncoded {
  readonly attributes?: ReadonlyArray<LegacyV4AttributeMetadataEncoded>;
  readonly nextPageToken?: string;
}
export const LegacyV4ListAttributeMetadataResponse: Schema.Schema<LegacyV4ListAttributeMetadataResponse, LegacyV4ListAttributeMetadataResponseEncoded, never> = Schema.Struct({
  attributes: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4AttributeMetadata))),
  nextPageToken: Schema.optional(Schema.String),
});

export interface LegacyV4ListBusinessCategoriesResponse {
  readonly categories?: ReadonlyArray<LegacyV4Category>;
  readonly nextPageToken?: string;
  readonly totalCategoryCount?: number;
}
export interface LegacyV4ListBusinessCategoriesResponseEncoded {
  readonly categories?: ReadonlyArray<LegacyV4CategoryEncoded>;
  readonly nextPageToken?: string;
  readonly totalCategoryCount?: number;
}
export const LegacyV4ListBusinessCategoriesResponse: Schema.Schema<LegacyV4ListBusinessCategoriesResponse, LegacyV4ListBusinessCategoriesResponseEncoded, never> = Schema.Struct({
  categories: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Category))),
  nextPageToken: Schema.optional(Schema.String),
  totalCategoryCount: Schema.optional(Schema.Int),
});

/** Response message for Media.ListCustomerMediaItems. */
export interface LegacyV4ListCustomerMediaItemsResponse {
  readonly mediaItems?: ReadonlyArray<LegacyV4MediaItem>;
  readonly nextPageToken?: string;
  readonly totalMediaItemCount?: number;
}
export interface LegacyV4ListCustomerMediaItemsResponseEncoded {
  readonly mediaItems?: ReadonlyArray<LegacyV4MediaItemEncoded>;
  readonly nextPageToken?: string;
  readonly totalMediaItemCount?: number;
}
export const LegacyV4ListCustomerMediaItemsResponse: Schema.Schema<LegacyV4ListCustomerMediaItemsResponse, LegacyV4ListCustomerMediaItemsResponseEncoded, never> = Schema.Struct({
  mediaItems: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4MediaItem))),
  nextPageToken: Schema.optional(Schema.String),
  totalMediaItemCount: Schema.optional(Schema.Int),
});

/** Response message for InsuranceNetworkService.ListInsuranceNetworks */
export interface LegacyV4ListInsuranceNetworksResponse {
  readonly networks?: ReadonlyArray<LegacyV4InsuranceNetwork>;
  readonly nextPageToken?: string;
}
export interface LegacyV4ListInsuranceNetworksResponseEncoded {
  readonly networks?: ReadonlyArray<LegacyV4InsuranceNetworkEncoded>;
  readonly nextPageToken?: string;
}
export const LegacyV4ListInsuranceNetworksResponse: Schema.Schema<LegacyV4ListInsuranceNetworksResponse, LegacyV4ListInsuranceNetworksResponseEncoded, never> = Schema.Struct({
  networks: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4InsuranceNetwork))),
  nextPageToken: Schema.optional(Schema.String),
});

/** Response message for AccessControl.ListInvitations. */
export interface LegacyV4ListInvitationsResponse {
  readonly invitations?: ReadonlyArray<LegacyV4Invitation>;
}
export interface LegacyV4ListInvitationsResponseEncoded {
  readonly invitations?: ReadonlyArray<LegacyV4InvitationEncoded>;
}
export const LegacyV4ListInvitationsResponse: Schema.Schema<LegacyV4ListInvitationsResponse, LegacyV4ListInvitationsResponseEncoded, never> = Schema.Struct({
  invitations: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Invitation))),
});

/** Response message for ListLocalPosts */
export interface LegacyV4ListLocalPostsResponse {
  readonly localPosts?: ReadonlyArray<LegacyV4LocalPost>;
  readonly nextPageToken?: string;
}
export interface LegacyV4ListLocalPostsResponseEncoded {
  readonly localPosts?: ReadonlyArray<LegacyV4LocalPostEncoded>;
  readonly nextPageToken?: string;
}
export const LegacyV4ListLocalPostsResponse: Schema.Schema<LegacyV4ListLocalPostsResponse, LegacyV4ListLocalPostsResponseEncoded, never> = Schema.Struct({
  localPosts: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4LocalPost))),
  nextPageToken: Schema.optional(Schema.String),
});

/** Response message for AccessControl.ListLocationAdmins. */
export interface LegacyV4ListLocationAdminsResponse {
  readonly admins?: ReadonlyArray<LegacyV4Admin>;
}
export interface LegacyV4ListLocationAdminsResponseEncoded {
  readonly admins?: ReadonlyArray<LegacyV4AdminEncoded>;
}
export const LegacyV4ListLocationAdminsResponse: Schema.Schema<LegacyV4ListLocationAdminsResponse, LegacyV4ListLocationAdminsResponseEncoded, never> = Schema.Struct({
  admins: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Admin))),
});

/** Response message for Locations.ListLocations. */
export interface LegacyV4ListLocationsResponse {
  readonly locations?: ReadonlyArray<LegacyV4Location>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
}
export interface LegacyV4ListLocationsResponseEncoded {
  readonly locations?: ReadonlyArray<LegacyV4LocationEncoded>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
}
export const LegacyV4ListLocationsResponse: Schema.Schema<LegacyV4ListLocationsResponse, LegacyV4ListLocationsResponseEncoded, never> = Schema.Struct({
  locations: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Location))),
  nextPageToken: Schema.optional(Schema.String),
  totalSize: Schema.optional(Schema.Int),
});

/** Response message for Media.ListMediaItems. */
export interface LegacyV4ListMediaItemsResponse {
  readonly mediaItems?: ReadonlyArray<LegacyV4MediaItem>;
  readonly nextPageToken?: string;
  readonly totalMediaItemCount?: number;
}
export interface LegacyV4ListMediaItemsResponseEncoded {
  readonly mediaItems?: ReadonlyArray<LegacyV4MediaItemEncoded>;
  readonly nextPageToken?: string;
  readonly totalMediaItemCount?: number;
}
export const LegacyV4ListMediaItemsResponse: Schema.Schema<LegacyV4ListMediaItemsResponse, LegacyV4ListMediaItemsResponseEncoded, never> = Schema.Struct({
  mediaItems: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4MediaItem))),
  nextPageToken: Schema.optional(Schema.String),
  totalMediaItemCount: Schema.optional(Schema.Int),
});

/** Response message for QuestionsAndAnswers.ListQuestions */
export interface LegacyV4ListQuestionsResponse {
  readonly nextPageToken?: string;
  readonly questions?: ReadonlyArray<LegacyV4Question>;
  readonly totalSize?: number;
}
export interface LegacyV4ListQuestionsResponseEncoded {
  readonly nextPageToken?: string;
  readonly questions?: ReadonlyArray<LegacyV4QuestionEncoded>;
  readonly totalSize?: number;
}
export const LegacyV4ListQuestionsResponse: Schema.Schema<LegacyV4ListQuestionsResponse, LegacyV4ListQuestionsResponseEncoded, never> = Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  questions: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Question))),
  totalSize: Schema.optional(Schema.Int),
});

/** Response message for GoogleLocations.ListRecommendedGoogleLocations. It also contains some locations that have been claimed by other Business Profile users since the last time they were recommended to this Business Profile account. */
export interface LegacyV4ListRecommendedGoogleLocationsResponse {
  readonly googleLocations?: ReadonlyArray<LegacyV4GoogleLocation>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
}
export interface LegacyV4ListRecommendedGoogleLocationsResponseEncoded {
  readonly googleLocations?: ReadonlyArray<LegacyV4GoogleLocationEncoded>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
}
export const LegacyV4ListRecommendedGoogleLocationsResponse: Schema.Schema<LegacyV4ListRecommendedGoogleLocationsResponse, LegacyV4ListRecommendedGoogleLocationsResponseEncoded, never> = Schema.Struct({
  googleLocations: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4GoogleLocation))),
  nextPageToken: Schema.optional(Schema.String),
  totalSize: Schema.optional(Schema.Int),
});

/** Response message for Reviews.ListReviews. */
export interface LegacyV4ListReviewsResponse {
  readonly averageRating?: number;
  readonly nextPageToken?: string;
  readonly reviews?: ReadonlyArray<LegacyV4Review>;
  readonly totalReviewCount?: number;
}
export interface LegacyV4ListReviewsResponseEncoded {
  readonly averageRating?: number;
  readonly nextPageToken?: string;
  readonly reviews?: ReadonlyArray<LegacyV4ReviewEncoded>;
  readonly totalReviewCount?: number;
}
export const LegacyV4ListReviewsResponse: Schema.Schema<LegacyV4ListReviewsResponse, LegacyV4ListReviewsResponseEncoded, never> = Schema.Struct({
  averageRating: Schema.optional(Schema.Number),
  nextPageToken: Schema.optional(Schema.String),
  reviews: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Review))),
  totalReviewCount: Schema.optional(Schema.Int),
});

/** Response message for Verifications.ListVerifications. */
export interface LegacyV4ListVerificationsResponse {
  readonly nextPageToken?: string;
  readonly verifications?: ReadonlyArray<LegacyV4Verification>;
}
export interface LegacyV4ListVerificationsResponseEncoded {
  readonly nextPageToken?: string;
  readonly verifications?: ReadonlyArray<LegacyV4VerificationEncoded>;
}
export const LegacyV4ListVerificationsResponse: Schema.Schema<LegacyV4ListVerificationsResponse, LegacyV4ListVerificationsResponseEncoded, never> = Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  verifications: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Verification))),
});

/** An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit. */
export interface LegacyV4LivingArea {
  readonly accessibility?: LegacyV4LivingAreaAccessibility;
  readonly eating?: LegacyV4LivingAreaEating;
  readonly features?: LegacyV4LivingAreaFeatures;
  readonly layout?: LegacyV4LivingAreaLayout;
  readonly sleeping?: LegacyV4LivingAreaSleeping;
}
export interface LegacyV4LivingAreaEncoded {
  readonly accessibility?: LegacyV4LivingAreaAccessibilityEncoded;
  readonly eating?: LegacyV4LivingAreaEatingEncoded;
  readonly features?: LegacyV4LivingAreaFeaturesEncoded;
  readonly layout?: LegacyV4LivingAreaLayoutEncoded;
  readonly sleeping?: LegacyV4LivingAreaSleepingEncoded;
}
export const LegacyV4LivingArea: Schema.Schema<LegacyV4LivingArea, LegacyV4LivingAreaEncoded, never> = Schema.Struct({
  accessibility: Schema.optional(Schema.suspend(() => LegacyV4LivingAreaAccessibility)),
  eating: Schema.optional(Schema.suspend(() => LegacyV4LivingAreaEating)),
  features: Schema.optional(Schema.suspend(() => LegacyV4LivingAreaFeatures)),
  layout: Schema.optional(Schema.suspend(() => LegacyV4LivingAreaLayout)),
  sleeping: Schema.optional(Schema.suspend(() => LegacyV4LivingAreaSleeping)),
});

/** Accessibility features of the living area. */
export interface LegacyV4LivingAreaAccessibility {
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
}
export interface LegacyV4LivingAreaAccessibilityEncoded {
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
}
export const LegacyV4LivingAreaAccessibility: Schema.Schema<LegacyV4LivingAreaAccessibility, LegacyV4LivingAreaAccessibilityEncoded, never> = Schema.Struct({
  adaCompliantUnit: Schema.optional(Schema.Boolean),
  adaCompliantUnitException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  hearingAccessibleDoorbell: Schema.optional(Schema.Boolean),
  hearingAccessibleDoorbellException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  hearingAccessibleFireAlarm: Schema.optional(Schema.Boolean),
  hearingAccessibleFireAlarmException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  hearingAccessibleUnit: Schema.optional(Schema.Boolean),
  hearingAccessibleUnitException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobilityAccessibleBathtub: Schema.optional(Schema.Boolean),
  mobilityAccessibleBathtubException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobilityAccessibleShower: Schema.optional(Schema.Boolean),
  mobilityAccessibleShowerException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobilityAccessibleToilet: Schema.optional(Schema.Boolean),
  mobilityAccessibleToiletException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobilityAccessibleUnit: Schema.optional(Schema.Boolean),
  mobilityAccessibleUnitException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Information about eating features in the living area. */
export interface LegacyV4LivingAreaEating {
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
}
export interface LegacyV4LivingAreaEatingEncoded {
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
}
export const LegacyV4LivingAreaEating: Schema.Schema<LegacyV4LivingAreaEating, LegacyV4LivingAreaEatingEncoded, never> = Schema.Struct({
  coffeeMaker: Schema.optional(Schema.Boolean),
  coffeeMakerException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  cookware: Schema.optional(Schema.Boolean),
  cookwareException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  dishwasher: Schema.optional(Schema.Boolean),
  dishwasherException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  indoorGrill: Schema.optional(Schema.Boolean),
  indoorGrillException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  kettle: Schema.optional(Schema.Boolean),
  kettleException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  kitchenAvailable: Schema.optional(Schema.Boolean),
  kitchenAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  microwave: Schema.optional(Schema.Boolean),
  microwaveException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  minibar: Schema.optional(Schema.Boolean),
  minibarException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  outdoorGrill: Schema.optional(Schema.Boolean),
  outdoorGrillException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  oven: Schema.optional(Schema.Boolean),
  ovenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  refrigerator: Schema.optional(Schema.Boolean),
  refrigeratorException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  sink: Schema.optional(Schema.Boolean),
  sinkException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  snackbar: Schema.optional(Schema.Boolean),
  snackbarException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  stove: Schema.optional(Schema.Boolean),
  stoveException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  teaStation: Schema.optional(Schema.Boolean),
  teaStationException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  toaster: Schema.optional(Schema.Boolean),
  toasterException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Features in the living area. */
export interface LegacyV4LivingAreaFeatures {
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
}
export interface LegacyV4LivingAreaFeaturesEncoded {
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
}
export const LegacyV4LivingAreaFeatures: Schema.Schema<LegacyV4LivingAreaFeatures, LegacyV4LivingAreaFeaturesEncoded, never> = Schema.Struct({
  airConditioning: Schema.optional(Schema.Boolean),
  airConditioningException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  bathtub: Schema.optional(Schema.Boolean),
  bathtubException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  bidet: Schema.optional(Schema.Boolean),
  bidetException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  dryer: Schema.optional(Schema.Boolean),
  dryerException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  electronicRoomKey: Schema.optional(Schema.Boolean),
  electronicRoomKeyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  fireplace: Schema.optional(Schema.Boolean),
  fireplaceException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  hairdryer: Schema.optional(Schema.Boolean),
  hairdryerException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  heating: Schema.optional(Schema.Boolean),
  heatingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  inunitSafe: Schema.optional(Schema.Boolean),
  inunitSafeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  inunitWifiAvailable: Schema.optional(Schema.Boolean),
  inunitWifiAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  ironingEquipment: Schema.optional(Schema.Boolean),
  ironingEquipmentException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  payPerViewMovies: Schema.optional(Schema.Boolean),
  payPerViewMoviesException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  privateBathroom: Schema.optional(Schema.Boolean),
  privateBathroomException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  shower: Schema.optional(Schema.Boolean),
  showerException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  toilet: Schema.optional(Schema.Boolean),
  toiletException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  tv: Schema.optional(Schema.Boolean),
  tvCasting: Schema.optional(Schema.Boolean),
  tvCastingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  tvException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  tvStreaming: Schema.optional(Schema.Boolean),
  tvStreamingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  universalPowerAdapters: Schema.optional(Schema.Boolean),
  universalPowerAdaptersException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  washer: Schema.optional(Schema.Boolean),
  washerException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Information about the layout of the living area. */
export interface LegacyV4LivingAreaLayout {
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
}
export interface LegacyV4LivingAreaLayoutEncoded {
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
}
export const LegacyV4LivingAreaLayout: Schema.Schema<LegacyV4LivingAreaLayout, LegacyV4LivingAreaLayoutEncoded, never> = Schema.Struct({
  balcony: Schema.optional(Schema.Boolean),
  balconyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  livingAreaSqMeters: Schema.optional(Schema.Number),
  livingAreaSqMetersException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  loft: Schema.optional(Schema.Boolean),
  loftException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  nonSmoking: Schema.optional(Schema.Boolean),
  nonSmokingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  patio: Schema.optional(Schema.Boolean),
  patioException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  stairs: Schema.optional(Schema.Boolean),
  stairsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Information about sleeping features in the living area. */
export interface LegacyV4LivingAreaSleeping {
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
}
export interface LegacyV4LivingAreaSleepingEncoded {
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
}
export const LegacyV4LivingAreaSleeping: Schema.Schema<LegacyV4LivingAreaSleeping, LegacyV4LivingAreaSleepingEncoded, never> = Schema.Struct({
  bedsCount: Schema.optional(Schema.Int),
  bedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  bunkBedsCount: Schema.optional(Schema.Int),
  bunkBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  cribsCount: Schema.optional(Schema.Int),
  cribsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  doubleBedsCount: Schema.optional(Schema.Int),
  doubleBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  featherPillows: Schema.optional(Schema.Boolean),
  featherPillowsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  hypoallergenicBedding: Schema.optional(Schema.Boolean),
  hypoallergenicBeddingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  kingBedsCount: Schema.optional(Schema.Int),
  kingBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  memoryFoamPillows: Schema.optional(Schema.Boolean),
  memoryFoamPillowsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  otherBedsCount: Schema.optional(Schema.Int),
  otherBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  queenBedsCount: Schema.optional(Schema.Int),
  queenBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  rollAwayBedsCount: Schema.optional(Schema.Int),
  rollAwayBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  singleOrTwinBedsCount: Schema.optional(Schema.Int),
  singleOrTwinBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  sofaBedsCount: Schema.optional(Schema.Int),
  sofaBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  syntheticPillows: Schema.optional(Schema.Boolean),
  syntheticPillowsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Represents a [local post](https://support.google.com/business/answer/7662907) for a location. */
export interface LegacyV4LocalPost {
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
}
export interface LegacyV4LocalPostEncoded {
  readonly alertType?: "ALERT_TYPE_UNSPECIFIED" | "COVID_19";
  readonly callToAction?: LegacyV4CallToActionEncoded;
  readonly createTime?: string;
  readonly event?: LegacyV4LocalPostEventEncoded;
  readonly languageCode?: string;
  readonly media?: ReadonlyArray<LegacyV4MediaItemEncoded>;
  readonly name?: string;
  readonly offer?: LegacyV4LocalPostOfferEncoded;
  readonly searchUrl?: string;
  readonly state?: "LOCAL_POST_STATE_UNSPECIFIED" | "REJECTED" | "LIVE" | "PROCESSING";
  readonly summary?: string;
  readonly topicType?: "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED" | "STANDARD" | "EVENT" | "OFFER" | "ALERT";
  readonly updateTime?: string;
}
export const LegacyV4LocalPost: Schema.Schema<LegacyV4LocalPost, LegacyV4LocalPostEncoded, never> = Schema.Struct({
  alertType: Schema.optional(Schema.Union(Schema.Literal("ALERT_TYPE_UNSPECIFIED"), Schema.Literal("COVID_19"))),
  callToAction: Schema.optional(Schema.suspend(() => LegacyV4CallToAction)),
  createTime: Schema.optional(Schema.String),
  event: Schema.optional(Schema.suspend(() => LegacyV4LocalPostEvent)),
  languageCode: Schema.optional(Schema.String),
  media: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4MediaItem))),
  name: Schema.optional(Schema.String),
  offer: Schema.optional(Schema.suspend(() => LegacyV4LocalPostOffer)),
  searchUrl: Schema.optional(Schema.String),
  state: Schema.optional(Schema.Union(Schema.Literal("LOCAL_POST_STATE_UNSPECIFIED"), Schema.Literal("REJECTED"), Schema.Literal("LIVE"), Schema.Literal("PROCESSING"))),
  summary: Schema.optional(Schema.String),
  topicType: Schema.optional(Schema.Union(Schema.Literal("LOCAL_POST_TOPIC_TYPE_UNSPECIFIED"), Schema.Literal("STANDARD"), Schema.Literal("EVENT"), Schema.Literal("OFFER"), Schema.Literal("ALERT"))),
  updateTime: Schema.optional(Schema.String),
});

/** All the information pertaining to an event featured in a local post. */
export interface LegacyV4LocalPostEvent {
  readonly schedule?: LegacyV4TimeInterval;
  readonly title?: string;
}
export interface LegacyV4LocalPostEventEncoded {
  readonly schedule?: LegacyV4TimeIntervalEncoded;
  readonly title?: string;
}
export const LegacyV4LocalPostEvent: Schema.Schema<LegacyV4LocalPostEvent, LegacyV4LocalPostEventEncoded, never> = Schema.Struct({
  schedule: Schema.optional(Schema.suspend(() => LegacyV4TimeInterval)),
  title: Schema.optional(Schema.String),
});

/** All the metrics requested for a Local Post. */
export interface LegacyV4LocalPostMetrics {
  readonly localPostName?: string;
  readonly metricValues?: ReadonlyArray<LegacyV4MetricValue>;
}
export interface LegacyV4LocalPostMetricsEncoded {
  readonly localPostName?: string;
  readonly metricValues?: ReadonlyArray<LegacyV4MetricValueEncoded>;
}
export const LegacyV4LocalPostMetrics: Schema.Schema<LegacyV4LocalPostMetrics, LegacyV4LocalPostMetricsEncoded, never> = Schema.Struct({
  localPostName: Schema.optional(Schema.String),
  metricValues: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4MetricValue))),
});

/** Specific fields for offer posts. */
export interface LegacyV4LocalPostOffer {
  readonly couponCode?: string;
  readonly redeemOnlineUrl?: string;
  readonly termsConditions?: string;
}
export interface LegacyV4LocalPostOfferEncoded {
  readonly couponCode?: string;
  readonly redeemOnlineUrl?: string;
  readonly termsConditions?: string;
}
export const LegacyV4LocalPostOffer: Schema.Schema<LegacyV4LocalPostOffer, LegacyV4LocalPostOfferEncoded, never> = Schema.Struct({
  couponCode: Schema.optional(Schema.String),
  redeemOnlineUrl: Schema.optional(Schema.String),
  termsConditions: Schema.optional(Schema.String),
});

/** A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories. */
export interface LegacyV4Location {
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
}
export interface LegacyV4LocationEncoded {
  readonly additionalCategories?: ReadonlyArray<LegacyV4CategoryEncoded>;
  readonly additionalPhones?: ReadonlyArray<string>;
  readonly address?: LegacyV4PostalAddressEncoded;
  readonly adWordsLocationExtensions?: LegacyV4AdWordsLocationExtensionsEncoded;
  readonly attributes?: ReadonlyArray<LegacyV4AttributeEncoded>;
  readonly labels?: ReadonlyArray<string>;
  readonly languageCode?: string;
  readonly latlng?: LegacyV4LatLngEncoded;
  readonly locationKey?: LegacyV4LocationKeyEncoded;
  readonly locationName?: string;
  readonly locationState?: LegacyV4LocationStateEncoded;
  readonly metadata?: LegacyV4MetadataEncoded;
  readonly moreHours?: ReadonlyArray<LegacyV4MoreHoursEncoded>;
  readonly name?: string;
  readonly openInfo?: LegacyV4OpenInfoEncoded;
  readonly priceLists?: ReadonlyArray<LegacyV4PriceListEncoded>;
  readonly primaryCategory?: LegacyV4CategoryEncoded;
  readonly primaryPhone?: string;
  readonly profile?: LegacyV4ProfileEncoded;
  readonly regularHours?: LegacyV4BusinessHoursEncoded;
  readonly relationshipData?: LegacyV4RelationshipDataEncoded;
  readonly serviceArea?: LegacyV4ServiceAreaBusinessEncoded;
  readonly specialHours?: LegacyV4SpecialHoursEncoded;
  readonly storeCode?: string;
  readonly websiteUrl?: string;
}
export const LegacyV4Location: Schema.Schema<LegacyV4Location, LegacyV4LocationEncoded, never> = Schema.Struct({
  additionalCategories: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Category))),
  additionalPhones: Schema.optional(Schema.Array(Schema.String)),
  address: Schema.optional(Schema.suspend(() => LegacyV4PostalAddress)),
  adWordsLocationExtensions: Schema.optional(Schema.suspend(() => LegacyV4AdWordsLocationExtensions)),
  attributes: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Attribute))),
  labels: Schema.optional(Schema.Array(Schema.String)),
  languageCode: Schema.optional(Schema.String),
  latlng: Schema.optional(Schema.suspend(() => LegacyV4LatLng)),
  locationKey: Schema.optional(Schema.suspend(() => LegacyV4LocationKey)),
  locationName: Schema.optional(Schema.String),
  locationState: Schema.optional(Schema.suspend(() => LegacyV4LocationState)),
  metadata: Schema.optional(Schema.suspend(() => LegacyV4Metadata)),
  moreHours: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4MoreHours))),
  name: Schema.optional(Schema.String),
  openInfo: Schema.optional(Schema.suspend(() => LegacyV4OpenInfo)),
  priceLists: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4PriceList))),
  primaryCategory: Schema.optional(Schema.suspend(() => LegacyV4Category)),
  primaryPhone: Schema.optional(Schema.String),
  profile: Schema.optional(Schema.suspend(() => LegacyV4Profile)),
  regularHours: Schema.optional(Schema.suspend(() => LegacyV4BusinessHours)),
  relationshipData: Schema.optional(Schema.suspend(() => LegacyV4RelationshipData)),
  serviceArea: Schema.optional(Schema.suspend(() => LegacyV4ServiceAreaBusiness)),
  specialHours: Schema.optional(Schema.suspend(() => LegacyV4SpecialHours)),
  storeCode: Schema.optional(Schema.String),
  websiteUrl: Schema.optional(Schema.String),
});

/** How the media item is associated with its location. */
export interface LegacyV4LocationAssociation {
  readonly category?: "CATEGORY_UNSPECIFIED" | "COVER" | "PROFILE" | "LOGO" | "EXTERIOR" | "INTERIOR" | "PRODUCT" | "AT_WORK" | "FOOD_AND_DRINK" | "MENU" | "COMMON_AREA" | "ROOMS" | "TEAMS" | "ADDITIONAL";
  readonly priceListItemId?: string;
}
export interface LegacyV4LocationAssociationEncoded {
  readonly category?: "CATEGORY_UNSPECIFIED" | "COVER" | "PROFILE" | "LOGO" | "EXTERIOR" | "INTERIOR" | "PRODUCT" | "AT_WORK" | "FOOD_AND_DRINK" | "MENU" | "COMMON_AREA" | "ROOMS" | "TEAMS" | "ADDITIONAL";
  readonly priceListItemId?: string;
}
export const LegacyV4LocationAssociation: Schema.Schema<LegacyV4LocationAssociation, LegacyV4LocationAssociationEncoded, never> = Schema.Struct({
  category: Schema.optional(Schema.Union(Schema.Literal("CATEGORY_UNSPECIFIED"), Schema.Literal("COVER"), Schema.Literal("PROFILE"), Schema.Literal("LOGO"), Schema.Literal("EXTERIOR"), Schema.Literal("INTERIOR"), Schema.Literal("PRODUCT"), Schema.Literal("AT_WORK"), Schema.Literal("FOOD_AND_DRINK"), Schema.Literal("MENU"), Schema.Literal("COMMON_AREA"), Schema.Literal("ROOMS"), Schema.Literal("TEAMS"), Schema.Literal("ADDITIONAL"))),
  priceListItemId: Schema.optional(Schema.String),
});

/** A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region. */
export interface LegacyV4LocationDrivingDirectionMetrics {
  readonly locationName?: string;
  readonly timeZone?: string;
  readonly topDirectionSources?: ReadonlyArray<LegacyV4TopDirectionSources>;
}
export interface LegacyV4LocationDrivingDirectionMetricsEncoded {
  readonly locationName?: string;
  readonly timeZone?: string;
  readonly topDirectionSources?: ReadonlyArray<LegacyV4TopDirectionSourcesEncoded>;
}
export const LegacyV4LocationDrivingDirectionMetrics: Schema.Schema<LegacyV4LocationDrivingDirectionMetrics, LegacyV4LocationDrivingDirectionMetricsEncoded, never> = Schema.Struct({
  locationName: Schema.optional(Schema.String),
  timeZone: Schema.optional(Schema.String),
  topDirectionSources: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4TopDirectionSources))),
});

/** Alternate/surrogate key references for a location. */
export interface LegacyV4LocationKey {
  readonly explicitNoPlaceId?: boolean;
  readonly placeId?: string;
  readonly plusPageId?: string;
  readonly requestId?: string;
}
export interface LegacyV4LocationKeyEncoded {
  readonly explicitNoPlaceId?: boolean;
  readonly placeId?: string;
  readonly plusPageId?: string;
  readonly requestId?: string;
}
export const LegacyV4LocationKey: Schema.Schema<LegacyV4LocationKey, LegacyV4LocationKeyEncoded, never> = Schema.Struct({
  explicitNoPlaceId: Schema.optional(Schema.Boolean),
  placeId: Schema.optional(Schema.String),
  plusPageId: Schema.optional(Schema.String),
  requestId: Schema.optional(Schema.String),
});

/** A series of Metrics and BreakdownMetrics associated with a Location over some time range. */
export interface LegacyV4LocationMetrics {
  readonly locationName?: string;
  readonly metricValues?: ReadonlyArray<LegacyV4MetricValue>;
  readonly timeZone?: string;
}
export interface LegacyV4LocationMetricsEncoded {
  readonly locationName?: string;
  readonly metricValues?: ReadonlyArray<LegacyV4MetricValueEncoded>;
  readonly timeZone?: string;
}
export const LegacyV4LocationMetrics: Schema.Schema<LegacyV4LocationMetrics, LegacyV4LocationMetricsEncoded, never> = Schema.Struct({
  locationName: Schema.optional(Schema.String),
  metricValues: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4MetricValue))),
  timeZone: Schema.optional(Schema.String),
});

/** Represents a review with location information. */
export interface LegacyV4LocationReview {
  readonly name?: string;
  readonly review?: LegacyV4Review;
}
export interface LegacyV4LocationReviewEncoded {
  readonly name?: string;
  readonly review?: LegacyV4ReviewEncoded;
}
export const LegacyV4LocationReview: Schema.Schema<LegacyV4LocationReview, LegacyV4LocationReviewEncoded, never> = Schema.Struct({
  name: Schema.optional(Schema.String),
  review: Schema.optional(Schema.suspend(() => LegacyV4Review)),
});

/** Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862) */
export interface LegacyV4LocationState {
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
}
export interface LegacyV4LocationStateEncoded {
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
}
export const LegacyV4LocationState: Schema.Schema<LegacyV4LocationState, LegacyV4LocationStateEncoded, never> = Schema.Struct({
  canDelete: Schema.optional(Schema.Boolean),
  canHaveFoodMenus: Schema.optional(Schema.Boolean),
  canModifyServiceList: Schema.optional(Schema.Boolean),
  canOperateHealthData: Schema.optional(Schema.Boolean),
  canOperateLodgingData: Schema.optional(Schema.Boolean),
  canUpdate: Schema.optional(Schema.Boolean),
  hasPendingEdits: Schema.optional(Schema.Boolean),
  hasPendingVerification: Schema.optional(Schema.Boolean),
  isDisabled: Schema.optional(Schema.Boolean),
  isDisconnected: Schema.optional(Schema.Boolean),
  isDuplicate: Schema.optional(Schema.Boolean),
  isGoogleUpdated: Schema.optional(Schema.Boolean),
  isLocalPostApiDisabled: Schema.optional(Schema.Boolean),
  isPendingReview: Schema.optional(Schema.Boolean),
  isPublished: Schema.optional(Schema.Boolean),
  isSuspended: Schema.optional(Schema.Boolean),
  isVerified: Schema.optional(Schema.Boolean),
  needsReverification: Schema.optional(Schema.Boolean),
});

/** Lodging of a location that provides accomodations. */
export interface LegacyV4Lodging {
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
}
export interface LegacyV4LodgingEncoded {
  readonly accessibility?: LegacyV4AccessibilityEncoded;
  readonly activities?: LegacyV4ActivitiesEncoded;
  readonly allUnits?: LegacyV4GuestUnitFeaturesEncoded;
  readonly business?: LegacyV4BusinessEncoded;
  readonly commonLivingArea?: LegacyV4LivingAreaEncoded;
  readonly connectivity?: LegacyV4ConnectivityEncoded;
  readonly families?: LegacyV4FamiliesEncoded;
  readonly foodAndDrink?: LegacyV4FoodAndDrinkEncoded;
  readonly guestUnits?: ReadonlyArray<LegacyV4GuestUnitTypeEncoded>;
  readonly healthAndSafety?: LegacyV4HealthAndSafetyEncoded;
  readonly housekeeping?: LegacyV4HousekeepingEncoded;
  readonly metadata?: LegacyV4LodgingMetadataEncoded;
  readonly name?: string;
  readonly parking?: LegacyV4ParkingEncoded;
  readonly pets?: LegacyV4PetsEncoded;
  readonly policies?: LegacyV4PoliciesEncoded;
  readonly pools?: LegacyV4PoolsEncoded;
  readonly property?: LegacyV4PropertyEncoded;
  readonly services?: LegacyV4ServicesEncoded;
  readonly someUnits?: LegacyV4GuestUnitFeaturesEncoded;
  readonly transportation?: LegacyV4TransportationEncoded;
  readonly wellness?: LegacyV4WellnessEncoded;
}
export const LegacyV4Lodging: Schema.Schema<LegacyV4Lodging, LegacyV4LodgingEncoded, never> = Schema.Struct({
  accessibility: Schema.optional(Schema.suspend(() => LegacyV4Accessibility)),
  activities: Schema.optional(Schema.suspend(() => LegacyV4Activities)),
  allUnits: Schema.optional(Schema.suspend(() => LegacyV4GuestUnitFeatures)),
  business: Schema.optional(Schema.suspend(() => LegacyV4Business)),
  commonLivingArea: Schema.optional(Schema.suspend(() => LegacyV4LivingArea)),
  connectivity: Schema.optional(Schema.suspend(() => LegacyV4Connectivity)),
  families: Schema.optional(Schema.suspend(() => LegacyV4Families)),
  foodAndDrink: Schema.optional(Schema.suspend(() => LegacyV4FoodAndDrink)),
  guestUnits: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4GuestUnitType))),
  healthAndSafety: Schema.optional(Schema.suspend(() => LegacyV4HealthAndSafety)),
  housekeeping: Schema.optional(Schema.suspend(() => LegacyV4Housekeeping)),
  metadata: Schema.optional(Schema.suspend(() => LegacyV4LodgingMetadata)),
  name: Schema.optional(Schema.String),
  parking: Schema.optional(Schema.suspend(() => LegacyV4Parking)),
  pets: Schema.optional(Schema.suspend(() => LegacyV4Pets)),
  policies: Schema.optional(Schema.suspend(() => LegacyV4Policies)),
  pools: Schema.optional(Schema.suspend(() => LegacyV4Pools)),
  property: Schema.optional(Schema.suspend(() => LegacyV4Property)),
  services: Schema.optional(Schema.suspend(() => LegacyV4Services)),
  someUnits: Schema.optional(Schema.suspend(() => LegacyV4GuestUnitFeatures)),
  transportation: Schema.optional(Schema.suspend(() => LegacyV4Transportation)),
  wellness: Schema.optional(Schema.suspend(() => LegacyV4Wellness)),
});

/** Metadata for the Lodging. */
export interface LegacyV4LodgingMetadata {
  readonly updateTime?: string;
}
export interface LegacyV4LodgingMetadataEncoded {
  readonly updateTime?: string;
}
export const LegacyV4LodgingMetadata: Schema.Schema<LegacyV4LodgingMetadata, LegacyV4LodgingMetadataEncoded, never> = Schema.Struct({
  updateTime: Schema.optional(Schema.String),
});

/** Represents a possible match to a location. */
export interface LegacyV4MatchedLocation {
  readonly isExactMatch?: boolean;
  readonly location?: LegacyV4Location;
}
export interface LegacyV4MatchedLocationEncoded {
  readonly isExactMatch?: boolean;
  readonly location?: LegacyV4LocationEncoded;
}
export const LegacyV4MatchedLocation: Schema.Schema<LegacyV4MatchedLocation, LegacyV4MatchedLocationEncoded, never> = Schema.Struct({
  isExactMatch: Schema.optional(Schema.Boolean),
  location: Schema.optional(Schema.suspend(() => LegacyV4Location)),
});

/** Insights and statistics for the media item. */
export interface LegacyV4MediaInsights {
  readonly viewCount?: string;
}
export interface LegacyV4MediaInsightsEncoded {
  readonly viewCount?: string;
}
export const LegacyV4MediaInsights: Schema.Schema<LegacyV4MediaInsights, LegacyV4MediaInsightsEncoded, never> = Schema.Struct({
  viewCount: Schema.optional(Schema.String),
});

/** A single media item. */
export interface LegacyV4MediaItem {
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
}
export interface LegacyV4MediaItemEncoded {
  readonly attribution?: LegacyV4AttributionEncoded;
  readonly createTime?: string;
  readonly dataRef?: LegacyV4MediaItemDataRefEncoded;
  readonly description?: string;
  readonly dimensions?: LegacyV4DimensionsEncoded;
  readonly googleUrl?: string;
  readonly insights?: LegacyV4MediaInsightsEncoded;
  readonly locationAssociation?: LegacyV4LocationAssociationEncoded;
  readonly mediaFormat?: "MEDIA_FORMAT_UNSPECIFIED" | "PHOTO" | "VIDEO";
  readonly name?: string;
  readonly sourceUrl?: string;
  readonly thumbnailUrl?: string;
}
export const LegacyV4MediaItem: Schema.Schema<LegacyV4MediaItem, LegacyV4MediaItemEncoded, never> = Schema.Struct({
  attribution: Schema.optional(Schema.suspend(() => LegacyV4Attribution)),
  createTime: Schema.optional(Schema.String),
  dataRef: Schema.optional(Schema.suspend(() => LegacyV4MediaItemDataRef)),
  description: Schema.optional(Schema.String),
  dimensions: Schema.optional(Schema.suspend(() => LegacyV4Dimensions)),
  googleUrl: Schema.optional(Schema.String),
  insights: Schema.optional(Schema.suspend(() => LegacyV4MediaInsights)),
  locationAssociation: Schema.optional(Schema.suspend(() => LegacyV4LocationAssociation)),
  mediaFormat: Schema.optional(Schema.Union(Schema.Literal("MEDIA_FORMAT_UNSPECIFIED"), Schema.Literal("PHOTO"), Schema.Literal("VIDEO"))),
  name: Schema.optional(Schema.String),
  sourceUrl: Schema.optional(Schema.String),
  thumbnailUrl: Schema.optional(Schema.String),
});

/** Reference to the photo binary data of a `MediaItem` uploaded through the Google My Business API. Create a data ref using StartUploadMediaItemData, and use this ref when uploading bytes to [UpdateMedia] and subsequently calling CreateMediaItem. */
export interface LegacyV4MediaItemDataRef {
  readonly resourceName?: string;
}
export interface LegacyV4MediaItemDataRefEncoded {
  readonly resourceName?: string;
}
export const LegacyV4MediaItemDataRef: Schema.Schema<LegacyV4MediaItemDataRef, LegacyV4MediaItemDataRefEncoded, never> = Schema.Struct({
  resourceName: Schema.optional(Schema.String),
});

/** Label to be used when displaying the menu and its various sub-components. */
export interface LegacyV4MenuLabel {
  readonly description?: string;
  readonly displayName?: string;
  readonly languageCode?: string;
}
export interface LegacyV4MenuLabelEncoded {
  readonly description?: string;
  readonly displayName?: string;
  readonly languageCode?: string;
}
export const LegacyV4MenuLabel: Schema.Schema<LegacyV4MenuLabel, LegacyV4MenuLabelEncoded, never> = Schema.Struct({
  description: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  languageCode: Schema.optional(Schema.String),
});

/** Additional non-user-editable information about the location. */
export interface LegacyV4Metadata {
  readonly duplicate?: LegacyV4Duplicate;
  readonly mapsUrl?: string;
  readonly newReviewUrl?: string;
}
export interface LegacyV4MetadataEncoded {
  readonly duplicate?: LegacyV4DuplicateEncoded;
  readonly mapsUrl?: string;
  readonly newReviewUrl?: string;
}
export const LegacyV4Metadata: Schema.Schema<LegacyV4Metadata, LegacyV4MetadataEncoded, never> = Schema.Struct({
  duplicate: Schema.optional(Schema.suspend(() => LegacyV4Duplicate)),
  mapsUrl: Schema.optional(Schema.String),
  newReviewUrl: Schema.optional(Schema.String),
});

/** A request to return values for one metric and the options for how those values should be returned. */
export interface LegacyV4MetricRequest {
  readonly metric?: "METRIC_UNSPECIFIED" | "ALL" | "QUERIES_DIRECT" | "QUERIES_INDIRECT" | "QUERIES_CHAIN" | "VIEWS_MAPS" | "VIEWS_SEARCH" | "ACTIONS_WEBSITE" | "ACTIONS_PHONE" | "ACTIONS_DRIVING_DIRECTIONS" | "PHOTOS_VIEWS_MERCHANT" | "PHOTOS_VIEWS_CUSTOMERS" | "PHOTOS_COUNT_MERCHANT" | "PHOTOS_COUNT_CUSTOMERS" | "LOCAL_POST_VIEWS_SEARCH" | "LOCAL_POST_ACTIONS_CALL_TO_ACTION";
  readonly options?: ReadonlyArray<"METRIC_OPTION_UNSPECIFIED" | "AGGREGATED_TOTAL" | "AGGREGATED_DAILY" | "BREAKDOWN_DAY_OF_WEEK" | "BREAKDOWN_HOUR_OF_DAY">;
}
export interface LegacyV4MetricRequestEncoded {
  readonly metric?: "METRIC_UNSPECIFIED" | "ALL" | "QUERIES_DIRECT" | "QUERIES_INDIRECT" | "QUERIES_CHAIN" | "VIEWS_MAPS" | "VIEWS_SEARCH" | "ACTIONS_WEBSITE" | "ACTIONS_PHONE" | "ACTIONS_DRIVING_DIRECTIONS" | "PHOTOS_VIEWS_MERCHANT" | "PHOTOS_VIEWS_CUSTOMERS" | "PHOTOS_COUNT_MERCHANT" | "PHOTOS_COUNT_CUSTOMERS" | "LOCAL_POST_VIEWS_SEARCH" | "LOCAL_POST_ACTIONS_CALL_TO_ACTION";
  readonly options?: ReadonlyArray<"METRIC_OPTION_UNSPECIFIED" | "AGGREGATED_TOTAL" | "AGGREGATED_DAILY" | "BREAKDOWN_DAY_OF_WEEK" | "BREAKDOWN_HOUR_OF_DAY">;
}
export const LegacyV4MetricRequest: Schema.Schema<LegacyV4MetricRequest, LegacyV4MetricRequestEncoded, never> = Schema.Struct({
  metric: Schema.optional(Schema.Union(Schema.Literal("METRIC_UNSPECIFIED"), Schema.Literal("ALL"), Schema.Literal("QUERIES_DIRECT"), Schema.Literal("QUERIES_INDIRECT"), Schema.Literal("QUERIES_CHAIN"), Schema.Literal("VIEWS_MAPS"), Schema.Literal("VIEWS_SEARCH"), Schema.Literal("ACTIONS_WEBSITE"), Schema.Literal("ACTIONS_PHONE"), Schema.Literal("ACTIONS_DRIVING_DIRECTIONS"), Schema.Literal("PHOTOS_VIEWS_MERCHANT"), Schema.Literal("PHOTOS_VIEWS_CUSTOMERS"), Schema.Literal("PHOTOS_COUNT_MERCHANT"), Schema.Literal("PHOTOS_COUNT_CUSTOMERS"), Schema.Literal("LOCAL_POST_VIEWS_SEARCH"), Schema.Literal("LOCAL_POST_ACTIONS_CALL_TO_ACTION"))),
  options: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("METRIC_OPTION_UNSPECIFIED"), Schema.Literal("AGGREGATED_TOTAL"), Schema.Literal("AGGREGATED_DAILY"), Schema.Literal("BREAKDOWN_DAY_OF_WEEK"), Schema.Literal("BREAKDOWN_HOUR_OF_DAY")))),
});

/** A value for a single Metric from a starting time. */
export interface LegacyV4MetricValue {
  readonly dimensionalValues?: ReadonlyArray<LegacyV4DimensionalMetricValue>;
  readonly metric?: "METRIC_UNSPECIFIED" | "ALL" | "QUERIES_DIRECT" | "QUERIES_INDIRECT" | "QUERIES_CHAIN" | "VIEWS_MAPS" | "VIEWS_SEARCH" | "ACTIONS_WEBSITE" | "ACTIONS_PHONE" | "ACTIONS_DRIVING_DIRECTIONS" | "PHOTOS_VIEWS_MERCHANT" | "PHOTOS_VIEWS_CUSTOMERS" | "PHOTOS_COUNT_MERCHANT" | "PHOTOS_COUNT_CUSTOMERS" | "LOCAL_POST_VIEWS_SEARCH" | "LOCAL_POST_ACTIONS_CALL_TO_ACTION";
  readonly totalValue?: LegacyV4DimensionalMetricValue;
}
export interface LegacyV4MetricValueEncoded {
  readonly dimensionalValues?: ReadonlyArray<LegacyV4DimensionalMetricValueEncoded>;
  readonly metric?: "METRIC_UNSPECIFIED" | "ALL" | "QUERIES_DIRECT" | "QUERIES_INDIRECT" | "QUERIES_CHAIN" | "VIEWS_MAPS" | "VIEWS_SEARCH" | "ACTIONS_WEBSITE" | "ACTIONS_PHONE" | "ACTIONS_DRIVING_DIRECTIONS" | "PHOTOS_VIEWS_MERCHANT" | "PHOTOS_VIEWS_CUSTOMERS" | "PHOTOS_COUNT_MERCHANT" | "PHOTOS_COUNT_CUSTOMERS" | "LOCAL_POST_VIEWS_SEARCH" | "LOCAL_POST_ACTIONS_CALL_TO_ACTION";
  readonly totalValue?: LegacyV4DimensionalMetricValueEncoded;
}
export const LegacyV4MetricValue: Schema.Schema<LegacyV4MetricValue, LegacyV4MetricValueEncoded, never> = Schema.Struct({
  dimensionalValues: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4DimensionalMetricValue))),
  metric: Schema.optional(Schema.Union(Schema.Literal("METRIC_UNSPECIFIED"), Schema.Literal("ALL"), Schema.Literal("QUERIES_DIRECT"), Schema.Literal("QUERIES_INDIRECT"), Schema.Literal("QUERIES_CHAIN"), Schema.Literal("VIEWS_MAPS"), Schema.Literal("VIEWS_SEARCH"), Schema.Literal("ACTIONS_WEBSITE"), Schema.Literal("ACTIONS_PHONE"), Schema.Literal("ACTIONS_DRIVING_DIRECTIONS"), Schema.Literal("PHOTOS_VIEWS_MERCHANT"), Schema.Literal("PHOTOS_VIEWS_CUSTOMERS"), Schema.Literal("PHOTOS_COUNT_MERCHANT"), Schema.Literal("PHOTOS_COUNT_CUSTOMERS"), Schema.Literal("LOCAL_POST_VIEWS_SEARCH"), Schema.Literal("LOCAL_POST_ACTIONS_CALL_TO_ACTION"))),
  totalValue: Schema.optional(Schema.suspend(() => LegacyV4DimensionalMetricValue)),
});

/** Minimized contact measures implemented by the hotel during COVID-19. */
export interface LegacyV4MinimizedContact {
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
}
export interface LegacyV4MinimizedContactEncoded {
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
}
export const LegacyV4MinimizedContact: Schema.Schema<LegacyV4MinimizedContact, LegacyV4MinimizedContactEncoded, never> = Schema.Struct({
  contactlessCheckinCheckout: Schema.optional(Schema.Boolean),
  contactlessCheckinCheckoutException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  digitalGuestRoomKeys: Schema.optional(Schema.Boolean),
  digitalGuestRoomKeysException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  housekeepingScheduledRequestOnly: Schema.optional(Schema.Boolean),
  housekeepingScheduledRequestOnlyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  noHighTouchItemsCommonAreas: Schema.optional(Schema.Boolean),
  noHighTouchItemsCommonAreasException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  noHighTouchItemsGuestRooms: Schema.optional(Schema.Boolean),
  noHighTouchItemsGuestRoomsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  plasticKeycardsDisinfected: Schema.optional(Schema.Boolean),
  plasticKeycardsDisinfectedException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  roomBookingsBuffer: Schema.optional(Schema.Boolean),
  roomBookingsBufferException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Represents an amount of money with its currency type. */
export interface LegacyV4Money {
  readonly currencyCode?: string;
  readonly nanos?: number;
  readonly units?: string;
}
export interface LegacyV4MoneyEncoded {
  readonly currencyCode?: string;
  readonly nanos?: number;
  readonly units?: string;
}
export const LegacyV4Money: Schema.Schema<LegacyV4Money, LegacyV4MoneyEncoded, never> = Schema.Struct({
  currencyCode: Schema.optional(Schema.String),
  nanos: Schema.optional(Schema.Int),
  units: Schema.optional(Schema.String),
});

/** The time periods during which a location is open for certain types of business. */
export interface LegacyV4MoreHours {
  readonly hoursTypeId?: string;
  readonly periods?: ReadonlyArray<LegacyV4TimePeriod>;
}
export interface LegacyV4MoreHoursEncoded {
  readonly hoursTypeId?: string;
  readonly periods?: ReadonlyArray<LegacyV4TimePeriodEncoded>;
}
export const LegacyV4MoreHours: Schema.Schema<LegacyV4MoreHours, LegacyV4MoreHoursEncoded, never> = Schema.Struct({
  hoursTypeId: Schema.optional(Schema.String),
  periods: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4TimePeriod))),
});

/** More hours types that a business can offers, in addition to its regular hours. */
export interface LegacyV4MoreHoursType {
  readonly displayName?: string;
  readonly hoursTypeId?: string;
  readonly localizedDisplayName?: string;
}
export interface LegacyV4MoreHoursTypeEncoded {
  readonly displayName?: string;
  readonly hoursTypeId?: string;
  readonly localizedDisplayName?: string;
}
export const LegacyV4MoreHoursType: Schema.Schema<LegacyV4MoreHoursType, LegacyV4MoreHoursTypeEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  hoursTypeId: Schema.optional(Schema.String),
  localizedDisplayName: Schema.optional(Schema.String),
});

/** A Google Cloud Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification settings resource per-account. */
export interface LegacyV4Notifications {
  readonly name?: string;
  readonly notificationTypes?: ReadonlyArray<"NOTIFICATION_TYPE_UNSPECIFIED" | "GOOGLE_UPDATE" | "NEW_REVIEW" | "UPDATED_REVIEW" | "NEW_CUSTOMER_MEDIA" | "NEW_QUESTION" | "UPDATED_QUESTION" | "NEW_ANSWER" | "UPDATED_ANSWER" | "UPDATED_LOCATION_STATE">;
  readonly topicName?: string;
}
export interface LegacyV4NotificationsEncoded {
  readonly name?: string;
  readonly notificationTypes?: ReadonlyArray<"NOTIFICATION_TYPE_UNSPECIFIED" | "GOOGLE_UPDATE" | "NEW_REVIEW" | "UPDATED_REVIEW" | "NEW_CUSTOMER_MEDIA" | "NEW_QUESTION" | "UPDATED_QUESTION" | "NEW_ANSWER" | "UPDATED_ANSWER" | "UPDATED_LOCATION_STATE">;
  readonly topicName?: string;
}
export const LegacyV4Notifications: Schema.Schema<LegacyV4Notifications, LegacyV4NotificationsEncoded, never> = Schema.Struct({
  name: Schema.optional(Schema.String),
  notificationTypes: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("NOTIFICATION_TYPE_UNSPECIFIED"), Schema.Literal("GOOGLE_UPDATE"), Schema.Literal("NEW_REVIEW"), Schema.Literal("UPDATED_REVIEW"), Schema.Literal("NEW_CUSTOMER_MEDIA"), Schema.Literal("NEW_QUESTION"), Schema.Literal("UPDATED_QUESTION"), Schema.Literal("NEW_ANSWER"), Schema.Literal("UPDATED_ANSWER"), Schema.Literal("UPDATED_LOCATION_STATE")))),
  topicName: Schema.optional(Schema.String),
});

/** This message denotes nutrition information with an upper bound and lower bound range and can be represented by mass unit. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
export interface LegacyV4NutritionFact {
  readonly lowerAmount?: number;
  readonly unit?: "MASS_UNIT_UNSPECIFIED" | "GRAM" | "MILLIGRAM";
  readonly upperAmount?: number;
}
export interface LegacyV4NutritionFactEncoded {
  readonly lowerAmount?: number;
  readonly unit?: "MASS_UNIT_UNSPECIFIED" | "GRAM" | "MILLIGRAM";
  readonly upperAmount?: number;
}
export const LegacyV4NutritionFact: Schema.Schema<LegacyV4NutritionFact, LegacyV4NutritionFactEncoded, never> = Schema.Struct({
  lowerAmount: Schema.optional(Schema.Number),
  unit: Schema.optional(Schema.Union(Schema.Literal("MASS_UNIT_UNSPECIFIED"), Schema.Literal("GRAM"), Schema.Literal("MILLIGRAM"))),
  upperAmount: Schema.optional(Schema.Number),
});

/** This message represents nutrition facts for a food dish. */
export interface LegacyV4NutritionFacts {
  readonly calories?: LegacyV4CaloriesFact;
  readonly cholesterol?: LegacyV4NutritionFact;
  readonly protein?: LegacyV4NutritionFact;
  readonly sodium?: LegacyV4NutritionFact;
  readonly totalCarbohydrate?: LegacyV4NutritionFact;
  readonly totalFat?: LegacyV4NutritionFact;
}
export interface LegacyV4NutritionFactsEncoded {
  readonly calories?: LegacyV4CaloriesFactEncoded;
  readonly cholesterol?: LegacyV4NutritionFactEncoded;
  readonly protein?: LegacyV4NutritionFactEncoded;
  readonly sodium?: LegacyV4NutritionFactEncoded;
  readonly totalCarbohydrate?: LegacyV4NutritionFactEncoded;
  readonly totalFat?: LegacyV4NutritionFactEncoded;
}
export const LegacyV4NutritionFacts: Schema.Schema<LegacyV4NutritionFacts, LegacyV4NutritionFactsEncoded, never> = Schema.Struct({
  calories: Schema.optional(Schema.suspend(() => LegacyV4CaloriesFact)),
  cholesterol: Schema.optional(Schema.suspend(() => LegacyV4NutritionFact)),
  protein: Schema.optional(Schema.suspend(() => LegacyV4NutritionFact)),
  sodium: Schema.optional(Schema.suspend(() => LegacyV4NutritionFact)),
  totalCarbohydrate: Schema.optional(Schema.suspend(() => LegacyV4NutritionFact)),
  totalFat: Schema.optional(Schema.suspend(() => LegacyV4NutritionFact)),
});

/** Information related to the opening state of the business. */
export interface LegacyV4OpenInfo {
  readonly canReopen?: boolean;
  readonly openingDate?: LegacyV4Date;
  readonly status?: "OPEN_FOR_BUSINESS_UNSPECIFIED" | "OPEN" | "CLOSED_PERMANENTLY" | "CLOSED_TEMPORARILY";
}
export interface LegacyV4OpenInfoEncoded {
  readonly canReopen?: boolean;
  readonly openingDate?: LegacyV4DateEncoded;
  readonly status?: "OPEN_FOR_BUSINESS_UNSPECIFIED" | "OPEN" | "CLOSED_PERMANENTLY" | "CLOSED_TEMPORARILY";
}
export const LegacyV4OpenInfo: Schema.Schema<LegacyV4OpenInfo, LegacyV4OpenInfoEncoded, never> = Schema.Struct({
  canReopen: Schema.optional(Schema.Boolean),
  openingDate: Schema.optional(Schema.suspend(() => LegacyV4Date)),
  status: Schema.optional(Schema.Union(Schema.Literal("OPEN_FOR_BUSINESS_UNSPECIFIED"), Schema.Literal("OPEN"), Schema.Literal("CLOSED_PERMANENTLY"), Schema.Literal("CLOSED_TEMPORARILY"))),
});

/** Additional Info stored for an organization. */
export interface LegacyV4OrganizationInfo {
  readonly phoneNumber?: string;
  readonly postalAddress?: LegacyV4PostalAddress;
  readonly registeredDomain?: string;
}
export interface LegacyV4OrganizationInfoEncoded {
  readonly phoneNumber?: string;
  readonly postalAddress?: LegacyV4PostalAddressEncoded;
  readonly registeredDomain?: string;
}
export const LegacyV4OrganizationInfo: Schema.Schema<LegacyV4OrganizationInfo, LegacyV4OrganizationInfoEncoded, never> = Schema.Struct({
  phoneNumber: Schema.optional(Schema.String),
  postalAddress: Schema.optional(Schema.suspend(() => LegacyV4PostalAddress)),
  registeredDomain: Schema.optional(Schema.String),
});

/** Parking options at the property. */
export interface LegacyV4Parking {
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
}
export interface LegacyV4ParkingEncoded {
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
}
export const LegacyV4Parking: Schema.Schema<LegacyV4Parking, LegacyV4ParkingEncoded, never> = Schema.Struct({
  electricCarChargingStations: Schema.optional(Schema.Boolean),
  electricCarChargingStationsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeParking: Schema.optional(Schema.Boolean),
  freeParkingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeSelfParking: Schema.optional(Schema.Boolean),
  freeSelfParkingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeValetParking: Schema.optional(Schema.Boolean),
  freeValetParkingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  parkingAvailable: Schema.optional(Schema.Boolean),
  parkingAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  selfParkingAvailable: Schema.optional(Schema.Boolean),
  selfParkingAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  valetParkingAvailable: Schema.optional(Schema.Boolean),
  valetParkingAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Forms of payment accepted at the property. */
export interface LegacyV4PaymentOptions {
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
}
export interface LegacyV4PaymentOptionsEncoded {
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
}
export const LegacyV4PaymentOptions: Schema.Schema<LegacyV4PaymentOptions, LegacyV4PaymentOptionsEncoded, never> = Schema.Struct({
  cash: Schema.optional(Schema.Boolean),
  cashException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  cheque: Schema.optional(Schema.Boolean),
  chequeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  creditCard: Schema.optional(Schema.Boolean),
  creditCardException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  debitCard: Schema.optional(Schema.Boolean),
  debitCardException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobileNfc: Schema.optional(Schema.Boolean),
  mobileNfcException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Personal protection measures implemented by the hotel during COVID-19. */
export interface LegacyV4PersonalProtection {
  readonly commonAreasOfferSanitizingItems?: boolean;
  readonly commonAreasOfferSanitizingItemsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly faceMaskRequired?: boolean;
  readonly faceMaskRequiredException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly guestRoomHygieneKitsAvailable?: boolean;
  readonly guestRoomHygieneKitsAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly protectiveEquipmentAvailable?: boolean;
  readonly protectiveEquipmentAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LegacyV4PersonalProtectionEncoded {
  readonly commonAreasOfferSanitizingItems?: boolean;
  readonly commonAreasOfferSanitizingItemsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly faceMaskRequired?: boolean;
  readonly faceMaskRequiredException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly guestRoomHygieneKitsAvailable?: boolean;
  readonly guestRoomHygieneKitsAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly protectiveEquipmentAvailable?: boolean;
  readonly protectiveEquipmentAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LegacyV4PersonalProtection: Schema.Schema<LegacyV4PersonalProtection, LegacyV4PersonalProtectionEncoded, never> = Schema.Struct({
  commonAreasOfferSanitizingItems: Schema.optional(Schema.Boolean),
  commonAreasOfferSanitizingItemsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  faceMaskRequired: Schema.optional(Schema.Boolean),
  faceMaskRequiredException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  guestRoomHygieneKitsAvailable: Schema.optional(Schema.Boolean),
  guestRoomHygieneKitsAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  protectiveEquipmentAvailable: Schema.optional(Schema.Boolean),
  protectiveEquipmentAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Policies regarding guest-owned animals. */
export interface LegacyV4Pets {
  readonly catsAllowed?: boolean;
  readonly catsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly dogsAllowed?: boolean;
  readonly dogsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly petsAllowed?: boolean;
  readonly petsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly petsAllowedFree?: boolean;
  readonly petsAllowedFreeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LegacyV4PetsEncoded {
  readonly catsAllowed?: boolean;
  readonly catsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly dogsAllowed?: boolean;
  readonly dogsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly petsAllowed?: boolean;
  readonly petsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly petsAllowedFree?: boolean;
  readonly petsAllowedFreeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LegacyV4Pets: Schema.Schema<LegacyV4Pets, LegacyV4PetsEncoded, never> = Schema.Struct({
  catsAllowed: Schema.optional(Schema.Boolean),
  catsAllowedException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  dogsAllowed: Schema.optional(Schema.Boolean),
  dogsAllowedException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  petsAllowed: Schema.optional(Schema.Boolean),
  petsAllowedException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  petsAllowedFree: Schema.optional(Schema.Boolean),
  petsAllowedFreeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Input for PHONE_CALL/SMS verification. */
export interface LegacyV4PhoneInput {
  readonly phoneNumber?: string;
}
export interface LegacyV4PhoneInputEncoded {
  readonly phoneNumber?: string;
}
export const LegacyV4PhoneInput: Schema.Schema<LegacyV4PhoneInput, LegacyV4PhoneInputEncoded, never> = Schema.Struct({
  phoneNumber: Schema.optional(Schema.String),
});

/** Display Data for verifications through phone, e.g. phone call, sms. */
export interface LegacyV4PhoneVerificationData {
  readonly phoneNumber?: string;
}
export interface LegacyV4PhoneVerificationDataEncoded {
  readonly phoneNumber?: string;
}
export const LegacyV4PhoneVerificationData: Schema.Schema<LegacyV4PhoneVerificationData, LegacyV4PhoneVerificationDataEncoded, never> = Schema.Struct({
  phoneNumber: Schema.optional(Schema.String),
});

/** Physical distancing measures implemented by the hotel during COVID-19. */
export interface LegacyV4PhysicalDistancing {
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
}
export interface LegacyV4PhysicalDistancingEncoded {
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
}
export const LegacyV4PhysicalDistancing: Schema.Schema<LegacyV4PhysicalDistancing, LegacyV4PhysicalDistancingEncoded, never> = Schema.Struct({
  commonAreasPhysicalDistancingArranged: Schema.optional(Schema.Boolean),
  commonAreasPhysicalDistancingArrangedException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  physicalDistancingRequired: Schema.optional(Schema.Boolean),
  physicalDistancingRequiredException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  safetyDividers: Schema.optional(Schema.Boolean),
  safetyDividersException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  sharedAreasLimitedOccupancy: Schema.optional(Schema.Boolean),
  sharedAreasLimitedOccupancyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  wellnessAreasHavePrivateSpaces: Schema.optional(Schema.Boolean),
  wellnessAreasHavePrivateSpacesException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Defines an area that's represented by a place ID. */
export interface LegacyV4PlaceInfo {
  readonly name?: string;
  readonly placeId?: string;
}
export interface LegacyV4PlaceInfoEncoded {
  readonly name?: string;
  readonly placeId?: string;
}
export const LegacyV4PlaceInfo: Schema.Schema<LegacyV4PlaceInfo, LegacyV4PlaceInfoEncoded, never> = Schema.Struct({
  name: Schema.optional(Schema.String),
  placeId: Schema.optional(Schema.String),
});

/** Defines the union of areas represented by a set of places. */
export interface LegacyV4Places {
  readonly placeInfos?: ReadonlyArray<LegacyV4PlaceInfo>;
}
export interface LegacyV4PlacesEncoded {
  readonly placeInfos?: ReadonlyArray<LegacyV4PlaceInfoEncoded>;
}
export const LegacyV4Places: Schema.Schema<LegacyV4Places, LegacyV4PlacesEncoded, never> = Schema.Struct({
  placeInfos: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4PlaceInfo))),
});

/** A radius around a particular point (latitude/longitude). */
export interface LegacyV4PointRadius {
  readonly latlng?: LegacyV4LatLng;
  readonly radiusKm?: number;
}
export interface LegacyV4PointRadiusEncoded {
  readonly latlng?: LegacyV4LatLngEncoded;
  readonly radiusKm?: number;
}
export const LegacyV4PointRadius: Schema.Schema<LegacyV4PointRadius, LegacyV4PointRadiusEncoded, never> = Schema.Struct({
  latlng: Schema.optional(Schema.suspend(() => LegacyV4LatLng)),
  radiusKm: Schema.optional(Schema.Number),
});

/** Property rules that impact guests. */
export interface LegacyV4Policies {
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
}
export interface LegacyV4PoliciesEncoded {
  readonly allInclusiveAvailable?: boolean;
  readonly allInclusiveAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly allInclusiveOnly?: boolean;
  readonly allInclusiveOnlyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly checkinTime?: LegacyV4TimeOfDayEncoded;
  readonly checkinTimeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly checkoutTime?: LegacyV4TimeOfDayEncoded;
  readonly checkoutTimeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsStayFree?: boolean;
  readonly kidsStayFreeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly maxChildAge?: number;
  readonly maxChildAgeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly maxKidsStayFreeCount?: number;
  readonly maxKidsStayFreeCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly paymentOptions?: LegacyV4PaymentOptionsEncoded;
  readonly smokeFreeProperty?: boolean;
  readonly smokeFreePropertyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LegacyV4Policies: Schema.Schema<LegacyV4Policies, LegacyV4PoliciesEncoded, never> = Schema.Struct({
  allInclusiveAvailable: Schema.optional(Schema.Boolean),
  allInclusiveAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  allInclusiveOnly: Schema.optional(Schema.Boolean),
  allInclusiveOnlyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  checkinTime: Schema.optional(Schema.suspend(() => LegacyV4TimeOfDay)),
  checkinTimeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  checkoutTime: Schema.optional(Schema.suspend(() => LegacyV4TimeOfDay)),
  checkoutTimeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  kidsStayFree: Schema.optional(Schema.Boolean),
  kidsStayFreeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  maxChildAge: Schema.optional(Schema.Int),
  maxChildAgeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  maxKidsStayFreeCount: Schema.optional(Schema.Int),
  maxKidsStayFreeCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  paymentOptions: Schema.optional(Schema.suspend(() => LegacyV4PaymentOptions)),
  smokeFreeProperty: Schema.optional(Schema.Boolean),
  smokeFreePropertyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Swimming pool or recreational water facilities available at the hotel. */
export interface LegacyV4Pools {
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
}
export interface LegacyV4PoolsEncoded {
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
}
export const LegacyV4Pools: Schema.Schema<LegacyV4Pools, LegacyV4PoolsEncoded, never> = Schema.Struct({
  adultPool: Schema.optional(Schema.Boolean),
  adultPoolException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  hotTub: Schema.optional(Schema.Boolean),
  hotTubException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  indoorPool: Schema.optional(Schema.Boolean),
  indoorPoolException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  indoorPoolsCount: Schema.optional(Schema.Int),
  indoorPoolsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  lazyRiver: Schema.optional(Schema.Boolean),
  lazyRiverException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  lifeguard: Schema.optional(Schema.Boolean),
  lifeguardException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  outdoorPool: Schema.optional(Schema.Boolean),
  outdoorPoolException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  outdoorPoolsCount: Schema.optional(Schema.Int),
  outdoorPoolsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  pool: Schema.optional(Schema.Boolean),
  poolException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  poolsCount: Schema.optional(Schema.Int),
  poolsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  wadingPool: Schema.optional(Schema.Boolean),
  wadingPoolException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  waterPark: Schema.optional(Schema.Boolean),
  waterParkException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  waterslide: Schema.optional(Schema.Boolean),
  waterslideException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  wavePool: Schema.optional(Schema.Boolean),
  wavePoolException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Serving portion size of a food dish. */
export interface LegacyV4PortionSize {
  readonly quantity?: number;
  readonly unit?: ReadonlyArray<LegacyV4MenuLabel>;
}
export interface LegacyV4PortionSizeEncoded {
  readonly quantity?: number;
  readonly unit?: ReadonlyArray<LegacyV4MenuLabelEncoded>;
}
export const LegacyV4PortionSize: Schema.Schema<LegacyV4PortionSize, LegacyV4PortionSizeEncoded, never> = Schema.Struct({
  quantity: Schema.optional(Schema.Int),
  unit: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4MenuLabel))),
});

/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
export interface LegacyV4PostalAddress {
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
}
export interface LegacyV4PostalAddressEncoded {
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
}
export const LegacyV4PostalAddress: Schema.Schema<LegacyV4PostalAddress, LegacyV4PostalAddressEncoded, never> = Schema.Struct({
  addressLines: Schema.optional(Schema.Array(Schema.String)),
  administrativeArea: Schema.optional(Schema.String),
  languageCode: Schema.optional(Schema.String),
  locality: Schema.optional(Schema.String),
  organization: Schema.optional(Schema.String),
  postalCode: Schema.optional(Schema.String),
  recipients: Schema.optional(Schema.Array(Schema.String)),
  regionCode: Schema.optional(Schema.String),
  revision: Schema.optional(Schema.Int),
  sortingCode: Schema.optional(Schema.String),
  sublocality: Schema.optional(Schema.String),
});

/** A list of item price information. Price lists are structured as one or more price lists, each containing one or more sections with one or more items. For example, food price lists may represent breakfast/lunch/dinner menus, with sections for burgers/steak/seafood. */
export interface LegacyV4PriceList {
  readonly labels?: ReadonlyArray<LegacyV4Label>;
  readonly priceListId?: string;
  readonly sections?: ReadonlyArray<LegacyV4Section>;
  readonly sourceUrl?: string;
}
export interface LegacyV4PriceListEncoded {
  readonly labels?: ReadonlyArray<LegacyV4LabelEncoded>;
  readonly priceListId?: string;
  readonly sections?: ReadonlyArray<LegacyV4SectionEncoded>;
  readonly sourceUrl?: string;
}
export const LegacyV4PriceList: Schema.Schema<LegacyV4PriceList, LegacyV4PriceListEncoded, never> = Schema.Struct({
  labels: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Label))),
  priceListId: Schema.optional(Schema.String),
  sections: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Section))),
  sourceUrl: Schema.optional(Schema.String),
});

/** All information pertaining to the location's profile. */
export interface LegacyV4Profile {
  readonly description?: string;
}
export interface LegacyV4ProfileEncoded {
  readonly description?: string;
}
export const LegacyV4Profile: Schema.Schema<LegacyV4Profile, LegacyV4ProfileEncoded, never> = Schema.Struct({
  description: Schema.optional(Schema.String),
});

/** General factual information about the property's physical structure and important dates. */
export interface LegacyV4Property {
  readonly builtYear?: number;
  readonly builtYearException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly floorsCount?: number;
  readonly floorsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly lastRenovatedYear?: number;
  readonly lastRenovatedYearException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly roomsCount?: number;
  readonly roomsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LegacyV4PropertyEncoded {
  readonly builtYear?: number;
  readonly builtYearException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly floorsCount?: number;
  readonly floorsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly lastRenovatedYear?: number;
  readonly lastRenovatedYearException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly roomsCount?: number;
  readonly roomsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LegacyV4Property: Schema.Schema<LegacyV4Property, LegacyV4PropertyEncoded, never> = Schema.Struct({
  builtYear: Schema.optional(Schema.Int),
  builtYearException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  floorsCount: Schema.optional(Schema.Int),
  floorsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  lastRenovatedYear: Schema.optional(Schema.Int),
  lastRenovatedYearException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  roomsCount: Schema.optional(Schema.Int),
  roomsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Represents a single question and some of its answers. */
export interface LegacyV4Question {
  readonly author?: LegacyV4Author;
  readonly createTime?: string;
  readonly name?: string;
  readonly text?: string;
  readonly topAnswers?: ReadonlyArray<LegacyV4Answer>;
  readonly totalAnswerCount?: number;
  readonly updateTime?: string;
  readonly upvoteCount?: number;
}
export interface LegacyV4QuestionEncoded {
  readonly author?: LegacyV4AuthorEncoded;
  readonly createTime?: string;
  readonly name?: string;
  readonly text?: string;
  readonly topAnswers?: ReadonlyArray<LegacyV4AnswerEncoded>;
  readonly totalAnswerCount?: number;
  readonly updateTime?: string;
  readonly upvoteCount?: number;
}
export const LegacyV4Question: Schema.Schema<LegacyV4Question, LegacyV4QuestionEncoded, never> = Schema.Struct({
  author: Schema.optional(Schema.suspend(() => LegacyV4Author)),
  createTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  text: Schema.optional(Schema.String),
  topAnswers: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Answer))),
  totalAnswerCount: Schema.optional(Schema.Int),
  updateTime: Schema.optional(Schema.String),
  upvoteCount: Schema.optional(Schema.Int),
});

/** A region with its associated request count. */
export interface LegacyV4RegionCount {
  readonly count?: string;
  readonly label?: string;
  readonly latlng?: LegacyV4LatLng;
}
export interface LegacyV4RegionCountEncoded {
  readonly count?: string;
  readonly label?: string;
  readonly latlng?: LegacyV4LatLngEncoded;
}
export const LegacyV4RegionCount: Schema.Schema<LegacyV4RegionCount, LegacyV4RegionCountEncoded, never> = Schema.Struct({
  count: Schema.optional(Schema.String),
  label: Schema.optional(Schema.String),
  latlng: Schema.optional(Schema.suspend(() => LegacyV4LatLng)),
});

/** Information of all parent and children locations related to this one. */
export interface LegacyV4RelationshipData {
  readonly parentChain?: string;
}
export interface LegacyV4RelationshipDataEncoded {
  readonly parentChain?: string;
}
export const LegacyV4RelationshipData: Schema.Schema<LegacyV4RelationshipData, LegacyV4RelationshipDataEncoded, never> = Schema.Struct({
  parentChain: Schema.optional(Schema.String),
});

/** Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified. */
export interface LegacyV4RepeatedEnumAttributeValue {
  readonly setValues?: ReadonlyArray<string>;
  readonly unsetValues?: ReadonlyArray<string>;
}
export interface LegacyV4RepeatedEnumAttributeValueEncoded {
  readonly setValues?: ReadonlyArray<string>;
  readonly unsetValues?: ReadonlyArray<string>;
}
export const LegacyV4RepeatedEnumAttributeValue: Schema.Schema<LegacyV4RepeatedEnumAttributeValue, LegacyV4RepeatedEnumAttributeValueEncoded, never> = Schema.Struct({
  setValues: Schema.optional(Schema.Array(Schema.String)),
  unsetValues: Schema.optional(Schema.Array(Schema.String)),
});

/** Request message for reporting a GoogleLocation. */
export interface LegacyV4ReportGoogleLocationRequest {
  readonly locationGroupName?: string;
  readonly reportReasonBadLocation?: "BAD_LOCATION_REASON_UNSPECIFIED" | "NOT_A_LOCATION" | "PERMANENTLY_CLOSED" | "DOES_NOT_EXIST" | "SPAM" | "NOT_A_BUSINESS" | "MOVED" | "DUPLICATE";
  readonly reportReasonBadRecommendation?: "BAD_RECOMMENDATION_REASON_UNSPECIFIED" | "NOT_A_STORE_FRONT" | "NOT_PART_OF_SUGGESTED_CHAIN" | "IRRELEVANT";
  readonly reportReasonElaboration?: string;
  readonly reportReasonLanguageCode?: string;
}
export interface LegacyV4ReportGoogleLocationRequestEncoded {
  readonly locationGroupName?: string;
  readonly reportReasonBadLocation?: "BAD_LOCATION_REASON_UNSPECIFIED" | "NOT_A_LOCATION" | "PERMANENTLY_CLOSED" | "DOES_NOT_EXIST" | "SPAM" | "NOT_A_BUSINESS" | "MOVED" | "DUPLICATE";
  readonly reportReasonBadRecommendation?: "BAD_RECOMMENDATION_REASON_UNSPECIFIED" | "NOT_A_STORE_FRONT" | "NOT_PART_OF_SUGGESTED_CHAIN" | "IRRELEVANT";
  readonly reportReasonElaboration?: string;
  readonly reportReasonLanguageCode?: string;
}
export const LegacyV4ReportGoogleLocationRequest: Schema.Schema<LegacyV4ReportGoogleLocationRequest, LegacyV4ReportGoogleLocationRequestEncoded, never> = Schema.Struct({
  locationGroupName: Schema.optional(Schema.String),
  reportReasonBadLocation: Schema.optional(Schema.Union(Schema.Literal("BAD_LOCATION_REASON_UNSPECIFIED"), Schema.Literal("NOT_A_LOCATION"), Schema.Literal("PERMANENTLY_CLOSED"), Schema.Literal("DOES_NOT_EXIST"), Schema.Literal("SPAM"), Schema.Literal("NOT_A_BUSINESS"), Schema.Literal("MOVED"), Schema.Literal("DUPLICATE"))),
  reportReasonBadRecommendation: Schema.optional(Schema.Union(Schema.Literal("BAD_RECOMMENDATION_REASON_UNSPECIFIED"), Schema.Literal("NOT_A_STORE_FRONT"), Schema.Literal("NOT_PART_OF_SUGGESTED_CHAIN"), Schema.Literal("IRRELEVANT"))),
  reportReasonElaboration: Schema.optional(Schema.String),
  reportReasonLanguageCode: Schema.optional(Schema.String),
});

/** Request message for Insights.ReportLocalPostInsights */
export interface LegacyV4ReportLocalPostInsightsRequest {
  readonly basicRequest?: LegacyV4BasicMetricsRequest;
  readonly localPostNames?: ReadonlyArray<string>;
}
export interface LegacyV4ReportLocalPostInsightsRequestEncoded {
  readonly basicRequest?: LegacyV4BasicMetricsRequestEncoded;
  readonly localPostNames?: ReadonlyArray<string>;
}
export const LegacyV4ReportLocalPostInsightsRequest: Schema.Schema<LegacyV4ReportLocalPostInsightsRequest, LegacyV4ReportLocalPostInsightsRequestEncoded, never> = Schema.Struct({
  basicRequest: Schema.optional(Schema.suspend(() => LegacyV4BasicMetricsRequest)),
  localPostNames: Schema.optional(Schema.Array(Schema.String)),
});

/** Response message for Insights.ReportLocalPostInsights */
export interface LegacyV4ReportLocalPostInsightsResponse {
  readonly localPostMetrics?: ReadonlyArray<LegacyV4LocalPostMetrics>;
  readonly name?: string;
  readonly timeZone?: string;
}
export interface LegacyV4ReportLocalPostInsightsResponseEncoded {
  readonly localPostMetrics?: ReadonlyArray<LegacyV4LocalPostMetricsEncoded>;
  readonly name?: string;
  readonly timeZone?: string;
}
export const LegacyV4ReportLocalPostInsightsResponse: Schema.Schema<LegacyV4ReportLocalPostInsightsResponse, LegacyV4ReportLocalPostInsightsResponseEncoded, never> = Schema.Struct({
  localPostMetrics: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4LocalPostMetrics))),
  name: Schema.optional(Schema.String),
  timeZone: Schema.optional(Schema.String),
});

/** Request message for Insights.ReportLocationInsights. */
export interface LegacyV4ReportLocationInsightsRequest {
  readonly basicRequest?: LegacyV4BasicMetricsRequest;
  readonly drivingDirectionsRequest?: LegacyV4DrivingDirectionMetricsRequest;
  readonly locationNames?: ReadonlyArray<string>;
}
export interface LegacyV4ReportLocationInsightsRequestEncoded {
  readonly basicRequest?: LegacyV4BasicMetricsRequestEncoded;
  readonly drivingDirectionsRequest?: LegacyV4DrivingDirectionMetricsRequestEncoded;
  readonly locationNames?: ReadonlyArray<string>;
}
export const LegacyV4ReportLocationInsightsRequest: Schema.Schema<LegacyV4ReportLocationInsightsRequest, LegacyV4ReportLocationInsightsRequestEncoded, never> = Schema.Struct({
  basicRequest: Schema.optional(Schema.suspend(() => LegacyV4BasicMetricsRequest)),
  drivingDirectionsRequest: Schema.optional(Schema.suspend(() => LegacyV4DrivingDirectionMetricsRequest)),
  locationNames: Schema.optional(Schema.Array(Schema.String)),
});

/** Response message for `Insights.ReportLocationInsights`. */
export interface LegacyV4ReportLocationInsightsResponse {
  readonly locationDrivingDirectionMetrics?: ReadonlyArray<LegacyV4LocationDrivingDirectionMetrics>;
  readonly locationMetrics?: ReadonlyArray<LegacyV4LocationMetrics>;
}
export interface LegacyV4ReportLocationInsightsResponseEncoded {
  readonly locationDrivingDirectionMetrics?: ReadonlyArray<LegacyV4LocationDrivingDirectionMetricsEncoded>;
  readonly locationMetrics?: ReadonlyArray<LegacyV4LocationMetricsEncoded>;
}
export const LegacyV4ReportLocationInsightsResponse: Schema.Schema<LegacyV4ReportLocationInsightsResponse, LegacyV4ReportLocationInsightsResponseEncoded, never> = Schema.Struct({
  locationDrivingDirectionMetrics: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4LocationDrivingDirectionMetrics))),
  locationMetrics: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4LocationMetrics))),
});

/** Output only. Represents a review for a location. */
export interface LegacyV4Review {
  readonly comment?: string;
  readonly createTime?: string;
  readonly name?: string;
  readonly reviewer?: LegacyV4Reviewer;
  readonly reviewId?: string;
  readonly reviewReply?: LegacyV4ReviewReply;
  readonly starRating?: "STAR_RATING_UNSPECIFIED" | "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";
  readonly updateTime?: string;
}
export interface LegacyV4ReviewEncoded {
  readonly comment?: string;
  readonly createTime?: string;
  readonly name?: string;
  readonly reviewer?: LegacyV4ReviewerEncoded;
  readonly reviewId?: string;
  readonly reviewReply?: LegacyV4ReviewReplyEncoded;
  readonly starRating?: "STAR_RATING_UNSPECIFIED" | "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";
  readonly updateTime?: string;
}
export const LegacyV4Review: Schema.Schema<LegacyV4Review, LegacyV4ReviewEncoded, never> = Schema.Struct({
  comment: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  reviewer: Schema.optional(Schema.suspend(() => LegacyV4Reviewer)),
  reviewId: Schema.optional(Schema.String),
  reviewReply: Schema.optional(Schema.suspend(() => LegacyV4ReviewReply)),
  starRating: Schema.optional(Schema.Union(Schema.Literal("STAR_RATING_UNSPECIFIED"), Schema.Literal("ONE"), Schema.Literal("TWO"), Schema.Literal("THREE"), Schema.Literal("FOUR"), Schema.Literal("FIVE"))),
  updateTime: Schema.optional(Schema.String),
});

/** Represents the author of the review. */
export interface LegacyV4Reviewer {
  readonly displayName?: string;
  readonly isAnonymous?: boolean;
  readonly profilePhotoUrl?: string;
}
export interface LegacyV4ReviewerEncoded {
  readonly displayName?: string;
  readonly isAnonymous?: boolean;
  readonly profilePhotoUrl?: string;
}
export const LegacyV4Reviewer: Schema.Schema<LegacyV4Reviewer, LegacyV4ReviewerEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  isAnonymous: Schema.optional(Schema.Boolean),
  profilePhotoUrl: Schema.optional(Schema.String),
});

/** Represents the location owner/manager's reply to a review. */
export interface LegacyV4ReviewReply {
  readonly comment?: string;
  readonly updateTime?: string;
}
export interface LegacyV4ReviewReplyEncoded {
  readonly comment?: string;
  readonly updateTime?: string;
}
export const LegacyV4ReviewReply: Schema.Schema<LegacyV4ReviewReply, LegacyV4ReviewReplyEncoded, never> = Schema.Struct({
  comment: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
});

/** Response message for Locations.SearchChains. */
export interface LegacyV4SearchChainsResponse {
  readonly chains?: ReadonlyArray<LegacyV4Chain>;
}
export interface LegacyV4SearchChainsResponseEncoded {
  readonly chains?: ReadonlyArray<LegacyV4ChainEncoded>;
}
export const LegacyV4SearchChainsResponse: Schema.Schema<LegacyV4SearchChainsResponse, LegacyV4SearchChainsResponseEncoded, never> = Schema.Struct({
  chains: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Chain))),
});

/** Request message for GoogleLocations.SearchGoogleLocations. */
export interface LegacyV4SearchGoogleLocationsRequest {
  readonly location?: LegacyV4Location;
  readonly query?: string;
  readonly resultCount?: number;
}
export interface LegacyV4SearchGoogleLocationsRequestEncoded {
  readonly location?: LegacyV4LocationEncoded;
  readonly query?: string;
  readonly resultCount?: number;
}
export const LegacyV4SearchGoogleLocationsRequest: Schema.Schema<LegacyV4SearchGoogleLocationsRequest, LegacyV4SearchGoogleLocationsRequestEncoded, never> = Schema.Struct({
  location: Schema.optional(Schema.suspend(() => LegacyV4Location)),
  query: Schema.optional(Schema.String),
  resultCount: Schema.optional(Schema.Int),
});

/** Response message for GoogleLocations.SearchGoogleLocations. */
export interface LegacyV4SearchGoogleLocationsResponse {
  readonly googleLocations?: ReadonlyArray<LegacyV4GoogleLocation>;
}
export interface LegacyV4SearchGoogleLocationsResponseEncoded {
  readonly googleLocations?: ReadonlyArray<LegacyV4GoogleLocationEncoded>;
}
export const LegacyV4SearchGoogleLocationsResponse: Schema.Schema<LegacyV4SearchGoogleLocationsResponse, LegacyV4SearchGoogleLocationsResponseEncoded, never> = Schema.Struct({
  googleLocations: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4GoogleLocation))),
});

/** A section of the price list containing one or more items. */
export interface LegacyV4Section {
  readonly items?: ReadonlyArray<LegacyV4Item>;
  readonly labels?: ReadonlyArray<LegacyV4Label>;
  readonly sectionId?: string;
  readonly sectionType?: "SECTION_TYPE_UNSPECIFIED" | "FOOD" | "SERVICES";
}
export interface LegacyV4SectionEncoded {
  readonly items?: ReadonlyArray<LegacyV4ItemEncoded>;
  readonly labels?: ReadonlyArray<LegacyV4LabelEncoded>;
  readonly sectionId?: string;
  readonly sectionType?: "SECTION_TYPE_UNSPECIFIED" | "FOOD" | "SERVICES";
}
export const LegacyV4Section: Schema.Schema<LegacyV4Section, LegacyV4SectionEncoded, never> = Schema.Struct({
  items: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Item))),
  labels: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4Label))),
  sectionId: Schema.optional(Schema.String),
  sectionType: Schema.optional(Schema.Union(Schema.Literal("SECTION_TYPE_UNSPECIFIED"), Schema.Literal("FOOD"), Schema.Literal("SERVICES"))),
});

/** Service area businesses provide their service at the customer's location (for example, a locksmith or plumber). */
export interface LegacyV4ServiceAreaBusiness {
  readonly businessType?: "BUSINESS_TYPE_UNSPECIFIED" | "CUSTOMER_LOCATION_ONLY" | "CUSTOMER_AND_BUSINESS_LOCATION";
  readonly places?: LegacyV4Places;
  readonly radius?: LegacyV4PointRadius;
}
export interface LegacyV4ServiceAreaBusinessEncoded {
  readonly businessType?: "BUSINESS_TYPE_UNSPECIFIED" | "CUSTOMER_LOCATION_ONLY" | "CUSTOMER_AND_BUSINESS_LOCATION";
  readonly places?: LegacyV4PlacesEncoded;
  readonly radius?: LegacyV4PointRadiusEncoded;
}
export const LegacyV4ServiceAreaBusiness: Schema.Schema<LegacyV4ServiceAreaBusiness, LegacyV4ServiceAreaBusinessEncoded, never> = Schema.Struct({
  businessType: Schema.optional(Schema.Union(Schema.Literal("BUSINESS_TYPE_UNSPECIFIED"), Schema.Literal("CUSTOMER_LOCATION_ONLY"), Schema.Literal("CUSTOMER_AND_BUSINESS_LOCATION"))),
  places: Schema.optional(Schema.suspend(() => LegacyV4Places)),
  radius: Schema.optional(Schema.suspend(() => LegacyV4PointRadius)),
});

/** Additional data for service business verification. */
export interface LegacyV4ServiceBusinessContext {
  readonly address?: LegacyV4PostalAddress;
}
export interface LegacyV4ServiceBusinessContextEncoded {
  readonly address?: LegacyV4PostalAddressEncoded;
}
export const LegacyV4ServiceBusinessContext: Schema.Schema<LegacyV4ServiceBusinessContext, LegacyV4ServiceBusinessContextEncoded, never> = Schema.Struct({
  address: Schema.optional(Schema.suspend(() => LegacyV4PostalAddress)),
});

/** A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service. */
export interface LegacyV4ServiceItem {
  readonly freeFormServiceItem?: LegacyV4FreeFormServiceItem;
  readonly isOffered?: boolean;
  readonly price?: LegacyV4Money;
  readonly structuredServiceItem?: LegacyV4StructuredServiceItem;
}
export interface LegacyV4ServiceItemEncoded {
  readonly freeFormServiceItem?: LegacyV4FreeFormServiceItemEncoded;
  readonly isOffered?: boolean;
  readonly price?: LegacyV4MoneyEncoded;
  readonly structuredServiceItem?: LegacyV4StructuredServiceItemEncoded;
}
export const LegacyV4ServiceItem: Schema.Schema<LegacyV4ServiceItem, LegacyV4ServiceItemEncoded, never> = Schema.Struct({
  freeFormServiceItem: Schema.optional(Schema.suspend(() => LegacyV4FreeFormServiceItem)),
  isOffered: Schema.optional(Schema.Boolean),
  price: Schema.optional(Schema.suspend(() => LegacyV4Money)),
  structuredServiceItem: Schema.optional(Schema.suspend(() => LegacyV4StructuredServiceItem)),
});

/** A service list containing one or more service items. */
export interface LegacyV4ServiceList {
  readonly name?: string;
  readonly serviceItems?: ReadonlyArray<LegacyV4ServiceItem>;
}
export interface LegacyV4ServiceListEncoded {
  readonly name?: string;
  readonly serviceItems?: ReadonlyArray<LegacyV4ServiceItemEncoded>;
}
export const LegacyV4ServiceList: Schema.Schema<LegacyV4ServiceList, LegacyV4ServiceListEncoded, never> = Schema.Struct({
  name: Schema.optional(Schema.String),
  serviceItems: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4ServiceItem))),
});

/** Conveniences or help provided by the property to facilitate an easier, more comfortable stay. */
export interface LegacyV4Services {
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
}
export interface LegacyV4ServicesEncoded {
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
  readonly languagesSpoken?: LegacyV4LanguagesSpokenEncoded;
  readonly selfServiceLaundry?: boolean;
  readonly selfServiceLaundryException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly socialHour?: boolean;
  readonly socialHourException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly twentyFourHourFrontDesk?: boolean;
  readonly twentyFourHourFrontDeskException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wakeUpCalls?: boolean;
  readonly wakeUpCallsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LegacyV4Services: Schema.Schema<LegacyV4Services, LegacyV4ServicesEncoded, never> = Schema.Struct({
  baggageStorage: Schema.optional(Schema.Boolean),
  baggageStorageException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  concierge: Schema.optional(Schema.Boolean),
  conciergeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  convenienceStore: Schema.optional(Schema.Boolean),
  convenienceStoreException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  currencyExchange: Schema.optional(Schema.Boolean),
  currencyExchangeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  elevator: Schema.optional(Schema.Boolean),
  elevatorException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  frontDesk: Schema.optional(Schema.Boolean),
  frontDeskException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  fullServiceLaundry: Schema.optional(Schema.Boolean),
  fullServiceLaundryException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  giftShop: Schema.optional(Schema.Boolean),
  giftShopException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  languagesSpoken: Schema.optional(Schema.suspend(() => LegacyV4LanguagesSpoken)),
  selfServiceLaundry: Schema.optional(Schema.Boolean),
  selfServiceLaundryException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  socialHour: Schema.optional(Schema.Boolean),
  socialHourException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  twentyFourHourFrontDesk: Schema.optional(Schema.Boolean),
  twentyFourHourFrontDeskException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  wakeUpCalls: Schema.optional(Schema.Boolean),
  wakeUpCallsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** A message describing a service type that the business offers. */
export interface LegacyV4ServiceType {
  readonly displayName?: string;
  readonly serviceTypeId?: string;
}
export interface LegacyV4ServiceTypeEncoded {
  readonly displayName?: string;
  readonly serviceTypeId?: string;
}
export const LegacyV4ServiceType: Schema.Schema<LegacyV4ServiceType, LegacyV4ServiceTypeEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  serviceTypeId: Schema.optional(Schema.String),
});

/** Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00 */
export interface LegacyV4SpecialHourPeriod {
  readonly closeTime?: string;
  readonly endDate?: LegacyV4Date;
  readonly isClosed?: boolean;
  readonly openTime?: string;
  readonly startDate?: LegacyV4Date;
}
export interface LegacyV4SpecialHourPeriodEncoded {
  readonly closeTime?: string;
  readonly endDate?: LegacyV4DateEncoded;
  readonly isClosed?: boolean;
  readonly openTime?: string;
  readonly startDate?: LegacyV4DateEncoded;
}
export const LegacyV4SpecialHourPeriod: Schema.Schema<LegacyV4SpecialHourPeriod, LegacyV4SpecialHourPeriodEncoded, never> = Schema.Struct({
  closeTime: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.suspend(() => LegacyV4Date)),
  isClosed: Schema.optional(Schema.Boolean),
  openTime: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.suspend(() => LegacyV4Date)),
});

/** Represents a set of time periods when a location's operational hours differ from its normal business hours. */
export interface LegacyV4SpecialHours {
  readonly specialHourPeriods?: ReadonlyArray<LegacyV4SpecialHourPeriod>;
}
export interface LegacyV4SpecialHoursEncoded {
  readonly specialHourPeriods?: ReadonlyArray<LegacyV4SpecialHourPeriodEncoded>;
}
export const LegacyV4SpecialHours: Schema.Schema<LegacyV4SpecialHours, LegacyV4SpecialHoursEncoded, never> = Schema.Struct({
  specialHourPeriods: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4SpecialHourPeriod))),
});

/** Request message for Media.StartUploadMediaItemData. */
export interface LegacyV4StartUploadMediaItemDataRequest {

}
export interface LegacyV4StartUploadMediaItemDataRequestEncoded {

}
export const LegacyV4StartUploadMediaItemDataRequest: Schema.Schema<LegacyV4StartUploadMediaItemDataRequest, LegacyV4StartUploadMediaItemDataRequestEncoded, never> = Schema.Struct({

});

/** Represents a structured service offered by the merchant. For eg: toilet_installation. */
export interface LegacyV4StructuredServiceItem {
  readonly description?: string;
  readonly serviceTypeId?: string;
}
export interface LegacyV4StructuredServiceItemEncoded {
  readonly description?: string;
  readonly serviceTypeId?: string;
}
export const LegacyV4StructuredServiceItem: Schema.Schema<LegacyV4StructuredServiceItem, LegacyV4StructuredServiceItemEncoded, never> = Schema.Struct({
  description: Schema.optional(Schema.String),
  serviceTypeId: Schema.optional(Schema.String),
});

/** Represents a target location for a pending invitation. */
export interface LegacyV4TargetLocation {
  readonly locationAddress?: string;
  readonly locationName?: string;
}
export interface LegacyV4TargetLocationEncoded {
  readonly locationAddress?: string;
  readonly locationName?: string;
}
export const LegacyV4TargetLocation: Schema.Schema<LegacyV4TargetLocation, LegacyV4TargetLocationEncoded, never> = Schema.Struct({
  locationAddress: Schema.optional(Schema.String),
  locationName: Schema.optional(Schema.String),
});

/** The dimension for which data is divided over. */
export interface LegacyV4TimeDimension {
  readonly dayOfWeek?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly timeOfDay?: LegacyV4TimeOfDay;
  readonly timeRange?: LegacyV4TimeRange;
}
export interface LegacyV4TimeDimensionEncoded {
  readonly dayOfWeek?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly timeOfDay?: LegacyV4TimeOfDayEncoded;
  readonly timeRange?: LegacyV4TimeRangeEncoded;
}
export const LegacyV4TimeDimension: Schema.Schema<LegacyV4TimeDimension, LegacyV4TimeDimensionEncoded, never> = Schema.Struct({
  dayOfWeek: Schema.optional(Schema.Union(Schema.Literal("DAY_OF_WEEK_UNSPECIFIED"), Schema.Literal("MONDAY"), Schema.Literal("TUESDAY"), Schema.Literal("WEDNESDAY"), Schema.Literal("THURSDAY"), Schema.Literal("FRIDAY"), Schema.Literal("SATURDAY"), Schema.Literal("SUNDAY"))),
  timeOfDay: Schema.optional(Schema.suspend(() => LegacyV4TimeOfDay)),
  timeRange: Schema.optional(Schema.suspend(() => LegacyV4TimeRange)),
});

/** An interval of time, inclusive. It must contain all fields to be valid. */
export interface LegacyV4TimeInterval {
  readonly endDate?: LegacyV4Date;
  readonly endTime?: LegacyV4TimeOfDay;
  readonly startDate?: LegacyV4Date;
  readonly startTime?: LegacyV4TimeOfDay;
}
export interface LegacyV4TimeIntervalEncoded {
  readonly endDate?: LegacyV4DateEncoded;
  readonly endTime?: LegacyV4TimeOfDayEncoded;
  readonly startDate?: LegacyV4DateEncoded;
  readonly startTime?: LegacyV4TimeOfDayEncoded;
}
export const LegacyV4TimeInterval: Schema.Schema<LegacyV4TimeInterval, LegacyV4TimeIntervalEncoded, never> = Schema.Struct({
  endDate: Schema.optional(Schema.suspend(() => LegacyV4Date)),
  endTime: Schema.optional(Schema.suspend(() => LegacyV4TimeOfDay)),
  startDate: Schema.optional(Schema.suspend(() => LegacyV4Date)),
  startTime: Schema.optional(Schema.suspend(() => LegacyV4TimeOfDay)),
});

/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
export interface LegacyV4TimeOfDay {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
}
export interface LegacyV4TimeOfDayEncoded {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
}
export const LegacyV4TimeOfDay: Schema.Schema<LegacyV4TimeOfDay, LegacyV4TimeOfDayEncoded, never> = Schema.Struct({
  hours: Schema.optional(Schema.Int),
  minutes: Schema.optional(Schema.Int),
  nanos: Schema.optional(Schema.Int),
  seconds: Schema.optional(Schema.Int),
});

/** Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day. */
export interface LegacyV4TimePeriod {
  readonly closeDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly closeTime?: string;
  readonly openDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly openTime?: string;
}
export interface LegacyV4TimePeriodEncoded {
  readonly closeDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly closeTime?: string;
  readonly openDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly openTime?: string;
}
export const LegacyV4TimePeriod: Schema.Schema<LegacyV4TimePeriod, LegacyV4TimePeriodEncoded, never> = Schema.Struct({
  closeDay: Schema.optional(Schema.Union(Schema.Literal("DAY_OF_WEEK_UNSPECIFIED"), Schema.Literal("MONDAY"), Schema.Literal("TUESDAY"), Schema.Literal("WEDNESDAY"), Schema.Literal("THURSDAY"), Schema.Literal("FRIDAY"), Schema.Literal("SATURDAY"), Schema.Literal("SUNDAY"))),
  closeTime: Schema.optional(Schema.String),
  openDay: Schema.optional(Schema.Union(Schema.Literal("DAY_OF_WEEK_UNSPECIFIED"), Schema.Literal("MONDAY"), Schema.Literal("TUESDAY"), Schema.Literal("WEDNESDAY"), Schema.Literal("THURSDAY"), Schema.Literal("FRIDAY"), Schema.Literal("SATURDAY"), Schema.Literal("SUNDAY"))),
  openTime: Schema.optional(Schema.String),
});

/** A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)). */
export interface LegacyV4TimeRange {
  readonly endTime?: string;
  readonly startTime?: string;
}
export interface LegacyV4TimeRangeEncoded {
  readonly endTime?: string;
  readonly startTime?: string;
}
export const LegacyV4TimeRange: Schema.Schema<LegacyV4TimeRange, LegacyV4TimeRangeEncoded, never> = Schema.Struct({
  endTime: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
});

/** Top regions where driving-direction requests originated from. */
export interface LegacyV4TopDirectionSources {
  readonly dayCount?: number;
  readonly regionCounts?: ReadonlyArray<LegacyV4RegionCount>;
}
export interface LegacyV4TopDirectionSourcesEncoded {
  readonly dayCount?: number;
  readonly regionCounts?: ReadonlyArray<LegacyV4RegionCountEncoded>;
}
export const LegacyV4TopDirectionSources: Schema.Schema<LegacyV4TopDirectionSources, LegacyV4TopDirectionSourcesEncoded, never> = Schema.Struct({
  dayCount: Schema.optional(Schema.Int),
  regionCounts: Schema.optional(Schema.Array(Schema.suspend(() => LegacyV4RegionCount))),
});

/** Request message for Locations.TransferLocation. */
export interface LegacyV4TransferLocationRequest {
  readonly toAccount?: string;
}
export interface LegacyV4TransferLocationRequestEncoded {
  readonly toAccount?: string;
}
export const LegacyV4TransferLocationRequest: Schema.Schema<LegacyV4TransferLocationRequest, LegacyV4TransferLocationRequestEncoded, never> = Schema.Struct({
  toAccount: Schema.optional(Schema.String),
});

/** Vehicles or vehicular services facilitated or owned by the property. */
export interface LegacyV4Transportation {
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
}
export interface LegacyV4TransportationEncoded {
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
}
export const LegacyV4Transportation: Schema.Schema<LegacyV4Transportation, LegacyV4TransportationEncoded, never> = Schema.Struct({
  airportShuttle: Schema.optional(Schema.Boolean),
  airportShuttleException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  carRentalOnProperty: Schema.optional(Schema.Boolean),
  carRentalOnPropertyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeAirportShuttle: Schema.optional(Schema.Boolean),
  freeAirportShuttleException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freePrivateCarService: Schema.optional(Schema.Boolean),
  freePrivateCarServiceException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  localShuttle: Schema.optional(Schema.Boolean),
  localShuttleException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  privateCarService: Schema.optional(Schema.Boolean),
  privateCarServiceException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  transfer: Schema.optional(Schema.Boolean),
  transferException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Request message for QuestionsAndAnswers.UpsertAnswer */
export interface LegacyV4UpsertAnswerRequest {
  readonly answer?: LegacyV4Answer;
}
export interface LegacyV4UpsertAnswerRequestEncoded {
  readonly answer?: LegacyV4AnswerEncoded;
}
export const LegacyV4UpsertAnswerRequest: Schema.Schema<LegacyV4UpsertAnswerRequest, LegacyV4UpsertAnswerRequestEncoded, never> = Schema.Struct({
  answer: Schema.optional(Schema.suspend(() => LegacyV4Answer)),
});

/** Values for an attribute with a `value_type` of URL. */
export interface LegacyV4UrlAttributeValue {
  readonly url?: string;
}
export interface LegacyV4UrlAttributeValueEncoded {
  readonly url?: string;
}
export const LegacyV4UrlAttributeValue: Schema.Schema<LegacyV4UrlAttributeValue, LegacyV4UrlAttributeValueEncoded, never> = Schema.Struct({
  url: Schema.optional(Schema.String),
});

/** A verification represents a verification attempt on a location. */
export interface LegacyV4Verification {
  readonly createTime?: string;
  readonly method?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO";
  readonly name?: string;
  readonly state?: "VERIFICATION_STATE_UNSPECIFIED" | "PENDING" | "COMPLETED" | "FAILED";
}
export interface LegacyV4VerificationEncoded {
  readonly createTime?: string;
  readonly method?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO";
  readonly name?: string;
  readonly state?: "VERIFICATION_STATE_UNSPECIFIED" | "PENDING" | "COMPLETED" | "FAILED";
}
export const LegacyV4Verification: Schema.Schema<LegacyV4Verification, LegacyV4VerificationEncoded, never> = Schema.Struct({
  createTime: Schema.optional(Schema.String),
  method: Schema.optional(Schema.Union(Schema.Literal("VERIFICATION_METHOD_UNSPECIFIED"), Schema.Literal("ADDRESS"), Schema.Literal("EMAIL"), Schema.Literal("PHONE_CALL"), Schema.Literal("SMS"), Schema.Literal("AUTO"))),
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.Union(Schema.Literal("VERIFICATION_STATE_UNSPECIFIED"), Schema.Literal("PENDING"), Schema.Literal("COMPLETED"), Schema.Literal("FAILED"))),
});

/** The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data). */
export interface LegacyV4VerificationOption {
  readonly addressData?: LegacyV4AddressVerificationData;
  readonly emailData?: LegacyV4EmailVerificationData;
  readonly phoneData?: LegacyV4PhoneVerificationData;
  readonly verificationMethod?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO";
}
export interface LegacyV4VerificationOptionEncoded {
  readonly addressData?: LegacyV4AddressVerificationDataEncoded;
  readonly emailData?: LegacyV4EmailVerificationDataEncoded;
  readonly phoneData?: LegacyV4PhoneVerificationDataEncoded;
  readonly verificationMethod?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO";
}
export const LegacyV4VerificationOption: Schema.Schema<LegacyV4VerificationOption, LegacyV4VerificationOptionEncoded, never> = Schema.Struct({
  addressData: Schema.optional(Schema.suspend(() => LegacyV4AddressVerificationData)),
  emailData: Schema.optional(Schema.suspend(() => LegacyV4EmailVerificationData)),
  phoneData: Schema.optional(Schema.suspend(() => LegacyV4PhoneVerificationData)),
  verificationMethod: Schema.optional(Schema.Union(Schema.Literal("VERIFICATION_METHOD_UNSPECIFIED"), Schema.Literal("ADDRESS"), Schema.Literal("EMAIL"), Schema.Literal("PHONE_CALL"), Schema.Literal("SMS"), Schema.Literal("AUTO"))),
});

/** Request message for Verifications.VerifyLocation. */
export interface LegacyV4VerifyLocationRequest {
  readonly addressInput?: LegacyV4AddressInput;
  readonly context?: LegacyV4ServiceBusinessContext;
  readonly emailInput?: LegacyV4EmailInput;
  readonly languageCode?: string;
  readonly method?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO";
  readonly phoneInput?: LegacyV4PhoneInput;
}
export interface LegacyV4VerifyLocationRequestEncoded {
  readonly addressInput?: LegacyV4AddressInputEncoded;
  readonly context?: LegacyV4ServiceBusinessContextEncoded;
  readonly emailInput?: LegacyV4EmailInputEncoded;
  readonly languageCode?: string;
  readonly method?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO";
  readonly phoneInput?: LegacyV4PhoneInputEncoded;
}
export const LegacyV4VerifyLocationRequest: Schema.Schema<LegacyV4VerifyLocationRequest, LegacyV4VerifyLocationRequestEncoded, never> = Schema.Struct({
  addressInput: Schema.optional(Schema.suspend(() => LegacyV4AddressInput)),
  context: Schema.optional(Schema.suspend(() => LegacyV4ServiceBusinessContext)),
  emailInput: Schema.optional(Schema.suspend(() => LegacyV4EmailInput)),
  languageCode: Schema.optional(Schema.String),
  method: Schema.optional(Schema.Union(Schema.Literal("VERIFICATION_METHOD_UNSPECIFIED"), Schema.Literal("ADDRESS"), Schema.Literal("EMAIL"), Schema.Literal("PHONE_CALL"), Schema.Literal("SMS"), Schema.Literal("AUTO"))),
  phoneInput: Schema.optional(Schema.suspend(() => LegacyV4PhoneInput)),
});

/** Response message for Verifications.VerifyLocation. */
export interface LegacyV4VerifyLocationResponse {
  readonly verification?: LegacyV4Verification;
}
export interface LegacyV4VerifyLocationResponseEncoded {
  readonly verification?: LegacyV4VerificationEncoded;
}
export const LegacyV4VerifyLocationResponse: Schema.Schema<LegacyV4VerifyLocationResponse, LegacyV4VerifyLocationResponseEncoded, never> = Schema.Struct({
  verification: Schema.optional(Schema.suspend(() => LegacyV4Verification)),
});

/** Views available from the guest unit itself. */
export interface LegacyV4ViewsFromUnit {
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
}
export interface LegacyV4ViewsFromUnitEncoded {
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
}
export const LegacyV4ViewsFromUnit: Schema.Schema<LegacyV4ViewsFromUnit, LegacyV4ViewsFromUnitEncoded, never> = Schema.Struct({
  beachView: Schema.optional(Schema.Boolean),
  beachViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  cityView: Schema.optional(Schema.Boolean),
  cityViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  gardenView: Schema.optional(Schema.Boolean),
  gardenViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  lakeView: Schema.optional(Schema.Boolean),
  lakeViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  landmarkView: Schema.optional(Schema.Boolean),
  landmarkViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  oceanView: Schema.optional(Schema.Boolean),
  oceanViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  poolView: Schema.optional(Schema.Boolean),
  poolViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  valleyView: Schema.optional(Schema.Boolean),
  valleyViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Guest facilities at the property to promote or maintain health, beauty, and fitness. */
export interface LegacyV4Wellness {
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
}
export interface LegacyV4WellnessEncoded {
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
}
export const LegacyV4Wellness: Schema.Schema<LegacyV4Wellness, LegacyV4WellnessEncoded, never> = Schema.Struct({
  doctorOnCall: Schema.optional(Schema.Boolean),
  doctorOnCallException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  ellipticalMachine: Schema.optional(Schema.Boolean),
  ellipticalMachineException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  fitnessCenter: Schema.optional(Schema.Boolean),
  fitnessCenterException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeFitnessCenter: Schema.optional(Schema.Boolean),
  freeFitnessCenterException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeWeights: Schema.optional(Schema.Boolean),
  freeWeightsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  massage: Schema.optional(Schema.Boolean),
  massageException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  salon: Schema.optional(Schema.Boolean),
  salonException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  sauna: Schema.optional(Schema.Boolean),
  saunaException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  spa: Schema.optional(Schema.Boolean),
  spaException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  treadmill: Schema.optional(Schema.Boolean),
  treadmillException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  weightMachine: Schema.optional(Schema.Boolean),
  weightMachineException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Physical adaptations made to the property in consideration of varying levels of human physical ability. */
export interface LodgingAccessibility {
  readonly mobilityAccessible?: boolean;
  readonly mobilityAccessibleElevator?: boolean;
  readonly mobilityAccessibleElevatorException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleParking?: boolean;
  readonly mobilityAccessibleParkingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessiblePool?: boolean;
  readonly mobilityAccessiblePoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LodgingAccessibilityEncoded {
  readonly mobilityAccessible?: boolean;
  readonly mobilityAccessibleElevator?: boolean;
  readonly mobilityAccessibleElevatorException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessibleParking?: boolean;
  readonly mobilityAccessibleParkingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly mobilityAccessiblePool?: boolean;
  readonly mobilityAccessiblePoolException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LodgingAccessibility: Schema.Schema<LodgingAccessibility, LodgingAccessibilityEncoded, never> = Schema.Struct({
  mobilityAccessible: Schema.optional(Schema.Boolean),
  mobilityAccessibleElevator: Schema.optional(Schema.Boolean),
  mobilityAccessibleElevatorException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobilityAccessibleException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobilityAccessibleParking: Schema.optional(Schema.Boolean),
  mobilityAccessibleParkingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobilityAccessiblePool: Schema.optional(Schema.Boolean),
  mobilityAccessiblePoolException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Amenities and features related to leisure and play. */
export interface LodgingActivities {
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
}
export interface LodgingActivitiesEncoded {
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
}
export const LodgingActivities: Schema.Schema<LodgingActivities, LodgingActivitiesEncoded, never> = Schema.Struct({
  beachAccess: Schema.optional(Schema.Boolean),
  beachAccessException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  beachFront: Schema.optional(Schema.Boolean),
  beachFrontException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  bicycleRental: Schema.optional(Schema.Boolean),
  bicycleRentalException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  boutiqueStores: Schema.optional(Schema.Boolean),
  boutiqueStoresException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  casino: Schema.optional(Schema.Boolean),
  casinoException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeBicycleRental: Schema.optional(Schema.Boolean),
  freeBicycleRentalException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeWatercraftRental: Schema.optional(Schema.Boolean),
  freeWatercraftRentalException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  gameRoom: Schema.optional(Schema.Boolean),
  gameRoomException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  golf: Schema.optional(Schema.Boolean),
  golfException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  horsebackRiding: Schema.optional(Schema.Boolean),
  horsebackRidingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  nightclub: Schema.optional(Schema.Boolean),
  nightclubException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  privateBeach: Schema.optional(Schema.Boolean),
  privateBeachException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  scuba: Schema.optional(Schema.Boolean),
  scubaException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  snorkeling: Schema.optional(Schema.Boolean),
  snorkelingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  tennis: Schema.optional(Schema.Boolean),
  tennisException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  watercraftRental: Schema.optional(Schema.Boolean),
  watercraftRentalException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  waterSkiing: Schema.optional(Schema.Boolean),
  waterSkiingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Features of the property of specific interest to the business traveler. */
export interface LodgingBusiness {
  readonly businessCenter?: boolean;
  readonly businessCenterException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRooms?: boolean;
  readonly meetingRoomsCount?: number;
  readonly meetingRoomsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRoomsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LodgingBusinessEncoded {
  readonly businessCenter?: boolean;
  readonly businessCenterException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRooms?: boolean;
  readonly meetingRoomsCount?: number;
  readonly meetingRoomsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRoomsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LodgingBusiness: Schema.Schema<LodgingBusiness, LodgingBusinessEncoded, never> = Schema.Struct({
  businessCenter: Schema.optional(Schema.Boolean),
  businessCenterException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  meetingRooms: Schema.optional(Schema.Boolean),
  meetingRoomsCount: Schema.optional(Schema.Int),
  meetingRoomsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  meetingRoomsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** The ways in which the property provides guests with the ability to access the internet. */
export interface LodgingConnectivity {
  readonly freeWifi?: boolean;
  readonly freeWifiException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly publicAreaWifiAvailable?: boolean;
  readonly publicAreaWifiAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly publicInternetTerminal?: boolean;
  readonly publicInternetTerminalException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wifiAvailable?: boolean;
  readonly wifiAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LodgingConnectivityEncoded {
  readonly freeWifi?: boolean;
  readonly freeWifiException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly publicAreaWifiAvailable?: boolean;
  readonly publicAreaWifiAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly publicInternetTerminal?: boolean;
  readonly publicInternetTerminalException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wifiAvailable?: boolean;
  readonly wifiAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LodgingConnectivity: Schema.Schema<LodgingConnectivity, LodgingConnectivityEncoded, never> = Schema.Struct({
  freeWifi: Schema.optional(Schema.Boolean),
  freeWifiException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  publicAreaWifiAvailable: Schema.optional(Schema.Boolean),
  publicAreaWifiAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  publicInternetTerminal: Schema.optional(Schema.Boolean),
  publicInternetTerminalException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  wifiAvailable: Schema.optional(Schema.Boolean),
  wifiAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** An eco certificate awarded to the hotel. Deprecated: this message is no longer populated. All certification data is now provided by BeCause. */
export interface LodgingEcoCertification {
  readonly awarded?: boolean;
  readonly awardedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly ecoCertificate?: "ECO_CERTIFICATE_UNSPECIFIED" | "ISO14001" | "ISO50001" | "ASIAN_ECOTOURISM" | "BIOSPHERE_RESPOSNIBLE_TOURISM" | "BUREAU_VERITAS" | "CONTROL_UNION" | "EARTHCHECK" | "ECO_CERTIFICATION_MALTA" | "ECOTOURISM_AUSTRALIAS_ECO" | "GREAT_GREEN_DEAL" | "GREEN_GLOBE" | "GREEN_GROWTH2050" | "GREEN_KEY" | "GREEN_KEY_ECO_RATING" | "GREEN_SEAL" | "GREEN_STAR" | "GREEN_TOURISM_ACTIVE" | "HILTON_LIGHTSTAY" | "HOSTELLING_INTERNATIONALS_QUALITY_AND_SUSTAINABILITY" | "HOTELES_MAS_VERDES" | "NORDIC_SWAN_ECOLABEL" | "PREFERRED_BY_NATURE_SUSTAINABLE_TOURISM" | "SUSTAINABLE_TRAVEL_IRELAND" | "TOF_TIGERS_INITITIVES_PUG" | "TRAVELIFE" | "UNITED_CERTIFICATION_SYSTEMS_LIMITED" | "VIREO_SRL";
}
export interface LodgingEcoCertificationEncoded {
  readonly awarded?: boolean;
  readonly awardedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly ecoCertificate?: "ECO_CERTIFICATE_UNSPECIFIED" | "ISO14001" | "ISO50001" | "ASIAN_ECOTOURISM" | "BIOSPHERE_RESPOSNIBLE_TOURISM" | "BUREAU_VERITAS" | "CONTROL_UNION" | "EARTHCHECK" | "ECO_CERTIFICATION_MALTA" | "ECOTOURISM_AUSTRALIAS_ECO" | "GREAT_GREEN_DEAL" | "GREEN_GLOBE" | "GREEN_GROWTH2050" | "GREEN_KEY" | "GREEN_KEY_ECO_RATING" | "GREEN_SEAL" | "GREEN_STAR" | "GREEN_TOURISM_ACTIVE" | "HILTON_LIGHTSTAY" | "HOSTELLING_INTERNATIONALS_QUALITY_AND_SUSTAINABILITY" | "HOTELES_MAS_VERDES" | "NORDIC_SWAN_ECOLABEL" | "PREFERRED_BY_NATURE_SUSTAINABLE_TOURISM" | "SUSTAINABLE_TRAVEL_IRELAND" | "TOF_TIGERS_INITITIVES_PUG" | "TRAVELIFE" | "UNITED_CERTIFICATION_SYSTEMS_LIMITED" | "VIREO_SRL";
}
export const LodgingEcoCertification: Schema.Schema<LodgingEcoCertification, LodgingEcoCertificationEncoded, never> = Schema.Struct({
  awarded: Schema.optional(Schema.Boolean),
  awardedException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  ecoCertificate: Schema.optional(Schema.Union(Schema.Literal("ECO_CERTIFICATE_UNSPECIFIED"), Schema.Literal("ISO14001"), Schema.Literal("ISO50001"), Schema.Literal("ASIAN_ECOTOURISM"), Schema.Literal("BIOSPHERE_RESPOSNIBLE_TOURISM"), Schema.Literal("BUREAU_VERITAS"), Schema.Literal("CONTROL_UNION"), Schema.Literal("EARTHCHECK"), Schema.Literal("ECO_CERTIFICATION_MALTA"), Schema.Literal("ECOTOURISM_AUSTRALIAS_ECO"), Schema.Literal("GREAT_GREEN_DEAL"), Schema.Literal("GREEN_GLOBE"), Schema.Literal("GREEN_GROWTH2050"), Schema.Literal("GREEN_KEY"), Schema.Literal("GREEN_KEY_ECO_RATING"), Schema.Literal("GREEN_SEAL"), Schema.Literal("GREEN_STAR"), Schema.Literal("GREEN_TOURISM_ACTIVE"), Schema.Literal("HILTON_LIGHTSTAY"), Schema.Literal("HOSTELLING_INTERNATIONALS_QUALITY_AND_SUSTAINABILITY"), Schema.Literal("HOTELES_MAS_VERDES"), Schema.Literal("NORDIC_SWAN_ECOLABEL"), Schema.Literal("PREFERRED_BY_NATURE_SUSTAINABLE_TOURISM"), Schema.Literal("SUSTAINABLE_TRAVEL_IRELAND"), Schema.Literal("TOF_TIGERS_INITITIVES_PUG"), Schema.Literal("TRAVELIFE"), Schema.Literal("UNITED_CERTIFICATION_SYSTEMS_LIMITED"), Schema.Literal("VIREO_SRL"))),
});

/** Energy efficiency practices implemented at the hotel. */
export interface LodgingEnergyEfficiency {
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
}
export interface LodgingEnergyEfficiencyEncoded {
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
}
export const LodgingEnergyEfficiency: Schema.Schema<LodgingEnergyEfficiency, LodgingEnergyEfficiencyEncoded, never> = Schema.Struct({
  carbonFreeEnergySources: Schema.optional(Schema.Boolean),
  carbonFreeEnergySourcesException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  energyConservationProgram: Schema.optional(Schema.Boolean),
  energyConservationProgramException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  energyEfficientHeatingAndCoolingSystems: Schema.optional(Schema.Boolean),
  energyEfficientHeatingAndCoolingSystemsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  energyEfficientLighting: Schema.optional(Schema.Boolean),
  energyEfficientLightingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  energySavingThermostats: Schema.optional(Schema.Boolean),
  energySavingThermostatsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  greenBuildingDesign: Schema.optional(Schema.Boolean),
  greenBuildingDesignException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  independentOrganizationAuditsEnergyUse: Schema.optional(Schema.Boolean),
  independentOrganizationAuditsEnergyUseException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Enhanced cleaning measures implemented by the hotel during COVID-19. */
export interface LodgingEnhancedCleaning {
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
}
export interface LodgingEnhancedCleaningEncoded {
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
}
export const LodgingEnhancedCleaning: Schema.Schema<LodgingEnhancedCleaning, LodgingEnhancedCleaningEncoded, never> = Schema.Struct({
  commercialGradeDisinfectantCleaning: Schema.optional(Schema.Boolean),
  commercialGradeDisinfectantCleaningException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  commonAreasEnhancedCleaning: Schema.optional(Schema.Boolean),
  commonAreasEnhancedCleaningException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  employeesTrainedCleaningProcedures: Schema.optional(Schema.Boolean),
  employeesTrainedCleaningProceduresException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  employeesTrainedThoroughHandWashing: Schema.optional(Schema.Boolean),
  employeesTrainedThoroughHandWashingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  employeesWearProtectiveEquipment: Schema.optional(Schema.Boolean),
  employeesWearProtectiveEquipmentException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  guestRoomsEnhancedCleaning: Schema.optional(Schema.Boolean),
  guestRoomsEnhancedCleaningException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Services and amenities for families and young guests. */
export interface LodgingFamilies {
  readonly babysitting?: boolean;
  readonly babysittingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsActivities?: boolean;
  readonly kidsActivitiesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsClub?: boolean;
  readonly kidsClubException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsFriendly?: boolean;
  readonly kidsFriendlyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LodgingFamiliesEncoded {
  readonly babysitting?: boolean;
  readonly babysittingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsActivities?: boolean;
  readonly kidsActivitiesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsClub?: boolean;
  readonly kidsClubException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsFriendly?: boolean;
  readonly kidsFriendlyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LodgingFamilies: Schema.Schema<LodgingFamilies, LodgingFamiliesEncoded, never> = Schema.Struct({
  babysitting: Schema.optional(Schema.Boolean),
  babysittingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  kidsActivities: Schema.optional(Schema.Boolean),
  kidsActivitiesException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  kidsClub: Schema.optional(Schema.Boolean),
  kidsClubException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  kidsFriendly: Schema.optional(Schema.Boolean),
  kidsFriendlyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Meals, snacks, and beverages available at the property. */
export interface LodgingFoodAndDrink {
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
}
export interface LodgingFoodAndDrinkEncoded {
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
}
export const LodgingFoodAndDrink: Schema.Schema<LodgingFoodAndDrink, LodgingFoodAndDrinkEncoded, never> = Schema.Struct({
  bar: Schema.optional(Schema.Boolean),
  barException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  breakfastAvailable: Schema.optional(Schema.Boolean),
  breakfastAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  breakfastBuffet: Schema.optional(Schema.Boolean),
  breakfastBuffetException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  buffet: Schema.optional(Schema.Boolean),
  buffetException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  dinnerBuffet: Schema.optional(Schema.Boolean),
  dinnerBuffetException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeBreakfast: Schema.optional(Schema.Boolean),
  freeBreakfastException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  restaurant: Schema.optional(Schema.Boolean),
  restaurantException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  restaurantsCount: Schema.optional(Schema.Int),
  restaurantsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  roomService: Schema.optional(Schema.Boolean),
  roomServiceException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  tableService: Schema.optional(Schema.Boolean),
  tableServiceException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  twentyFourHourRoomService: Schema.optional(Schema.Boolean),
  twentyFourHourRoomServiceException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  vendingMachine: Schema.optional(Schema.Boolean),
  vendingMachineException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Response message for LodgingService.GetGoogleUpdatedLodging */
export interface LodgingGetGoogleUpdatedLodgingResponse {
  readonly diffMask?: string;
  readonly lodging?: LodgingLodging;
}
export interface LodgingGetGoogleUpdatedLodgingResponseEncoded {
  readonly diffMask?: string;
  readonly lodging?: LodgingLodgingEncoded;
}
export const LodgingGetGoogleUpdatedLodgingResponse: Schema.Schema<LodgingGetGoogleUpdatedLodgingResponse, LodgingGetGoogleUpdatedLodgingResponseEncoded, never> = Schema.Struct({
  diffMask: Schema.optional(Schema.String),
  lodging: Schema.optional(Schema.suspend(() => LodgingLodging)),
});

/** Features and available amenities in the guest unit. */
export interface LodgingGuestUnitFeatures {
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
}
export interface LodgingGuestUnitFeaturesEncoded {
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
  readonly totalLivingAreas?: LodgingLivingAreaEncoded;
  readonly views?: LodgingViewsFromUnitEncoded;
}
export const LodgingGuestUnitFeatures: Schema.Schema<LodgingGuestUnitFeatures, LodgingGuestUnitFeaturesEncoded, never> = Schema.Struct({
  bungalowOrVilla: Schema.optional(Schema.Boolean),
  bungalowOrVillaException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  connectingUnitAvailable: Schema.optional(Schema.Boolean),
  connectingUnitAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  executiveFloor: Schema.optional(Schema.Boolean),
  executiveFloorException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  maxAdultOccupantsCount: Schema.optional(Schema.Int),
  maxAdultOccupantsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  maxChildOccupantsCount: Schema.optional(Schema.Int),
  maxChildOccupantsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  maxOccupantsCount: Schema.optional(Schema.Int),
  maxOccupantsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  privateHome: Schema.optional(Schema.Boolean),
  privateHomeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  suite: Schema.optional(Schema.Boolean),
  suiteException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  tier: Schema.optional(Schema.Union(Schema.Literal("UNIT_TIER_UNSPECIFIED"), Schema.Literal("STANDARD_UNIT"), Schema.Literal("DELUXE_UNIT"))),
  tierException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  totalLivingAreas: Schema.optional(Schema.suspend(() => LodgingLivingArea)),
  views: Schema.optional(Schema.suspend(() => LodgingViewsFromUnit)),
});

/** A specific type of unit primarily defined by its features. */
export interface LodgingGuestUnitType {
  readonly codes?: ReadonlyArray<string>;
  readonly features?: LodgingGuestUnitFeatures;
  readonly label?: string;
}
export interface LodgingGuestUnitTypeEncoded {
  readonly codes?: ReadonlyArray<string>;
  readonly features?: LodgingGuestUnitFeaturesEncoded;
  readonly label?: string;
}
export const LodgingGuestUnitType: Schema.Schema<LodgingGuestUnitType, LodgingGuestUnitTypeEncoded, never> = Schema.Struct({
  codes: Schema.optional(Schema.Array(Schema.String)),
  features: Schema.optional(Schema.suspend(() => LodgingGuestUnitFeatures)),
  label: Schema.optional(Schema.String),
});

/** Health and safety measures implemented by the hotel during COVID-19. */
export interface LodgingHealthAndSafety {
  readonly enhancedCleaning?: LodgingEnhancedCleaning;
  readonly increasedFoodSafety?: LodgingIncreasedFoodSafety;
  readonly minimizedContact?: LodgingMinimizedContact;
  readonly personalProtection?: LodgingPersonalProtection;
  readonly physicalDistancing?: LodgingPhysicalDistancing;
}
export interface LodgingHealthAndSafetyEncoded {
  readonly enhancedCleaning?: LodgingEnhancedCleaningEncoded;
  readonly increasedFoodSafety?: LodgingIncreasedFoodSafetyEncoded;
  readonly minimizedContact?: LodgingMinimizedContactEncoded;
  readonly personalProtection?: LodgingPersonalProtectionEncoded;
  readonly physicalDistancing?: LodgingPhysicalDistancingEncoded;
}
export const LodgingHealthAndSafety: Schema.Schema<LodgingHealthAndSafety, LodgingHealthAndSafetyEncoded, never> = Schema.Struct({
  enhancedCleaning: Schema.optional(Schema.suspend(() => LodgingEnhancedCleaning)),
  increasedFoodSafety: Schema.optional(Schema.suspend(() => LodgingIncreasedFoodSafety)),
  minimizedContact: Schema.optional(Schema.suspend(() => LodgingMinimizedContact)),
  personalProtection: Schema.optional(Schema.suspend(() => LodgingPersonalProtection)),
  physicalDistancing: Schema.optional(Schema.suspend(() => LodgingPhysicalDistancing)),
});

/** Conveniences provided in guest units to facilitate an easier, more comfortable stay. */
export interface LodgingHousekeeping {
  readonly dailyHousekeeping?: boolean;
  readonly dailyHousekeepingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly housekeepingAvailable?: boolean;
  readonly housekeepingAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly turndownService?: boolean;
  readonly turndownServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LodgingHousekeepingEncoded {
  readonly dailyHousekeeping?: boolean;
  readonly dailyHousekeepingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly housekeepingAvailable?: boolean;
  readonly housekeepingAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly turndownService?: boolean;
  readonly turndownServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LodgingHousekeeping: Schema.Schema<LodgingHousekeeping, LodgingHousekeepingEncoded, never> = Schema.Struct({
  dailyHousekeeping: Schema.optional(Schema.Boolean),
  dailyHousekeepingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  housekeepingAvailable: Schema.optional(Schema.Boolean),
  housekeepingAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  turndownService: Schema.optional(Schema.Boolean),
  turndownServiceException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Increased food safety measures implemented by the hotel during COVID-19. */
export interface LodgingIncreasedFoodSafety {
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
}
export interface LodgingIncreasedFoodSafetyEncoded {
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
}
export const LodgingIncreasedFoodSafety: Schema.Schema<LodgingIncreasedFoodSafety, LodgingIncreasedFoodSafetyEncoded, never> = Schema.Struct({
  diningAreasAdditionalSanitation: Schema.optional(Schema.Boolean),
  diningAreasAdditionalSanitationException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  disposableFlatware: Schema.optional(Schema.Boolean),
  disposableFlatwareException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  foodPreparationAndServingAdditionalSafety: Schema.optional(Schema.Boolean),
  foodPreparationAndServingAdditionalSafetyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  individualPackagedMeals: Schema.optional(Schema.Boolean),
  individualPackagedMealsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  singleUseFoodMenus: Schema.optional(Schema.Boolean),
  singleUseFoodMenusException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Language spoken by at least one staff member. */
export interface LodgingLanguageSpoken {
  readonly languageCode?: string;
  readonly spoken?: boolean;
  readonly spokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LodgingLanguageSpokenEncoded {
  readonly languageCode?: string;
  readonly spoken?: boolean;
  readonly spokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LodgingLanguageSpoken: Schema.Schema<LodgingLanguageSpoken, LodgingLanguageSpokenEncoded, never> = Schema.Struct({
  languageCode: Schema.optional(Schema.String),
  spoken: Schema.optional(Schema.Boolean),
  spokenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit. */
export interface LodgingLivingArea {
  readonly accessibility?: LodgingLivingAreaAccessibility;
  readonly eating?: LodgingLivingAreaEating;
  readonly features?: LodgingLivingAreaFeatures;
  readonly layout?: LodgingLivingAreaLayout;
  readonly sleeping?: LodgingLivingAreaSleeping;
}
export interface LodgingLivingAreaEncoded {
  readonly accessibility?: LodgingLivingAreaAccessibilityEncoded;
  readonly eating?: LodgingLivingAreaEatingEncoded;
  readonly features?: LodgingLivingAreaFeaturesEncoded;
  readonly layout?: LodgingLivingAreaLayoutEncoded;
  readonly sleeping?: LodgingLivingAreaSleepingEncoded;
}
export const LodgingLivingArea: Schema.Schema<LodgingLivingArea, LodgingLivingAreaEncoded, never> = Schema.Struct({
  accessibility: Schema.optional(Schema.suspend(() => LodgingLivingAreaAccessibility)),
  eating: Schema.optional(Schema.suspend(() => LodgingLivingAreaEating)),
  features: Schema.optional(Schema.suspend(() => LodgingLivingAreaFeatures)),
  layout: Schema.optional(Schema.suspend(() => LodgingLivingAreaLayout)),
  sleeping: Schema.optional(Schema.suspend(() => LodgingLivingAreaSleeping)),
});

/** Accessibility features of the living area. */
export interface LodgingLivingAreaAccessibility {
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
}
export interface LodgingLivingAreaAccessibilityEncoded {
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
}
export const LodgingLivingAreaAccessibility: Schema.Schema<LodgingLivingAreaAccessibility, LodgingLivingAreaAccessibilityEncoded, never> = Schema.Struct({
  adaCompliantUnit: Schema.optional(Schema.Boolean),
  adaCompliantUnitException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  hearingAccessibleDoorbell: Schema.optional(Schema.Boolean),
  hearingAccessibleDoorbellException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  hearingAccessibleFireAlarm: Schema.optional(Schema.Boolean),
  hearingAccessibleFireAlarmException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  hearingAccessibleUnit: Schema.optional(Schema.Boolean),
  hearingAccessibleUnitException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobilityAccessibleBathtub: Schema.optional(Schema.Boolean),
  mobilityAccessibleBathtubException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobilityAccessibleShower: Schema.optional(Schema.Boolean),
  mobilityAccessibleShowerException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobilityAccessibleToilet: Schema.optional(Schema.Boolean),
  mobilityAccessibleToiletException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobilityAccessibleUnit: Schema.optional(Schema.Boolean),
  mobilityAccessibleUnitException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Information about eating features in the living area. */
export interface LodgingLivingAreaEating {
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
}
export interface LodgingLivingAreaEatingEncoded {
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
}
export const LodgingLivingAreaEating: Schema.Schema<LodgingLivingAreaEating, LodgingLivingAreaEatingEncoded, never> = Schema.Struct({
  coffeeMaker: Schema.optional(Schema.Boolean),
  coffeeMakerException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  cookware: Schema.optional(Schema.Boolean),
  cookwareException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  dishwasher: Schema.optional(Schema.Boolean),
  dishwasherException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  indoorGrill: Schema.optional(Schema.Boolean),
  indoorGrillException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  kettle: Schema.optional(Schema.Boolean),
  kettleException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  kitchenAvailable: Schema.optional(Schema.Boolean),
  kitchenAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  microwave: Schema.optional(Schema.Boolean),
  microwaveException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  minibar: Schema.optional(Schema.Boolean),
  minibarException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  outdoorGrill: Schema.optional(Schema.Boolean),
  outdoorGrillException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  oven: Schema.optional(Schema.Boolean),
  ovenException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  refrigerator: Schema.optional(Schema.Boolean),
  refrigeratorException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  sink: Schema.optional(Schema.Boolean),
  sinkException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  snackbar: Schema.optional(Schema.Boolean),
  snackbarException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  stove: Schema.optional(Schema.Boolean),
  stoveException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  teaStation: Schema.optional(Schema.Boolean),
  teaStationException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  toaster: Schema.optional(Schema.Boolean),
  toasterException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Features in the living area. */
export interface LodgingLivingAreaFeatures {
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
}
export interface LodgingLivingAreaFeaturesEncoded {
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
}
export const LodgingLivingAreaFeatures: Schema.Schema<LodgingLivingAreaFeatures, LodgingLivingAreaFeaturesEncoded, never> = Schema.Struct({
  airConditioning: Schema.optional(Schema.Boolean),
  airConditioningException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  bathtub: Schema.optional(Schema.Boolean),
  bathtubException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  bidet: Schema.optional(Schema.Boolean),
  bidetException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  dryer: Schema.optional(Schema.Boolean),
  dryerException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  electronicRoomKey: Schema.optional(Schema.Boolean),
  electronicRoomKeyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  fireplace: Schema.optional(Schema.Boolean),
  fireplaceException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  hairdryer: Schema.optional(Schema.Boolean),
  hairdryerException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  heating: Schema.optional(Schema.Boolean),
  heatingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  inunitSafe: Schema.optional(Schema.Boolean),
  inunitSafeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  inunitWifiAvailable: Schema.optional(Schema.Boolean),
  inunitWifiAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  ironingEquipment: Schema.optional(Schema.Boolean),
  ironingEquipmentException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  payPerViewMovies: Schema.optional(Schema.Boolean),
  payPerViewMoviesException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  privateBathroom: Schema.optional(Schema.Boolean),
  privateBathroomException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  shower: Schema.optional(Schema.Boolean),
  showerException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  toilet: Schema.optional(Schema.Boolean),
  toiletException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  tv: Schema.optional(Schema.Boolean),
  tvCasting: Schema.optional(Schema.Boolean),
  tvCastingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  tvException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  tvStreaming: Schema.optional(Schema.Boolean),
  tvStreamingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  universalPowerAdapters: Schema.optional(Schema.Boolean),
  universalPowerAdaptersException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  washer: Schema.optional(Schema.Boolean),
  washerException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Information about the layout of the living area. */
export interface LodgingLivingAreaLayout {
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
}
export interface LodgingLivingAreaLayoutEncoded {
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
}
export const LodgingLivingAreaLayout: Schema.Schema<LodgingLivingAreaLayout, LodgingLivingAreaLayoutEncoded, never> = Schema.Struct({
  balcony: Schema.optional(Schema.Boolean),
  balconyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  livingAreaSqMeters: Schema.optional(Schema.Number),
  livingAreaSqMetersException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  loft: Schema.optional(Schema.Boolean),
  loftException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  nonSmoking: Schema.optional(Schema.Boolean),
  nonSmokingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  patio: Schema.optional(Schema.Boolean),
  patioException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  stairs: Schema.optional(Schema.Boolean),
  stairsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Information about sleeping features in the living area. */
export interface LodgingLivingAreaSleeping {
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
}
export interface LodgingLivingAreaSleepingEncoded {
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
}
export const LodgingLivingAreaSleeping: Schema.Schema<LodgingLivingAreaSleeping, LodgingLivingAreaSleepingEncoded, never> = Schema.Struct({
  bedsCount: Schema.optional(Schema.Int),
  bedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  bunkBedsCount: Schema.optional(Schema.Int),
  bunkBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  cribsCount: Schema.optional(Schema.Int),
  cribsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  doubleBedsCount: Schema.optional(Schema.Int),
  doubleBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  featherPillows: Schema.optional(Schema.Boolean),
  featherPillowsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  hypoallergenicBedding: Schema.optional(Schema.Boolean),
  hypoallergenicBeddingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  kingBedsCount: Schema.optional(Schema.Int),
  kingBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  memoryFoamPillows: Schema.optional(Schema.Boolean),
  memoryFoamPillowsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  otherBedsCount: Schema.optional(Schema.Int),
  otherBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  queenBedsCount: Schema.optional(Schema.Int),
  queenBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  rollAwayBedsCount: Schema.optional(Schema.Int),
  rollAwayBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  singleOrTwinBedsCount: Schema.optional(Schema.Int),
  singleOrTwinBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  sofaBedsCount: Schema.optional(Schema.Int),
  sofaBedsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  syntheticPillows: Schema.optional(Schema.Boolean),
  syntheticPillowsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Lodging of a location that provides accomodations. */
export interface LodgingLodging {
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
}
export interface LodgingLodgingEncoded {
  readonly accessibility?: LodgingAccessibilityEncoded;
  readonly activities?: LodgingActivitiesEncoded;
  readonly allUnits?: LodgingGuestUnitFeaturesEncoded;
  readonly business?: LodgingBusinessEncoded;
  readonly commonLivingArea?: LodgingLivingAreaEncoded;
  readonly connectivity?: LodgingConnectivityEncoded;
  readonly families?: LodgingFamiliesEncoded;
  readonly foodAndDrink?: LodgingFoodAndDrinkEncoded;
  readonly guestUnits?: ReadonlyArray<LodgingGuestUnitTypeEncoded>;
  readonly healthAndSafety?: LodgingHealthAndSafetyEncoded;
  readonly housekeeping?: LodgingHousekeepingEncoded;
  readonly metadata?: LodgingLodgingMetadataEncoded;
  readonly name?: string;
  readonly parking?: LodgingParkingEncoded;
  readonly pets?: LodgingPetsEncoded;
  readonly policies?: LodgingPoliciesEncoded;
  readonly pools?: LodgingPoolsEncoded;
  readonly property?: LodgingPropertyEncoded;
  readonly services?: LodgingServicesEncoded;
  readonly someUnits?: LodgingGuestUnitFeaturesEncoded;
  readonly sustainability?: LodgingSustainabilityEncoded;
  readonly transportation?: LodgingTransportationEncoded;
  readonly wellness?: LodgingWellnessEncoded;
}
export const LodgingLodging: Schema.Schema<LodgingLodging, LodgingLodgingEncoded, never> = Schema.Struct({
  accessibility: Schema.optional(Schema.suspend(() => LodgingAccessibility)),
  activities: Schema.optional(Schema.suspend(() => LodgingActivities)),
  allUnits: Schema.optional(Schema.suspend(() => LodgingGuestUnitFeatures)),
  business: Schema.optional(Schema.suspend(() => LodgingBusiness)),
  commonLivingArea: Schema.optional(Schema.suspend(() => LodgingLivingArea)),
  connectivity: Schema.optional(Schema.suspend(() => LodgingConnectivity)),
  families: Schema.optional(Schema.suspend(() => LodgingFamilies)),
  foodAndDrink: Schema.optional(Schema.suspend(() => LodgingFoodAndDrink)),
  guestUnits: Schema.optional(Schema.Array(Schema.suspend(() => LodgingGuestUnitType))),
  healthAndSafety: Schema.optional(Schema.suspend(() => LodgingHealthAndSafety)),
  housekeeping: Schema.optional(Schema.suspend(() => LodgingHousekeeping)),
  metadata: Schema.optional(Schema.suspend(() => LodgingLodgingMetadata)),
  name: Schema.optional(Schema.String),
  parking: Schema.optional(Schema.suspend(() => LodgingParking)),
  pets: Schema.optional(Schema.suspend(() => LodgingPets)),
  policies: Schema.optional(Schema.suspend(() => LodgingPolicies)),
  pools: Schema.optional(Schema.suspend(() => LodgingPools)),
  property: Schema.optional(Schema.suspend(() => LodgingProperty)),
  services: Schema.optional(Schema.suspend(() => LodgingServices)),
  someUnits: Schema.optional(Schema.suspend(() => LodgingGuestUnitFeatures)),
  sustainability: Schema.optional(Schema.suspend(() => LodgingSustainability)),
  transportation: Schema.optional(Schema.suspend(() => LodgingTransportation)),
  wellness: Schema.optional(Schema.suspend(() => LodgingWellness)),
});

/** Metadata for the Lodging. */
export interface LodgingLodgingMetadata {
  readonly updateTime?: string;
}
export interface LodgingLodgingMetadataEncoded {
  readonly updateTime?: string;
}
export const LodgingLodgingMetadata: Schema.Schema<LodgingLodgingMetadata, LodgingLodgingMetadataEncoded, never> = Schema.Struct({
  updateTime: Schema.optional(Schema.String),
});

/** Minimized contact measures implemented by the hotel during COVID-19. */
export interface LodgingMinimizedContact {
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
}
export interface LodgingMinimizedContactEncoded {
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
}
export const LodgingMinimizedContact: Schema.Schema<LodgingMinimizedContact, LodgingMinimizedContactEncoded, never> = Schema.Struct({
  contactlessCheckinCheckout: Schema.optional(Schema.Boolean),
  contactlessCheckinCheckoutException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  digitalGuestRoomKeys: Schema.optional(Schema.Boolean),
  digitalGuestRoomKeysException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  housekeepingScheduledRequestOnly: Schema.optional(Schema.Boolean),
  housekeepingScheduledRequestOnlyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  noHighTouchItemsCommonAreas: Schema.optional(Schema.Boolean),
  noHighTouchItemsCommonAreasException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  noHighTouchItemsGuestRooms: Schema.optional(Schema.Boolean),
  noHighTouchItemsGuestRoomsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  plasticKeycardsDisinfected: Schema.optional(Schema.Boolean),
  plasticKeycardsDisinfectedException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  roomBookingsBuffer: Schema.optional(Schema.Boolean),
  roomBookingsBufferException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Parking options at the property. */
export interface LodgingParking {
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
}
export interface LodgingParkingEncoded {
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
}
export const LodgingParking: Schema.Schema<LodgingParking, LodgingParkingEncoded, never> = Schema.Struct({
  electricCarChargingStations: Schema.optional(Schema.Boolean),
  electricCarChargingStationsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeParking: Schema.optional(Schema.Boolean),
  freeParkingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeSelfParking: Schema.optional(Schema.Boolean),
  freeSelfParkingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeValetParking: Schema.optional(Schema.Boolean),
  freeValetParkingException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  parkingAvailable: Schema.optional(Schema.Boolean),
  parkingAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  selfParkingAvailable: Schema.optional(Schema.Boolean),
  selfParkingAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  valetParkingAvailable: Schema.optional(Schema.Boolean),
  valetParkingAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Forms of payment accepted at the property. */
export interface LodgingPaymentOptions {
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
}
export interface LodgingPaymentOptionsEncoded {
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
}
export const LodgingPaymentOptions: Schema.Schema<LodgingPaymentOptions, LodgingPaymentOptionsEncoded, never> = Schema.Struct({
  cash: Schema.optional(Schema.Boolean),
  cashException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  cheque: Schema.optional(Schema.Boolean),
  chequeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  creditCard: Schema.optional(Schema.Boolean),
  creditCardException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  debitCard: Schema.optional(Schema.Boolean),
  debitCardException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  mobileNfc: Schema.optional(Schema.Boolean),
  mobileNfcException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Personal protection measures implemented by the hotel during COVID-19. */
export interface LodgingPersonalProtection {
  readonly commonAreasOfferSanitizingItems?: boolean;
  readonly commonAreasOfferSanitizingItemsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly faceMaskRequired?: boolean;
  readonly faceMaskRequiredException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly guestRoomHygieneKitsAvailable?: boolean;
  readonly guestRoomHygieneKitsAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly protectiveEquipmentAvailable?: boolean;
  readonly protectiveEquipmentAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LodgingPersonalProtectionEncoded {
  readonly commonAreasOfferSanitizingItems?: boolean;
  readonly commonAreasOfferSanitizingItemsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly faceMaskRequired?: boolean;
  readonly faceMaskRequiredException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly guestRoomHygieneKitsAvailable?: boolean;
  readonly guestRoomHygieneKitsAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly protectiveEquipmentAvailable?: boolean;
  readonly protectiveEquipmentAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LodgingPersonalProtection: Schema.Schema<LodgingPersonalProtection, LodgingPersonalProtectionEncoded, never> = Schema.Struct({
  commonAreasOfferSanitizingItems: Schema.optional(Schema.Boolean),
  commonAreasOfferSanitizingItemsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  faceMaskRequired: Schema.optional(Schema.Boolean),
  faceMaskRequiredException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  guestRoomHygieneKitsAvailable: Schema.optional(Schema.Boolean),
  guestRoomHygieneKitsAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  protectiveEquipmentAvailable: Schema.optional(Schema.Boolean),
  protectiveEquipmentAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Policies regarding guest-owned animals. */
export interface LodgingPets {
  readonly catsAllowed?: boolean;
  readonly catsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly dogsAllowed?: boolean;
  readonly dogsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly petsAllowed?: boolean;
  readonly petsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly petsAllowedFree?: boolean;
  readonly petsAllowedFreeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LodgingPetsEncoded {
  readonly catsAllowed?: boolean;
  readonly catsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly dogsAllowed?: boolean;
  readonly dogsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly petsAllowed?: boolean;
  readonly petsAllowedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly petsAllowedFree?: boolean;
  readonly petsAllowedFreeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LodgingPets: Schema.Schema<LodgingPets, LodgingPetsEncoded, never> = Schema.Struct({
  catsAllowed: Schema.optional(Schema.Boolean),
  catsAllowedException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  dogsAllowed: Schema.optional(Schema.Boolean),
  dogsAllowedException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  petsAllowed: Schema.optional(Schema.Boolean),
  petsAllowedException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  petsAllowedFree: Schema.optional(Schema.Boolean),
  petsAllowedFreeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Physical distancing measures implemented by the hotel during COVID-19. */
export interface LodgingPhysicalDistancing {
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
}
export interface LodgingPhysicalDistancingEncoded {
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
}
export const LodgingPhysicalDistancing: Schema.Schema<LodgingPhysicalDistancing, LodgingPhysicalDistancingEncoded, never> = Schema.Struct({
  commonAreasPhysicalDistancingArranged: Schema.optional(Schema.Boolean),
  commonAreasPhysicalDistancingArrangedException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  physicalDistancingRequired: Schema.optional(Schema.Boolean),
  physicalDistancingRequiredException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  safetyDividers: Schema.optional(Schema.Boolean),
  safetyDividersException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  sharedAreasLimitedOccupancy: Schema.optional(Schema.Boolean),
  sharedAreasLimitedOccupancyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  wellnessAreasHavePrivateSpaces: Schema.optional(Schema.Boolean),
  wellnessAreasHavePrivateSpacesException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Property rules that impact guests. */
export interface LodgingPolicies {
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
}
export interface LodgingPoliciesEncoded {
  readonly allInclusiveAvailable?: boolean;
  readonly allInclusiveAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly allInclusiveOnly?: boolean;
  readonly allInclusiveOnlyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly checkinTime?: LodgingTimeOfDayEncoded;
  readonly checkinTimeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly checkoutTime?: LodgingTimeOfDayEncoded;
  readonly checkoutTimeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsStayFree?: boolean;
  readonly kidsStayFreeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly maxChildAge?: number;
  readonly maxChildAgeException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly maxKidsStayFreeCount?: number;
  readonly maxKidsStayFreeCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly paymentOptions?: LodgingPaymentOptionsEncoded;
  readonly smokeFreeProperty?: boolean;
  readonly smokeFreePropertyException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LodgingPolicies: Schema.Schema<LodgingPolicies, LodgingPoliciesEncoded, never> = Schema.Struct({
  allInclusiveAvailable: Schema.optional(Schema.Boolean),
  allInclusiveAvailableException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  allInclusiveOnly: Schema.optional(Schema.Boolean),
  allInclusiveOnlyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  checkinTime: Schema.optional(Schema.suspend(() => LodgingTimeOfDay)),
  checkinTimeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  checkoutTime: Schema.optional(Schema.suspend(() => LodgingTimeOfDay)),
  checkoutTimeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  kidsStayFree: Schema.optional(Schema.Boolean),
  kidsStayFreeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  maxChildAge: Schema.optional(Schema.Int),
  maxChildAgeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  maxKidsStayFreeCount: Schema.optional(Schema.Int),
  maxKidsStayFreeCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  paymentOptions: Schema.optional(Schema.suspend(() => LodgingPaymentOptions)),
  smokeFreeProperty: Schema.optional(Schema.Boolean),
  smokeFreePropertyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Swimming pool or recreational water facilities available at the hotel. */
export interface LodgingPools {
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
}
export interface LodgingPoolsEncoded {
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
}
export const LodgingPools: Schema.Schema<LodgingPools, LodgingPoolsEncoded, never> = Schema.Struct({
  adultPool: Schema.optional(Schema.Boolean),
  adultPoolException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  hotTub: Schema.optional(Schema.Boolean),
  hotTubException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  indoorPool: Schema.optional(Schema.Boolean),
  indoorPoolException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  indoorPoolsCount: Schema.optional(Schema.Int),
  indoorPoolsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  lazyRiver: Schema.optional(Schema.Boolean),
  lazyRiverException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  lifeguard: Schema.optional(Schema.Boolean),
  lifeguardException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  outdoorPool: Schema.optional(Schema.Boolean),
  outdoorPoolException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  outdoorPoolsCount: Schema.optional(Schema.Int),
  outdoorPoolsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  pool: Schema.optional(Schema.Boolean),
  poolException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  poolsCount: Schema.optional(Schema.Int),
  poolsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  wadingPool: Schema.optional(Schema.Boolean),
  wadingPoolException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  waterPark: Schema.optional(Schema.Boolean),
  waterParkException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  waterslide: Schema.optional(Schema.Boolean),
  waterslideException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  wavePool: Schema.optional(Schema.Boolean),
  wavePoolException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** General factual information about the property's physical structure and important dates. */
export interface LodgingProperty {
  readonly builtYear?: number;
  readonly builtYearException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly floorsCount?: number;
  readonly floorsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly lastRenovatedYear?: number;
  readonly lastRenovatedYearException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly roomsCount?: number;
  readonly roomsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LodgingPropertyEncoded {
  readonly builtYear?: number;
  readonly builtYearException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly floorsCount?: number;
  readonly floorsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly lastRenovatedYear?: number;
  readonly lastRenovatedYearException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly roomsCount?: number;
  readonly roomsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LodgingProperty: Schema.Schema<LodgingProperty, LodgingPropertyEncoded, never> = Schema.Struct({
  builtYear: Schema.optional(Schema.Int),
  builtYearException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  floorsCount: Schema.optional(Schema.Int),
  floorsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  lastRenovatedYear: Schema.optional(Schema.Int),
  lastRenovatedYearException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  roomsCount: Schema.optional(Schema.Int),
  roomsCountException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Conveniences or help provided by the property to facilitate an easier, more comfortable stay. */
export interface LodgingServices {
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
}
export interface LodgingServicesEncoded {
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
  readonly languagesSpoken?: ReadonlyArray<LodgingLanguageSpokenEncoded>;
  readonly selfServiceLaundry?: boolean;
  readonly selfServiceLaundryException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly socialHour?: boolean;
  readonly socialHourException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly twentyFourHourFrontDesk?: boolean;
  readonly twentyFourHourFrontDeskException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly wakeUpCalls?: boolean;
  readonly wakeUpCallsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LodgingServices: Schema.Schema<LodgingServices, LodgingServicesEncoded, never> = Schema.Struct({
  baggageStorage: Schema.optional(Schema.Boolean),
  baggageStorageException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  concierge: Schema.optional(Schema.Boolean),
  conciergeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  convenienceStore: Schema.optional(Schema.Boolean),
  convenienceStoreException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  currencyExchange: Schema.optional(Schema.Boolean),
  currencyExchangeException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  elevator: Schema.optional(Schema.Boolean),
  elevatorException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  frontDesk: Schema.optional(Schema.Boolean),
  frontDeskException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  fullServiceLaundry: Schema.optional(Schema.Boolean),
  fullServiceLaundryException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  giftShop: Schema.optional(Schema.Boolean),
  giftShopException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  languagesSpoken: Schema.optional(Schema.Array(Schema.suspend(() => LodgingLanguageSpoken))),
  selfServiceLaundry: Schema.optional(Schema.Boolean),
  selfServiceLaundryException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  socialHour: Schema.optional(Schema.Boolean),
  socialHourException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  twentyFourHourFrontDesk: Schema.optional(Schema.Boolean),
  twentyFourHourFrontDeskException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  wakeUpCalls: Schema.optional(Schema.Boolean),
  wakeUpCallsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Sustainability practices implemented at the hotel. */
export interface LodgingSustainability {
  readonly energyEfficiency?: LodgingEnergyEfficiency;
  readonly sustainabilityCertifications?: LodgingSustainabilityCertifications;
  readonly sustainableSourcing?: LodgingSustainableSourcing;
  readonly wasteReduction?: LodgingWasteReduction;
  readonly waterConservation?: LodgingWaterConservation;
}
export interface LodgingSustainabilityEncoded {
  readonly energyEfficiency?: LodgingEnergyEfficiencyEncoded;
  readonly sustainabilityCertifications?: LodgingSustainabilityCertificationsEncoded;
  readonly sustainableSourcing?: LodgingSustainableSourcingEncoded;
  readonly wasteReduction?: LodgingWasteReductionEncoded;
  readonly waterConservation?: LodgingWaterConservationEncoded;
}
export const LodgingSustainability: Schema.Schema<LodgingSustainability, LodgingSustainabilityEncoded, never> = Schema.Struct({
  energyEfficiency: Schema.optional(Schema.suspend(() => LodgingEnergyEfficiency)),
  sustainabilityCertifications: Schema.optional(Schema.suspend(() => LodgingSustainabilityCertifications)),
  sustainableSourcing: Schema.optional(Schema.suspend(() => LodgingSustainableSourcing)),
  wasteReduction: Schema.optional(Schema.suspend(() => LodgingWasteReduction)),
  waterConservation: Schema.optional(Schema.suspend(() => LodgingWaterConservation)),
});

/** Sustainability certifications the hotel has been awarded. Deprecated: this message is no longer populated. All certification data is now provided by BeCause. */
export interface LodgingSustainabilityCertifications {
  readonly breeamCertification?: "BREEAM_CERTIFICATION_UNSPECIFIED" | "NO_BREEAM_CERTIFICATION" | "BREEAM_PASS" | "BREEAM_GOOD" | "BREEAM_VERY_GOOD" | "BREEAM_EXCELLENT" | "BREEAM_OUTSTANDING";
  readonly breeamCertificationException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly ecoCertifications?: ReadonlyArray<LodgingEcoCertification>;
  readonly leedCertification?: "LEED_CERTIFICATION_UNSPECIFIED" | "NO_LEED_CERTIFICATION" | "LEED_CERTIFIED" | "LEED_SILVER" | "LEED_GOLD" | "LEED_PLATINUM";
  readonly leedCertificationException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export interface LodgingSustainabilityCertificationsEncoded {
  readonly breeamCertification?: "BREEAM_CERTIFICATION_UNSPECIFIED" | "NO_BREEAM_CERTIFICATION" | "BREEAM_PASS" | "BREEAM_GOOD" | "BREEAM_VERY_GOOD" | "BREEAM_EXCELLENT" | "BREEAM_OUTSTANDING";
  readonly breeamCertificationException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly ecoCertifications?: ReadonlyArray<LodgingEcoCertificationEncoded>;
  readonly leedCertification?: "LEED_CERTIFICATION_UNSPECIFIED" | "NO_LEED_CERTIFICATION" | "LEED_CERTIFIED" | "LEED_SILVER" | "LEED_GOLD" | "LEED_PLATINUM";
  readonly leedCertificationException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}
export const LodgingSustainabilityCertifications: Schema.Schema<LodgingSustainabilityCertifications, LodgingSustainabilityCertificationsEncoded, never> = Schema.Struct({
  breeamCertification: Schema.optional(Schema.Union(Schema.Literal("BREEAM_CERTIFICATION_UNSPECIFIED"), Schema.Literal("NO_BREEAM_CERTIFICATION"), Schema.Literal("BREEAM_PASS"), Schema.Literal("BREEAM_GOOD"), Schema.Literal("BREEAM_VERY_GOOD"), Schema.Literal("BREEAM_EXCELLENT"), Schema.Literal("BREEAM_OUTSTANDING"))),
  breeamCertificationException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  ecoCertifications: Schema.optional(Schema.Array(Schema.suspend(() => LodgingEcoCertification))),
  leedCertification: Schema.optional(Schema.Union(Schema.Literal("LEED_CERTIFICATION_UNSPECIFIED"), Schema.Literal("NO_LEED_CERTIFICATION"), Schema.Literal("LEED_CERTIFIED"), Schema.Literal("LEED_SILVER"), Schema.Literal("LEED_GOLD"), Schema.Literal("LEED_PLATINUM"))),
  leedCertificationException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Sustainable sourcing practices implemented at the hotel. */
export interface LodgingSustainableSourcing {
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
}
export interface LodgingSustainableSourcingEncoded {
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
}
export const LodgingSustainableSourcing: Schema.Schema<LodgingSustainableSourcing, LodgingSustainableSourcingEncoded, never> = Schema.Struct({
  ecoFriendlyToiletries: Schema.optional(Schema.Boolean),
  ecoFriendlyToiletriesException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  locallySourcedFoodAndBeverages: Schema.optional(Schema.Boolean),
  locallySourcedFoodAndBeveragesException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  organicCageFreeEggs: Schema.optional(Schema.Boolean),
  organicCageFreeEggsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  organicFoodAndBeverages: Schema.optional(Schema.Boolean),
  organicFoodAndBeveragesException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  responsiblePurchasingPolicy: Schema.optional(Schema.Boolean),
  responsiblePurchasingPolicyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  responsiblySourcesSeafood: Schema.optional(Schema.Boolean),
  responsiblySourcesSeafoodException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  veganMeals: Schema.optional(Schema.Boolean),
  veganMealsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  vegetarianMeals: Schema.optional(Schema.Boolean),
  vegetarianMealsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
export interface LodgingTimeOfDay {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
}
export interface LodgingTimeOfDayEncoded {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
}
export const LodgingTimeOfDay: Schema.Schema<LodgingTimeOfDay, LodgingTimeOfDayEncoded, never> = Schema.Struct({
  hours: Schema.optional(Schema.Int),
  minutes: Schema.optional(Schema.Int),
  nanos: Schema.optional(Schema.Int),
  seconds: Schema.optional(Schema.Int),
});

/** Vehicles or vehicular services facilitated or owned by the property. */
export interface LodgingTransportation {
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
}
export interface LodgingTransportationEncoded {
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
}
export const LodgingTransportation: Schema.Schema<LodgingTransportation, LodgingTransportationEncoded, never> = Schema.Struct({
  airportShuttle: Schema.optional(Schema.Boolean),
  airportShuttleException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  carRentalOnProperty: Schema.optional(Schema.Boolean),
  carRentalOnPropertyException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeAirportShuttle: Schema.optional(Schema.Boolean),
  freeAirportShuttleException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freePrivateCarService: Schema.optional(Schema.Boolean),
  freePrivateCarServiceException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  localShuttle: Schema.optional(Schema.Boolean),
  localShuttleException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  privateCarService: Schema.optional(Schema.Boolean),
  privateCarServiceException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  transfer: Schema.optional(Schema.Boolean),
  transferException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Views available from the guest unit itself. */
export interface LodgingViewsFromUnit {
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
}
export interface LodgingViewsFromUnitEncoded {
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
}
export const LodgingViewsFromUnit: Schema.Schema<LodgingViewsFromUnit, LodgingViewsFromUnitEncoded, never> = Schema.Struct({
  beachView: Schema.optional(Schema.Boolean),
  beachViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  cityView: Schema.optional(Schema.Boolean),
  cityViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  gardenView: Schema.optional(Schema.Boolean),
  gardenViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  lakeView: Schema.optional(Schema.Boolean),
  lakeViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  landmarkView: Schema.optional(Schema.Boolean),
  landmarkViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  oceanView: Schema.optional(Schema.Boolean),
  oceanViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  poolView: Schema.optional(Schema.Boolean),
  poolViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  valleyView: Schema.optional(Schema.Boolean),
  valleyViewException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Waste reduction practices implemented at the hotel. */
export interface LodgingWasteReduction {
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
}
export interface LodgingWasteReductionEncoded {
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
}
export const LodgingWasteReduction: Schema.Schema<LodgingWasteReduction, LodgingWasteReductionEncoded, never> = Schema.Struct({
  compostableFoodContainersAndCutlery: Schema.optional(Schema.Boolean),
  compostableFoodContainersAndCutleryException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  compostsExcessFood: Schema.optional(Schema.Boolean),
  compostsExcessFoodException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  donatesExcessFood: Schema.optional(Schema.Boolean),
  donatesExcessFoodException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  foodWasteReductionProgram: Schema.optional(Schema.Boolean),
  foodWasteReductionProgramException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  noSingleUsePlasticStraws: Schema.optional(Schema.Boolean),
  noSingleUsePlasticStrawsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  noSingleUsePlasticWaterBottles: Schema.optional(Schema.Boolean),
  noSingleUsePlasticWaterBottlesException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  noStyrofoamFoodContainers: Schema.optional(Schema.Boolean),
  noStyrofoamFoodContainersException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  recyclingProgram: Schema.optional(Schema.Boolean),
  recyclingProgramException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  refillableToiletryContainers: Schema.optional(Schema.Boolean),
  refillableToiletryContainersException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  safelyDisposesBatteries: Schema.optional(Schema.Boolean),
  safelyDisposesBatteriesException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  safelyDisposesElectronics: Schema.optional(Schema.Boolean),
  safelyDisposesElectronicsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  safelyDisposesLightbulbs: Schema.optional(Schema.Boolean),
  safelyDisposesLightbulbsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  safelyHandlesHazardousSubstances: Schema.optional(Schema.Boolean),
  safelyHandlesHazardousSubstancesException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  soapDonationProgram: Schema.optional(Schema.Boolean),
  soapDonationProgramException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  toiletryDonationProgram: Schema.optional(Schema.Boolean),
  toiletryDonationProgramException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  waterBottleFillingStations: Schema.optional(Schema.Boolean),
  waterBottleFillingStationsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Water conservation practices implemented at the hotel. */
export interface LodgingWaterConservation {
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
}
export interface LodgingWaterConservationEncoded {
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
}
export const LodgingWaterConservation: Schema.Schema<LodgingWaterConservation, LodgingWaterConservationEncoded, never> = Schema.Struct({
  independentOrganizationAuditsWaterUse: Schema.optional(Schema.Boolean),
  independentOrganizationAuditsWaterUseException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  linenReuseProgram: Schema.optional(Schema.Boolean),
  linenReuseProgramException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  towelReuseProgram: Schema.optional(Schema.Boolean),
  towelReuseProgramException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  waterSavingShowers: Schema.optional(Schema.Boolean),
  waterSavingShowersException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  waterSavingSinks: Schema.optional(Schema.Boolean),
  waterSavingSinksException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  waterSavingToilets: Schema.optional(Schema.Boolean),
  waterSavingToiletsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** Guest facilities at the property to promote or maintain health, beauty, and fitness. */
export interface LodgingWellness {
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
}
export interface LodgingWellnessEncoded {
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
}
export const LodgingWellness: Schema.Schema<LodgingWellness, LodgingWellnessEncoded, never> = Schema.Struct({
  doctorOnCall: Schema.optional(Schema.Boolean),
  doctorOnCallException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  ellipticalMachine: Schema.optional(Schema.Boolean),
  ellipticalMachineException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  fitnessCenter: Schema.optional(Schema.Boolean),
  fitnessCenterException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeFitnessCenter: Schema.optional(Schema.Boolean),
  freeFitnessCenterException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  freeWeights: Schema.optional(Schema.Boolean),
  freeWeightsException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  massage: Schema.optional(Schema.Boolean),
  massageException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  salon: Schema.optional(Schema.Boolean),
  salonException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  sauna: Schema.optional(Schema.Boolean),
  saunaException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  spa: Schema.optional(Schema.Boolean),
  spaException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  treadmill: Schema.optional(Schema.Boolean),
  treadmillException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
  weightMachine: Schema.optional(Schema.Boolean),
  weightMachineException: Schema.optional(Schema.Union(Schema.Literal("EXCEPTION_UNSPECIFIED"), Schema.Literal("UNDER_CONSTRUCTION"), Schema.Literal("DEPENDENT_ON_SEASON"), Schema.Literal("DEPENDENT_ON_DAY_OF_WEEK"))),
});

/** A Google Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification setting resource per-account. */
export interface NotificationsNotificationSetting {
  readonly name?: string;
  readonly notificationTypes?: ReadonlyArray<"NOTIFICATION_TYPE_UNSPECIFIED" | "GOOGLE_UPDATE" | "NEW_REVIEW" | "UPDATED_REVIEW" | "NEW_CUSTOMER_MEDIA" | "NEW_QUESTION" | "UPDATED_QUESTION" | "NEW_ANSWER" | "UPDATED_ANSWER" | "DUPLICATE_LOCATION" | "LOSS_OF_VOICE_OF_MERCHANT" | "VOICE_OF_MERCHANT_UPDATED">;
  readonly pubsubTopic?: string;
}
export interface NotificationsNotificationSettingEncoded {
  readonly name?: string;
  readonly notificationTypes?: ReadonlyArray<"NOTIFICATION_TYPE_UNSPECIFIED" | "GOOGLE_UPDATE" | "NEW_REVIEW" | "UPDATED_REVIEW" | "NEW_CUSTOMER_MEDIA" | "NEW_QUESTION" | "UPDATED_QUESTION" | "NEW_ANSWER" | "UPDATED_ANSWER" | "DUPLICATE_LOCATION" | "LOSS_OF_VOICE_OF_MERCHANT" | "VOICE_OF_MERCHANT_UPDATED">;
  readonly pubsubTopic?: string;
}
export const NotificationsNotificationSetting: Schema.Schema<NotificationsNotificationSetting, NotificationsNotificationSettingEncoded, never> = Schema.Struct({
  name: Schema.optional(Schema.String),
  notificationTypes: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("NOTIFICATION_TYPE_UNSPECIFIED"), Schema.Literal("GOOGLE_UPDATE"), Schema.Literal("NEW_REVIEW"), Schema.Literal("UPDATED_REVIEW"), Schema.Literal("NEW_CUSTOMER_MEDIA"), Schema.Literal("NEW_QUESTION"), Schema.Literal("UPDATED_QUESTION"), Schema.Literal("NEW_ANSWER"), Schema.Literal("UPDATED_ANSWER"), Schema.Literal("DUPLICATE_LOCATION"), Schema.Literal("LOSS_OF_VOICE_OF_MERCHANT"), Schema.Literal("VOICE_OF_MERCHANT_UPDATED")))),
  pubsubTopic: Schema.optional(Schema.String),
});

/** Represents a single datapoint, where each datapoint is a DailyMetric-DailySubEntityType-TimeSeries tuple. */
export interface PerformanceDailyMetricTimeSeries {
  readonly dailyMetric?: "DAILY_METRIC_UNKNOWN" | "BUSINESS_IMPRESSIONS_DESKTOP_MAPS" | "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH" | "BUSINESS_IMPRESSIONS_MOBILE_MAPS" | "BUSINESS_IMPRESSIONS_MOBILE_SEARCH" | "BUSINESS_CONVERSATIONS" | "BUSINESS_DIRECTION_REQUESTS" | "CALL_CLICKS" | "WEBSITE_CLICKS" | "BUSINESS_BOOKINGS" | "BUSINESS_FOOD_ORDERS" | "BUSINESS_FOOD_MENU_CLICKS";
  readonly dailySubEntityType?: PerformanceDailySubEntityType;
  readonly timeSeries?: PerformanceTimeSeries;
}
export interface PerformanceDailyMetricTimeSeriesEncoded {
  readonly dailyMetric?: "DAILY_METRIC_UNKNOWN" | "BUSINESS_IMPRESSIONS_DESKTOP_MAPS" | "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH" | "BUSINESS_IMPRESSIONS_MOBILE_MAPS" | "BUSINESS_IMPRESSIONS_MOBILE_SEARCH" | "BUSINESS_CONVERSATIONS" | "BUSINESS_DIRECTION_REQUESTS" | "CALL_CLICKS" | "WEBSITE_CLICKS" | "BUSINESS_BOOKINGS" | "BUSINESS_FOOD_ORDERS" | "BUSINESS_FOOD_MENU_CLICKS";
  readonly dailySubEntityType?: PerformanceDailySubEntityTypeEncoded;
  readonly timeSeries?: PerformanceTimeSeriesEncoded;
}
export const PerformanceDailyMetricTimeSeries: Schema.Schema<PerformanceDailyMetricTimeSeries, PerformanceDailyMetricTimeSeriesEncoded, never> = Schema.Struct({
  dailyMetric: Schema.optional(Schema.Union(Schema.Literal("DAILY_METRIC_UNKNOWN"), Schema.Literal("BUSINESS_IMPRESSIONS_DESKTOP_MAPS"), Schema.Literal("BUSINESS_IMPRESSIONS_DESKTOP_SEARCH"), Schema.Literal("BUSINESS_IMPRESSIONS_MOBILE_MAPS"), Schema.Literal("BUSINESS_IMPRESSIONS_MOBILE_SEARCH"), Schema.Literal("BUSINESS_CONVERSATIONS"), Schema.Literal("BUSINESS_DIRECTION_REQUESTS"), Schema.Literal("CALL_CLICKS"), Schema.Literal("WEBSITE_CLICKS"), Schema.Literal("BUSINESS_BOOKINGS"), Schema.Literal("BUSINESS_FOOD_ORDERS"), Schema.Literal("BUSINESS_FOOD_MENU_CLICKS"))),
  dailySubEntityType: Schema.optional(Schema.suspend(() => PerformanceDailySubEntityType)),
  timeSeries: Schema.optional(Schema.suspend(() => PerformanceTimeSeries)),
});

/** Represents all possible subentity types that are associated with DailyMetrics. Note: Currently, all metrics are returned as daily aggregates and sub-entity breakdowns are not supported. */
export interface PerformanceDailySubEntityType {
  readonly dayOfWeek?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly timeOfDay?: PerformanceTimeOfDay;
}
export interface PerformanceDailySubEntityTypeEncoded {
  readonly dayOfWeek?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly timeOfDay?: PerformanceTimeOfDayEncoded;
}
export const PerformanceDailySubEntityType: Schema.Schema<PerformanceDailySubEntityType, PerformanceDailySubEntityTypeEncoded, never> = Schema.Struct({
  dayOfWeek: Schema.optional(Schema.Union(Schema.Literal("DAY_OF_WEEK_UNSPECIFIED"), Schema.Literal("MONDAY"), Schema.Literal("TUESDAY"), Schema.Literal("WEDNESDAY"), Schema.Literal("THURSDAY"), Schema.Literal("FRIDAY"), Schema.Literal("SATURDAY"), Schema.Literal("SUNDAY"))),
  timeOfDay: Schema.optional(Schema.suspend(() => PerformanceTimeOfDay)),
});

/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
export interface PerformanceDate {
  readonly day?: number;
  readonly month?: number;
  readonly year?: number;
}
export interface PerformanceDateEncoded {
  readonly day?: number;
  readonly month?: number;
  readonly year?: number;
}
export const PerformanceDate: Schema.Schema<PerformanceDate, PerformanceDateEncoded, never> = Schema.Struct({
  day: Schema.optional(Schema.Int),
  month: Schema.optional(Schema.Int),
  year: Schema.optional(Schema.Int),
});

/** Represents a single datapoint in the timeseries, where each datapoint is a date-value pair. */
export interface PerformanceDatedValue {
  readonly date?: PerformanceDate;
  readonly value?: string;
}
export interface PerformanceDatedValueEncoded {
  readonly date?: PerformanceDateEncoded;
  readonly value?: string;
}
export const PerformanceDatedValue: Schema.Schema<PerformanceDatedValue, PerformanceDatedValueEncoded, never> = Schema.Struct({
  date: Schema.optional(Schema.suspend(() => PerformanceDate)),
  value: Schema.optional(Schema.String),
});

/** Represents the response for FetchMultiDailyMetricsTimeSeries. */
export interface PerformanceFetchMultiDailyMetricsTimeSeriesResponse {
  readonly multiDailyMetricTimeSeries?: ReadonlyArray<PerformanceMultiDailyMetricTimeSeries>;
}
export interface PerformanceFetchMultiDailyMetricsTimeSeriesResponseEncoded {
  readonly multiDailyMetricTimeSeries?: ReadonlyArray<PerformanceMultiDailyMetricTimeSeriesEncoded>;
}
export const PerformanceFetchMultiDailyMetricsTimeSeriesResponse: Schema.Schema<PerformanceFetchMultiDailyMetricsTimeSeriesResponse, PerformanceFetchMultiDailyMetricsTimeSeriesResponseEncoded, never> = Schema.Struct({
  multiDailyMetricTimeSeries: Schema.optional(Schema.Array(Schema.suspend(() => PerformanceMultiDailyMetricTimeSeries))),
});

/** Represents the response for GetDailyMetricsTimeSeries. */
export interface PerformanceGetDailyMetricsTimeSeriesResponse {
  readonly timeSeries?: PerformanceTimeSeries;
}
export interface PerformanceGetDailyMetricsTimeSeriesResponseEncoded {
  readonly timeSeries?: PerformanceTimeSeriesEncoded;
}
export const PerformanceGetDailyMetricsTimeSeriesResponse: Schema.Schema<PerformanceGetDailyMetricsTimeSeriesResponse, PerformanceGetDailyMetricsTimeSeriesResponseEncoded, never> = Schema.Struct({
  timeSeries: Schema.optional(Schema.suspend(() => PerformanceTimeSeries)),
});

/** Represents an insights value. */
export interface PerformanceInsightsValue {
  readonly threshold?: string;
  readonly value?: string;
}
export interface PerformanceInsightsValueEncoded {
  readonly threshold?: string;
  readonly value?: string;
}
export const PerformanceInsightsValue: Schema.Schema<PerformanceInsightsValue, PerformanceInsightsValueEncoded, never> = Schema.Struct({
  threshold: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
});

/** Represents the response for ListSearchKeywordImpressionsMonthly. */
export interface PerformanceListSearchKeywordImpressionsMonthlyResponse {
  readonly nextPageToken?: string;
  readonly searchKeywordsCounts?: ReadonlyArray<PerformanceSearchKeywordCount>;
}
export interface PerformanceListSearchKeywordImpressionsMonthlyResponseEncoded {
  readonly nextPageToken?: string;
  readonly searchKeywordsCounts?: ReadonlyArray<PerformanceSearchKeywordCountEncoded>;
}
export const PerformanceListSearchKeywordImpressionsMonthlyResponse: Schema.Schema<PerformanceListSearchKeywordImpressionsMonthlyResponse, PerformanceListSearchKeywordImpressionsMonthlyResponseEncoded, never> = Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  searchKeywordsCounts: Schema.optional(Schema.Array(Schema.suspend(() => PerformanceSearchKeywordCount))),
});

/** Represents a list of tuples of DailyMetric-DailySubEntityType-TimeSeries. */
export interface PerformanceMultiDailyMetricTimeSeries {
  readonly dailyMetricTimeSeries?: ReadonlyArray<PerformanceDailyMetricTimeSeries>;
}
export interface PerformanceMultiDailyMetricTimeSeriesEncoded {
  readonly dailyMetricTimeSeries?: ReadonlyArray<PerformanceDailyMetricTimeSeriesEncoded>;
}
export const PerformanceMultiDailyMetricTimeSeries: Schema.Schema<PerformanceMultiDailyMetricTimeSeries, PerformanceMultiDailyMetricTimeSeriesEncoded, never> = Schema.Struct({
  dailyMetricTimeSeries: Schema.optional(Schema.Array(Schema.suspend(() => PerformanceDailyMetricTimeSeries))),
});

/** Represents a single search keyword and its value. */
export interface PerformanceSearchKeywordCount {
  readonly insightsValue?: PerformanceInsightsValue;
  readonly searchKeyword?: string;
}
export interface PerformanceSearchKeywordCountEncoded {
  readonly insightsValue?: PerformanceInsightsValueEncoded;
  readonly searchKeyword?: string;
}
export const PerformanceSearchKeywordCount: Schema.Schema<PerformanceSearchKeywordCount, PerformanceSearchKeywordCountEncoded, never> = Schema.Struct({
  insightsValue: Schema.optional(Schema.suspend(() => PerformanceInsightsValue)),
  searchKeyword: Schema.optional(Schema.String),
});

/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
export interface PerformanceTimeOfDay {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
}
export interface PerformanceTimeOfDayEncoded {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
}
export const PerformanceTimeOfDay: Schema.Schema<PerformanceTimeOfDay, PerformanceTimeOfDayEncoded, never> = Schema.Struct({
  hours: Schema.optional(Schema.Int),
  minutes: Schema.optional(Schema.Int),
  nanos: Schema.optional(Schema.Int),
  seconds: Schema.optional(Schema.Int),
});

/** Represents a timeseries. */
export interface PerformanceTimeSeries {
  readonly datedValues?: ReadonlyArray<PerformanceDatedValue>;
}
export interface PerformanceTimeSeriesEncoded {
  readonly datedValues?: ReadonlyArray<PerformanceDatedValueEncoded>;
}
export const PerformanceTimeSeries: Schema.Schema<PerformanceTimeSeries, PerformanceTimeSeriesEncoded, never> = Schema.Struct({
  datedValues: Schema.optional(Schema.Array(Schema.suspend(() => PerformanceDatedValue))),
});

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
export interface PlaceActionsEmpty {

}
export interface PlaceActionsEmptyEncoded {

}
export const PlaceActionsEmpty: Schema.Schema<PlaceActionsEmpty, PlaceActionsEmptyEncoded, never> = Schema.Struct({

});

/** Response message for PlaceActions.ListPlaceActionLinks. */
export interface PlaceActionsListPlaceActionLinksResponse {
  readonly nextPageToken?: string;
  readonly placeActionLinks?: ReadonlyArray<PlaceActionsPlaceActionLink>;
}
export interface PlaceActionsListPlaceActionLinksResponseEncoded {
  readonly nextPageToken?: string;
  readonly placeActionLinks?: ReadonlyArray<PlaceActionsPlaceActionLinkEncoded>;
}
export const PlaceActionsListPlaceActionLinksResponse: Schema.Schema<PlaceActionsListPlaceActionLinksResponse, PlaceActionsListPlaceActionLinksResponseEncoded, never> = Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  placeActionLinks: Schema.optional(Schema.Array(Schema.suspend(() => PlaceActionsPlaceActionLink))),
});

/** Response message for PlaceActions.ListPlaceActionTypeMetadata. */
export interface PlaceActionsListPlaceActionTypeMetadataResponse {
  readonly nextPageToken?: string;
  readonly placeActionTypeMetadata?: ReadonlyArray<PlaceActionsPlaceActionTypeMetadata>;
}
export interface PlaceActionsListPlaceActionTypeMetadataResponseEncoded {
  readonly nextPageToken?: string;
  readonly placeActionTypeMetadata?: ReadonlyArray<PlaceActionsPlaceActionTypeMetadataEncoded>;
}
export const PlaceActionsListPlaceActionTypeMetadataResponse: Schema.Schema<PlaceActionsListPlaceActionTypeMetadataResponse, PlaceActionsListPlaceActionTypeMetadataResponseEncoded, never> = Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  placeActionTypeMetadata: Schema.optional(Schema.Array(Schema.suspend(() => PlaceActionsPlaceActionTypeMetadata))),
});

/** Represents a place action link and its attributes. */
export interface PlaceActionsPlaceActionLink {
  readonly createTime?: string;
  readonly isEditable?: boolean;
  readonly isPreferred?: boolean;
  readonly name?: string;
  readonly placeActionType?: "PLACE_ACTION_TYPE_UNSPECIFIED" | "APPOINTMENT" | "ONLINE_APPOINTMENT" | "DINING_RESERVATION" | "FOOD_ORDERING" | "FOOD_DELIVERY" | "FOOD_TAKEOUT" | "SHOP_ONLINE" | "SOLOPRENEUR_APPOINTMENT";
  readonly providerType?: "PROVIDER_TYPE_UNSPECIFIED" | "MERCHANT" | "AGGREGATOR_3P";
  readonly updateTime?: string;
  readonly uri?: string;
}
export interface PlaceActionsPlaceActionLinkEncoded {
  readonly createTime?: string;
  readonly isEditable?: boolean;
  readonly isPreferred?: boolean;
  readonly name?: string;
  readonly placeActionType?: "PLACE_ACTION_TYPE_UNSPECIFIED" | "APPOINTMENT" | "ONLINE_APPOINTMENT" | "DINING_RESERVATION" | "FOOD_ORDERING" | "FOOD_DELIVERY" | "FOOD_TAKEOUT" | "SHOP_ONLINE" | "SOLOPRENEUR_APPOINTMENT";
  readonly providerType?: "PROVIDER_TYPE_UNSPECIFIED" | "MERCHANT" | "AGGREGATOR_3P";
  readonly updateTime?: string;
  readonly uri?: string;
}
export const PlaceActionsPlaceActionLink: Schema.Schema<PlaceActionsPlaceActionLink, PlaceActionsPlaceActionLinkEncoded, never> = Schema.Struct({
  createTime: Schema.optional(Schema.String),
  isEditable: Schema.optional(Schema.Boolean),
  isPreferred: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  placeActionType: Schema.optional(Schema.Union(Schema.Literal("PLACE_ACTION_TYPE_UNSPECIFIED"), Schema.Literal("APPOINTMENT"), Schema.Literal("ONLINE_APPOINTMENT"), Schema.Literal("DINING_RESERVATION"), Schema.Literal("FOOD_ORDERING"), Schema.Literal("FOOD_DELIVERY"), Schema.Literal("FOOD_TAKEOUT"), Schema.Literal("SHOP_ONLINE"), Schema.Literal("SOLOPRENEUR_APPOINTMENT"))),
  providerType: Schema.optional(Schema.Union(Schema.Literal("PROVIDER_TYPE_UNSPECIFIED"), Schema.Literal("MERCHANT"), Schema.Literal("AGGREGATOR_3P"))),
  updateTime: Schema.optional(Schema.String),
  uri: Schema.optional(Schema.String),
});

/** Metadata for supported place action types. */
export interface PlaceActionsPlaceActionTypeMetadata {
  readonly displayName?: string;
  readonly placeActionType?: "PLACE_ACTION_TYPE_UNSPECIFIED" | "APPOINTMENT" | "ONLINE_APPOINTMENT" | "DINING_RESERVATION" | "FOOD_ORDERING" | "FOOD_DELIVERY" | "FOOD_TAKEOUT" | "SHOP_ONLINE" | "SOLOPRENEUR_APPOINTMENT";
}
export interface PlaceActionsPlaceActionTypeMetadataEncoded {
  readonly displayName?: string;
  readonly placeActionType?: "PLACE_ACTION_TYPE_UNSPECIFIED" | "APPOINTMENT" | "ONLINE_APPOINTMENT" | "DINING_RESERVATION" | "FOOD_ORDERING" | "FOOD_DELIVERY" | "FOOD_TAKEOUT" | "SHOP_ONLINE" | "SOLOPRENEUR_APPOINTMENT";
}
export const PlaceActionsPlaceActionTypeMetadata: Schema.Schema<PlaceActionsPlaceActionTypeMetadata, PlaceActionsPlaceActionTypeMetadataEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  placeActionType: Schema.optional(Schema.Union(Schema.Literal("PLACE_ACTION_TYPE_UNSPECIFIED"), Schema.Literal("APPOINTMENT"), Schema.Literal("ONLINE_APPOINTMENT"), Schema.Literal("DINING_RESERVATION"), Schema.Literal("FOOD_ORDERING"), Schema.Literal("FOOD_DELIVERY"), Schema.Literal("FOOD_TAKEOUT"), Schema.Literal("SHOP_ONLINE"), Schema.Literal("SOLOPRENEUR_APPOINTMENT"))),
});

/** Represents an answer to a question */
export interface QAndAAnswer {
  readonly author?: QAndAAuthor;
  readonly createTime?: string;
  readonly name?: string;
  readonly text?: string;
  readonly updateTime?: string;
  readonly upvoteCount?: number;
}
export interface QAndAAnswerEncoded {
  readonly author?: QAndAAuthorEncoded;
  readonly createTime?: string;
  readonly name?: string;
  readonly text?: string;
  readonly updateTime?: string;
  readonly upvoteCount?: number;
}
export const QAndAAnswer: Schema.Schema<QAndAAnswer, QAndAAnswerEncoded, never> = Schema.Struct({
  author: Schema.optional(Schema.suspend(() => QAndAAuthor)),
  createTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  text: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  upvoteCount: Schema.optional(Schema.Int),
});

/** Represents the author of a question or answer */
export interface QAndAAuthor {
  readonly displayName?: string;
  readonly profilePhotoUri?: string;
  readonly type?: "AUTHOR_TYPE_UNSPECIFIED" | "REGULAR_USER" | "LOCAL_GUIDE" | "MERCHANT";
}
export interface QAndAAuthorEncoded {
  readonly displayName?: string;
  readonly profilePhotoUri?: string;
  readonly type?: "AUTHOR_TYPE_UNSPECIFIED" | "REGULAR_USER" | "LOCAL_GUIDE" | "MERCHANT";
}
export const QAndAAuthor: Schema.Schema<QAndAAuthor, QAndAAuthorEncoded, never> = Schema.Struct({
  displayName: Schema.optional(Schema.String),
  profilePhotoUri: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Union(Schema.Literal("AUTHOR_TYPE_UNSPECIFIED"), Schema.Literal("REGULAR_USER"), Schema.Literal("LOCAL_GUIDE"), Schema.Literal("MERCHANT"))),
});

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
export interface QAndAEmpty {

}
export interface QAndAEmptyEncoded {

}
export const QAndAEmpty: Schema.Schema<QAndAEmpty, QAndAEmptyEncoded, never> = Schema.Struct({

});

/** Response message for QuestionsAndAnswers.ListAnswers */
export interface QAndAListAnswersResponse {
  readonly answers?: ReadonlyArray<QAndAAnswer>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
}
export interface QAndAListAnswersResponseEncoded {
  readonly answers?: ReadonlyArray<QAndAAnswerEncoded>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
}
export const QAndAListAnswersResponse: Schema.Schema<QAndAListAnswersResponse, QAndAListAnswersResponseEncoded, never> = Schema.Struct({
  answers: Schema.optional(Schema.Array(Schema.suspend(() => QAndAAnswer))),
  nextPageToken: Schema.optional(Schema.String),
  totalSize: Schema.optional(Schema.Int),
});

/** Response message for QuestionsAndAnswers.ListQuestions */
export interface QAndAListQuestionsResponse {
  readonly nextPageToken?: string;
  readonly questions?: ReadonlyArray<QAndAQuestion>;
  readonly totalSize?: number;
}
export interface QAndAListQuestionsResponseEncoded {
  readonly nextPageToken?: string;
  readonly questions?: ReadonlyArray<QAndAQuestionEncoded>;
  readonly totalSize?: number;
}
export const QAndAListQuestionsResponse: Schema.Schema<QAndAListQuestionsResponse, QAndAListQuestionsResponseEncoded, never> = Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  questions: Schema.optional(Schema.Array(Schema.suspend(() => QAndAQuestion))),
  totalSize: Schema.optional(Schema.Int),
});

/** Represents a single question and some of its answers. */
export interface QAndAQuestion {
  readonly author?: QAndAAuthor;
  readonly createTime?: string;
  readonly name?: string;
  readonly text?: string;
  readonly topAnswers?: ReadonlyArray<QAndAAnswer>;
  readonly totalAnswerCount?: number;
  readonly updateTime?: string;
  readonly upvoteCount?: number;
}
export interface QAndAQuestionEncoded {
  readonly author?: QAndAAuthorEncoded;
  readonly createTime?: string;
  readonly name?: string;
  readonly text?: string;
  readonly topAnswers?: ReadonlyArray<QAndAAnswerEncoded>;
  readonly totalAnswerCount?: number;
  readonly updateTime?: string;
  readonly upvoteCount?: number;
}
export const QAndAQuestion: Schema.Schema<QAndAQuestion, QAndAQuestionEncoded, never> = Schema.Struct({
  author: Schema.optional(Schema.suspend(() => QAndAAuthor)),
  createTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  text: Schema.optional(Schema.String),
  topAnswers: Schema.optional(Schema.Array(Schema.suspend(() => QAndAAnswer))),
  totalAnswerCount: Schema.optional(Schema.Int),
  updateTime: Schema.optional(Schema.String),
  upvoteCount: Schema.optional(Schema.Int),
});

/** Request message for QuestionsAndAnswers.UpsertAnswer */
export interface QAndAUpsertAnswerRequest {
  readonly answer?: QAndAAnswer;
}
export interface QAndAUpsertAnswerRequestEncoded {
  readonly answer?: QAndAAnswerEncoded;
}
export const QAndAUpsertAnswerRequest: Schema.Schema<QAndAUpsertAnswerRequest, QAndAUpsertAnswerRequestEncoded, never> = Schema.Struct({
  answer: Schema.optional(Schema.suspend(() => QAndAAnswer)),
});

/** Display data for verifications through postcard. */
export interface VerificationsAddressVerificationData {
  readonly address?: VerificationsPostalAddress;
  readonly business?: string;
  readonly expectedDeliveryDaysRegion?: number;
}
export interface VerificationsAddressVerificationDataEncoded {
  readonly address?: VerificationsPostalAddressEncoded;
  readonly business?: string;
  readonly expectedDeliveryDaysRegion?: number;
}
export const VerificationsAddressVerificationData: Schema.Schema<VerificationsAddressVerificationData, VerificationsAddressVerificationDataEncoded, never> = Schema.Struct({
  address: Schema.optional(Schema.suspend(() => VerificationsPostalAddress)),
  business: Schema.optional(Schema.String),
  expectedDeliveryDaysRegion: Schema.optional(Schema.Int),
});

/** Request message for Verifications.CompleteVerificationAction. */
export interface VerificationsCompleteVerificationRequest {
  readonly pin?: string;
}
export interface VerificationsCompleteVerificationRequestEncoded {
  readonly pin?: string;
}
export const VerificationsCompleteVerificationRequest: Schema.Schema<VerificationsCompleteVerificationRequest, VerificationsCompleteVerificationRequestEncoded, never> = Schema.Struct({
  pin: Schema.optional(Schema.String),
});

/** Response message for Verifications.CompleteVerificationAction. */
export interface VerificationsCompleteVerificationResponse {
  readonly verification?: VerificationsVerification;
}
export interface VerificationsCompleteVerificationResponseEncoded {
  readonly verification?: VerificationsVerificationEncoded;
}
export const VerificationsCompleteVerificationResponse: Schema.Schema<VerificationsCompleteVerificationResponse, VerificationsCompleteVerificationResponseEncoded, never> = Schema.Struct({
  verification: Schema.optional(Schema.suspend(() => VerificationsVerification)),
});

/** Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177). */
export interface VerificationsComplyWithGuidelines {
  readonly recommendationReason?: "RECOMMENDATION_REASON_UNSPECIFIED" | "BUSINESS_LOCATION_SUSPENDED" | "BUSINESS_LOCATION_DISABLED";
}
export interface VerificationsComplyWithGuidelinesEncoded {
  readonly recommendationReason?: "RECOMMENDATION_REASON_UNSPECIFIED" | "BUSINESS_LOCATION_SUSPENDED" | "BUSINESS_LOCATION_DISABLED";
}
export const VerificationsComplyWithGuidelines: Schema.Schema<VerificationsComplyWithGuidelines, VerificationsComplyWithGuidelinesEncoded, never> = Schema.Struct({
  recommendationReason: Schema.optional(Schema.Union(Schema.Literal("RECOMMENDATION_REASON_UNSPECIFIED"), Schema.Literal("BUSINESS_LOCATION_SUSPENDED"), Schema.Literal("BUSINESS_LOCATION_DISABLED"))),
});

/** Display data for verifications through email. */
export interface VerificationsEmailVerificationData {
  readonly domain?: string;
  readonly isUserNameEditable?: boolean;
  readonly user?: string;
}
export interface VerificationsEmailVerificationDataEncoded {
  readonly domain?: string;
  readonly isUserNameEditable?: boolean;
  readonly user?: string;
}
export const VerificationsEmailVerificationData: Schema.Schema<VerificationsEmailVerificationData, VerificationsEmailVerificationDataEncoded, never> = Schema.Struct({
  domain: Schema.optional(Schema.String),
  isUserNameEditable: Schema.optional(Schema.Boolean),
  user: Schema.optional(Schema.String),
});

/** Request message for Verifications.FetchVerificationOptions. */
export interface VerificationsFetchVerificationOptionsRequest {
  readonly context?: VerificationsServiceBusinessContext;
  readonly languageCode?: string;
}
export interface VerificationsFetchVerificationOptionsRequestEncoded {
  readonly context?: VerificationsServiceBusinessContextEncoded;
  readonly languageCode?: string;
}
export const VerificationsFetchVerificationOptionsRequest: Schema.Schema<VerificationsFetchVerificationOptionsRequest, VerificationsFetchVerificationOptionsRequestEncoded, never> = Schema.Struct({
  context: Schema.optional(Schema.suspend(() => VerificationsServiceBusinessContext)),
  languageCode: Schema.optional(Schema.String),
});

/** Response message for Verifications.FetchVerificationOptions. */
export interface VerificationsFetchVerificationOptionsResponse {
  readonly options?: ReadonlyArray<VerificationsVerificationOption>;
}
export interface VerificationsFetchVerificationOptionsResponseEncoded {
  readonly options?: ReadonlyArray<VerificationsVerificationOptionEncoded>;
}
export const VerificationsFetchVerificationOptionsResponse: Schema.Schema<VerificationsFetchVerificationOptionsResponse, VerificationsFetchVerificationOptionsResponseEncoded, never> = Schema.Struct({
  options: Schema.optional(Schema.Array(Schema.suspend(() => VerificationsVerificationOption))),
});

/** Request message for Verifications.GenerateInstantVerificationToken. */
export interface VerificationsGenerateInstantVerificationTokenRequest {
  readonly locationId?: string;
}
export interface VerificationsGenerateInstantVerificationTokenRequestEncoded {
  readonly locationId?: string;
}
export const VerificationsGenerateInstantVerificationTokenRequest: Schema.Schema<VerificationsGenerateInstantVerificationTokenRequest, VerificationsGenerateInstantVerificationTokenRequestEncoded, never> = Schema.Struct({
  locationId: Schema.optional(Schema.String),
});

/** Response message for Verifications.GenerateInstantVerificationToken. */
export interface VerificationsGenerateInstantVerificationTokenResponse {
  readonly instantVerificationToken?: string;
  readonly result?: "RESULT_UNSPECIFIED" | "SUCCEEDED" | "FAILED";
}
export interface VerificationsGenerateInstantVerificationTokenResponseEncoded {
  readonly instantVerificationToken?: string;
  readonly result?: "RESULT_UNSPECIFIED" | "SUCCEEDED" | "FAILED";
}
export const VerificationsGenerateInstantVerificationTokenResponse: Schema.Schema<VerificationsGenerateInstantVerificationTokenResponse, VerificationsGenerateInstantVerificationTokenResponseEncoded, never> = Schema.Struct({
  instantVerificationToken: Schema.optional(Schema.String),
  result: Schema.optional(Schema.Union(Schema.Literal("RESULT_UNSPECIFIED"), Schema.Literal("SUCCEEDED"), Schema.Literal("FAILED"))),
});

/** Response message for Verifications.ListVerifications. */
export interface VerificationsListVerificationsResponse {
  readonly nextPageToken?: string;
  readonly verifications?: ReadonlyArray<VerificationsVerification>;
}
export interface VerificationsListVerificationsResponseEncoded {
  readonly nextPageToken?: string;
  readonly verifications?: ReadonlyArray<VerificationsVerificationEncoded>;
}
export const VerificationsListVerificationsResponse: Schema.Schema<VerificationsListVerificationsResponse, VerificationsListVerificationsResponseEncoded, never> = Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  verifications: Schema.optional(Schema.Array(Schema.suspend(() => VerificationsVerification))),
});

/** Represents a postal address, such as for postal delivery or payments addresses. With a postal address, a postal service can deliver items to a premise, P.O. box, or similar. A postal address is not intended to model geographical locations like roads, towns, or mountains. In typical usage, an address would be created by user input or from importing existing data, depending on the type of process. Advice on address input or editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput. - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, see: https://support.google.com/business/answer/6397478. */
export interface VerificationsPostalAddress {
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
}
export interface VerificationsPostalAddressEncoded {
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
}
export const VerificationsPostalAddress: Schema.Schema<VerificationsPostalAddress, VerificationsPostalAddressEncoded, never> = Schema.Struct({
  addressLines: Schema.optional(Schema.Array(Schema.String)),
  administrativeArea: Schema.optional(Schema.String),
  languageCode: Schema.optional(Schema.String),
  locality: Schema.optional(Schema.String),
  organization: Schema.optional(Schema.String),
  postalCode: Schema.optional(Schema.String),
  recipients: Schema.optional(Schema.Array(Schema.String)),
  regionCode: Schema.optional(Schema.String),
  revision: Schema.optional(Schema.Int),
  sortingCode: Schema.optional(Schema.String),
  sublocality: Schema.optional(Schema.String),
});

/** Indicates that the location duplicates another location that is in good standing. */
export interface VerificationsResolveOwnershipConflict {

}
export interface VerificationsResolveOwnershipConflictEncoded {

}
export const VerificationsResolveOwnershipConflict: Schema.Schema<VerificationsResolveOwnershipConflict, VerificationsResolveOwnershipConflictEncoded, never> = Schema.Struct({

});

/** Additional data for service business verification. */
export interface VerificationsServiceBusinessContext {
  readonly address?: VerificationsPostalAddress;
}
export interface VerificationsServiceBusinessContextEncoded {
  readonly address?: VerificationsPostalAddressEncoded;
}
export const VerificationsServiceBusinessContext: Schema.Schema<VerificationsServiceBusinessContext, VerificationsServiceBusinessContextEncoded, never> = Schema.Struct({
  address: Schema.optional(Schema.suspend(() => VerificationsPostalAddress)),
});

/** A verification represents a verification attempt on a location. */
export interface VerificationsVerification {
  readonly announcement?: string;
  readonly createTime?: string;
  readonly method?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO" | "TRUSTED_PARTNER";
  readonly name?: string;
  readonly state?: "STATE_UNSPECIFIED" | "PENDING" | "COMPLETED" | "FAILED";
}
export interface VerificationsVerificationEncoded {
  readonly announcement?: string;
  readonly createTime?: string;
  readonly method?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO" | "TRUSTED_PARTNER";
  readonly name?: string;
  readonly state?: "STATE_UNSPECIFIED" | "PENDING" | "COMPLETED" | "FAILED";
}
export const VerificationsVerification: Schema.Schema<VerificationsVerification, VerificationsVerificationEncoded, never> = Schema.Struct({
  announcement: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  method: Schema.optional(Schema.Union(Schema.Literal("VERIFICATION_METHOD_UNSPECIFIED"), Schema.Literal("ADDRESS"), Schema.Literal("EMAIL"), Schema.Literal("PHONE_CALL"), Schema.Literal("SMS"), Schema.Literal("AUTO"), Schema.Literal("TRUSTED_PARTNER"))),
  name: Schema.optional(Schema.String),
  state: Schema.optional(Schema.Union(Schema.Literal("STATE_UNSPECIFIED"), Schema.Literal("PENDING"), Schema.Literal("COMPLETED"), Schema.Literal("FAILED"))),
});

/** The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data). */
export interface VerificationsVerificationOption {
  readonly addressData?: VerificationsAddressVerificationData;
  readonly announcement?: string;
  readonly emailData?: VerificationsEmailVerificationData;
  readonly phoneNumber?: string;
  readonly verificationMethod?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO" | "TRUSTED_PARTNER";
}
export interface VerificationsVerificationOptionEncoded {
  readonly addressData?: VerificationsAddressVerificationDataEncoded;
  readonly announcement?: string;
  readonly emailData?: VerificationsEmailVerificationDataEncoded;
  readonly phoneNumber?: string;
  readonly verificationMethod?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO" | "TRUSTED_PARTNER";
}
export const VerificationsVerificationOption: Schema.Schema<VerificationsVerificationOption, VerificationsVerificationOptionEncoded, never> = Schema.Struct({
  addressData: Schema.optional(Schema.suspend(() => VerificationsAddressVerificationData)),
  announcement: Schema.optional(Schema.String),
  emailData: Schema.optional(Schema.suspend(() => VerificationsEmailVerificationData)),
  phoneNumber: Schema.optional(Schema.String),
  verificationMethod: Schema.optional(Schema.Union(Schema.Literal("VERIFICATION_METHOD_UNSPECIFIED"), Schema.Literal("ADDRESS"), Schema.Literal("EMAIL"), Schema.Literal("PHONE_CALL"), Schema.Literal("SMS"), Schema.Literal("AUTO"), Schema.Literal("TRUSTED_PARTNER"))),
});

/** Token generated by a vetted [partner](https://support.google.com/business/answer/7674102). */
export interface VerificationsVerificationToken {
  readonly tokenString?: string;
}
export interface VerificationsVerificationTokenEncoded {
  readonly tokenString?: string;
}
export const VerificationsVerificationToken: Schema.Schema<VerificationsVerificationToken, VerificationsVerificationTokenEncoded, never> = Schema.Struct({
  tokenString: Schema.optional(Schema.String),
});

/** Indicates that the location requires verification. Contains information about the current verification actions performed on the location. */
export interface VerificationsVerify {
  readonly hasPendingVerification?: boolean;
}
export interface VerificationsVerifyEncoded {
  readonly hasPendingVerification?: boolean;
}
export const VerificationsVerify: Schema.Schema<VerificationsVerify, VerificationsVerifyEncoded, never> = Schema.Struct({
  hasPendingVerification: Schema.optional(Schema.Boolean),
});

/** Request message for Verifications.VerifyLocation. */
export interface VerificationsVerifyLocationRequest {
  readonly context?: VerificationsServiceBusinessContext;
  readonly emailAddress?: string;
  readonly languageCode?: string;
  readonly mailerContact?: string;
  readonly method?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO" | "TRUSTED_PARTNER";
  readonly phoneNumber?: string;
  readonly token?: VerificationsVerificationToken;
  readonly trustedPartnerToken?: string;
}
export interface VerificationsVerifyLocationRequestEncoded {
  readonly context?: VerificationsServiceBusinessContextEncoded;
  readonly emailAddress?: string;
  readonly languageCode?: string;
  readonly mailerContact?: string;
  readonly method?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO" | "TRUSTED_PARTNER";
  readonly phoneNumber?: string;
  readonly token?: VerificationsVerificationTokenEncoded;
  readonly trustedPartnerToken?: string;
}
export const VerificationsVerifyLocationRequest: Schema.Schema<VerificationsVerifyLocationRequest, VerificationsVerifyLocationRequestEncoded, never> = Schema.Struct({
  context: Schema.optional(Schema.suspend(() => VerificationsServiceBusinessContext)),
  emailAddress: Schema.optional(Schema.String),
  languageCode: Schema.optional(Schema.String),
  mailerContact: Schema.optional(Schema.String),
  method: Schema.optional(Schema.Union(Schema.Literal("VERIFICATION_METHOD_UNSPECIFIED"), Schema.Literal("ADDRESS"), Schema.Literal("EMAIL"), Schema.Literal("PHONE_CALL"), Schema.Literal("SMS"), Schema.Literal("AUTO"), Schema.Literal("TRUSTED_PARTNER"))),
  phoneNumber: Schema.optional(Schema.String),
  token: Schema.optional(Schema.suspend(() => VerificationsVerificationToken)),
  trustedPartnerToken: Schema.optional(Schema.String),
});

/** Response message for Verifications.VerifyLocation. */
export interface VerificationsVerifyLocationResponse {
  readonly verification?: VerificationsVerification;
}
export interface VerificationsVerifyLocationResponseEncoded {
  readonly verification?: VerificationsVerificationEncoded;
}
export const VerificationsVerifyLocationResponse: Schema.Schema<VerificationsVerifyLocationResponse, VerificationsVerifyLocationResponseEncoded, never> = Schema.Struct({
  verification: Schema.optional(Schema.suspend(() => VerificationsVerification)),
});

/** Response message for VoiceOfMerchant.GetVoiceOfMerchantState. */
export interface VerificationsVoiceOfMerchantState {
  readonly complyWithGuidelines?: VerificationsComplyWithGuidelines;
  readonly hasBusinessAuthority?: boolean;
  readonly hasVoiceOfMerchant?: boolean;
  readonly resolveOwnershipConflict?: VerificationsResolveOwnershipConflict;
  readonly verify?: VerificationsVerify;
  readonly waitForVoiceOfMerchant?: VerificationsWaitForVoiceOfMerchant;
}
export interface VerificationsVoiceOfMerchantStateEncoded {
  readonly complyWithGuidelines?: VerificationsComplyWithGuidelinesEncoded;
  readonly hasBusinessAuthority?: boolean;
  readonly hasVoiceOfMerchant?: boolean;
  readonly resolveOwnershipConflict?: VerificationsResolveOwnershipConflictEncoded;
  readonly verify?: VerificationsVerifyEncoded;
  readonly waitForVoiceOfMerchant?: VerificationsWaitForVoiceOfMerchantEncoded;
}
export const VerificationsVoiceOfMerchantState: Schema.Schema<VerificationsVoiceOfMerchantState, VerificationsVoiceOfMerchantStateEncoded, never> = Schema.Struct({
  complyWithGuidelines: Schema.optional(Schema.suspend(() => VerificationsComplyWithGuidelines)),
  hasBusinessAuthority: Schema.optional(Schema.Boolean),
  hasVoiceOfMerchant: Schema.optional(Schema.Boolean),
  resolveOwnershipConflict: Schema.optional(Schema.suspend(() => VerificationsResolveOwnershipConflict)),
  verify: Schema.optional(Schema.suspend(() => VerificationsVerify)),
  waitForVoiceOfMerchant: Schema.optional(Schema.suspend(() => VerificationsWaitForVoiceOfMerchant)),
});

/** Indicates that the location will gain voice of merchant after passing review. */
export interface VerificationsWaitForVoiceOfMerchant {

}
export interface VerificationsWaitForVoiceOfMerchantEncoded {

}
export const VerificationsWaitForVoiceOfMerchant: Schema.Schema<VerificationsWaitForVoiceOfMerchant, VerificationsWaitForVoiceOfMerchantEncoded, never> = Schema.Struct({

});
