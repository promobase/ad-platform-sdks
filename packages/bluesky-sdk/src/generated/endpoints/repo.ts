// Auto-generated client for com.atproto.repo — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { ComAtprotoRepoDefsCommitMeta, ComAtprotoRepoApplyWritesCreateResult, ComAtprotoRepoApplyWritesUpdateResult, ComAtprotoRepoApplyWritesDeleteResult, ComAtprotoRepoApplyWritesCreate, ComAtprotoRepoApplyWritesUpdate, ComAtprotoRepoApplyWritesDelete, ComAtprotoRepoListMissingBlobsRecordBlob, ComAtprotoRepoListRecordsRecord, ApplyWritesResponse, CreateRecordResponse, DeleteRecordResponse, DescribeRepoResponse, GetRecordResponse, ListMissingBlobsResponse, ListRecordsResponse, PutRecordResponse, UploadBlobResponse } from "../types.ts";
import type { ApplyWritesParams, CreateRecordParams, DeleteRecordParams, DescribeRepoParams, GetRecordParams, ImportRepoParams, ListMissingBlobsParams, ListRecordsParams, PutRecordParams, UploadBlobParams } from "../params.ts";

/** com.atproto.repo — 10 endpoints */
export function createRepoClient(api: BlueskyApiClient) {
  return {
    /** Apply a batch transaction of repository creates, updates, and deletes. Requires auth, implemented by PDS. */
    async applyWrites(params: ApplyWritesParams): Promise<ApplyWritesResponse> {
      const envelope = await api.post<ApplyWritesResponse>("/xrpc/com.atproto.repo.applyWrites", params, undefined);
      return envelope;
    },

    /** Create a single new repository record. Requires auth, implemented by PDS. */
    async createRecord(params: CreateRecordParams): Promise<CreateRecordResponse> {
      const envelope = await api.post<CreateRecordResponse>("/xrpc/com.atproto.repo.createRecord", params, undefined);
      return envelope;
    },

    /** Delete a repository record, or ensure it doesn't exist. Requires auth, implemented by PDS. */
    async deleteRecord(params: DeleteRecordParams): Promise<DeleteRecordResponse> {
      const envelope = await api.post<DeleteRecordResponse>("/xrpc/com.atproto.repo.deleteRecord", params, undefined);
      return envelope;
    },

    /** Get information about an account and repository, including the list of collections. Does not require auth. */
    async describeRepo(params: DescribeRepoParams): Promise<DescribeRepoResponse> {
      const envelope = await api.get<DescribeRepoResponse>("/xrpc/com.atproto.repo.describeRepo", params);
      return envelope;
    },

    /** Get a single record from a repository. Does not require auth. */
    async getRecord(params: GetRecordParams): Promise<GetRecordResponse> {
      const envelope = await api.get<GetRecordResponse>("/xrpc/com.atproto.repo.getRecord", params);
      return envelope;
    },

    /** Import a repo in the form of a CAR file. Requires Content-Length HTTP header to be set. */
    async importRepo(params: ImportRepoParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.repo.importRepo", params, undefined);
      return envelope;
    },

    /** Returns a list of missing blobs for the requesting account. Intended to be used in the account migration flow. */
    async listMissingBlobs(params: ListMissingBlobsParams): Promise<ListMissingBlobsResponse> {
      const envelope = await api.get<ListMissingBlobsResponse>("/xrpc/com.atproto.repo.listMissingBlobs", params);
      return envelope;
    },

    /** List a range of records in a repository, matching a specific collection. Does not require auth. */
    async listRecords(params: ListRecordsParams): Promise<ListRecordsResponse> {
      const envelope = await api.get<ListRecordsResponse>("/xrpc/com.atproto.repo.listRecords", params);
      return envelope;
    },

    /** Write a repository record, creating or updating it as needed. Requires auth, implemented by PDS. */
    async putRecord(params: PutRecordParams): Promise<PutRecordResponse> {
      const envelope = await api.post<PutRecordResponse>("/xrpc/com.atproto.repo.putRecord", params, undefined);
      return envelope;
    },

    /** Upload a new blob, to be referenced from a repository record. The blob will be deleted if it is not referenced within a time window (eg, minutes). Blob restrictions (mimetype, size, etc) are enforced when the reference is created. Requires auth, implemented by PDS. */
    async uploadBlob(params: UploadBlobParams): Promise<UploadBlobResponse> {
      const envelope = await api.post<UploadBlobResponse>("/xrpc/com.atproto.repo.uploadBlob", params, undefined);
      return envelope;
    },
  };
}
