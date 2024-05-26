import { createBrowserRouter } from "react-router-dom";
import NumerologyPage from "../pages/NumerologyPage";
import ResultPage from "../pages/ResultPage";
import NumerologyExplanationPage from "../pages/NumerologyExplanationPage";
import LoginPage from "../pages/LoginPage";

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
            },
            {
                path: "/explain",
                element: <NumerologyExplanationPage/>
            },
            {
                path: "/login",
                element: <LoginPage/>
            }
        ]
    }
])

export default router;