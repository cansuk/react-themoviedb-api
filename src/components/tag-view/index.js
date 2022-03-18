import React, { lazy } from 'react'
import shortid from 'shortid'
import { Badge } from '../../styled-components/Badge'
import { Container } from '../../styled-components/FlexBox'
import { getRandomPrimaryColor } from '../shared/utils'

const TagView = ({ dataList }) => {
    debugger;

    return (
        <Container>
            {dataList.map(data => {
                //eturn <span>{data}</span>
                // const Comp = lazy(() => import(`./shared/genre-badges/${data}`));
                // return <Comp />;

                return <Badge key={shortid.generate()} tag color={getRandomPrimaryColor()}>
                    {data}
                </Badge>
            }
            )
            }
        </Container>)

}

export default TagView
