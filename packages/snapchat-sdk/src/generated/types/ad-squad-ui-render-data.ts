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
