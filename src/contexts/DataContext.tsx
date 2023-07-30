'use client'
import { createContext, useContext, useState, ReactNode } from "react";

interface DataContext {
  data: Record<string, string | null>;
  issues: Record<string, string | null>;
}

interface DataContextData {
  dataContext: Record<string, DataContext>;
  setDataContextData: (
    formId: string,
    data: Record<string, string | null>,
    issues: Record<string, string | null>
  ) => void;
}

const DataContext = createContext<DataContextData>({
  dataContext: {},
  setDataContextData: () => { },
});

export function DataContextProvider({ children }: { children: ReactNode }) {
  const [dataContext, setDataContext] = useState<Record<string, DataContext>>({});

  const setDataContextData = (
    formId: string,
    data: Record<string, string | null>,
    issues: Record<string, string | null>
  ) => {
    console.log("DataContext in DataContextProvider prev:", DataContext);

    setDataContext((prevData) => ({
      ...prevData,
      [formId]: {
        data: {
          ...prevData[formId]?.data,
          ...data
        },
        issues: {
          ...prevData[formId]?.issues,
          ...issues
        }
      },
    }));
  };

  console.log("DataContext in DataContextProvider:", dataContext);

  return (
    <DataContext.Provider value={{ dataContext, setDataContextData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
