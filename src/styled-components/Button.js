import styled from "styled-components";
import { colors } from "./Variables";

export const Button = styled.button`
  position: relative;
  background-color: ${props => props.color};
  border: none;
  font-size: 12px;
  color: #FFFFFF;
  padding: 5px;
  width: 100%;
  max-width:100px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
`

export const CheckButton = styled.button`
display: block;
padding: 5px 5px;
font-family: inherit;
font-size: 0px;
color: ${props => props.active ? (props.color || colors.primaryColor) : "white"};;
background-color:black;
/* background-color: ${props => props.active ? (props.color || colors.primaryColor) : "white"}; */
border: 1px solid ${props => props.color || colors.primaryColor};
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
opacity: 0.7;

&:hover {
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  transform: translate(0, -5px);
  opacity: 1;
  font-weight:800;
  font-size:12px;
}
`;

export const CardButton = styled.button`
display: block;
width: 100%;
min-width:100px;
padding: 12px 20px;
font-family: inherit;
font-size: 14px;
font-weight: 700;
letter-spacing:inherit;
color: ${colors.fontColorLight};
background-color: ${colors.transparentGreen};
border: 0;
border-radius:${props => props.rounded ? '35px' : '0px'};
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
z-index:1;


&:hover {
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  transform: translate(0, -5px);
}
`;

export const Span = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  &::after{
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
`;

export const SlippingIconButton = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: ${props => props.color};
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;


${Span}:hover & {
    color: "red";
  }
`;

export const RippledButton = styled.button`
  position: relative;
  background-color: ${props => props.color};
  border: none;
  font-size: 12px;
  color: #FFFFFF;
  padding: 5px;
  width: 100%;
  max-width:100px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;


&:after {
  content: "";
  background: #f1f1f1;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

&:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}
`