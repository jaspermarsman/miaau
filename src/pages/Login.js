import React from "react";
import "./Login.css"
import "../components/Forms/SignUpForm"
import LoginForm from "../components/Forms/LoginForm";
import {useHistory} from "react-router-dom";

function Login() {
    const history = useHistory();

    function handleClick() {
        history.push("/SignUp");
    }

    return (
        <div className={"login"}>
            <h1>MIAAU</h1>
            <h2>Music Is All Around Us</h2>
            <p>Ontdek de wereld om je heen door te luisteren naar muzikanten wereldwijd.</p>

            <LoginForm />
            <p>Heb je nog geen account?</p>
            <button
                onClick={handleClick}
            >Meld je aan bij MIAAU</button>

        </div>
    )
}

export default Login;
