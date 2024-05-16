export interface CurrencyRate {
  currency: string;
  values: string[];
}

export interface ExchangeRateCategory {
  category: string;
  rates: CurrencyRate[];
}

export interface MyObject {
  data: ExchangeRateCategory[];
  bdate: string;
}
