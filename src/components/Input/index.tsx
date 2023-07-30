'use client'
import { z } from "zod";
import { InputText } from "./Compositions/InputText";
import { FormDataProvider } from "../../contexts/FormContextContext";
import { InputDescribe } from "./Compositions/InputDescribe";
import { InputLabel } from "./Compositions/InputLabel";
import { InputRoot } from "./Compositions/InputRoot";
import { Mail, User } from "lucide-react";
import { InputPassword } from "./Compositions/InputPassword";
import { Form } from "../Form";
import { DataContextProvider } from "@/contexts/DataContext";

export const Input = {
  Root: InputRoot,
  Label: InputLabel,
  Describe: InputDescribe,
  Text: InputText,
  Password: InputPassword,
  Context: DataContextProvider,
}

export function InputRootMock() {
  return (
    <>
      <Form.Context>
        {[
          <Input.Context key={'context-email'}>

            <Input.Root key={'input1'}>
              <Input.Label>
                E-mail
              </Input.Label>
              <Input.Text verification="email" placeholder="Ex: name.surname@global.ntt" icon={Mail} formId="texto-teste" id="email" zodSchema={z.string().email()} />
              <Input.Describe formId="texto-teste" elementId="email" />
            </Input.Root>
            <Input.Root key={'input2'}>
              <Input.Label>
                E-mail
              </Input.Label>
              <Input.Text verification="email" placeholder="Ex: name.surname@global.ntt" icon={Mail} formId="texto-teste" id="email2" zodSchema={z.string().email()} />
              <Input.Describe formId="texto-teste" elementId="email2" />
            </Input.Root>
          </Input.Context>
          ,
          <Input.Context key={'context-password'}>
            <Input.Root key={'password'}>
              <Input.Label>
                Password
              </Input.Label>
              <Input.Password verification="password" placeholder="Ex: Name" icon={User} formId="texto-teste" id="password" zodSchema={z.string().min(6)} />
              <Input.Describe formId="texto-teste" elementId="password" />
            </Input.Root>
            <Input.Root key={'password2'}>
              <Input.Label>
                Password
              </Input.Label>
              <Input.Password verification="password" placeholder="Ex: Name" icon={User} formId="texto-teste" id="passwordVerify" zodSchema={z.string().min(6)} />
              <Input.Describe formId="texto-teste" elementId="passwordVerify" />
            </Input.Root>
          </Input.Context>
        ]}
        <Form.Preview />
      </Form.Context>
    </>
  )
}
