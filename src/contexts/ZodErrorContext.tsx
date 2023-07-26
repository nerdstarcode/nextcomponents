'use client'
import { createContext, useContext, useState, ReactNode } from "react";

interface ZodErrorContextData {
  zodErrors: Record<string, Record<string, string | null>>;
  setZodError: (formId: string, elementId: string, error: string | null) => void;
}


const ZodErrorContext = createContext<ZodErrorContextData>({
  zodErrors: {},
  setZodError: () => { },
});

export function ZodErrorProvider({ children }: { children: ReactNode }) {
  const [zodErrors, setZodErrors] = useState<Record<string, Record<string, string | null>>>({});

  const setZodError = (formId: string, elementId: string, error: string | null) => {
    setZodErrors((prevErrors) => ({
      ...prevErrors,
      [formId]: {
        ...prevErrors[formId],
        [elementId]: error,
      },
    }));
  };
  console.log("zodErrors in ZodErrorProvider:", zodErrors);
  return (
    <ZodErrorContext.Provider value={{ zodErrors, setZodError }}>
      {children}
    </ZodErrorContext.Provider>
  );
}

export function useZodError() {
  return useContext(ZodErrorContext);
}