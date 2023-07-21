import { ReactElement } from "react"
import { twMerge } from "tailwind-merge";

export interface ButtonContentProps {
    children: ReactElement | string;
    className?: string;
}
export function ButtonContent({ children, className }: ButtonContentProps) {
    return (
        <label className={twMerge('', className)}>{children}</label>
    )
}