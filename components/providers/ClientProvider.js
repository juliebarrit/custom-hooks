"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ClientContext = createContext({ isClient: false });

export function ClientProvider({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <ClientContext.Provider value={{ isClient }}>
      {children}
    </ClientContext.Provider>
  );
}

export const useClient = () => useContext(ClientContext);
