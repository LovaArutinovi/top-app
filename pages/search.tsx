import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "interfaces/menu.interface";
import { ParsedUrlQuery } from "querystring";

function Search(): JSX.Element {
  return <>search</>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  console.log(menu.flatMap((m) => m.pages.map((p) => "/courses/" + p.alias)));
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface SearchProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
