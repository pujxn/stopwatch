import { createSlice } from "@reduxjs/toolkit";

export const prevTimerValueSlice = createSlice({
    name: "prevTimerValue",
    initialState: {
        value: {
            "hours": 0,
            "minutes": 0,
            "seconds": 0,
        }
    },
    reducers: {
        setPrevTimerValue: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setPrevTimerValue } = prevTimerValueSlice.actions;
export default prevTimerValueSlice.reducer;