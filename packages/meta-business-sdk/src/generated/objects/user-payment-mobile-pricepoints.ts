export interface UserPaymentMobilePricepointsFields {
  mobile_country: string;
  phone_number_last4: string;
  pricepoints: Record<string, unknown>[];
  user_currency: string;
}

