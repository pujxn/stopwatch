import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "@/components/modeSlice"
import timeEditModeReducer from "@/components/timerEditModeSlice";
const store = configureStore({
    reducer: {
        "mode": modeReducer,
        "timerEditMode": timeEditModeReducer
    }
});

export default store;
