import { z } from "zod";
import { FormDataProvider, useFormContext } from "../../contexts/FormContextContext";

export const Form = {
  Context: FormDataProvider,
  Preview: FormPreviewData
}
function FormPreviewData(){
  const { formContext, setFormContextData } = useFormContext();

  return(
    <pre className="dark:text-yellow-600">
      {JSON.stringify(formContext, null,2)}
    </pre>
  )
}