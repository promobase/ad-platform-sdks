import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const discoveryPath = join(root, "google-discovery/youtube-v3.json");
const outDir = join(root, "packages/youtube-sdk/src/generated");
const discovery = JSON.parse(readFileSync(discoveryPath, "utf8"));

const RESOURCE_NAMES = [
  "channels",
  "videos",
  "playlists",
  "playlistItems",
  "comments",
  "commentThreads",
  "captions",
  "thumbnails",
  "search",
];

mkdirSync(outDir, { recursive: true });

const generated = [
  "// This file was generated from google-discovery/youtube-v3.json.",
  "// Do not edit by hand. Run `bun --filter='./packages/youtube-sdk' run codegen`.",
  "",
];

generated.push(`export const YOUTUBE_DISCOVERY = ${JSON.stringify(
  {
    id: discovery.id,
    revision: discovery.revision,
    discoveryVersion: discovery.discoveryVersion,
    protocol: discovery.protocol,
    baseUrl: discovery.baseUrl,
    rootUrl: discovery.rootUrl,
    servicePath: discovery.servicePath,
    source: "https://youtube.googleapis.com/$discovery/rest?version=v3",
  },
  null,
  2,
)} as const;`);

writeFileSync(join(outDir, "discovery.ts"), `${generated.join("\n")}\n`);

writeFileSync(join(outDir, "types.ts"), `${emitTypes()}\n`);
writeFileSync(join(outDir, "resources.ts"), `${emitResources()}\n`);

function emitTypes() {
  const lines = [
    "// This file was generated from google-discovery/youtube-v3.json.",
    "// Do not edit by hand. Run `bun --filter='./packages/youtube-sdk' run codegen`.",
    "",
  ];

  for (const [name, schema] of Object.entries(discovery.schemas ?? {}).sort(([a], [b]) =>
    a.localeCompare(b),
  )) {
    lines.push(...emitSchema(name, schema), "");
  }

  for (const resourceName of RESOURCE_NAMES) {
    const resource = discovery.resources?.[resourceName];
    if (!resource) continue;
    for (const [methodName, method] of Object.entries(resource.methods ?? {})) {
      const typeName = paramsTypeName(resourceName, methodName);
      lines.push(`export interface ${typeName} {`);
      for (const [paramName, param] of Object.entries(method.parameters ?? {}).sort(([a], [b]) =>
        a.localeCompare(b),
      )) {
        const optional = param.required ? "" : "?";
        lines.push(`  ${safeKey(paramName)}${optional}: ${paramType(param)};`);
      }
      lines.push("}", "");
    }
  }

  return lines.join("\n");
}

function emitSchema(name, schema) {
  const lines = [];
  if (schema.type === "object" || schema.properties || schema.additionalProperties) {
    lines.push(`export interface ${name} {`);
    if (schema.properties) {
      for (const [propName, prop] of Object.entries(schema.properties).sort(([a], [b]) =>
        a.localeCompare(b),
      )) {
        const required = Array.isArray(schema.required) && schema.required.includes(propName);
        lines.push(`  ${safeKey(propName)}${required ? "" : "?"}: ${schemaType(prop)};`);
      }
    }
    if (schema.additionalProperties) {
      lines.push(`  [key: string]: ${schemaType(schema.additionalProperties)} | undefined;`);
    }
    lines.push("}");
    return lines;
  }

  lines.push(`export type ${name} = ${schemaType(schema)};`);
  return lines;
}

function emitResources() {
  const lines = [
    "// This file was generated from google-discovery/youtube-v3.json.",
    "// Do not edit by hand. Run `bun --filter='./packages/youtube-sdk' run codegen`.",
    "",
    'import type { YouTubeClient, YouTubeRequestOptions } from "../client.ts";',
    'import type * as YouTubeTypes from "./types.ts";',
    "",
    "export function createYouTubeResources(client: YouTubeClient) {",
    "  return {",
  ];

  for (const resourceName of RESOURCE_NAMES) {
    const resource = discovery.resources?.[resourceName];
    if (!resource) continue;
    lines.push(`    ${resourceName}: {`);
    for (const [methodName, method] of Object.entries(resource.methods ?? {}).sort(([a], [b]) =>
      a.localeCompare(b),
    )) {
      const paramsName = `YouTubeTypes.${paramsTypeName(resourceName, methodName)}`;
      const responseName = method.response?.$ref ? `YouTubeTypes.${method.response.$ref}` : "void";
      const requestName = method.request?.$ref ? `YouTubeTypes.${method.request.$ref}` : "undefined";
      const hasRequiredParams = Object.values(method.parameters ?? {}).some((param) => param.required);
      const paramArg = hasRequiredParams || method.request?.$ref
        ? `params: ${paramsName}`
        : `params: ${paramsName} = {}`;
      const bodyArg = method.request?.$ref ? `body: ${requestName}` : "body?: undefined";
      lines.push(
        `      ${methodName}(${paramArg}, ${bodyArg}, opts?: YouTubeRequestOptions): Promise<${responseName}> {`,
      );
      lines.push(`        return client.request<${responseName}>({`);
      lines.push(`          method: ${JSON.stringify(method.httpMethod)},`);
      lines.push(`          path: ${JSON.stringify(method.path)},`);
      lines.push("          params,");
      if (method.request?.$ref) lines.push("          body,");
      lines.push("          opts,");
      lines.push("        });");
      lines.push("      },");
    }
    lines.push("    },");
  }

  lines.push("  };", "}", "");
  lines.push("export type YouTubeResources = ReturnType<typeof createYouTubeResources>;");
  return lines.join("\n");
}

function paramsTypeName(resourceName, methodName) {
  return `YouTube${pascal(resourceName)}${pascal(methodName)}Params`;
}

function paramType(param) {
  const base = schemaType(param);
  return param.repeated ? `${base}[]` : base;
}

function schemaType(schema) {
  if (!schema) return "unknown";
  if (schema.$ref) return schema.$ref;
  if (schema.enum?.length) return schema.enum.map((value) => JSON.stringify(value)).join(" | ");

  switch (schema.type) {
    case "string":
      return "string";
    case "integer":
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "array":
      return `${schemaType(schema.items)}[]`;
    case "object": {
      if (schema.properties) {
        const props = Object.entries(schema.properties)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([key, value]) => `${safeKey(key)}?: ${schemaType(value)}`)
          .join("; ");
        return `{ ${props} }`;
      }
      if (schema.additionalProperties) {
        return `Record<string, ${schemaType(schema.additionalProperties)}>`;
      }
      return "Record<string, unknown>";
    }
    default:
      return "unknown";
  }
}

function safeKey(key) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) ? key : JSON.stringify(key);
}

function pascal(value) {
  return value
    .replace(/(^|[^A-Za-z0-9]+)([A-Za-z0-9])/g, (_, __, char) => char.toUpperCase())
    .replace(/[^A-Za-z0-9]/g, "");
}
