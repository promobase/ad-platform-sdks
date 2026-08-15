// @generated
// fingerprint: sha256:8c856e9e727f8e94781eea575e86f732aec5250667c54ec7adfba53fa752c42c
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for ad-squad-ui-render-data — do not edit

export interface AdSquadUiRenderData {
  id: string;
  ad_squad_id: string;
  conversion_location: string;
}


export interface CreateAdParams {
  adSquadId: string;
  conversion_location: string;
}


export interface ListAdSquadUiRenderDataParams {
  adAccountId: string;
  limit?: string;
}
