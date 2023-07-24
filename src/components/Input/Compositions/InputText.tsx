
// Restrictions can be applied to text inputs to guide users towards a better interaction. Those restrictions have to be made clear to the user (e.g. 'Max 300 characters' for a text input). These restrictions include:

import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

// disabled – disable a text input to signify something else needs to happen first.
// max – specify the maximum value for a text input.
// maxlength – maximum amount of characters for a text input.
// min – minimum value for a text input.
// pattern – specifies a certain expression to check against (e.g. phone numbers).
// readonly – text input cannot be changed.
// required – mandatory text input.
// value – default value for a text input.
interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
 
}
export function InputText({ className, maxLength, ...restInputProps }: InputTextProps) {
  const inputSchema = z.object({

  })
  return (
    <input
      maxLength={maxLength}
      className={twMerge(`
        flex 
        w-full
        h-12
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
        px-4
        py-2
        placeholder:italic
       
        `, className
      )}
      placeholder="irineu"
      {...restInputProps}
    >
    </input>
  )
}