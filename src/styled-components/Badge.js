import styled from "styled-components";
import { colors } from "./Variables";

export const Badge = styled.div`
display: block;
padding: 2px 10px;
font-family: inherit;
font-size: 0.8em;
color: yellowgreen;
background-color:black;
border: 1px solid ${props => props.color || colors.primaryColor};
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
opacity: 0.7;

&:hover {
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  transform: translate(0, -5px);
  font-weight:800;
  font-size:14px;
  text-decoration:underline;
  opacity: 1;
}
`;