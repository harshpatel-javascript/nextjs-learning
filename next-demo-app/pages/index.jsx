/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import Head from "next/head";
// import Image from "next/image";
export default ({ content }) => (
  <>
    <Head>
      <title>Home Page</title>
      <meta name="description" content="just home page description" />
    </Head>
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div
        sx={{
          variant: "containers.page",
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1 sx={{ fontSize: 6, my: 0 }}>{content.title}</h1>
      </div>
    </div>
  </>
);

// fetching data and getSgtaticProps : it will be executed when request happen in browse despite it is in the main component
// it's bundle will be seperate
export function getStaticProps(context) {
  // console.log(context);
  return {
    props: {
      content: {
        title: "This is my notes app.",
      },
    },
  };
}
