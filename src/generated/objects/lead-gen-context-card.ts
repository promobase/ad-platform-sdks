import type { PhotoFields } from "./photo.ts";

export interface LeadGenContextCardFields {
  button_text: string;
  content: string[];
  cover_photo: PhotoFields;
  id: string;
  style: string;
  title: string;
}

