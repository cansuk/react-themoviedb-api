import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteList from '../list-favorite';
import WatchLaterList from '../list-watch-later';
import { ListTypes } from '../shared/synthetic-enums';

const MoviesList = ({ type }) => {
    debugger;
    const [ids, setIds] = useState([]);
    // let params = useParams();
    // console.log("params.type");
    // console.log(params.type);

    useEffect(() => {
        const moviesStorage = JSON.parse(window.localStorage.getItem('movies-api'));
        setIds(moviesStorage[type]);
    }, [type]);

    return (
        type === ListTypes.favorite ? <FavoriteList ids={ids} />
            : <WatchLaterList ids={ids} />
    )
}

export default MoviesList;
