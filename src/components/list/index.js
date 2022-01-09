import React, { useEffect, useState } from 'react';
import { movieServices } from '../../api';
import CardView from '../card-view';
import { getManagedArr, updateLocalStorage } from '../shared/utils';


const MoviesList = ({ type }) => {
    const [state, setState] = useState({ movies: [], moviesStorage: null });

    // const [movies, setMovies] = useState([]);

    const handleRemoveFromList = (id) => {
        //const moviesStorage = JSON.parse(window.localStorage.getItem('movies-api'));

        let ids = state.moviesStorage?.[type];
        let managedArr = getManagedArr(ids, id);
        updateLocalStorage(managedArr, type);

        setState({ ...state, moviesStorage: state.moviesStorage })

    }
    useEffect(() => {
        const moviesStorage = JSON.parse(window.localStorage.getItem('movies-api'));

        let ids = moviesStorage?.[type];
        let promises = ids?.map(id => movieServices.getMovieById({ movieId: id }));
        Promise.all(promises).then((movies) => {
            // setMovies(movies)
            setState({ movies: movies, moviesStorage: moviesStorage })
        }).catch(error => {
            debugger;
            console.log(error);
        });
    }, [type]);


    return (
        // type === ListTypes.favorite ? <FavoriteList ids={ids} />
        //     : <WatchLaterList ids={ids} />
        state.moviesStorage && <CardView movies={state.movies} handleRemoveFromList={handleRemoveFromList} />
    )
}

export default MoviesList;
