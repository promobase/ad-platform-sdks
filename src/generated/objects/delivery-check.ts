import type { DeliveryCheckExtraInfoFields } from "./delivery-check-extra-info.ts";

export interface DeliveryCheckFields {
  check_name: string;
  description: string;
  extra_info: DeliveryCheckExtraInfoFields;
  summary: string;
}

