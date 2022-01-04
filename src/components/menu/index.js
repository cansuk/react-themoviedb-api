import React, { useState } from 'react'
import { Menu, Grid, Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { ListTypes, RouteKeys } from '../shared/synthetic-enums';

const MoviesMenu = () => {
    const [activeItem, setActiveItem] = useState("searchForMovies");
    let navigate = useNavigate();

    const handleItemClick = (e, { name, type }) => {
        setActiveItem(name);
        navigate(`/${name}`);
    };

    return (
        <Menu vertical style={{ width: '100%' }}>
            <Menu.Item>
                <Menu.Header>Movies</Menu.Header>
                <Menu.Menu>
                    <Menu.Item
                        name={RouteKeys.searchForMovies}
                        active={activeItem === RouteKeys.searchForMovies}
                        onClick={handleItemClick}
                    >Search for movies
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                <Menu.Header>My lists</Menu.Header>
                <Menu.Menu>
                    <Menu.Item
                        name={RouteKeys.favoriteMovies}
                        active={activeItem === RouteKeys.favoriteMovies}
                        onClick={handleItemClick}
                    >Favorite
                    </Menu.Item>
                    <Menu.Item
                        name={RouteKeys.watchLaterMovies}
                        active={activeItem === RouteKeys.watchLaterMovies}
                        onClick={handleItemClick}
                    >Watch Later
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>

        </Menu>
    )
}

export default MoviesMenu;
