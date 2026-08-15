// @generated
// fingerprint: sha256:41d7271814a88ca3e53096c5d9edca46010aa9c9ea3238828879e609f4edd23c
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for com.atproto.sync — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { ComAtprotoSyncDefsHostStatus, ComAtprotoSyncListHostsHost, ComAtprotoSyncListReposRepo, ComAtprotoSyncListReposByCollectionRepo, GetHeadResponse, GetHostStatusResponse, GetLatestCommitResponse, GetRepoStatusResponse, ListBlobsResponse, ListHostsResponse, ListReposResponse, ListReposByCollectionResponse } from "../types.ts";
import type { GetBlobParams, GetBlocks2Params, GetCheckoutParams, GetHeadParams, GetHostStatusParams, GetLatestCommitParams, GetRecord2Params, GetRepoParams, GetRepoStatusParams, ListBlobsParams, ListHostsParams, ListReposParams, ListReposByCollectionParams, NotifyOfUpdateParams, RequestCrawlParams } from "../params.ts";

/** com.atproto.sync — 15 endpoints */
export function createSyncClient(api: BlueskyApiClient) {
  return {
    /** Get a blob associated with a given account. Returns the full blob as originally uploaded. Does not require auth; implemented by PDS. */
    async getBlob(params: GetBlobParams): Promise<unknown> {
      const envelope = await api.get<unknown>("/xrpc/com.atproto.sync.getBlob", params);
      return envelope;
    },

    /** Get data blocks from a given repo, by CID. For example, intermediate MST nodes, or records. Does not require auth; implemented by PDS. */
    async getBlocks2(params: GetBlocks2Params): Promise<unknown> {
      const envelope = await api.get<unknown>("/xrpc/com.atproto.sync.getBlocks", params);
      return envelope;
    },

    /** DEPRECATED - please use com.atproto.sync.getRepo instead */
    async getCheckout(params: GetCheckoutParams): Promise<unknown> {
      const envelope = await api.get<unknown>("/xrpc/com.atproto.sync.getCheckout", params);
      return envelope;
    },

    /** DEPRECATED - please use com.atproto.sync.getLatestCommit instead */
    async getHead(params: GetHeadParams): Promise<GetHeadResponse> {
      const envelope = await api.get<GetHeadResponse>("/xrpc/com.atproto.sync.getHead", params);
      return envelope;
    },

    /** Returns information about a specified upstream host, as consumed by the server. Implemented by relays. */
    async getHostStatus(params: GetHostStatusParams): Promise<GetHostStatusResponse> {
      const envelope = await api.get<GetHostStatusResponse>("/xrpc/com.atproto.sync.getHostStatus", params);
      return envelope;
    },

    /** Get the current commit CID & revision of the specified repo. Does not require auth. */
    async getLatestCommit(params: GetLatestCommitParams): Promise<GetLatestCommitResponse> {
      const envelope = await api.get<GetLatestCommitResponse>("/xrpc/com.atproto.sync.getLatestCommit", params);
      return envelope;
    },

    /** Get data blocks needed to prove the existence or non-existence of record in the current version of repo. Does not require auth. */
    async getRecord2(params: GetRecord2Params): Promise<unknown> {
      const envelope = await api.get<unknown>("/xrpc/com.atproto.sync.getRecord", params);
      return envelope;
    },

    /** Download a repository export as CAR file. Optionally only a 'diff' since a previous revision. Does not require auth; implemented by PDS. */
    async getRepo(params: GetRepoParams): Promise<unknown> {
      const envelope = await api.get<unknown>("/xrpc/com.atproto.sync.getRepo", params);
      return envelope;
    },

    /** Get the hosting status for a repository, on this server. Expected to be implemented by PDS and Relay. */
    async getRepoStatus(params: GetRepoStatusParams): Promise<GetRepoStatusResponse> {
      const envelope = await api.get<GetRepoStatusResponse>("/xrpc/com.atproto.sync.getRepoStatus", params);
      return envelope;
    },

    /** List blob CIDs for an account, since some repo revision. Does not require auth; implemented by PDS. */
    async listBlobs(params: ListBlobsParams): Promise<ListBlobsResponse> {
      const envelope = await api.get<ListBlobsResponse>("/xrpc/com.atproto.sync.listBlobs", params);
      return envelope;
    },

    /** Enumerates upstream hosts (eg, PDS or relay instances) that this service consumes from. Implemented by relays. */
    async listHosts(params: ListHostsParams): Promise<ListHostsResponse> {
      const envelope = await api.get<ListHostsResponse>("/xrpc/com.atproto.sync.listHosts", params);
      return envelope;
    },

    /** Enumerates all the DID, rev, and commit CID for all repos hosted by this service. Does not require auth; implemented by PDS and Relay. */
    async listRepos(params: ListReposParams): Promise<ListReposResponse> {
      const envelope = await api.get<ListReposResponse>("/xrpc/com.atproto.sync.listRepos", params);
      return envelope;
    },

    /** Enumerates all the DIDs which have records with the given collection NSID. */
    async listReposByCollection(params: ListReposByCollectionParams): Promise<ListReposByCollectionResponse> {
      const envelope = await api.get<ListReposByCollectionResponse>("/xrpc/com.atproto.sync.listReposByCollection", params);
      return envelope;
    },

    /** Notify a crawling service of a recent update, and that crawling should resume. Intended use is after a gap between repo stream events caused the crawling service to disconnect. Does not require auth; implemented by Relay. DEPRECATED: just use com.atproto.sync.requestCrawl */
    async notifyOfUpdate(params: NotifyOfUpdateParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.sync.notifyOfUpdate", params, undefined);
      return envelope;
    },

    /** Request a service to persistently crawl hosted repos. Expected use is new PDS instances declaring their existence to Relays. Does not require auth. */
    async requestCrawl(params: RequestCrawlParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/com.atproto.sync.requestCrawl", params, undefined);
      return envelope;
    },
  };
}
