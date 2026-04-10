/**
 * Type safety demo — hover over variables in your IDE to see the types.
 *
 * This file is meant to be READ in your editor, not necessarily run.
 * Hover over each variable to see how TypeScript narrows the types.
 *
 * Run: bun examples/type-safety-demo.ts
 */
import { createClient } from "../src/generated/index.ts";

const api = createClient({ accessToken: "demo" });

// ┌─────────────────────────────────────────────┐
// │ 1. Field selection narrows the return type   │
// └─────────────────────────────────────────────┘

// Hover over `narrow` — it's Pick<AdAccountFields, "id" | "name" | "currency">
const narrow = await api.adAccount("act_123").get({
  fields: ["id", "name", "currency"],
});
narrow.id;       // string ✅
narrow.name;     // string ✅
narrow.currency; // string ✅
// narrow.timezone_name  // ← uncomment to see TS error — not in requested fields

// ┌─────────────────────────────────────────────┐
// │ 2. Cursor returns typed items                │
// └─────────────────────────────────────────────┘

// Hover over `campaign` in the for-await — it's Pick<CampaignFields, "id" | "name" | "status">
for await (const campaign of api.adAccount("act_123").campaigns.list({
  fields: ["id", "name", "status"],
})) {
  campaign.id;     // string ✅
  campaign.name;   // string ✅
  campaign.status; // string ✅ (would be CampaignStatus enum with enum scraping)
}

// ┌─────────────────────────────────────────────┐
// │ 3. Create params are typed                   │
// └─────────────────────────────────────────────┘

// Hover over `create` — the params have typed fields
// Try removing `name` or `objective` to see the TS error for missing required params
api.adAccount("act_123").campaigns.create({
  name: "My Campaign",        // required
  objective: "OUTCOME_SALES",  // required
  special_ad_categories: [],   // required
  status: "PAUSED",            // optional
  daily_budget: 1000,          // optional
});

// ┌─────────────────────────────────────────────┐
// │ 4. Update params are all optional            │
// └─────────────────────────────────────────────┘

api.campaign("123").update({
  name: "New Name",  // only change what you need
});

// ┌─────────────────────────────────────────────┐
// │ 5. Edge accessors are typed per object       │
// └─────────────────────────────────────────────┘

const acct = api.adAccount("act_123");

// Hover over each — IDE shows the available edges
acct.campaigns;    // has .list(), .create()
acct.ads;          // has .list(), .create()
acct.adsets;       // has .list(), .create()
acct.adcreatives;  // has .list(), .create()
acct.adimages;     // has .list(), .create(), .delete()

console.log("Type safety demo complete — check your IDE hover types!");
