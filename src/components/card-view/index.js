import React, { lazy, Suspense, useMemo } from 'react';
import { Card, Image, Icon, Segment, Grid, Label } from 'semantic-ui-react';
import shortid from 'shortid';
import { constants } from '../../constants';
import ImageView from '../image-view';
import RatingView from '../shared/RatingView';
import DarkImgFilter from '../shared/styled-components/dark-img-filter';
import TagView from '../tag-view';
import '../../styles/index.css';

const CardView = ({ movies }) => {
    const predicate = (data) => {
        return <Card key={shortid.generate()} style={{ backroundColor: "red" }}>

            <Image border={true} src={constants.imgRoot.concat(data["poster_path"])} wrapped ui={true} />

            <Card.Content>
                <Card.Header>
                </Card.Header>
                <Card.Meta>
                    <span className='date'>Released : {data["release_date"]}</span>
                </Card.Meta>
                <Card.Description>
                    <TagView dataList={data["genres"].map(genre => genre.name)} />
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <RatingView value={data["vote_average"]} maxValue={10} />
                    {`${data["vote_average"]}/${data["vote_count"]} votes`}
                </a>
            </Card.Content>
        </Card>
    }

    return <Card.Group>
        {movies?.map(predicate)}
    </Card.Group>
}

export default CardView;
