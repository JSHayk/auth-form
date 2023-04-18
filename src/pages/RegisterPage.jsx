import { memo } from "react"
import AuthForm from "../components/form/auth-form"

const RegisterPage = () => {
    return (
        <AuthForm title='Register' type="register" subtitle='Gain total control of Your money' />
    )
}

export default memo(RegisterPage)