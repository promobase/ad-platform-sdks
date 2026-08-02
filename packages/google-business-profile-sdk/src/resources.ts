import type { GoogleBusinessProfileClient } from "./client.ts";
import type {
  BusinessAccount,
  BusinessLocation,
  DailyMetric,
  DailyMetricTimeSeries,
  GoogleDate,
  LocalPost,
  LocalPostMetrics,
} from "./types.ts";

export function createGoogleBusinessProfileResources(client: GoogleBusinessProfileClient) {
  return {
    accounts: {
      list(opts?: { pageSize?: number; pageToken?: string }) {
        return client.request<{ accounts?: BusinessAccount[]; nextPageToken?: string }>({
          baseUrl: client.bases.accountManagement,
          path: "/v1/accounts",
          query: opts,
        });
      },
    },

    locations: {
      list(
        accountName: string,
        opts?: {
          readMask?: string;
          pageSize?: number;
          pageToken?: string;
          filter?: string;
          orderBy?: string;
        },
      ) {
        return client.request<{ locations?: BusinessLocation[]; nextPageToken?: string }>({
          baseUrl: client.bases.businessInformation,
          path: `/v1/${normalizeAccount(accountName)}/locations`,
          query: {
            readMask:
              opts?.readMask ??
              "name,title,storeCode,languageCode,websiteUri,phoneNumbers,storefrontAddress,metadata,categories,regularHours",
            pageSize: opts?.pageSize,
            pageToken: opts?.pageToken,
            filter: opts?.filter,
            orderBy: opts?.orderBy,
          },
        });
      },
    },

    localPosts: {
      create(locationName: string, post: LocalPost) {
        return client.request<LocalPost>({
          method: "POST",
          baseUrl: client.bases.localPosts,
          path: `/v4/${normalizeLocation(locationName)}/localPosts`,
          body: post,
        });
      },

      get(postName: string) {
        return client.request<LocalPost>({
          baseUrl: client.bases.localPosts,
          path: `/v4/${normalizePost(postName)}`,
        });
      },

      list(locationName: string, opts?: { pageSize?: number; pageToken?: string }) {
        return client.request<{ localPosts?: LocalPost[]; nextPageToken?: string }>({
          baseUrl: client.bases.localPosts,
          path: `/v4/${normalizeLocation(locationName)}/localPosts`,
          query: opts,
        });
      },

      update(postName: string, post: LocalPost, updateMask: string) {
        return client.request<LocalPost>({
          method: "PATCH",
          baseUrl: client.bases.localPosts,
          path: `/v4/${normalizePost(postName)}`,
          query: { updateMask },
          body: post,
        });
      },

      async delete(postName: string): Promise<void> {
        await client.request<void>({
          method: "DELETE",
          baseUrl: client.bases.localPosts,
          path: `/v4/${normalizePost(postName)}`,
        });
      },

      reportInsights(locationName: string, localPostNames: string[]) {
        if (localPostNames.length === 0 || localPostNames.length > 100) {
          throw new Error("Google Business Profile post insights requires 1-100 post names");
        }
        return client.request<{
          name?: string;
          localPostMetrics?: LocalPostMetrics[];
          timeZone?: string;
        }>({
          method: "POST",
          baseUrl: client.bases.localPosts,
          path: `/v4/${normalizeLocation(locationName)}/localPosts:reportInsights`,
          body: {
            localPostNames,
            basicRequest: {
              metricRequests: [
                { metric: "LOCAL_POST_VIEWS_SEARCH" },
                { metric: "LOCAL_POST_ACTIONS_CALL_TO_ACTION" },
              ],
            },
          },
        });
      },
    },

    performance: {
      fetchMultiDailyMetricsTimeSeries(
        locationName: string,
        opts: { dailyMetrics: DailyMetric[]; startDate: GoogleDate; endDate: GoogleDate },
      ) {
        const start = dateQuery("dailyRange.startDate", opts.startDate);
        const end = dateQuery("dailyRange.endDate", opts.endDate);
        return client.request<{ multiDailyMetricTimeSeries?: DailyMetricTimeSeries[] }>({
          baseUrl: client.bases.performance,
          path: `/v1/${normalizeBareLocation(locationName)}:fetchMultiDailyMetricsTimeSeries`,
          query: { dailyMetrics: opts.dailyMetrics, ...start, ...end },
        });
      },
    },
  };
}

function normalizeAccount(value: string): string {
  return value.startsWith("accounts/") ? value : `accounts/${value}`;
}

function normalizeLocation(value: string): string {
  if (value.startsWith("accounts/")) return value;
  throw new Error("locationName must be accounts/{accountId}/locations/{locationId}");
}

function normalizeBareLocation(value: string): string {
  const parts = value.split("/");
  const locationId = parts.at(-1);
  if (!locationId) throw new Error("locationName must include a location ID");
  return `locations/${locationId}`;
}

function normalizePost(value: string): string {
  if (value.startsWith("accounts/")) return value;
  throw new Error(
    "postName must be a full accounts/.../locations/.../localPosts/... resource name",
  );
}

function dateQuery(prefix: string, date: GoogleDate) {
  return {
    [`${prefix}.year`]: date.year,
    [`${prefix}.month`]: date.month,
    [`${prefix}.day`]: date.day,
  };
}
