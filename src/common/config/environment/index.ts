export type EnvironmentConfig = {
  apiBaseUrl: string;
  apiKey: string;
};

export const getEnvValue = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not set.`);
  }
  return value;
};

export const getEnvironmentConfig = (): EnvironmentConfig => {
  return {
    apiBaseUrl: getEnvValue("API_BASE_URL"),
    apiKey: getEnvValue("API_KEY"),
  };
};
