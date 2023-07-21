import { ElementType } from "react"
import { twMerge } from "tailwind-merge";

export interface ButtonIconsProps{
    Icon: ElementType;
    className?: string;
}
export function ButtonIcons({Icon, className}: ButtonIconsProps){
    return(
        <Icon className={twMerge('', className)}/>
    )
}