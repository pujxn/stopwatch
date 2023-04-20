import { createSlice } from "@reduxjs/toolkit";
import { calcTimeStrDiff } from "@/routes/DisplayLogic";

export const lapsSlice = createSlice({
    name: "laps",
    initialState: {
        value: []
    },
    reducers: {
        addLap: (state, action) => {
            state.value.push(calcTimeStrDiff(action.payload.prevLapTime, action.payload.currentTime))
        }
    }
});

export const { addLap } = lapsSlice.actions;
export default lapsSlice.reducer; 