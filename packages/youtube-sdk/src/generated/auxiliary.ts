// @generated
// fingerprint: sha256:8dff4ac9f048acee3e302f8d713b22eecd077ce0b174502fc36447a2026e7ae1
// DO NOT EDIT: generated file; changes will be overwritten.
// This file was generated from the YouTube Analytics and Reporting discovery documents.
// Do not edit by hand.

import type { YouTubeClient, YouTubeRequestOptions } from "../client.ts";
import type * as YouTubeTypes from "./types.ts";

export function createYouTubeAuxiliaryResources(client: YouTubeClient) {
  return {
    analytics: {
      groupItemsDelete(params: YouTubeTypes.YouTubeAnalyticsGroupItemsDeleteParams = {}, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.AnalyticsEmptyResponse> {
        return client.request<YouTubeTypes.AnalyticsEmptyResponse>({
          method: "DELETE",
          path: "https://youtubeanalytics.googleapis.com/v2/groupItems",
          params,
          opts,
        });
      },
      groupItemsInsert(params: YouTubeTypes.YouTubeAnalyticsGroupItemsInsertParams, body: YouTubeTypes.AnalyticsGroupItem, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.AnalyticsGroupItem> {
        return client.request<YouTubeTypes.AnalyticsGroupItem>({
          method: "POST",
          path: "https://youtubeanalytics.googleapis.com/v2/groupItems",
          params,
          body,
          opts,
        });
      },
      groupItemsList(params: YouTubeTypes.YouTubeAnalyticsGroupItemsListParams = {}, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.AnalyticsListGroupItemsResponse> {
        return client.request<YouTubeTypes.AnalyticsListGroupItemsResponse>({
          method: "GET",
          path: "https://youtubeanalytics.googleapis.com/v2/groupItems",
          params,
          opts,
        });
      },
      groupsDelete(params: YouTubeTypes.YouTubeAnalyticsGroupsDeleteParams = {}, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.AnalyticsEmptyResponse> {
        return client.request<YouTubeTypes.AnalyticsEmptyResponse>({
          method: "DELETE",
          path: "https://youtubeanalytics.googleapis.com/v2/groups",
          params,
          opts,
        });
      },
      groupsInsert(params: YouTubeTypes.YouTubeAnalyticsGroupsInsertParams, body: YouTubeTypes.AnalyticsGroup, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.AnalyticsGroup> {
        return client.request<YouTubeTypes.AnalyticsGroup>({
          method: "POST",
          path: "https://youtubeanalytics.googleapis.com/v2/groups",
          params,
          body,
          opts,
        });
      },
      groupsList(params: YouTubeTypes.YouTubeAnalyticsGroupsListParams = {}, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.AnalyticsListGroupsResponse> {
        return client.request<YouTubeTypes.AnalyticsListGroupsResponse>({
          method: "GET",
          path: "https://youtubeanalytics.googleapis.com/v2/groups",
          params,
          opts,
        });
      },
      groupsUpdate(params: YouTubeTypes.YouTubeAnalyticsGroupsUpdateParams, body: YouTubeTypes.AnalyticsGroup, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.AnalyticsGroup> {
        return client.request<YouTubeTypes.AnalyticsGroup>({
          method: "PUT",
          path: "https://youtubeanalytics.googleapis.com/v2/groups",
          params,
          body,
          opts,
        });
      },
      reportsQuery(params: YouTubeTypes.YouTubeAnalyticsReportsQueryParams = {}, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.AnalyticsQueryResponse> {
        return client.request<YouTubeTypes.AnalyticsQueryResponse>({
          method: "GET",
          path: "https://youtubeanalytics.googleapis.com/v2/reports",
          params,
          opts,
        });
      },
    },
    reporting: {
      jobsCreate(params: YouTubeTypes.YouTubeReportingJobsCreateParams, body: YouTubeTypes.ReportingJob, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ReportingJob> {
        return client.request<YouTubeTypes.ReportingJob>({
          method: "POST",
          path: "https://youtubereporting.googleapis.com/v1/jobs",
          params,
          body,
          opts,
        });
      },
      jobsDelete(params: YouTubeTypes.YouTubeReportingJobsDeleteParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ReportingEmpty> {
        return client.request<YouTubeTypes.ReportingEmpty>({
          method: "DELETE",
          path: "https://youtubereporting.googleapis.com/v1/jobs/{jobId}",
          params,
          opts,
        });
      },
      jobsGet(params: YouTubeTypes.YouTubeReportingJobsGetParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ReportingJob> {
        return client.request<YouTubeTypes.ReportingJob>({
          method: "GET",
          path: "https://youtubereporting.googleapis.com/v1/jobs/{jobId}",
          params,
          opts,
        });
      },
      jobsList(params: YouTubeTypes.YouTubeReportingJobsListParams = {}, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ReportingListJobsResponse> {
        return client.request<YouTubeTypes.ReportingListJobsResponse>({
          method: "GET",
          path: "https://youtubereporting.googleapis.com/v1/jobs",
          params,
          opts,
        });
      },
      jobsReportsGet(params: YouTubeTypes.YouTubeReportingJobsReportsGetParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ReportingReport> {
        return client.request<YouTubeTypes.ReportingReport>({
          method: "GET",
          path: "https://youtubereporting.googleapis.com/v1/jobs/{jobId}/reports/{reportId}",
          params,
          opts,
        });
      },
      jobsReportsList(params: YouTubeTypes.YouTubeReportingJobsReportsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ReportingListReportsResponse> {
        return client.request<YouTubeTypes.ReportingListReportsResponse>({
          method: "GET",
          path: "https://youtubereporting.googleapis.com/v1/jobs/{jobId}/reports",
          params,
          opts,
        });
      },
      mediaDownload(params: YouTubeTypes.YouTubeReportingMediaDownloadParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ReportingGdataMedia> {
        return client.request<YouTubeTypes.ReportingGdataMedia>({
          method: "GET",
          path: "https://youtubereporting.googleapis.com/v1/media/{+resourceName}",
          params,
          opts,
        });
      },
      reportTypesList(params: YouTubeTypes.YouTubeReportingReportTypesListParams = {}, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ReportingListReportTypesResponse> {
        return client.request<YouTubeTypes.ReportingListReportTypesResponse>({
          method: "GET",
          path: "https://youtubereporting.googleapis.com/v1/reportTypes",
          params,
          opts,
        });
      },
    },
  };
}

