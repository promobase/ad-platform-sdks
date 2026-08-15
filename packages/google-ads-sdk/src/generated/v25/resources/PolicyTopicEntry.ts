// @generated
// fingerprint: sha256:79758d0441b3a8b1be9341cab0809086ef3d0d2540b9633fd603a3dbc1eed670
// DO NOT EDIT: generated file; changes will be overwritten.
import type { PolicyTopicConstraint, PolicyTopicEntryType, PolicyTopicEvidence } from "../index.ts";

// Generated from google.ads.googleads.v25.common.PolicyTopicEntry. Do not edit by hand.
export interface PolicyTopicEntry {
  topic?: string;
  type?: PolicyTopicEntryType;
  evidences?: PolicyTopicEvidence[];
  constraints?: PolicyTopicConstraint[];
}
