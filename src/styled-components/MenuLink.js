import styled, { css } from "styled-components";

export const MenuLink = styled.a`
cursor:pointer;
line-height:2;

&:hover {
    opacity: 1;
    color:rgba(156,216,132,.85);
    transition:opacity .1s ease;
    text-decoration:underlined;
  }
  
${props =>
    props.active &&
    css`
        font-weight: 700;
        color:rgba(156,216,132,.85);
        `}  

`;