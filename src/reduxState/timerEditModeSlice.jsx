import { createSlice } from "@reduxjs/toolkit";

export const timerEditModeSlice = createSlice({
    name: "timer",
    initialState: {
        value: true
    },
    reducers: {
        setTimerEditMode: (state, action) => { state.value = action.payload }
    }
})

export const { setTimerEditMode } = timerEditModeSlice.actions;
export default timerEditModeSlice.reducer;  