import { HTMLAttributes } from "react";

export interface OptionsDTO { value: string | number, label: string }

export interface AutoCompleteDTO extends Pick<HTMLAttributes<any>, 'className' | 'children' | 'placeholder'> {
  htmlFor: string;
  value: string | number;
  onChange: Function;
  options: OptionsDTO[];
  id: string;
  openClassName?: string;
  closeClassName?: string;
  inputProps?: HTMLAttributes<HTMLInputElement>;
  ulProps?: HTMLAttributes<HTMLUListElement>;
  liProps?: HTMLAttributes<HTMLLIElement>;
  position?: 'bottom' | 'top'
}

export interface ListProps extends Pick<AutoCompleteDTO, 'className' | 'ulProps' | 'liProps' | 'position'> { }


//template DTO
export interface DefaultTemplateOptions extends Pick<AutoCompleteDTO, 'options' | 'placeholder' | 'id' | 'position'> { }
