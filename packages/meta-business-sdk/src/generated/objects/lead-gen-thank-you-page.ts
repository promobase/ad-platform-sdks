import type { LeadGenThankYouPageGatedFileFields } from "./lead-gen-thank-you-page-gated-file.ts";

export interface LeadGenThankYouPageFields {
  body: string;
  business_phone_number: string;
  button_text: string;
  button_type: string;
  country_code: string;
  enable_messenger: boolean;
  gated_file: LeadGenThankYouPageGatedFileFields;
  id: string;
  lead_gen_use_case: string;
  status: string;
  title: string;
  website_url: string;
}

