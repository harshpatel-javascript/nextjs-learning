import React from "react";
/** @jsxRuntime classic */
// /** @jsx jsx */
// that jsxruntime is for autorun as we have used create-next-app
import { jsx } from "theme-ui";
import Link from "next/link";

const Nav = () => (
  <header
    sx={{
      height: "60px",
      width: "100vw",
      bg: "primary",
      borderBottom: "1px solid",
      borderColor: "primary",
    }}
  >
    <nav
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        variant: "containers.page",
        height: "100%",
      }}
    >
      <Link href="/">
        <a sx={{ fontWeight: "bold", fontSize: 4, cursor: "pointer" }}>
          Note App
        </a>
      </Link>

      <Link href="/notes">
        <a sx={{ color: "text", fontSize: 3, cursor: "pointer" }}>notes</a>
      </Link>
      <a href={process.env.URL}>frontend link</a>
      <Link href="/about">About</Link>
    </nav>
  </header>
);

export default Nav;
