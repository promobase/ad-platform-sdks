import type { AdCreativeTemplateURLSpecFields } from "./ad-creative-template-url-spec.ts";

export interface AdCustomizationRuleSpecFields {
  caption: string;
  customization_spec: Record<string, unknown>;
  description: string;
  image_hash: string;
  link: string;
  message: string;
  name: string;
  priority: number;
  template_url_spec: AdCreativeTemplateURLSpecFields;
  video_id: number;
}

