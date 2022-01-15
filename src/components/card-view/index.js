import React, { lazy, Suspense, useMemo } from 'react';
import { Card, Image, Icon, Segment, Grid, Label, Button } from 'semantic-ui-react';
import shortid from 'shortid';
import { constants } from '../../constants';
import RatingView from '../shared/RatingView';
import TagView from '../tag-view';

const CardView = (props) => {
    const { movies, handleRemoveFromList } = props;
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
                    <TagView dataList={data["genres"]?.map(genre => genre.name)} />
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Grid columns={2}>
                    <Grid.Column key={shortid.generate()}>
                        <a>
                            <RatingView value={data["vote_average"]} maxValue={10} />
                            {`${data["vote_average"]}/${data["vote_count"]} votes`}
                        </a>
                    </Grid.Column>
                    <Grid.Column key={shortid.generate()}>
                        <Button animated='vertical' onClick={() => handleRemoveFromList(data["id"])}>
                            <Button.Content hidden>Remove</Button.Content>
                            <Button.Content visible>
                                <Icon name='trash' />
                            </Button.Content>
                        </Button>
                    </Grid.Column>
                </Grid>
            </Card.Content>
        </Card>
    }

    return <Card.Group>
        {movies?.map(predicate)}
    </Card.Group>
}

export default CardView;
