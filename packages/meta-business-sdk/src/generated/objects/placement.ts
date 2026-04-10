import type { PlacementDevicePlatforms, PlacementEffectiveDevicePlatforms } from "../enums.ts";

export interface PlacementFields {
  audience_network_positions: string[];
  device_platforms: PlacementDevicePlatforms[];
  effective_audience_network_positions: string[];
  effective_device_platforms: PlacementEffectiveDevicePlatforms[];
  effective_facebook_positions: string[];
  effective_instagram_positions: string[];
  effective_messenger_positions: string[];
  effective_oculus_positions: string[];
  effective_publisher_platforms: string[];
  effective_threads_positions: string[];
  effective_whatsapp_positions: string[];
  facebook_positions: string[];
  instagram_positions: string[];
  messenger_positions: string[];
  oculus_positions: string[];
  publisher_platforms: string[];
  threads_positions: string[];
  whatsapp_positions: string[];
}

