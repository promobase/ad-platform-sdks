// @generated
// fingerprint: sha256:0a5f0e3fe6c5f31a5b9d54686284f001f255093154af80769726f3667f8219e8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GoalOperation } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateGoalsRequest. Do not edit by hand.
export interface MutateGoalsRequest {
  customerId?: string;
  operations?: GoalOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
}
