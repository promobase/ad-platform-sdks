import { createClient, createCustomer, Google } from "@openpromo/google-ads";
import type { Command } from "commander";
import { z } from "zod";
import { createGroup, defineCommand, option } from "./command.ts";
import { jsonObjectFromCli, optionalJsonObjectFromCli, optionalStringArray } from "./schemas.ts";

const googleAuth = z.object({
  accessToken: z.string().optional(),
  developerToken: z.string().optional(),
  loginCustomerId: z.string().optional(),
  customerId: z.string().optional(),
});

const authOptions = [
  option("--access-token <token>", "Google Ads OAuth token, defaults to GOOGLE_ADS_ACCESS_TOKEN"),
  option("--developer-token <token>", "Developer token, defaults to GOOGLE_ADS_DEVELOPER_TOKEN"),
  option("--login-customer-id <id>", "Login customer id, defaults to GOOGLE_ADS_LOGIN_CUSTOMER_ID"),
  option("--customer-id <id>", "Customer id, defaults to GOOGLE_ADS_CUSTOMER_ID"),
];

const resourceSchema = googleAuth.extend({
  resourceName: z.string().optional(),
  body: optionalJsonObjectFromCli,
  patch: optionalJsonObjectFromCli,
});

export function registerGoogleAdsCommands(program: Command): void {
  const google = program.command("google-ads").description("Google Ads API operations");

  registerGaql(google);
  registerResource(google, "campaign-budgets", "campaignBudgets");
  registerResource(google, "campaigns", "campaigns");
  registerResource(google, "ad-groups", "adGroups");
  registerResource(google, "ad-group-ads", "adGroupAds");
  registerAds(google);
  registerService(google);
}

function registerGaql(parent: Command): void {
  const gaql = createGroup(parent, "gaql", "Google Ads Query Language operations");

  defineCommand(gaql, {
    name: "search",
    description: "Run a raw GAQL search query",
    schema: googleAuth.extend({
      query: z.string(),
      pageToken: z.string().optional(),
      pageSize: z.coerce.number().optional(),
    }),
    options: [
      ...authOptions,
      option("--query <query>", "GAQL query"),
      option("--page-token <token>", "Page token"),
      option("--page-size <n>", "Page size"),
    ],
    action: (input) =>
      Google.Ads.googleAdsService.search(createGoogle(input).http, customerId(input), {
        query: input.query,
        pageToken: input.pageToken,
        pageSize: input.pageSize,
      }),
  });

  defineCommand(gaql, {
    name: "build",
    description: "Build a GAQL query from resource, fields, and clauses",
    schema: z.object({
      from: z.string(),
      select: optionalStringArray,
      where: z.string().optional(),
      orderBy: z.string().optional(),
      limit: z.coerce.number().optional(),
      parameters: z.string().optional(),
    }),
    options: [
      option("--from <resource>", "GAQL resource"),
      option("--select <fields>", "Comma-separated field list"),
      option("--where <clause>", "WHERE clause"),
      option("--order-by <clause>", "ORDER BY clause"),
      option("--limit <n>", "LIMIT"),
      option("--parameters <clause>", "PARAMETERS clause"),
    ],
    action: (input) => {
      let query = Google.Ads.gaql.from(input.from as never);
      if (input.select?.length) query = query.select(...(input.select as never[])) as never;
      if (input.where) query = query.where(input.where) as never;
      if (input.orderBy) query = query.orderBy(input.orderBy) as never;
      if (input.limit !== undefined) query = query.limit(input.limit) as never;
      if (input.parameters) query = query.parameters(input.parameters) as never;
      return { query: query.toQuery() };
    },
  });
}

function registerResource(parent: Command, cliName: string, clientKey: string): void {
  const group = createGroup(parent, cliName, `Google Ads ${cliName} operations`);

  defineCommand(group, {
    name: "list",
    description: `List ${cliName}`,
    schema: googleAuth,
    options: authOptions,
    action: (input) => resourceClient(input, clientKey).list(),
  });

  defineCommand(group, {
    name: "get",
    description: `Get one ${cliName} resource`,
    schema: googleAuth.extend({ resourceName: z.string() }),
    options: [...authOptions, option("--resource-name <name>", "Resource name")],
    action: (input) => resourceClient(input, clientKey).get(input.resourceName),
  });

  defineCommand(group, {
    name: "create",
    description: `Create one ${cliName} resource from JSON`,
    schema: googleAuth.extend({ body: jsonObjectFromCli }),
    options: [...authOptions, option("--body <json>", "Create body JSON")],
    action: (input) => resourceClient(input, clientKey).create(input.body),
  });

  defineCommand(group, {
    name: "create-many",
    description: `Create many ${cliName} resources from JSON array`,
    schema: googleAuth.extend({
      inputs: z.preprocess((value) => JSON.parse(String(value)), z.array(z.unknown())),
    }),
    options: [...authOptions, option("--inputs <json>", "Create body JSON array")],
    action: (input) => resourceClient(input, clientKey).createMany(input.inputs),
  });

  defineCommand(group, {
    name: "update",
    description: `Update one ${cliName} resource`,
    schema: resourceSchema.extend({ resourceName: z.string(), patch: jsonObjectFromCli }),
    options: [
      ...authOptions,
      option("--resource-name <name>", "Resource name"),
      option("--patch <json>", "Patch JSON"),
    ],
    action: async (input) => {
      await resourceClient(input, clientKey).update(input.resourceName, input.patch);
    },
  });

  defineCommand(group, {
    name: "remove",
    description: `Remove one ${cliName} resource`,
    schema: googleAuth.extend({ resourceName: z.string() }),
    options: [...authOptions, option("--resource-name <name>", "Resource name")],
    action: async (input) => {
      await resourceClient(input, clientKey).remove(input.resourceName);
    },
  });
}

function registerAds(parent: Command): void {
  const ads = createGroup(parent, "ads", "Google Ads read/remove wrapper");

  defineCommand(ads, {
    name: "list",
    description: "List ads",
    schema: googleAuth,
    options: authOptions,
    action: (input) => googleCustomer(input).ads.list(),
  });

  defineCommand(ads, {
    name: "get",
    description: "Get an ad by ad resource name",
    schema: googleAuth.extend({ resourceName: z.string() }),
    options: [...authOptions, option("--resource-name <name>", "Ad resource name")],
    action: (input) => googleCustomer(input).ads.get(input.resourceName),
  });

  defineCommand(ads, {
    name: "remove",
    description: "Remove the containing ad group ad",
    schema: googleAuth.extend({ resourceName: z.string() }),
    options: [...authOptions, option("--resource-name <name>", "AdGroupAd resource name")],
    action: async (input) => {
      await googleCustomer(input).ads.remove(input.resourceName);
    },
  });
}

function registerService(parent: Command): void {
  const service = createGroup(parent, "service", "Raw generated Google Ads service calls");

  defineCommand(service, {
    name: "call",
    description: "Call any generated service function from Google.Ads",
    schema: googleAuth.extend({
      service: z.string(),
      method: z.string(),
      args: optionalJsonObjectFromCli,
    }),
    options: [
      ...authOptions,
      option("--service <name>", "Service object name, e.g. campaignService"),
      option("--method <name>", "Service function name"),
      option("--args <json>", "Request JSON object"),
    ],
    action: (input) => {
      const svc = (Google.Ads as Record<string, unknown>)[input.service];
      if (!svc || typeof svc !== "object")
        throw new Error(`Unknown Google Ads service: ${input.service}`);
      const method = (svc as Record<string, unknown>)[input.method];
      if (typeof method !== "function") {
        throw new Error(`Unknown Google Ads service method: ${input.service}.${input.method}`);
      }
      return method(createGoogle(input).http, customerId(input), input.args ?? {});
    },
  });
}

function createGoogle(input: z.output<typeof googleAuth>) {
  const accessToken = input.accessToken ?? process.env.GOOGLE_ADS_ACCESS_TOKEN;
  if (!accessToken)
    throw new Error("Missing accessToken; pass --access-token or set GOOGLE_ADS_ACCESS_TOKEN");
  const developerToken = input.developerToken ?? process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
  if (!developerToken) {
    throw new Error(
      "Missing developerToken; pass --developer-token or set GOOGLE_ADS_DEVELOPER_TOKEN",
    );
  }
  return createClient({
    getAccessToken: () => accessToken,
    developerToken,
    loginCustomerId: input.loginCustomerId ?? process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID,
  });
}

function customerId(input: z.output<typeof googleAuth>): string {
  const id = input.customerId ?? process.env.GOOGLE_ADS_CUSTOMER_ID;
  if (!id) throw new Error("Missing customerId; pass --customer-id or set GOOGLE_ADS_CUSTOMER_ID");
  return id;
}

function googleCustomer(input: z.output<typeof googleAuth>) {
  return createCustomer(createGoogle(input).http, customerId(input));
}

function resourceClient(input: z.output<typeof googleAuth>, key: string): any {
  return (googleCustomer(input) as unknown as Record<string, unknown>)[key];
}
