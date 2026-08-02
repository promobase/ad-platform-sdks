import { expect, test } from "bun:test";

import { parseAllDocs, parseDoc } from "../src/codegen/parser.ts";
import type { DocContent } from "../src/codegen/scraper.ts";

function doc(content: string): DocContent {
  return { docId: "fixture", title: "Fixture", category: "Verification", content };
}

test("parseDoc accepts angle-bracket endpoint URLs", () => {
  const parsed = parseDoc(
    doc(`
**Endpoint** <https://business-api.tiktok.com/open_api/v1.3/rule/create/>
**Method** POST
`),
  );

  expect(parsed?.url).toBe("https://business-api.tiktok.com/open_api/v1.3/rule/create/");
  expect(parsed?.method).toBe("POST");
});

test("parseDoc accepts endpoint labels without spacing and regional endpoint lists", () => {
  const noSpacing = parseDoc(
    doc(`
**Endpoint**https://business-api.tiktok.com/open_api/v1.3/bc/asset/member/get/
**Method** GET
`),
  );
  const regional = parseDoc(
    doc(`
**Endpoint**
- **For leads data in EEA/CH/UK**: \`https://business-api.tiktok.com/open_api/v1.3/page/lead/task/\`
**Method** POST
`),
  );

  expect(noSpacing?.method).toBe("GET");
  expect(regional?.url).toBe("https://business-api.tiktok.com/open_api/v1.3/page/lead/task/");
});

test("parseDoc infers a missing method from the official curl example", () => {
  const parsed = parseDoc(
    doc(`
**Endpoint** https://business-api.tiktok.com/open_api/v1.3/account/verification/upload/
curl --location --request POST 'https://business-api.tiktok.com/open_api/v1.3/account/verification/upload/'
`),
  );

  expect(parsed?.method).toBe("POST");
});

test("parseAllDocs fails instead of silently dropping endpoint-like docs", () => {
  expect(() =>
    parseAllDocs([doc("**Endpoint** https://business-api.tiktok.com/open_api/v1.3/broken/")]),
  ).toThrow("Failed to parse 1 endpoint-like docs");
});
