import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "@/reduxState/modeSlice"
import timeEditModeReducer from "@/reduxState/timerEditModeSlice";
import playStateReducer from "@/reduxState/playStateSlice";
import lapsReducer from "@/reduxState/lapsSlice";
import prevLapTimeReducer from "@/reduxState/prevLapTimeSlice";
import prevTimerValueReducer from "@/reduxState/prevTimerValueSlice";


const store = configureStore({
    reducer: {
        "mode": modeReducer,
        "timerEditMode": timeEditModeReducer,
        "playState": playStateReducer,
        "laps": lapsReducer,
        "prevLapTime": prevLapTimeReducer,
        "prevTimerValue": prevTimerValueReducer,
    }
});

export default store;
