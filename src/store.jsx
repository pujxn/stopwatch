import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "@/components/modeSlice"
import timeEditModeReducer from "@/components/timerEditModeSlice";
import playStateReducer from "@/components/playStateSlice";
const store = configureStore({
    reducer: {
        "mode": modeReducer,
        "timerEditMode": timeEditModeReducer,
        "playState": playStateReducer
    }
});

export default store;
