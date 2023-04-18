// import StopwatchLogic from "@/routes/StopwatchLogic";
import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import NotMatch from "@/routes/NotMatch";
import DisplayLogic from "@/routes/DisplayLogic";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<DisplayLogic />} />
                <Route path="*" element={<NotMatch />} />
            </Route>
        </Routes>
    )
}

export default App;