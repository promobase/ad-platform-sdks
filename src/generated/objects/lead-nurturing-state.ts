export interface LeadNurturingStateFields {
  ai_agent_mode: string;
  conversation_summary: string;
  handoff_reason: string;
  lead_interest_level: string;
  needed_manual_actions: string[];
  qualification_details: string;
  qualification_status: string;
  scheduled_time: Record<string, unknown>;
  updated_email: string;
  updated_phone_number: string;
}

