// @generated
// fingerprint: sha256:e1b02e2bf74c2ed673160de7751eb9dec60a3ee2309dab251a854831bd8e2241
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.

/** Request message for AccessControl.AcceptInvitation. */
export interface AccountManagementAcceptInvitationRequest {

}

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

/** An administrator of an Account or a location. */
export interface AccountManagementAdmin {
  readonly account?: string;
  readonly admin?: string;
  readonly name?: string;
  readonly pendingInvitation?: boolean;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "PRIMARY_OWNER" | "OWNER" | "MANAGER" | "SITE_MANAGER";
}

/** Request message for AccessControl.DeclineInvitation. */
export interface AccountManagementDeclineInvitationRequest {

}

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
export interface AccountManagementEmpty {

}

/** Represents a pending invitation. */
export interface AccountManagementInvitation {
  readonly name?: string;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "PRIMARY_OWNER" | "OWNER" | "MANAGER" | "SITE_MANAGER";
  readonly targetAccount?: AccountManagementAccount;
  readonly targetLocation?: AccountManagementTargetLocation;
  readonly targetType?: "TARGET_TYPE_UNSPECIFIED" | "ACCOUNTS_ONLY" | "LOCATIONS_ONLY";
}

/** Response message for AccessControl.ListAccountAdmins. */
export interface AccountManagementListAccountAdminsResponse {
  readonly accountAdmins?: ReadonlyArray<AccountManagementAdmin>;
}

/** Response message for Accounts.ListAccounts. */
export interface AccountManagementListAccountsResponse {
  readonly accounts?: ReadonlyArray<AccountManagementAccount>;
  readonly nextPageToken?: string;
}

/** Response message for AccessControl.ListInvitations. */
export interface AccountManagementListInvitationsResponse {
  readonly invitations?: ReadonlyArray<AccountManagementInvitation>;
}

/** Response message for AccessControl.ListLocationAdmins. */
export interface AccountManagementListLocationAdminsResponse {
  readonly admins?: ReadonlyArray<AccountManagementAdmin>;
}

/** Additional information stored for an organization. */
export interface AccountManagementOrganizationInfo {
  readonly address?: AccountManagementPostalAddress;
  readonly phoneNumber?: string;
  readonly registeredDomain?: string;
}

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

/** Represents a target location for a pending invitation. */
export interface AccountManagementTargetLocation {
  readonly address?: string;
  readonly locationName?: string;
  readonly placeId?: string;
}

/** Request message for AccessControl.TransferLocation. */
export interface AccountManagementTransferLocationRequest {
  readonly destinationAccount?: string;
}

/** Additional information that is surfaced in AdWords. */
export interface BusinessInformationAdWordsLocationExtensions {
  readonly adPhone?: string;
}

/** A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes. */
export interface BusinessInformationAttribute {
  readonly name?: string;
  readonly repeatedEnumValue?: BusinessInformationRepeatedEnumAttributeValue;
  readonly uriValues?: ReadonlyArray<BusinessInformationUriAttributeValue>;
  readonly values?: ReadonlyArray<unknown>;
  readonly valueType?: "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED" | "BOOL" | "ENUM" | "URL" | "REPEATED_ENUM";
}

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

/** A container for all the attributes for a given location. */
export interface BusinessInformationAttributes {
  readonly attributes?: ReadonlyArray<BusinessInformationAttribute>;
  readonly name?: string;
}

/** Metadata for supported attribute values. */
export interface BusinessInformationAttributeValueMetadata {
  readonly displayName?: string;
  readonly value?: unknown;
}

/** Response message for BusinessCategories.BatchGetBusinessCategories. */
export interface BusinessInformationBatchGetCategoriesResponse {
  readonly categories?: ReadonlyArray<BusinessInformationCategory>;
}

/** Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances. */
export interface BusinessInformationBusinessHours {
  readonly periods?: ReadonlyArray<BusinessInformationTimePeriod>;
}

/** A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask. */
export interface BusinessInformationCategories {
  readonly additionalCategories?: ReadonlyArray<BusinessInformationCategory>;
  readonly primaryCategory?: BusinessInformationCategory;
}

/** A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`. */
export interface BusinessInformationCategory {
  readonly displayName?: string;
  readonly moreHoursTypes?: ReadonlyArray<BusinessInformationMoreHoursType>;
  readonly name?: string;
  readonly serviceTypes?: ReadonlyArray<BusinessInformationServiceType>;
}

/** A chain is a brand that your business's locations can be affiliated with. */
export interface BusinessInformationChain {
  readonly chainNames?: ReadonlyArray<BusinessInformationChainName>;
  readonly locationCount?: number;
  readonly name?: string;
  readonly websites?: ReadonlyArray<BusinessInformationChainUri>;
}

/** Name to be used when displaying the chain. */
export interface BusinessInformationChainName {
  readonly displayName?: string;
  readonly languageCode?: string;
}

/** Url to be used when displaying the chain. */
export interface BusinessInformationChainUri {
  readonly uri?: string;
}

/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
export interface BusinessInformationDate {
  readonly day?: number;
  readonly month?: number;
  readonly year?: number;
}

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
export interface BusinessInformationEmpty {

}

/** Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for such services using a geomerchant surface. */
export interface BusinessInformationFreeFormServiceItem {
  readonly category?: string;
  readonly label?: BusinessInformationLabel;
}

/** Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed. */
export interface BusinessInformationGoogleLocation {
  readonly location?: BusinessInformationLocation;
  readonly name?: string;
  readonly requestAdminRightsUri?: string;
}

/** Represents the view of a location as it appears to consumers, which includes updates that are currently serving on Google Maps and Search. */
export interface BusinessInformationGoogleUpdatedLocation {
  readonly diffMask?: string;
  readonly location?: BusinessInformationLocation;
  readonly pendingMask?: string;
}

/** Label to be used when displaying the price list, section, or item. */
export interface BusinessInformationLabel {
  readonly description?: string;
  readonly displayName?: string;
  readonly languageCode?: string;
}

/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
export interface BusinessInformationLatLng {
  readonly latitude?: number;
  readonly longitude?: number;
}

/** Response for AttributesService.ListAttributeMetadata. */
export interface BusinessInformationListAttributeMetadataResponse {
  readonly attributeMetadata?: ReadonlyArray<BusinessInformationAttributeMetadata>;
  readonly nextPageToken?: string;
}

/** Response message for BusinessCategories.ListCategories. */
export interface BusinessInformationListCategoriesResponse {
  readonly categories?: ReadonlyArray<BusinessInformationCategory>;
  readonly nextPageToken?: string;
}

/** Response message for Locations.ListLocations. */
export interface BusinessInformationListLocationsResponse {
  readonly locations?: ReadonlyArray<BusinessInformationLocation>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
}

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

/** Represents an amount of money with its currency type. */
export interface BusinessInformationMoney {
  readonly currencyCode?: string;
  readonly nanos?: number;
  readonly units?: string;
}

/** The time periods during which a location is open for certain types of business. */
export interface BusinessInformationMoreHours {
  readonly hoursTypeId?: string;
  readonly periods?: ReadonlyArray<BusinessInformationTimePeriod>;
}

/** More hours types that a business can offers, in addition to its regular hours. */
export interface BusinessInformationMoreHoursType {
  readonly displayName?: string;
  readonly hoursTypeId?: string;
  readonly localizedDisplayName?: string;
}

/** Information related to the opening state of the business. */
export interface BusinessInformationOpenInfo {
  readonly canReopen?: boolean;
  readonly openingDate?: BusinessInformationDate;
  readonly status?: "OPEN_FOR_BUSINESS_UNSPECIFIED" | "OPEN" | "CLOSED_PERMANENTLY" | "CLOSED_TEMPORARILY";
}

/** A collection of phone numbers for the business. During updates, both fields must be set. Clients may not update just the primary or additional phone numbers using the update mask. International phone format is preferred, such as "+1 415 555 0132", see more in (https://developers.google.com/style/phone-numbers#international-phone-numbers). */
export interface BusinessInformationPhoneNumbers {
  readonly additionalPhones?: ReadonlyArray<string>;
  readonly primaryPhone?: string;
}

/** Defines an area that's represented by a place ID. */
export interface BusinessInformationPlaceInfo {
  readonly placeId?: string;
  readonly placeName?: string;
}

/** Defines the union of areas represented by a set of places. */
export interface BusinessInformationPlaces {
  readonly placeInfos?: ReadonlyArray<BusinessInformationPlaceInfo>;
}

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

/** All information pertaining to the location's profile. */
export interface BusinessInformationProfile {
  readonly description?: string;
}

/** Information of all parent and children locations related to this one. */
export interface BusinessInformationRelationshipData {
  readonly childrenLocations?: ReadonlyArray<BusinessInformationRelevantLocation>;
  readonly parentChain?: string;
  readonly parentLocation?: BusinessInformationRelevantLocation;
}

/** Information about another location that is related to current one. The relation can be any one of DEPARTMENT_OF or INDEPENDENT_ESTABLISHMENT_OF, and the location specified here can be on either side (parent/child) of the location. */
export interface BusinessInformationRelevantLocation {
  readonly placeId?: string;
  readonly relationType?: "RELATION_TYPE_UNSPECIFIED" | "DEPARTMENT_OF" | "INDEPENDENT_ESTABLISHMENT_IN";
}

/** Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified. */
export interface BusinessInformationRepeatedEnumAttributeValue {
  readonly setValues?: ReadonlyArray<string>;
  readonly unsetValues?: ReadonlyArray<string>;
}

/** Response message for Locations.SearchChains. */
export interface BusinessInformationSearchChainsResponse {
  readonly chains?: ReadonlyArray<BusinessInformationChain>;
}

/** Request message for GoogleLocations.SearchGoogleLocations. */
export interface BusinessInformationSearchGoogleLocationsRequest {
  readonly location?: BusinessInformationLocation;
  readonly pageSize?: number;
  readonly query?: string;
}

/** Response message for GoogleLocations.SearchGoogleLocations. */
export interface BusinessInformationSearchGoogleLocationsResponse {
  readonly googleLocations?: ReadonlyArray<BusinessInformationGoogleLocation>;
}

/** Service area businesses provide their service at the customer's location (for example, a locksmith or plumber). */
export interface BusinessInformationServiceAreaBusiness {
  readonly businessType?: "BUSINESS_TYPE_UNSPECIFIED" | "CUSTOMER_LOCATION_ONLY" | "CUSTOMER_AND_BUSINESS_LOCATION";
  readonly places?: BusinessInformationPlaces;
  readonly regionCode?: string;
}

/** A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service. */
export interface BusinessInformationServiceItem {
  readonly freeFormServiceItem?: BusinessInformationFreeFormServiceItem;
  readonly price?: BusinessInformationMoney;
  readonly structuredServiceItem?: BusinessInformationStructuredServiceItem;
}

/** A message describing a service type that the business offers. */
export interface BusinessInformationServiceType {
  readonly displayName?: string;
  readonly serviceTypeId?: string;
}

/** Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00 */
export interface BusinessInformationSpecialHourPeriod {
  readonly closed?: boolean;
  readonly closeTime?: BusinessInformationTimeOfDay;
  readonly endDate?: BusinessInformationDate;
  readonly openTime?: BusinessInformationTimeOfDay;
  readonly startDate?: BusinessInformationDate;
}

/** Represents a set of time periods when a location's operational hours differ from its normal business hours. */
export interface BusinessInformationSpecialHours {
  readonly specialHourPeriods?: ReadonlyArray<BusinessInformationSpecialHourPeriod>;
}

/** Represents a structured service offered by the merchant. For eg: toilet_installation. */
export interface BusinessInformationStructuredServiceItem {
  readonly description?: string;
  readonly serviceTypeId?: string;
}

/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
export interface BusinessInformationTimeOfDay {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
}

/** Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day. */
export interface BusinessInformationTimePeriod {
  readonly closeDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly closeTime?: BusinessInformationTimeOfDay;
  readonly openDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly openTime?: BusinessInformationTimeOfDay;
}

/** Values for an attribute with a `value_type` of URL. */
export interface BusinessInformationUriAttributeValue {
  readonly uri?: string;
}

/** Request message for AccessControl.AcceptInvitation. */
export interface LegacyV4AcceptInvitationRequest {

}

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

/** Indicates status of the account, such as whether the account has been verified by Google. */
export interface LegacyV4AccountState {
  readonly status?: "ACCOUNT_STATUS_UNSPECIFIED" | "VERIFIED" | "UNVERIFIED" | "VERIFICATION_REQUESTED";
}

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

/** Input for ADDRESS verification. */
export interface LegacyV4AddressInput {
  readonly mailerContactName?: string;
}

/** Display data for verifications through postcard. */
export interface LegacyV4AddressVerificationData {
  readonly address?: LegacyV4PostalAddress;
  readonly businessName?: string;
}

/** An administrator of an Account or a Location. */
export interface LegacyV4Admin {
  readonly adminName?: string;
  readonly name?: string;
  readonly pendingInvitation?: boolean;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "OWNER" | "CO_OWNER" | "MANAGER" | "COMMUNITY_MANAGER";
}

/** Additional information that is surfaced in AdWords. */
export interface LegacyV4AdWordsLocationExtensions {
  readonly adPhone?: string;
}

/** Represents an answer to a question */
export interface LegacyV4Answer {
  readonly author?: LegacyV4Author;
  readonly createTime?: string;
  readonly name?: string;
  readonly text?: string;
  readonly updateTime?: string;
  readonly upvoteCount?: number;
}

/** Request message for Locations.AssociateLocationRequest. */
export interface LegacyV4AssociateLocationRequest {
  readonly placeId?: string;
}

/** A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes. */
export interface LegacyV4Attribute {
  readonly attributeId?: string;
  readonly repeatedEnumValue?: LegacyV4RepeatedEnumAttributeValue;
  readonly urlValues?: ReadonlyArray<LegacyV4UrlAttributeValue>;
  readonly values?: ReadonlyArray<unknown>;
  readonly valueType?: "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED" | "BOOL" | "ENUM" | "URL" | "REPEATED_ENUM";
}

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

/** Metadata for supported attribute values. */
export interface LegacyV4AttributeValueMetadata {
  readonly displayName?: string;
  readonly value?: unknown;
}

/** Attribution information for customer media items, such as the contributor's name and profile picture. */
export interface LegacyV4Attribution {
  readonly profileName?: string;
  readonly profilePhotoUrl?: string;
  readonly profileUrl?: string;
  readonly takedownUrl?: string;
}

/** Represents the author of a question or answer */
export interface LegacyV4Author {
  readonly displayName?: string;
  readonly profilePhotoUrl?: string;
  readonly type?: "AUTHOR_TYPE_UNSPECIFIED" | "REGULAR_USER" | "LOCAL_GUIDE" | "MERCHANT";
}

/** A request for basic metric insights. */
export interface LegacyV4BasicMetricsRequest {
  readonly metricRequests?: ReadonlyArray<LegacyV4MetricRequest>;
  readonly timeRange?: LegacyV4TimeRange;
}

/** Response message for BusinessCategories.BatchGetBusinessCategories. */
export interface LegacyV4BatchGetBusinessCategoriesResponse {
  readonly categories?: ReadonlyArray<LegacyV4Category>;
}

/** Request message for Locations.BatchGetLocations. */
export interface LegacyV4BatchGetLocationsRequest {
  readonly locationNames?: ReadonlyArray<string>;
}

/** Response message for Locations.BatchGetLocations. */
export interface LegacyV4BatchGetLocationsResponse {
  readonly locations?: ReadonlyArray<LegacyV4Location>;
}

/** Request message for Reviews.BatchGetReviews. */
export interface LegacyV4BatchGetReviewsRequest {
  readonly ignoreRatingOnlyReviews?: boolean;
  readonly locationNames?: ReadonlyArray<string>;
  readonly orderBy?: string;
  readonly pageSize?: number;
  readonly pageToken?: string;
}

/** Response message for Reviews.BatchGetReviews. */
export interface LegacyV4BatchGetReviewsResponse {
  readonly locationReviews?: ReadonlyArray<LegacyV4LocationReview>;
  readonly nextPageToken?: string;
}

/** Features of the property of specific interest to the business traveler. */
export interface LegacyV4Business {
  readonly businessCenter?: boolean;
  readonly businessCenterException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRooms?: boolean;
  readonly meetingRoomsCount?: number;
  readonly meetingRoomsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRoomsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}

/** Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances. */
export interface LegacyV4BusinessHours {
  readonly periods?: ReadonlyArray<LegacyV4TimePeriod>;
}

/** An action that is performed when the user clicks through the post */
export interface LegacyV4CallToAction {
  readonly actionType?: "ACTION_TYPE_UNSPECIFIED" | "BOOK" | "ORDER" | "SHOP" | "LEARN_MORE" | "SIGN_UP" | "GET_OFFER" | "CALL";
  readonly url?: string;
}

/** This message denotes calories information with an upper bound and lower bound range. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
export interface LegacyV4CaloriesFact {
  readonly lowerAmount?: number;
  readonly unit?: "ENERGY_UNIT_UNSPECIFIED" | "CALORIE" | "JOULE";
  readonly upperAmount?: number;
}

/** A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list). */
export interface LegacyV4Category {
  readonly categoryId?: string;
  readonly displayName?: string;
  readonly moreHoursTypes?: ReadonlyArray<LegacyV4MoreHoursType>;
  readonly serviceTypes?: ReadonlyArray<LegacyV4ServiceType>;
}

/** A chain is a brand that your business's locations can be affiliated with. */
export interface LegacyV4Chain {
  readonly chainNames?: ReadonlyArray<LegacyV4ChainName>;
  readonly locationCount?: number;
  readonly name?: string;
  readonly websites?: ReadonlyArray<LegacyV4ChainUrl>;
}

/** Name to be used when displaying the chain. */
export interface LegacyV4ChainName {
  readonly displayName?: string;
  readonly languageCode?: string;
}

/** Url to be used when displaying the chain. */
export interface LegacyV4ChainUrl {
  readonly url?: string;
}

/** Request message for Locations.ClearLocationAssociationRequest. */
export interface LegacyV4ClearLocationAssociationRequest {

}

/** Request message for Verifications.CompleteVerificationAction. */
export interface LegacyV4CompleteVerificationRequest {
  readonly pin?: string;
}

/** Response message for Verifications.CompleteVerificationAction. */
export interface LegacyV4CompleteVerificationResponse {
  readonly verification?: LegacyV4Verification;
}

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

/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`. */
export interface LegacyV4Date {
  readonly day?: number;
  readonly month?: number;
  readonly year?: number;
}

/** Request message for AccessControl.DeclineInvitation. */
export interface LegacyV4DeclineInvitationRequest {

}

/** A value for a single metric with a given time dimension. */
export interface LegacyV4DimensionalMetricValue {
  readonly metricOption?: "METRIC_OPTION_UNSPECIFIED" | "AGGREGATED_TOTAL" | "AGGREGATED_DAILY" | "BREAKDOWN_DAY_OF_WEEK" | "BREAKDOWN_HOUR_OF_DAY";
  readonly timeDimension?: LegacyV4TimeDimension;
  readonly value?: string;
}

/** Dimensions of the media item. */
export interface LegacyV4Dimensions {
  readonly heightPixels?: number;
  readonly widthPixels?: number;
}

/** A request for driving direction insights. */
export interface LegacyV4DrivingDirectionMetricsRequest {
  readonly languageCode?: string;
  readonly numDays?: "SEVEN" | "THIRTY" | "NINETY";
}

/** Information about the location that this location duplicates. */
export interface LegacyV4Duplicate {
  readonly access?: "ACCESS_UNSPECIFIED" | "ACCESS_UNKNOWN" | "ALLOWED" | "INSUFFICIENT";
  readonly locationName?: string;
  readonly placeId?: string;
}

/** Input for EMAIL verification. */
export interface LegacyV4EmailInput {
  readonly emailAddress?: string;
}

/** Display data for verifications through email. */
export interface LegacyV4EmailVerificationData {
  readonly domainName?: string;
  readonly isUserNameEditable?: boolean;
  readonly userName?: string;
}

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`. */
export interface LegacyV4Empty {

}

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

/** Services and amenities for families and young guests. */
export interface LegacyV4Families {
  readonly babysitting?: boolean;
  readonly babysittingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsActivities?: boolean;
  readonly kidsActivitiesException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly kidsClub?: boolean;
  readonly kidsClubException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}

/** Request message for Verifications.FetchVerificationOptions. */
export interface LegacyV4FetchVerificationOptionsRequest {
  readonly context?: LegacyV4ServiceBusinessContext;
  readonly languageCode?: string;
}

/** Response message for Verifications.FetchVerificationOptions. */
export interface LegacyV4FetchVerificationOptionsResponse {
  readonly options?: ReadonlyArray<LegacyV4VerificationOption>;
}

/** Request message for Locations.FindMatchingLocations. */
export interface LegacyV4FindMatchingLocationsRequest {
  readonly languageCode?: string;
  readonly maxCacheDuration?: string;
  readonly numResults?: number;
}

/** Response message for Locations.FindMatchingLocations. */
export interface LegacyV4FindMatchingLocationsResponse {
  readonly matchedLocations?: ReadonlyArray<LegacyV4MatchedLocation>;
  readonly matchTime?: string;
}

/** Follower metadata for a location. */
export interface LegacyV4FollowersMetadata {
  readonly count?: string;
  readonly name?: string;
}

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

/** Menu of a business that serves food dishes. */
export interface LegacyV4FoodMenu {
  readonly cuisines?: ReadonlyArray<"CUISINE_UNSPECIFIED" | "AMERICAN" | "ASIAN" | "BRAZILIAN" | "BREAK_FAST" | "BRUNCH" | "CHICKEN" | "CHINESE" | "FAMILY" | "FAST_FOOD" | "FRENCH" | "GREEK" | "GERMAN" | "HAMBURGER" | "INDIAN" | "INDONESIAN" | "ITALIAN" | "JAPANESE" | "KOREAN" | "LATIN_AMERICAN" | "MEDITERRANEAN" | "MEXICAN" | "PAKISTANI" | "PIZZA" | "SEAFOOD" | "SPANISH" | "SUSHI" | "THAI" | "TURKISH" | "VEGETARIAN" | "VIETNAMESE" | "OTHER_CUISINE">;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabel>;
  readonly sections?: ReadonlyArray<LegacyV4FoodMenuSection>;
  readonly sourceUrl?: string;
}

/** Item of a Section. It can be the dish itself, or can contain multiple FoodMenuItemOption. */
export interface LegacyV4FoodMenuItem {
  readonly attributes?: LegacyV4FoodMenuItemAttributes;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabel>;
  readonly options?: ReadonlyArray<LegacyV4FoodMenuItemOption>;
}

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

/** Option of an Item. It requires an explicit user selection. */
export interface LegacyV4FoodMenuItemOption {
  readonly attributes?: LegacyV4FoodMenuItemAttributes;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabel>;
}

/** Menus of a business that serve food dishes. */
export interface LegacyV4FoodMenus {
  readonly menus?: ReadonlyArray<LegacyV4FoodMenu>;
  readonly name?: string;
}

/** Section of a menu. It can contain multiple items/dishes. */
export interface LegacyV4FoodMenuSection {
  readonly items?: ReadonlyArray<LegacyV4FoodMenuItem>;
  readonly labels?: ReadonlyArray<LegacyV4MenuLabel>;
}

/** Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface. */
export interface LegacyV4FreeFormServiceItem {
  readonly categoryId?: string;
  readonly label?: LegacyV4Label;
}

/** Request message for Accounts.GenerateAccountNumber. */
export interface LegacyV4GenerateAccountNumberRequest {

}

/** Response message for LodgingService.GetGoogleUpdatedLodging */
export interface LegacyV4GetGoogleUpdatedLodgingResponse {
  readonly diffMask?: string;
  readonly lodging?: LegacyV4Lodging;
}

/** Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed. */
export interface LegacyV4GoogleLocation {
  readonly location?: LegacyV4Location;
  readonly name?: string;
  readonly requestAdminRightsUrl?: string;
}

/** Represents a location that was modified by Google. */
export interface LegacyV4GoogleUpdatedLocation {
  readonly diffMask?: string;
  readonly location?: LegacyV4Location;
}

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

/** A specific type of unit primarily defined by its features. */
export interface LegacyV4GuestUnitType {
  readonly codes?: ReadonlyArray<string>;
  readonly features?: LegacyV4GuestUnitFeatures;
  readonly label?: string;
}

/** Health and safety measures implemented by the hotel during COVID-19. */
export interface LegacyV4HealthAndSafety {
  readonly enhancedCleaning?: LegacyV4EnhancedCleaning;
  readonly increasedFoodSafety?: LegacyV4IncreasedFoodSafety;
  readonly minimizedContact?: LegacyV4MinimizedContact;
  readonly personalProtection?: LegacyV4PersonalProtection;
  readonly physicalDistancing?: LegacyV4PhysicalDistancing;
}

/** The Health provider attributes linked with this location. */
export interface LegacyV4HealthProviderAttributes {
  readonly insuranceNetworks?: ReadonlyArray<LegacyV4InsuranceNetwork>;
  readonly name?: string;
}

/** Conveniences provided in guest units to facilitate an easier, more comfortable stay. */
export interface LegacyV4Housekeeping {
  readonly dailyHousekeeping?: boolean;
  readonly dailyHousekeepingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly housekeepingAvailable?: boolean;
  readonly housekeepingAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly turndownService?: boolean;
  readonly turndownServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}

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

/** This message denotes an ingredient information of a food dish. */
export interface LegacyV4Ingredient {
  readonly labels?: ReadonlyArray<LegacyV4MenuLabel>;
}

/** A single insurance network. Next id: 5 */
export interface LegacyV4InsuranceNetwork {
  readonly networkId?: string;
  readonly networkNames?: Readonly<Record<string, string>>;
  readonly payerNames?: Readonly<Record<string, string>>;
  readonly state?: "NETWORK_STATE_UNSPECIFIED" | "ACCEPTED" | "PENDING_ADD" | "PENDING_DELETE" | "NOT_ACCEPTED";
}

/** Output only. Represents a pending invitation. */
export interface LegacyV4Invitation {
  readonly name?: string;
  readonly role?: "ADMIN_ROLE_UNSPECIFIED" | "OWNER" | "CO_OWNER" | "MANAGER" | "COMMUNITY_MANAGER";
  readonly targetAccount?: LegacyV4Account;
  readonly targetLocation?: LegacyV4TargetLocation;
}

/** A single list item. Each variation of an item in the price list should have its own Item with its own price data. */
export interface LegacyV4Item {
  readonly itemId?: string;
  readonly labels?: ReadonlyArray<LegacyV4Label>;
  readonly price?: LegacyV4Money;
}

/** Label to be used when displaying the price list, section, or item. */
export interface LegacyV4Label {
  readonly description?: string;
  readonly displayName?: string;
  readonly languageCode?: string;
}

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

/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges. */
export interface LegacyV4LatLng {
  readonly latitude?: number;
  readonly longitude?: number;
}

/** Response message for AccessControl.ListAccountAdmins. */
export interface LegacyV4ListAccountAdminsResponse {
  readonly admins?: ReadonlyArray<LegacyV4Admin>;
}

/** Response message for Accounts.ListAccounts. */
export interface LegacyV4ListAccountsResponse {
  readonly accounts?: ReadonlyArray<LegacyV4Account>;
  readonly nextPageToken?: string;
}

/** Response message for QuestionsAndAnswers.ListAnswers */
export interface LegacyV4ListAnswersResponse {
  readonly answers?: ReadonlyArray<LegacyV4Answer>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
}

/** Response message for Locations.ListAttributeMetadata. */
export interface LegacyV4ListAttributeMetadataResponse {
  readonly attributes?: ReadonlyArray<LegacyV4AttributeMetadata>;
  readonly nextPageToken?: string;
}

export interface LegacyV4ListBusinessCategoriesResponse {
  readonly categories?: ReadonlyArray<LegacyV4Category>;
  readonly nextPageToken?: string;
  readonly totalCategoryCount?: number;
}

/** Response message for Media.ListCustomerMediaItems. */
export interface LegacyV4ListCustomerMediaItemsResponse {
  readonly mediaItems?: ReadonlyArray<LegacyV4MediaItem>;
  readonly nextPageToken?: string;
  readonly totalMediaItemCount?: number;
}

/** Response message for InsuranceNetworkService.ListInsuranceNetworks */
export interface LegacyV4ListInsuranceNetworksResponse {
  readonly networks?: ReadonlyArray<LegacyV4InsuranceNetwork>;
  readonly nextPageToken?: string;
}

/** Response message for AccessControl.ListInvitations. */
export interface LegacyV4ListInvitationsResponse {
  readonly invitations?: ReadonlyArray<LegacyV4Invitation>;
}

/** Response message for ListLocalPosts */
export interface LegacyV4ListLocalPostsResponse {
  readonly localPosts?: ReadonlyArray<LegacyV4LocalPost>;
  readonly nextPageToken?: string;
}

/** Response message for AccessControl.ListLocationAdmins. */
export interface LegacyV4ListLocationAdminsResponse {
  readonly admins?: ReadonlyArray<LegacyV4Admin>;
}

/** Response message for Locations.ListLocations. */
export interface LegacyV4ListLocationsResponse {
  readonly locations?: ReadonlyArray<LegacyV4Location>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
}

/** Response message for Media.ListMediaItems. */
export interface LegacyV4ListMediaItemsResponse {
  readonly mediaItems?: ReadonlyArray<LegacyV4MediaItem>;
  readonly nextPageToken?: string;
  readonly totalMediaItemCount?: number;
}

/** Response message for QuestionsAndAnswers.ListQuestions */
export interface LegacyV4ListQuestionsResponse {
  readonly nextPageToken?: string;
  readonly questions?: ReadonlyArray<LegacyV4Question>;
  readonly totalSize?: number;
}

/** Response message for GoogleLocations.ListRecommendedGoogleLocations. It also contains some locations that have been claimed by other Business Profile users since the last time they were recommended to this Business Profile account. */
export interface LegacyV4ListRecommendedGoogleLocationsResponse {
  readonly googleLocations?: ReadonlyArray<LegacyV4GoogleLocation>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
}

/** Response message for Reviews.ListReviews. */
export interface LegacyV4ListReviewsResponse {
  readonly averageRating?: number;
  readonly nextPageToken?: string;
  readonly reviews?: ReadonlyArray<LegacyV4Review>;
  readonly totalReviewCount?: number;
}

/** Response message for Verifications.ListVerifications. */
export interface LegacyV4ListVerificationsResponse {
  readonly nextPageToken?: string;
  readonly verifications?: ReadonlyArray<LegacyV4Verification>;
}

/** An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit. */
export interface LegacyV4LivingArea {
  readonly accessibility?: LegacyV4LivingAreaAccessibility;
  readonly eating?: LegacyV4LivingAreaEating;
  readonly features?: LegacyV4LivingAreaFeatures;
  readonly layout?: LegacyV4LivingAreaLayout;
  readonly sleeping?: LegacyV4LivingAreaSleeping;
}

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

/** All the information pertaining to an event featured in a local post. */
export interface LegacyV4LocalPostEvent {
  readonly schedule?: LegacyV4TimeInterval;
  readonly title?: string;
}

/** All the metrics requested for a Local Post. */
export interface LegacyV4LocalPostMetrics {
  readonly localPostName?: string;
  readonly metricValues?: ReadonlyArray<LegacyV4MetricValue>;
}

/** Specific fields for offer posts. */
export interface LegacyV4LocalPostOffer {
  readonly couponCode?: string;
  readonly redeemOnlineUrl?: string;
  readonly termsConditions?: string;
}

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

/** How the media item is associated with its location. */
export interface LegacyV4LocationAssociation {
  readonly category?: "CATEGORY_UNSPECIFIED" | "COVER" | "PROFILE" | "LOGO" | "EXTERIOR" | "INTERIOR" | "PRODUCT" | "AT_WORK" | "FOOD_AND_DRINK" | "MENU" | "COMMON_AREA" | "ROOMS" | "TEAMS" | "ADDITIONAL";
  readonly priceListItemId?: string;
}

/** A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region. */
export interface LegacyV4LocationDrivingDirectionMetrics {
  readonly locationName?: string;
  readonly timeZone?: string;
  readonly topDirectionSources?: ReadonlyArray<LegacyV4TopDirectionSources>;
}

/** Alternate/surrogate key references for a location. */
export interface LegacyV4LocationKey {
  readonly explicitNoPlaceId?: boolean;
  readonly placeId?: string;
  readonly plusPageId?: string;
  readonly requestId?: string;
}

/** A series of Metrics and BreakdownMetrics associated with a Location over some time range. */
export interface LegacyV4LocationMetrics {
  readonly locationName?: string;
  readonly metricValues?: ReadonlyArray<LegacyV4MetricValue>;
  readonly timeZone?: string;
}

/** Represents a review with location information. */
export interface LegacyV4LocationReview {
  readonly name?: string;
  readonly review?: LegacyV4Review;
}

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

/** Metadata for the Lodging. */
export interface LegacyV4LodgingMetadata {
  readonly updateTime?: string;
}

/** Represents a possible match to a location. */
export interface LegacyV4MatchedLocation {
  readonly isExactMatch?: boolean;
  readonly location?: LegacyV4Location;
}

/** Insights and statistics for the media item. */
export interface LegacyV4MediaInsights {
  readonly viewCount?: string;
}

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

/** Reference to the photo binary data of a `MediaItem` uploaded through the Google My Business API. Create a data ref using StartUploadMediaItemData, and use this ref when uploading bytes to [UpdateMedia] and subsequently calling CreateMediaItem. */
export interface LegacyV4MediaItemDataRef {
  readonly resourceName?: string;
}

/** Label to be used when displaying the menu and its various sub-components. */
export interface LegacyV4MenuLabel {
  readonly description?: string;
  readonly displayName?: string;
  readonly languageCode?: string;
}

/** Additional non-user-editable information about the location. */
export interface LegacyV4Metadata {
  readonly duplicate?: LegacyV4Duplicate;
  readonly mapsUrl?: string;
  readonly newReviewUrl?: string;
}

/** A request to return values for one metric and the options for how those values should be returned. */
export interface LegacyV4MetricRequest {
  readonly metric?: "METRIC_UNSPECIFIED" | "ALL" | "QUERIES_DIRECT" | "QUERIES_INDIRECT" | "QUERIES_CHAIN" | "VIEWS_MAPS" | "VIEWS_SEARCH" | "ACTIONS_WEBSITE" | "ACTIONS_PHONE" | "ACTIONS_DRIVING_DIRECTIONS" | "PHOTOS_VIEWS_MERCHANT" | "PHOTOS_VIEWS_CUSTOMERS" | "PHOTOS_COUNT_MERCHANT" | "PHOTOS_COUNT_CUSTOMERS" | "LOCAL_POST_VIEWS_SEARCH" | "LOCAL_POST_ACTIONS_CALL_TO_ACTION";
  readonly options?: ReadonlyArray<"METRIC_OPTION_UNSPECIFIED" | "AGGREGATED_TOTAL" | "AGGREGATED_DAILY" | "BREAKDOWN_DAY_OF_WEEK" | "BREAKDOWN_HOUR_OF_DAY">;
}

/** A value for a single Metric from a starting time. */
export interface LegacyV4MetricValue {
  readonly dimensionalValues?: ReadonlyArray<LegacyV4DimensionalMetricValue>;
  readonly metric?: "METRIC_UNSPECIFIED" | "ALL" | "QUERIES_DIRECT" | "QUERIES_INDIRECT" | "QUERIES_CHAIN" | "VIEWS_MAPS" | "VIEWS_SEARCH" | "ACTIONS_WEBSITE" | "ACTIONS_PHONE" | "ACTIONS_DRIVING_DIRECTIONS" | "PHOTOS_VIEWS_MERCHANT" | "PHOTOS_VIEWS_CUSTOMERS" | "PHOTOS_COUNT_MERCHANT" | "PHOTOS_COUNT_CUSTOMERS" | "LOCAL_POST_VIEWS_SEARCH" | "LOCAL_POST_ACTIONS_CALL_TO_ACTION";
  readonly totalValue?: LegacyV4DimensionalMetricValue;
}

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

/** Represents an amount of money with its currency type. */
export interface LegacyV4Money {
  readonly currencyCode?: string;
  readonly nanos?: number;
  readonly units?: string;
}

/** The time periods during which a location is open for certain types of business. */
export interface LegacyV4MoreHours {
  readonly hoursTypeId?: string;
  readonly periods?: ReadonlyArray<LegacyV4TimePeriod>;
}

/** More hours types that a business can offers, in addition to its regular hours. */
export interface LegacyV4MoreHoursType {
  readonly displayName?: string;
  readonly hoursTypeId?: string;
  readonly localizedDisplayName?: string;
}

/** A Google Cloud Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification settings resource per-account. */
export interface LegacyV4Notifications {
  readonly name?: string;
  readonly notificationTypes?: ReadonlyArray<"NOTIFICATION_TYPE_UNSPECIFIED" | "GOOGLE_UPDATE" | "NEW_REVIEW" | "UPDATED_REVIEW" | "NEW_CUSTOMER_MEDIA" | "NEW_QUESTION" | "UPDATED_QUESTION" | "NEW_ANSWER" | "UPDATED_ANSWER" | "UPDATED_LOCATION_STATE">;
  readonly topicName?: string;
}

/** This message denotes nutrition information with an upper bound and lower bound range and can be represented by mass unit. Lower amount must be specified. Both lower and upper amounts are non-negative numbers. */
export interface LegacyV4NutritionFact {
  readonly lowerAmount?: number;
  readonly unit?: "MASS_UNIT_UNSPECIFIED" | "GRAM" | "MILLIGRAM";
  readonly upperAmount?: number;
}

/** This message represents nutrition facts for a food dish. */
export interface LegacyV4NutritionFacts {
  readonly calories?: LegacyV4CaloriesFact;
  readonly cholesterol?: LegacyV4NutritionFact;
  readonly protein?: LegacyV4NutritionFact;
  readonly sodium?: LegacyV4NutritionFact;
  readonly totalCarbohydrate?: LegacyV4NutritionFact;
  readonly totalFat?: LegacyV4NutritionFact;
}

/** Information related to the opening state of the business. */
export interface LegacyV4OpenInfo {
  readonly canReopen?: boolean;
  readonly openingDate?: LegacyV4Date;
  readonly status?: "OPEN_FOR_BUSINESS_UNSPECIFIED" | "OPEN" | "CLOSED_PERMANENTLY" | "CLOSED_TEMPORARILY";
}

/** Additional Info stored for an organization. */
export interface LegacyV4OrganizationInfo {
  readonly phoneNumber?: string;
  readonly postalAddress?: LegacyV4PostalAddress;
  readonly registeredDomain?: string;
}

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

/** Input for PHONE_CALL/SMS verification. */
export interface LegacyV4PhoneInput {
  readonly phoneNumber?: string;
}

/** Display Data for verifications through phone, e.g. phone call, sms. */
export interface LegacyV4PhoneVerificationData {
  readonly phoneNumber?: string;
}

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

/** Defines an area that's represented by a place ID. */
export interface LegacyV4PlaceInfo {
  readonly name?: string;
  readonly placeId?: string;
}

/** Defines the union of areas represented by a set of places. */
export interface LegacyV4Places {
  readonly placeInfos?: ReadonlyArray<LegacyV4PlaceInfo>;
}

/** A radius around a particular point (latitude/longitude). */
export interface LegacyV4PointRadius {
  readonly latlng?: LegacyV4LatLng;
  readonly radiusKm?: number;
}

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

/** Serving portion size of a food dish. */
export interface LegacyV4PortionSize {
  readonly quantity?: number;
  readonly unit?: ReadonlyArray<LegacyV4MenuLabel>;
}

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

/** A list of item price information. Price lists are structured as one or more price lists, each containing one or more sections with one or more items. For example, food price lists may represent breakfast/lunch/dinner menus, with sections for burgers/steak/seafood. */
export interface LegacyV4PriceList {
  readonly labels?: ReadonlyArray<LegacyV4Label>;
  readonly priceListId?: string;
  readonly sections?: ReadonlyArray<LegacyV4Section>;
  readonly sourceUrl?: string;
}

/** All information pertaining to the location's profile. */
export interface LegacyV4Profile {
  readonly description?: string;
}

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

/** A region with its associated request count. */
export interface LegacyV4RegionCount {
  readonly count?: string;
  readonly label?: string;
  readonly latlng?: LegacyV4LatLng;
}

/** Information of all parent and children locations related to this one. */
export interface LegacyV4RelationshipData {
  readonly parentChain?: string;
}

/** Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified. */
export interface LegacyV4RepeatedEnumAttributeValue {
  readonly setValues?: ReadonlyArray<string>;
  readonly unsetValues?: ReadonlyArray<string>;
}

/** Request message for reporting a GoogleLocation. */
export interface LegacyV4ReportGoogleLocationRequest {
  readonly locationGroupName?: string;
  readonly reportReasonBadLocation?: "BAD_LOCATION_REASON_UNSPECIFIED" | "NOT_A_LOCATION" | "PERMANENTLY_CLOSED" | "DOES_NOT_EXIST" | "SPAM" | "NOT_A_BUSINESS" | "MOVED" | "DUPLICATE";
  readonly reportReasonBadRecommendation?: "BAD_RECOMMENDATION_REASON_UNSPECIFIED" | "NOT_A_STORE_FRONT" | "NOT_PART_OF_SUGGESTED_CHAIN" | "IRRELEVANT";
  readonly reportReasonElaboration?: string;
  readonly reportReasonLanguageCode?: string;
}

/** Request message for Insights.ReportLocalPostInsights */
export interface LegacyV4ReportLocalPostInsightsRequest {
  readonly basicRequest?: LegacyV4BasicMetricsRequest;
  readonly localPostNames?: ReadonlyArray<string>;
}

/** Response message for Insights.ReportLocalPostInsights */
export interface LegacyV4ReportLocalPostInsightsResponse {
  readonly localPostMetrics?: ReadonlyArray<LegacyV4LocalPostMetrics>;
  readonly name?: string;
  readonly timeZone?: string;
}

/** Request message for Insights.ReportLocationInsights. */
export interface LegacyV4ReportLocationInsightsRequest {
  readonly basicRequest?: LegacyV4BasicMetricsRequest;
  readonly drivingDirectionsRequest?: LegacyV4DrivingDirectionMetricsRequest;
  readonly locationNames?: ReadonlyArray<string>;
}

/** Response message for `Insights.ReportLocationInsights`. */
export interface LegacyV4ReportLocationInsightsResponse {
  readonly locationDrivingDirectionMetrics?: ReadonlyArray<LegacyV4LocationDrivingDirectionMetrics>;
  readonly locationMetrics?: ReadonlyArray<LegacyV4LocationMetrics>;
}

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

/** Represents the author of the review. */
export interface LegacyV4Reviewer {
  readonly displayName?: string;
  readonly isAnonymous?: boolean;
  readonly profilePhotoUrl?: string;
}

/** Represents the location owner/manager's reply to a review. */
export interface LegacyV4ReviewReply {
  readonly comment?: string;
  readonly updateTime?: string;
}

/** Response message for Locations.SearchChains. */
export interface LegacyV4SearchChainsResponse {
  readonly chains?: ReadonlyArray<LegacyV4Chain>;
}

/** Request message for GoogleLocations.SearchGoogleLocations. */
export interface LegacyV4SearchGoogleLocationsRequest {
  readonly location?: LegacyV4Location;
  readonly query?: string;
  readonly resultCount?: number;
}

/** Response message for GoogleLocations.SearchGoogleLocations. */
export interface LegacyV4SearchGoogleLocationsResponse {
  readonly googleLocations?: ReadonlyArray<LegacyV4GoogleLocation>;
}

/** A section of the price list containing one or more items. */
export interface LegacyV4Section {
  readonly items?: ReadonlyArray<LegacyV4Item>;
  readonly labels?: ReadonlyArray<LegacyV4Label>;
  readonly sectionId?: string;
  readonly sectionType?: "SECTION_TYPE_UNSPECIFIED" | "FOOD" | "SERVICES";
}

/** Service area businesses provide their service at the customer's location (for example, a locksmith or plumber). */
export interface LegacyV4ServiceAreaBusiness {
  readonly businessType?: "BUSINESS_TYPE_UNSPECIFIED" | "CUSTOMER_LOCATION_ONLY" | "CUSTOMER_AND_BUSINESS_LOCATION";
  readonly places?: LegacyV4Places;
  readonly radius?: LegacyV4PointRadius;
}

/** Additional data for service business verification. */
export interface LegacyV4ServiceBusinessContext {
  readonly address?: LegacyV4PostalAddress;
}

/** A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service. */
export interface LegacyV4ServiceItem {
  readonly freeFormServiceItem?: LegacyV4FreeFormServiceItem;
  readonly isOffered?: boolean;
  readonly price?: LegacyV4Money;
  readonly structuredServiceItem?: LegacyV4StructuredServiceItem;
}

/** A service list containing one or more service items. */
export interface LegacyV4ServiceList {
  readonly name?: string;
  readonly serviceItems?: ReadonlyArray<LegacyV4ServiceItem>;
}

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

/** A message describing a service type that the business offers. */
export interface LegacyV4ServiceType {
  readonly displayName?: string;
  readonly serviceTypeId?: string;
}

/** Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00 */
export interface LegacyV4SpecialHourPeriod {
  readonly closeTime?: string;
  readonly endDate?: LegacyV4Date;
  readonly isClosed?: boolean;
  readonly openTime?: string;
  readonly startDate?: LegacyV4Date;
}

/** Represents a set of time periods when a location's operational hours differ from its normal business hours. */
export interface LegacyV4SpecialHours {
  readonly specialHourPeriods?: ReadonlyArray<LegacyV4SpecialHourPeriod>;
}

/** Request message for Media.StartUploadMediaItemData. */
export interface LegacyV4StartUploadMediaItemDataRequest {

}

/** Represents a structured service offered by the merchant. For eg: toilet_installation. */
export interface LegacyV4StructuredServiceItem {
  readonly description?: string;
  readonly serviceTypeId?: string;
}

/** Represents a target location for a pending invitation. */
export interface LegacyV4TargetLocation {
  readonly locationAddress?: string;
  readonly locationName?: string;
}

/** The dimension for which data is divided over. */
export interface LegacyV4TimeDimension {
  readonly dayOfWeek?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly timeOfDay?: LegacyV4TimeOfDay;
  readonly timeRange?: LegacyV4TimeRange;
}

/** An interval of time, inclusive. It must contain all fields to be valid. */
export interface LegacyV4TimeInterval {
  readonly endDate?: LegacyV4Date;
  readonly endTime?: LegacyV4TimeOfDay;
  readonly startDate?: LegacyV4Date;
  readonly startTime?: LegacyV4TimeOfDay;
}

/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
export interface LegacyV4TimeOfDay {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
}

/** Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day. */
export interface LegacyV4TimePeriod {
  readonly closeDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly closeTime?: string;
  readonly openDay?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly openTime?: string;
}

/** A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)). */
export interface LegacyV4TimeRange {
  readonly endTime?: string;
  readonly startTime?: string;
}

/** Top regions where driving-direction requests originated from. */
export interface LegacyV4TopDirectionSources {
  readonly dayCount?: number;
  readonly regionCounts?: ReadonlyArray<LegacyV4RegionCount>;
}

/** Request message for Locations.TransferLocation. */
export interface LegacyV4TransferLocationRequest {
  readonly toAccount?: string;
}

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

/** Request message for QuestionsAndAnswers.UpsertAnswer */
export interface LegacyV4UpsertAnswerRequest {
  readonly answer?: LegacyV4Answer;
}

/** Values for an attribute with a `value_type` of URL. */
export interface LegacyV4UrlAttributeValue {
  readonly url?: string;
}

/** A verification represents a verification attempt on a location. */
export interface LegacyV4Verification {
  readonly createTime?: string;
  readonly method?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO";
  readonly name?: string;
  readonly state?: "VERIFICATION_STATE_UNSPECIFIED" | "PENDING" | "COMPLETED" | "FAILED";
}

/** The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data). */
export interface LegacyV4VerificationOption {
  readonly addressData?: LegacyV4AddressVerificationData;
  readonly emailData?: LegacyV4EmailVerificationData;
  readonly phoneData?: LegacyV4PhoneVerificationData;
  readonly verificationMethod?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO";
}

/** Request message for Verifications.VerifyLocation. */
export interface LegacyV4VerifyLocationRequest {
  readonly addressInput?: LegacyV4AddressInput;
  readonly context?: LegacyV4ServiceBusinessContext;
  readonly emailInput?: LegacyV4EmailInput;
  readonly languageCode?: string;
  readonly method?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO";
  readonly phoneInput?: LegacyV4PhoneInput;
}

/** Response message for Verifications.VerifyLocation. */
export interface LegacyV4VerifyLocationResponse {
  readonly verification?: LegacyV4Verification;
}

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

/** Features of the property of specific interest to the business traveler. */
export interface LodgingBusiness {
  readonly businessCenter?: boolean;
  readonly businessCenterException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRooms?: boolean;
  readonly meetingRoomsCount?: number;
  readonly meetingRoomsCountException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly meetingRoomsException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}

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

/** An eco certificate awarded to the hotel. Deprecated: this message is no longer populated. All certification data is now provided by BeCause. */
export interface LodgingEcoCertification {
  readonly awarded?: boolean;
  readonly awardedException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly ecoCertificate?: "ECO_CERTIFICATE_UNSPECIFIED" | "ISO14001" | "ISO50001" | "ASIAN_ECOTOURISM" | "BIOSPHERE_RESPOSNIBLE_TOURISM" | "BUREAU_VERITAS" | "CONTROL_UNION" | "EARTHCHECK" | "ECO_CERTIFICATION_MALTA" | "ECOTOURISM_AUSTRALIAS_ECO" | "GREAT_GREEN_DEAL" | "GREEN_GLOBE" | "GREEN_GROWTH2050" | "GREEN_KEY" | "GREEN_KEY_ECO_RATING" | "GREEN_SEAL" | "GREEN_STAR" | "GREEN_TOURISM_ACTIVE" | "HILTON_LIGHTSTAY" | "HOSTELLING_INTERNATIONALS_QUALITY_AND_SUSTAINABILITY" | "HOTELES_MAS_VERDES" | "NORDIC_SWAN_ECOLABEL" | "PREFERRED_BY_NATURE_SUSTAINABLE_TOURISM" | "SUSTAINABLE_TRAVEL_IRELAND" | "TOF_TIGERS_INITITIVES_PUG" | "TRAVELIFE" | "UNITED_CERTIFICATION_SYSTEMS_LIMITED" | "VIREO_SRL";
}

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

/** Response message for LodgingService.GetGoogleUpdatedLodging */
export interface LodgingGetGoogleUpdatedLodgingResponse {
  readonly diffMask?: string;
  readonly lodging?: LodgingLodging;
}

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

/** A specific type of unit primarily defined by its features. */
export interface LodgingGuestUnitType {
  readonly codes?: ReadonlyArray<string>;
  readonly features?: LodgingGuestUnitFeatures;
  readonly label?: string;
}

/** Health and safety measures implemented by the hotel during COVID-19. */
export interface LodgingHealthAndSafety {
  readonly enhancedCleaning?: LodgingEnhancedCleaning;
  readonly increasedFoodSafety?: LodgingIncreasedFoodSafety;
  readonly minimizedContact?: LodgingMinimizedContact;
  readonly personalProtection?: LodgingPersonalProtection;
  readonly physicalDistancing?: LodgingPhysicalDistancing;
}

/** Conveniences provided in guest units to facilitate an easier, more comfortable stay. */
export interface LodgingHousekeeping {
  readonly dailyHousekeeping?: boolean;
  readonly dailyHousekeepingException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly housekeepingAvailable?: boolean;
  readonly housekeepingAvailableException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly turndownService?: boolean;
  readonly turndownServiceException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}

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

/** Language spoken by at least one staff member. */
export interface LodgingLanguageSpoken {
  readonly languageCode?: string;
  readonly spoken?: boolean;
  readonly spokenException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}

/** An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit. */
export interface LodgingLivingArea {
  readonly accessibility?: LodgingLivingAreaAccessibility;
  readonly eating?: LodgingLivingAreaEating;
  readonly features?: LodgingLivingAreaFeatures;
  readonly layout?: LodgingLivingAreaLayout;
  readonly sleeping?: LodgingLivingAreaSleeping;
}

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

/** Metadata for the Lodging. */
export interface LodgingLodgingMetadata {
  readonly updateTime?: string;
}

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

/** Sustainability practices implemented at the hotel. */
export interface LodgingSustainability {
  readonly energyEfficiency?: LodgingEnergyEfficiency;
  readonly sustainabilityCertifications?: LodgingSustainabilityCertifications;
  readonly sustainableSourcing?: LodgingSustainableSourcing;
  readonly wasteReduction?: LodgingWasteReduction;
  readonly waterConservation?: LodgingWaterConservation;
}

/** Sustainability certifications the hotel has been awarded. Deprecated: this message is no longer populated. All certification data is now provided by BeCause. */
export interface LodgingSustainabilityCertifications {
  readonly breeamCertification?: "BREEAM_CERTIFICATION_UNSPECIFIED" | "NO_BREEAM_CERTIFICATION" | "BREEAM_PASS" | "BREEAM_GOOD" | "BREEAM_VERY_GOOD" | "BREEAM_EXCELLENT" | "BREEAM_OUTSTANDING";
  readonly breeamCertificationException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
  readonly ecoCertifications?: ReadonlyArray<LodgingEcoCertification>;
  readonly leedCertification?: "LEED_CERTIFICATION_UNSPECIFIED" | "NO_LEED_CERTIFICATION" | "LEED_CERTIFIED" | "LEED_SILVER" | "LEED_GOLD" | "LEED_PLATINUM";
  readonly leedCertificationException?: "EXCEPTION_UNSPECIFIED" | "UNDER_CONSTRUCTION" | "DEPENDENT_ON_SEASON" | "DEPENDENT_ON_DAY_OF_WEEK";
}

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

/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
export interface LodgingTimeOfDay {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
}

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

/** A Google Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification setting resource per-account. */
export interface NotificationsNotificationSetting {
  readonly name?: string;
  readonly notificationTypes?: ReadonlyArray<"NOTIFICATION_TYPE_UNSPECIFIED" | "GOOGLE_UPDATE" | "NEW_REVIEW" | "UPDATED_REVIEW" | "NEW_CUSTOMER_MEDIA" | "NEW_QUESTION" | "UPDATED_QUESTION" | "NEW_ANSWER" | "UPDATED_ANSWER" | "DUPLICATE_LOCATION" | "LOSS_OF_VOICE_OF_MERCHANT" | "VOICE_OF_MERCHANT_UPDATED">;
  readonly pubsubTopic?: string;
}

/** Represents a single datapoint, where each datapoint is a DailyMetric-DailySubEntityType-TimeSeries tuple. */
export interface PerformanceDailyMetricTimeSeries {
  readonly dailyMetric?: "DAILY_METRIC_UNKNOWN" | "BUSINESS_IMPRESSIONS_DESKTOP_MAPS" | "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH" | "BUSINESS_IMPRESSIONS_MOBILE_MAPS" | "BUSINESS_IMPRESSIONS_MOBILE_SEARCH" | "BUSINESS_CONVERSATIONS" | "BUSINESS_DIRECTION_REQUESTS" | "CALL_CLICKS" | "WEBSITE_CLICKS" | "BUSINESS_BOOKINGS" | "BUSINESS_FOOD_ORDERS" | "BUSINESS_FOOD_MENU_CLICKS";
  readonly dailySubEntityType?: PerformanceDailySubEntityType;
  readonly timeSeries?: PerformanceTimeSeries;
}

/** Represents all possible subentity types that are associated with DailyMetrics. Note: Currently, all metrics are returned as daily aggregates and sub-entity breakdowns are not supported. */
export interface PerformanceDailySubEntityType {
  readonly dayOfWeek?: "DAY_OF_WEEK_UNSPECIFIED" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
  readonly timeOfDay?: PerformanceTimeOfDay;
}

/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
export interface PerformanceDate {
  readonly day?: number;
  readonly month?: number;
  readonly year?: number;
}

/** Represents a single datapoint in the timeseries, where each datapoint is a date-value pair. */
export interface PerformanceDatedValue {
  readonly date?: PerformanceDate;
  readonly value?: string;
}

/** Represents the response for FetchMultiDailyMetricsTimeSeries. */
export interface PerformanceFetchMultiDailyMetricsTimeSeriesResponse {
  readonly multiDailyMetricTimeSeries?: ReadonlyArray<PerformanceMultiDailyMetricTimeSeries>;
}

/** Represents the response for GetDailyMetricsTimeSeries. */
export interface PerformanceGetDailyMetricsTimeSeriesResponse {
  readonly timeSeries?: PerformanceTimeSeries;
}

/** Represents an insights value. */
export interface PerformanceInsightsValue {
  readonly threshold?: string;
  readonly value?: string;
}

/** Represents the response for ListSearchKeywordImpressionsMonthly. */
export interface PerformanceListSearchKeywordImpressionsMonthlyResponse {
  readonly nextPageToken?: string;
  readonly searchKeywordsCounts?: ReadonlyArray<PerformanceSearchKeywordCount>;
}

/** Represents a list of tuples of DailyMetric-DailySubEntityType-TimeSeries. */
export interface PerformanceMultiDailyMetricTimeSeries {
  readonly dailyMetricTimeSeries?: ReadonlyArray<PerformanceDailyMetricTimeSeries>;
}

/** Represents a single search keyword and its value. */
export interface PerformanceSearchKeywordCount {
  readonly insightsValue?: PerformanceInsightsValue;
  readonly searchKeyword?: string;
}

/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
export interface PerformanceTimeOfDay {
  readonly hours?: number;
  readonly minutes?: number;
  readonly nanos?: number;
  readonly seconds?: number;
}

/** Represents a timeseries. */
export interface PerformanceTimeSeries {
  readonly datedValues?: ReadonlyArray<PerformanceDatedValue>;
}

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
export interface PlaceActionsEmpty {

}

/** Response message for PlaceActions.ListPlaceActionLinks. */
export interface PlaceActionsListPlaceActionLinksResponse {
  readonly nextPageToken?: string;
  readonly placeActionLinks?: ReadonlyArray<PlaceActionsPlaceActionLink>;
}

/** Response message for PlaceActions.ListPlaceActionTypeMetadata. */
export interface PlaceActionsListPlaceActionTypeMetadataResponse {
  readonly nextPageToken?: string;
  readonly placeActionTypeMetadata?: ReadonlyArray<PlaceActionsPlaceActionTypeMetadata>;
}

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

/** Metadata for supported place action types. */
export interface PlaceActionsPlaceActionTypeMetadata {
  readonly displayName?: string;
  readonly placeActionType?: "PLACE_ACTION_TYPE_UNSPECIFIED" | "APPOINTMENT" | "ONLINE_APPOINTMENT" | "DINING_RESERVATION" | "FOOD_ORDERING" | "FOOD_DELIVERY" | "FOOD_TAKEOUT" | "SHOP_ONLINE" | "SOLOPRENEUR_APPOINTMENT";
}

/** Represents an answer to a question */
export interface QAndAAnswer {
  readonly author?: QAndAAuthor;
  readonly createTime?: string;
  readonly name?: string;
  readonly text?: string;
  readonly updateTime?: string;
  readonly upvoteCount?: number;
}

/** Represents the author of a question or answer */
export interface QAndAAuthor {
  readonly displayName?: string;
  readonly profilePhotoUri?: string;
  readonly type?: "AUTHOR_TYPE_UNSPECIFIED" | "REGULAR_USER" | "LOCAL_GUIDE" | "MERCHANT";
}

/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
export interface QAndAEmpty {

}

/** Response message for QuestionsAndAnswers.ListAnswers */
export interface QAndAListAnswersResponse {
  readonly answers?: ReadonlyArray<QAndAAnswer>;
  readonly nextPageToken?: string;
  readonly totalSize?: number;
}

/** Response message for QuestionsAndAnswers.ListQuestions */
export interface QAndAListQuestionsResponse {
  readonly nextPageToken?: string;
  readonly questions?: ReadonlyArray<QAndAQuestion>;
  readonly totalSize?: number;
}

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

/** Request message for QuestionsAndAnswers.UpsertAnswer */
export interface QAndAUpsertAnswerRequest {
  readonly answer?: QAndAAnswer;
}

/** Display data for verifications through postcard. */
export interface VerificationsAddressVerificationData {
  readonly address?: VerificationsPostalAddress;
  readonly business?: string;
  readonly expectedDeliveryDaysRegion?: number;
}

/** Request message for Verifications.CompleteVerificationAction. */
export interface VerificationsCompleteVerificationRequest {
  readonly pin?: string;
}

/** Response message for Verifications.CompleteVerificationAction. */
export interface VerificationsCompleteVerificationResponse {
  readonly verification?: VerificationsVerification;
}

/** Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177). */
export interface VerificationsComplyWithGuidelines {
  readonly recommendationReason?: "RECOMMENDATION_REASON_UNSPECIFIED" | "BUSINESS_LOCATION_SUSPENDED" | "BUSINESS_LOCATION_DISABLED";
}

/** Display data for verifications through email. */
export interface VerificationsEmailVerificationData {
  readonly domain?: string;
  readonly isUserNameEditable?: boolean;
  readonly user?: string;
}

/** Request message for Verifications.FetchVerificationOptions. */
export interface VerificationsFetchVerificationOptionsRequest {
  readonly context?: VerificationsServiceBusinessContext;
  readonly languageCode?: string;
}

/** Response message for Verifications.FetchVerificationOptions. */
export interface VerificationsFetchVerificationOptionsResponse {
  readonly options?: ReadonlyArray<VerificationsVerificationOption>;
}

/** Request message for Verifications.GenerateInstantVerificationToken. */
export interface VerificationsGenerateInstantVerificationTokenRequest {
  readonly locationId?: string;
}

/** Response message for Verifications.GenerateInstantVerificationToken. */
export interface VerificationsGenerateInstantVerificationTokenResponse {
  readonly instantVerificationToken?: string;
  readonly result?: "RESULT_UNSPECIFIED" | "SUCCEEDED" | "FAILED";
}

/** Response message for Verifications.ListVerifications. */
export interface VerificationsListVerificationsResponse {
  readonly nextPageToken?: string;
  readonly verifications?: ReadonlyArray<VerificationsVerification>;
}

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

/** Indicates that the location duplicates another location that is in good standing. */
export interface VerificationsResolveOwnershipConflict {

}

/** Additional data for service business verification. */
export interface VerificationsServiceBusinessContext {
  readonly address?: VerificationsPostalAddress;
}

/** A verification represents a verification attempt on a location. */
export interface VerificationsVerification {
  readonly announcement?: string;
  readonly createTime?: string;
  readonly method?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO" | "TRUSTED_PARTNER";
  readonly name?: string;
  readonly state?: "STATE_UNSPECIFIED" | "PENDING" | "COMPLETED" | "FAILED";
}

/** The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data). */
export interface VerificationsVerificationOption {
  readonly addressData?: VerificationsAddressVerificationData;
  readonly announcement?: string;
  readonly emailData?: VerificationsEmailVerificationData;
  readonly phoneNumber?: string;
  readonly verificationMethod?: "VERIFICATION_METHOD_UNSPECIFIED" | "ADDRESS" | "EMAIL" | "PHONE_CALL" | "SMS" | "AUTO" | "TRUSTED_PARTNER";
}

/** Token generated by a vetted [partner](https://support.google.com/business/answer/7674102). */
export interface VerificationsVerificationToken {
  readonly tokenString?: string;
}

/** Indicates that the location requires verification. Contains information about the current verification actions performed on the location. */
export interface VerificationsVerify {
  readonly hasPendingVerification?: boolean;
}

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

/** Response message for Verifications.VerifyLocation. */
export interface VerificationsVerifyLocationResponse {
  readonly verification?: VerificationsVerification;
}

/** Response message for VoiceOfMerchant.GetVoiceOfMerchantState. */
export interface VerificationsVoiceOfMerchantState {
  readonly complyWithGuidelines?: VerificationsComplyWithGuidelines;
  readonly hasBusinessAuthority?: boolean;
  readonly hasVoiceOfMerchant?: boolean;
  readonly resolveOwnershipConflict?: VerificationsResolveOwnershipConflict;
  readonly verify?: VerificationsVerify;
  readonly waitForVoiceOfMerchant?: VerificationsWaitForVoiceOfMerchant;
}

/** Indicates that the location will gain voice of merchant after passing review. */
export interface VerificationsWaitForVoiceOfMerchant {

}
