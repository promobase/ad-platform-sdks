import type { LinkedInClient } from "./client.ts";
import type { LinkedInUrn } from "./types.ts";

export interface LinkedInShareStatistics {
  clickCount?: number;
  commentCount?: number;
  engagement?: number;
  impressionCount?: number;
  likeCount?: number;
  shareCount?: number;
  uniqueImpressionsCount?: number;
}

export interface LinkedInOrganizationShareStatistic {
  organizationalEntity?: LinkedInUrn;
  share?: LinkedInUrn;
  ugcPost?: LinkedInUrn;
  totalShareStatistics?: LinkedInShareStatistics;
}

export interface LinkedInOrganizationShareStatisticsResponse {
  elements?: LinkedInOrganizationShareStatistic[];
  paging?: {
    count?: number;
    start?: number;
    links?: Array<Record<string, unknown>>;
  };
}

export interface LinkedInOrganizationShareStatisticsParams {
  organizationalEntity: LinkedInUrn;
  /** Lifetime statistics for specific share URNs. */
  shares?: LinkedInUrn[];
  /** Lifetime statistics for specific UGC post URNs. */
  ugcPosts?: LinkedInUrn[];
  /** Time-bounded organization totals. Cannot be combined with shares or ugcPosts. */
  timeIntervals?: {
    timeGranularityType: "DAY" | "MONTH";
    timeRange?: { start?: number; end?: number };
  };
}

export type LinkedInMemberPostMetric =
  | "IMPRESSION"
  | "MEMBERS_REACHED"
  | "RESHARE"
  | "REACTION"
  | "COMMENT"
  | "POST_SAVE"
  | "POST_SEND"
  | "LINK_CLICKS"
  | "PREMIUM_CTA_CLICKS"
  | "FOLLOWER_GAINED_FROM_CONTENT"
  | "PROFILE_VIEW_FROM_CONTENT";

export interface LinkedInDate {
  year: number;
  month: number;
  day: number;
}

interface LinkedInMemberPostAnalyticsBaseParams {
  queryType: LinkedInMemberPostMetric;
  aggregation?: "DAILY" | "TOTAL";
  dateRange?: { start?: LinkedInDate; end?: LinkedInDate };
}

export type LinkedInMemberPostAnalyticsParams = LinkedInMemberPostAnalyticsBaseParams &
  ({ finder?: "entity"; entity: LinkedInUrn } | { finder: "me"; entity?: never });

export interface LinkedInMemberPostAnalyticsPoint {
  count: number;
  metricType: LinkedInMemberPostMetric;
  targetEntity?: { share: LinkedInUrn } | { ugc: LinkedInUrn };
  dateRange?: { start?: LinkedInDate; end?: LinkedInDate };
}

export interface LinkedInMemberPostAnalyticsResponse {
  elements?: LinkedInMemberPostAnalyticsPoint[];
  paging?: {
    count?: number;
    start?: number;
    links?: Array<Record<string, unknown>>;
  };
}

/** Protocol-level wrappers for LinkedIn's documented post analytics resources. */
export function createAnalytics(client: LinkedInClient) {
  return {
    async getOrganizationShareStatistics(
      params: LinkedInOrganizationShareStatisticsParams,
    ): Promise<LinkedInOrganizationShareStatisticsResponse> {
      const query: Record<string, string | undefined> = {
        q: "organizationalEntity",
        organizationalEntity: params.organizationalEntity,
        shares: params.shares?.length ? restliList(params.shares) : undefined,
        timeIntervals: params.timeIntervals ? restliTimeIntervals(params.timeIntervals) : undefined,
      };
      params.ugcPosts?.forEach((urn, index) => {
        query[`ugcPosts[${index}]`] = urn;
      });

      const response = await client.request<LinkedInOrganizationShareStatisticsResponse>(
        "/organizationalEntityShareStatistics",
        { query },
      );
      return response.data;
    },

    async getMemberPostAnalytics(
      params: LinkedInMemberPostAnalyticsParams,
    ): Promise<LinkedInMemberPostAnalyticsResponse> {
      const response = await client.request<LinkedInMemberPostAnalyticsResponse>(
        "/memberCreatorPostAnalytics",
        {
          query: {
            q: params.finder ?? "entity",
            entity: params.entity ? restliMemberEntity(params.entity) : undefined,
            queryType: params.queryType,
            aggregation: params.aggregation ?? "TOTAL",
            dateRange: params.dateRange ? restliDateRange(params.dateRange) : undefined,
          },
        },
      );
      return response.data;
    },
  };
}

function restliList(values: LinkedInUrn[]): string {
  return `List(${values.join(",")})`;
}

function restliDateRange(range: { start?: LinkedInDate; end?: LinkedInDate }): string {
  const values = [
    range.start === undefined ? undefined : `start:${restliDate(range.start)}`,
    range.end === undefined ? undefined : `end:${restliDate(range.end)}`,
  ].filter((value): value is string => value !== undefined);
  return `(${values.join(",")})`;
}

function restliDate(date: LinkedInDate): string {
  return `(day:${date.day},month:${date.month},year:${date.year})`;
}

function restliMemberEntity(entity: LinkedInUrn): string {
  if (entity.includes(":ugcPost:")) return `(ugc:${entity})`;
  if (entity.includes(":share:")) return `(share:${entity})`;
  return entity;
}

function restliTimeIntervals(
  intervals: NonNullable<LinkedInOrganizationShareStatisticsParams["timeIntervals"]>,
): string {
  const range = intervals.timeRange;
  const rangeParts = [
    range?.start === undefined ? undefined : `start:${range.start}`,
    range?.end === undefined ? undefined : `end:${range.end}`,
  ].filter((value): value is string => value !== undefined);
  const timeRange = rangeParts.length > 0 ? `timeRange:(${rangeParts.join(",")}),` : "";
  return `(${timeRange}timeGranularityType:${intervals.timeGranularityType})`;
}
