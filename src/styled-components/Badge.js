import styled from "styled-components";
import { colors } from "./Variables";

export const Badge = styled.button`
display: block;
width: 100%;
font-family: inherit;
font-size: 14px;
font-weight: 700;
color: ${colors.fontColorDark}
border-bottom: 1px solid ${colors.primaryColor}
border: 0;

box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

&:hover {
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  transform: translate(0, -5px);
}
`;