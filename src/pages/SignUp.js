import React from "react";
import "./FormPageStyling.css"
import "../components/Forms/SignUpForm"
import SignUpForm from "../components/Forms/SignUpForm";
import PayOff from "../components/PayOff";

function SignUp() {
    return (
        <div className="form">
            <PayOff />
            <SignUpForm />
        </div>
    )
}

export default SignUp;
