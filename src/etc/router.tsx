import { createBrowserRouter } from "react-router-dom";
import NumerologyPage from "../pages/NumerologyPage";
import ResultPage from "../pages/ResultPage";
import NumerologyExplanationPage from "../pages/NumerologyExplanationPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/Dashboard";
import NumerologyDataPage from "../pages/NumerologyData";

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
            },
            {
                path: "/admin/dashboard",
                element: <DashboardPage/>
            },
            {
                path: "/admin/numerology-data",
                element: <NumerologyDataPage/>
            }
        ]
    }
])

export default router;