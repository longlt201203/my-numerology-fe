import { useEffect } from "react";
import AuthService from "../../services/auth.service";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function AuthSignUp() {
    const authService = AuthService.getInstance();
    const [params] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const code = params.get("code");
        if (code) {
            const login = async () => {
                const data = await authService.signUpWithGoogle({ code: code });
                localStorage.setItem("accessToken", data.accessToken);
                navigate("/admin/dashboard");
            }
    
            login();
        }
    }, []);

    return (
        <>Auth Sign Up</>
    );
}