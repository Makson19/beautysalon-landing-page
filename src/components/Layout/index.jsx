/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment, useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Global, css } from "@emotion/react";
import { AnglesUp } from "@styled-icons/fa-solid/AnglesUp";
import AOS from "aos";

import { showIt } from "./styles";

const GlobalStyles = () => {
  return (
    <Global styles={css`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 62.5%; /* =10px  */
      }

      body, html {
        overflow-x: hidden;
        scroll-behavior: smooth;
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
    AOS.init({
      duration : 1000
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);

  return (
    <Fragment>
      <div id="wrapper">
        <GlobalStyles />
        {children}
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
      </div>
    </Fragment>
  )
}

export default Layout;
