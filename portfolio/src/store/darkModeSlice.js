import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    darkMode: true,
}

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers : {
        changeDarkMode(state){
            state.darkMode = !state.darkMode;
        },
    },
});

export const {changeDarkMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;