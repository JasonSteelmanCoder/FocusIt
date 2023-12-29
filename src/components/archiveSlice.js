import { createSlice } from "@reduxjs/toolkit";

const archiveSlice = createSlice({
    name: 'archiveSlice',
    initialState: [],
    reducers: {
        addArchived: (state, action) => {
            return [
                ...state,
                action.payload
            ]
        },
        deleteArchived: (state, action) => {
            return state.filter(archivedItem => archivedItem.id !== action.payload)
        }
    }
});

export const { addArchived, deleteArchived } = archiveSlice.actions;

export default archiveSlice.reducer;