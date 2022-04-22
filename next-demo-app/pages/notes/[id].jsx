import React from "react";
import { useRouter } from "next/router";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
const index = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1> Note id: {id}</h1>
    </div>
  );
};

export default index;
