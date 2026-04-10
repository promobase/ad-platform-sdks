export interface ConversionActionQueryFields {
  "action.type": Record<string, unknown>[];
  application: Record<string, unknown>[];
  conversion_id: string[];
  creative: Record<string, unknown>[];
  dataset: string[];
  dataset_split: string[];
  event: string[];
  "event.creator": string[];
  event_type: string[];
  fb_pixel: string[];
  fb_pixel_event: string[];
  leadgen: string[];
  object: string[];
  "object.domain": string[];
  offer: string[];
  "offer.creator": string[];
  offsite_pixel: string[];
  page: string[];
  "page.parent": string[];
  post: string[];
  "post.object": string[];
  "post.object.wall": string[];
  "post.wall": string[];
  question: string[];
  "question.creator": string[];
  response: string[];
  subtype: string[];
}

