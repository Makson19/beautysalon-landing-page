/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import { Link } from "gatsby";
import { Menu, Close } from "@styled-icons/material";

import Logo from "../../images/logo01.svg";
import { header, logo, navbar, button } from "./styles";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <header css={header}>
      <div className="container">
        <Link to="/" css={logo}>
          <img src={Logo} alt="Logo" />
        </Link>
        <nav css={navbar} className={openMenu ? "active" : ''}>
          <ul>
            <li>
              <Link to="#">Início</Link>
            </li>
            <li>
              <Link to="#about">Sobre</Link>
            </li>
            <li>
              <Link to="#services">Serviços</Link>
            </li>
            <li>
              <Link to="#testimonials">Depoimentos</Link>
            </li>
            <li>
              <Link to="#contact">Contato</Link>
            </li>
          </ul>
        </nav>
        <button type="button" css={button} onClick={handleOpenMenu}>
          {openMenu ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

export default Header;