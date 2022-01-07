import React from 'react'
import { Label, Segment, Image } from 'semantic-ui-react'
import shortid from 'shortid'
import { getRandomSemanticColor } from '../shared/utils'

const TagView = ({ dataList }) => {

    return (<Label.Group tag>
        {dataList.map(data =>
            <Label key={shortid.generate()} tag color={getRandomSemanticColor()}>
                {data}
            </Label>)}
    </Label.Group>)

}

export default TagView
