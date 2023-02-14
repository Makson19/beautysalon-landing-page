/** @jsx jsx */
import { css } from "@emotion/react";

export const header = css`
  align-items: center;
  background: #f9f9f9;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  height: 7.2rem;
  
  .container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: 0 12.3rem;
    position: relative;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 2.4rem;
    }
  }
`;

export const logo = css`
  display: block;
  height: 2.5rem;
  width: 16.4rem;
  img {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 3.2rem;
    width: 14.4rem;
  }
`;

export const navbar = css`
  height: 100%;
  ul {
    align-items: center;
    display: inline-flex;
    gap: 3.2rem;
    height: 100%;
    justify-content: center;

    li {
      align-items: center;
      display: flex;
      height: 100%;
      a {
        align-items: center;
        color: #0F241D;
        display: inline-flex;
        font-size: 1.6rem;
        font-weight: 400;
        height: 100%;
        line-height: 2.1rem;
        position: relative;
        transition: all 0.3s ease-out;

        &::after {
          content: "";
          background-color: #FF3366;
          height: 0.2rem;
          left: 0;
          position: absolute;
          top: calc(100% - 2px);
          transition: all 0.3s ease-out;
          width: 0px;
        }

        &:hover {
          color: #FF3366;
          &::after {
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 890px) {
    position: absolute;
    top: 100%;
    left: -100%;
    z-index: 1;
    width: 100%;
    opacity: 0;
    height: calc(100vh - 72px);
    display: flex;
    background: #f9f9f9;
    transition: all 0.5s ease-out;

    ul {
      flex-direction: column;
      height: auto;
      width: 100%;
      align-items: center;
      gap: 6.4rem;
      li, a {
        height: auto;
      }

      li > a {
        font-size: 30px;
        font-weight: 700;
        line-height: 45px;
      }
    }

    &.active {
      left: 0;
      opacity: 1;
      transition: all 0.5s ease-out;
    }
  }
`;

export const button = css`
  display: none;
  width: 2.4rem;
  height: 2.4rem;
  color: #FF3366;
  outline: none;
  border: none;
  background: inherit;

  @media (max-width: 890px) {
    display: block;
  }
`;