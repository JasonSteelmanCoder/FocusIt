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

        'clearReadingList': (state, action) => {
            return []
        },
    },
})

export const { addPost, removePost, clearReadingList } = readingListFormSlice.actions;

export default readingListFormSlice.reducer;