import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Column, Container, Row } from '../../styled-components/FlexBox';
import { MenuLink } from '../../styled-components/MenuLink';
import { ListTypes, RouteKeys } from '../shared/synthetic-enums';

const MoviesMenu = () => {
    const [activeItem, setActiveItem] = useState("searchForMovies");
    let navigate = useNavigate();

    const handleItemClick = (e) => {
        setActiveItem(e.target.name);
        navigate(`/${e.target.name}`);
    };

    return (
        <Column vertical width={"100%"}>
            <Row>
                <h4>Movies</h4>
            </Row>
            <Row>
                <MenuLink
                    name={RouteKeys.searchForMovies}
                    onClick={handleItemClick}
                    active={activeItem === RouteKeys.searchForMovies}> Search for movies </MenuLink>

            </Row>

            <hr />

            <Row>
                <h4> My lists </h4>
            </Row>

            <Row>
                <MenuLink
                    name={RouteKeys.favoriteMovies}
                    onClick={handleItemClick}
                    active={activeItem === RouteKeys.favoriteMovies}> Favorite </MenuLink>
            </Row>

            <Row>
                <MenuLink
                    name={RouteKeys.watchLaterMovies}
                    onClick={handleItemClick}
                    active={activeItem === RouteKeys.watchLaterMovies}> Watch Later </MenuLink>
            </Row>





        </Column >
    )
}

export default MoviesMenu;
