import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "@/components/modeSlice"

const store = configureStore({
    reducer: {
        "mode": modeReducer
    }
});

export default store;
