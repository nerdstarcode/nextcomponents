import { ZodSchema, ZodError } from 'zod';
import { ZodErrorTratative } from './ZodErrorsTratative.utils';

interface FormData {
  formId: string;
  data?: Record<string, string | null>;
  issues?: Record<string, string | null>;
  verification?: Record<string, Record<string, string> | true>;
  verificationID?: string
}
export class FormHandler {
  private zodSchema: ZodSchema | undefined;
  private formId: string | undefined;
  private id: string | undefined;
  private verification: string | undefined;
  private formContext: any;
  private setFormContextData: any;

  constructor(
    formContext: any,
    setFormContextData: any,
    zodSchema?: ZodSchema,
    formId?: string,
    id?: string,
    verification?: string
  ) {
    this.zodSchema = zodSchema;
    this.formId = formId;
    this.id = id;
    this.verification = verification;
    this.setFormContextData = setFormContextData;
  }

  public updateFormWithData(result: any): FormData {
    const dataUpdate: FormData = {
      formId: this.formId!,
      data: { [this.id!]: result.data },
      issues: { [this.id!]: null },
    };
    console.log(dataUpdate);
    return dataUpdate;
  }

  private updateFormWithError(result: any) {
    const errorTratative = new ZodErrorTratative(result?.error as ZodError);
    const errorMessage = errorTratative.getErrorMessage();
    if (this.verification) {
      this.setFormContextData({
        formId: this.formId,
        verification: { [this.verification]: { [this.id!]: null } },
        verificationID: this.verification,
      });
    }
    this.setFormContextData({ formId: this.formId, data: { [this.id!]: null }, issues: { [this.id!]: errorMessage } });
  }

  private updateFormWithVerification(result: any) {
    const newData = { [this.id!]: result.data };
    this.setFormContextData({ formId: this.formId, data: newData, issues: { ...newData, [this.id!]: null } });
    this.id
    if (this.verification) {
      this.setFormContextData({
        formId: this.formId,
        verification: { [this.verification]: newData },
        verificationID: this.verification,
      });
      const verificationValidateObject = {
        ...this.formContext?.[this.formId!]?.verification?.[this.verification],
        [this.id!]: result.data
      }
      const idKeysVerificationObjext = Object.keys(verificationValidateObject || {})
      if (idKeysVerificationObjext.length > 0) {
        const valuesVerificationObjext = Object.values(verificationValidateObject!)
        const firstValue = valuesVerificationObjext[0];
        if (valuesVerificationObjext.every((value) => value === firstValue)) {
          idKeysVerificationObjext.map((elementID) => {
            this.setFormContextData({ formId: this.formId, issues: { [elementID]: null } });
          })
        } else {
          idKeysVerificationObjext.map((elementID) => {
            this.setFormContextData({ formId: this.formId, issues: { [elementID]: `${this.verification} must be the same` } });
          })
        }
      }
    }
  }

  public handleBlur({ target }: any) {
    if (this.zodSchema && this.formId && this.id) {
      const result = this.zodSchema.safeParse(target.value);
      if (result.success) {
        const newData = { [this.id]: result.data };
        this.setFormContextData({ formId: this.formId, data: newData, issues: { ...newData, [this.id]: null } });

        if (this.verification) {
          this.updateFormWithVerification(result)
        }
      } else {
        this.updateFormWithError(result)
      }
    }
  }
}
