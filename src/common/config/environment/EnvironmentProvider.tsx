"use client";

import { createContext, PropsWithChildren, useContext } from "react";
import { EnvironmentConfig } from "./types";
import {
  developmentEnvironmentConfig,
  productionEnvironmentConfig,
} from "./configs";

export type EnvironmentContextProps = EnvironmentConfig;

export const EnvironmentContext = createContext<
  EnvironmentContextProps | undefined
>(undefined);

export const EnvironmentProvider = ({ children }: PropsWithChildren) => {
  const environmentConfig: EnvironmentConfig =
    process.env.NODE_ENV === "development"
      ? developmentEnvironmentConfig
      : productionEnvironmentConfig;

  return (
    <EnvironmentContext.Provider value={environmentConfig}>
      {children}
    </EnvironmentContext.Provider>
  );
};

export const useEnvironment = () => {
  const context = useContext(EnvironmentContext);

  if (context === undefined) {
    throw new Error(
      "useEnvironment must be used within an EnvironmentProvider"
    );
  }

  return context;
};
