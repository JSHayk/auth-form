import { memo } from "react"
import AuthForm from "../components/form/auth-form"

const RegisterPage = () => {
    return (
        <AuthForm title='Login' type="login" />
    )
}

export default memo(RegisterPage)