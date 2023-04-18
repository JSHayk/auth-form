import { memo, useState } from "react"
// assets
import "./index.scss"
import applePicture from '../../../assets/apple.svg'
import googlePicture from '../../../assets/google.svg'
import { Link } from "react-router-dom"

const AuthForm = ({ title, type, subtitle }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <form className="form">
            <h1>{title}</h1>
            {
                type === "register" ? <h4>{subtitle}</h4> : undefined
            }
            {
                (type !== "forgot") && (
                    <div className="form-continue-with">
                        <div className="apple">
                            <img src={applePicture} alt="apple" />
                            <p>Continue with Apple</p>
                        </div>
                        <div className="google">
                            <img src={googlePicture} alt="google" />
                            <p>Continue with Google</p>
                        </div>
                    </div>
                )
            }
            <div className="form-line">
                <div></div>
                <p>or</p>
                <div></div>
            </div>
            <div className="form-fields">
                <input maxLength='48' type="text" placeholder="Email" />
                {
                    type !== "forgot" && (
                        <input maxLength='48' type="password" placeholder="Password" />
                    )
                }
            </div>
            {
                type === "login" && (
                    <>
                        <div className="remember-forgot">
                            <div onClick={() => {
                                setIsChecked(prev => !prev)
                            }} className="remember-me">
                                <div className="checkbox">
                                    {
                                        isChecked && 'x'
                                    }
                                </div>
                                <p>Remember me</p>
                            </div>
                            <Link className="auth-link" to="/forgot-password">
                                Forgot password?
                            </Link>
                        </div>
                    </>
                )
            }
            <button>{type === "register" ? "Register" : "Login"}</button>
            <div className="redirect">
                <p>{type === "register" ? "Already have an account?" : "Don’t have an account?"}</p>
                <Link className="auth-link" to={type === "register" ? "/login" : "/register"}>
                    {
                        type === "register" ? "Login" : "Sign Up"
                    }
                </Link>
            </div>
        </form>
    )
}

export default memo(AuthForm);