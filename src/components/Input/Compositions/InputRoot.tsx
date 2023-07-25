import { LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
export interface InputRootProps extends LabelHTMLAttributes<HTMLLabelElement> {
}
export function InputRoot({className, children, ...restLabelAttributes}:InputRootProps) {
  return (
    <label className={twMerge("flex flex-col w-full gap-1", className)} {...restLabelAttributes}>
     {children}
    </label>
  )
}