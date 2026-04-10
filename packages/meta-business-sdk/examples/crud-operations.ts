/**
 * CRUD operations — create, read, update, delete.
 *
 * Run: bun examples/crud-operations.ts
 */
import { createClient } from "../src/generated/index.ts";

const api = createClient({
  accessToken: process.env.META_ACCESS_TOKEN!,
  debug: true,
});

const adAccountId = "act_YOUR_AD_ACCOUNT_ID";

// --- Create a campaign ---
console.log("=== Create ===");
const created = await api.adAccount(adAccountId).campaigns.create({
  name: "SDK Test Campaign",
  objective: "OUTCOME_AWARENESS",
  status: "PAUSED",
  special_ad_categories: [],
});
console.log("Created:", created);
const campaignId = (created as { id: string }).id;

// --- Read the campaign ---
console.log("\n=== Read ===");
const campaign = await api.campaign(campaignId).get({
  fields: ["id", "name", "status", "objective", "created_time"],
});
console.log("Name:", campaign.name);
console.log("Status:", campaign.status);
console.log("Objective:", campaign.objective);
console.log("Created:", campaign.created_time);

// --- Update the campaign ---
console.log("\n=== Update ===");
await api.campaign(campaignId).update({
  name: "SDK Test Campaign (Updated)",
});
console.log("Updated name");

// Verify the update
const updated = await api.campaign(campaignId).get({
  fields: ["name"],
});
console.log("New name:", updated.name);

// --- Delete the campaign ---
console.log("\n=== Delete ===");
await api.campaign(campaignId).delete();
console.log("Deleted campaign", campaignId);
