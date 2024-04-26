import { XIcon } from "lucide-react";
import { ChangeEvent, HTMLAttributes, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AutoCompleteProvider, useAutoComplete } from "./context/Autocomplete";

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
    <div className="flex flex-col gap-4">
      <AutocompleteInputComponent.Main options={options} className="">
        <AutocompleteInputComponent.Label htmlFor="input" placeholder={'autocomplete template'} className="" />
        <AutocompleteInputComponent.Input id="input" className="" key={''} />
        <AutocompleteInputComponent.List className="" key={''} />
        <AutocompleteInputComponent.Clear className="" key={''} />
      </AutocompleteInputComponent.Main>
      {/* <AutocompleteInput
        id={id}
        value={value}
        onChange={setValue}
        options={options}
        placeholder={placeholder}
        className=""
      /> */}

    </div>
  )

};
interface OptionsDTO { value: string | number, label: string }

interface AutoCompleteDTO extends Pick<HTMLAttributes<any>, 'className' | 'children'> {
  htmlFor: string;
  value: string | number;
  onChange: Function;
  options: OptionsDTO[];
  placeholder?: string | number;
  id: string;
  openClassName?: string;
  closeClassName?: string;
  inputProps?: HTMLAttributes<HTMLInputElement>;
  ulProps?: HTMLAttributes<HTMLUListElement>;
  liProps?: HTMLAttributes<HTMLLIElement>;
}
const AutocompleteInput = ({ value, onChange, options, placeholder, id, className }: Omit<AutoCompleteDTO, 'htmlFor'>) => {
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = useState<OptionsDTO[]>(options);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange(inputValue);
    const filtered = filterOptions(inputValue);
    setFiltered(filtered);
  };

  const filterOptions = (inputValue: any) => {
    return options.filter((option: OptionsDTO) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = (value?: string) => {
    if (value) {
      const filteredItem = filterOptions(value)
      if (filteredItem.length > 0) {
        console.log()
        onChange(filteredItem[0].label);
        setFiltered([filteredItem[0]]);
      } else {
        handleClearFilter()
      }
    }
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const handleSelectOption = (option: OptionsDTO) => {
    onChange(option.label);
    setFiltered([option]); // Selecionar apenas a opção escolhida
    handleClose();
  };

  const handleClearFilter = () => {
    onChange('')
    setFiltered(options)
  }
  return (
    <div className="relative dark:text-white bg-inherit">
      <label htmlFor={id} className={twMerge(`
        group
        bg-inherit/5
        transition-all
        ${isOpen || value ? 'top-0 -translate-y-1/2 text-[.75rem] px-[.25rem] rounded-full backdrop-blur-[2px]' : 'top-1/2 -translate-y-1/2 '}
        absolute
        left-4
        select-none
        `, className)}>
        {placeholder}
      </label>
      <input
        autoComplete={'off'}
        id={id}
        name={id}
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={handleOpen}
        onBlur={(event) => handleClose(event.target.value)}
        className={twMerge(`w-full p-2 border border-gray-blue focus:border-brand-primary rounded focus:outline-none ring-none bg-inherit text-inherit`, className)}
      />
      <XIcon onClick={handleClearFilter} className="w-4 absolute right-4 top-1/2 -translate-y-1/2 hover:text-red-500/50 cursor-pointer" />
      {isOpen && filtered.length > 0 && (
        <ul className={twMerge(`absolute top-full left-0 w-full mt-1 bg-inherit text-inherit rounded shadow`, className)}>
          {filtered.map((option: OptionsDTO) => (
            <li
              key={`${option.label}-${option.value}`}
              id={`${option.label}-${option.value}`}
              className={twMerge("p-2 cursor-pointer hover:brightness-125 dark:hover:brightness-75", className)}
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


function Main({ className, children, options }: Pick<AutoCompleteDTO, 'className' | 'children' | 'options'>) {

  return (
    <AutoCompleteProvider options={options}>
      <div className={twMerge("relative dark:text-white bg-inherit", className)}>
        {children}
      </div>
    </AutoCompleteProvider>
  )
}

function Label({ className, placeholder, htmlFor, openClassName, closeClassName }: Pick<AutoCompleteDTO, 'className' | 'placeholder' | 'htmlFor' | 'openClassName' | 'closeClassName'>) {
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

function Input({ className, id, inputProps }: Pick<AutoCompleteDTO, 'className' | 'id' | 'inputProps'>) {
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
      className={twMerge(`w-full p-2 border border-gray-blue focus:border-brand-primary rounded focus:outline-none ring-none bg-inherit text-inherit`, className)}
      {...inputProps}
    />
  )
}
function List({ className, ulProps, liProps }: Pick<AutoCompleteDTO, 'className' | 'ulProps' | 'liProps'>) {
  const { isOpen, filtered, handleSelectOption } = useAutoComplete()
  return (
    <>
      {isOpen && filtered.length > 0 && (
        <ul className={twMerge(`absolute z-10 top-full left-0 w-full mt-1 bg-inherit text-inherit rounded shadow`, className)}
          {...ulProps}>
          {filtered.map((option: OptionsDTO) => (
            <li
              key={`${option.label}-${option.value}`}
              id={`${option.label}-${option.value}`}
              className={twMerge("p-2 cursor-pointer hover:brightness-125 dark:hover:brightness-75", className)}
              onClick={() => handleSelectOption(option)}
              {...liProps}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </>

  )
}
function Clear({ className }: Pick<AutoCompleteDTO, 'className'>) {
  const { handleClearFilter } = useAutoComplete()

  return (
    <XIcon onClick={handleClearFilter as any} className={twMerge("w-4 absolute right-4 top-1/2 -translate-y-1/2 hover:text-red-500/50 cursor-pointer", className)} />
  )
}


const AutocompleteInputComponent = {
  Main,
  Label,
  Input,
  Clear,
  List
}

