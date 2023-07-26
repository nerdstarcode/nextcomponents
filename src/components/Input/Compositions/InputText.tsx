'use client'

import { ZodError, ZodErrorTratative } from "../../../utils/ZodErrorsTratative.utils";
import { useZodError } from "../../../contexts/ZodErrorContext";
import { Children, ElementType, InputHTMLAttributes } from "react"
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
export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  zodSchema?: ZodTypeAny;
  formId?: string;
  icon?: ElementType
}
const stringInput = z.string().min(6).max(300)
export function InputText({ className, maxLength = 300, zodSchema = stringInput, formId, id, icon: Icon, placeholder, ...restInputProps }: InputTextProps) {
  const { zodErrors, setZodError } = useZodError();
  const handleBlur = ({ target }: any) => {
    if (zodSchema && formId && id) {
      const result = zodSchema.safeParse(target.value);
      if (!result.success) {
        const errorTratative = new ZodErrorTratative(result?.error as ZodError);
        console.log(formId, id, errorTratative.getErrorMessage())
        setZodError(formId, id, errorTratative.getErrorMessage());
      } else {
        setZodError(formId, id, null);
      }
    }
  };
  const existsErrorOnInput = formId && id && zodErrors?.[formId]?.[id]

  return (
    <div className="relative">
      {Icon &&
        <span className="absolute flex justify-center items-center w-10 h-full">
          {existsErrorOnInput ?
            <span className={`font-extrabold text-lg text-brand-danger`}>!</span>
            :
            <Icon className={twMerge(`max-w-[20px] text-brand-info`)} />
          }
        </span>
      }
      <input
        id={id}
        maxLength={maxLength}
        className={twMerge(`
        flex 
        w-full
        h-10
        border
        border-gray-light  dark:border-gray-dark
        bg-brand-white     dark:bg-gray
        text-gray-darker   dark:text-gray-light
        focus-within:outline-offset-0
        focus-within:outline-none
        focus-within:border-2
        focus-within:bg-gray-darkest
        focus-within:border-brand-primary
        rounded
        ${Icon !== undefined ? 'pl-10 pr-4' : 'px-4'}
        py-2
        placeholder:italic
        disabled:pointer-events-none
        disabled:grayscale-[50%]
        `,
          className,
          existsErrorOnInput && 'text-brand-danger border-brand-danger placeholder:text-brand-danger dark:placeholder:text-brand-danger bg-brand-danger/50 dark:bg-brand-danger/50 dark:text-brand-danger dark:border-brand-danger'
        )}
        placeholder={placeholder}
        onBlur={handleBlur}
        {...restInputProps}
      />
    </div>

  )
}