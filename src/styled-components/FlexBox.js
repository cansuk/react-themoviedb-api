import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap:wrap;
justify-content:  ${props => props.justifyContent}
/* justify-content: center;
align-items:center; */
`;

/* Create four equal columns that sits next to each other */
export const Column = styled.div`
  flex: 25%;
  max-width: ${props => props.width || "100%"};
  padding: 4px 4px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px 4px;
`;