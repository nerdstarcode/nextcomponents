import { twMerge } from "tailwind-merge"
import { AutoCompleteDTO } from "../DTO/autocomplete.dto"
import { useAutoComplete } from "../context/Autocomplete"

export function Label({ className, placeholder, htmlFor, openClassName, closeClassName }: Pick<AutoCompleteDTO, 'className' | 'placeholder' | 'htmlFor' | 'openClassName' | 'closeClassName'>) {
  const { isOpen, value } = useAutoComplete()
  return (
    <label htmlFor={htmlFor} className={twMerge(`
        group
        bg-inherit/5
        transition-all
        ${isOpen || value ? twMerge('top-0 -translate-y-1/2 text-[.75rem] px-[.25rem] rounded-full backdrop-blur-[2px]', openClassName) : twMerge('top-1/2 -translate-y-1/2', closeClassName)}
        absolute
        left-4
        select-none
        `, className)}>
      {placeholder}
    </label>
  )
}