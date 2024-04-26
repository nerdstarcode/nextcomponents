import { ClassNameValue, twJoin, twMerge } from "tailwind-merge"
import { AutoCompleteDTO, OptionsDTO } from "../DTO/autocomplete.dto"
import { useAutoComplete } from "../context/Autocomplete"

interface ListProps extends Pick<AutoCompleteDTO, 'className' | 'ulProps' | 'liProps'> {
  position?: 'bottom' | 'top'
}
export function List({ className, ulProps, liProps, position = 'bottom' }: ListProps) {
  const { isOpen, filtered, handleSelectOption } = useAutoComplete()
  const Variants: Record<string, ClassNameValue> = {
    bottom: 'top-full',
    top: 'bottom-full'
  }
  return (
    <>
      {isOpen && filtered.length > 0 && (
        <ul
          {...ulProps}
          className={twMerge(`
          absolute
          z-10
          left-0
          w-full
          mt-1
          bg-inherit
          text-inherit
          rounded
          shadow
          max-h-48
          overflow-y-auto
          scrollbar-thin
          scrollbar-track-transparent
          scrollbar-thumb-black
          `, twJoin([className, Variants[position], ulProps?.className]))}
        >
          {filtered.map((option: OptionsDTO) => (
            <li
              key={`${option.label}-${option.value}`}
              id={`${option.label}-${option.value}`}
              onClick={() => handleSelectOption(option)}
              {...liProps}
              className={twMerge("py-2 px-4 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5", twJoin([className, liProps?.className]))}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </>

  )
}