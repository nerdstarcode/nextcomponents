'use client'
import { z } from "zod";
import { InputText } from "./Compositions/InputText";
import { ZodErrorProvider } from "../../contexts/ZodErrorContext";
import { InputDescribe } from "./Compositions/InputDescribe";
import { InputLabel } from "./Compositions/InputLabel";
import { InputRoot } from "./Compositions/InputRoot";
import { Signal } from "lucide-react";
const stringInput = z.string().min(6).max(300)
export const Input = {
  Root: InputRoot,
  Label: InputLabel,
  Describe: InputDescribe,
  Text: InputText,
  Context: ZodErrorProvider
}

export function InputRootMock() {
  return (
    <Input.Context>
      <label className="flex flex-col w-full gap-1">
        <Input.Label>
          Digita um texto ai
        </Input.Label>
        <Input.Text icon={Signal} formId="texto-teste" id="text" zodSchema={stringInput}/>
        <Input.Describe formId="texto-teste" elementId="text">
          Minimum of 6 caracters
        </Input.Describe>
      </label>
    </Input.Context>
  )
}
