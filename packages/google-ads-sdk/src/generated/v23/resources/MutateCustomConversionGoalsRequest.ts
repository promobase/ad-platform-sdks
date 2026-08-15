// @generated
// fingerprint: sha256:1c6b7b4ff661950f735f5bca9ae347892eb4b58e70574957818d6af79fb25471
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomConversionGoalOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCustomConversionGoalsRequest. Do not edit by hand.
export interface MutateCustomConversionGoalsRequest {
  customerId?: string;
  operations?: CustomConversionGoalOperation[];
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
