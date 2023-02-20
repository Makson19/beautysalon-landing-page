/** @jsx jsx */
import { css } from "@emotion/react";

export const sectionTestimonials = css`
  padding: 8rem 0;

  .container {
    padding: 0 1.2rem;
  }

  @media (min-width: 768px) {
    padding: 16rem 0;
  }
`;


export const title = css`
  margin-bottom: 5.2rem;
  h2 {
    color: #0F241D;
    font-size: 3rem;
    font-weight: 700;
    line-height: 4.5rem;
    margin: 0 auto;
    max-width: 48rem;
    padding: 0 0.4rem;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 3.6rem;
      line-height: 5.4rem;
      text-align: center;
    }
  }
`;

export const slider = css`
  margin: 0 auto;
  max-width: 112rem;
  .swiper-slide {
    padding: 1.2rem 1.2rem;
  }

  .slider-container {
    background-color: #fff;
    border-radius: 0.4rem;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
    margin: 0 auto;
    max-width: 54.4rem;
    padding: 3.2rem;

    p {
      color: #0F241D;
      font-family: "DM Sans", sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.6rem;
      margin-bottom: 2.4rem;

      strong {
        color: #FF3366;
        font-size: 1.8rem;
        font-weight: 500;
        margin-right: 0.5rem;
      }
    }

    .profile {
      align-items: center;
      display: flex;
      gap: 0.8rem;
      img {
        height: 3.2rem;
        width: 3.2rem;
      }

      span {
        color: #767676;
        font-family: "DM Sans", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.8rem;
      }
    }
  }

  #pagination {
    bottom: auto;
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    left: auto;
    margin-top: 2rem;
    position: relative;

    span {
      background-color: #FF3366;
      height: 1rem;
      width: 1rem;
    }
  }

  @media (min-width: 768px) {
    #pagination {
      margin-top: 4.6rem;
    }
  }

  @media (min-width: 1200px) {
    .slider-container {
      padding: 5.2rem;
    }
  }
`;
