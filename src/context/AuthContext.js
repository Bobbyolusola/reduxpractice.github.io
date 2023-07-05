import { createSlice } from "@reduxjs/toolkit";

const initialStateValue={
    username: "", age: 0, email: ""
};
export const userSlice = createSlice({
    name: "user",
    initialState: {value: initialStateValue},
    reducers: {
        register: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const {register} = userSlice.actions;

export default userSlice.reducer;