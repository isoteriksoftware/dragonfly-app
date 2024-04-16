import { ApiService } from "..";
import { EnvironmentConfig, getEnvironmentConfig } from "../../config";

export * from "./ApiService";
export * from "./ApplicationApiService";

export const getApiService = (
  environment: EnvironmentConfig = getEnvironmentConfig()
) => {
  return new ApiService(environment.apiBaseUrl, environment.apiKey);
};
