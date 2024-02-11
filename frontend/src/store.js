import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "./loggedslice.js";

export default configureStore({
    reducer: {
        logged: loggedReducer ,     

    }
});