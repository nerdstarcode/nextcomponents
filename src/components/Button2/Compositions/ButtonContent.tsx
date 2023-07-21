import { ReactElement } from "react"
import { twMerge } from "tailwind-merge";

export interface ButtonContentProps {
    children: ReactElement | string;
    className?: string;
}
export function ButtonContent({ children, className }: ButtonContentProps) {
    return (
        <label className={twMerge('cursor-pointer group-disabled:cursor-not-allowed', className)}>{children}</label>
    )
}