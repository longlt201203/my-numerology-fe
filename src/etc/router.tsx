import { createBrowserRouter } from "react-router-dom";
import NumerologyPage from "../pages/NumerologyPage";
import ResultPage from "../pages/ResultPage";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <NumerologyPage/>
            },
            {
                path: "/result",
                element: <ResultPage/>
            }
        ]
    }
])

export default router;