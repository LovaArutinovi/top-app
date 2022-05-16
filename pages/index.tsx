import Image from 'next/image';
import React from 'react';
import { Button, Htag } from '../components';

export default function Home() {
  const a = 1;
  return (
    <>
        <Htag tag='h1'>Текст</Htag>
        <Button appearance='primary' className='hello' > Кнопка</Button>
        <Button appearance='ghost'> Кнопка</Button>
    </> 
  )
}
