import path from "node:path";
import fs from "node:fs/promises";
import { loadProtos, type MessageAst } from "./parser.ts";
import { emitEnum, emitMessage, emitService } from "./emitter.ts";

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

  const messageIndex = new Map<string, MessageAst>();
  for (const m of root.messages) messageIndex.set(m.fullName, m);

  const isV23 = (fullName: string) => fullName.startsWith("google.ads.googleads.v23.");

  // Enums — only top-level v23 enums, deduplicated by name
  const enumNames = new Set<string>();
  for (const e of root.enums) {
    if (!isV23(e.fullName)) continue;
    if (enumNames.has(e.name)) continue;
    enumNames.add(e.name);
    const file = path.join(OUT, "enums", `${e.name}.ts`);
    await writeFile(file, emitEnum(e));
  }

  // Messages — only top-level v23 messages, deduplicated by name
  const messageNames = new Set<string>();
  for (const m of root.messages) {
    if (!isV23(m.fullName)) continue;
    if (messageNames.has(m.name)) continue;
    messageNames.add(m.name);
    const file = path.join(OUT, "resources", `${m.name}.ts`);
    await writeFile(file, emitMessage(m));
  }

  // Services
  const serviceInstances: { name: string; instance: string }[] = [];
  for (const s of root.services) {
    if (!isV23(s.fullName)) continue;
    const instance = s.name.charAt(0).toLowerCase() + s.name.slice(1);
    const file = path.join(OUT, "services", `${s.name}.ts`);
    await writeFile(file, emitService(s, messageIndex));
    serviceInstances.push({ name: s.name, instance });
  }

  // Barrels
  const sortedEnums = [...enumNames].sort();
  const sortedMessages = [...messageNames].sort();
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
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
