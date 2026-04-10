import { mkdir, writeFile, readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const IDENTIFY_KEY = "c0138ffadd90a955c1f0670a56fe348d1d40680b3c89461e09f78ed26785164b";
const BASE = "https://business-api.tiktok.com/gateway/api/doc/client";

export interface DocTreeNode {
  doc_id: string | number;
  title: string;
  status?: boolean;
  child_docs?: DocTreeNode[];
  children?: DocTreeNode[];
  status_map?: Record<string, unknown>;
}

export interface DocContent {
  docId: string;
  title: string;
  content: string;
  category: string;
}

/** Fetch the full doc tree from TikTok. */
export async function fetchDocTree(): Promise<DocTreeNode[]> {
  const url = `${BASE}/platform/tree/get/?language=ENGLISH&identify_key=${IDENTIFY_KEY}&is_need_content=false`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Doc tree fetch failed: ${response.status}`);
  const json = await response.json() as { code: number; data: { children: DocTreeNode[] } };
  if (json.code !== 0) throw new Error(`Doc tree API error: code ${json.code}`);
  return json.data.children ?? [];
}

/** Fetch a single doc page by doc_id. */
export async function fetchDoc(docId: string): Promise<{ title: string; content: string }> {
  const url = `${BASE}/node/get/?language=ENGLISH&identify_key=${IDENTIFY_KEY}&doc_id=${docId}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Doc fetch failed for ${docId}: ${response.status}`);
  const json = await response.json() as { code: number; data: { title: string; content: string; type: string } };
  if (json.code !== 0) throw new Error(`Doc API error for ${docId}: code ${json.code}`);
  return { title: json.data.title, content: json.data.content };
}

/** Categories under "API Reference" that contain Marketing/Ads endpoints. */
const MARKETING_CATEGORIES = new Set([
  "Ads", "Ad Accounts", "Ad Comments", "Ad Comments - Blocked Words",
  "Campaign Management", "Audience Management", "Reporting",
  "Business Center", "Creatives", "Catalog Management", "Ad Measurement",
  "TikTok Store", "TikTok One API", "Tools",
]);

/**
 * "API Reference" category titles that are just section headers, not endpoints.
 * These map to the top-level groupings in the doc tree.
 */
const SECTION_TITLES = new Set([
  "API Reference", "API reference", "Accounts", "Insights", "Comments", "Posts",
  "Ad authorization", "URL properties", "Webhooks",
  "Access token inspector", "Guides", "Overview", "FAQs",
]);

/** Recursively collect all leaf doc_ids from the tree under marketing categories. */
export function collectMarketingDocIds(tree: DocTreeNode[], parentCategory = ""): { docId: string; title: string; category: string }[] {
  const results: { docId: string; title: string; category: string }[] = [];

  for (const node of tree) {
    const title = node.title?.trim() ?? "";
    const category = MARKETING_CATEGORIES.has(title) ? title : parentCategory;

    if (node.children && node.children.length > 0) {
      results.push(...collectMarketingDocIds(node.children, category));
    } else if (category && node.doc_id && !SECTION_TITLES.has(title)) {
      // Leaf node under a marketing category
      results.push({ docId: node.doc_id, title, category });
    }
  }

  return results;
}

/** Scrape all marketing API docs, using cache when available. */
export async function scrapeAllDocs(cacheDir: string, opts?: { forceRefresh?: boolean }): Promise<DocContent[]> {
  await mkdir(cacheDir, { recursive: true });

  // 1. Fetch tree
  console.log("[scraper] Fetching doc tree...");
  const tree = await fetchDocTree();

  // 2. Collect marketing endpoint doc_ids
  const targets = collectMarketingDocIds(tree);
  console.log(`[scraper] Found ${targets.length} marketing API doc pages to fetch`);

  // 3. Fetch each doc (with cache)
  const docs: DocContent[] = [];
  let cached = 0;
  let fetched = 0;

  for (const target of targets) {
    const cachePath = join(cacheDir, `${target.docId}.json`);

    let doc: { title: string; content: string };

    if (!opts?.forceRefresh) {
      try {
        const raw = await readFile(cachePath, "utf-8");
        doc = JSON.parse(raw);
        cached++;
      } catch {
        // Cache miss — fetch from API
        doc = await fetchDoc(target.docId);
        await writeFile(cachePath, JSON.stringify(doc, null, 2), "utf-8");
        fetched++;
        // Rate limiting: 100ms between requests
        await new Promise(r => setTimeout(r, 100));
      }
    } else {
      doc = await fetchDoc(target.docId);
      await writeFile(cachePath, JSON.stringify(doc, null, 2), "utf-8");
      fetched++;
      await new Promise(r => setTimeout(r, 100));
    }

    docs.push({
      docId: target.docId,
      title: doc.title || target.title,
      content: doc.content,
      category: target.category,
    });
  }

  console.log(`[scraper] Done: ${cached} cached, ${fetched} fetched`);
  return docs;
}
