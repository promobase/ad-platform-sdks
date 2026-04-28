import type { LinkedInClient } from "./client.ts";
import type { LinkedInUrn } from "./types.ts";

export interface LinkedInOrganizationAcl {
  role: string;
  organization: LinkedInUrn;
  roleAssignee: LinkedInUrn;
  state: string;
}

export interface LinkedInOrganization {
  id: number;
  vanityName?: string;
  localizedName: string;
  localizedWebsite?: string;
  primaryOrganizationType?: string;
}

export function createAccount(client: LinkedInClient) {
  return {
    async listOrganizationAcls(opts?: {
      role?: string;
      state?: string;
    }): Promise<LinkedInOrganizationAcl[]> {
      const response = await client.request<{ elements?: LinkedInOrganizationAcl[] }>(
        "/organizationAcls",
        {
          query: {
            q: "roleAssignee",
            role: opts?.role ?? "ADMINISTRATOR",
            state: opts?.state ?? "APPROVED",
          },
        },
      );

      return response.data.elements ?? [];
    },

    async getOrganization(
      organizationUrnOrId: LinkedInUrn | string,
    ): Promise<LinkedInOrganization> {
      const id = String(organizationUrnOrId).replace("urn:li:organization:", "");
      const response = await client.request<LinkedInOrganization>(`/organizations/${id}`);
      return response.data;
    },
  };
}
