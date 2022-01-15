import { createSlice } from '@reduxjs/toolkit'
import { updateLocalStorage } from '../../components/shared/utils';

export const listReducer = createSlice({
    name: 'listManager',
    initialState: {
        listIds: { favorite: [], watchLater: [] },      // storage ids
        listMovies: { favorite: [], watchLater: [] },   // movies by ids
    },
    reducers: {
        addToList: (state, { payload }) => {
            const { type, ids } = payload;
            state.listIds[type].push(ids);
            state.listIds[type] = state.listIds[type].flat();
        },
        removeFromList: (state, { payload }) => {
            const { type, id } = payload;
            const predicate = (el) => el === id;
            const arr = state.listIds[type];
            let index = arr.findIndex(predicate);
            arr.splice(index, 1);
            updateLocalStorage(arr, type);
        },
        setMoviesList: (state, { payload }) => {
            const { type, movies } = payload;
            state.listMovies[type] = [];
            state.listMovies[type].push(movies);
            state.listMovies[type] = state.listMovies[type].flat();
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToList, removeFromList, setMoviesList } = listReducer.actions

export default listReducer.reducer