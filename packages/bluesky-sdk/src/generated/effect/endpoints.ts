// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@mosaic/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

export const bluesky_server_activateAccount = defineEndpointDescriptor({
  id: "bluesky.server.activateAccount",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.activateAccount",
  summary: "Activates a currently deactivated account. Used to finalize account migration after the account's repo is imported and identity is setup.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.ActivateAccountResponse,
});

export const bluesky_temp_addReservedHandle = defineEndpointDescriptor({
  id: "bluesky.temp.addReservedHandle",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.temp.addReservedHandle",
  summary: "Add a handle to the set of reserved handles.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.temp.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"handle","wireName":"handle","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    handle: Schema.String,
  }),
  outputSchema: Models.AddReservedHandleResponse,
});

export const bluesky_repo_applyWrites = defineEndpointDescriptor({
  id: "bluesky.repo.applyWrites",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.repo.applyWrites",
  summary: "Apply a batch transaction of repository creates, updates, and deletes. Requires auth, implemented by PDS.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.repo.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"repo","wireName":"repo","location":"body","required":true,"nullable":false},
    {"name":"validate","wireName":"validate","location":"body","required":false,"nullable":false},
    {"name":"writes","wireName":"writes","location":"body","required":true,"nullable":false},
    {"name":"swapCommit","wireName":"swapCommit","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    repo: Schema.String,
    validate: Schema.optional(Schema.Boolean),
    writes: Schema.Array(Schema.Union(Schema.suspend(() => Models.ComAtprotoRepoApplyWritesCreate), Schema.suspend(() => Models.ComAtprotoRepoApplyWritesUpdate), Schema.suspend(() => Models.ComAtprotoRepoApplyWritesDelete))),
    swapCommit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ApplyWritesResponse,
});

export const bluesky_ageassurance_begin = defineEndpointDescriptor({
  id: "bluesky.ageassurance.begin",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.ageassurance.begin",
  summary: "Initiate Age Assurance for an account.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.ageassurance.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"email","wireName":"email","location":"body","required":true,"nullable":false},
    {"name":"language","wireName":"language","location":"body","required":true,"nullable":false},
    {"name":"countryCode","wireName":"countryCode","location":"body","required":true,"nullable":false},
    {"name":"regionCode","wireName":"regionCode","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    email: Schema.String,
    language: Schema.String,
    countryCode: Schema.String,
    regionCode: Schema.optional(Schema.String),
  }),
  outputSchema: Models.BeginResponse,
});

export const bluesky_server_checkAccountStatus = defineEndpointDescriptor({
  id: "bluesky.server.checkAccountStatus",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.server.checkAccountStatus",
  summary: "Returns the status of an account, especially as pertaining to import or recovery. Can be called many times over the course of an account migration. Requires auth and can only be called pertaining to oneself.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.server.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.CheckAccountStatusResponse,
});

export const bluesky_temp_checkHandleAvailability = defineEndpointDescriptor({
  id: "bluesky.temp.checkHandleAvailability",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.temp.checkHandleAvailability",
  summary: "Checks whether the provided handle is available. If the handle is not available, available suggestions will be returned. Optional inputs will be used to generate suggestions.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.temp.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"handle","wireName":"handle","location":"query","required":true,"nullable":false},
    {"name":"email","wireName":"email","location":"query","required":false,"nullable":false},
    {"name":"birthDate","wireName":"birthDate","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    handle: Schema.String,
    email: Schema.optional(Schema.String),
    birthDate: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CheckHandleAvailabilityResponse,
});

export const bluesky_temp_checkSignupQueue = defineEndpointDescriptor({
  id: "bluesky.temp.checkSignupQueue",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.temp.checkSignupQueue",
  summary: "Check accounts location in signup queue.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.temp.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.CheckSignupQueueResponse,
});

export const bluesky_server_confirmEmail = defineEndpointDescriptor({
  id: "bluesky.server.confirmEmail",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.confirmEmail",
  summary: "Confirm an email using a token from com.atproto.server.requestEmailConfirmation.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"email","wireName":"email","location":"body","required":true,"nullable":false},
    {"name":"token","wireName":"token","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    email: Schema.String,
    token: Schema.String,
  }),
  outputSchema: Models.ConfirmEmailResponse,
});

export const bluesky_server_createAccount = defineEndpointDescriptor({
  id: "bluesky.server.createAccount",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.createAccount",
  summary: "Create an account. Implemented by PDS.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"email","wireName":"email","location":"body","required":false,"nullable":false},
    {"name":"handle","wireName":"handle","location":"body","required":true,"nullable":false},
    {"name":"did","wireName":"did","location":"body","required":false,"nullable":false},
    {"name":"inviteCode","wireName":"inviteCode","location":"body","required":false,"nullable":false},
    {"name":"verificationCode","wireName":"verificationCode","location":"body","required":false,"nullable":false},
    {"name":"verificationPhone","wireName":"verificationPhone","location":"body","required":false,"nullable":false},
    {"name":"password","wireName":"password","location":"body","required":false,"nullable":false},
    {"name":"recoveryKey","wireName":"recoveryKey","location":"body","required":false,"nullable":false},
    {"name":"plcOp","wireName":"plcOp","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    email: Schema.optional(Schema.String),
    handle: Schema.String,
    did: Schema.optional(Schema.String),
    inviteCode: Schema.optional(Schema.String),
    verificationCode: Schema.optional(Schema.String),
    verificationPhone: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
    recoveryKey: Schema.optional(Schema.String),
    plcOp: Schema.optional(Schema.Unknown),
  }),
  outputSchema: Models.CreateAccountResponse,
});

export const bluesky_server_createAppPassword = defineEndpointDescriptor({
  id: "bluesky.server.createAppPassword",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.createAppPassword",
  summary: "Create an App Password.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false},
    {"name":"privileged","wireName":"privileged","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    privileged: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.CreateAppPasswordResponse,
});

export const bluesky_bookmark_createBookmark = defineEndpointDescriptor({
  id: "bluesky.bookmark.createBookmark",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.bookmark.createBookmark",
  summary: "Creates a private bookmark for the specified record. Currently, only `app.bsky.feed.post` records are supported. Requires authentication.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.bookmark.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"uri","wireName":"uri","location":"body","required":true,"nullable":false},
    {"name":"cid","wireName":"cid","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    uri: Schema.String,
    cid: Schema.String,
  }),
  outputSchema: Models.CreateBookmarkResponse,
});

export const bluesky_draft_createDraft = defineEndpointDescriptor({
  id: "bluesky.draft.createDraft",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.draft.createDraft",
  summary: "Inserts a draft using private storage (stash). An upper limit of drafts might be enforced. Requires authentication.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.draft.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"draft","wireName":"draft","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    draft: Models.AppBskyDraftDefsDraft,
  }),
  outputSchema: Models.CreateDraftResponse,
});

export const bluesky_server_createInviteCode = defineEndpointDescriptor({
  id: "bluesky.server.createInviteCode",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.createInviteCode",
  summary: "Create an invite code.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"useCount","wireName":"useCount","location":"body","required":true,"nullable":false},
    {"name":"forAccount","wireName":"forAccount","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    useCount: Schema.Number,
    forAccount: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CreateInviteCodeResponse,
});

export const bluesky_server_createInviteCodes = defineEndpointDescriptor({
  id: "bluesky.server.createInviteCodes",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.createInviteCodes",
  summary: "Create invite codes.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"codeCount","wireName":"codeCount","location":"body","required":true,"nullable":false},
    {"name":"useCount","wireName":"useCount","location":"body","required":true,"nullable":false},
    {"name":"forAccounts","wireName":"forAccounts","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    codeCount: Schema.Number,
    useCount: Schema.Number,
    forAccounts: Schema.optional(Schema.Array(Schema.String)),
  }),
  outputSchema: Models.CreateInviteCodesResponse,
});

export const bluesky_repo_createRecord = defineEndpointDescriptor({
  id: "bluesky.repo.createRecord",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.repo.createRecord",
  summary: "Create a single new repository record. Requires auth, implemented by PDS.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.repo.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"repo","wireName":"repo","location":"body","required":true,"nullable":false},
    {"name":"collection","wireName":"collection","location":"body","required":true,"nullable":false},
    {"name":"rkey","wireName":"rkey","location":"body","required":false,"nullable":false},
    {"name":"validate","wireName":"validate","location":"body","required":false,"nullable":false},
    {"name":"record","wireName":"record","location":"body","required":true,"nullable":false},
    {"name":"swapCommit","wireName":"swapCommit","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    repo: Schema.String,
    collection: Schema.String,
    rkey: Schema.optional(Schema.String),
    validate: Schema.optional(Schema.Boolean),
    record: Schema.Unknown,
    swapCommit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CreateRecordResponse,
});

export const bluesky_moderation_createReport = defineEndpointDescriptor({
  id: "bluesky.moderation.createReport",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.moderation.createReport",
  summary: "Submit a moderation report regarding an atproto account or record. Implemented by moderation services (with PDS proxying), and requires auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.moderation.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"reasonType","wireName":"reasonType","location":"body","required":true,"nullable":false},
    {"name":"reason","wireName":"reason","location":"body","required":false,"nullable":false},
    {"name":"subject","wireName":"subject","location":"body","required":true,"nullable":false},
    {"name":"modTool","wireName":"modTool","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    reasonType: Models.ComAtprotoModerationDefsReasonType,
    reason: Schema.optional(Schema.String),
    subject: Schema.Union(Schema.suspend(() => Models.ComAtprotoAdminDefsRepoRef), Schema.suspend(() => Models.ComAtprotoRepoStrongRef)),
    modTool: Schema.optional(Models.ComAtprotoModerationCreateReportModTool),
  }),
  outputSchema: Models.CreateReportResponse,
});

export const bluesky_server_createSession = defineEndpointDescriptor({
  id: "bluesky.server.createSession",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.createSession",
  summary: "Create an authentication session.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"identifier","wireName":"identifier","location":"body","required":true,"nullable":false},
    {"name":"password","wireName":"password","location":"body","required":true,"nullable":false},
    {"name":"authFactorToken","wireName":"authFactorToken","location":"body","required":false,"nullable":false},
    {"name":"allowTakendown","wireName":"allowTakendown","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    identifier: Schema.String,
    password: Schema.String,
    authFactorToken: Schema.optional(Schema.String),
    allowTakendown: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.CreateSessionResponse,
});

export const bluesky_server_deactivateAccount = defineEndpointDescriptor({
  id: "bluesky.server.deactivateAccount",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.deactivateAccount",
  summary: "Deactivates a currently active account. Stops serving of repo, and future writes to repo until reactivated. Used to finalize account migration with the old host after the account has been activated on the new host.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"deleteAfter","wireName":"deleteAfter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    deleteAfter: Schema.optional(Schema.String),
  }),
  outputSchema: Models.DeactivateAccountResponse,
});

export const bluesky_admin_deleteAccount = defineEndpointDescriptor({
  id: "bluesky.admin.deleteAccount",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.admin.deleteAccount",
  summary: "Delete a user account as an administrator.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.admin.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
  }),
  outputSchema: Models.DeleteAccountResponse,
});

export const bluesky_server_deleteAccount2 = defineEndpointDescriptor({
  id: "bluesky.server.deleteAccount2",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.deleteAccount",
  summary: "Delete an actor's account with a token and password. Can only be called after requesting a deletion token. Requires auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"body","required":true,"nullable":false},
    {"name":"password","wireName":"password","location":"body","required":true,"nullable":false},
    {"name":"token","wireName":"token","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
    password: Schema.String,
    token: Schema.String,
  }),
  outputSchema: Models.DeleteAccountResponse,
});

export const bluesky_bookmark_deleteBookmark = defineEndpointDescriptor({
  id: "bluesky.bookmark.deleteBookmark",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.bookmark.deleteBookmark",
  summary: "Deletes a private bookmark for the specified record. Currently, only `app.bsky.feed.post` records are supported. Requires authentication.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.bookmark.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"uri","wireName":"uri","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    uri: Schema.String,
  }),
  outputSchema: Models.DeleteBookmarkResponse,
});

export const bluesky_draft_deleteDraft = defineEndpointDescriptor({
  id: "bluesky.draft.deleteDraft",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.draft.deleteDraft",
  summary: "Deletes a draft by ID. Requires authentication.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.draft.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
  }),
  outputSchema: Models.DeleteDraftResponse,
});

export const bluesky_repo_deleteRecord = defineEndpointDescriptor({
  id: "bluesky.repo.deleteRecord",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.repo.deleteRecord",
  summary: "Delete a repository record, or ensure it doesn't exist. Requires auth, implemented by PDS.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.repo.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"repo","wireName":"repo","location":"body","required":true,"nullable":false},
    {"name":"collection","wireName":"collection","location":"body","required":true,"nullable":false},
    {"name":"rkey","wireName":"rkey","location":"body","required":true,"nullable":false},
    {"name":"swapRecord","wireName":"swapRecord","location":"body","required":false,"nullable":false},
    {"name":"swapCommit","wireName":"swapCommit","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    repo: Schema.String,
    collection: Schema.String,
    rkey: Schema.String,
    swapRecord: Schema.optional(Schema.String),
    swapCommit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.DeleteRecordResponse,
});

export const bluesky_server_deleteSession = defineEndpointDescriptor({
  id: "bluesky.server.deleteSession",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.deleteSession",
  summary: "Delete the current session. Requires auth using the 'refreshJwt' (not the 'accessJwt').",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.DeleteSessionResponse,
});

export const bluesky_temp_dereferenceScope = defineEndpointDescriptor({
  id: "bluesky.temp.dereferenceScope",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.temp.dereferenceScope",
  summary: "Allows finding the oauth permission scope from a reference",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.temp.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"scope","wireName":"scope","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    scope: Schema.String,
  }),
  outputSchema: Models.DereferenceScopeResponse,
});

export const bluesky_feed_describeFeedGenerator = defineEndpointDescriptor({
  id: "bluesky.feed.describeFeedGenerator",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.describeFeedGenerator",
  summary: "Get information about a feed generator, including policies and offered feed URIs. Does not require auth; implemented by Feed Generator services (not App View).",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.DescribeFeedGeneratorResponse,
});

export const bluesky_repo_describeRepo = defineEndpointDescriptor({
  id: "bluesky.repo.describeRepo",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.repo.describeRepo",
  summary: "Get information about an account and repository, including the list of collections. Does not require auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.repo.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"repo","wireName":"repo","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    repo: Schema.String,
  }),
  outputSchema: Models.DescribeRepoResponse,
});

export const bluesky_server_describeServer = defineEndpointDescriptor({
  id: "bluesky.server.describeServer",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.server.describeServer",
  summary: "Describes the server's account creation requirements and capabilities. Implemented by PDS.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.server.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.DescribeServerResponse,
});

export const bluesky_admin_disableAccountInvites = defineEndpointDescriptor({
  id: "bluesky.admin.disableAccountInvites",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.admin.disableAccountInvites",
  summary: "Disable an account from receiving new invite codes, but does not invalidate existing codes.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.admin.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"account","wireName":"account","location":"body","required":true,"nullable":false},
    {"name":"note","wireName":"note","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    account: Schema.String,
    note: Schema.optional(Schema.String),
  }),
  outputSchema: Models.DisableAccountInvitesResponse,
});

export const bluesky_admin_disableInviteCodes = defineEndpointDescriptor({
  id: "bluesky.admin.disableInviteCodes",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.admin.disableInviteCodes",
  summary: "Disable some set of codes and/or all codes associated with a set of users.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.admin.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"codes","wireName":"codes","location":"body","required":false,"nullable":false},
    {"name":"accounts","wireName":"accounts","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    codes: Schema.optional(Schema.Array(Schema.String)),
    accounts: Schema.optional(Schema.Array(Schema.String)),
  }),
  outputSchema: Models.DisableInviteCodesResponse,
});

export const bluesky_contact_dismissMatch = defineEndpointDescriptor({
  id: "bluesky.contact.dismissMatch",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.contact.dismissMatch",
  summary: "Removes a match that was found via contact import. It shouldn't appear again if the same contact is re-imported. Requires authentication.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.contact.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"subject","wireName":"subject","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    subject: Schema.String,
  }),
  outputSchema: Models.DismissMatchResponse,
});

export const bluesky_admin_enableAccountInvites = defineEndpointDescriptor({
  id: "bluesky.admin.enableAccountInvites",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.admin.enableAccountInvites",
  summary: "Re-enable an account's ability to receive invite codes.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.admin.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"account","wireName":"account","location":"body","required":true,"nullable":false},
    {"name":"note","wireName":"note","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    account: Schema.String,
    note: Schema.optional(Schema.String),
  }),
  outputSchema: Models.EnableAccountInvitesResponse,
});

export const bluesky_temp_fetchLabels = defineEndpointDescriptor({
  id: "bluesky.temp.fetchLabels",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.temp.fetchLabels",
  summary: "DEPRECATED: use queryLabels or subscribeLabels instead -- Fetch all labels from a labeler created after a certain date.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.temp.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"since","wireName":"since","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    since: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.FetchLabelsResponse,
});

export const bluesky_admin_getAccountInfo = defineEndpointDescriptor({
  id: "bluesky.admin.getAccountInfo",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.admin.getAccountInfo",
  summary: "Get details about an account.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.admin.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
  }),
  outputSchema: Models.GetAccountInfoResponse,
});

export const bluesky_admin_getAccountInfos = defineEndpointDescriptor({
  id: "bluesky.admin.getAccountInfos",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.admin.getAccountInfos",
  summary: "Get details about some accounts.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.admin.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"dids","wireName":"dids","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    dids: Schema.Array(Schema.String),
  }),
  outputSchema: Models.GetAccountInfosResponse,
});

export const bluesky_server_getAccountInviteCodes = defineEndpointDescriptor({
  id: "bluesky.server.getAccountInviteCodes",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.server.getAccountInviteCodes",
  summary: "Get all invite codes for the current account. Requires auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.server.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"includeUsed","wireName":"includeUsed","location":"query","required":false,"nullable":false},
    {"name":"createAvailable","wireName":"createAvailable","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    includeUsed: Schema.optional(Schema.Boolean),
    createAvailable: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.GetAccountInviteCodesResponse,
});

export const bluesky_feed_getActorFeeds = defineEndpointDescriptor({
  id: "bluesky.feed.getActorFeeds",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.getActorFeeds",
  summary: "Get a list of feeds (feed generator records) created by the actor (in the actor's repo).",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actor","wireName":"actor","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actor: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetActorFeedsResponse,
});

export const bluesky_feed_getActorLikes = defineEndpointDescriptor({
  id: "bluesky.feed.getActorLikes",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.getActorLikes",
  summary: "Get a list of posts liked by an actor. Requires auth, actor must be the requesting account.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actor","wireName":"actor","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actor: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetActorLikesResponse,
});

export const bluesky_graph_getActorStarterPacks = defineEndpointDescriptor({
  id: "bluesky.graph.getActorStarterPacks",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getActorStarterPacks",
  summary: "Get a list of starter packs created by the actor.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actor","wireName":"actor","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actor: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetActorStarterPacksResponse,
});

export const bluesky_unspecced_getAgeAssuranceState = defineEndpointDescriptor({
  id: "bluesky.unspecced.getAgeAssuranceState",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getAgeAssuranceState",
  summary: "Returns the current state of the age assurance process for an account. This is used to check if the user has completed age assurance or if further action is required.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetAgeAssuranceStateResponse,
});

export const bluesky_feed_getAuthorFeed = defineEndpointDescriptor({
  id: "bluesky.feed.getAuthorFeed",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.getAuthorFeed",
  summary: "Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actor","wireName":"actor","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false},
    {"name":"filter","wireName":"filter","location":"query","required":false,"nullable":false},
    {"name":"includePins","wireName":"includePins","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actor: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    includePins: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.GetAuthorFeedResponse,
});

export const bluesky_sync_getBlob = defineEndpointDescriptor({
  id: "bluesky.sync.getBlob",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.sync.getBlob",
  summary: "Get a blob associated with a given account. Returns the full blob as originally uploaded. Does not require auth; implemented by PDS.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.sync.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"query","required":true,"nullable":false},
    {"name":"cid","wireName":"cid","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
    cid: Schema.String,
  }),
  outputSchema: Models.GetBlobResponse,
});

export const bluesky_graph_getBlocks = defineEndpointDescriptor({
  id: "bluesky.graph.getBlocks",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getBlocks",
  summary: "Enumerates which accounts the requesting account is currently blocking. Requires auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetBlocksResponse,
});

export const bluesky_sync_getBlocks2 = defineEndpointDescriptor({
  id: "bluesky.sync.getBlocks2",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.sync.getBlocks",
  summary: "Get data blocks from a given repo, by CID. For example, intermediate MST nodes, or records. Does not require auth; implemented by PDS.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.sync.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"query","required":true,"nullable":false},
    {"name":"cids","wireName":"cids","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
    cids: Schema.Array(Schema.String),
  }),
  outputSchema: Models.GetBlocksResponse,
});

export const bluesky_bookmark_getBookmarks = defineEndpointDescriptor({
  id: "bluesky.bookmark.getBookmarks",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.bookmark.getBookmarks",
  summary: "Gets views of records bookmarked by the authenticated user. Requires authentication.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.bookmark.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetBookmarksResponse,
});

export const bluesky_sync_getCheckout = defineEndpointDescriptor({
  id: "bluesky.sync.getCheckout",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.sync.getCheckout",
  summary: "DEPRECATED - please use com.atproto.sync.getRepo instead",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.sync.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
  }),
  outputSchema: Models.GetCheckoutResponse,
});

export const bluesky_ageassurance_getConfig = defineEndpointDescriptor({
  id: "bluesky.ageassurance.getConfig",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.ageassurance.getConfig",
  summary: "Returns Age Assurance configuration for use on the client.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.ageassurance.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetConfigResponse,
});

export const bluesky_unspecced_getConfig2 = defineEndpointDescriptor({
  id: "bluesky.unspecced.getConfig2",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getConfig",
  summary: "Get miscellaneous runtime configuration.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetConfigResponse,
});

export const bluesky_draft_getDrafts = defineEndpointDescriptor({
  id: "bluesky.draft.getDrafts",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.draft.getDrafts",
  summary: "Gets views of user drafts. Requires authentication.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.draft.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetDraftsResponse,
});

export const bluesky_embed_getEmbedExternalView = defineEndpointDescriptor({
  id: "bluesky.embed.getEmbedExternalView",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.embed.getEmbedExternalView",
  summary: "Resolve one or more AT-URIs into the data needed to render an enhanced external embed. Returns `associatedRefs` (strongRefs to embed into a post's external.associatedRefs), the raw `associatedRecords`, and a hydrated `view`. The response is empty (`{}`) when no records were resolvable, or when validation determined the resolved records don't actually back the requested URL; clients should fall back to their own link-card rendering in that case and skip writing strongRefs to the post.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.embed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"url","wireName":"url","location":"query","required":true,"nullable":false},
    {"name":"uris","wireName":"uris","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    url: Schema.String,
    uris: Schema.Array(Schema.String),
  }),
  outputSchema: Models.GetEmbedExternalViewResponse,
});

export const bluesky_feed_getFeed = defineEndpointDescriptor({
  id: "bluesky.feed.getFeed",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.getFeed",
  summary: "Get a hydrated feed from an actor's selected feed generator. Implemented by App View.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"feed","wireName":"feed","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    feed: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetFeedResponse,
});

export const bluesky_feed_getFeedGenerator = defineEndpointDescriptor({
  id: "bluesky.feed.getFeedGenerator",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.getFeedGenerator",
  summary: "Get information about a feed generator. Implemented by AppView.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"feed","wireName":"feed","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    feed: Schema.String,
  }),
  outputSchema: Models.GetFeedGeneratorResponse,
});

export const bluesky_feed_getFeedGenerators = defineEndpointDescriptor({
  id: "bluesky.feed.getFeedGenerators",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.getFeedGenerators",
  summary: "Get information about a list of feed generators.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"feeds","wireName":"feeds","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    feeds: Schema.Array(Schema.String),
  }),
  outputSchema: Models.GetFeedGeneratorsResponse,
});

export const bluesky_feed_getFeedSkeleton = defineEndpointDescriptor({
  id: "bluesky.feed.getFeedSkeleton",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.getFeedSkeleton",
  summary: "Get a skeleton of a feed provided by a feed generator. Auth is optional, depending on provider requirements, and provides the DID of the requester. Implemented by Feed Generator Service.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"feed","wireName":"feed","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    feed: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetFeedSkeletonResponse,
});

export const bluesky_graph_getFollowers = defineEndpointDescriptor({
  id: "bluesky.graph.getFollowers",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getFollowers",
  summary: "Enumerates accounts which follow a specified account (actor).",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actor","wireName":"actor","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actor: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
    sort: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetFollowersResponse,
});

export const bluesky_graph_getFollows = defineEndpointDescriptor({
  id: "bluesky.graph.getFollows",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getFollows",
  summary: "Enumerates accounts which a specified account (actor) follows.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actor","wireName":"actor","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actor: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
    sort: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetFollowsResponse,
});

export const bluesky_sync_getHead = defineEndpointDescriptor({
  id: "bluesky.sync.getHead",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.sync.getHead",
  summary: "DEPRECATED - please use com.atproto.sync.getLatestCommit instead",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.sync.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
  }),
  outputSchema: Models.GetHeadResponse,
});

export const bluesky_sync_getHostStatus = defineEndpointDescriptor({
  id: "bluesky.sync.getHostStatus",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.sync.getHostStatus",
  summary: "Returns information about a specified upstream host, as consumed by the server. Implemented by relays.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.sync.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"hostname","wireName":"hostname","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    hostname: Schema.String,
  }),
  outputSchema: Models.GetHostStatusResponse,
});

export const bluesky_admin_getInviteCodes = defineEndpointDescriptor({
  id: "bluesky.admin.getInviteCodes",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.admin.getInviteCodes",
  summary: "Get an admin view of invite codes.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.admin.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sort: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetInviteCodesResponse,
});

export const bluesky_video_getJobStatus = defineEndpointDescriptor({
  id: "bluesky.video.getJobStatus",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.video.getJobStatus",
  summary: "Get status details for a video processing job.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.video.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"jobId","wireName":"jobId","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    jobId: Schema.String,
  }),
  outputSchema: Models.GetJobStatusResponse,
});

export const bluesky_graph_getKnownFollowers = defineEndpointDescriptor({
  id: "bluesky.graph.getKnownFollowers",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getKnownFollowers",
  summary: "Enumerates accounts which follow a specified account (actor) and are followed by the viewer.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actor","wireName":"actor","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actor: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetKnownFollowersResponse,
});

export const bluesky_sync_getLatestCommit = defineEndpointDescriptor({
  id: "bluesky.sync.getLatestCommit",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.sync.getLatestCommit",
  summary: "Get the current commit CID & revision of the specified repo. Does not require auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.sync.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
  }),
  outputSchema: Models.GetLatestCommitResponse,
});

export const bluesky_feed_getLikes = defineEndpointDescriptor({
  id: "bluesky.feed.getLikes",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.getLikes",
  summary: "Get like records which reference a subject (by AT-URI and CID).",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"uri","wireName":"uri","location":"query","required":true,"nullable":false},
    {"name":"cid","wireName":"cid","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    uri: Schema.String,
    cid: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetLikesResponse,
});

export const bluesky_graph_getList = defineEndpointDescriptor({
  id: "bluesky.graph.getList",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getList",
  summary: "Gets a 'view' (with additional context) of a specified list.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"list","wireName":"list","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    list: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetListResponse,
});

export const bluesky_graph_getListBlocks = defineEndpointDescriptor({
  id: "bluesky.graph.getListBlocks",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getListBlocks",
  summary: "Get mod lists that the requesting account (actor) is blocking. Requires auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetListBlocksResponse,
});

export const bluesky_feed_getListFeed = defineEndpointDescriptor({
  id: "bluesky.feed.getListFeed",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.getListFeed",
  summary: "Get a feed of recent posts from a list (posts and reposts from any actors on the list). Does not require auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"list","wireName":"list","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    list: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetListFeedResponse,
});

export const bluesky_graph_getListMutes = defineEndpointDescriptor({
  id: "bluesky.graph.getListMutes",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getListMutes",
  summary: "Enumerates mod lists that the requesting account (actor) currently has muted. Requires auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetListMutesResponse,
});

export const bluesky_graph_getLists = defineEndpointDescriptor({
  id: "bluesky.graph.getLists",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getLists",
  summary: "Enumerates the lists created by a specified account (actor).",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actor","wireName":"actor","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false},
    {"name":"purposes","wireName":"purposes","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actor: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
    purposes: Schema.optional(Schema.Array(Schema.String)),
  }),
  outputSchema: Models.GetListsResponse,
});

export const bluesky_graph_getListsWithMembership = defineEndpointDescriptor({
  id: "bluesky.graph.getListsWithMembership",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getListsWithMembership",
  summary: "Enumerates the lists created by the session user, and includes membership information about `actor` in those lists. Only supports curation and moderation lists (no reference lists, used in starter packs). Requires auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actor","wireName":"actor","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false},
    {"name":"purposes","wireName":"purposes","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actor: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
    purposes: Schema.optional(Schema.Array(Schema.String)),
  }),
  outputSchema: Models.GetListsWithMembershipResponse,
});

export const bluesky_contact_getMatches = defineEndpointDescriptor({
  id: "bluesky.contact.getMatches",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.contact.getMatches",
  summary: "Returns the matched contacts (contacts that were mutually imported). Excludes dismissed matches. Requires authentication.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.contact.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetMatchesResponse,
});

export const bluesky_graph_getMutes = defineEndpointDescriptor({
  id: "bluesky.graph.getMutes",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getMutes",
  summary: "Enumerates accounts that the requesting account (actor) currently has fully muted. Mutes scoped to specific kinds of content (only reposts, only quote posts) are not included. Responses may contain more items than the requested limit. Requires auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetMutesResponse,
});

export const bluesky_unspecced_getOnboardingSuggestedStarterPacks = defineEndpointDescriptor({
  id: "bluesky.unspecced.getOnboardingSuggestedStarterPacks",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getOnboardingSuggestedStarterPacks",
  summary: "Get a list of suggested starterpacks for onboarding",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetOnboardingSuggestedStarterPacksResponse,
});

export const bluesky_unspecced_getOnboardingSuggestedStarterPacksSkeleton = defineEndpointDescriptor({
  id: "bluesky.unspecced.getOnboardingSuggestedStarterPacksSkeleton",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getOnboardingSuggestedStarterPacksSkeleton",
  summary: "Get a skeleton of suggested starterpacks for onboarding. Intended to be called and hydrated by app.bsky.unspecced.getOnboardingSuggestedStarterPacks",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"viewer","wireName":"viewer","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    viewer: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetOnboardingSuggestedStarterPacksSkeletonResponse,
});

export const bluesky_unspecced_getOnboardingSuggestedUsersSkeleton = defineEndpointDescriptor({
  id: "bluesky.unspecced.getOnboardingSuggestedUsersSkeleton",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getOnboardingSuggestedUsersSkeleton",
  summary: "Get a skeleton of suggested users for onboarding. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedOnboardingUsers",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"viewer","wireName":"viewer","location":"query","required":false,"nullable":false},
    {"name":"category","wireName":"category","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    viewer: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetOnboardingSuggestedUsersSkeletonResponse,
});

export const bluesky_unspecced_getPopularFeedGenerators = defineEndpointDescriptor({
  id: "bluesky.unspecced.getPopularFeedGenerators",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getPopularFeedGenerators",
  summary: "An unspecced view of globally popular feed generators.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false},
    {"name":"query","wireName":"query","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetPopularFeedGeneratorsResponse,
});

export const bluesky_feed_getPosts = defineEndpointDescriptor({
  id: "bluesky.feed.getPosts",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.getPosts",
  summary: "Gets post views for a specified list of posts (by AT-URI). This is sometimes referred to as 'hydrating' a 'feed skeleton'.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"uris","wireName":"uris","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    uris: Schema.Array(Schema.String),
  }),
  outputSchema: Models.GetPostsResponse,
});

export const bluesky_feed_getPostThread = defineEndpointDescriptor({
  id: "bluesky.feed.getPostThread",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.getPostThread",
  summary: "Get posts in a thread. Does not require auth, but additional metadata and filtering will be applied for authed requests.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"uri","wireName":"uri","location":"query","required":true,"nullable":false},
    {"name":"depth","wireName":"depth","location":"query","required":false,"nullable":false},
    {"name":"parentHeight","wireName":"parentHeight","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    uri: Schema.String,
    depth: Schema.optional(Schema.Number),
    parentHeight: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetPostThreadResponse,
});

export const bluesky_unspecced_getPostThreadOtherV2 = defineEndpointDescriptor({
  id: "bluesky.unspecced.getPostThreadOtherV2",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getPostThreadOtherV2",
  summary: "(NOTE: this endpoint is under development and WILL change without notice. Don't use it until it is moved out of `unspecced` or your application WILL break) Get additional posts under a thread e.g. replies hidden by threadgate. Based on an anchor post at any depth of the tree, returns top-level replies below that anchor. It does not include ancestors nor the anchor itself. This should be called after exhausting `app.bsky.unspecced.getPostThreadV2`. Does not require auth, but additional metadata and filtering will be applied for authed requests.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"anchor","wireName":"anchor","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    anchor: Schema.String,
  }),
  outputSchema: Models.GetPostThreadOtherV2Response,
});

export const bluesky_unspecced_getPostThreadV2 = defineEndpointDescriptor({
  id: "bluesky.unspecced.getPostThreadV2",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getPostThreadV2",
  summary: "(NOTE: this endpoint is under development and WILL change without notice. Don't use it until it is moved out of `unspecced` or your application WILL break) Get posts in a thread. It is based in an anchor post at any depth of the tree, and returns posts above it (recursively resolving the parent, without further branching to their replies) and below it (recursive replies, with branching to their replies). Does not require auth, but additional metadata and filtering will be applied for authed requests.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"anchor","wireName":"anchor","location":"query","required":true,"nullable":false},
    {"name":"above","wireName":"above","location":"query","required":false,"nullable":false},
    {"name":"below","wireName":"below","location":"query","required":false,"nullable":false},
    {"name":"branchingFactor","wireName":"branchingFactor","location":"query","required":false,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    anchor: Schema.String,
    above: Schema.optional(Schema.Boolean),
    below: Schema.optional(Schema.Number),
    branchingFactor: Schema.optional(Schema.Number),
    sort: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetPostThreadV2Response,
});

export const bluesky_actor_getPreferences = defineEndpointDescriptor({
  id: "bluesky.actor.getPreferences",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.actor.getPreferences",
  summary: "Get private preferences attached to the current account. Expected use is synchronization between multiple devices, and import/export during account migration. Requires auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.actor.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetPreferencesResponse,
});

export const bluesky_notification_getPreferences2 = defineEndpointDescriptor({
  id: "bluesky.notification.getPreferences2",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.notification.getPreferences",
  summary: "Get notification-related preferences for an account. Requires auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.notification.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetPreferencesResponse,
});

export const bluesky_actor_getProfile = defineEndpointDescriptor({
  id: "bluesky.actor.getProfile",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.actor.getProfile",
  summary: "Get detailed profile view of an actor. Does not require auth, but contains relevant metadata with auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.actor.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actor","wireName":"actor","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actor: Schema.String,
  }),
  outputSchema: Models.GetProfileResponse,
});

export const bluesky_actor_getProfiles = defineEndpointDescriptor({
  id: "bluesky.actor.getProfiles",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.actor.getProfiles",
  summary: "Get detailed profile views of multiple actors.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.actor.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actors","wireName":"actors","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actors: Schema.Array(Schema.String),
  }),
  outputSchema: Models.GetProfilesResponse,
});

export const bluesky_feed_getQuotes = defineEndpointDescriptor({
  id: "bluesky.feed.getQuotes",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.getQuotes",
  summary: "Get a list of quotes for a given post.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"uri","wireName":"uri","location":"query","required":true,"nullable":false},
    {"name":"cid","wireName":"cid","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    uri: Schema.String,
    cid: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetQuotesResponse,
});

export const bluesky_identity_getRecommendedDidCredentials = defineEndpointDescriptor({
  id: "bluesky.identity.getRecommendedDidCredentials",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.identity.getRecommendedDidCredentials",
  summary: "Describe the credentials that should be included in the DID doc of an account that is migrating to this service.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.identity.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetRecommendedDidCredentialsResponse,
});

export const bluesky_repo_getRecord = defineEndpointDescriptor({
  id: "bluesky.repo.getRecord",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.repo.getRecord",
  summary: "Get a single record from a repository. Does not require auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.repo.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"repo","wireName":"repo","location":"query","required":true,"nullable":false},
    {"name":"collection","wireName":"collection","location":"query","required":true,"nullable":false},
    {"name":"rkey","wireName":"rkey","location":"query","required":true,"nullable":false},
    {"name":"cid","wireName":"cid","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    repo: Schema.String,
    collection: Schema.String,
    rkey: Schema.String,
    cid: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetRecordResponse,
});

export const bluesky_sync_getRecord2 = defineEndpointDescriptor({
  id: "bluesky.sync.getRecord2",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.sync.getRecord",
  summary: "Get data blocks needed to prove the existence or non-existence of record in the current version of repo. Does not require auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.sync.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"query","required":true,"nullable":false},
    {"name":"collection","wireName":"collection","location":"query","required":true,"nullable":false},
    {"name":"rkey","wireName":"rkey","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
    collection: Schema.String,
    rkey: Schema.String,
  }),
  outputSchema: Models.GetRecordResponse,
});

export const bluesky_graph_getRelationships = defineEndpointDescriptor({
  id: "bluesky.graph.getRelationships",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getRelationships",
  summary: "Enumerates public relationships between one account, and a list of other accounts. Does not require auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actor","wireName":"actor","location":"query","required":true,"nullable":false},
    {"name":"others","wireName":"others","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actor: Schema.String,
    others: Schema.optional(Schema.Array(Schema.String)),
  }),
  outputSchema: Models.GetRelationshipsResponse,
});

export const bluesky_sync_getRepo = defineEndpointDescriptor({
  id: "bluesky.sync.getRepo",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.sync.getRepo",
  summary: "Download a repository export as CAR file. Optionally only a 'diff' since a previous revision. Does not require auth; implemented by PDS.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.sync.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"query","required":true,"nullable":false},
    {"name":"since","wireName":"since","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
    since: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetRepoResponse,
});

export const bluesky_sync_getRepoStatus = defineEndpointDescriptor({
  id: "bluesky.sync.getRepoStatus",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.sync.getRepoStatus",
  summary: "Get the hosting status for a repository, on this server. Expected to be implemented by PDS and Relay.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.sync.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
  }),
  outputSchema: Models.GetRepoStatusResponse,
});

export const bluesky_feed_getRepostedBy = defineEndpointDescriptor({
  id: "bluesky.feed.getRepostedBy",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.getRepostedBy",
  summary: "Get a list of reposts for a given post.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"uri","wireName":"uri","location":"query","required":true,"nullable":false},
    {"name":"cid","wireName":"cid","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    uri: Schema.String,
    cid: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetRepostedByResponse,
});

export const bluesky_server_getServiceAuth = defineEndpointDescriptor({
  id: "bluesky.server.getServiceAuth",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.server.getServiceAuth",
  summary: "Get a signed token on behalf of the requesting DID for the requested service.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.server.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"aud","wireName":"aud","location":"query","required":true,"nullable":false},
    {"name":"exp","wireName":"exp","location":"query","required":false,"nullable":false},
    {"name":"lxm","wireName":"lxm","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    aud: Schema.String,
    exp: Schema.optional(Schema.Number),
    lxm: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetServiceAuthResponse,
});

export const bluesky_labeler_getServices = defineEndpointDescriptor({
  id: "bluesky.labeler.getServices",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.labeler.getServices",
  summary: "Get information about a list of labeler services.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.labeler.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"dids","wireName":"dids","location":"query","required":true,"nullable":false},
    {"name":"detailed","wireName":"detailed","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    dids: Schema.Array(Schema.String),
    detailed: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.GetServicesResponse,
});

export const bluesky_server_getSession = defineEndpointDescriptor({
  id: "bluesky.server.getSession",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.server.getSession",
  summary: "Get information about the current auth session. Requires auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.server.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetSessionResponse,
});

export const bluesky_graph_getStarterPack = defineEndpointDescriptor({
  id: "bluesky.graph.getStarterPack",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getStarterPack",
  summary: "Gets a view of a starter pack.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"starterPack","wireName":"starterPack","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    starterPack: Schema.String,
  }),
  outputSchema: Models.GetStarterPackResponse,
});

export const bluesky_graph_getStarterPacks = defineEndpointDescriptor({
  id: "bluesky.graph.getStarterPacks",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getStarterPacks",
  summary: "Get views for a list of starter packs.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"uris","wireName":"uris","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    uris: Schema.Array(Schema.String),
  }),
  outputSchema: Models.GetStarterPacksResponse,
});

export const bluesky_graph_getStarterPacksWithMembership = defineEndpointDescriptor({
  id: "bluesky.graph.getStarterPacksWithMembership",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getStarterPacksWithMembership",
  summary: "Enumerates the starter packs created by the session user, and includes membership information about `actor` in those starter packs. Requires auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actor","wireName":"actor","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actor: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetStarterPacksWithMembershipResponse,
});

export const bluesky_ageassurance_getState = defineEndpointDescriptor({
  id: "bluesky.ageassurance.getState",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.ageassurance.getState",
  summary: "Returns server-computed Age Assurance state, if available, and any additional metadata needed to compute Age Assurance state client-side.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.ageassurance.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"countryCode","wireName":"countryCode","location":"query","required":true,"nullable":false},
    {"name":"regionCode","wireName":"regionCode","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    countryCode: Schema.String,
    regionCode: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetStateResponse,
});

export const bluesky_admin_getSubjectStatus = defineEndpointDescriptor({
  id: "bluesky.admin.getSubjectStatus",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.admin.getSubjectStatus",
  summary: "Get the service-specific admin status of a subject (account, record, or blob).",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.admin.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"query","required":false,"nullable":false},
    {"name":"uri","wireName":"uri","location":"query","required":false,"nullable":false},
    {"name":"blob","wireName":"blob","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    blob: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetSubjectStatusResponse,
});

export const bluesky_feed_getSuggestedFeeds = defineEndpointDescriptor({
  id: "bluesky.feed.getSuggestedFeeds",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.getSuggestedFeeds",
  summary: "Get a list of suggested feeds (feed generators) for the requesting account.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetSuggestedFeedsResponse,
});

export const bluesky_unspecced_getSuggestedFeeds2 = defineEndpointDescriptor({
  id: "bluesky.unspecced.getSuggestedFeeds2",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getSuggestedFeeds",
  summary: "Get a list of suggested feeds",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetSuggestedFeedsResponse,
});

export const bluesky_unspecced_getSuggestedFeedsSkeleton = defineEndpointDescriptor({
  id: "bluesky.unspecced.getSuggestedFeedsSkeleton",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getSuggestedFeedsSkeleton",
  summary: "Get a skeleton of suggested feeds. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedFeeds",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"viewer","wireName":"viewer","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    viewer: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetSuggestedFeedsSkeletonResponse,
});

export const bluesky_graph_getSuggestedFollowsByActor = defineEndpointDescriptor({
  id: "bluesky.graph.getSuggestedFollowsByActor",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.getSuggestedFollowsByActor",
  summary: "Enumerates follows similar to a given account (actor). Expected use is to recommend additional accounts immediately after following one account.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actor","wireName":"actor","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actor: Schema.String,
  }),
  outputSchema: Models.GetSuggestedFollowsByActorResponse,
});

export const bluesky_unspecced_getSuggestedOnboardingUsers = defineEndpointDescriptor({
  id: "bluesky.unspecced.getSuggestedOnboardingUsers",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getSuggestedOnboardingUsers",
  summary: "Get a list of suggested users for onboarding",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"category","wireName":"category","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    category: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetSuggestedOnboardingUsersResponse,
});

export const bluesky_unspecced_getSuggestedStarterPacks = defineEndpointDescriptor({
  id: "bluesky.unspecced.getSuggestedStarterPacks",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getSuggestedStarterPacks",
  summary: "Get a list of suggested starterpacks",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetSuggestedStarterPacksResponse,
});

export const bluesky_unspecced_getSuggestedStarterPacksSkeleton = defineEndpointDescriptor({
  id: "bluesky.unspecced.getSuggestedStarterPacksSkeleton",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getSuggestedStarterPacksSkeleton",
  summary: "Get a skeleton of suggested starterpacks. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedStarterpacks",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"viewer","wireName":"viewer","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    viewer: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetSuggestedStarterPacksSkeletonResponse,
});

export const bluesky_unspecced_getSuggestedUsers = defineEndpointDescriptor({
  id: "bluesky.unspecced.getSuggestedUsers",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getSuggestedUsers",
  summary: "Get a list of suggested users",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"category","wireName":"category","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    category: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetSuggestedUsersResponse,
});

export const bluesky_unspecced_getSuggestedUsersForDiscover = defineEndpointDescriptor({
  id: "bluesky.unspecced.getSuggestedUsersForDiscover",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getSuggestedUsersForDiscover",
  summary: "Get a list of suggested users for the Discover page",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetSuggestedUsersForDiscoverResponse,
});

export const bluesky_unspecced_getSuggestedUsersForDiscoverSkeleton = defineEndpointDescriptor({
  id: "bluesky.unspecced.getSuggestedUsersForDiscoverSkeleton",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getSuggestedUsersForDiscoverSkeleton",
  summary: "Get a skeleton of suggested users for the Discover page. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedUsersForDiscover",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"viewer","wireName":"viewer","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    viewer: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetSuggestedUsersForDiscoverSkeletonResponse,
});

export const bluesky_unspecced_getSuggestedUsersForExplore = defineEndpointDescriptor({
  id: "bluesky.unspecced.getSuggestedUsersForExplore",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getSuggestedUsersForExplore",
  summary: "Get a list of suggested users for the Explore page",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"category","wireName":"category","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    category: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetSuggestedUsersForExploreResponse,
});

export const bluesky_unspecced_getSuggestedUsersForExploreSkeleton = defineEndpointDescriptor({
  id: "bluesky.unspecced.getSuggestedUsersForExploreSkeleton",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getSuggestedUsersForExploreSkeleton",
  summary: "Get a skeleton of suggested users for the Explore page. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedUsersForExplore",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"viewer","wireName":"viewer","location":"query","required":false,"nullable":false},
    {"name":"category","wireName":"category","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    viewer: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetSuggestedUsersForExploreSkeletonResponse,
});

export const bluesky_unspecced_getSuggestedUsersForSeeMore = defineEndpointDescriptor({
  id: "bluesky.unspecced.getSuggestedUsersForSeeMore",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getSuggestedUsersForSeeMore",
  summary: "Get a list of suggested users for the See More page",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"category","wireName":"category","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    category: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetSuggestedUsersForSeeMoreResponse,
});

export const bluesky_unspecced_getSuggestedUsersForSeeMoreSkeleton = defineEndpointDescriptor({
  id: "bluesky.unspecced.getSuggestedUsersForSeeMoreSkeleton",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getSuggestedUsersForSeeMoreSkeleton",
  summary: "Get a skeleton of suggested users for the See More page. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedUsersForSeeMore",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"viewer","wireName":"viewer","location":"query","required":false,"nullable":false},
    {"name":"category","wireName":"category","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    viewer: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetSuggestedUsersForSeeMoreSkeletonResponse,
});

export const bluesky_unspecced_getSuggestedUsersSkeleton = defineEndpointDescriptor({
  id: "bluesky.unspecced.getSuggestedUsersSkeleton",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getSuggestedUsersSkeleton",
  summary: "Get a skeleton of suggested users. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedUsers",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"viewer","wireName":"viewer","location":"query","required":false,"nullable":false},
    {"name":"category","wireName":"category","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    viewer: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetSuggestedUsersSkeletonResponse,
});

export const bluesky_actor_getSuggestions = defineEndpointDescriptor({
  id: "bluesky.actor.getSuggestions",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.actor.getSuggestions",
  summary: "Get a list of suggested actors. Expected use is discovery of accounts to follow during new account onboarding.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.actor.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetSuggestionsResponse,
});

export const bluesky_unspecced_getSuggestionsSkeleton = defineEndpointDescriptor({
  id: "bluesky.unspecced.getSuggestionsSkeleton",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getSuggestionsSkeleton",
  summary: "Get a skeleton of suggested actors. Intended to be called and then hydrated through app.bsky.actor.getSuggestions",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"viewer","wireName":"viewer","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false},
    {"name":"relativeToDid","wireName":"relativeToDid","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    viewer: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
    relativeToDid: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetSuggestionsSkeletonResponse,
});

export const bluesky_contact_getSyncStatus = defineEndpointDescriptor({
  id: "bluesky.contact.getSyncStatus",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.contact.getSyncStatus",
  summary: "Gets the user's current contact import status. Requires authentication.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.contact.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetSyncStatusResponse,
});

export const bluesky_unspecced_getTaggedSuggestions = defineEndpointDescriptor({
  id: "bluesky.unspecced.getTaggedSuggestions",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getTaggedSuggestions",
  summary: "Get a list of suggestions (feeds and users) tagged with categories",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetTaggedSuggestionsResponse,
});

export const bluesky_feed_getTimeline = defineEndpointDescriptor({
  id: "bluesky.feed.getTimeline",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.getTimeline",
  summary: "Get a view of the requesting account's home timeline. This is expected to be some form of reverse-chronological feed.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"algorithm","wireName":"algorithm","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    algorithm: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetTimelineResponse,
});

export const bluesky_unspecced_getTrendingTopics = defineEndpointDescriptor({
  id: "bluesky.unspecced.getTrendingTopics",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getTrendingTopics",
  summary: "Get a list of trending topics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"viewer","wireName":"viewer","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    viewer: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetTrendingTopicsResponse,
});

export const bluesky_unspecced_getTrends = defineEndpointDescriptor({
  id: "bluesky.unspecced.getTrends",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getTrends",
  summary: "Get the current trends on the network",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetTrendsResponse,
});

export const bluesky_unspecced_getTrendsSkeleton = defineEndpointDescriptor({
  id: "bluesky.unspecced.getTrendsSkeleton",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.getTrendsSkeleton",
  summary: "Get the skeleton of trends on the network. Intended to be called and then hydrated through app.bsky.unspecced.getTrends",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"viewer","wireName":"viewer","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    viewer: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetTrendsSkeletonResponse,
});

export const bluesky_notification_getUnreadCount = defineEndpointDescriptor({
  id: "bluesky.notification.getUnreadCount",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.notification.getUnreadCount",
  summary: "Count the number of unread notifications for the requesting account. Requires auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.notification.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"priority","wireName":"priority","location":"query","required":false,"nullable":false},
    {"name":"seenAt","wireName":"seenAt","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    priority: Schema.optional(Schema.Boolean),
    seenAt: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetUnreadCountResponse,
});

export const bluesky_video_getUploadLimits = defineEndpointDescriptor({
  id: "bluesky.video.getUploadLimits",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.video.getUploadLimits",
  summary: "Get video upload limits for the authenticated user.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.video.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetUploadLimitsResponse,
});

export const bluesky_contact_importContacts = defineEndpointDescriptor({
  id: "bluesky.contact.importContacts",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.contact.importContacts",
  summary: "Import contacts for securely matching with other users. This follows the protocol explained in https://docs.bsky.app/blog/contact-import-rfc. Requires authentication.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.contact.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"token","wireName":"token","location":"body","required":true,"nullable":false},
    {"name":"contacts","wireName":"contacts","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    token: Schema.String,
    contacts: Schema.Array(Schema.String),
  }),
  outputSchema: Models.ImportContactsResponse,
});

export const bluesky_repo_importRepo = defineEndpointDescriptor({
  id: "bluesky.repo.importRepo",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.repo.importRepo",
  summary: "Import a repo in the form of a CAR file. Requires Content-Length HTTP header to be set.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.repo.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.ImportRepoResponse,
});

export const bluesky_unspecced_initAgeAssurance = defineEndpointDescriptor({
  id: "bluesky.unspecced.initAgeAssurance",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.unspecced.initAgeAssurance",
  summary: "Initiate age assurance for an account. This is a one-time action that will start the process of verifying the user's age.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"email","wireName":"email","location":"body","required":true,"nullable":false},
    {"name":"language","wireName":"language","location":"body","required":true,"nullable":false},
    {"name":"countryCode","wireName":"countryCode","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    email: Schema.String,
    language: Schema.String,
    countryCode: Schema.String,
  }),
  outputSchema: Models.InitAgeAssuranceResponse,
});

export const bluesky_notification_listActivitySubscriptions = defineEndpointDescriptor({
  id: "bluesky.notification.listActivitySubscriptions",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.notification.listActivitySubscriptions",
  summary: "Enumerate all accounts to which the requesting account is subscribed to receive notifications for. Requires auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.notification.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ListActivitySubscriptionsResponse,
});

export const bluesky_server_listAppPasswords = defineEndpointDescriptor({
  id: "bluesky.server.listAppPasswords",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.server.listAppPasswords",
  summary: "List all App Passwords.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.server.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.ListAppPasswordsResponse,
});

export const bluesky_sync_listBlobs = defineEndpointDescriptor({
  id: "bluesky.sync.listBlobs",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.sync.listBlobs",
  summary: "List blob CIDs for an account, since some repo revision. Does not require auth; implemented by PDS.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.sync.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"query","required":true,"nullable":false},
    {"name":"since","wireName":"since","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
    since: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ListBlobsResponse,
});

export const bluesky_sync_listHosts = defineEndpointDescriptor({
  id: "bluesky.sync.listHosts",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.sync.listHosts",
  summary: "Enumerates upstream hosts (eg, PDS or relay instances) that this service consumes from. Implemented by relays.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.sync.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ListHostsResponse,
});

export const bluesky_repo_listMissingBlobs = defineEndpointDescriptor({
  id: "bluesky.repo.listMissingBlobs",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.repo.listMissingBlobs",
  summary: "Returns a list of missing blobs for the requesting account. Intended to be used in the account migration flow.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.repo.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ListMissingBlobsResponse,
});

export const bluesky_notification_listNotifications = defineEndpointDescriptor({
  id: "bluesky.notification.listNotifications",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.notification.listNotifications",
  summary: "Enumerate notifications for the requesting account. Requires auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.notification.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"reasons","wireName":"reasons","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"priority","wireName":"priority","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false},
    {"name":"seenAt","wireName":"seenAt","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    reasons: Schema.optional(Schema.Array(Schema.String)),
    limit: Schema.optional(Schema.Number),
    priority: Schema.optional(Schema.Boolean),
    cursor: Schema.optional(Schema.String),
    seenAt: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ListNotificationsResponse,
});

export const bluesky_repo_listRecords = defineEndpointDescriptor({
  id: "bluesky.repo.listRecords",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.repo.listRecords",
  summary: "List a range of records in a repository, matching a specific collection. Does not require auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.repo.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"repo","wireName":"repo","location":"query","required":true,"nullable":false},
    {"name":"collection","wireName":"collection","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false},
    {"name":"reverse","wireName":"reverse","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    repo: Schema.String,
    collection: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
    reverse: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.ListRecordsResponse,
});

export const bluesky_sync_listRepos = defineEndpointDescriptor({
  id: "bluesky.sync.listRepos",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.sync.listRepos",
  summary: "Enumerates all the DID, rev, and commit CID for all repos hosted by this service. Does not require auth; implemented by PDS and Relay.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.sync.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ListReposResponse,
});

export const bluesky_sync_listReposByCollection = defineEndpointDescriptor({
  id: "bluesky.sync.listReposByCollection",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.sync.listReposByCollection",
  summary: "Enumerates all the DIDs which have records with the given collection NSID.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.sync.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"collection","wireName":"collection","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    collection: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ListReposByCollectionResponse,
});

export const bluesky_graph_muteActor = defineEndpointDescriptor({
  id: "bluesky.graph.muteActor",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.graph.muteActor",
  summary: "Creates a mute relationship for the specified account. If a mute already exists for the account, it is updated in place: the stored scope is replaced with the scope in this request. Mutes are private in Bluesky. Requires auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actor","wireName":"actor","location":"body","required":true,"nullable":false},
    {"name":"onlyReposts","wireName":"onlyReposts","location":"body","required":false,"nullable":false},
    {"name":"onlyQuoteposts","wireName":"onlyQuoteposts","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actor: Schema.String,
    onlyReposts: Schema.optional(Schema.Boolean),
    onlyQuoteposts: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.MuteActorResponse,
});

export const bluesky_graph_muteActorList = defineEndpointDescriptor({
  id: "bluesky.graph.muteActorList",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.graph.muteActorList",
  summary: "Creates a mute relationship for the specified list of accounts. Mutes are private in Bluesky. Requires auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"list","wireName":"list","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    list: Schema.String,
  }),
  outputSchema: Models.MuteActorListResponse,
});

export const bluesky_graph_muteThread = defineEndpointDescriptor({
  id: "bluesky.graph.muteThread",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.graph.muteThread",
  summary: "Mutes a thread preventing notifications from the thread and any of its children. Mutes are private in Bluesky. Requires auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"root","wireName":"root","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    root: Schema.String,
  }),
  outputSchema: Models.MuteThreadResponse,
});

export const bluesky_sync_notifyOfUpdate = defineEndpointDescriptor({
  id: "bluesky.sync.notifyOfUpdate",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.sync.notifyOfUpdate",
  summary: "Notify a crawling service of a recent update, and that crawling should resume. Intended use is after a gap between repo stream events caused the crawling service to disconnect. Does not require auth; implemented by Relay. DEPRECATED: just use com.atproto.sync.requestCrawl",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.sync.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"hostname","wireName":"hostname","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    hostname: Schema.String,
  }),
  outputSchema: Models.NotifyOfUpdateResponse,
});

export const bluesky_notification_putActivitySubscription = defineEndpointDescriptor({
  id: "bluesky.notification.putActivitySubscription",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.notification.putActivitySubscription",
  summary: "Puts an activity subscription entry. The key should be omitted for creation and provided for updates. Requires auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.notification.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"subject","wireName":"subject","location":"body","required":true,"nullable":false},
    {"name":"activitySubscription","wireName":"activitySubscription","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    subject: Schema.String,
    activitySubscription: Models.AppBskyNotificationDefsActivitySubscription,
  }),
  outputSchema: Models.PutActivitySubscriptionResponse,
});

export const bluesky_actor_putPreferences = defineEndpointDescriptor({
  id: "bluesky.actor.putPreferences",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.actor.putPreferences",
  summary: "Set the private preferences attached to the account.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.actor.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"preferences","wireName":"preferences","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    preferences: Models.AppBskyActorDefsPreferences,
  }),
  outputSchema: Models.PutPreferencesResponse,
});

export const bluesky_notification_putPreferences2 = defineEndpointDescriptor({
  id: "bluesky.notification.putPreferences2",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.notification.putPreferences",
  summary: "Set notification-related preferences for an account. Requires auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.notification.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"priority","wireName":"priority","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    priority: Schema.Boolean,
  }),
  outputSchema: Models.PutPreferencesResponse,
});

export const bluesky_notification_putPreferencesV2 = defineEndpointDescriptor({
  id: "bluesky.notification.putPreferencesV2",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.notification.putPreferencesV2",
  summary: "Set notification-related preferences for an account. Requires auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.notification.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"chat","wireName":"chat","location":"body","required":false,"nullable":false},
    {"name":"follow","wireName":"follow","location":"body","required":false,"nullable":false},
    {"name":"like","wireName":"like","location":"body","required":false,"nullable":false},
    {"name":"likeViaRepost","wireName":"likeViaRepost","location":"body","required":false,"nullable":false},
    {"name":"mention","wireName":"mention","location":"body","required":false,"nullable":false},
    {"name":"quote","wireName":"quote","location":"body","required":false,"nullable":false},
    {"name":"reply","wireName":"reply","location":"body","required":false,"nullable":false},
    {"name":"repost","wireName":"repost","location":"body","required":false,"nullable":false},
    {"name":"repostViaRepost","wireName":"repostViaRepost","location":"body","required":false,"nullable":false},
    {"name":"starterpackJoined","wireName":"starterpackJoined","location":"body","required":false,"nullable":false},
    {"name":"subscribedPost","wireName":"subscribedPost","location":"body","required":false,"nullable":false},
    {"name":"unverified","wireName":"unverified","location":"body","required":false,"nullable":false},
    {"name":"verified","wireName":"verified","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    chat: Schema.optional(Models.AppBskyNotificationDefsChatPreference),
    follow: Schema.optional(Models.AppBskyNotificationDefsFilterablePreference),
    like: Schema.optional(Models.AppBskyNotificationDefsFilterablePreference),
    likeViaRepost: Schema.optional(Models.AppBskyNotificationDefsFilterablePreference),
    mention: Schema.optional(Models.AppBskyNotificationDefsFilterablePreference),
    quote: Schema.optional(Models.AppBskyNotificationDefsFilterablePreference),
    reply: Schema.optional(Models.AppBskyNotificationDefsFilterablePreference),
    repost: Schema.optional(Models.AppBskyNotificationDefsFilterablePreference),
    repostViaRepost: Schema.optional(Models.AppBskyNotificationDefsFilterablePreference),
    starterpackJoined: Schema.optional(Models.AppBskyNotificationDefsPreference),
    subscribedPost: Schema.optional(Models.AppBskyNotificationDefsPreference),
    unverified: Schema.optional(Models.AppBskyNotificationDefsPreference),
    verified: Schema.optional(Models.AppBskyNotificationDefsPreference),
  }),
  outputSchema: Models.PutPreferencesV2Response,
});

export const bluesky_repo_putRecord = defineEndpointDescriptor({
  id: "bluesky.repo.putRecord",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.repo.putRecord",
  summary: "Write a repository record, creating or updating it as needed. Requires auth, implemented by PDS.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.repo.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"repo","wireName":"repo","location":"body","required":true,"nullable":false},
    {"name":"collection","wireName":"collection","location":"body","required":true,"nullable":false},
    {"name":"rkey","wireName":"rkey","location":"body","required":true,"nullable":false},
    {"name":"validate","wireName":"validate","location":"body","required":false,"nullable":false},
    {"name":"record","wireName":"record","location":"body","required":true,"nullable":false},
    {"name":"swapRecord","wireName":"swapRecord","location":"body","required":false,"nullable":false},
    {"name":"swapCommit","wireName":"swapCommit","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    repo: Schema.String,
    collection: Schema.String,
    rkey: Schema.String,
    validate: Schema.optional(Schema.Boolean),
    record: Schema.Unknown,
    swapRecord: Schema.optional(Schema.String),
    swapCommit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.PutRecordResponse,
});

export const bluesky_label_queryLabels = defineEndpointDescriptor({
  id: "bluesky.label.queryLabels",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.label.queryLabels",
  summary: "Find labels relevant to the provided AT-URI patterns. Public endpoint for moderation services, though may return different or additional results with auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.label.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"uriPatterns","wireName":"uriPatterns","location":"query","required":true,"nullable":false},
    {"name":"sources","wireName":"sources","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    uriPatterns: Schema.Array(Schema.String),
    sources: Schema.optional(Schema.Array(Schema.String)),
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.QueryLabelsResponse,
});

export const bluesky_identity_refreshIdentity = defineEndpointDescriptor({
  id: "bluesky.identity.refreshIdentity",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.identity.refreshIdentity",
  summary: "Request that the server re-resolve an identity (DID and handle). The server may ignore this request, or require authentication, depending on the role, implementation, and policy of the server.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.identity.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"identifier","wireName":"identifier","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    identifier: Schema.String,
  }),
  outputSchema: Models.RefreshIdentityResponse,
});

export const bluesky_server_refreshSession = defineEndpointDescriptor({
  id: "bluesky.server.refreshSession",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.refreshSession",
  summary: "Refresh an authentication session. Requires auth using the 'refreshJwt' (not the 'accessJwt').",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.RefreshSessionResponse,
});

export const bluesky_notification_registerPush = defineEndpointDescriptor({
  id: "bluesky.notification.registerPush",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.notification.registerPush",
  summary: "Register to receive push notifications, via a specified service, for the requesting account. Requires auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.notification.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"serviceDid","wireName":"serviceDid","location":"body","required":true,"nullable":false},
    {"name":"token","wireName":"token","location":"body","required":true,"nullable":false},
    {"name":"platform","wireName":"platform","location":"body","required":true,"nullable":false},
    {"name":"appId","wireName":"appId","location":"body","required":true,"nullable":false},
    {"name":"ageRestricted","wireName":"ageRestricted","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    serviceDid: Schema.String,
    token: Schema.String,
    platform: Schema.String,
    appId: Schema.String,
    ageRestricted: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.RegisterPushResponse,
});

export const bluesky_contact_removeData = defineEndpointDescriptor({
  id: "bluesky.contact.removeData",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.contact.removeData",
  summary: "Removes all stored hashes used for contact matching, existing matches, and sync status. Requires authentication.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.contact.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.RemoveDataResponse,
});

export const bluesky_server_requestAccountDelete = defineEndpointDescriptor({
  id: "bluesky.server.requestAccountDelete",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.requestAccountDelete",
  summary: "Initiate a user account deletion via email.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.RequestAccountDeleteResponse,
});

export const bluesky_sync_requestCrawl = defineEndpointDescriptor({
  id: "bluesky.sync.requestCrawl",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.sync.requestCrawl",
  summary: "Request a service to persistently crawl hosted repos. Expected use is new PDS instances declaring their existence to Relays. Does not require auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.sync.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"hostname","wireName":"hostname","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    hostname: Schema.String,
  }),
  outputSchema: Models.RequestCrawlResponse,
});

export const bluesky_server_requestEmailConfirmation = defineEndpointDescriptor({
  id: "bluesky.server.requestEmailConfirmation",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.requestEmailConfirmation",
  summary: "Request an email with a code to confirm ownership of email.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.RequestEmailConfirmationResponse,
});

export const bluesky_server_requestEmailUpdate = defineEndpointDescriptor({
  id: "bluesky.server.requestEmailUpdate",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.requestEmailUpdate",
  summary: "Request a token in order to update email.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.RequestEmailUpdateResponse,
});

export const bluesky_server_requestPasswordReset = defineEndpointDescriptor({
  id: "bluesky.server.requestPasswordReset",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.requestPasswordReset",
  summary: "Initiate a user account password reset via email.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"email","wireName":"email","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    email: Schema.String,
  }),
  outputSchema: Models.RequestPasswordResetResponse,
});

export const bluesky_temp_requestPhoneVerification = defineEndpointDescriptor({
  id: "bluesky.temp.requestPhoneVerification",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.temp.requestPhoneVerification",
  summary: "Request a verification code to be sent to the supplied phone number",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.temp.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"phoneNumber","wireName":"phoneNumber","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    phoneNumber: Schema.String,
  }),
  outputSchema: Models.RequestPhoneVerificationResponse,
});

export const bluesky_identity_requestPlcOperationSignature = defineEndpointDescriptor({
  id: "bluesky.identity.requestPlcOperationSignature",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.identity.requestPlcOperationSignature",
  summary: "Request an email with a code to in order to request a signed PLC operation. Requires Auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.identity.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.RequestPlcOperationSignatureResponse,
});

export const bluesky_server_reserveSigningKey = defineEndpointDescriptor({
  id: "bluesky.server.reserveSigningKey",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.reserveSigningKey",
  summary: "Reserve a repo signing key, for use with account creation. Necessary so that a DID PLC update operation can be constructed during an account migraiton. Public and does not require auth; implemented by PDS. NOTE: this endpoint may change when full account migration is implemented.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ReserveSigningKeyResponse,
});

export const bluesky_server_resetPassword = defineEndpointDescriptor({
  id: "bluesky.server.resetPassword",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.resetPassword",
  summary: "Reset a user account password using a token.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"token","wireName":"token","location":"body","required":true,"nullable":false},
    {"name":"password","wireName":"password","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    token: Schema.String,
    password: Schema.String,
  }),
  outputSchema: Models.ResetPasswordResponse,
});

export const bluesky_identity_resolveDid = defineEndpointDescriptor({
  id: "bluesky.identity.resolveDid",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.identity.resolveDid",
  summary: "Resolves DID to DID document. Does not bi-directionally verify handle.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.identity.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
  }),
  outputSchema: Models.ResolveDidResponse,
});

export const bluesky_identity_resolveHandle = defineEndpointDescriptor({
  id: "bluesky.identity.resolveHandle",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.identity.resolveHandle",
  summary: "Resolves an atproto handle (hostname) to a DID. Does not necessarily bi-directionally verify against the the DID document.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.identity.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"handle","wireName":"handle","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    handle: Schema.String,
  }),
  outputSchema: Models.ResolveHandleResponse,
});

export const bluesky_identity_resolveIdentity = defineEndpointDescriptor({
  id: "bluesky.identity.resolveIdentity",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.identity.resolveIdentity",
  summary: "Resolves an identity (DID or Handle) to a full identity (DID document and verified handle).",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.identity.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"identifier","wireName":"identifier","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    identifier: Schema.String,
  }),
  outputSchema: Models.ResolveIdentityResponse,
});

export const bluesky_lexicon_resolveLexicon = defineEndpointDescriptor({
  id: "bluesky.lexicon.resolveLexicon",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.lexicon.resolveLexicon",
  summary: "Resolves an atproto lexicon (NSID) to a schema.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.lexicon.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"nsid","wireName":"nsid","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    nsid: Schema.String,
  }),
  outputSchema: Models.ResolveLexiconResponse,
});

export const bluesky_temp_revokeAccountCredentials = defineEndpointDescriptor({
  id: "bluesky.temp.revokeAccountCredentials",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.temp.revokeAccountCredentials",
  summary: "Revoke sessions, password, and app passwords associated with account. May be resolved by a password reset.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.temp.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"account","wireName":"account","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    account: Schema.String,
  }),
  outputSchema: Models.RevokeAccountCredentialsResponse,
});

export const bluesky_server_revokeAppPassword = defineEndpointDescriptor({
  id: "bluesky.server.revokeAppPassword",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.revokeAppPassword",
  summary: "Revoke an App Password by name.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.RevokeAppPasswordResponse,
});

export const bluesky_admin_searchAccounts = defineEndpointDescriptor({
  id: "bluesky.admin.searchAccounts",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/com.atproto.admin.searchAccounts",
  summary: "Get list of accounts that matches your search query.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.admin.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"email","wireName":"email","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    email: Schema.optional(Schema.String),
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.SearchAccountsResponse,
});

export const bluesky_actor_searchActors = defineEndpointDescriptor({
  id: "bluesky.actor.searchActors",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.actor.searchActors",
  summary: "Find actors (profiles) matching search criteria. Does not require auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.actor.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"term","wireName":"term","location":"query","required":false,"nullable":false},
    {"name":"q","wireName":"q","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    term: Schema.optional(Schema.String),
    q: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SearchActorsResponse,
});

export const bluesky_unspecced_searchActorsSkeleton = defineEndpointDescriptor({
  id: "bluesky.unspecced.searchActorsSkeleton",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.searchActorsSkeleton",
  summary: "Backend Actors (profile) search, returns only skeleton.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"q","wireName":"q","location":"query","required":true,"nullable":false},
    {"name":"viewer","wireName":"viewer","location":"query","required":false,"nullable":false},
    {"name":"typeahead","wireName":"typeahead","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    q: Schema.String,
    viewer: Schema.optional(Schema.String),
    typeahead: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SearchActorsSkeletonResponse,
});

export const bluesky_actor_searchActorsTypeahead = defineEndpointDescriptor({
  id: "bluesky.actor.searchActorsTypeahead",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.actor.searchActorsTypeahead",
  summary: "Find actor suggestions for a prefix search term. Expected use is for auto-completion during text field entry. Does not require auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.actor.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"term","wireName":"term","location":"query","required":false,"nullable":false},
    {"name":"q","wireName":"q","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    term: Schema.optional(Schema.String),
    q: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.SearchActorsTypeaheadResponse,
});

export const bluesky_feed_searchPosts = defineEndpointDescriptor({
  id: "bluesky.feed.searchPosts",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.searchPosts",
  summary: "Find posts matching search criteria, returning views of those posts. Note that this API endpoint may require authentication (eg, not public) for some service providers and implementations.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"q","wireName":"q","location":"query","required":true,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false},
    {"name":"since","wireName":"since","location":"query","required":false,"nullable":false},
    {"name":"until","wireName":"until","location":"query","required":false,"nullable":false},
    {"name":"mentions","wireName":"mentions","location":"query","required":false,"nullable":false},
    {"name":"author","wireName":"author","location":"query","required":false,"nullable":false},
    {"name":"lang","wireName":"lang","location":"query","required":false,"nullable":false},
    {"name":"domain","wireName":"domain","location":"query","required":false,"nullable":false},
    {"name":"url","wireName":"url","location":"query","required":false,"nullable":false},
    {"name":"tag","wireName":"tag","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    q: Schema.String,
    sort: Schema.optional(Schema.String),
    since: Schema.optional(Schema.String),
    until: Schema.optional(Schema.String),
    mentions: Schema.optional(Schema.String),
    author: Schema.optional(Schema.String),
    lang: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    tag: Schema.optional(Schema.Array(Schema.String)),
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SearchPostsResponse,
});

export const bluesky_unspecced_searchPostsSkeleton = defineEndpointDescriptor({
  id: "bluesky.unspecced.searchPostsSkeleton",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.searchPostsSkeleton",
  summary: "Backend Posts search, returns only skeleton",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"q","wireName":"q","location":"query","required":true,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false},
    {"name":"since","wireName":"since","location":"query","required":false,"nullable":false},
    {"name":"until","wireName":"until","location":"query","required":false,"nullable":false},
    {"name":"mentions","wireName":"mentions","location":"query","required":false,"nullable":false},
    {"name":"author","wireName":"author","location":"query","required":false,"nullable":false},
    {"name":"lang","wireName":"lang","location":"query","required":false,"nullable":false},
    {"name":"domain","wireName":"domain","location":"query","required":false,"nullable":false},
    {"name":"url","wireName":"url","location":"query","required":false,"nullable":false},
    {"name":"tag","wireName":"tag","location":"query","required":false,"nullable":false},
    {"name":"viewer","wireName":"viewer","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    q: Schema.String,
    sort: Schema.optional(Schema.String),
    since: Schema.optional(Schema.String),
    until: Schema.optional(Schema.String),
    mentions: Schema.optional(Schema.String),
    author: Schema.optional(Schema.String),
    lang: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    tag: Schema.optional(Schema.Array(Schema.String)),
    viewer: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SearchPostsSkeletonResponse,
});

export const bluesky_feed_searchPostsV2 = defineEndpointDescriptor({
  id: "bluesky.feed.searchPostsV2",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.feed.searchPostsV2",
  summary: "Find posts matching a search query or filters, returning search hits for matching post records.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"query","wireName":"query","location":"query","required":false,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false},
    {"name":"authors","wireName":"authors","location":"query","required":false,"nullable":false},
    {"name":"mentions","wireName":"mentions","location":"query","required":false,"nullable":false},
    {"name":"domains","wireName":"domains","location":"query","required":false,"nullable":false},
    {"name":"urls","wireName":"urls","location":"query","required":false,"nullable":false},
    {"name":"embeddedAtUris","wireName":"embeddedAtUris","location":"query","required":false,"nullable":false},
    {"name":"hashtags","wireName":"hashtags","location":"query","required":false,"nullable":false},
    {"name":"excludeAuthors","wireName":"excludeAuthors","location":"query","required":false,"nullable":false},
    {"name":"excludeMentions","wireName":"excludeMentions","location":"query","required":false,"nullable":false},
    {"name":"excludeDomains","wireName":"excludeDomains","location":"query","required":false,"nullable":false},
    {"name":"excludeUrls","wireName":"excludeUrls","location":"query","required":false,"nullable":false},
    {"name":"excludeEmbeddedAtUris","wireName":"excludeEmbeddedAtUris","location":"query","required":false,"nullable":false},
    {"name":"excludeHashtags","wireName":"excludeHashtags","location":"query","required":false,"nullable":false},
    {"name":"since","wireName":"since","location":"query","required":false,"nullable":false},
    {"name":"until","wireName":"until","location":"query","required":false,"nullable":false},
    {"name":"allTime","wireName":"allTime","location":"query","required":false,"nullable":false},
    {"name":"languages","wireName":"languages","location":"query","required":false,"nullable":false},
    {"name":"excludeLanguages","wireName":"excludeLanguages","location":"query","required":false,"nullable":false},
    {"name":"hasMedia","wireName":"hasMedia","location":"query","required":false,"nullable":false},
    {"name":"hasVideo","wireName":"hasVideo","location":"query","required":false,"nullable":false},
    {"name":"replyParentUri","wireName":"replyParentUri","location":"query","required":false,"nullable":false},
    {"name":"threadRootUri","wireName":"threadRootUri","location":"query","required":false,"nullable":false},
    {"name":"excludeReplies","wireName":"excludeReplies","location":"query","required":false,"nullable":false},
    {"name":"repliesOnly","wireName":"repliesOnly","location":"query","required":false,"nullable":false},
    {"name":"following","wireName":"following","location":"query","required":false,"nullable":false},
    {"name":"queryLanguage","wireName":"queryLanguage","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    query: Schema.optional(Schema.String),
    sort: Schema.optional(Schema.String),
    authors: Schema.optional(Schema.Array(Schema.String)),
    mentions: Schema.optional(Schema.Array(Schema.String)),
    domains: Schema.optional(Schema.Array(Schema.String)),
    urls: Schema.optional(Schema.Array(Schema.String)),
    embeddedAtUris: Schema.optional(Schema.Array(Schema.String)),
    hashtags: Schema.optional(Schema.Array(Schema.String)),
    excludeAuthors: Schema.optional(Schema.Array(Schema.String)),
    excludeMentions: Schema.optional(Schema.Array(Schema.String)),
    excludeDomains: Schema.optional(Schema.Array(Schema.String)),
    excludeUrls: Schema.optional(Schema.Array(Schema.String)),
    excludeEmbeddedAtUris: Schema.optional(Schema.Array(Schema.String)),
    excludeHashtags: Schema.optional(Schema.Array(Schema.String)),
    since: Schema.optional(Schema.String),
    until: Schema.optional(Schema.String),
    allTime: Schema.optional(Schema.Boolean),
    languages: Schema.optional(Schema.Array(Schema.String)),
    excludeLanguages: Schema.optional(Schema.Array(Schema.String)),
    hasMedia: Schema.optional(Schema.Boolean),
    hasVideo: Schema.optional(Schema.Boolean),
    replyParentUri: Schema.optional(Schema.String),
    threadRootUri: Schema.optional(Schema.String),
    excludeReplies: Schema.optional(Schema.Boolean),
    repliesOnly: Schema.optional(Schema.Boolean),
    following: Schema.optional(Schema.Boolean),
    queryLanguage: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SearchPostsV2Response,
});

export const bluesky_graph_searchStarterPacks = defineEndpointDescriptor({
  id: "bluesky.graph.searchStarterPacks",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.searchStarterPacks",
  summary: "Find starter packs matching search criteria. Does not require auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"q","wireName":"q","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    q: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SearchStarterPacksResponse,
});

export const bluesky_unspecced_searchStarterPacksSkeleton = defineEndpointDescriptor({
  id: "bluesky.unspecced.searchStarterPacksSkeleton",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.unspecced.searchStarterPacksSkeleton",
  summary: "Backend Starter Pack search, returns only skeleton.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.unspecced.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"q","wireName":"q","location":"query","required":true,"nullable":false},
    {"name":"viewer","wireName":"viewer","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    q: Schema.String,
    viewer: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SearchStarterPacksSkeletonResponse,
});

export const bluesky_graph_searchStarterPacksV2 = defineEndpointDescriptor({
  id: "bluesky.graph.searchStarterPacksV2",
  platform: "bluesky",
  method: "GET",
  path: "/xrpc/app.bsky.graph.searchStarterPacksV2",
  summary: "Find starter packs matching search criteria. Does not require auth.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.read"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"q","wireName":"q","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    q: Schema.String,
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SearchStarterPacksV2Response,
});

export const bluesky_admin_sendEmail = defineEndpointDescriptor({
  id: "bluesky.admin.sendEmail",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.admin.sendEmail",
  summary: "Send email to a user's account email address.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.admin.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"recipientDid","wireName":"recipientDid","location":"body","required":true,"nullable":false},
    {"name":"content","wireName":"content","location":"body","required":true,"nullable":false},
    {"name":"subject","wireName":"subject","location":"body","required":false,"nullable":false},
    {"name":"senderDid","wireName":"senderDid","location":"body","required":true,"nullable":false},
    {"name":"comment","wireName":"comment","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    recipientDid: Schema.String,
    content: Schema.String,
    subject: Schema.optional(Schema.String),
    senderDid: Schema.String,
    comment: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SendEmailResponse,
});

export const bluesky_feed_sendInteractions = defineEndpointDescriptor({
  id: "bluesky.feed.sendInteractions",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.feed.sendInteractions",
  summary: "Send information about interactions with feed items back to the feed generator that served them.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.feed.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"feed","wireName":"feed","location":"body","required":false,"nullable":false},
    {"name":"interactions","wireName":"interactions","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    feed: Schema.optional(Schema.String),
    interactions: Schema.Array(Schema.suspend(() => Models.AppBskyFeedDefsInteraction)),
  }),
  outputSchema: Models.SendInteractionsResponse,
});

export const bluesky_contact_sendNotification = defineEndpointDescriptor({
  id: "bluesky.contact.sendNotification",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.contact.sendNotification",
  summary: "System endpoint to send notifications related to contact imports. Requires role authentication.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.contact.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"from","wireName":"from","location":"body","required":true,"nullable":false},
    {"name":"to","wireName":"to","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    from: Schema.String,
    to: Schema.String,
  }),
  outputSchema: Models.SendNotificationResponse,
});

export const bluesky_identity_signPlcOperation = defineEndpointDescriptor({
  id: "bluesky.identity.signPlcOperation",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.identity.signPlcOperation",
  summary: "Signs a PLC operation to update some value(s) in the requesting DID's document.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.identity.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"token","wireName":"token","location":"body","required":false,"nullable":false},
    {"name":"rotationKeys","wireName":"rotationKeys","location":"body","required":false,"nullable":false},
    {"name":"alsoKnownAs","wireName":"alsoKnownAs","location":"body","required":false,"nullable":false},
    {"name":"verificationMethods","wireName":"verificationMethods","location":"body","required":false,"nullable":false},
    {"name":"services","wireName":"services","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    token: Schema.optional(Schema.String),
    rotationKeys: Schema.optional(Schema.Array(Schema.String)),
    alsoKnownAs: Schema.optional(Schema.Array(Schema.String)),
    verificationMethods: Schema.optional(Schema.Unknown),
    services: Schema.optional(Schema.Unknown),
  }),
  outputSchema: Models.SignPlcOperationResponse,
});

export const bluesky_contact_startPhoneVerification = defineEndpointDescriptor({
  id: "bluesky.contact.startPhoneVerification",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.contact.startPhoneVerification",
  summary: "Starts a phone verification flow. The phone passed will receive a code via SMS that should be passed to `app.bsky.contact.verifyPhone`. Requires authentication.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.contact.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"phone","wireName":"phone","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    phone: Schema.String,
  }),
  outputSchema: Models.StartPhoneVerificationResponse,
});

export const bluesky_identity_submitPlcOperation = defineEndpointDescriptor({
  id: "bluesky.identity.submitPlcOperation",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.identity.submitPlcOperation",
  summary: "Validates a PLC operation to ensure that it doesn't violate a service's constraints or get the identity into a bad state, then submits it to the PLC registry",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.identity.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"operation","wireName":"operation","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    operation: Schema.Unknown,
  }),
  outputSchema: Models.SubmitPlcOperationResponse,
});

export const bluesky_graph_unmuteActor = defineEndpointDescriptor({
  id: "bluesky.graph.unmuteActor",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.graph.unmuteActor",
  summary: "Unmutes the specified account. Requires auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"actor","wireName":"actor","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    actor: Schema.String,
  }),
  outputSchema: Models.UnmuteActorResponse,
});

export const bluesky_graph_unmuteActorList = defineEndpointDescriptor({
  id: "bluesky.graph.unmuteActorList",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.graph.unmuteActorList",
  summary: "Unmutes the specified list of accounts. Requires auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"list","wireName":"list","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    list: Schema.String,
  }),
  outputSchema: Models.UnmuteActorListResponse,
});

export const bluesky_graph_unmuteThread = defineEndpointDescriptor({
  id: "bluesky.graph.unmuteThread",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.graph.unmuteThread",
  summary: "Unmutes the specified thread. Requires auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.graph.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"root","wireName":"root","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    root: Schema.String,
  }),
  outputSchema: Models.UnmuteThreadResponse,
});

export const bluesky_notification_unregisterPush = defineEndpointDescriptor({
  id: "bluesky.notification.unregisterPush",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.notification.unregisterPush",
  summary: "The inverse of registerPush - inform a specified service that push notifications should no longer be sent to the given token for the requesting account. Requires auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.notification.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"serviceDid","wireName":"serviceDid","location":"body","required":true,"nullable":false},
    {"name":"token","wireName":"token","location":"body","required":true,"nullable":false},
    {"name":"platform","wireName":"platform","location":"body","required":true,"nullable":false},
    {"name":"appId","wireName":"appId","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    serviceDid: Schema.String,
    token: Schema.String,
    platform: Schema.String,
    appId: Schema.String,
  }),
  outputSchema: Models.UnregisterPushResponse,
});

export const bluesky_admin_updateAccountEmail = defineEndpointDescriptor({
  id: "bluesky.admin.updateAccountEmail",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.admin.updateAccountEmail",
  summary: "Administrative action to update an account's email.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.admin.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"account","wireName":"account","location":"body","required":true,"nullable":false},
    {"name":"email","wireName":"email","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    account: Schema.String,
    email: Schema.String,
  }),
  outputSchema: Models.UpdateAccountEmailResponse,
});

export const bluesky_admin_updateAccountHandle = defineEndpointDescriptor({
  id: "bluesky.admin.updateAccountHandle",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.admin.updateAccountHandle",
  summary: "Administrative action to update an account's handle.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.admin.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"body","required":true,"nullable":false},
    {"name":"handle","wireName":"handle","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
    handle: Schema.String,
  }),
  outputSchema: Models.UpdateAccountHandleResponse,
});

export const bluesky_admin_updateAccountPassword = defineEndpointDescriptor({
  id: "bluesky.admin.updateAccountPassword",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.admin.updateAccountPassword",
  summary: "Update the password for a user account as an administrator.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.admin.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"body","required":true,"nullable":false},
    {"name":"password","wireName":"password","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
    password: Schema.String,
  }),
  outputSchema: Models.UpdateAccountPasswordResponse,
});

export const bluesky_admin_updateAccountSigningKey = defineEndpointDescriptor({
  id: "bluesky.admin.updateAccountSigningKey",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.admin.updateAccountSigningKey",
  summary: "Administrative action to update an account's signing key in their Did document.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.admin.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"did","wireName":"did","location":"body","required":true,"nullable":false},
    {"name":"signingKey","wireName":"signingKey","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    did: Schema.String,
    signingKey: Schema.String,
  }),
  outputSchema: Models.UpdateAccountSigningKeyResponse,
});

export const bluesky_draft_updateDraft = defineEndpointDescriptor({
  id: "bluesky.draft.updateDraft",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.draft.updateDraft",
  summary: "Updates a draft using private storage (stash). If the draft ID points to a non-existing ID, the update will be silently ignored. This is done because updates don't enforce draft limit, so it accepts all writes, but will ignore invalid ones. Requires authentication.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.draft.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"draft","wireName":"draft","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    draft: Models.AppBskyDraftDefsDraftWithId,
  }),
  outputSchema: Models.UpdateDraftResponse,
});

export const bluesky_server_updateEmail = defineEndpointDescriptor({
  id: "bluesky.server.updateEmail",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.server.updateEmail",
  summary: "Update an account's email.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.server.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"email","wireName":"email","location":"body","required":true,"nullable":false},
    {"name":"emailAuthFactor","wireName":"emailAuthFactor","location":"body","required":false,"nullable":false},
    {"name":"token","wireName":"token","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    email: Schema.String,
    emailAuthFactor: Schema.optional(Schema.Boolean),
    token: Schema.optional(Schema.String),
  }),
  outputSchema: Models.UpdateEmailResponse,
});

export const bluesky_identity_updateHandle = defineEndpointDescriptor({
  id: "bluesky.identity.updateHandle",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.identity.updateHandle",
  summary: "Updates the current account's handle. Verifies handle validity, and updates did:plc document if necessary. Implemented by PDS, and requires auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.identity.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"handle","wireName":"handle","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    handle: Schema.String,
  }),
  outputSchema: Models.UpdateHandleResponse,
});

export const bluesky_notification_updateSeen = defineEndpointDescriptor({
  id: "bluesky.notification.updateSeen",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.notification.updateSeen",
  summary: "Notify server that the requesting account has seen notifications. Requires auth.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.notification.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"seenAt","wireName":"seenAt","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    seenAt: Schema.String,
  }),
  outputSchema: Models.UpdateSeenResponse,
});

export const bluesky_admin_updateSubjectStatus = defineEndpointDescriptor({
  id: "bluesky.admin.updateSubjectStatus",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.admin.updateSubjectStatus",
  summary: "Update the service-specific admin status of a subject (account, record, or blob).",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.admin.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"subject","wireName":"subject","location":"body","required":true,"nullable":false},
    {"name":"takedown","wireName":"takedown","location":"body","required":false,"nullable":false},
    {"name":"deactivated","wireName":"deactivated","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    subject: Schema.Union(Schema.suspend(() => Models.ComAtprotoAdminDefsRepoRef), Schema.suspend(() => Models.ComAtprotoRepoStrongRef), Schema.suspend(() => Models.ComAtprotoAdminDefsRepoBlobRef)),
    takedown: Schema.optional(Models.ComAtprotoAdminDefsStatusAttr),
    deactivated: Schema.optional(Models.ComAtprotoAdminDefsStatusAttr),
  }),
  outputSchema: Models.UpdateSubjectStatusResponse,
});

export const bluesky_repo_uploadBlob = defineEndpointDescriptor({
  id: "bluesky.repo.uploadBlob",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/com.atproto.repo.uploadBlob",
  summary: "Upload a new blob, to be referenced from a repository record. The blob will be deleted if it is not referenced within a time window (eg, minutes). Blob restrictions (mimetype, size, etc) are enforced when the reference is created. Requires auth, implemented by PDS.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.repo.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.UploadBlobResponse,
});

export const bluesky_video_uploadVideo = defineEndpointDescriptor({
  id: "bluesky.video.uploadVideo",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.video.uploadVideo",
  summary: "Upload a video to be processed then stored on the PDS.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.video.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.UploadVideoResponse,
});

export const bluesky_contact_verifyPhone = defineEndpointDescriptor({
  id: "bluesky.contact.verifyPhone",
  platform: "bluesky",
  method: "POST",
  path: "/xrpc/app.bsky.contact.verifyPhone",
  summary: "Verifies control over a phone number with a code received via SMS and starts a contact import session. Requires authentication.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["bluesky.contact.manage"],
  rateLimitBucket: "atproto",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"phone","wireName":"phone","location":"body","required":true,"nullable":false},
    {"name":"code","wireName":"code","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    phone: Schema.String,
    code: Schema.String,
  }),
  outputSchema: Models.VerifyPhoneResponse,
});

export const endpointDescriptors = [bluesky_server_activateAccount, bluesky_temp_addReservedHandle, bluesky_repo_applyWrites, bluesky_ageassurance_begin, bluesky_server_checkAccountStatus, bluesky_temp_checkHandleAvailability, bluesky_temp_checkSignupQueue, bluesky_server_confirmEmail, bluesky_server_createAccount, bluesky_server_createAppPassword, bluesky_bookmark_createBookmark, bluesky_draft_createDraft, bluesky_server_createInviteCode, bluesky_server_createInviteCodes, bluesky_repo_createRecord, bluesky_moderation_createReport, bluesky_server_createSession, bluesky_server_deactivateAccount, bluesky_admin_deleteAccount, bluesky_server_deleteAccount2, bluesky_bookmark_deleteBookmark, bluesky_draft_deleteDraft, bluesky_repo_deleteRecord, bluesky_server_deleteSession, bluesky_temp_dereferenceScope, bluesky_feed_describeFeedGenerator, bluesky_repo_describeRepo, bluesky_server_describeServer, bluesky_admin_disableAccountInvites, bluesky_admin_disableInviteCodes, bluesky_contact_dismissMatch, bluesky_admin_enableAccountInvites, bluesky_temp_fetchLabels, bluesky_admin_getAccountInfo, bluesky_admin_getAccountInfos, bluesky_server_getAccountInviteCodes, bluesky_feed_getActorFeeds, bluesky_feed_getActorLikes, bluesky_graph_getActorStarterPacks, bluesky_unspecced_getAgeAssuranceState, bluesky_feed_getAuthorFeed, bluesky_sync_getBlob, bluesky_graph_getBlocks, bluesky_sync_getBlocks2, bluesky_bookmark_getBookmarks, bluesky_sync_getCheckout, bluesky_ageassurance_getConfig, bluesky_unspecced_getConfig2, bluesky_draft_getDrafts, bluesky_embed_getEmbedExternalView, bluesky_feed_getFeed, bluesky_feed_getFeedGenerator, bluesky_feed_getFeedGenerators, bluesky_feed_getFeedSkeleton, bluesky_graph_getFollowers, bluesky_graph_getFollows, bluesky_sync_getHead, bluesky_sync_getHostStatus, bluesky_admin_getInviteCodes, bluesky_video_getJobStatus, bluesky_graph_getKnownFollowers, bluesky_sync_getLatestCommit, bluesky_feed_getLikes, bluesky_graph_getList, bluesky_graph_getListBlocks, bluesky_feed_getListFeed, bluesky_graph_getListMutes, bluesky_graph_getLists, bluesky_graph_getListsWithMembership, bluesky_contact_getMatches, bluesky_graph_getMutes, bluesky_unspecced_getOnboardingSuggestedStarterPacks, bluesky_unspecced_getOnboardingSuggestedStarterPacksSkeleton, bluesky_unspecced_getOnboardingSuggestedUsersSkeleton, bluesky_unspecced_getPopularFeedGenerators, bluesky_feed_getPosts, bluesky_feed_getPostThread, bluesky_unspecced_getPostThreadOtherV2, bluesky_unspecced_getPostThreadV2, bluesky_actor_getPreferences, bluesky_notification_getPreferences2, bluesky_actor_getProfile, bluesky_actor_getProfiles, bluesky_feed_getQuotes, bluesky_identity_getRecommendedDidCredentials, bluesky_repo_getRecord, bluesky_sync_getRecord2, bluesky_graph_getRelationships, bluesky_sync_getRepo, bluesky_sync_getRepoStatus, bluesky_feed_getRepostedBy, bluesky_server_getServiceAuth, bluesky_labeler_getServices, bluesky_server_getSession, bluesky_graph_getStarterPack, bluesky_graph_getStarterPacks, bluesky_graph_getStarterPacksWithMembership, bluesky_ageassurance_getState, bluesky_admin_getSubjectStatus, bluesky_feed_getSuggestedFeeds, bluesky_unspecced_getSuggestedFeeds2, bluesky_unspecced_getSuggestedFeedsSkeleton, bluesky_graph_getSuggestedFollowsByActor, bluesky_unspecced_getSuggestedOnboardingUsers, bluesky_unspecced_getSuggestedStarterPacks, bluesky_unspecced_getSuggestedStarterPacksSkeleton, bluesky_unspecced_getSuggestedUsers, bluesky_unspecced_getSuggestedUsersForDiscover, bluesky_unspecced_getSuggestedUsersForDiscoverSkeleton, bluesky_unspecced_getSuggestedUsersForExplore, bluesky_unspecced_getSuggestedUsersForExploreSkeleton, bluesky_unspecced_getSuggestedUsersForSeeMore, bluesky_unspecced_getSuggestedUsersForSeeMoreSkeleton, bluesky_unspecced_getSuggestedUsersSkeleton, bluesky_actor_getSuggestions, bluesky_unspecced_getSuggestionsSkeleton, bluesky_contact_getSyncStatus, bluesky_unspecced_getTaggedSuggestions, bluesky_feed_getTimeline, bluesky_unspecced_getTrendingTopics, bluesky_unspecced_getTrends, bluesky_unspecced_getTrendsSkeleton, bluesky_notification_getUnreadCount, bluesky_video_getUploadLimits, bluesky_contact_importContacts, bluesky_repo_importRepo, bluesky_unspecced_initAgeAssurance, bluesky_notification_listActivitySubscriptions, bluesky_server_listAppPasswords, bluesky_sync_listBlobs, bluesky_sync_listHosts, bluesky_repo_listMissingBlobs, bluesky_notification_listNotifications, bluesky_repo_listRecords, bluesky_sync_listRepos, bluesky_sync_listReposByCollection, bluesky_graph_muteActor, bluesky_graph_muteActorList, bluesky_graph_muteThread, bluesky_sync_notifyOfUpdate, bluesky_notification_putActivitySubscription, bluesky_actor_putPreferences, bluesky_notification_putPreferences2, bluesky_notification_putPreferencesV2, bluesky_repo_putRecord, bluesky_label_queryLabels, bluesky_identity_refreshIdentity, bluesky_server_refreshSession, bluesky_notification_registerPush, bluesky_contact_removeData, bluesky_server_requestAccountDelete, bluesky_sync_requestCrawl, bluesky_server_requestEmailConfirmation, bluesky_server_requestEmailUpdate, bluesky_server_requestPasswordReset, bluesky_temp_requestPhoneVerification, bluesky_identity_requestPlcOperationSignature, bluesky_server_reserveSigningKey, bluesky_server_resetPassword, bluesky_identity_resolveDid, bluesky_identity_resolveHandle, bluesky_identity_resolveIdentity, bluesky_lexicon_resolveLexicon, bluesky_temp_revokeAccountCredentials, bluesky_server_revokeAppPassword, bluesky_admin_searchAccounts, bluesky_actor_searchActors, bluesky_unspecced_searchActorsSkeleton, bluesky_actor_searchActorsTypeahead, bluesky_feed_searchPosts, bluesky_unspecced_searchPostsSkeleton, bluesky_feed_searchPostsV2, bluesky_graph_searchStarterPacks, bluesky_unspecced_searchStarterPacksSkeleton, bluesky_graph_searchStarterPacksV2, bluesky_admin_sendEmail, bluesky_feed_sendInteractions, bluesky_contact_sendNotification, bluesky_identity_signPlcOperation, bluesky_contact_startPhoneVerification, bluesky_identity_submitPlcOperation, bluesky_graph_unmuteActor, bluesky_graph_unmuteActorList, bluesky_graph_unmuteThread, bluesky_notification_unregisterPush, bluesky_admin_updateAccountEmail, bluesky_admin_updateAccountHandle, bluesky_admin_updateAccountPassword, bluesky_admin_updateAccountSigningKey, bluesky_draft_updateDraft, bluesky_server_updateEmail, bluesky_identity_updateHandle, bluesky_notification_updateSeen, bluesky_admin_updateSubjectStatus, bluesky_repo_uploadBlob, bluesky_video_uploadVideo, bluesky_contact_verifyPhone] as const;
