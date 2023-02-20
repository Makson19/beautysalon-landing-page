/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Instagram } from "@styled-icons/bootstrap/Instagram";
import { FacebookOutline } from "@styled-icons/evaicons-outline/FacebookOutline";
import { Youtube } from "@styled-icons/remix-line/Youtube";
import Logo from "../../images/logo02.png";

import { footer, colOne, colTwo } from "./styles";

const Footer = () => {
  return (
    <footer css={footer}>
      <div className="container">
        <div css={colOne}>
          <div className="logo">
            <img src={Logo} alt="logo Beauty Salon" />
          </div>
          <p className="par-1">©2021 Beautysalon.</p>
          <p className="par-2">Todos os direitos reservados.</p>
        </div>
        <div css={colTwo}>
          <div className="icons">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={24} color="#FFF" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FacebookOutline size={24} color="#FFF" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <Youtube size={24} color="#FFF" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;