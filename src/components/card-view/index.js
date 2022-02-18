import React, { lazy, Suspense, useMemo } from 'react';
import { FaTrash } from 'react-icons/fa';
import shortid from 'shortid';
import { constants } from '../../constants';
import { CardButton } from '../../styled-components/Button';
import { CardContent, CardFooter, CardFooterItem, CardMeta, CardWrapper } from '../../styled-components/Card'
import { Container } from '../../styled-components/FlexBox';
import FlipCard from '../shared/card';
import RatingView from '../shared/RatingView';
import TagView from '../tag-view';

const CardView = (props) => {
    const { movies, handleRemoveFromList } = props;

    const predicate = (data) => {
        const front = <img src={constants.imgRoot.concat(data["poster_path"])} alt="img_poster" />;

        // const back = <>
        //     <CardMeta>
        //         <span className='date'>Released : {data["release_date"]}</span>
        //     </CardMeta>
        //     <CardContent>
        //         <TagView dataList={data["genres"]?.map(genre => genre.name)} />
        //     </CardContent>
        //     <CardFooter>
        //         <CardFooterItem>
        //             <a href={() => void (0)}>
        //                 <RatingView value={data["vote_average"]} voteCount={data["vote_count"]} maxValue={10} />
        //             </a>
        //         </CardFooterItem>
        //     </CardFooter>
        // </>;

        const back = <Container justifyContent="center" alignItems="center">
            <span className='date'>Released : {data["release_date"]}</span>
            <TagView dataList={data["genres"]?.map(genre => genre.name)} />
            <a href={() => void (0)}>
                <RatingView value={data["vote_average"]} voteCount={data["vote_count"]} maxValue={10} />
            </a>
        </Container>

        return <CardWrapper key={shortid.generate()}>
            <FlipCard front={back} back={front} />
            <CardButton onClick={() => handleRemoveFromList(data["id"])}>
                Remove <FaTrash />
            </CardButton>
        </CardWrapper>
    }

    return <React.Suspense fallback={<div className="data-grid-spin"> <p style={{ color: "white" }}> !!!!!!!!!!!!!!!!!!!!!!!! LOADING</p></div>}>
        <Container>
            {movies?.map(predicate)}
        </Container>
    </React.Suspense>

}

export default CardView;
