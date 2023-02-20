/** @jsx jsx */
import { jsx } from "@emotion/react"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { sectionTestimonials, title, slider } from "./styles";
import Avatar01 from "../../images/avatar01.png";
import Avatar02 from "../../images/avatar02.png";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    name: "Wanessa Souza",
    img: Avatar01,
    testimonial: "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados."
  },
  {
    name: "Luna Falcão",
    img: Avatar02,
    testimonial: "Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do Beautysalon."
  }
];

const Testimonials = () => {
  return (
    <section css={sectionTestimonials} id="testimonials">
      <div className="container">
        <div className="title" css={title}>
          <h2>Depoimentos de quem já passou por aqui</h2>
        </div>

        <div className="slider" css={slider}>
          <Swiper 
            pagination={{
              el: "#pagination",
              clickable: true
            }}  
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 32
              }
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data.map((elem, index) => (
              <SwiperSlide key={index}>
                <div className="slider-container">
                  <p>
                    <strong>❝</strong>
                    {elem.testimonial}  
                  </p>
                  <div className="profile">
                    <img src={elem.img} alt="" />
                    <span>{elem.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {data.map((elem, index) => (
              <SwiperSlide key={index}>
                <div className="slider-container">
                  <p>
                    <strong>❝</strong>
                    {elem.testimonial}  
                  </p>
                  <div className="profile">
                    <img src={elem.img} alt="" />
                    <span>{elem.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination" id="pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;