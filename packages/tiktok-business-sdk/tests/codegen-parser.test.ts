import { expect, test } from "bun:test";

import { parseAllDocs, parseDoc } from "../src/codegen/parser.ts";
import { collectMarketingDocIds, type DocContent } from "../src/codegen/scraper.ts";

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

test("parseDoc accepts spaced xtable fences used by Accounts documentation", () => {
  const parsed = parseDoc(
    doc(`
## Request
**Endpoint** https://business-api.tiktok.com/open_api/v1.3/business/video/list/
**Method** GET
**Parameters**
\`\`\` xtable
|Field|Data Type|Description|
|---|---|---|
|business_id {Required}|string|Business account ID|
|fields|string[]|Requested fields|
\`\`\`
## Response
**Body**
\`\`\` xtable
|Field|Type|Description|
|---|---|---|
|code|integer|Response code|
|message|string|Response message|
|request_id|string|Request ID|
|data|object|Returned data|
#|videos|object[]|Post data|
##|item_id|string|Post ID|
##|video_views|number|Views|
\`\`\`
`),
  );

  expect(parsed?.requestParams.map((field) => field.name)).toEqual(["business_id", "fields"]);
  expect(parsed?.responseFields[0]).toMatchObject({
    name: "videos",
    children: [{ name: "item_id" }, { name: "video_views" }],
  });
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

test("collectMarketingDocIds includes Accounts endpoints even when handwritten clients exist", () => {
  const targets = collectMarketingDocIds([
    {
      doc_id: "api",
      title: "API Reference",
      child_docs: [
        {
          doc_id: "accounts",
          title: "Accounts",
          child_docs: [{ doc_id: "post-data", title: "Get post data" }],
        },
      ],
    },
  ]);

  expect(targets).toEqual([{ docId: "post-data", title: "Get post data", category: "Accounts" }]);
});

test("parseDoc does not infer enums from unrelated uppercase values in prose", () => {
  const parsed = parseDoc(
    doc(`
## Request
**Endpoint** https://business-api.tiktok.com/open_api/v1.3/report/integrated/get/
**Method** GET
**Parameters**
\`\`\`xtable
|Field|Data Type|Description|
|---|---|---|
|advertiser_id|string|Required for report types \`BASIC\`, \`AUDIENCE\`, or \`CATALOG\`.|
|report_type {Required}|string|Enum values: \`BASIC\`, \`AUDIENCE\`. When \`service_type\` is \`AUCTION\`, both are supported.|
|metrics|string[]|Metrics to query. Defaults vary for \`BASIC\` and \`AUDIENCE\`.|
\`\`\`
## Response
\`\`\`xtable
|Field|Data Type|Description|
|---|---|---|
|code|number|Response code|
|message|string|Response message|
|request_id|string|Request ID|
|data|object|Returned data|
#|list|object[]|Rows|
##|metrics|object|Metric values|
\`\`\`
`),
  );

  expect(parsed?.requestParams[0]?.enumValues).toBeUndefined();
  expect(parsed?.requestParams[1]?.enumValues).toEqual(["BASIC", "AUDIENCE"]);
  expect(parsed?.requestParams[2]?.enumValues).toBeUndefined();
  expect(parsed?.responseFields[0]?.name).toBe("list");
});

test("parseDoc prefers a response body table over a response header table", () => {
  const parsed = parseDoc(
    doc(`
## Request
**Endpoint** https://business-api.tiktok.com/open_api/v1.3/report/get/
**Method** GET
**Parameters**
\`\`\`xtable
|Field|Data Type|Description|
|---|---|---|
|advertiser_id {Required}|string|Advertiser ID|
\`\`\`
## Response
**Response Header**
\`\`\`xtable
|Field|Data Type|Description|
|---|---|---|
|X-Tt-Ads-Throttle|string|Throttle warning|
\`\`\`
**Response Parameters**
\`\`\`xtable
|Field|Data Type|Description|
|---|---|---|
|code|number|Response code|
|message|string|Response message|
|request_id|string|Request ID|
|data|object|Returned data|
#|list|object[]|Rows|
\`\`\`
`),
  );

  expect(parsed?.responseFields.map((field) => field.name)).toEqual(["list"]);
});
