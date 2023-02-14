/** @jsx jsx */
import { jsx } from "@emotion/react";

import Image from "../../images/image02.png";
import { sectionAbout, image, content, text } from "./styles.js";

const About = () => {
  return (
    <section css={sectionAbout}>
      <div className="container">
        <div css={image} data-aos="fade" data-aos-delay="800">
          <img src={Image} alt="mulheres segurando ferramentas de salão de beleza" />
        </div>
        <div css={content} data-aos="fade-left" data-aos-delay="300">
          <h2 className="title">Sobre nós</h2>
          <div css={text}>
            <p className="paragraph-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. 
            </p>
            <p className="paragraph-2">
              In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed. 
            </p>
            <p className="paragraph-3">
              Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;