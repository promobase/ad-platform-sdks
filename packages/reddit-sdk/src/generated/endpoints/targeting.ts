// @generated
// fingerprint: sha256:6efbfbfe4b56da51f3388331aacde4675dd0d418e4051b6051e1c39f8ba7a3f1
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Targeting — do not edit
import type { RedditApiClient } from "../../api-client.ts";
import type { RedditEnvelope } from "../../envelope.ts";
import type { GeolocationValidateRequest } from "../types.ts";
import type { ListTargetingcarriersParams, ListTargetingcommunitiesParams, ListTargetingdevicesParams, ListGeolocationsParams, ValidateGeolocationsParams, ListTargetinginterestsParams } from "../params.ts";

/** Targeting — 6 endpoints */
export function createTargetingClient(api: RedditApiClient) {
  return {
    /** List targetable carriers */
    async listTargetingcarriers(params: ListTargetingcarriersParams): Promise<{

}[]> {
      const query = params;
      const envelope = await api.get<RedditEnvelope>(`/targeting/carriers`, query);
      return envelope.data as {

}[];
    },

    /** List community suggestions */
    async listTargetingcommunities(params: ListTargetingcommunitiesParams): Promise<{

}[]> {
      const query = params;
      const envelope = await api.get<RedditEnvelope>(`/targeting/communities`, query);
      return envelope.data as {

}[];
    },

    /** List targetable devices */
    async listTargetingdevices(params: ListTargetingdevicesParams): Promise<{

}[]> {
      const query = params;
      const envelope = await api.get<RedditEnvelope>(`/targeting/devices`, query);
      return envelope.data as {

}[];
    },

    /** List geolocations */
    async listGeolocations(params: ListGeolocationsParams): Promise<{

}[]> {
      const query = params;
      const envelope = await api.get<RedditEnvelope>(`/targeting/geolocations`, query);
      return envelope.data as {

}[];
    },

    /** Validate geolocations */
    async validateGeolocations(params: ValidateGeolocationsParams): Promise<{

}> {
      const rest = params;
      const envelope = await api.post<RedditEnvelope>(`/targeting/geolocations/validate`, rest);
      return envelope.data as {

};
    },

    /** List interest categories */
    async listTargetinginterests(params: ListTargetinginterestsParams): Promise<{

}[]> {
      const query = params;
      const envelope = await api.get<RedditEnvelope>(`/targeting/interests`, query);
      return envelope.data as {

}[];
    },
  };
}
