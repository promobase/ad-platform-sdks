import type { ApplicationFields } from "./application.ts";

export interface TabFields {
  application: ApplicationFields;
  custom_image_url: string;
  custom_name: string;
  id: string;
  image_url: string;
  is_non_connection_landing_tab: boolean;
  is_permanent: boolean;
  link: string;
  name: string;
  position: number;
}

