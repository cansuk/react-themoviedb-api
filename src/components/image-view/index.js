import React from 'react'
import DarkImgFilter from '../../styled-components/DarkImgFilter'


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
