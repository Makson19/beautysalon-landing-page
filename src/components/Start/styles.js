/** @jsx jsx */
import { css } from "@emotion/react";

export const sectionStart = css`
  background: #f9f9f9;
  padding: 3.2rem 0 7.9rem 0;
  
  @media (min-width: 1024px) {
    padding: 8.4rem 0 17.2rem 0;
    .container {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
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
  text-align: center;
  padding: 3.2rem 2.4rem 0;
  h1 {
    font-size: 3rem; 
    font-weight: 700;
    line-height: 4.5rem;
    margin-bottom: 1.6rem;
    color: #0F241D;
  }

  p {
    font-family: "DM Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;
    color: #767676;
    margin-bottom: 3.2rem;
  }

  a {
    display: inline-block;
    font-family: "DM Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.1rem;
    color: #f9f9f9;
    background: #FF3366;
    padding: 1.4rem 3.2rem 1.5rem;
    border-radius: 0.4rem;
    transition: all 0.4s ease-out;

    &:hover {
      box-shadow: inset -10.7rem 0 0 0 #F67797, 
                  inset 10.7rem 0 0 0 #F67797;
    }
  }

  @media (min-width: 1024px) {
    text-align: left;
    padding: 0 2rem 0 0;
    max-width: 39.6rem;

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