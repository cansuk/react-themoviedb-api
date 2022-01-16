import React, { lazy, Suspense, useMemo } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Card, Image } from 'semantic-ui-react';
import shortid from 'shortid';
import { constants } from '../../constants';
import { Button } from '../../styled-components/Button';
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
                    <img border={true} src={constants.imgRoot.concat(data["poster_path"])} alt="img_poster" />
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
                    <Button onClick={() => handleRemoveFromList(data["id"])}>
                        Remove <FaTrash />
                    </Button>
                </CardFooterItem>
            </CardFooter>

        </CardWrapper>
        // return <Card key={shortid.generate()} style={{ backroundColor: "red" }}>

        //     <Image border={true} src={constants.imgRoot.concat(data["poster_path"])} wrapped ui={true} />

        //     <Card.Content>
        //         <Card.Header>
        //         </Card.Header>
        //         <Card.Meta>
        //             <span className='date'>Released : {data["release_date"]}</span>
        //         </Card.Meta>
        //         <Card.Description>
        //             <TagView dataList={data["genres"]?.map(genre => genre.name)} />
        //         </Card.Description>
        //     </Card.Content>
        //     <Card.Content extra>
        //         <Grid columns={2}>
        //             <Grid.Column key={shortid.generate()}>
        //                 <a>
        //                     <RatingView value={data["vote_average"]} maxValue={10} />
        //                     {`${data["vote_average"]}/${data["vote_count"]} votes`}
        //                 </a>
        //             </Grid.Column>
        //             <Grid.Column key={shortid.generate()}>
        //                 <Button animated='vertical' onClick={() => handleRemoveFromList(data["id"])}>
        //                     <Button.Content hidden>Remove</Button.Content>
        //                     <Button.Content visible>
        //                         <Icon name='trash' />
        //                     </Button.Content>
        //                 </Button>
        //             </Grid.Column>
        //         </Grid>
        //     </Card.Content>
        // </Card>
    }

    return <Container>
        {movies?.map(predicate)}
    </Container>
}

export default CardView;
