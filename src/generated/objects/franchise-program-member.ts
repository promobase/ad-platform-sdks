import type { ApiClient } from "../../runtime/client.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { BusinessFields } from "./business.ts";
import type { PageFields } from "./page.ts";
import type { UserFields } from "./user.ts";

export interface FranchiseProgramMemberFields {
  business: BusinessFields;
  end_date: string;
  id: string;
  join_date: string;
  member_ad_account: AdAccountFields;
  member_user: UserFields;
  membership_status: string;
  page: PageFields;
}

export function franchiseProgramMemberNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof FranchiseProgramMemberFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<FranchiseProgramMemberFields, F[number]>>(`${id}`, opts),
  };
}

