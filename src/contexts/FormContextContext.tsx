'use client'
import { createContext, useContext, useState, ReactNode } from "react";
interface formData {
  data?: Record<string, string | null>;
  issues?: Record<string, string | null>;
  verification?: Record<string, Record<string, string|null>>;
}
interface FormContextData {
  formContext: Record<string, formData>;
  setFormContextData: ({
    formId,
    data,
    issues,
    verification,
    verificationID
  }: { formId: string, data?: Record<string, string | null>, issues?: Record<string, string | null>, verification?: Record<string, Record<string, string|null>>, verificationID?: string }) => void;
}


const FormContext = createContext<FormContextData>({
  formContext: {},
  setFormContextData: () => { },
});

export function FormDataProvider({ children }: { children: ReactNode }) {
  const [formContext, setFormContext] = useState<Record<string, formData>>({});

  const setFormContextData = (
    {
      formId,
      data,
      issues,
      verification,
      verificationID
    }: { formId: string, data?: Record<string, string | null>, issues?: Record<string, string | null>, verification?: Record<string, Record<string, string|null>>, verificationID?: string }) => {
    console.log("formContext in FormDataProvider prev:", formContext);
    function insertVerification({prevData, verificationID}:any){
      if(verificationID)
      return{
        [verificationID]:{
          ...prevData[formId]?.verification?.[verificationID],
          // @ts-ignore
          ...verification?.[verificationID]
        },
      }
    }
    setFormContext((prevData) => ({
      ...prevData,
      [formId]: {
        ...prevData[formId],
        data: {
          ...prevData[formId]?.data,
          ...data
        },
        issues: {
          ...prevData[formId]?.issues,
          ...issues
        },
        verification: {
          ...(prevData[formId]?.verification || {}),
          ...(verificationID
            ? {
              [verificationID]: {
                // @ts-ignore
                ...(prevData[formId]?.verification?.[verificationID] || {}),
                // @ts-ignore
                  ...(verification?.[verificationID] || {}),
                },
              }
            : {}),
          
        }
      },
    }));
  };
  console.log("formContext in FormDataProvider:", formContext);
  return (

    <FormContext.Provider value={{ formContext, setFormContextData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
}