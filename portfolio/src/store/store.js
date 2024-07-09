import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import navBarOpenReducer from "./navBarSlice";



const store = configureStore({
    reducer:{
        darkMode: darkModeReducer,
        navBarOpen: navBarOpenReducer,
    },
});

export default store;