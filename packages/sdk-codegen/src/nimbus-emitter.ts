import { mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

import type { EndpointIr, ModelIr, PlatformId, SdkIr, TypeRefIr } from "./ir.ts";
import { validateSdkIr } from "./ir.ts";

const ENDPOINT_PAGE_SIZE = 75;
const MODEL_PAGE_SIZE = 100;

const PLATFORM_DETAILS: Record<
  PlatformId,
  {
    readonly label: string;
    readonly packageName: string;
    readonly effectImport: string;
    readonly order: number;
  }
> = {
  meta: {
    label: "Meta",
    packageName: "@mosaic/meta",
    effectImport: "@mosaic/meta/effect",
    order: 10,
  },
  tiktok: {
    label: "TikTok Business",
    packageName: "@mosaic/tiktok",
    effectImport: "@mosaic/tiktok/effect",
    order: 20,
  },
  "google-ads": {
    label: "Google Ads",
    packageName: "@mosaic/google-ads",
    effectImport: "@mosaic/google-ads/v25/effect",
    order: 30,
  },
  "google-business-profile": {
    label: "Google Business Profile",
    packageName: "@mosaic/google-business-profile",
    effectImport: "@mosaic/google-business-profile/effect",
    order: 40,
  },
  linkedin: {
    label: "LinkedIn",
    packageName: "@mosaic/linkedin",
    effectImport: "@mosaic/linkedin/effect",
    order: 50,
  },
  x: {
    label: "X",
    packageName: "@mosaic/x",
    effectImport: "@mosaic/x/effect",
    order: 60,
  },
  youtube: {
    label: "YouTube",
    packageName: "@mosaic/youtube",
    effectImport: "@mosaic/youtube/effect",
    order: 70,
  },
  snapchat: {
    label: "Snapchat",
    packageName: "@mosaic/snapchat",
    effectImport: "@mosaic/snapchat/effect",
    order: 80,
  },
  reddit: {
    label: "Reddit Ads",
    packageName: "@mosaic/reddit",
    effectImport: "@mosaic/reddit/effect",
    order: 90,
  },
  pinterest: {
    label: "Pinterest",
    packageName: "@mosaic/pinterest",
    effectImport: "@mosaic/pinterest/effect",
    order: 100,
  },
  "amazon-ads": {
    label: "Amazon Ads",
    packageName: "@mosaic/amazon-ads",
    effectImport: "@mosaic/amazon-ads",
    order: 110,
  },
  "amazon-ads-sp": {
    label: "Amazon Ads — Sponsored Products",
    packageName: "@mosaic/amazon-ads",
    effectImport: "@mosaic/amazon-ads/sponsored-products/effect",
    order: 111,
  },
  "amazon-ads-sb": {
    label: "Amazon Ads — Sponsored Brands",
    packageName: "@mosaic/amazon-ads",
    effectImport: "@mosaic/amazon-ads/sponsored-brands/effect",
    order: 112,
  },
  "amazon-ads-sd": {
    label: "Amazon Ads — Sponsored Display",
    packageName: "@mosaic/amazon-ads",
    effectImport: "@mosaic/amazon-ads/sponsored-display/effect",
    order: 113,
  },
  "amazon-ads-api": {
    label: "Amazon Ads API",
    packageName: "@mosaic/amazon-ads",
    effectImport: "@mosaic/amazon-ads/api/effect",
    order: 114,
  },
  bluesky: {
    label: "Bluesky",
    packageName: "@mosaic/bluesky",
    effectImport: "@mosaic/bluesky/effect",
    order: 120,
  },
  facebook: {
    label: "Facebook",
    packageName: "@mosaic/meta",
    effectImport: "@mosaic/meta/effect",
    order: 11,
  },
  instagram: {
    label: "Instagram",
    packageName: "@mosaic/meta",
    effectImport: "@mosaic/meta/effect",
    order: 12,
  },
  threads: {
    label: "Threads",
    packageName: "@mosaic/meta",
    effectImport: "@mosaic/meta/effect",
    order: 13,
  },
};

export interface WriteNimbusReferenceOptions {
  readonly outputDir: string;
  readonly ir: SdkIr;
  readonly endpointPageSize?: number;
  readonly modelPageSize?: number;
}

interface ReferencePage<T> {
  readonly path: string;
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly items: readonly T[];
}

export interface NimbusReferenceManifest {
  readonly schemaVersion: 1;
  readonly platform: PlatformId;
  readonly version: string;
  readonly endpointCount: number;
  readonly modelCount: number;
  readonly capabilityCount: number;
  readonly endpointPages: readonly string[];
  readonly modelPages: readonly string[];
}

export async function writeNimbusReference({
  outputDir,
  ir,
  endpointPageSize = ENDPOINT_PAGE_SIZE,
  modelPageSize = MODEL_PAGE_SIZE,
}: WriteNimbusReferenceOptions): Promise<NimbusReferenceManifest> {
  const issues = validateSdkIr(ir);
  if (issues.length > 0) {
    throw new Error(`Invalid canonical SDK IR:\n${issues.map((issue) => `- ${issue}`).join("\n")}`);
  }
  if (!Number.isInteger(endpointPageSize) || endpointPageSize < 1) {
    throw new Error("endpointPageSize must be a positive integer");
  }
  if (!Number.isInteger(modelPageSize) || modelPageSize < 1) {
    throw new Error("modelPageSize must be a positive integer");
  }

  const details = PLATFORM_DETAILS[ir.platform];
  const platformDir = join(outputDir, ir.platform);
  const endpoints = [...ir.endpoints].sort((a, b) => a.operationId.localeCompare(b.operationId));
  const models = [...ir.models].sort((a, b) => a.name.localeCompare(b.name));
  const endpointPages = createEndpointPages(details, endpoints, endpointPageSize);
  const modelPages = createModelPages(details, models, modelPageSize);

  await rm(platformDir, { recursive: true, force: true });
  await mkdir(platformDir, { recursive: true });
  await Promise.all([
    mkdir(join(platformDir, "endpoints"), { recursive: true }),
    mkdir(join(platformDir, "models"), { recursive: true }),
  ]);

  const writes: Promise<void>[] = [
    writeFile(
      join(platformDir, "index.mdx"),
      emitPlatformIndex(ir, details, endpointPages, modelPages),
    ),
  ];
  endpointPages.forEach((page, index) => {
    writes.push(
      writeReferencePage(platformDir, page.path, emitEndpointPage(ir, details, page, index)),
    );
  });
  modelPages.forEach((page, index) => {
    writes.push(
      writeReferencePage(platformDir, page.path, emitModelPage(ir, details, page, index)),
    );
  });

  const manifest: NimbusReferenceManifest = {
    schemaVersion: 1,
    platform: ir.platform,
    version: ir.version,
    endpointCount: endpoints.length,
    modelCount: models.length,
    capabilityCount: ir.capabilities.length,
    endpointPages: endpointPages.map((page) => page.path),
    modelPages: modelPages.map((page) => page.path),
  };
  writes.push(
    writeFile(join(platformDir, "reference-manifest.json"), emitReferenceManifest(manifest)),
  );
  await Promise.all(writes);
  return manifest;
}

function emitReferenceManifest(manifest: NimbusReferenceManifest): string {
  return [
    "{",
    `  "schemaVersion": ${manifest.schemaVersion},`,
    `  "platform": ${JSON.stringify(manifest.platform)},`,
    `  "version": ${JSON.stringify(manifest.version)},`,
    `  "endpointCount": ${manifest.endpointCount},`,
    `  "modelCount": ${manifest.modelCount},`,
    `  "capabilityCount": ${manifest.capabilityCount},`,
    ...jsonArrayProperty("endpointPages", manifest.endpointPages, true),
    ...jsonArrayProperty("modelPages", manifest.modelPages, false),
    "}",
    "",
  ].join("\n");
}

function jsonArrayProperty(
  name: string,
  values: readonly string[],
  trailingComma: boolean,
): string[] {
  const inline = `  ${JSON.stringify(name)}: [${values.map((value) => JSON.stringify(value)).join(", ")}]`;
  if (inline.length + (trailingComma ? 1 : 0) <= 100) {
    return [`${inline}${trailingComma ? "," : ""}`];
  }
  return [
    `  ${JSON.stringify(name)}: [`,
    ...values.map(
      (value, index) => `    ${JSON.stringify(value)}${index === values.length - 1 ? "" : ","}`,
    ),
    `  ]${trailingComma ? "," : ""}`,
  ];
}

async function writeReferencePage(
  platformDir: string,
  pagePath: string,
  source: string,
): Promise<void> {
  const pageDir = join(platformDir, pagePath);
  await mkdir(pageDir, { recursive: true });
  await writeFile(join(pageDir, "index.mdx"), source);
}

function emitPlatformIndex(
  ir: SdkIr,
  details: (typeof PLATFORM_DETAILS)[PlatformId],
  endpointPages: readonly ReferencePage<EndpointIr>[],
  modelPages: readonly ReferencePage<ModelIr>[],
): string {
  const lines = [
    frontmatter({
      title: `${details.label} SDK reference`,
      description: `Generated reference for ${ir.endpoints.length} ${details.label} endpoints and ${ir.models.length} models.`,
      platform: ir.platform,
      sourceVersion: ir.version,
      sidebar: { order: details.order, label: details.label },
    }),
    generatedNotice(ir),
    `Install the platform package and import either its high-level client or its generated Effect client.`,
    "",
    "```bash",
    `bun add ${details.packageName}`,
    "```",
    "",
    "```ts",
    `import { createEffectClient } from ${JSON.stringify(details.effectImport)};`,
    "",
    "const client = createEffectClient();",
    "```",
    "",
    "| Contract | Value |",
    "| --- | --- |",
    `| Platform | ${tableText(details.label)} |`,
    `| API version | ${code(ir.version)} |`,
    `| Source | ${code(`${ir.source.kind}: ${ir.source.location}`)} |`,
    `| Endpoints | ${ir.endpoints.length} |`,
    `| Models | ${ir.models.length} |`,
    `| Capabilities | ${ir.capabilities.length} |`,
    "",
  ];

  if (endpointPages.length > 0) {
    lines.push("## Endpoints", "");
    endpointPages.forEach((page) => {
      lines.push(`- [${page.label}](/reference/${ir.platform}/${page.path})`);
    });
    lines.push("");
  }

  if (modelPages.length > 0) {
    lines.push("## Models", "");
    modelPages.forEach((page) => {
      lines.push(`- [${page.label}](/reference/${ir.platform}/${page.path})`);
    });
    lines.push("");
  }

  lines.push(
    "## Capabilities",
    "",
    "| Capability | Summary | Required scopes |",
    "| --- | --- | --- |",
  );
  for (const capability of [...ir.capabilities].sort((a, b) => a.id.localeCompare(b.id))) {
    lines.push(
      `| ${code(capability.id)} | ${tableText(capability.summary)} | ${capability.requiredScopes.length > 0 ? capability.requiredScopes.map(code).join("<br />") : "None declared"} |`,
    );
  }
  return `${lines.join("\n").trim()}\n`;
}

function emitEndpointPage(
  ir: SdkIr,
  details: (typeof PLATFORM_DETAILS)[PlatformId],
  page: ReferencePage<EndpointIr>,
  pageIndex: number,
): string {
  const lines = [
    frontmatter({
      title: page.title,
      description: page.description,
      platform: ir.platform,
      sourceVersion: ir.version,
      sidebar: { order: 100 + pageIndex, label: page.label },
      tableOfContents: false,
    }),
    generatedNotice(ir),
  ];

  for (const endpoint of page.items) {
    lines.push(
      `## ${headingText(endpoint.operationId)}`,
      "",
      `${code(endpoint.method)} ${code(endpoint.path)}`,
      "",
      prose(endpoint.description ?? endpoint.summary),
      "",
      "| Behavior | Value |",
      "| --- | --- |",
      `| Effect | ${code(endpoint.effect)} |`,
      `| Execution | ${code(endpoint.execution)} |`,
      `| Idempotency | ${code(endpoint.idempotency)} |`,
      `| Capabilities | ${endpoint.capabilities.length > 0 ? endpoint.capabilities.map(code).join("<br />") : "None declared"} |`,
      `| Required scopes | ${endpoint.requiredScopes.length > 0 ? endpoint.requiredScopes.map(code).join("<br />") : "None declared"} |`,
      `| Rate-limit bucket | ${endpoint.rateLimitBucket ? code(endpoint.rateLimitBucket) : "Provider default"} |`,
      `| Output | ${code(typeRef(endpoint.output))} |`,
      "",
    );

    if (endpoint.parameters.length > 0) {
      lines.push(
        "**Parameters**",
        "",
        "| Name | Location | Type | Required | Nullable | Description |",
        "| --- | --- | --- | --- | --- | --- |",
      );
      for (const parameter of endpoint.parameters) {
        lines.push(
          `| ${code(parameter.wireName ?? parameter.name)} | ${code(parameter.location)} | ${code(typeRef(parameter.type))} | ${parameter.required ? "Yes" : "No"} | ${parameter.nullable ? "Yes" : "No"} | ${tableText(parameter.documentation ?? "—")} |`,
        );
      }
      lines.push("");
    }

    if (endpoint.pagination) {
      lines.push(
        `**Pagination:** ${code(endpoint.pagination.kind)} using request field ${code(endpoint.pagination.requestField)}, response field ${code(endpoint.pagination.responseField)}, and items field ${code(endpoint.pagination.itemsField)}.`,
        "",
      );
    }

    if (endpoint.errors.length > 0) {
      lines.push(
        "**Declared errors**",
        "",
        "| Status | Code | Model | Retryable |",
        "| --- | --- | --- | --- |",
      );
      for (const error of endpoint.errors) {
        lines.push(
          `| ${error.status ?? "Provider-defined"} | ${error.code ? code(error.code) : "—"} | ${error.model ? code(typeRef(error.model)) : "—"} | ${error.retryable ? "Yes" : "No"} |`,
        );
      }
      lines.push("");
    }
  }
  return `${lines.join("\n").trim()}\n`;
}

function emitModelPage(
  ir: SdkIr,
  details: (typeof PLATFORM_DETAILS)[PlatformId],
  page: ReferencePage<ModelIr>,
  pageIndex: number,
): string {
  const lines = [
    frontmatter({
      title: page.title,
      description: page.description,
      platform: ir.platform,
      sourceVersion: ir.version,
      sidebar: { order: 1000 + pageIndex, label: page.label },
      tableOfContents: false,
    }),
    generatedNotice(ir),
  ];
  for (const model of page.items) {
    lines.push(
      `## ${headingText(model.name)}`,
      "",
      `${code(model.kind)} model on the ${code(model.wire)} wire format.`,
      "",
    );
    if (model.documentation) lines.push(prose(model.documentation), "");
    switch (model.kind) {
      case "object":
        if (model.fields.length === 0) {
          lines.push("No fields are declared.", "");
          break;
        }
        lines.push(
          "| Field | Wire name | Type | Required | Nullable | Description |",
          "| --- | --- | --- | --- | --- | --- |",
        );
        for (const field of model.fields) {
          lines.push(
            `| ${code(field.name)} | ${code(field.wireName ?? field.name)} | ${code(typeRef(field.type))} | ${field.required ? "Yes" : "No"} | ${field.nullable ? "Yes" : "No"} | ${tableText(field.documentation ?? (field.deprecated ? "Deprecated" : "—"))} |`,
          );
        }
        lines.push("");
        break;
      case "enum":
        lines.push(`**Values:** ${model.values.map(code).join(", ")}`, "");
        break;
      case "union":
        lines.push(
          `**Variants:** ${model.variants.map((variant) => code(typeRef(variant))).join(" | ")}`,
          "",
        );
        break;
      case "scalar":
        lines.push(`**Value:** ${code(typeRef(model.value))}`, "");
        break;
    }
  }
  return `${lines.join("\n").trim()}\n`;
}

function frontmatter(input: {
  readonly title: string;
  readonly description: string;
  readonly platform: string;
  readonly sourceVersion: string;
  readonly sidebar: { readonly order: number; readonly label: string };
  readonly tableOfContents?: false;
}): string {
  return [
    "---",
    `title: ${JSON.stringify(input.title)}`,
    `description: ${JSON.stringify(input.description)}`,
    "generated: true",
    `platform: ${JSON.stringify(input.platform)}`,
    `sourceVersion: ${JSON.stringify(input.sourceVersion)}`,
    "sidebar:",
    `  order: ${input.sidebar.order}`,
    `  label: ${JSON.stringify(input.sidebar.label)}`,
    ...(input.tableOfContents === false ? ["tableOfContents: false"] : []),
    "---",
    "",
  ].join("\n");
}

function generatedNotice(ir: SdkIr): string {
  const source = `${ir.source.kind}: ${ir.source.location}`.replaceAll("*/", "* /");
  return `{/* Generated from canonical SdkIr (${source}). Do not edit by hand. */}\n`;
}

function chunk<T>(items: readonly T[], size: number): readonly (readonly T[])[] {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

function createEndpointPages(
  details: (typeof PLATFORM_DETAILS)[PlatformId],
  endpoints: readonly EndpointIr[],
  pageSize: number,
): readonly ReferencePage<EndpointIr>[] {
  const groups = new Map<string, EndpointIr[]>();
  for (const endpoint of endpoints) {
    const resource = endpointResource(endpoint);
    const slug = slugify(resource) || "general";
    const group = groups.get(slug) ?? [];
    group.push(endpoint);
    groups.set(slug, group);
  }

  return [...groups.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .flatMap(([resourceSlug, items]) => {
      const resourceLabel = humanizeIdentifier(endpointResource(items[0]!));
      const pages = chunk(items, pageSize);
      return pages.map((pageItems) => {
        const firstAction = endpointAction(pageItems[0]!);
        const lastAction = endpointAction(pageItems.at(-1)!);
        const hasMultiplePages = pages.length > 1;
        const rangeLabel = `${humanizeIdentifier(firstAction)} – ${humanizeIdentifier(lastAction)}`;
        const label = hasMultiplePages ? `${resourceLabel}: ${rangeLabel}` : resourceLabel;
        const rangeSlug = `${boundedSlug(firstAction)}-to-${boundedSlug(lastAction)}`;
        return {
          path: `endpoints/${resourceSlug}${hasMultiplePages ? `-${rangeSlug}` : ""}`,
          label,
          title: `${details.label} ${label} endpoints`,
          description: `${pageItems.length} generated ${details.label} endpoint ${pageItems.length === 1 ? "contract" : "contracts"} for ${label}.`,
          items: pageItems,
        };
      });
    });
}

function createModelPages(
  details: (typeof PLATFORM_DETAILS)[PlatformId],
  models: readonly ModelIr[],
  pageSize: number,
): readonly ReferencePage<ModelIr>[] {
  const usedPaths = new Set<string>();
  return chunk(models, pageSize).map((items) => {
    const first = items[0]!.name;
    const last = items.at(-1)!.name;
    const label =
      first === last
        ? humanizeIdentifier(first)
        : `${humanizeIdentifier(first)} – ${humanizeIdentifier(last)}`;
    const basePath = `models/${boundedSlug(first)}${first === last ? "" : `-to-${boundedSlug(last)}`}`;
    let path = basePath;
    for (let suffix = 2; usedPaths.has(path); suffix += 1) path = `${basePath}-${suffix}`;
    usedPaths.add(path);
    return {
      path,
      label,
      title: `${details.label} models: ${label}`,
      description: `${items.length} generated ${details.label} model ${items.length === 1 ? "contract" : "contracts"}, from ${first} through ${last}.`,
      items,
    };
  });
}

function endpointResource(endpoint: EndpointIr): string {
  const segments = endpoint.operationId.split(".").filter(Boolean);
  if (segments.length >= 3) return segments[1]!;
  if (segments.length === 2) return segments[0]!;
  const capabilityResource = endpoint.capabilities[0]?.split(".")[0];
  if (capabilityResource) return capabilityResource;
  return (
    endpoint.operationId
      .replace(
        /^(?:batchGet|create|delete|exchange|fetch|finalize|get|initialize|list|refresh|report|update)/,
        "",
      )
      .replace(/(?:ByAuthor|ById)$/, "") || "general"
  );
}

function endpointAction(endpoint: EndpointIr): string {
  return endpoint.operationId.split(".").at(-1) ?? endpoint.operationId;
}

function humanizeIdentifier(value: string): string {
  const words = identifierWords(value);
  if (words.length === 0) return "General";
  return words
    .map((word, index) => (index === 0 ? `${word[0]!.toUpperCase()}${word.slice(1)}` : word))
    .join(" ")
    .replaceAll("You Tube", "YouTube")
    .replaceAll("Tik Tok", "TikTok")
    .replaceAll("Whats App", "WhatsApp")
    .replaceAll("Adgroup", "Ad group");
}

function identifierWords(value: string): string[] {
  const rawWords = value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replaceAll(/[-_.]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const words: string[] = [];
  let acronym = "";
  for (const word of rawWords) {
    const isAcronymPart = word.length === 1 || /^[A-Z0-9]+$/.test(word);
    if (isAcronymPart) {
      acronym += word.toUpperCase();
      continue;
    }
    if (acronym) words.push(acronym);
    acronym = "";
    words.push(word);
  }
  if (acronym) words.push(acronym);
  return words;
}

function boundedSlug(value: string): string {
  return slugify(value).slice(0, 56).replace(/-+$/g, "") || "unnamed";
}

function slugify(value: string): string {
  return identifierWords(value)
    .join("-")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function typeRef(type: TypeRefIr): string {
  switch (type.kind) {
    case "primitive":
      return type.format ? `${type.name}<${type.format}>` : type.name;
    case "reference":
      return type.target;
    case "literal":
      return JSON.stringify(type.value);
    case "array":
      return `Array<${typeRef(type.items)}>`;
    case "record":
      return `Record<string, ${typeRef(type.values)}>`;
    case "union":
      return type.variants.map(typeRef).join(" | ");
    case "intersection":
      return type.members.map(typeRef).join(" & ");
  }
}

function prose(value: string): string {
  return normalize(value)
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("{", "&#123;")
    .replaceAll("}", "&#125;");
}

function headingText(value: string): string {
  return prose(value).replaceAll("#", "\\#");
}

function tableText(value: string): string {
  return prose(value).replaceAll("|", "\\|");
}

function code(value: string): string {
  return `\`${normalize(value).replaceAll("|", "\\|").replaceAll("`", "\\`")}\``;
}

function normalize(value: string): string {
  return value
    .replaceAll(/\[([^\]]+)]\(\/[^)]+\)/g, "$1")
    .replaceAll(/\s+/g, " ")
    .trim();
}
