import { Route, Routes } from "react-router-dom"
// Pages
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"
import ForgotPasswordPage from "../pages/ForgotPasswordPage"

const Router = () => {
    return (
        <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        </Routes>
    )
}

export default Router