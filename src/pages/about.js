import React from "react";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout pageKey={"about"}>
      <div>
        <h1>O mnie</h1>
        <p>
          Obecnie nie szukam stałej pracy, ale chętnie podejmę się zleceń.
          Przygotowuję strony wedle indywidualnego projektu lub dostosowuję
          gotowy szablon, mogę wprowadzić zmiany do istniejącej strony
          statycznej lub na Wordpressie, w aplikacjach korzystających z Reacta.
        </p>
      </div>
    </Layout>
  );
};

export default About;
