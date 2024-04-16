"use client";

import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { ApiService } from "./api";
import { useEnvironment } from "../config";

export type ServiceContextProps = {
  apiService: ApiService;
};

export const ServiceContext = createContext<ServiceContextProps | undefined>(
  undefined
);

export const ServiceProvider = ({ children }: PropsWithChildren) => {
  const environment = useEnvironment();
  const apiService = useMemo(
    () => new ApiService(environment.apiBaseUrl),
    [environment.apiBaseUrl]
  );

  return (
    <ServiceContext.Provider
      value={{
        apiService,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => {
  const context = useContext(ServiceContext);

  if (context === undefined) {
    throw new Error("useService must be used within a ServiceProvider");
  }

  return context;
};
