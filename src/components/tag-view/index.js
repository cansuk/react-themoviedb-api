import React, { lazy } from 'react'
import shortid from 'shortid'
import { Badge } from '../../styled-components/Badge'
import { Container } from '../../styled-components/FlexBox'
import { getRandomPrimaryColor } from '../shared/utils'

const TagView = ({ dataList }) => {
    return (
        <Container>
            {dataList.map(data => {
                return <Badge key={shortid.generate()} tag color={getRandomPrimaryColor()}>
                    {data}
                </Badge>
            })
            }
        </Container>)

}

export default TagView
