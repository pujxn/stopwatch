import { createSlice } from "@reduxjs/toolkit";

const playStateSlice = createSlice({
    name: "playState",
    initialState: {
        value: false
    },
    reducers: {
        setPlayState: (state, action) => { state.value = action.payload }
    }
});

export const { setPlayState } = playStateSlice.actions;
export default playStateSlice.reducer;