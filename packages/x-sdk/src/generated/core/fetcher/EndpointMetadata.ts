// @generated
// fingerprint: sha256:ecdc15de1f6e419f31c09d53332f6aebeba3f7198fddd6f1482206d5cb44d4f7
// DO NOT EDIT: generated file; changes will be overwritten.
export type SecuritySchemeKey = string;
/**
 * A collection of security schemes, where the key is the name of the security scheme and the value is the list of scopes required for that scheme.
 * All schemes in the collection must be satisfied for authentication to be successful.
 */
export type SecuritySchemeCollection = Record<SecuritySchemeKey, AuthScope[]>;
export type AuthScope = string;
export type EndpointMetadata = {
    /**
     * An array of security scheme collections. Each collection represents an alternative way to authenticate.
     */
    security?: SecuritySchemeCollection[];
};
