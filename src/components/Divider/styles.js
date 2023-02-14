/** @jsx jsx */
import styled from "@emotion/styled";

export const Container = styled.div`
  background: linear-gradient(270deg, ${props => props.from} 0%, ${props => props.to} 100%);
  height: 0.1rem;
  width: 100%;
`;