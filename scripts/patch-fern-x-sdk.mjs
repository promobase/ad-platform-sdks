import { readFileSync, writeFileSync } from "node:fs";

const headersPath = new URL(
  "../packages/x-sdk/src/generated/core/fetcher/Headers.ts",
  import.meta.url,
);
const source = readFileSync(headersPath, "utf8");
let patched = source;

if (!patched.includes("toJSON(): Record<string, string>")) {
  const headersMethods = `        getSetCookie(): string[] {
            return this.headers.get("set-cookie") || [];
        }
`;
  if (!patched.includes(headersMethods)) {
    throw new Error("Fern Headers patch failed: getSetCookie anchor not found");
  }
  patched = patched.replace(
    headersMethods,
    `        getSetCookie(): string[] {
            return this.headers.get("set-cookie") || [];
        }

        get count(): number {
            return this.headers.size;
        }

        getAll(name: string): string[] {
            return this.headers.get(name.toLowerCase()) || [];
        }

        toJSON(): Record<string, string> {
            const json: Record<string, string> = {};
            this.forEach((value, key) => {
                json[key] = value;
            });
            return json;
        }
`,
  );
}

if (!patched.includes("as unknown as typeof globalThis.Headers")) {
  const classStart = "Headers = class Headers implements Headers {";
  const classEnd = "\n    };\n}\n\nexport { Headers };";
  if (!patched.includes(classStart) || !patched.includes(classEnd)) {
    throw new Error("Fern Headers patch failed: fallback class anchors not found");
  }
  patched = patched
    .replace(classStart, "Headers = class Headers {")
    .replace(
      classEnd,
      "\n    } as unknown as typeof globalThis.Headers;\n}\n\nexport { Headers };",
    );
}

if (patched !== source) writeFileSync(headersPath, patched);
