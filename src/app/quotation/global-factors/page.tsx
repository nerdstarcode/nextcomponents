'use client'
import { Button } from '@/components/Button'
import { InputRootMock } from '@/components/Input'
import { Egg } from 'lucide-react'
import Image from 'next/image'



export default function Home() {
  return (
    <main className="w-screen min-h-screen bg-gray-middle p-20">
      {/* <InputRootMock/> */}
     <Button.Root styleType='secondary' className=' bg-red-600'>
       <Button.Content>
        irineu
       </Button.Content>
     </Button.Root>
    </main>
  )
}

import { useState } from 'react';

const EasterEgg = ({ onEasterEggActivated }: { onEasterEggActivated: any[] }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleEasterEggSubmit = () => {
    if (inputValue.toLowerCase() === 'ntttest') {
      onEasterEggActivated.forEach((table) => {
        console.table(table);
      })
    }
  };

  return (
    <>
      <label htmlFor="easterEgg" className='items-center w-fit flex flex-col'>
        <Egg className='text-brand-primary' onClick={() => { setInputValue('') }} />
        <p className='text-brand-primary'>Easter Egg</p>
      </label>
      <input
        name='easterEgg'
        id='easterEgg'
        type="text"
        value={inputValue}
        onKeyUp={handleEasterEggSubmit}
        onChange={handleInputChange}
        className='sr-only pointer-events-none w-0 h-0'
        autoComplete='off'
        placeholder="Digite a senha do easter egg"
      />
      <pre className='text-yellow-400'>
        {
          inputValue.toLowerCase() === 'ntttest' && JSON.stringify(onEasterEggActivated, null, 2)
        }
      </pre>
    </>
  );
};
