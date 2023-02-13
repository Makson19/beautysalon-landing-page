/** @jsx jsx */
import { css } from "@emotion/react";

export const showIt = css`
  background: #e62b4a;
  bottom: 60px;
  color: #ffffff;
  height: 40px;
  line-height: 0.8;
  padding: 10px 12px;
  position: fixed;
  right: 60px;
  text-align: center;
  width: 40px;
  z-index: 99;
  cursor: pointer;

  &:hover {
    background: #000;
    color: #fff;
  }
`;