import styled from "styled-components";
import { colors } from "./Variables";

export const Badge = styled.div`
display: block;
padding: 2px 10px;
font-family: inherit;
font-size: 0.8em;
color: yellowgreen;
background-color:${props => props.color || colors.primaryColor};
border: 1px solid ${props => props.color || colors.primaryColor};
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
opacity: 0.6;

&:hover {
  box-shadow: 0 5px 10px rgb(131 150 26);
  font-weight:800;
  opacity: 1;
}
`;