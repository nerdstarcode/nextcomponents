import { ButtonHTMLAttributes } from "react";
import { clsx } from 'clsx'
import { twMerge } from "tailwind-merge";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'secondary' | 'default' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  widthStyle?: 'full' | 'fit';
  className?: string;
}

export function ButtonRoot({ id, type = 'submit', styleType = 'primary', onClick, children, widthStyle = 'fit', className = ' ', disabled=false, ...restButtonProps }: ButtonProps) {

  return (
    <button
      data-testid={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(`
        flex
        items-center
        justify-center
        gap-2
        rounded 
        text-brand-white
        h-10
        w-${widthStyle}
        px-10
        disabled:bg-gray
        disabled:cursor-not-allowed
        !disabled:hover:brightness-100
        !disabled:hover:grayscale-0
        transition
        group
        ${clsx(
        {
          'disabled:hover:grayscale-0 disabled:hover:brightness-100': disabled == true,
          'bg-brand-primary hover:grayscale-[20%]': styleType == 'primary',
          'bg-brand-info hover:brightness-105': styleType == 'secondary',
          'bg-brand-white text-brand-primary hover:bg-brand-primary hover:text-white border border-brand-primary': styleType == 'default',
          'bg-brand-secondary hover:bg-gray': styleType == 'neutral',
          'bg-brand-info hover:brightness-110': styleType == 'info',
          'bg-brand-success hover:brightness-110': styleType == 'success',
          'bg-brand-warning hover:brightness-110': styleType == 'warning',
          'bg-brand-danger hover:brightness-110': styleType == 'danger',
        })
        }
      `, className)}
      {...restButtonProps}
    >
      {children}
    </button>
  )
}

