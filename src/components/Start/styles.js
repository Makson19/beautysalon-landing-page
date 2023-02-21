/** @jsx jsx */
import { css } from "@emotion/react";

export const sectionStart = css`
  background: #f9f9f9;
  padding: 3.2rem 0 7.9rem 0;
  
  @media (min-width: 1024px) {
    padding: 11.4rem 0 19.2rem 0;
    .container {
      align-items: center;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      padding: 0 7.1rem 0 12.3rem;
    }
  }
`;

export const img = css`
  margin: 0 auto;
  max-width: 65.8rem;

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export const content = css`
  padding: 3.2rem 2.4rem 0;
  text-align: center;
  h1 {
    color: #0F241D;
    font-size: 3rem; 
    font-weight: 700;
    line-height: 4.5rem;
    margin-bottom: 1.6rem;
  }

  p {
    color: #767676;
    font-family: "DM Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;
    margin-bottom: 3.2rem;
  }

  a {
    color: #f9f9f9;
    background: #FF3366;
    border-radius: 0.4rem;
    display: inline-block;
    font-family: "DM Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.1rem;
    padding: 1.4rem 3.2rem 1.5rem;
    transition: all 0.4s ease-out;

    &:hover {
      box-shadow: inset -10.7rem 0 0 0 #F67797, 
                  inset 10.7rem 0 0 0 #F67797;
    }
  }

  @media (min-width: 1024px) {
    max-width: 39.6rem;
    padding: 0 2rem 0 0;
    text-align: left;

    h1 {
      font-size: 3.6rem;
      line-height: 5.4rem;
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 1.8rem;
      line-height: 2.3rem;
      margin-bottom: 2.4rem;
    }
  }
`;