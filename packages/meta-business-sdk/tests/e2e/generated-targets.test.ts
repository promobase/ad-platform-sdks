import { expect, test } from "bun:test";

import type { CampaignFields } from "@openpromo/meta/types";
import { CampaignFieldsSchema } from "@openpromo/meta/valibot";
import { parse } from "valibot";

test("generated Valibot target is available through the package subpath", () => {
  const campaign: CampaignFields = parse(CampaignFieldsSchema, {
    id: "campaign_123",
    name: "Launch campaign",
    provider_future_field: true,
  });

  expect(campaign).toMatchObject({
    id: "campaign_123",
    name: "Launch campaign",
    provider_future_field: true,
  });
});
