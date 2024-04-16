export type Environment = "development" | "production";

export type EnvironmentConfig = {
  environment: Environment;
  apiBaseUrl: string;
};
