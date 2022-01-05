import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieServices, searchServices } from '../../api';
import FavoriteList from '../list-favorite';
import WatchLaterList from '../list-watch-later';
import { ListTypes } from '../shared/synthetic-enums';

const MoviesList = ({ type }) => {
    const [ids, setIds] = useState([]);
    // let params = useParams();
    // console.log("params.type");
    // console.log(params.type);

    useEffect(() => {
        const moviesStorage = JSON.parse(window.localStorage.getItem('movies-api'));
        // setIds(moviesStorage[type]);
        var ids = moviesStorage[type];
        // movieServices.getMovieById({ movieId: id }).then(movies => {
        //     debugger;
        //     console.console.log(movies);
        // }).catch(error => {
        //     debugger;
        //     console.log(error);
        // })
        var promises = ids.map(id => movieServices.getMovieById({ movieId: id }));

        Promise.all(promises).then((movie) => {
            debugger;
            console.console.log(movie);
        }).catch(error => {
            debugger;
            console.log(error);
        });

        // const criteria = { query: state.value };

        // searchServices.getMoviesByCriterias(criteria).then(movies => {
        //     dispatch({
        //         type: 'FINISH_SEARCH',
        //         results: movies
        //     });
        // }).catch(err => {
        //     // TODO handle error
        //     debugger;
        // });

    }, [type]);

    return (
        type === ListTypes.favorite ? <FavoriteList ids={ids} />
            : <WatchLaterList ids={ids} />
    )
}

export default MoviesList;
