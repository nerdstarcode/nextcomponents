import { twMerge } from "tailwind-merge"
import { AutoCompleteDTO } from "../DTO/autocomplete.dto"
import { AutoCompleteProvider } from "../context/Autocomplete"

export function Content({ className, children, options }: Pick<AutoCompleteDTO, 'className' | 'children' | 'options'>) {
  return (
    <AutoCompleteProvider options={options}>
      <div className={twMerge("relative text-zinc-900 dark:text-white bg-inherit rounded-full", className)}>
        {children}
      </div>
    </AutoCompleteProvider>
  )
}
