import { configureStore } from "@reduxjs/toolkit";
import searchFormSlice from "./components/searchFormSlice.js";
import readingListFormSlice from "./components/readingListFormSlice.js";
import readingListsSlice from "./components/readingListsSlice.js";

const store = configureStore({
    reducer: {
        searchForm: searchFormSlice,
        readingListForm: readingListFormSlice,
        readingLists: readingListsSlice,
    }
});

export default store;