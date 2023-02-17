/** @jsx jsx */
import { css } from "@emotion/react";

export const sectionServices = css`
  background: #f9f9f9;
  padding: 8rem 0;

  .container {
    padding: 0 2.4rem;
  }

  @media (min-width: 1152px) {
    padding: 16rem 0;
  }
`;

export const content = css`
  margin-bottom: 6.4rem;

  h2 {
    color: #0F241D;
    font-size: 3rem;
    font-weight: 700;
    line-height: 4.5rem;
    margin-bottom: 1.6rem;
  }

  p {
    color: #0F241D;
    font-family: "DM Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;

    strong {
      color: #FF3366;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 2.6rem;
    }
  }

  @media (min-width: 768px) {
    margin-inline: auto; 
    max-width: 52.3rem;
    text-align: center;

    h2 {
      font-size: 3.6rem;
      line-height: 5.4rem;
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 1.8rem;
      line-height: 2.3rem;
      strong {
        font-size: 1.8rem;
        line-height: 2.3rem;
      }
    }
  }
`;

export const cardContainer = css`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  .card {
    border-bottom: 0.4rem solid #FF3366;
    border-radius: 0.4rem;
    box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.08);
    max-width: 35.2rem;
    height: 37.2rem;
    /* min-height: 35.2rem; */
    padding: 5.8rem 3.2rem;
    text-align: center;

    &__image {
      height: 8rem;
      margin: 0 auto;
      width: 8rem;

      img {
        width: 100%;
      }
    }

    &__title {
      margin: 2.4rem 0 1.2rem;
      h3 {
        color: #0F241D;
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.6rem;

      }
    }

    &__text {
      p {
        color: #767676;
        font-family: "DM Sans", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.6rem;
      }
    }
  }

  @media (min-width: 1152px) {
    .card {
      height: 35.2rem;
      padding: 5.8rem 4.8rem;

      &__text {
        p {
          line-height: 2.1rem;
        }
      }
    }
  }
`;