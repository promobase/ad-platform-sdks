import { extractAllEnums } from "../src/codegen/enum-extractor.ts";

const enumSourceDir = process.argv[2] ?? "/tmp/fb-node-sdk/src/objects";
const enums = await extractAllEnums(enumSourceDir);
console.log(`Extracted ${enums.size} enums`);

// Convert Map to JSON-serializable object
const obj: Record<string, string[]> = {};
for (const [key, values] of enums) {
  obj[key] = values;
}

await Bun.write(
  new URL("../src/codegen/enums.json", import.meta.url).pathname,
  JSON.stringify(obj, null, 2),
);
console.log("Written to src/codegen/enums.json");
