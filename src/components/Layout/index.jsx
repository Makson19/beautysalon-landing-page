/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link as ScrollLink } from "react-scroll";
import { Global, css } from "@emotion/react";
import { Helmet } from "react-helmet";
import { AnglesUp } from "@styled-icons/fa-solid/AnglesUp"

import { showIt } from './styles';

const GlobalStyles = () => {
  return (
    <Global styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 62.5%; /* =10px  */
      }

      body {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        transition: all 400ms ease;
      }

      h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
        color: #000;
      }

      a {
        color: #000;
        text-decoration: none;
      }

      ul li {
        list-style: none;
      }

      .container {
        max-width: 1366px;
        width: 100%;
        margin: 0 auto;
      }
    `} />
  )
}


const Layout = ({ pageTitle, children }) => {
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = site.siteMetadata.description
  // const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <Helmet htmlAttributes={{lang: "pt-br"}}>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
      </Helmet>

      <div id="wrapper">
        <GlobalStyles />
        {children}
      </div>

      {scrollTop === true ? (
        <ScrollLink
          css={showIt}
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          className="scroll-to-top"
        >
          <AnglesUp />
        </ScrollLink>
      ) : null}
    </>
  )
}

export default Layout;
