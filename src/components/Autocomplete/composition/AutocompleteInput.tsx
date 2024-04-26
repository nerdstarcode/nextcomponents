import { twMerge } from "tailwind-merge"
import { AutoCompleteDTO } from "../DTO/autocomplete.dto"
import { useAutoComplete } from "../context/Autocomplete"

export function Input({ className, id, inputProps }: Pick<AutoCompleteDTO, 'className' | 'id' | 'inputProps'>) {
  const { value, inputRef, handleInputChange, handleOpen, handleClose } = useAutoComplete()
  return (
    <input
      autoComplete={'off'}
      id={id}
      name={id}
      ref={inputRef}
      type="text"
      value={value}
      onChange={handleInputChange as any}
      onFocus={handleOpen as any}
      onBlur={(event) => handleClose(event.target.value)}
      className={twMerge(`w-full p-2 border border-slate-700 focus:border-sky-600 rounded focus:outline-none ring-none bg-inherit text-inherit`, className)}
      {...inputProps}
    />
  )
}