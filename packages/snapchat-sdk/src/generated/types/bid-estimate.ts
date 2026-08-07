// Auto-generated types for bid-estimate — do not edit

export interface BidEstimate {}


export interface ListBidEstimateParams {
  id: string;
}


export interface CreateBidEstimateParams {
  id: string;
  optimization_goal: string;
  targeting: {
  geos: {
    country_code: string;
  }[];
  demographics: {
    age_groups: unknown[];
    gender: string;
  }[];
};
}
