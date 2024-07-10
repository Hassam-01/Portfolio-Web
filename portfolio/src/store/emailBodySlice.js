import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    emailBody: {
        email: "",
        firstName: "",
        lastName: "",
        message: ""
    }
}

const emailBodySlice = createSlice({
    name: "emailBody",
    initialState,
    reducers:{
        updateEmailBody(state, action){
            state.emailBody = action.payload;
        }
    }
})

export const {updateEmailBody} = emailBodySlice.actions
export default emailBodySlice.reducer