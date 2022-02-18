import React from 'react'
import { BsCardImage } from 'react-icons/bs'

const ImgPreview = () => {
    return (
        <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid lime' }}>
            <BsCardImage />
        </div>
    )
}

export default ImgPreview;