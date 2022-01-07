import React, { lazy, Suspense, useMemo } from 'react';
import { Card, Image, Icon, Segment, Grid, Label } from 'semantic-ui-react';
import shortid from 'shortid';
import { constants } from '../../constants';
import ImageView from '../image-view';
import RatingView from '../shared/RatingView';
import TagView from '../tag-view';

const CardView = ({ movies }) => {
    const predicate = (data) => {

        return <Card key={shortid.generate()} style={{ backroundColor: "red" }}>
            <Suspense fallback={<Icon name="protect" />}>
                <ImageView src={constants.imgRoot.concat(data["poster_path"])} />
            </Suspense>
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
