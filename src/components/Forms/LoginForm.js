import React from "react";
import {useHistory} from "react-router-dom";
import "./Form.css"
import {useForm} from 'react-hook-form';

import {useAuth} from "../../context/AuthContext"

const LoginForm = () => {
    const {handleSubmit, register} = useForm();
    const auth = useAuth();
    let history = useHistory();

    function onLoginSubmit(data) {
        auth.signin({
            email: data.email,
            password: data.password,
            callback: () => history.push("/"),
        })
    }

    return (
        <div className="container">
            <form
                onSubmit={handleSubmit(onLoginSubmit)}
            >
                <label>Voer je e-mailadres in:
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                                required: true,
                                pattern: /^\S+@\S+$/i
                            },
                        )}
                    />
                </label>
                <label>
                    Voer je wachtwoord in :
                    <input
                        type="password"
                        placeholder="wachtwoord"
                        {...register("password")} />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
