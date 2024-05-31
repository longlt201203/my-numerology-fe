import { createBrowserRouter } from "react-router-dom";
import NumerologyPage from "../pages/main/NumerologyPage";
import ResultPage from "../pages/main/ResultPage";
import NumerologyExplanationPage from "../pages/main/NumerologyExplanationPage";
import LoginPage from "../pages/main/LoginPage";
import DashboardPage from "../pages/admin/Dashboard";
import NumerologyDataPage from "../pages/admin/NumerologyData";
import NumerologyMeaning from "../pages/admin/NumerologyMeaning";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
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
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
            {
                path: "/admin/dashboard",
                element: <DashboardPage/>
            },
            {
                path: "/admin/numerology-data",
                element: <NumerologyDataPage/>
            },
            {
                path: "/admin/numerology-meaning",
                element: <NumerologyMeaning/>
            }
        ]
    }
])

export default router;