import React, { useState } from 'react'
import { Menu, Grid, Segment } from 'semantic-ui-react';

const MoviesMenu = () => {
    const [activeItem, setActiveItem] = useState("getAvailableGenreSeeds");

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <Menu vertical style={{ width: '100%' }}>
            <Menu.Item>
                <Menu.Header>Movies</Menu.Header>
                <Menu.Menu>
                    <Menu.Item
                        name='searchForMovies'
                        active={activeItem === 'searchForMovies'}
                        onClick={handleItemClick}
                    >Search for movies
                    </Menu.Item>


                </Menu.Menu>
            </Menu.Item>

        </Menu>
    )
}

export default MoviesMenu;
