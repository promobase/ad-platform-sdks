/**
 * Basic usage — read an ad account, list campaigns, create a campaign.
 *
 * Set META_ACCESS_TOKEN in your .env file, then run:
 *   bun examples/basic-usage.ts
 */
import { createClient } from "../src/generated/index.ts";

const api = createClient({
  accessToken: process.env.META_ACCESS_TOKEN!,
  debug: true,
});

// --- Read an ad account with typed field selection ---
const account = await api.adAccount("act_YOUR_AD_ACCOUNT_ID").get({
  fields: ["id", "name", "currency", "timezone_name", "amount_spent"],
});

console.log("Account:", account.name);
console.log("Currency:", account.currency);
console.log("Timezone:", account.timezone_name);
console.log("Spent:", account.amount_spent);

// --- List campaigns with async iteration ---
console.log("\nCampaigns:");
for await (const campaign of api.adAccount("act_YOUR_AD_ACCOUNT_ID").campaigns.list({
  fields: ["id", "name", "status", "objective", "daily_budget"],
})) {
  console.log(`  ${campaign.name} [${campaign.status}] budget=${campaign.daily_budget}`);
}

// --- Create a campaign ---
// const newCampaign = await api.adAccount("act_YOUR_AD_ACCOUNT_ID").campaigns.create({
//   name: "Test Campaign from SDK",
//   objective: "OUTCOME_AWARENESS",
//   status: "PAUSED",
//   special_ad_categories: [],
// });
// console.log("\nCreated campaign:", newCampaign);
