import React, {useContext, useState} from "react";
import "./SignUp.css"
import { useForm } from 'react-hook-form';
import {useAuth} from "../context/AuthContext";
import {useHistory} from "react-router-dom";

export default function SignUpForm() {
    const { handleSubmit, formState: { errors }, register, reset } = useForm();
    const history = useHistory();
    const auth = useAuth();

    //functie hieronder aanpassen naar catch get?
    function onFormSubmit(data) {
        auth.signup({
            email: data.email,
            password: data.password,
            callback: () => history.push("/Ontdekken") })
        console.log(data.email, data.password);
        reset({email: "", password: "", });

    }

    // async function onFormSubmit(data) {
    //
    //     try {
    //         // setLoading(true);
    //         const response = await axios.post(firebase.auth().createUserWithEmailAndPassword(data.email, data.password));
    //         console.log(response);
    //
    //     } catch (error) {
    //         console.log("OH NO", error);
    //     }
    //     reset({email: "", password: "", });
    //
    // }

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
                >Registreer</button>
            </form>
        </div>
    )
}