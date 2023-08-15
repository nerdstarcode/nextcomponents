import { useFormContext } from "../../../contexts/FormContextContext";
import { LabelHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"


export interface InputDescribeProps extends LabelHTMLAttributes<HTMLLabelElement> {
  formId?: string;
  elementId?: string;
  describe?: string;
  error?: boolean;
  errorMessage?: string;
}
export function InputDescribe({ className, formId, elementId, children, describe, error = false, errorMessage, ...restInputDescribes }: InputDescribeProps) {
  const { formContext, setFormContextData } = useFormContext();
  const existsErrorOnInput = formId && elementId && formContext?.[formId]?.issues?.[elementId]
  return (
    <label aria-description={describe} className={twMerge("text-gray dark:text-gray-light font-normal text-sm ml-1 mr-5 leading-5", className)} {...restInputDescribes}>
      {existsErrorOnInput || error ?
        <span className="text-brand-danger" >
          {//zod case
            formContext?.[formId!]?.issues?.[elementId!]
          }
          {//manual case
            errorMessage
          }
        </span>
        :
        children
      }
    </label>
  )
}