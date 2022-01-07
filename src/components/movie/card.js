import React, { useEffect, useRef, useState } from 'react';
import { Card, Image, Icon, Segment, Grid, Label } from 'semantic-ui-react';
import { constants } from '../../constants';



export const CardView = ({ movies }) => {

    const predicate = (data) => {
        return <Card>
            {/* <Image src={""} size="medium" rounded wrapped ui={false} /> */}
            <Image src={constants.imgRoot.concat(data["poster_path"])} size="medium" rounded wrapped ui={false} />

            <Card.Content>
                <Card.Header>

                    <Label attached='top'>HTML</Label>
                </Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    <div>
                        <Label as='a' tag>
                            New
                        </Label>
                        <Label as='a' color='red' tag>
                            Upcoming
                        </Label>
                        <Label as='a' color='teal' tag>
                            Featured
                        </Label>
                    </div>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='star' />
                    {`${data["vote_average"]}/${data["vote_count"]} votes`}
                </a>
            </Card.Content>
        </Card>;
        // return <Segment>
        //     <Label as='a' color='red' ribbon>
        //         Overview
        //     </Label>
        //     <Card>
        //         {/* <Image src={""} size="medium" rounded wrapped ui={false} /> */}
        //         <Image src={constants.imgRoot.concat(data["poster_path"])} size="medium" rounded wrapped ui={false} />

        //         <Card.Content>
        //             <Card.Header>Matthew</Card.Header>
        //             <Card.Meta>
        //                 <span className='date'>Joined in 2015</span>
        //             </Card.Meta>
        //             <Card.Description>
        //                 Matthew is a musician living in Nashville.
        //             </Card.Description>
        //         </Card.Content>
        //         <Card.Content extra>
        //             <a>
        //                 <Icon name='star' />
        //                 {`${data["vote_average"]}/${data["vote_count"]} votes`}
        //             </a>
        //         </Card.Content>
        //     </Card>

        // </Segment>
    };


    return <Card.Group>
        {movies?.map(predicate)}
    </Card.Group>


}
