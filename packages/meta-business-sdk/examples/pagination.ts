/**
 * Pagination patterns — manual pages, toArray, take.
 *
 * Run: bun examples/pagination.ts
 */
import { createClient } from "../src/generated/index.ts";

const api = createClient({
  accessToken: process.env.META_ACCESS_TOKEN!,
});

const adAccountId = "act_YOUR_AD_ACCOUNT_ID";

// --- Manual page-by-page ---
console.log("=== Manual pagination ===");
const cursor = api.adAccount(adAccountId).campaigns.list({
  fields: ["id", "name"],
});

const page1 = await cursor.next();
console.log(`Page 1: ${page1.data.length} items, hasNext: ${page1.hasNext}`);
for (const c of page1.data) {
  console.log(`  ${c.id}: ${c.name}`);
}

if (page1.hasNext) {
  const page2 = await cursor.next();
  console.log(`Page 2: ${page2.data.length} items, hasNext: ${page2.hasNext}`);
}

// --- Collect all into array ---
console.log("\n=== toArray ===");
const allCampaigns = await api
  .adAccount(adAccountId)
  .campaigns.list({
    fields: ["id", "name"],
  })
  .toArray();
console.log(`Total campaigns: ${allCampaigns.length}`);

// --- Take first N ---
console.log("\n=== take(5) ===");
const first5 = await api
  .adAccount(adAccountId)
  .campaigns.list({
    fields: ["id", "name", "status"],
  })
  .take(5);
for (const c of first5) {
  console.log(`  ${c.name} [${c.status}]`);
}
