import React, { useEffect, useState } from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Rating } from '../../styled-components/Rating';
import { colors } from '../../styled-components/Variables';
import { constants } from '../../constants';
import shortid from 'shortid';

const RatingView = ({ value, maxValue, voteCount }) => {
    const ratingVal = value * constants.starRateCount / maxValue;

    const [stars, setStars] = useState([])

    useEffect(() => {

        const limit = Math.ceil(ratingVal);
        for (let i = 1; i <= limit; i++) {
            if (ratingVal >= i) {
                stars.push(<BsStarFill key={shortid.generate()} color={colors.primaryColor} />);
            } else {
                stars.push(<BsStarHalf key={shortid.generate()} color={colors.primaryColor} />);
            }
            setStars([...stars]);
        }
        if (stars.length < constants.starRateCount) {
            let grayStars = [...Array(constants.starRateCount - stars.length)].map((item) => { return <BsStar key={shortid.generate()} color={colors.primaryColor} /> });
            stars.push(grayStars);
            setStars([...stars]);
        }

        return () => {
            console.log("cleanup1")
            console.log("cleanup2")
        }
    }, [value])

    return (
        <Rating>
            {stars}
            {`${value}/${voteCount} votes`}
        </Rating>
    )
}

export default RatingView
