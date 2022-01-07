import styled from 'styled-components';

const DarkImgFilter = styled.div`
filter: brightness(50%);
&:hover {
    filter: brightness(100%);
    transition: 0.9s ease-out 100ms;
  }
`;

export default DarkImgFilter
