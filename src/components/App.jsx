import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import NotMatch from "@/routes/NotMatch";
import DisplayLogic from "@/routes/DisplayLogic";
import About from "@/routes/About";
import SinglePage from "@/routes/SinglePage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<DisplayLogic />} />
                <Route path="about" element={<About />} >
                    <Route path=":slug" element={<SinglePage />} />
                </Route>
                <Route path="*" element={<NotMatch />} />
            </Route>
        </Routes>
    )
}

export default App;