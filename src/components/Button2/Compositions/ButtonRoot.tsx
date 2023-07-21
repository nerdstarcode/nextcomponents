import { ButtonHTMLAttributes } from "react";
import { clsx } from 'clsx'
import { twMerge } from "tailwind-merge";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'secondary';
  widthStyle?: 'full' | 'fit';
  className?: string;
}

export function ButtonRoot({ id, type = 'submit', styleType = 'primary', onClick, children, widthStyle = 'fit', className=' ', ...restButtonProps }: ButtonProps) {

  return (
    <button
      data-testid={id}
      type={type}
      onClick={onClick}
      className={twMerge(`
        rounded 
        text-brand-white
        h-10
        w-${widthStyle}
        px-10
        disabled:grayscale-[95%]
        disabled:pointer-events-none
        hover:brightness-75 
        transition
        ${clsx(
        {
          'bg-brand-primary': styleType == 'primary',
          'bg-brand-secondary': styleType == 'secondary',
        })
        }
      `, className)}
      {...restButtonProps}
    >
      {children}
    </button>
  )
}

