"use client";

import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { ApplicationApiService } from "./api";

export type ServiceContextProps = {
  apiService: ApplicationApiService;
};

export const ServiceContext = createContext<ServiceContextProps | undefined>(
  undefined
);

export const ServiceProvider = ({ children }: PropsWithChildren) => {
  const apiService = useMemo(() => new ApplicationApiService(), []);

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
