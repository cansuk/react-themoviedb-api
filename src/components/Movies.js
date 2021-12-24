import React, { useEffect } from 'react'
import { movieServices } from '../api/Movies'

const Movies = () => {
    useEffect(() => {
        const criteria = { query: 'fight' };

        movieServices.getMovies(criteria).then(result => {
            debugger;
            console.log(result);
        })
        return () => {
            // cleanup
        }
    }, [])
    return (
        <div>
            Movies...
        </div>
    )
}

export default Movies;
