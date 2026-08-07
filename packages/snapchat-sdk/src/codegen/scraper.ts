import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export interface DocContent {
  docId: string;
  title: string;
  category: string;
  content: string;
}

/**
 * All Marketing API documentation routes on developers.snap.com.
 *
 * Extracted from the docs site's client-side route table (see `main.js`).
 * The docs are statically rendered, so each route returns full HTML.
 */
export const DOC_ROUTES = [
  "Ads-API/ad-accounts",
  "Ads-API/ad-squad-outcomes",
  "Ads-API/ad-squad-ui-render-data",
  "Ads-API/ad-squads",
  "Ads-API/ads",
  "Ads-API/announcements",
  "Ads-API/api-patterns",
  "Ads-API/audience-creation/ad-engagement",
  "Ads-API/audience-creation/customer-lists",
  "Ads-API/audience-creation/lookalikes",
  "Ads-API/audience-creation/mobile-app-events",
  "Ads-API/audience-creation/profile-engagement",
  "Ads-API/audience-creation/website-events",
  "Ads-API/audience-insights",
  "Ads-API/audience-size",
  "Ads-API/audit-logs",
  "Ads-API/authentication",
  "Ads-API/bid-estimate",
  "Ads-API/billing-centers",
  "Ads-API/breaking-changes-log",
  "Ads-API/campaigns",
  "Ads-API/changelog",
  "Ads-API/claim-media",
  "Ads-API/commercials",
  "Ads-API/creative-elements",
  "Ads-API/creatives",
  "Ads-API/custom-conversions",
  "Ads-API/delivery-status",
  "Ads-API/dynamic-collections-ads",
  "Ads-API/dynamic-product-ads",
  "Ads-API/dynamic-product-ads-video",
  "Ads-API/dynamic-story-ads",
  "Ads-API/errors",
  "Ads-API/event-details",
  "Ads-API/example-targeting-specs",
  "Ads-API/faq",
  "Ads-API/funding-sources",
  "Ads-API/interaction-zones",
  "Ads-API/introduction",
  "Ads-API/invoices",
  "Ads-API/lead-generation-ads",
  "Ads-API/lenses",
  "Ads-API/measurement",
  "Ads-API/media",
  "Ads-API/members",
  "Ads-API/MMM-API/introduction",
  "Ads-API/MMM-API/onboarding",
  "Ads-API/MMM-API/report-schema",
  "Ads-API/MMM-API/request-and-download-reports",
  "Ads-API/MMM-API/troubleshooting",
  "Ads-API/monetary-values",
  "Ads-API/newsletter",
  "Ads-API/offer-disclaimers",
  "Ads-API/organizations",
  "Ads-API/overview",
  "Ads-API/quick-start",
  "Ads-API/rate-limits",
  "Ads-API/reach-and-frequency",
  "Ads-API/roles",
  "Ads-API/signal-readiness-api",
  "Ads-API/snap-app-id",
  "Ads-API/snap-pixel",
  "Ads-API/targeting",
  "Ads-API/transactions",
  "Ads-API/user",
  "Ads-API/version",
  "Ads-Gallery-Api/Introduction",
  "Ads-Gallery-Api/using-the-api",
  "Ads-MCP/connect-an-agent",
  "Ads-MCP/Introduction",
  "Conversions-API",
  "Conversions-API/BestPractices",
  "Conversions-API/Deduplication",
  "Conversions-API/GetStarted",
  "Conversions-API/Introduction",
  "Conversions-API/JavaBusinessSDK",
  "Conversions-API/MigrationGuide",
  "Conversions-API/OfflineEvents",
  "Conversions-API/Parameters",
  "Conversions-API/UsingTheAPI",
  "Conversions-API/VerifySetUp",
  "Creator-Ads/AdCodes",
  "Creator-Ads/AdPartnerships",
  "Creator-Ads/AudienceTargeting",
  "Creator-Ads/BrandPartnerships",
  "Creator-Ads/ChooseYourWorkflow",
  "Creator-Ads/PartnershipSetup",
  "Creator-Ads/PurposeOfThisGuide",
  "Creator-Ads/TechnicalReference",
  "Creator-Ads/Troubleshooting",
  "Public-Profile-API/Announcements",
  "Public-Profile-API/CreatorDiscovery",
  "Public-Profile-API/FAQ",
  "Public-Profile-API/GetStarted",
  "Public-Profile-API/Introduction",
  "Public-Profile-API/Messaging",
  "Public-Profile-API/Metrics",
  "Public-Profile-API/PartnershipRoles",
  "Public-Profile-API/ProfileAssetManagement",
  "Public-Profile-API/Profiles",
  "Public-Profile-API/UserJourney",
] as const;

const DOCS_BASE = "https://developers.snap.com/marketing-api";

function categoryFor(route: string): string {
  if (route.startsWith("Ads-API/")) return "Ads API";
  if (route.startsWith("Conversions-API")) return "Conversions API";
  if (route.startsWith("Public-Profile-API")) return "Public Profile API";
  if (route.startsWith("Creator-Ads")) return "Creator Ads";
  if (route.startsWith("Ads-Gallery-Api")) return "Ads Gallery API";
  if (route.startsWith("Ads-MCP")) return "Ads MCP";
  return "Marketing API";
}

function docIdFor(route: string): string {
  return route.replaceAll("/", "-");
}

/** Scrape all Marketing API docs, using a local cache unless --refresh. */
export async function scrapeAllDocs(
  cacheDir: string,
  opts: { forceRefresh?: boolean; fetch?: typeof fetch } = {},
): Promise<DocContent[]> {
  mkdirSync(cacheDir, { recursive: true });
  const fetchImpl = opts.fetch ?? fetch;

  const docs: DocContent[] = [];
  for (const route of DOC_ROUTES) {
    const docId = docIdFor(route);
    const cachePath = join(cacheDir, `${docId}.html`);
    let html: string | undefined;
    if (!opts.forceRefresh && existsSync(cachePath)) {
      html = readFileSync(cachePath, "utf8");
    } else {
      const response = await fetchImpl(`${DOCS_BASE}/${route}`);
      if (!response.ok) {
        console.warn(`[codegen] Skipping ${route}: HTTP ${response.status}`);
        continue;
      }
      html = await response.text();
      writeFileSync(cachePath, html, "utf8");
    }
    docs.push({
      docId,
      title: route.split("/").pop() ?? docId,
      category: categoryFor(route),
      content: html,
    });
  }
  return docs;
}

export function pageTitle(doc: DocContent): string {
  const match = doc.content.match(/<title>([^<|]+)\|/);
  return (match?.[1] ?? doc.title).trim();
}
