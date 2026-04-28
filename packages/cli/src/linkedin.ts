import { createClient, createLinkedInOAuth } from "@openpromo/linkedin";
import type { Command } from "commander";
import { z } from "zod";
import { createGroup, defineCommand, option } from "./command.ts";
import { inferContentType, readFileArrayBuffer, readFileBlob, requireValue } from "./common.ts";
import {
  booleanFromCli,
  jsonArrayFromCli,
  jsonObjectFromCli,
  oauthConfig,
  optionalStringArray,
} from "./schemas.ts";

const linkedinAuth = z.object({
  accessToken: z.string().optional(),
  apiVersion: z.string().optional(),
});

const owner = linkedinAuth.extend({ ownerUrn: z.string() });

const linkedInOAuthConfig = oauthConfig.extend({
  clientId: z.string().optional(),
  clientSecret: z.string().optional(),
});

const authOptions = [
  option("--access-token <token>", "LinkedIn access token, defaults to LINKEDIN_ACCESS_TOKEN"),
  option("--api-version <version>", "LinkedIn-Version header value"),
];

const ownerOptions = [...authOptions, option("--owner-urn <urn>", "Owner URN")];

export function registerLinkedInCommands(program: Command): void {
  const linkedin = program.command("linkedin").description("LinkedIn publishing and OAuth");

  registerAccount(linkedin);
  registerAssets(linkedin);
  registerPosts(linkedin);
  registerComments(linkedin);
  registerOAuth(linkedin);
}

function registerAccount(parent: Command): void {
  const account = createGroup(parent, "account", "LinkedIn account and organization operations");

  defineCommand(account, {
    name: "organization-acls",
    description: "List organization ACLs for the authenticated member",
    schema: linkedinAuth.extend({ role: z.string().optional(), state: z.string().optional() }),
    options: [
      ...authOptions,
      option("--role <role>", "Organization role", "ADMINISTRATOR"),
      option("--state <state>", "ACL state", "APPROVED"),
    ],
    action: (input) => createLinkedIn(input).account.listOrganizationAcls(input),
  });

  defineCommand(account, {
    name: "organization",
    description: "Get an organization by URN or numeric id",
    schema: linkedinAuth.extend({ organization: z.string() }),
    options: [...authOptions, option("--organization <urnOrId>", "Organization URN or id")],
    action: (input) => createLinkedIn(input).account.getOrganization(input.organization),
  });
}

function registerAssets(parent: Command): void {
  const assets = createGroup(parent, "assets", "LinkedIn media asset upload operations");

  defineCommand(assets, {
    name: "initialize-image",
    description: "Initialize a LinkedIn image upload",
    schema: owner,
    options: ownerOptions,
    action: (input) => createLinkedIn(input).assets.initializeImageUpload(input.ownerUrn),
  });

  defineCommand(assets, {
    name: "upload-image-url",
    description: "Upload an image from a public URL and return its LinkedIn image URN",
    schema: owner.extend({
      imageUrl: z.string().url(),
      contentType: z.string().optional(),
      includeAuthorization: booleanFromCli.optional(),
    }),
    options: [
      ...ownerOptions,
      option("--image-url <url>", "Public image URL"),
      option("--content-type <type>", "Override upload content type"),
      option("--include-authorization <boolean>", "Include bearer auth on upload request"),
    ],
    action: (input) =>
      createLinkedIn(input).assets.uploadImageFromUrl(input.ownerUrn, input.imageUrl, input),
  });

  defineCommand(assets, {
    name: "upload-image-file",
    description: "Upload a local image file and return its LinkedIn image URN",
    schema: owner.extend({
      file: z.string(),
      contentType: z.string().optional(),
      includeAuthorization: booleanFromCli.optional(),
    }),
    options: [
      ...ownerOptions,
      option("--file <path>", "Local image path"),
      option("--content-type <type>", "Override upload content type"),
      option("--include-authorization <boolean>", "Include bearer auth on upload request"),
    ],
    async action(input) {
      const client = createLinkedIn(input);
      const session = await client.assets.initializeImageUpload(input.ownerUrn);
      await client.assets.uploadImage(
        session.uploadUrl,
        await readFileBlob(
          input.file,
          input.contentType ?? inferContentType(input.file, "image/jpeg"),
        ),
        {
          contentType: input.contentType ?? inferContentType(input.file, "image/jpeg"),
          includeAuthorization: input.includeAuthorization,
        },
      );
      return { imageUrn: session.imageUrn, uploadUrlExpiresAt: session.uploadUrlExpiresAt };
    },
  });

  defineCommand(assets, {
    name: "initialize-video",
    description: "Initialize a LinkedIn video upload",
    schema: owner.extend({
      fileSizeBytes: z.coerce.number(),
      uploadCaptions: booleanFromCli.optional(),
      uploadThumbnail: booleanFromCli.optional(),
    }),
    options: [
      ...ownerOptions,
      option("--file-size-bytes <bytes>", "Video byte length"),
      option("--upload-captions <boolean>", "Request caption upload support"),
      option("--upload-thumbnail <boolean>", "Request thumbnail upload support"),
    ],
    action: (input) =>
      createLinkedIn(input).assets.initializeVideoUpload(
        input.ownerUrn,
        input.fileSizeBytes,
        input,
      ),
  });

  defineCommand(assets, {
    name: "upload-video-url",
    description: "Upload a video from a public URL and return its LinkedIn video URN",
    schema: owner.extend({ videoUrl: z.string().url() }),
    options: [...ownerOptions, option("--video-url <url>", "Public video URL")],
    action: (input) =>
      createLinkedIn(input).assets.uploadVideoFromUrl(input.ownerUrn, input.videoUrl),
  });

  defineCommand(assets, {
    name: "upload-video-file",
    description: "Upload a local video file and return its LinkedIn video URN",
    schema: owner.extend({ file: z.string() }),
    options: [...ownerOptions, option("--file <path>", "Local video path")],
    async action(input) {
      const client = createLinkedIn(input);
      const body = await readFileArrayBuffer(input.file);
      const session = await client.assets.initializeVideoUpload(input.ownerUrn, body.byteLength);
      const uploadedPartIds = await client.assets.uploadVideoChunks(
        session.uploadInstructions,
        body,
      );
      await client.assets.finalizeVideoUpload(
        session.videoUrn,
        uploadedPartIds,
        session.uploadToken,
      );
      return { videoUrn: session.videoUrn, uploadedPartIds };
    },
  });

  defineCommand(assets, {
    name: "finalize-video",
    description: "Finalize a LinkedIn video upload",
    schema: linkedinAuth.extend({
      videoUrn: z.string(),
      uploadedPartIds: optionalStringArray,
      uploadToken: z.string().optional(),
    }),
    options: [
      ...authOptions,
      option("--video-urn <urn>", "Video URN"),
      option("--uploaded-part-ids <ids>", "Comma-separated uploaded part ids"),
      option("--upload-token <token>", "Upload token"),
    ],
    action: async (input) => {
      await createLinkedIn(input).assets.finalizeVideoUpload(
        input.videoUrn,
        input.uploadedPartIds ?? [],
        input.uploadToken,
      );
    },
  });
}

function registerPosts(parent: Command): void {
  const posts = createGroup(parent, "posts", "LinkedIn post operations");
  const author = linkedinAuth.extend({ authorUrn: z.string(), commentary: z.string() });
  const postOptions = [
    ...authOptions,
    option("--author-urn <urn>", "Author person or organization URN"),
    option("--commentary <text>", "Post text"),
  ];

  defineCommand(posts, {
    name: "create-text",
    description: "Create a text post",
    schema: author,
    options: postOptions,
    action: (input) => createLinkedIn(input).posts.createText(input),
  });

  defineCommand(posts, {
    name: "create-image",
    description: "Create a single-image post",
    schema: author.extend({ imageUrn: z.string(), altText: z.string().optional() }),
    options: [
      ...postOptions,
      option("--image-urn <urn>", "LinkedIn image URN"),
      option("--alt-text <text>", "Image alt text"),
    ],
    action: (input) =>
      createLinkedIn(input).posts.createImage({
        ...input,
        options: input.altText ? { altText: input.altText } : undefined,
      }),
  });

  defineCommand(posts, {
    name: "create-multi-image",
    description: "Create a multi-image post from JSON images",
    schema: author.extend({
      images: jsonArrayFromCli.pipe(
        z.array(z.object({ urn: z.string(), altText: z.string().optional() })),
      ),
    }),
    options: [...postOptions, option("--images <json>", "Images JSON array")],
    action: (input) => createLinkedIn(input).posts.createMultiImage(input),
  });

  defineCommand(posts, {
    name: "create-video",
    description: "Create a video post",
    schema: author.extend({ videoUrn: z.string(), title: z.string().optional() }),
    options: [
      ...postOptions,
      option("--video-urn <urn>", "LinkedIn video URN"),
      option("--title <text>", "Video title"),
    ],
    action: (input) => createLinkedIn(input).posts.createVideo(input),
  });

  defineCommand(posts, {
    name: "create-raw",
    description: "Create a raw LinkedIn post body",
    schema: linkedinAuth.extend({ body: jsonObjectFromCli }),
    options: [...authOptions, option("--body <json>", "Raw post body JSON")],
    action: (input) => createLinkedIn(input).posts.createRaw(input.body),
  });

  defineCommand(posts, {
    name: "get",
    description: "Get a LinkedIn post",
    schema: linkedinAuth.extend({
      postUrn: z.string(),
      viewContext: z.enum(["AUTHOR", "READER"]).optional(),
    }),
    options: [
      ...authOptions,
      option("--post-urn <urn>", "Post URN"),
      option("--view-context <context>", "AUTHOR or READER"),
    ],
    action: (input) => createLinkedIn(input).posts.get(input.postUrn, input),
  });

  defineCommand(posts, {
    name: "delete",
    description: "Delete a LinkedIn post",
    schema: linkedinAuth.extend({ postUrn: z.string() }),
    options: [...authOptions, option("--post-urn <urn>", "Post URN")],
    action: async (input) => {
      await createLinkedIn(input).posts.delete(input.postUrn);
    },
  });

  defineCommand(posts, {
    name: "update-commentary",
    description: "Update post commentary",
    schema: linkedinAuth.extend({ postUrn: z.string(), commentary: z.string() }),
    options: [
      ...authOptions,
      option("--post-urn <urn>", "Post URN"),
      option("--commentary <text>", "New post text"),
    ],
    action: async (input) => {
      await createLinkedIn(input).posts.updateCommentary(input.postUrn, input.commentary);
    },
  });
}

function registerComments(parent: Command): void {
  const comments = createGroup(parent, "comments", "LinkedIn comment operations");

  defineCommand(comments, {
    name: "create",
    description: "Create a comment on a post",
    schema: linkedinAuth.extend({
      postUrn: z.string(),
      actorUrn: z.string(),
      text: z.string(),
    }),
    options: [
      ...authOptions,
      option("--post-urn <urn>", "Post URN"),
      option("--actor-urn <urn>", "Actor URN"),
      option("--text <text>", "Comment text"),
    ],
    action: (input) =>
      createLinkedIn(input).comments.create(input.postUrn, input.actorUrn, input.text),
  });
}

function registerOAuth(parent: Command): void {
  const oauth = createGroup(parent, "oauth", "LinkedIn OAuth operations");
  const oauthOptions = [
    option("--client-id <id>", "Client ID, defaults to LINKEDIN_CLIENT_ID"),
    option("--client-secret <secret>", "Client secret, defaults to LINKEDIN_CLIENT_SECRET"),
    option("--redirect-uri <uri>", "Redirect URI, defaults to LINKEDIN_REDIRECT_URI"),
  ];

  defineCommand(oauth, {
    name: "authorization-url",
    description: "Build a LinkedIn OAuth authorization URL",
    schema: linkedInOAuthConfig.extend({
      scopes: optionalStringArray,
      state: z.string().optional(),
    }),
    options: [
      ...oauthOptions,
      option("--scopes <scopes>", "Comma-separated scopes"),
      option("--state <state>", "OAuth state"),
    ],
    action: (input) => ({ url: createLinkedInOAuthClient(input).getAuthorizationUrl(input) }),
  });

  defineCommand(oauth, {
    name: "exchange-code",
    description: "Exchange a LinkedIn OAuth code",
    schema: linkedInOAuthConfig.extend({ code: z.string() }),
    options: [...oauthOptions, option("--code <code>", "OAuth code")],
    action: (input) => createLinkedInOAuthClient(input).exchangeCode(input.code),
  });

  defineCommand(oauth, {
    name: "refresh-token",
    description: "Refresh a LinkedIn OAuth token",
    schema: linkedInOAuthConfig.extend({ refreshToken: z.string() }),
    options: [...oauthOptions, option("--refresh-token <token>", "Refresh token")],
    action: (input) => createLinkedInOAuthClient(input).refreshToken(input.refreshToken),
  });

  defineCommand(oauth, {
    name: "userinfo",
    description: "Get LinkedIn OpenID userinfo",
    schema: z.object({ accessToken: z.string().optional() }),
    options: [option("--access-token <token>", "Access token, defaults to LINKEDIN_ACCESS_TOKEN")],
    action: (input) =>
      createLinkedInOAuthClient({}).getUserInfo(
        requireValue(input.accessToken ?? process.env.LINKEDIN_ACCESS_TOKEN, {
          name: "accessToken",
          env: "LINKEDIN_ACCESS_TOKEN",
        }),
      ),
  });

  defineCommand(oauth, {
    name: "complete",
    description: "Exchange a code and fetch LinkedIn userinfo",
    schema: linkedInOAuthConfig.extend({ code: z.string() }),
    options: [...oauthOptions, option("--code <code>", "OAuth code")],
    action: (input) => createLinkedInOAuthClient(input).completeOAuth(input.code),
  });
}

function createLinkedIn(input: z.output<typeof linkedinAuth>): any {
  return createClient({
    accessToken: requireValue(input.accessToken ?? process.env.LINKEDIN_ACCESS_TOKEN, {
      name: "accessToken",
      env: "LINKEDIN_ACCESS_TOKEN",
    }),
    apiVersion: input.apiVersion ?? process.env.LINKEDIN_API_VERSION,
  });
}

function createLinkedInOAuthClient(input: z.output<typeof linkedInOAuthConfig>): any {
  return createLinkedInOAuth({
    clientId: requireValue(input.clientId ?? process.env.LINKEDIN_CLIENT_ID, {
      name: "clientId",
      env: "LINKEDIN_CLIENT_ID",
    }),
    clientSecret: requireValue(input.clientSecret ?? process.env.LINKEDIN_CLIENT_SECRET, {
      name: "clientSecret",
      env: "LINKEDIN_CLIENT_SECRET",
    }),
    redirectUri: requireValue(input.redirectUri ?? process.env.LINKEDIN_REDIRECT_URI, {
      name: "redirectUri",
      env: "LINKEDIN_REDIRECT_URI",
    }),
  });
}
