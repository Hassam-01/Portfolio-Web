import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import navBarOpenReducer from "./navBarSlice";
import emailBodyReducer from "./emailBodySlice";



const store = configureStore({
    reducer:{
        darkMode: darkModeReducer,
        navBarOpen: navBarOpenReducer,
        emailBody: emailBodyReducer,
    },
});

export default store;