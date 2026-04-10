import type { AdCreativeFeaturesSpecFields } from "./ad-creative-features-spec.ts";

export interface AdCreativeDegreesOfFreedomSpecFields {
  ad_handle_type: string;
  creative_features_spec: AdCreativeFeaturesSpecFields;
  degrees_of_freedom_type: string;
  image_transformation_types: string[];
  multi_media_transformation_type: string;
  stories_transformation_types: string[];
  text_transformation_types: string[];
  video_transformation_types: string[];
}

