import { LabelHTMLAttributes, ReactElement } from "react"
import { twMerge } from "tailwind-merge";

export interface ButtonContentProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactElement | string;
    className?: string;
    name?: string;
}
export function ButtonContent({ children, className, name, ...restLabelAtributes}: ButtonContentProps) {
    return (
        <label htmlFor={name} className={twMerge('group cursor-pointer group-disabled:cursor-not-allowed', className)} {...restLabelAtributes}>{children}</label>
    )
}