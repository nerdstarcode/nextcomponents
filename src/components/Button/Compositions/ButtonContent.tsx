import { ReactElement } from "react"
import { twMerge } from "tailwind-merge";

export interface ButtonContentProps {
    children: ReactElement | string;
    className?: string;
    name?: string;
}
export function ButtonContent({ children, className, name}: ButtonContentProps) {
    return (
        <label htmlFor={name} className={twMerge('group cursor-pointer group-disabled:cursor-not-allowed', className)}>{children}</label>
    )
}