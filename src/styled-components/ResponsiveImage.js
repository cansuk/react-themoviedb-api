import styled from "styled-components"

export const ResponsiveImage = styled.img`
    src: ${props => props.src};
    width: 100%;
    max-width: 300px;
    height: auto;
`