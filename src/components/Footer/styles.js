/** @jsx jsx */
import { css } from "@emotion/react";

export const footer = css`
  background-color: #FF3366;
  padding: 6.4rem 0;

  .container {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 0 2.4rem;
  }

  @media (min-width: 550px) {
    .container {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media (min-width: 900px) {
    .container {
      padding: 0 12.3rem;
    }
  }
`;

export const colOne = css`
  flex: 1;
  .logo {
    margin-bottom: 2.4rem;
    width: 14.4rem;

    img {
      width: 100%;
    }
  }

  p {
    color: #f9f9f9;
    font-family: "DM Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;
  }

  p:nth-of-type(1) {
    margin-bottom: 1.2rem;
  }

  @media (min-width: 768px) {
    .logo {
      width: 25rem;
    }
  }
`;

export const colTwo = css`
  .icons {
    align-items: center;
    display: flex;
    gap: 3.2rem;

    svg:hover {
      color: #F67797;
      transition: color 0.4s ease-out;
    }
  }
`;