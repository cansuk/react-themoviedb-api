import React from 'react'
import { Grid, Segment } from 'semantic-ui-react';
import MoviesMenu from '../menu';
import Movies from '../movie';

const Home = () => {
    return (
        <Grid columns={2}>
            <Grid.Row stretched>

                <Grid.Column width={4}>
                    <MoviesMenu />
                </Grid.Column>

                <Grid.Column width={12}>
                    <Segment>
                        <Movies />
                    </Segment>
                </Grid.Column>

            </Grid.Row>
        </Grid>
    )
}

export default Home;
