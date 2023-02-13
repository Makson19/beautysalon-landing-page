/** @jsx jsx */
import { css } from "@emotion/react";

export const header = css`
  height: 7.2rem;
  display: flex;
  align-items: center;
  background: #f9f9f9;
  border-bottom: 1px solid #e4e4e4;
  
  .container {
    position: relative;
    padding: 0 12.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 2.4rem;
    }
  }
`;

export const logo = css`
  display: block;
  width: 16.4rem;
  height: 2.5rem;
  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 14.4rem;
    height: 3.2rem;
  }
`;

export const navbar = css`
  height: 100%;
  ul {
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    li {
      height: 100%;
      display: flex;
      align-items: center;
      a {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.1rem;
        display: inline-flex;
        align-items: center;
        height: 100%;
        position: relative;
        transition: all 0.3s ease-out;

        &::after {
          content: "";
          width: 0px;
          height: 0.2rem;
          position: absolute;
          left: 0;
          top: calc(100% - 2px);
          background-color: #FF3366;
          transition: all 0.3s ease-out;
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