
import { LabelHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge";
export interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  formId?: string;
  elementId?: string;
}
export function InputLabel({ className, formId, elementId, children, ...restInputLabels }: InputLabelProps) {
  return (
    <label className={twMerge("text-gray-blue dark:text-brand-white font-normal mb-2 leading-5", className)} {...restInputLabels}>
      {children}
    </label>
  )
}