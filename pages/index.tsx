import { GetStaticProps, GetStaticPropsContext } from "next";
import React, { useEffect, useState } from "react";
import { Button, Htag, Input, Rating, Tag } from "../components";
import { P } from "../components/P/P";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "interfaces/menu.interface";
import { ParsedUrlQuery } from "querystring";
import { Textarea } from "components/Textarea/Textarea";
import { API } from "helpers/api";

function Home({ menu, firstCategory }: HomeProps) {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  // useEffect(() => {
  //   return function cleanup() {
  //     console.log("die");
  //   };
  // });

  // useEffect(() => {
  //   console.log("respawn");
  // }, []);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button
        appearance="primary"
        className="hello"
        onClick={() => setCounter((x) => x + 1)}
      >
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="right">
        {" "}
        Кнопка
      </Button>
      <P size="small">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque error
        tenetur est nemo cupiditate sint adipisci molestiae dolor minima, sit
        sed fugiat maxime dolore pariatur maiores repellendus iusto? Beatae
        adipisci, molestiae dolores tempore nihil rem iusto corporis doloremque
        repellendus totam iure tenetur ratione officiis. Quibusdam adipisci
        tenetur asperiores distinctio porro!
      </P>
      <P size="medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores
        laboriosam quaerat architecto facilis ipsa necessitatibus omnis. Commodi
        totam, ullam, unde nihil enim officia nisi quisquam quaerat quae natus,
        impedit odio quos. Laborum perspiciatis eos laboriosam consectetur velit
        totam assumenda aspernatur necessitatibus laudantium impedit amet
        incidunt, repudiandae cum ducimus reiciendis.
      </P>
      <P size="large">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores
        laboriosam quaerat architecto facilis ipsa necessitatibus omnis. Commodi
        totam, ullam, unde nihil enim officia nisi quisquam quaerat quae natus,
        impedit odio quos. Laborum perspiciatis eos laboriosam consectetur velit
        totam assumenda aspernatur necessitatibus laudantium impedit amet
        incidunt, repudiandae cum ducimus reiciendis.
      </P>

      <Tag size="small" color="red">
        Lorem ipsum dolor sit
      </Tag>
      <Tag size="small" color="green">
        Lorem ipsum dolor sit
      </Tag>
      <Tag size="medium" color="ghost">
        Lorem ipsum dolor sit
      </Tag>
      <Tag size="small" color="gray">
        Lorem ipsum dolor sit
      </Tag>
      <Tag size="small" color="primary">
        Lorem ipsum dolor sit
      </Tag>
      <Tag size="small" href="#">
        Lorem ipsum dolor sit
      </Tag>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  console.log(menu.flatMap((m) => m.pages.map((p) => "/courses/" + p.alias)));
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
