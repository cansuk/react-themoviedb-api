import React from 'react'
import { Image, Label, Segment } from 'semantic-ui-react'
import DarkImgFilter from '../shared/styled-components/dark-img-filter'

const ImageView = ({ src }) => {
    return (
        <>
            <DarkImgFilter>
                <Segment>
                    {src ? <Image src={"https://react.semantic-ui.com/images/avatar/large/matthew.png"} size="tiny" rounded wrapped ui={false} style={{
                    }} /> : <Label content='Image not found!' icon='warning' />}

                </Segment>
            </DarkImgFilter>
        </>
    )
}

export default ImageView
