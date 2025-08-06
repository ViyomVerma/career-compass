import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        email: "",
        password: "",
        role: "student",
    },
    reducers : {
        setEmail:(state, action) => { state.email =action.payload; },
        setPassword:(state,action) =>{ state.password =action.payload; },
        setRole: (state , action) => {state.role =action.payload;},
        resetAuth: (state) => {
            state.email = "";
            state.password = "";
            state.role = "student";
        }
    },
});

export const { setEmail, setPassword, setRole, resetAuth } = authSlice.actions;
export default authSlice.reducer;