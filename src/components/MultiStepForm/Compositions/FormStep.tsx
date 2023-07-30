'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { z } from 'zod';
import { Button } from '../../Button';
import { twMerge } from 'tailwind-merge';
import { useForm } from 'react-hook-form';

const schema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres').max(50),
  email: z.string().email('Email inválido'),
  age: z.number().min(18, 'Você deve ter pelo menos 18 anos').max(120),
});

const FormStep = ({ submitFor, steps, className }: any) => {
  const [stepElements, setStepElements] = useState<any[]>([]);
  const [formData, setFormData] = useState('');
  const [formErrors, setFormErrors] = useState<any>({});
  const {register, handleSubmit} = useForm()

  function returnDatas(data: unknown){
    console.table(data)
    setFormData(JSON.stringify(data, null, 2))
  }

  return (
    <form className={twMerge('flex gap-4 flex-col max-w-6xl mx-auto p-4 rounded dark:bg-gray-darker', className)}>
     
    </form >
  );
};

export default FormStep;
