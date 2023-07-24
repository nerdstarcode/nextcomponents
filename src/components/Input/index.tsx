import { InputText } from "./Compositions/InputText";

export function InputRoot(){
  return(
    <label className="flex flex-col w-full gap-4">
      <InputText></InputText>
    </label>
  )
}