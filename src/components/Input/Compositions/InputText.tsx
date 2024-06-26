import { ZodError, ZodErrorTratative } from "../../../utils/ZodErrorsTratative.utils";
import { useFormContext } from "../../../contexts/FormContextContext";
import { ElementType, InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { ZodTypeAny, z } from "zod"

// disabled – disable a text input to signify something else needs to happen first.
// max – specify the maximum value for a text input.
// maxlength – maximum amount of characters for a text input.
// min – minimum value for a text input.
// pattern – specifies a certain expression to check against (e.g. phone numbers).
// readonly – text input cannot be changed.
// required – mandatory text input.
// value – default value for a text input.
export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  zodSchema?: ZodTypeAny;
  formId?: string;
  icon?: ElementType;
  verification?: string;
}
const stringInput = z.string().max(300)
export function InputText({ className, maxLength = 300, zodSchema = stringInput, formId, id, icon: Icon, placeholder, verification, ...restInputProps }: InputTextProps) {
  const { formContext, setFormContextData } = useFormContext();
  const handleBlur = ({ target }: any) => {
    if (zodSchema && formId && id) {
      const result = zodSchema.safeParse(target.value);

      if (result.success) {
        const newData = { [id]: result.data };
        setFormContextData({ formId, data: newData, issues: { ...newData, [id]: null } });

        if (verification) {
          setFormContextData({
            formId,
            verification: { [verification]: newData },
            verificationID: verification,
          });
          const verificationValidateObject = {
            ...formContext?.[formId]?.verification?.[verification],
            [id]: result.data
          }
          console.log(verificationValidateObject)
          const idKeysVerificationObjext = Object.keys(verificationValidateObject || {})
          if (idKeysVerificationObjext.length > 0) {
            const valuesVerificationObjext = Object.values(verificationValidateObject!)
            const firstValue = valuesVerificationObjext[0];
            if (valuesVerificationObjext.every((value) => value === firstValue)) {
              idKeysVerificationObjext.map((elementID) => {
                setFormContextData({ formId, issues: { [elementID]: null } });
              })
            } else {
              idKeysVerificationObjext.map((elementID) => {
                setFormContextData({ formId, issues: { [elementID]: `${verification} must be the same` } });
              })
            }
          }
        }
      } else {
        const errorTratative = new ZodErrorTratative(result?.error as ZodError);
        const errorMessage = errorTratative.getErrorMessage();
        if (verification) {
          setFormContextData({
            formId,
            verification: { [verification]: {[id]: null} },
            verificationID: verification,
          });          
        }
        setFormContextData({ formId, data: { [id]: null }, issues: { [id]: errorMessage } });
      }
    }
  };
  const existsErrorOnInput = formId && id && formContext?.[formId]?.issues?.[id]

  return (
    <div className="relative">
      {Icon &&
        <span className="absolute flex justify-center items-center w-10 h-full">
          {existsErrorOnInput ?
            <span className={`font-extrabold text-lg text-brand-danger`}>!</span>
            :
            <Icon className={twMerge(`max-w-[20px] text-brand-info`)} />
          }
        </span>
      }
      <input
        id={id}
        maxLength={maxLength}
        className={'' + twMerge(`
        flex 
        w-full
        h-10
        border
        autofill:!bg-slate-400
        dark:autofill:!bg-gray
        dark:aria-selected:bg-gray-blue
        border-gray-light  dark:border-gray-dark
        bg-brand-white     dark:bg-gray
        text-gray-darker   dark:text-gray-light
        dark:focus-within:bg-gray-darkest
        focus-within:outline-offset-0
        focus-within:outline-none
        focus-within:border-2
        focus-within:border-brand-primary
        rounded
        ${Icon !== undefined ? 'pl-10 pr-4' : 'px-4'}
        py-2
        placeholder:italic
        disabled:pointer-events-none
        disabled:grayscale-[50%]
        `,
          className,
          existsErrorOnInput && 'text-brand-danger border-brand-danger placeholder:text-brand-danger dark:placeholder:text-brand-danger bg-brand-danger/50 dark:bg-brand-danger/50 dark:text-brand-danger dark:border-brand-danger'
        )}
        placeholder={placeholder}
        onBlur={handleBlur}
        onSubmit={handleBlur}
        {...restInputProps}
      />
    </div>

  )
}