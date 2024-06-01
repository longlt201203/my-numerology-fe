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
import AuthLogin from "../pages/main/AuthLogin";
import AuthSignUp from "../pages/main/AuthSignUp";
import AuthRoute from "../pages/AuthRoute";
import NumerologyNumber from "../pages/admin/NumerologyNumber";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "",
                element: <NumerologyPage/>
            },
            {
                path: "result",
                element: <ResultPage/>
            },
            {
                path: "explain",
                element: <NumerologyExplanationPage/>
            },
            {
                path: "login",
                element: <LoginPage/>
            },
        ],
    },
    {
        element: <AuthRoute/>,
        children: [
            {
                path: "/admin",
                element: <AdminLayout/>,
                children: [
                    {
                        path: "dashboard",
                        element: <DashboardPage/>
                    },
                    {
                        path: "numerology-data",
                        element: <NumerologyDataPage/>
                    },
                    {
                        path: "numerology-meaning",
                        element: <NumerologyMeaning/>
                    },
                    {
                        path: "numerology-number",
                        element: <NumerologyNumber/>
                    }
                ]
            }
        ]
    },
    {
        path: "/auth",
        children: [
            {
                path: "login",
                element: <AuthLogin/>
            },
            {
                path: "sign-up",
                element: <AuthSignUp/>
            }
        ]
    }
])

export default router;