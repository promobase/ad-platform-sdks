// @generated
// fingerprint: sha256:9ec2b7e10e36c3a831eb6584f06d32af15b0b1f8c8854c27f5bf09d325a6e6f4
// DO NOT EDIT: generated file; changes will be overwritten.
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
