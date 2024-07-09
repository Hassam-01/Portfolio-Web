import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    navBarOpen: false,
}

const navBarSlice = createSlice({
    name: "navBar",
    initialState,
    reducers:{
        navBarStatus(state){
            state.navBarOpen = !state.navBarOpen;
        },
    },
});

export const {navBarStatus} = navBarSlice.actions;
export default navBarSlice.reducer;