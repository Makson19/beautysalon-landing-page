/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Link } from "gatsby";
import { Location } from "@styled-icons/ionicons-outline/Location";
import { Telephone, Whatsapp } from "@styled-icons/bootstrap";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";

import { sectionContact, colOne, colTwo } from "./styles";

const Contact = () => {
  return (
    <section css={sectionContact} id="contact">
      <div className="container">
        <div className="col-1" css={colOne} data-aos="fade-right" data-aos-delay="300">
          <h2>Entre em contato com a gente!</h2>
          <p>Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
          <Link to="#">
            <Whatsapp color="#f9f9f9" size={24} />
            <span>Entrar em contato</span>
          </Link>
        </div>
        <div className="col-2" css={colTwo}>
          <div className="phone" data-aos="fade-left" data-aos-delay="500">
            <Telephone color="#FF3366" size={24} />
            <span>11 99845-6754</span>
          </div>

          <div className="location" data-aos="fade-left" data-aos-delay="700">
            <Location color="#FF3366" size={24} />
            <span>R. Amauri Souza, 346</span>
          </div>

          <div className="mail" data-aos="fade-left" data-aos-delay="900">
            <EmailOutline color="#FF3366" size={24} />
            <span>contato@beautysalon.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;