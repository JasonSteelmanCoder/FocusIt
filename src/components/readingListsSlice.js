import { createSlice } from "@reduxjs/toolkit";

const readingListsSlice = createSlice({
    name: 'readingListsSlice',
    initialState: [],
    reducers: {
        addList: (state, action) => {
            return [
                ...state,
                action.payload
            ]
        },
        removeList: (state, action) => {
            return state.filter(list => Object.keys(list)[0] !== action.payload)
        } 
    }
})

export const { addList, removeList } = readingListsSlice.actions;

export default readingListsSlice.reducer;