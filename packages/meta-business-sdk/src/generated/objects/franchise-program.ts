import type { ApiClient } from "@promobase/sdk-runtime";
import type { BusinessFields } from "./business.ts";
import type { BusinessAssetGroupFields } from "./business-asset-group.ts";
import type { CustomAudienceFields } from "./custom-audience.ts";
import type { GroupFields } from "./group.ts";

export interface FranchiseProgramFields {
  business_asset_group: BusinessAssetGroupFields;
  creator_business: BusinessFields;
  description: string;
  end_date: string;
  id: string;
  name: string;
  program_access_type: string;
  program_approval_type: string;
  program_image_link: string;
  program_url: string;
  shared_custom_audience: CustomAudienceFields;
  start_date: string;
}

export function franchiseProgramNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof FranchiseProgramFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<FranchiseProgramFields, F[number]>>(`${id}`, opts),
  };
}

