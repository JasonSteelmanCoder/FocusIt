import { configureStore } from "@reduxjs/toolkit";
import searchFormSlice from "./components/searchFormSlice";
import readingListFormSlice from "./components/readingListFormSlice";

const store = configureStore({
    reducer: {
        searchForm: searchFormSlice,
        readingListForm: readingListFormSlice,
    }
});

export default store;