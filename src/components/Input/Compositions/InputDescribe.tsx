'use client'

import { ZodError, ZodErrorTratative } from "../../../utils/ZodErrorsTratative.utils";
import { useZodError } from "../../../contexts/ZodErrorContext";
import { InputHTMLAttributes, LabelHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { ZodTypeAny, z } from "zod"

// disabled – disable a text input to signify something else needs to happen first.
// max – specify the maximum value for a text input.
// maxlength – maximum amount of characters for a text input.
// min – minimum value for a text input.
// pattern – specifies a certain expression to check against (e.g. phone numbers).
// readonly – text input cannot be changed.
// required – mandatory text input.
// value – default value for a text input.
export interface InputDescribeProps extends LabelHTMLAttributes<HTMLLabelElement> {
  formId?: string;
  elementId?: string;
  describe?: string;
}
export function InputDescribe({ className, formId, elementId, children, describe, ...restInputDescribes }: InputDescribeProps) {
  const { zodErrors, setZodError } = useZodError();
  const existsErrorOnInput = formId && elementId && zodErrors?.[formId]?.[elementId]
  return (
    <label aria-description={describe} className={twMerge("text-gray dark:text-gray-light font-normal text-sm ml-1 mr-5 leading-5", className)} {...restInputDescribes}>
      {existsErrorOnInput ?
        <span className="text-brand-danger" >{zodErrors?.[formId]?.[elementId]}</span>
        :
        children
      }
    </label>
  )
}