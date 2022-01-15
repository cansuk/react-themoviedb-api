import React from 'react'
import shortid from 'shortid'
import { Badge } from '../../styled-components/Badge'
import { getRandomSemanticColor } from '../shared/utils'

const TagView = ({ dataList }) => {

    return (
        <div>
            {dataList.map(data =>
                <Badge key={shortid.generate()} tag color={getRandomSemanticColor()}>
                    {data}
                </Badge>)

            }
        </div>)

}

export default TagView
