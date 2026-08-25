export type RoutingKey = "nk" | "hk";

export type RolloutPercentage = 25 | 50 | 75 | 100;

export interface GlobalConfig {
  enabled: boolean;
  percentage: RolloutPercentage;
  key: RoutingKey;
}

export interface CountryConfig {
  name: string;
  code: string;

  useGlobal: boolean;

  enabled: boolean;
  percentage: RolloutPercentage;
  key: RoutingKey;
}

export interface ClientConfigDocument {
  _id: string;

  nk: string;
  hk: string;

  global: GlobalConfig;

  countries: CountryConfig[];

  version: number;

  updatedAt: Date;
}