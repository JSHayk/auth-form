import { memo } from "react"
import AuthForm from "../components/form/auth-form"

const ForgotPasswordPage = () => {
    return (
        <AuthForm title='Forgot password' type="forgot" subtitle='Enter your email address and we will send you a link to reset your password' />
    )
}

export default memo(ForgotPasswordPage)