'use client'
import { createContext, useContext, useState, ReactNode, MutableRefObject, LegacyRef, ChangeEvent, useRef } from "react";

interface AutoComplete {
  data: Record<string, string | null>;
  issues: Record<string, string | null>;
}
interface OptionsDTO { value: string | number, label: string }

interface AutocompleteContextDTO {
  isOpen?: boolean;
  inputRef?: MutableRefObject<null> | LegacyRef<HTMLInputElement> | undefined;
  handleInputChange: Function;
  handleOpen: Function;
  handleClose: Function;
  filtered: OptionsDTO[];
  handleSelectOption: Function;
  handleClearFilter: Function;
  filterOptions: Function;
  value?: string;
  setValue: Function;
}

const AutoComplete = createContext<AutocompleteContextDTO>({
  isOpen: false,
  filtered: [],
  handleInputChange: () => { },
  handleOpen: () => { },
  handleClose: () => { },
  handleSelectOption: () => { },
  handleClearFilter: () => { },
  filterOptions: () => { },
  setValue: () => { },
});

export function AutoCompleteProvider({ children, options }: { children: ReactNode, options: OptionsDTO[] }) {
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = useState<OptionsDTO[]>(options);
  const [value, setValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
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
        setValue(filteredItem[0].label);
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
    setValue(option.label);
    setFiltered([option]); // Selecionar apenas a opção escolhida
    handleClose();
  };

  const handleClearFilter = () => {
    setValue('')
    setFiltered(options)
  }


  return (
    <AutoComplete.Provider value={{
      value,
      setValue,
      isOpen,
      filtered,
      inputRef,
      handleInputChange,
      filterOptions,
      handleOpen,
      handleClose,
      handleSelectOption,
      handleClearFilter
    }}>
      {children}
    </AutoComplete.Provider>
  );
}

export function useAutoComplete() {
  return useContext(AutoComplete);
}
