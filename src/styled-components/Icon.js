import styled, { css } from "styled-components";

export const Icon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;

  &:hover {
    opacity: .95;
  }

  ${props =>
        props.big &&
        css`
      font-size: 26px;
    `}

  ${props =>
        props.eye &&
        css`
      position: absolute;
      top: 8px;
      right: 0;
    `}

  ${props =>
        props.small &&
        css`
      font-size: 14px;
    `}
`;