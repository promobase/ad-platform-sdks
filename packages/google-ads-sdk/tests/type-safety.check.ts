// Intentional type-error probe. Run with `bun run typecheck` — every line flagged
// with @ts-expect-error MUST produce an error, and non-error lines must compile.
// If any @ts-expect-error line stops erroring (or vice versa), type safety has regressed.

import type { Campaign } from "../src/generated/v23/resources/Campaign.ts";
import type { CampaignStatus } from "../src/generated/v23/enums/CampaignStatus.ts";
import { Google } from "../src/index.ts";
import { googleAdsService } from "../src/generated/v23/services/index.ts";
import { campaignService } from "../src/generated/v23/services/index.ts";

// 1. Enum is a literal union, not `string`.
const good1: CampaignStatus = "ENABLED";
// @ts-expect-error — "ACTIVE" is not a member of CampaignStatus
const bad1: CampaignStatus = "ACTIVE";

// 2. Campaign.status only accepts CampaignStatus members.
const goodCampaign: Campaign = { name: "Q1", status: "PAUSED" };
// @ts-expect-error — 43 is not assignable to CampaignStatus
const badCampaign1: Campaign = { status: 43 };
// @ts-expect-error — "NOT_A_STATE" is not a CampaignStatus member
const badCampaign2: Campaign = { status: "NOT_A_STATE" };
// @ts-expect-error — `bogus` is not a Campaign field
const badCampaign3: Campaign = { bogus: "x" };

// 3. createClient requires developerToken.
const client = Google.createClient({
  getAccessToken: async () => "tok",
  developerToken: "dev",
});
// @ts-expect-error — missing developerToken
const badClient = Google.createClient({ getAccessToken: async () => "tok" });

// 4. Generated service method signature: client first, then customerId, then body.
//    The body type is Omit<SearchGoogleAdsRequest, "customerId">.
async function searchOk() {
  const res = await googleAdsService.search(client.http, "123", {
    query: "SELECT campaign.id FROM campaign",
  });
  return res.results;
}

async function searchBad() {
  await googleAdsService.search(
    client.http,
    "123",
    // @ts-expect-error — notAField is not a SearchGoogleAdsRequest property
    { notAField: 1 },
  );
  await googleAdsService.search(
    client.http,
    // @ts-expect-error — customerId must be string, not number
    123,
    { query: "x" },
  );
  await googleAdsService.search(
    // @ts-expect-error — first arg must be HttpClient, not the client wrapper
    client,
    "123",
    { query: "x" },
  );
}

// 5. Mutate: the customerId path param is stripped from the body type via Omit.
async function mutateOk() {
  await campaignService.mutateCampaigns(client.http, "123", {
    operations: [{ create: { name: "x", status: "PAUSED" } }],
  });
}

async function mutateBad() {
  await campaignService.mutateCampaigns(client.http, "123", {
    operations: [
      // @ts-expect-error — status "BOGUS" is not a CampaignStatus member
      { create: { name: "x", status: "BOGUS" } },
    ],
  });
}

// 6. GoogleAdsError is a proper Error subclass with typed fields.
function handle(err: unknown) {
  if (err instanceof Google.Errors.GoogleAdsError) {
    const n: number = err.httpStatus;
    const r: string | undefined = err.requestId;
    const first = err.errors[0];
    if (first) {
      const code: Record<string, string> = first.errorCode;
      return [n, r, code];
    }
  }
}

// 7. Verify the doc examples from the spec actually typecheck.
async function specPaginateExample() {
  for await (const row of Google.Ads.paginate(
    (req) => googleAdsService.search(client.http, "9999999999", req),
    { query: "SELECT ad_group.id FROM ad_group" },
  )) {
    void row;
  }
}

// Silence unused-var warnings under tsc --noUnusedLocals if enabled.
void [good1, bad1, goodCampaign, badCampaign1, badCampaign2, badCampaign3, badClient, searchOk, searchBad, mutateOk, mutateBad, handle, specPaginateExample];
