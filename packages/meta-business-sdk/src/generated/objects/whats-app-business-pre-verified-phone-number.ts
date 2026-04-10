import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { BusinessFields } from "./business.ts";
import type { WhatsAppBusinessPreVerifiedPhoneNumberCodeVerificationStatus } from "../enums.ts";

export interface WhatsAppBusinessPreVerifiedPhoneNumberFields {
  code_verification_status: WhatsAppBusinessPreVerifiedPhoneNumberCodeVerificationStatus;
  code_verification_time: string;
  id: string;
  owner_business: BusinessFields;
  phone_number: string;
  verification_expiry_time: string;
}

export interface WhatsAppBusinessPreVerifiedPhoneNumberCreateRequestCodeParams {
  code_method: string;
  language: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessPreVerifiedPhoneNumberCreateVerifyCodeParams {
  code: string;
  [key: string]: unknown;
}

export function whatsAppBusinessPreVerifiedPhoneNumberNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as WhatsAppBusinessPreVerifiedPhoneNumberFields,
    get: <F extends (keyof WhatsAppBusinessPreVerifiedPhoneNumberFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WhatsAppBusinessPreVerifiedPhoneNumberFields, F[number]>>(`${id}`, opts),
    delete: () =>
      client.delete(`${id}`, {}),
    partners: <F extends (keyof BusinessFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<BusinessFields, F[number]>>(client, `${id}/partners`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createRequestCode: (params: WhatsAppBusinessPreVerifiedPhoneNumberCreateRequestCodeParams) =>
      client.post<Record<string, unknown>>(`${id}/request_code`, params as Record<string, unknown>),
    createVerifyCode: (params: WhatsAppBusinessPreVerifiedPhoneNumberCreateVerifyCodeParams) =>
      client.post<Record<string, unknown>>(`${id}/verify_code`, params as Record<string, unknown>),
  };
}

