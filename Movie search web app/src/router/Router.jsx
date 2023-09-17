import { Route, Routes } from "react-router-dom"
import HomePage from "../components/homepage/HomePage"
function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    )
}
export default Router