import { ElementType } from "react"
import { twMerge } from "tailwind-merge";

export interface ButtonIconsProps {
    icon: ElementType;
    className?: string;
}
export function ButtonIcons({ icon: Icon, className }: ButtonIconsProps) {
    return (
        <Icon className={twMerge('', className)} />
    )
}