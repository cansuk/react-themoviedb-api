import styled from 'styled-components';

const DarkImgFilter = styled.span`
filter: brightness(50%);
&:hover {
    filter: brightness(100%);
    transition: 0.8s ease-out 90ms;
  }
`;

export default DarkImgFilter;