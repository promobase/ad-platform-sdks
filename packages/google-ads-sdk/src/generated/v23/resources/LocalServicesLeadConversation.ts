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
