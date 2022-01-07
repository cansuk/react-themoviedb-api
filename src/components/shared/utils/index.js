import React from 'react'

export const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const getRandomSemanticColor = () => {
    const semanticColors = ['red',
        'orange',
        'yellow',
        'olive',
        'green',
        'teal',
        'blue',
        'violet',
        'purple',
        'pink',
        'brown',
        'grey',
        'black']
    return semanticColors[Math.floor(Math.random() * semanticColors.length)];
}