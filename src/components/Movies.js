import React, { useEffect, useReducer } from 'react';
import { Grid, Search, Segment, Label } from 'semantic-ui-react';
import { movieServices } from '../api/Movies';
import { genreServices } from '../api/Genres';

const Movies = () => {
    // useEffect(() => {
    //     const criteria = { query: 'fight' };
    //     movieServices.getMovies(criteria).then(result => {
    //         debugger;
    //         console.log(result);
    //     })
    //     return () => {
    //         // cleanup
    //     }
    // }, []);
    React.useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, []);
    const initialState = {
        loading: false,
        results: [],
        value: '',
        genres: []
    }
    const movieReducer = (state, action) => {
        switch (action.type) {
            case 'CLEAN_QUERY':
                return initialState;
            case 'START_SEARCH':
                return { ...state, loading: true, value: action.query };
            case 'FINISH_SEARCH':
                return { ...state, loading: false, results: action.results };
            case 'UPDATE_SELECTION':
                return { ...state, value: action.selection };
            case 'SET_GENRES':
                {
                    return { ...state, genres: action.genres };
                }
            default:
                throw new Error("Something went wrong...");
        }
    }
    const [state, dispatch] = useReducer(movieReducer, initialState);
    const { loading, results, value } = state;
    const timeoutRef = React.useRef();

    const handleSearchChange = React.useCallback((e, data) => {
        clearTimeout(timeoutRef.current);
        dispatch({ type: 'START_SEARCH', query: data.value });


        timeoutRef.current = setTimeout(() => {
            if (data.value.length === 0) {
                dispatch({ type: 'CLEAN_QUERY' });
                return;
            }
            genreServices.getGenres().then(genres => {
                debugger;
                console.log(genres);

                dispatch({
                    type: 'SET_GENRES',
                    genres: genres
                })
            });

            const criteria = { query: value };

            movieServices.getMovies(criteria).then(movies => {

                dispatch({
                    type: 'FINISH_SEARCH',
                    results: movies
                })
            }).catch(err => {
                // TODO handle error
                debugger;
            });

        }, 3000)
    });

    const resultRenderer = (result) => {
        //        console.log(state.genres);

        return <Label content={result.title} />;
    }
    return (
        <Grid>
            <Grid.Column width={6}>
                <Search
                    loading={loading}
                    onResultSelect={(e, data) =>
                        dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
                    }
                    onSearchChange={handleSearchChange}
                    results={results}
                    resultRenderer={resultRenderer}
                    value={value}
                />
            </Grid.Column>

        </Grid>
    )
}

export default Movies;


// import React, { useEffect } from 'react'
// import { movieServices } from '../api/Movies'

// const Movies = () => {
//     useEffect(() => {
//         const criteria = { query: 'fight' };

//         movieServices.getMovies(criteria).then(result => {
//             debugger;
//             console.log(result);
//         })
//         return () => {
//             // cleanup
//         }
//     }, [])
//     return (
//         <div>
//             Movies...
//         </div>
//     )
// }

// export default Movies;
