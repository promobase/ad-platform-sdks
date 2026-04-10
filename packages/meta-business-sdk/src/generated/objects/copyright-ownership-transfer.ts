import type { ApiClient } from "@promobase/sdk-runtime";
import type { ProfileFields } from "./profile.ts";

export interface CopyrightOwnershipTransferFields {
  assets: Record<string, unknown>[];
  has_ownership_been_updated: boolean;
  id: string;
  num_assets: number;
  receiving_rights_holder: ProfileFields;
  sending_rights_holder: ProfileFields;
  status: string;
  transfer_territories: string[];
  transfer_time: string;
}

export function copyrightOwnershipTransferNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CopyrightOwnershipTransferFields,
    get: <F extends (keyof CopyrightOwnershipTransferFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CopyrightOwnershipTransferFields, F[number]>>(`${id}`, opts),
  };
}

