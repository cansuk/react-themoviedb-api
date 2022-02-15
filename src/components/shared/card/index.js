import React from 'react'
import { FlipCardBack, FlipCardContainer, FlipCardFront, FlipCardInner } from '../../../styled-components/FlipCard';

const FlipCard = ({ front, back }) => {
    return (
        <FlipCardContainer>
            <FlipCardInner>
                <FlipCardFront>
                    {front}
                </FlipCardFront>
                <FlipCardBack>
                    {back}
                </FlipCardBack>
            </FlipCardInner>
        </FlipCardContainer>
    )
}

export default FlipCard;