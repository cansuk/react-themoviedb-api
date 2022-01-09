import styled from "styled-components";

const MultiLineTextEllipsis = styled.p`
display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3.6em;
  line-height: 1.8em; 
`;

export default MultiLineTextEllipsis
