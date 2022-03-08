import React, { useState } from "react";
import { useStaticQuery, graphql } from 'gatsby'

import Header from "../components/header";

import "../styles/layout.scss";

const Layout = ({ children, pageKey }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }`);
  //na razie nie wykorzystane. W przyszłości do zbudowania nawigacji poprzez scroll
  useState(() => {
    window.addEventListener("wheel", (e) => {
      console.log(e.deltaY);
    });
  }, []);

  return (
    <div className={`page ${pageKey ? pageKey : ""}`}>
    <title>{data.site.siteMetadata.title}</title>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
