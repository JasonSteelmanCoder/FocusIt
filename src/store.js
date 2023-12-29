import { configureStore } from "@reduxjs/toolkit";
import searchFormSlice from "./components/searchFormSlice.js";
import readingListFormSlice from "./components/readingListFormSlice.js";
import readingListsSlice from "./components/readingListsSlice.js";
import archiveSlice from "./components/archiveSlice.js";

const store = configureStore({
    reducer: {
        searchForm: searchFormSlice,
        readingListForm: readingListFormSlice,
        readingLists: readingListsSlice,
        archive: archiveSlice,
    }
});

export default store;