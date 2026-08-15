// @generated
// fingerprint: sha256:5c1107a4cee2cb2fb4a010a686067159567b8c6e474bec69d177c35b2f2d71c8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomInterestMember, CustomInterestStatus, CustomInterestType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.CustomInterest. Do not edit by hand.
export interface CustomInterest {
  resourceName?: string;
  id?: string;
  status?: CustomInterestStatus;
  name?: string;
  type?: CustomInterestType;
  description?: string;
  members?: CustomInterestMember[];
}
