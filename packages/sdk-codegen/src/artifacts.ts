import { mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { emitEndpointDescriptors } from "./descriptor-emitter.ts";
import type { SdkIr } from "./ir.ts";
import { validateSdkIr } from "./ir.ts";
import { writeNimbusReference } from "./nimbus-emitter.ts";
import { emitEffectSchemaModule } from "./schema-emitter.ts";

export interface WriteEffectArtifactsOptions {
  readonly outputDir: string;
  readonly ir: SdkIr;
  readonly docsOutputDir?: string;
}

export async function writeEffectArtifacts({
  outputDir,
  ir,
  docsOutputDir,
}: WriteEffectArtifactsOptions): Promise<void> {
  const issues = validateSdkIr(ir);
  if (issues.length > 0) {
    throw new Error(`Invalid canonical SDK IR:\n${issues.map((issue) => `- ${issue}`).join("\n")}`);
  }

  await mkdir(outputDir, { recursive: true });
  await rm(join(outputDir, "ir.json"), { force: true });
  await Promise.all([
    writeFile(
      join(outputDir, "manifest.json"),
      `${JSON.stringify(
        {
          platform: ir.platform,
          source: ir.source,
          version: ir.version,
          counts: {
            models: ir.models.length,
            endpoints: ir.endpoints.length,
            capabilities: ir.capabilities.length,
          },
        },
        null,
        2,
      )}\n`,
      "utf8",
    ),
    writeFile(join(outputDir, "schemas.ts"), emitEffectSchemaModule(ir), "utf8"),
    writeFile(join(outputDir, "endpoints.ts"), emitEndpointDescriptors(ir), "utf8"),
    writeFile(
      join(outputDir, "capabilities.ts"),
      `// This file is generated. Do not edit by hand.\n\nexport const capabilities = ${JSON.stringify(ir.capabilities, null, 2)} as const;\n`,
      "utf8",
    ),
    writeFile(
      join(outputDir, "index.ts"),
      [
        "// This file is generated. Do not edit by hand.",
        'import { createEndpointClient, type EndpointClient, type EndpointClientConfig } from "@openpromo/sdk-runtime/effect";',
        'import { endpointDescriptors } from "./endpoints.ts";',
        "",
        'export { capabilities } from "./capabilities.ts";',
        'export * from "./endpoints.ts";',
        'export * from "./schemas.ts";',
        "",
        "export function createEffectClient(",
        "  config: EndpointClientConfig = {},",
        "): EndpointClient<typeof endpointDescriptors> {",
        "  return createEndpointClient(endpointDescriptors, config);",
        "}",
        "",
      ].join("\n"),
      "utf8",
    ),
    ...(docsOutputDir
      ? [writeNimbusReference({ outputDir: docsOutputDir, ir }).then(() => {})]
      : []),
  ]);
}
