import React from "react";
import { useRouter } from "next/router";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
const index = ({ note }) => {
  // const router = useRouter();
  // const { id } = router.query;
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
      <h1> Note id: {note.title}</h1>
    </div>
  );
};
export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`);

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  if (data) {
    return {
      props: { note: data },
    };
  }
}
export default index;
