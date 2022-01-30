import styled, { css } from "styled-components";

export const MenuLink = styled.a`
cursor:pointer;
line-height:2;

&:hover {
    opacity: 1;
    color:rgba(0,0,0,.85);
    transition:opacity .1s ease;
  }
  
${props =>
        props.active &&
        css`
            font-weight: 700;
            color:rgba(0,0,0,.95);
            `}  

`;