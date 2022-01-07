import React from 'react'
import { Image, Label, Segment } from 'semantic-ui-react'
import DarkImgFilter from '../shared/styled-components/darken-img'

const ImageView = ({ src }) => {
    return (
        <>
            <DarkImgFilter>
                <Segment>
                    {/* {src ? <Image src={src} size="tiny" rounded wrapped ui={false} style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }} /> : <Label content='Image not found!' icon='warning' />} */}
                    {src ? <div rounded wrapped ui={false} style={{
                        backgroundImage: `url(${src})`,
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }} /> : <Label content='Image not found!' icon='warning' />}

                </Segment>
            </DarkImgFilter>
        </>
    )
}

export default ImageView
