import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

import { emitEndpointDescriptors } from "./descriptor-emitter.ts";
import type { SdkIr } from "./ir.ts";
import { validateSdkIr } from "./ir.ts";
import { writeNimbusReference } from "./nimbus-emitter.ts";
import {
  effectTarget,
  typescriptTarget,
  type CodegenTarget,
  type GeneratedFile,
  valibotTarget,
} from "./targets.ts";

export interface WriteTargetArtifactsOptions {
  readonly outputDir: string;
  readonly ir: SdkIr;
  readonly target: CodegenTarget;
}

export async function writeTargetArtifacts({
  outputDir,
  ir,
  target,
}: WriteTargetArtifactsOptions): Promise<readonly GeneratedFile[]> {
  const issues = validateSdkIr(ir);
  if (issues.length > 0) {
    throw new Error(`Invalid canonical SDK IR:\n${issues.map((issue) => `- ${issue}`).join("\n")}`);
  }

  const files = target.emit({ ir, models: ir.models });
  const paths = new Set<string>();
  for (const file of files) {
    if (
      !file.path ||
      file.path.startsWith("/") ||
      file.path.includes("\\") ||
      file.path.split("/").some((part) => part === "..")
    ) {
      throw new Error(`Codegen target ${target.id} emitted an unsafe path: ${file.path}`);
    }
    if (paths.has(file.path)) {
      throw new Error(`Codegen target ${target.id} emitted a duplicate path: ${file.path}`);
    }
    paths.add(file.path);
  }

  await mkdir(outputDir, { recursive: true });
  await Promise.all(
    files.map(async (file) => {
      const path = join(outputDir, file.path);
      await mkdir(dirname(path), { recursive: true });
      await writeFile(path, file.content, "utf8");
    }),
  );
  return files;
}

export interface WriteContractArtifactsOptions {
  /** Parent directory receiving one subdirectory per target id. */
  readonly outputDir: string;
  readonly ir: SdkIr;
  readonly targets?: readonly CodegenTarget[];
}

export async function writeContractArtifacts({
  outputDir,
  ir,
  targets = [typescriptTarget, valibotTarget],
}: WriteContractArtifactsOptions): Promise<void> {
  const issues = validateSdkIr(ir);
  if (issues.length > 0) {
    throw new Error(`Invalid canonical SDK IR:\n${issues.map((issue) => `- ${issue}`).join("\n")}`);
  }

  await Promise.all(
    targets.map((target) =>
      writeTargetArtifacts({
        outputDir: join(outputDir, target.id),
        ir,
        target,
      }),
    ),
  );
}

export interface WriteEffectArtifactsOptions {
  readonly outputDir: string;
  readonly ir: SdkIr;
  readonly docsOutputDir?: string;
  /** Parent directory receiving the standard TypeScript and Valibot targets. */
  readonly contractOutputDir?: string;
}

export async function writeEffectArtifacts({
  outputDir,
  ir,
  docsOutputDir,
  contractOutputDir,
}: WriteEffectArtifactsOptions): Promise<void> {
  const issues = validateSdkIr(ir);
  if (issues.length > 0) {
    throw new Error(`Invalid canonical SDK IR:\n${issues.map((issue) => `- ${issue}`).join("\n")}`);
  }

  await mkdir(outputDir, { recursive: true });
  if (contractOutputDir) {
    await writeContractArtifacts({ outputDir: contractOutputDir, ir });
  }
  await writeTargetArtifacts({ outputDir, ir, target: effectTarget });
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
          coverage: {
            ...(ir.coverage ?? {
              discoveredOperations: ir.endpoints.length,
              excludedOperations: [],
              unresolvedSchemas: [],
              protocols: ["json"],
            }),
            emittedOperations: ir.endpoints.length,
          },
        },
        null,
        2,
      )}\n`,
      "utf8",
    ),
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
