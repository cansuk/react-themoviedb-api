import React from 'react'
import { Divider } from 'semantic-ui-react'

export const Error = (msg) => {
    return (
        <div style={{ backgroundColor: 'red' }}>
            <h1>SOMETHING WENT WRONG!</h1>
            <Divider />
            <h2>{msg}</h2>
        </div>
    )
}
