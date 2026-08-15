// @generated
// fingerprint: sha256:071cdbc38b8f48e81c95eaff835692eda0539e3b3bc9c7ae7f1f0b4a19b24f69
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface CopyrightOwnershipTransferFields {
  assets: Record<string, unknown>[];
  has_ownership_been_updated: boolean;
  id: string;
  num_assets: number;
  receiving_rights_holder_owner: Record<string, unknown>;
  sending_rights_holder_owner: Record<string, unknown>;
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

