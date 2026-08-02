import type { CreateYouTubeVideoUploadRequest, CreateYouTubeVideoUploadResponse, RemoveYouTubeVideoUploadRequest, RemoveYouTubeVideoUploadResponse, UpdateYouTubeVideoUploadRequest, UpdateYouTubeVideoUploadResponse } from "../index.ts";
import type { HttpClient } from "@openpromo/sdk-runtime";

// Generated from google.ads.googleads.v25.services.YouTubeVideoUploadService. Do not edit by hand.
export const youTubeVideoUploadService = {
  createYouTubeVideoUpload(client: HttpClient, customerId: string, body: Omit<CreateYouTubeVideoUploadRequest, "customerId">): Promise<CreateYouTubeVideoUploadResponse> {
    return client.post<CreateYouTubeVideoUploadResponse>(`/v25/customers/${customerId}/youTubeVideoUploads:create`, body);
  },

  updateYouTubeVideoUpload(client: HttpClient, customerId: string, body: Omit<UpdateYouTubeVideoUploadRequest, "customerId">): Promise<UpdateYouTubeVideoUploadResponse> {
    return client.post<UpdateYouTubeVideoUploadResponse>(`/v25/customers/${customerId}/youTubeVideoUploads:update`, body);
  },

  removeYouTubeVideoUpload(client: HttpClient, customerId: string, body: Omit<RemoveYouTubeVideoUploadRequest, "customerId">): Promise<RemoveYouTubeVideoUploadResponse> {
    return client.post<RemoveYouTubeVideoUploadResponse>(`/v25/customers/${customerId}/youTubeVideoUploads:remove`, body);
  }
};
