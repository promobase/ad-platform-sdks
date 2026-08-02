// Auto-generated types for BC Payment Portfolios — do not edit

export interface PaymentPortfolioGetParams {
  bc_id: string;
  filtering?: {
  payment_portfolio_ids?: string[];
  payment_portfolio_type?: "SHARED" | "NON_SHARED";
  bc_related?: boolean;
};
  page?: number;
  page_size?: number;
}


export interface PaymentPortfolioGetResponse {
  payment_portfolio_list?: {
  payment_portfolio_id?: string;
  payment_portfolio_name?: string;
  payment_portfolio_type?: "SHARED" | "NON_SHARED";
  linked_advertiser_account_count?: number;
  user_count?: number;
  cash_balance_list?: {
  currency?: string;
  amount?: number;
}[];
  credit_line_allocation?: {
  allocated_amount?: number;
  used_amount?: number;
  available_amount?: number;
  min_allocation_percentage?: number;
};
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface PaymentPortfolioCreateParams {
  payment_portfolio_name: string;
  advertiser_ids: string[];
  payment_portfolio_type?: string;
}


export interface PaymentPortfolioCreateResponse {
  payment_portfolio_id?: string;
  payment_portfolio_name?: string;
  payment_portfolio_type?: string;
}


export interface PaymentPortfolioAdvertiserUpdateParams {
  payment_portfolio_id: string;
  advertiser_ids: string[];
}


export interface PaymentPortfolioAdvertiserUpdateResponse {}


export interface PaymentPortfolioCreditLineUpdateParams {
  allocation_details: {
  payment_portfolio_id: string;
  allocation_percentage: number;
}[];
}


export interface PaymentPortfolioCreditLineUpdateResponse {}


export interface PaymentPortfolioAdvertiserGetParams {
  payment_portfolio_id: string;
  page?: number;
  page_size?: number;
}


export interface PaymentPortfolioAdvertiserGetResponse {
  advertiser_list?: {
  advertiser_id?: string;
  advertiser_name?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface PaymentPortfolioUserGetParams {
  payment_portfolio_id: string;
  page?: number;
  page_size?: number;
}


export interface PaymentPortfolioUserGetResponse {
  users?: {
  user_id?: string;
  user_name?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}
