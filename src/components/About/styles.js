/** @jsx jsx */
import { css } from "@emotion/react";

export const sectionAbout = css`
  padding: 8rem 0;
  
  @media (min-width: 1024px) {
    padding: 17rem 0;
    .container {
      display: flex;
      justify-content: space-between;
      padding-right: 2rem;
    }
  }

  @media (min-width: 1200px) {
    .container {
      padding-right: 12.1rem;
    }
  }
`;


export const image = css`
  margin: 0 auto;
  max-width: 57.1rem;

  img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    flex: 1;
    margin: 0;
  }
`;

export const content = css`
  padding: 3.2rem 2.4rem 0;
  .title {
    color: #0F241D;
    font-size: 3rem;
    font-weight: 700;
    line-height: 4.5rem;
    margin-bottom: 1.6rem;
  }

  @media (min-width: 1024px) {
    flex: 1;
    max-width: 61rem;
    padding: 3.2rem 0 0 1.5rem;
    .title {
      font-size: 3.6rem;
      line-height: 5.4rem;
    }
  }
`;

export const text = css`
  p {
    color: #767676;
    font-family: 'DM Sans', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;
  }

  .paragraph-1,
  .paragraph-2 {
    margin-bottom: 2.2rem;
  }

  @media (min-width: 1024px) {
    p {
      line-height: 2.4rem;
    }
  }
`;