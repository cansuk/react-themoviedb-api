import React, { lazy, Suspense, useMemo } from 'react';
import { FaTrash } from 'react-icons/fa';
import shortid from 'shortid';
import { constants } from '../../constants';
import { Button, CardButton } from '../../styled-components/Button';
import { CardContent, CardFooter, CardFooterItem, CardHeader, CardMeta, CardWrapper } from '../../styled-components/Card';
import DarkImgFilter from '../../styled-components/DarkImgFilter';
import { Container } from '../../styled-components/FlexBox';
import { Icon } from '../../styled-components/Icon';
import RatingView from '../shared/RatingView';
import TagView from '../tag-view';

const CardView = (props) => {
    const { movies, handleRemoveFromList } = props;
    const predicate = (data) => {
        return <CardWrapper key={shortid.generate()}>
            <CardHeader>
                <DarkImgFilter>
                    <img src={constants.imgRoot.concat(data["poster_path"])} alt="img_poster" />
                </DarkImgFilter>
            </CardHeader>
            <CardMeta>
                <span className='date'>Released : {data["release_date"]}</span>
            </CardMeta>
            <CardContent>
                <TagView dataList={data["genres"]?.map(genre => genre.name)} />
            </CardContent>
            <CardFooter>
                <CardFooterItem>
                    <a>
                        <RatingView value={data["vote_average"]} voteCount={data["vote_count"]} maxValue={10} />
                    </a>
                </CardFooterItem>
                <CardFooterItem>
                    <CardButton onClick={() => handleRemoveFromList(data["id"])}>
                        Remove <FaTrash />
                    </CardButton>
                </CardFooterItem>
            </CardFooter>

        </CardWrapper>
    }

    return <Container>
        {movies?.map(predicate)}
    </Container>
}

export default CardView;
