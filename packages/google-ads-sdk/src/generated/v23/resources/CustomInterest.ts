// @generated
// fingerprint: sha256:348ec02e5c5764775f8ccce229368ab6c86eed1f148ffc3e21d0a2777ccfeaaf
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomInterestMember, CustomInterestStatus, CustomInterestType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CustomInterest. Do not edit by hand.
export interface CustomInterest {
  resourceName?: string;
  id?: string;
  status?: CustomInterestStatus;
  name?: string;
  type?: CustomInterestType;
  description?: string;
  members?: CustomInterestMember[];
}
