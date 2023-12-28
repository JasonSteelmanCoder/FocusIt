import { createSlice } from "@reduxjs/toolkit";

const readingListFormSlice = createSlice({
    name: 'readingListFormSlice',
    initialState: [],
    reducers: {
        'addPost': (state, action) => {
            return [
                ...state,
                action.payload
            ]    
        },

        'removePost': (state, action) => {
            return state.filter((post) => post !== action.payload)
        },
    },
})

export const { addPost, removePost } = readingListFormSlice.actions;

export default readingListFormSlice.reducer;