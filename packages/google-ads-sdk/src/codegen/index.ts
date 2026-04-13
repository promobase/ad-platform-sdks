import path from "node:path";
import fs from "node:fs/promises";
import { loadProtos, type EnumAst, type MessageAst } from "./parser.ts";
import { emitEnum, emitMessage, emitService } from "./emitter.ts";
import { emitGaqlCatalog } from "./gaql-emitter.ts";

const PKG_ROOT = path.resolve(import.meta.dir, "../..");
const GOOGLEAPIS = path.join(PKG_ROOT, "vendor/googleapis");
const V23_DIR = path.join(GOOGLEAPIS, "google/ads/googleads/v23");
const OUT = path.join(PKG_ROOT, "src/generated/v23");

async function walkProtos(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out: string[] = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walkProtos(full)));
    else if (e.name.endsWith(".proto")) out.push(full);
  }
  return out;
}

async function writeFile(target: string, content: string) {
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, content);
}

// Assign a unique short TS name to every emitted fullName. For top-level
// names this is just the last `.` segment. On collision we fall back to a
// mangled `${parent}_${short}` form, walking up further if still ambiguous.
// The resulting map is shared between the orchestrator (which uses it to
// decide filenames / barrel exports) and the emitter / type-resolver (which
// uses it so references line up).
function assignShortNames(fullNames: Iterable<string>): Map<string, string> {
  const byShort = new Map<string, string[]>();
  for (const fn of fullNames) {
    const parts = fn.split(".");
    const short = parts[parts.length - 1]!;
    const bucket = byShort.get(short) ?? [];
    bucket.push(fn);
    byShort.set(short, bucket);
  }

  const result = new Map<string, string>();
  const used = new Set<string>();

  // First pass: unique short names win outright.
  for (const [short, fns] of byShort) {
    if (fns.length === 1) {
      result.set(fns[0]!, short);
      used.add(short);
    }
  }

  // Second pass: mangle collisions by walking back up the dotted path.
  for (const [short, fns] of byShort) {
    if (fns.length === 1) continue;
    for (const fn of fns) {
      const parts = fn.split(".");
      let depth = 2;
      let candidate = short;
      while (used.has(candidate) && depth <= parts.length) {
        candidate = parts.slice(-depth).join("_");
        depth++;
      }
      // Final fallback: append a numeric suffix.
      if (used.has(candidate)) {
        let i = 2;
        while (used.has(`${short}_${i}`)) i++;
        candidate = `${short}_${i}`;
      }
      result.set(fn, candidate);
      used.add(candidate);
    }
  }

  return result;
}

async function main() {
  console.log(`[codegen] scanning ${V23_DIR}`);
  const protoFiles = await walkProtos(V23_DIR);
  console.log(`[codegen] found ${protoFiles.length} .proto files`);

  const root = await loadProtos(protoFiles, [GOOGLEAPIS]);
  console.log(
    `[codegen] parsed: ${root.messages.length} messages, ${root.enums.length} enums, ${root.services.length} services`,
  );

  // Clean output
  await fs.rm(OUT, { recursive: true, force: true });
  await fs.mkdir(OUT, { recursive: true });

  const isV23 = (fullName: string) => fullName.startsWith("google.ads.googleads.v23.");

  // Collect v23 types, deduplicating by fullName (the parser walks nested
  // types, which can appear multiple times if referenced from several files).
  const v23Messages = new Map<string, MessageAst>();
  for (const m of root.messages) {
    if (!isV23(m.fullName)) continue;
    if (!v23Messages.has(m.fullName)) v23Messages.set(m.fullName, m);
  }
  const v23Enums = new Map<string, EnumAst>();
  for (const e of root.enums) {
    if (!isV23(e.fullName)) continue;
    if (!v23Enums.has(e.fullName)) v23Enums.set(e.fullName, e);
  }

  // Short-name assignment across messages AND enums so we never emit two
  // top-level exports with the same TS name.
  const shortNames = assignShortNames([
    ...v23Messages.keys(),
    ...v23Enums.keys(),
  ]);

  // A messageIndex keyed by fullName is still handy for emitService so it
  // can look at request bodies.
  const messageIndex = new Map<string, MessageAst>();
  for (const m of v23Messages.values()) messageIndex.set(m.fullName, m);

  // Emit enums
  const emittedEnumNames: string[] = [];
  for (const e of v23Enums.values()) {
    const name = shortNames.get(e.fullName)!;
    const file = path.join(OUT, "enums", `${name}.ts`);
    await writeFile(file, emitEnum(e, name));
    emittedEnumNames.push(name);
  }

  // Emit messages (resources + any message types living in v23 — including
  // request/response wrappers under the services package).
  const emittedMessageNames: string[] = [];
  for (const m of v23Messages.values()) {
    const name = shortNames.get(m.fullName)!;
    const file = path.join(OUT, "resources", `${name}.ts`);
    await writeFile(file, emitMessage(m, shortNames, name));
    emittedMessageNames.push(name);
  }

  // Services — emit one file per service. Service type names are
  // guaranteed unique within a proto package already, but we still run them
  // through the shortName map so request/response refs line up.
  const serviceInstances: { name: string; instance: string }[] = [];
  for (const s of root.services) {
    if (!isV23(s.fullName)) continue;
    const instance = s.name.charAt(0).toLowerCase() + s.name.slice(1);
    const file = path.join(OUT, "services", `${s.name}.ts`);
    await writeFile(file, emitService(s, messageIndex, shortNames));
    serviceInstances.push({ name: s.name, instance });
  }

  // Barrels
  const sortedEnums = [...emittedEnumNames].sort();
  const sortedMessages = [...emittedMessageNames].sort();
  const sortedServices = serviceInstances.sort((a, b) => a.name.localeCompare(b.name));

  await writeFile(
    path.join(OUT, "enums/index.ts"),
    sortedEnums.map((n) => `export type { ${n} } from "./${n}.ts";`).join("\n") + "\n",
  );
  await writeFile(
    path.join(OUT, "resources/index.ts"),
    sortedMessages.map((n) => `export type { ${n} } from "./${n}.ts";`).join("\n") + "\n",
  );
  await writeFile(
    path.join(OUT, "services/index.ts"),
    sortedServices.map((s) => `export { ${s.instance} } from "./${s.name}.ts";`).join("\n") + "\n",
  );

  await writeFile(
    path.join(OUT, "index.ts"),
    `export * from "./enums/index.ts";\nexport * from "./resources/index.ts";\nexport * from "./services/index.ts";\n`,
  );

  console.log(
    `[codegen] done: ${sortedEnums.length} enums, ${sortedMessages.length} resources, ${sortedServices.length} services`,
  );

  // GAQL catalog
  console.log("[codegen] emitting GAQL catalog");
  const gaqlCatalog = emitGaqlCatalog(root, {
    resourcesPackagePrefix: "google.ads.googleads.v23.resources",
    metricsMessageFullName: "google.ads.googleads.v23.common.Metrics",
    segmentsMessageFullName: "google.ads.googleads.v23.common.Segments",
    shortNameMap: shortNames,
  });

  const GAQL_OUT = path.join(OUT, "gaql");
  await fs.mkdir(GAQL_OUT, { recursive: true });
  await fs.mkdir(path.join(GAQL_OUT, "resources"), { recursive: true });

  for (const [name] of gaqlCatalog.resources) {
    await writeFile(
      path.join(GAQL_OUT, "resources", `${name}.ts`),
      gaqlCatalog.renderResourceFile(name),
    );
  }
  await writeFile(path.join(GAQL_OUT, "metrics.ts"), gaqlCatalog.renderMetricsFile());
  await writeFile(path.join(GAQL_OUT, "segments.ts"), gaqlCatalog.renderSegmentsFile());
  await writeFile(path.join(GAQL_OUT, "field-map.ts"), gaqlCatalog.renderFieldMapFile());
  await writeFile(path.join(GAQL_OUT, "resource-map.ts"), gaqlCatalog.renderResourceMapFile());
  await writeFile(path.join(GAQL_OUT, "index.ts"), gaqlCatalog.renderIndexFile());

  console.log(
    `[codegen] gaql: ${gaqlCatalog.resources.size} resources, ${gaqlCatalog.metrics.length} metrics, ${gaqlCatalog.segments.length} segments`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
