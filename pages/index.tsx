import React from 'react';
import { Button, Htag } from '../components';
import { P } from '../components/P/P';

export default function Home() {
  const a = 1;
  return (
    <>
        <Htag tag='h1'>Текст</Htag>
        <Button appearance='primary' className='hello' > Кнопка</Button>
        <Button appearance='ghost' arrow='right'> Кнопка</Button>
        <P size='small'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque error tenetur est nemo cupiditate sint adipisci molestiae dolor minima, sit sed fugiat maxime dolore pariatur maiores repellendus iusto? Beatae adipisci, molestiae dolores tempore nihil rem iusto corporis doloremque repellendus totam iure tenetur ratione officiis. Quibusdam adipisci tenetur asperiores distinctio porro!</P>
        <P size='medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores laboriosam quaerat architecto facilis ipsa necessitatibus omnis. Commodi totam, ullam, unde nihil enim officia nisi quisquam quaerat quae natus, impedit odio quos. Laborum perspiciatis eos laboriosam consectetur velit totam assumenda aspernatur necessitatibus laudantium impedit amet incidunt, repudiandae cum ducimus reiciendis.</P>
        <P size='large'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores laboriosam quaerat architecto facilis ipsa necessitatibus omnis. Commodi totam, ullam, unde nihil enim officia nisi quisquam quaerat quae natus, impedit odio quos. Laborum perspiciatis eos laboriosam consectetur velit totam assumenda aspernatur necessitatibus laudantium impedit amet incidunt, repudiandae cum ducimus reiciendis.</P>
    </> 
  )
}
