// @generated
// fingerprint: sha256:4d90491af32416b4be65870a535c0fd7cd0f6031991ec550fca126231962f8af
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversationType, MessageDetails, ParticipantType, PhoneCallDetails } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.LocalServicesLeadConversation. Do not edit by hand.
export interface LocalServicesLeadConversation {
  resourceName?: string;
  id?: string;
  conversationChannel?: ConversationType;
  participantType?: ParticipantType;
  lead?: string;
  eventDateTime?: string;
  phoneCallDetails?: PhoneCallDetails;
  messageDetails?: MessageDetails;
}
