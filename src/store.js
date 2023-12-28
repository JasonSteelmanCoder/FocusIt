import { configureStore } from "@reduxjs/toolkit";
import searchFormSlice from "./components/searchFormSlice";

const store = configureStore({
    reducer: {
        searchForm: searchFormSlice,
    }
});

export default store;