import { ZodError, ZodErrorTratative } from "../../../utils/ZodErrorsTratative.utils";
import { useFormContext } from "../../../contexts/FormContextContext";
import { ElementType, InputHTMLAttributes, useState } from "react"
import { twMerge } from "tailwind-merge"
import { ZodTypeAny, z } from "zod"
import { Eye, EyeOff } from "lucide-react";

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  zodSchema?: ZodTypeAny;
  formId?: string;
  icon?: ElementType;
  verification?: string;
}
interface FormContextData {
  formId: string;
  data: Record<string, any> | null;
  issues: Record<string, string> | null;
  verification?: Record<string, any>;
  verificationID?: string;
}
const stringInput = z.string().max(300)
export function InputPassword({ className, maxLength = 300, zodSchema = stringInput, formId, id, icon: Icon, placeholder, verification, ...restInputProps }: InputTextProps) {
  const { formContext, setFormContextData } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

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
            <span className={`font-extrabold text-lg text-brand-danger peer`}>!</span>
            :
            <Icon className={twMerge(`max-w-[20px] text-brand-info peer`)} />
          }
        </span>
      }
      <button type='button' onClick={() => { setShowPassword(!showPassword) }} className="group absolute right-0 flex justify-center items-center w-10 h-full">
        {showPassword ?
          <EyeOff className={twMerge(`max-w-[20px] text-gray dark:text-gray-light pointer-events-none group-hover:text-brand-info`)} />
          :
          <Eye className={twMerge(`max-w-[20px] text-gray dark:text-gray-light pointer-events-none group-hover:text-brand-info`)} />
        }

      </button>
      <input
        id={id}
        type={showPassword ? 'text' : 'password'}
        maxLength={maxLength}
        className={twMerge(`
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
        peer
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