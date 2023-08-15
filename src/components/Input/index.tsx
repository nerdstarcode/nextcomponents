'use client'
import { z } from "zod";
import { InputText } from "./Compositions/InputText";
import { FormDataProvider } from "../../contexts/FormContextContext";
import { InputDescribe } from "./Compositions/InputDescribe";
import { InputLabel } from "./Compositions/InputLabel";
import { InputRoot } from "./Compositions/InputRoot";
import { LockIcon, Mail, User } from "lucide-react";
import { InputPassword } from "./Compositions/InputPassword";
import { Form } from "../Form";
import { DataContextProvider } from "@/contexts/DataContext";

export const Input = {
  Root: InputRoot,
  Label: InputLabel,
  Describe: InputDescribe,
  Text: InputText,
  Password: InputPassword,
  Context: FormDataProvider,
}

export function InputRootMock() {
  return (
    <>
      <Form.Context>
        {[
          <fieldset key={'context-email'}>
            <Input.Root key={'input1'}>
              <Input.Label>
                E-mail
              </Input.Label>
              <Input.Text verification="email" placeholder="Ex: name.surname@global.ntt" formId="texto-teste" id="email" zodSchema={z.string().email()} />
              <Input.Describe formId="texto-teste" elementId="email" />
            </Input.Root>
            <Input.Root key={'input2'}>
              <Input.Label>
                Repeat E-mail
              </Input.Label>
              <Input.Text verification="email" placeholder="Ex: name.surname@global.ntt" formId="texto-teste" id="email-validate" zodSchema={z.string().email()} />
              <Input.Describe formId="texto-teste" elementId="email-validate" />
            </Input.Root>
          </fieldset>
          ,
          <fieldset key={'context-password'}>
            <Input.Root key={'password'}>
              <Input.Label>
                Password
              </Input.Label>
              <Input.Password icon={LockIcon} verification="password" placeholder="*****" formId="texto-teste" id="password" zodSchema={z.string().min(6)} />
              <Input.Describe formId="texto-teste" elementId="password" />
            </Input.Root>
            {/* <Input.Root key={'password2'}>
              <Input.Label>
                Repeat Password
              </Input.Label>
              <Input.Password verification="password" placeholder="*****" formId="texto-teste" id="password-validate" zodSchema={z.string().min(6)} />
              <Input.Describe formId="texto-teste" elementId="password-validate" />
            </Input.Root> */}
          </fieldset>
        ]}
        <Form.Preview />
      </Form.Context>
    </>
  )
}
