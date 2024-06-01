import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import { AxiosError } from "axios";

interface AuthRouteProps {
    // role: string;
}

export default function AuthRoute(props: AuthRouteProps) {
    const authService = AuthService.getInstance();
    const navigate = useNavigate();

    useEffect(() => {
        const validate = async () => {
            let ok = true;

            const accessToken = localStorage.getItem("accessToken");
            if (accessToken) {
                try {
                    const profile = await authService.getProfile();
                } catch (err) {
                    // if (err instanceof AxiosError) {

                    // }
                    ok = false;
                }
            } else {
                ok = false;
            }

            if (!ok) navigate("/login");
        }

        validate();
    }, []);

    return (
        <Outlet />
    );
}