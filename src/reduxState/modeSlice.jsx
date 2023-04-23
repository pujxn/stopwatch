import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
    name: "mode",
    initialState: {
        value: ""
    },
    reducers: {
        handleModeSwitch: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { handleModeSwitch } = modeSlice.actions;
export default modeSlice.reducer;