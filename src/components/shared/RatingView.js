import React from 'react'
import { Rating } from 'semantic-ui-react'

const RatingView = ({ value, maxValue }) => {
    const ratingVal = value * 3 / maxValue;

    return (
        <Rating icon='heart' defaultRating={ratingVal} maxRating={3} disabled />
    )
}

export default RatingView
