import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "interfaces/menu.interface";
import { ParsedUrlQuery } from "querystring";
import { API } from "helpers/api";

function Search(): JSX.Element {
  return <>search</>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  // console.log(menu.flatMap((m) => m.pages.map((p) => "/courses/" + p.alias)));
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
