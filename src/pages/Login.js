import React from "react";
import "./Login.css"
import "../components/SignUp"
import SignUp from "../components/SignUp";

function Login() {
    return (
        <div className={"login"}>
            <h1>MIAAU</h1>
            <h2>Music Is All Around Us</h2>
            <p>Ontdek de wereld om je heen door te luisteren naar muzikanten wereldwijd.</p>
            <SignUp />
        </div>
    )
}

export default Login;