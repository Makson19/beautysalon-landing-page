/** @jsx jsx */
import { jsx } from "@emotion/react";

import Icon01 from "../../images/icon01.svg";
import Icon02 from "../../images/icon02.svg";
import Icon03 from "../../images/icon03.svg";

import { sectionServices, content, cardContainer } from "./styles"; 

const data = [
  {
    id: 1,
    img: Icon01,
    title: "Terapia capilar",
    text: "Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.",
    delay: "600"
  },
  {
    id: 2,
    img: Icon02,
    title: "Cortes",
    text: "A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.",
    delay: "800"
  },
  {
    id: 3,
    img: Icon03,
    title: "Tratamentos",
    text: "O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.",
    delay: "1000"
  }
];

const Services = () => {
  return (
    <section css={sectionServices} id="services">
      <div className="container">
        <div className="content" css={content}>
          <h2>Serviços</h2>
          <p>
            Com mais de 10 anos no mercado, o <strong>Beautysalon</strong> já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais
          </p>
        </div>

        <div className="cards-container" css={cardContainer}>
          {data.map(card => (
            <div className="card" key={card.id} data-aos="zoom-in" data-aos-delay={card.delay}>
              <div className="card__image">
                <img src={card.img} alt="" />
              </div>
              <div className="card__title">
                <h3>{card.title}</h3>
              </div>
              <div className="card__text">
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;