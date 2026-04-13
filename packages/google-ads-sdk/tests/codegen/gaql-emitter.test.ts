import { expect, test } from "bun:test";
import path from "node:path";
import { emitGaqlCatalog } from "../../src/codegen/gaql-emitter.ts";
import { loadProtos } from "../../src/codegen/parser.ts";

const FIXTURES = path.resolve(import.meta.dir, "fixtures");

test("emitGaqlCatalog walks scalar leaves and nested messages", async () => {
  const root = await loadProtos(
    [path.join(FIXTURES, "campaign.proto"), path.join(FIXTURES, "helpers.proto")],
    [FIXTURES],
  );
  const catalog = emitGaqlCatalog(root, {
    resourcesPackagePrefix: "test.gaql",
    metricsMessageFullName: null,
    segmentsMessageFullName: null,
  });

  const campaign = catalog.resources.get("campaign");
  expect(campaign).toBeDefined();
  const fields = campaign!.fields.map((f) => f.gaqlKey).sort();
  expect(fields).toEqual([
    "campaign.final_urls",
    "campaign.id",
    "campaign.name",
    "campaign.network_settings.target_google_search",
    "campaign.network_settings.target_search_network",
    "campaign.resource_name",
    "campaign.status",
    "campaign.url_custom_parameters",
  ]);

  const customParams = campaign!.fields.find((f) => f.gaqlKey === "campaign.url_custom_parameters");
  expect(customParams).toBeDefined();
  expect(customParams!.tsType).toBe("CustomParam[]");

  const status = campaign!.fields.find((f) => f.gaqlKey === "campaign.status");
  expect(status!.tsType).toBe("SampleStatus");

  const targetSearch = campaign!.fields.find(
    (f) => f.gaqlKey === "campaign.network_settings.target_google_search",
  );
  expect(targetSearch!.namespace).toBe("campaign");
  expect(targetSearch!.camelPath).toBe("networkSettings.targetGoogleSearch");
  expect(targetSearch!.tsType).toBe("boolean");

  const id = campaign!.fields.find((f) => f.gaqlKey === "campaign.id");
  expect(id!.tsType).toBe("string");

  const urls = campaign!.fields.find((f) => f.gaqlKey === "campaign.final_urls");
  expect(urls!.tsType).toBe("string[]");
  expect(urls!.camelPath).toBe("finalUrls");
});

test("emitGaqlCatalog renders resource union file", async () => {
  const root = await loadProtos(
    [path.join(FIXTURES, "campaign.proto"), path.join(FIXTURES, "helpers.proto")],
    [FIXTURES],
  );
  const catalog = emitGaqlCatalog(root, {
    resourcesPackagePrefix: "test.gaql",
    metricsMessageFullName: null,
    segmentsMessageFullName: null,
  });
  const rendered = catalog.renderResourceFile("campaign");
  expect(rendered).toContain("export type CampaignSelectableField =");
  expect(rendered).toContain('"campaign.id"');
  expect(rendered).toContain('"campaign.network_settings.target_google_search"');
});

test("emitGaqlCatalog renders field-map file with imports", async () => {
  const root = await loadProtos(
    [path.join(FIXTURES, "campaign.proto"), path.join(FIXTURES, "helpers.proto")],
    [FIXTURES],
  );
  const catalog = emitGaqlCatalog(root, {
    resourcesPackagePrefix: "test.gaql",
    metricsMessageFullName: null,
    segmentsMessageFullName: null,
  });
  const rendered = catalog.renderFieldMapFile();
  expect(rendered).toContain("export type FieldMap =");
  expect(rendered).toContain('"campaign.status": FieldInfo<"campaign", "status", SampleStatus>');
  expect(rendered).toContain(
    '"campaign.network_settings.target_google_search": FieldInfo<"campaign", "networkSettings.targetGoogleSearch", boolean>',
  );
  expect(rendered).toMatch(/import type \{ SampleStatus \}/);
});
