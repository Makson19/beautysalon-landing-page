/** @jsx jsx */
import { css } from "@emotion/react";

export const sectionContact = css`
  background-color: #f9f9f9;
  padding: 8rem 0;

  .container {
    padding: 0 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 6.4rem;
  }

  @media (min-width: 768px) {
    padding: 16rem 0;
    .container {
      align-items: center;
      flex-direction: row;
    }
  }

  @media (min-width: 900px) {
    .container {
      padding-left: 12.3rem;
    }
  }
`;


export const colOne = css`
  flex: 1;
  margin: auto;
  
  h2 {
    color: #0F241D;
    font-size: 3rem;
    font-weight: 700;
    line-height: 4.5rem;
    margin-bottom: 1.6rem;
    max-width: 40rem;
  }

  p {
    color: #767676;
    font-family: "DM Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;
    margin-bottom: 3.2rem;
    max-width: 36.4rem;
  }

  a {
    align-items: center;
    background-color: #FF3366;
    border-radius: 0.4rem;
    display: inline-flex;
    gap: 1rem;
    padding: 1.5rem 3.2rem;
    transition: all 0.4s ease-out;

    span {
      color: #f9f9f9;
      font-family: "DM Sans", sans-serif;
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.1rem;
    }

    &:hover {
      box-shadow: inset -12.7rem 0 0 0 #F67797, 
                  inset 12.7rem 0 0 0 #F67797;
    }
  }

  @media (min-width: 768px) {
    h2 {
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

export const colTwo = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3.2rem;
  margin: auto;

  span {
    color: #767676;
    font-family: "DM Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;
  }

  .phone,
  .location,
  .mail {
    align-items: center;
    display: flex;
    gap: 1.2rem;
  }

  @media (min-width: 768px) {
    span {
      font-size: 1.8rem;
      line-height: 2.3rem;
    }
  }
`;