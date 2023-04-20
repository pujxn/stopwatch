import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "@/components/modeSlice"
import timeEditModeReducer from "@/components/timerEditModeSlice";
import playStateReducer from "@/components/playStateSlice";
import lapsReducer from "@/components/lapsSlice";


const store = configureStore({
    reducer: {
        "mode": modeReducer,
        "timerEditMode": timeEditModeReducer,
        "playState": playStateReducer,
        "laps": lapsReducer
    }
});

export default store;
