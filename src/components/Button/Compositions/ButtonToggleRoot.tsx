import { ButtonHTMLAttributes, LabelHTMLAttributes } from "react";
import { clsx } from 'clsx'
import { twMerge } from "tailwind-merge";
import { z } from "zod";
export interface ButtonToggleRootProps extends LabelHTMLAttributes<HTMLLabelElement> {
  styleType?: 'primary' | 'secondary' | 'default' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  widthStyle?: 'full' | 'fit';
  className?: string;
  name?: string;
  onChange?: ()=>{}
}
export const ButtonToggleRootPropsSchema = z.object({
  styleType: z.enum(['primary', 'secondary', 'default', 'neutral', 'info', 'success', 'warning', 'danger']).optional(),
  widthStyle: z.enum(['full', 'fit']).optional(),
  className: z.string().optional(),
  type: z.string().optional(),
  id: z.string().optional(),
  key: z.string().optional(),
  disable: z.boolean().optional(),
  name: z.string().optional(),
})
export function ButtonToggleRoot({ id, name, styleType = 'primary', onChange, children, widthStyle = 'fit', className, ...restLabelProperties }: ButtonToggleRootProps) {

  return (
    <div className={`group flex w-${widthStyle}`}>
      <input id={name} name={name} onChange={onChange} type="checkbox" className={`peer hidden`} />
      <label
        id={id}
        htmlFor={name}
        className={twMerge(`
        flex
        items-center
        justify-center
        gap-2
        rounded 
        text-gray-blue
        w-${widthStyle}
        px-10
        h-12
        relative
        disabled:bg-gray
        disabled:cursor-not-allowed
        !disabled:hover:brightness-100
        !disabled:hover:grayscale-0
        transition
        group-hover:cursor-pointer
        peer-checked:bg-gray-darker peer-hover:bg-gray-darker
        peer-checked:text-brand-white peer-hover:text-brand-white
        peer-checked:after:h-2
        peer-checked:after:left-0
        peer-checked:after:right-0
        peer-checked:after:absolute
        peer-checked:after:bottom-0
        peer-checked:after:bg-brand-primary
        overflow-hidden
        }
      `, className)}
        {...restLabelProperties}
      >
        {children}
      </label>
    </div>

  )
}

