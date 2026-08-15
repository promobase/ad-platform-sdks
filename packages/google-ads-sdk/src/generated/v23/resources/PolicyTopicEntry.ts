// @generated
// fingerprint: sha256:7958bb9995241813004e97d8ef28dd5e88781b7ed4db9cc6f39f5b101b6160a8
// DO NOT EDIT: generated file; changes will be overwritten.
import type { PolicyTopicConstraint, PolicyTopicEntryType, PolicyTopicEvidence } from "../index.ts";

// Generated from google.ads.googleads.v23.common.PolicyTopicEntry. Do not edit by hand.
export interface PolicyTopicEntry {
  topic?: string;
  type?: PolicyTopicEntryType;
  evidences?: PolicyTopicEvidence[];
  constraints?: PolicyTopicConstraint[];
}
