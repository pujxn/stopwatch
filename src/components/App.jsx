// import StopwatchLogic from "@/routes/StopwatchLogic";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/routes/Home";
import NotMatch from "@/routes/NotMatch";
// import TimerLogic from "@/routes/TimerLogic";
import DisplayLogic from "@/routes/DisplayLogic";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<DisplayLogic />} />
                {/* <Route path="stopwatch" element={<StopwatchLogic />} /> */}
                {/* <Route path="timer" element={<TimerLogic />} /> */}
                <Route path="*" element={<NotMatch />} />
            </Route>
        </Routes>
    )
}

export default App;