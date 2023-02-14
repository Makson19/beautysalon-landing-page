/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Link } from "gatsby";

import Image from "../../images/image01.png";
import { sectionStart, img, content } from "./styles";

const Start = () => {
  return (
    <section css={sectionStart}>
      <div className="container">
        <div css={img}>
          <img src={Image} alt="cabeleireira secando e penteando o cabelo de uma cliente" />
        </div>
        <div css={content}>
          <h1>Salão natural para os seus cabelos</h1>
          <p>Um salão exclusivo em São Paulo, especializado em tratamento naturais.</p>
          <Link to="#">Agendar um horário</Link>
        </div>
      </div>
    </section>
  )
}

export default Start;