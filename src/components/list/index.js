import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieServices } from '../../api';
import { addToList, removeFromList, setMoviesList } from '../../redux/reducers/listReducer';
import CardView from '../card-view';
import Loading from '../shared/loading';


const MoviesList = ({ type }) => {
    const dispatch = useDispatch();
    const listMovies = useSelector(state => state.listManager.listMovies);

    const handleRemoveFromList = (id) => {
        dispatch(removeFromList({ type, id }));
        let movies = listMovies[type].filter(movie => movie.id !== id);
        dispatch(setMoviesList({ type, movies }));
    }

    useEffect(() => {
        // read local storage and set to redux :
        const moviesStorage = JSON.parse(window.localStorage.getItem('movies-api'));
        let ids = moviesStorage?.[type];
        dispatch(addToList({ type, ids }));

        // get movies objects with ids :
        let promises = ids?.map(id => movieServices.getMovieById({ movieId: id }));
        Promise.all(promises).then((movies) => {
            dispatch(setMoviesList({ type, movies }));
        }).catch(error => {
            console.error(error);
        });

    }, [type]);

    // return listMovies[type].length === 0 ? "Nothing in that list" : <CardView movies={listMovies[type]} handleRemoveFromList={handleRemoveFromList} />
    return listMovies[type].length === 0 ? <Loading text="Please wait..." /> : <CardView movies={listMovies[type]} handleRemoveFromList={handleRemoveFromList} />
}

export default MoviesList;
