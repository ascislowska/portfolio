import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import TransitionLink from 'gatsby-plugin-transition-link';

import { useStaticQuery, graphql } from 'gatsby'

import "../styles/components/header.scss";

//icons
import HomeIcon from "../images/icons/home.svg";
import AboutIcon from "../images/icons/about5.svg";
import PortfolioIcon from "../images/icons/portfolio2.svg";
import ContactIcon from "../images/icons/mail.svg";


const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }`);

  function renderNavList() {
    //main page sections
    const sections = [
      {
        key: "",
        displayedName: "Start",
        icon: <HomeIcon className="icon" />,
      },
      {
        key: "about",
        displayedName: "O mnie",
        icon: <AboutIcon className="icon" />,
      },
      {
        key: "projects",
        displayedName: "Projects",
        icon: <PortfolioIcon className="icon" />,
      },
      {
        key: "contact",
        displayedName: "Kontakt",
        icon: <ContactIcon className="icon" />,
      },
    ];

    return sections.map((section) => {
      return (
        <li>
          <TransitionLink cover to={`/${section.key}`} bg="black" direction="up" className="nav-link" activeClassName="active" >
            {section.icon}
            {section.displayedName}
          </TransitionLink>
        </li>
      );
    });
  }

  return (
    <div className="header">
      <h3>{data.site.siteMetadata.title}</h3>
      <nav>
        <ul>
          {renderNavList()}
        </ul>
      </nav>
    </div>
  );
};
export default Header;
