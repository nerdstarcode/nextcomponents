'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { z } from 'zod';
import { Button } from '../Button';
import { twMerge } from 'tailwind-merge';
import { useForm } from 'react-hook-form';

const schema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres').max(50),
  email: z.string().email('Email inválido'),
  age: z.number().min(18, 'Você deve ter pelo menos 18 anos').max(120),
});
interface MultiStepForm {
  submitFor?: Function;
  steps?: any[];
  className?: string;
}
const MultiStepForm = ({ submitFor, steps, className }: MultiStepForm) => {
  const [step, setStep] = useState(0);
  const spanRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [stepElements, setStepElements] = useState<any[]>([]);
  const [formData, setFormData] = useState('');
  const [formErrors, setFormErrors] = useState<any>({});
  const {register, handleSubmit} = useForm()

  function returnDatas(data: unknown){
    console.table(data)
    setFormData(JSON.stringify(data, null, 2))
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    console.log(formData)
  };

  const handleSubmitStep = async (e: any) => {
    e.preventDefault();
    try {
      await schema.pick({ ...formData as any })._parseAsync(formData as any);
      setFormErrors({});
      if (step < 3) {
        setStep((prevStep) => prevStep + 1);
      } else {
        // Aqui você pode fazer o que desejar com os dados do formulário
        console.log('Dados do formulário:', formData);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: any = {};
        error.errors.forEach((err: any) => {
          errors[err.path[0]] = err.message;
        });
        setFormErrors(errors);
      }
    }
  };
  const stepsMock = [
    <div>
      <h2 className="text-2xl font-semibold mb-4">Passo 1: Nome</h2>
      <input
        type="text"
        defaultValue={undefined}
        onKeyUp={handleInputChange}
        className="border rounded w-full p-2 mb-2"
        placeholder="Digite seu nome"
        {...register('name')}
      />
      {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}

    </div>,
    <div>
      <h2 className="text-2xl font-semibold mb-4">Passo 2: Email</h2>
      <input
        type="text"
        onKeyUp={handleInputChange}
        defaultValue={undefined}
        className="border rounded w-full p-2 mb-2"
        placeholder="Digite seu email"
        {...register('email')}
      />
      {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

    </div>,
    <div>
      <h2 className="text-2xl font-semibold mb-4">Passo 3: Idade</h2>
      <input
        type="number"
        defaultValue={undefined}
        onKeyUp={handleInputChange}
        className="border rounded w-full p-2 mb-2"
        placeholder="Digite sua idade"
        {...register('age')}
      />
      {formErrors.age && <p className="text-red-500">{formErrors.age}</p>}

    </div>
  ]
  const stepLocationElement: any = [
  ]
  function stepsLocation() {
    stepsMock.forEach((element, index) => {
      setStepElements((prevArray) =>
        [...prevArray,
        <span
          id={`step-${index}`}
          key={`step-${index}`}
          ref={(el) => (spanRefs.current[index] = el)}
          className={`${index <= step
            ? 'bg-brand-primary text-white before:bg-brand-primary'
            : 'bg-gray text-gray-light before:bg-gray'
            } 
            relative
            before:w-4
            before:h-1
            before:-left-4
            before:top-1/2
            before:translate-1-1/2
            before:absolute
            first:before:hidden
            w-8
            h-8
            rounded-full
            flex
            justify-center
            items-center
            pointer-events-none
            select-none
            `
          }

        >{index + 1}</span>
        ]
      );
    })
  }
  useLayoutEffect(() => {
    if (Array.isArray(stepElements) && stepElements.length === 0) stepsLocation()
    console.log(stepElements)
  }, [])
  return (
    <article className={twMerge('flex gap-4 flex-col max-w-6xl mx-auto p-4 rounded dark:bg-gray-darker', className)}>
      <div key={`att-${stepLocationElement.length}`}
        className='
          flex
          items-center
          justify-center
          w-full
          gap-4
        '>
        {stepElements}
      </div>
      <h2 className='dark:text-gray-light font-bold text-2xl text-center'>
        Title
      </h2>
      <main>
        {stepsMock[step]}
      </main>
      <fieldset className='flex w-full justify-between'>
        {step > 0 ?
          <Button.Root className='self-end' type='submit' onClick={() => {
            setStep((prevStep) => prevStep - 1);
            const spanElements = spanRefs.current;
            if (spanElements) {
              spanElements.forEach((spanElement) => {
                const index = Number(spanElement?.id.replace('step-', ''))
                if (index <= (step - 1)) {
                  spanElement?.classList.add('bg-brand-primary', 'text-white', 'before:bg-brand-primary');
                  spanElement?.classList.remove('bg-gray', 'text-gray-light', 'before:bg-gray');
                } else {
                  spanElement?.classList.add('bg-gray', 'text-gray-light', 'before:bg-gray');
                  spanElement?.classList.remove('bg-brand-primary', 'text-white', 'before:bg-brand-primary');
                }
              })
            }
          }}>
            <Button.Content>
              Prev
            </Button.Content>
          </Button.Root>
          :
          <span />
        }
        {step !== stepElements?.length - 1 ?

          <Button.Root type='submit' className='self-end  place-self-end' onClick={() => {
            setStep((prevStep) => prevStep + 1);
            const spanElements = spanRefs.current;
            if (spanElements) {
              spanElements.forEach((spanElement) => {
                const index = Number(spanElement?.id.replace('step-', ''))
                if (index <= (step + 1)) {
                  spanElement?.classList.add('bg-brand-primary', 'text-white', 'before:bg-brand-primary');
                  spanElement?.classList.remove('bg-gray', 'text-gray-light', 'before:bg-gray');
                } else {
                  spanElement?.classList.add('bg-gray', 'text-gray-light', 'before:bg-gray');
                  spanElement?.classList.remove('bg-brand-primary', 'text-white', 'before:bg-brand-primary');
                }
              })
            }
          }}>
            <Button.Content>
              Next
            </Button.Content>
          </Button.Root>
          :
          <Button.Root type='submit'>
            <Button.Content>
              Finalizar
            </Button.Content>
          </Button.Root>
        }
      </fieldset>
    </article >
  );
};

export default MultiStepForm;
