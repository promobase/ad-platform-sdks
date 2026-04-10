import type { IGUserFields } from "./ig-user.ts";
import type { PageFields } from "./page.ts";
import type { UserFields } from "./user.ts";

export interface BrandedContentEligibleSponsorIDsFields {
  fb_page: PageFields;
  ig_account_v2: IGUserFields;
  ig_approval_needed: boolean;
}

