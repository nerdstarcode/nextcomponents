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
  private setFormContextData: (data: FormData) => void;

  constructor(
    setFormContextData: (data: FormData) => void,
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

  public updateFormWithVerification(result: any): FormData | undefined {
    if (this.verification) {
      const verificationUpdate: FormData = {
        formId: this.formId!,
        verification: { [this.verification]: { [this.id!]: result.data } },
        verificationID: this.verification,
      };
      return verificationUpdate;
    }
    return undefined;
  }

  public updateFormWithError(result: any): FormData {
    const errorTratative = new ZodErrorTratative(result?.error);
    console.log(this.formId, this.id, errorTratative.getErrorMessage());
    const errorUpdate: FormData = {
      formId: this.formId!,
      data: { [this.id!]: null },
      issues: { [this.id!]: errorTratative.getErrorMessage() },
    };
    return errorUpdate;
  }

  public handleBlur({target}: any): void {
    if (this.zodSchema && this.formId && this.id) {
      const result = this.zodSchema.safeParse(target.value);
      if (result.success) {
        const dataUpdate = this.updateFormWithData(result);
        this.setFormContextData(dataUpdate);
        console.log(result);

        const verificationUpdate = this.updateFormWithVerification(result);
        if (verificationUpdate) {
          this.setFormContextData(verificationUpdate);
        }
      } else {
        const errorUpdate = this.updateFormWithError(result);
        this.setFormContextData(errorUpdate);
      }
    }
  }
}
