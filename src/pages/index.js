import React from "react";
import Layout from "../components/layout";
import Particles from '../components/particles';

import "../styles/components/hero.scss";
import "@fontsource/poppins/400.css" 
import "@fontsource/poppins/500.css" 
import "@fontsource/poppins/600.css" 


const IndexPage = () => {


  return (
  <Layout pageKey={"hero"}>

<Particles />
    <h2 className="name">Anna Ścisłowska</h2>
    <h1 className="motto">Tworzę strony internetowe.</h1>
    <a className="btn">W czym mogę pomóc?</a>

</Layout>
  );
}

export default IndexPage;
