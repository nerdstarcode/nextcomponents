import { twMerge } from "tailwind-merge"
import { AutoCompleteDTO } from "../DTO/autocomplete.dto"
import { useAutoComplete } from "../context/Autocomplete"
import { XIcon } from "lucide-react"

export function Clear({ className }: Pick<AutoCompleteDTO, 'className'>) {
  const { handleClearFilter } = useAutoComplete()
  return (
    <XIcon onClick={handleClearFilter as any} className={twMerge("w-4 absolute right-4 top-1/2 -translate-y-1/2 hover:text-red-500/50 cursor-pointer", className)} />
  )
}