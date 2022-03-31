import styled from "styled-components";

export const FlipCardContainer = styled.div`
    background-color: transparent;
    width: 100%;
    height: 100%;
    perspective: 1000px;
`;

export const FlipCardInner = styled.div`
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        &:hover{
            transform: rotateY(180deg);
        }
`;

export const FlipCardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display:flex;
    alignItems:stretch;
`;

export const FlipCardFront = styled(FlipCardFace)`
    background-color: black;
    color: white;
`;

export const FlipCardBack = styled(FlipCardFace)`
    transform: rotateY(180deg);
`;

