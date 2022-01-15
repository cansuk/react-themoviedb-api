import { createSlice } from '@reduxjs/toolkit'

export const listReducer = createSlice({
    name: 'listManager',
    initialState: {
        list: [],
    },
    reducers: {
        addToList: (state, { payload }) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.list.push(payload);
        },
        removeFromList: (state) => {
            state.list.splice(0, 1);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToList, removeFromList } = listReducer.actions

export default listReducer.reducer