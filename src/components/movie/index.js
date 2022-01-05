import React, { useEffect, useReducer } from 'react';
import { Grid, Search, Segment, Label, Input, Button, Icon } from 'semantic-ui-react';
import { searchServices, genreServices } from '../../api';
import { CustomTable } from '../shared/CustomTable';
import { getTableData } from './helper';
import { useParams } from 'react-router-dom';

const Movies = () => {
    //  let params = useParams();
    // console.log("params.searchTerm");
    // console.log(params.searchTerm);


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

    const { loading, results, value, genres } = state;

    // event handler
    const handleSearch = (e) => {
        if (state.value === 0) {
            dispatch({ type: 'CLEAN_QUERY' });
            return;
        }
        genreServices.getGenres().then(genres => {
            dispatch({
                type: 'SET_GENRES',
                genres: genres
            });
        });

        const criteria = { query: state.value };

        searchServices.getMoviesByCriteria(criteria).then(movies => {
            dispatch({
                type: 'FINISH_SEARCH',
                results: movies
            });
        }).catch(err => {
            // TODO handle error
            debugger;
        });

    };

    // event handler
    const handleChange = React.useCallback((e, data) => {
        dispatch({ type: 'START_SEARCH', query: data.value });
    }, []);

    return (
        <Grid columns={2} padded='vertically'>
            <Grid.Column>
                <Input
                    icon={<Icon name='search' link onClick={handleSearch} />}
                    placeholder='Search...'
                    onChange={handleChange}
                />
            </Grid.Column>
            <CustomTable tableData={getTableData(state.results, state.genres)} />
        </Grid>
    )
    // return <Input
    //     icon={<Icon name='search' link onClick={handleSearch} />}
    //     placeholder='Search...'
    //     onChange={handleChange}
    // />
}

export default Movies;
