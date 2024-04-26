import { useState } from "react";
import { AutoCompleteDTO, DefaultTemplateOptions, OptionsDTO } from "./DTO/autocomplete.dto";
import { Content } from "./composition/AutocompleteContent";
import { Label } from "./composition/AutocompleteLabel";
import { Input } from "./composition/AutocompleteInput";
import { Clear } from "./composition/AutocompleteClear";
import { List } from "./composition/AutocompleteList";

export const Autocomplete = ({
  options = [
    { value: 1, label: 'Opção 1' },
    { value: 2, label: 'Opção 2' },
    { value: 3, label: 'Opção 3' },
  ],
  placeholder = "Autocomplete",
  id = 'Autocomplete',
}: { id?: string, options?: OptionsDTO[], placeholder?: string }) => {
  const [value, setValue] = useState('');
  return (
    <div className="flex flex-col gap-4 bg-zinc-900">
      <AutocompleteInput.Content options={options} className="">
        <AutocompleteInput.Label htmlFor="input" placeholder={'autocomplete template'} className="" />
        <AutocompleteInput.Input id="input" className="" key={''} />
        <AutocompleteInput.List className="" key={''} />
        <AutocompleteInput.Clear className="" key={''} />
      </AutocompleteInput.Content>
    </div>
  )

};
export const AutocompleteInput = {
  Content,
  Label,
  Input,
  Clear,
  List,
  Templates: {
    Default: DefaultTemplate,
    Glassmorphism
  }
}

function DefaultTemplate({ options,
  placeholder,
  id,
  position
}: DefaultTemplateOptions) {
  return (
    <AutocompleteInput.Content options={options} className="bg-zinc-900">
      <AutocompleteInput.Label htmlFor={id} placeholder={placeholder} />
      <AutocompleteInput.Input id={id} />
      <AutocompleteInput.List position={position} />
      <AutocompleteInput.Clear />
    </AutocompleteInput.Content>
  )
}

function Glassmorphism({ options,
  placeholder,
  id,
  position
}: DefaultTemplateOptions) {
  return (
    <AutocompleteInput.Content options={options} className="">
      <AutocompleteInput.Input id={id} className="bg-zinc-900/50 backdrop-blur-md" />
      <AutocompleteInput.Label htmlFor={id} placeholder={placeholder} />
      <AutocompleteInput.List position={position}  ulProps={{ className: "bg-zinc-900/50 backdrop-blur-md" }} />
      <AutocompleteInput.Clear />
    </AutocompleteInput.Content>
  )
}