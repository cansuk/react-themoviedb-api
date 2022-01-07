import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieServices, searchServices } from '../../api';
import CardView from '../card-view';
import FavoriteList from '../list-favorite';
import WatchLaterList from '../list-watch-later';

import { getStructuredMovieData } from '../movie/helper';
import { ListTypes } from '../shared/synthetic-enums';


const MoviesList = ({ type }) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const moviesStorage = JSON.parse(window.localStorage.getItem('movies-api'));
        var ids = moviesStorage?.[type];
        var promises = ids?.map(id => movieServices.getMovieById({ movieId: id }));
        Promise.all(promises).then((movies) => {
            setMovies(movies)
        }).catch(error => {
            debugger;
            console.log(error);
        });
    }, [type]);

    return (
        // type === ListTypes.favorite ? <FavoriteList ids={ids} />
        //     : <WatchLaterList ids={ids} />
        <CardView movies={movies} />
    )
}

export default MoviesList;
