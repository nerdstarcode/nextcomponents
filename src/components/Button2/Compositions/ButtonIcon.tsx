import { ElementType } from "react"
import { twMerge } from "tailwind-merge";

export interface ButtonIconsProps {
    icon: ElementType;
    className?: string;
    id?: string;
    key?: string;
    description?: string
}
export function ButtonIcon({ icon: Icon, className, key, id, description}: ButtonIconsProps) {
    return (
        <Icon id={id} key={key} aria-description={description} className={twMerge('group-disabled:cursor-not-allowed', className)} />
    )
}