import { ButtonHTMLAttributes } from "react";
import { clsx } from 'clsx'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'secondary',
  widthStyle?: 'full' | 'fit',
  styles?: string, 
}
export function Button({ id, type = 'submit', styleType = 'primary', onClick, children, widthStyle = 'fit', styles, ...restButtonProps}: ButtonProps) {
  return (
    <button
      data-testid={id}
      type={type}
      onClick={onClick}
      className={ styles ? styles : `
        rounded 
        text-brand-white
        h-10
        w-${widthStyle}
        px-10
        disabled:bg-gray-dark
        disabled:pointer-events-none
        ${clsx(
        {
          'hover:brightness-75 hover:transition': styleType == 'primary',
          'bg-brand-primary transition': styleType == 'primary',
          'bg-brand-secondary transition': styleType == 'secondary',
        })
        }
      `}
      {...restButtonProps}
    >
      {children}
    </button>
  )
}

