// @generated
// fingerprint: sha256:466173cbcf7f0ce279b7d545f759b4da8db4876139dc02cbccf3e6275b6fe038
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ConversationType, MessageDetails, ParticipantType, PhoneCallDetails } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.LocalServicesLeadConversation. Do not edit by hand.
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
