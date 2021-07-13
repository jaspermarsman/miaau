import React from "react";
import "./FormPageStyling.css"
import "../components/Forms/SignUpForm"
import LoginForm from "../components/Forms/LoginForm";
import {useHistory} from "react-router-dom";
import PayOff from "../components/PayOff";

function Login() {
    const history = useHistory();

    function handleClick() {
        history.push("/SignUp");
    }

    return (
        <div className={"form"}>
            <PayOff />
            <LoginForm/>
            <div className="subscribe-container">
                <p>Heb je nog geen account?</p>
                <button
                    onClick={handleClick}
                >Account maken
                </button>
            </div>
        </div>
    )
}

export default Login;
