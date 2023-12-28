import { createSlice } from "@reduxjs/toolkit";

const searchFormSlice = createSlice({
    name: 'searchForm',
    initialState: [],
    reducers: {
        'addResults' : (state, action) => {
            return [
                ...state,
                ...(action.payload)
            ];
        },
    },
})

export const { addResults } = searchFormSlice.actions;

export default searchFormSlice.reducer;