import { createSlice } from "@reduxjs/toolkit";

export const prevLapTimeSlice = createSlice({
    name: "prevLapTime",
    initialState: {
        value: "00:00:00"
    },
    reducers: {
        setPrevLapTime: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setPrevLapTime } = prevLapTimeSlice.actions;
export default prevLapTimeSlice.reducer;