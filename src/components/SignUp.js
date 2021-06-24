import React, {useContext, useState} from "react";
import "./SignUp.css"
import { useForm } from 'react-hook-form';
import {FirebaseContext} from "../context/FirebaseContext";

export default function SignUp() {
    const { handleSubmit, formState: { errors }, register, watch } = useForm();
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const { firebase } = useContext(FirebaseContext);

    //functie hieronder aanpassen naar catch get?
    function onFormSubmit(data) {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(() => alert("signed up!")).catch((error) => alert(error.message));
        alert(data.email + " " + data.password);
        console.log(data.email, data.password);

    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label>
                    Email:
                    <input
                        type="text"
                        placeholder="Email"
                        // onChange={(e) => setEmail(e.target)}
                        {...register("email", {required: true,
                            pattern: /^\S+@\S+$/i},
                        )} />
                </label>
                <label>
                    Wachtwoord:
                    <input
                        type="password"
                        placeholder="wachtwoord"
                        // onChange={(e) => setPassword(e.target)}
                        {...register("password")} />
                </label>
                <button
                type="submit"
                >Inloggen</button>
            </form>
        </div>
    )
}

