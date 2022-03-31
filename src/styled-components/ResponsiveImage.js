import styled from "styled-components"

export const ImgContainer = styled.div`
position:relative;
`;

const ImgBar = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content:start;
`

export const ImgBottomLeftBar = styled(ImgBar)`
    bottom: 3px;
    left: 0px;
`;

export const ImgBottomRightBar = styled(ImgBar)`
    bottom: 3px;
    right: 0px;
`;

export const ImgTopLeftBar = styled(ImgBar)`
    top: 1px;
    left: 0px;
`;

export const ImgTopRightBar = styled(ImgBar)`
    top: 1px;
    right: 0px;
`;


export const ResponsiveImage = styled.img`
    max-width: 100%;
    width:300px;
    height: auto;
    src: ${props => props.src};
`;