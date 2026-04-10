export interface MessengerProfileFields {
  account_linking_url: string;
  commands: Record<string, unknown>[];
  get_started: Record<string, unknown>;
  ice_breakers: Record<string, unknown>[];
  persistent_menu: Record<string, unknown>[];
  subject_to_new_eu_privacy_rules: boolean;
  whitelisted_domains: string[];
}

