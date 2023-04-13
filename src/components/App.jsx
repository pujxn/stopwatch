import StopwatchLogic from "@/routes/StopwatchLogic";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/routes/Home";
import NotMatch from "@/routes/NotMatch";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="stopwatch" element={<StopwatchLogic />} />
                <Route path="*" element={<NotMatch />} />
            </Route>
        </Routes>
    )
}

export default App;