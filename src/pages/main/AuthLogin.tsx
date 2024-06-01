import { useNavigate, useSearchParams } from "react-router-dom";
import AuthService from "../../services/auth.service";
import { useEffect } from "react";

export default function AuthLogin() {
    const authService = AuthService.getInstance();
    const [params] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const code = params.get("code");
        if (code) {
            const login = async () => {
                const data = await authService.loginWithGoogle({ code: code });
                localStorage.setItem("accessToken", data.accessToken);
                navigate("/admin/dashboard");
            }

            login();
        }
    }, []);

    return (
        <>Auth Login</>
    );
}