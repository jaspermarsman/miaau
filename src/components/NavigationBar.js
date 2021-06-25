import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css"
import { useAuth} from "../context/AuthContext";

export function NavigationBar () {
    const auth = useAuth();
    return (
        <div>
            <header className="navigation-bar">
                <nav>
                    <ul>
                        {auth.user ? (<>
                            <NavLink to="/Ontdekken" activeClassName="active-link">
                                <li>Ontdekken</li>
                            </NavLink>
                            <NavLink to="/WebPlayer" activeClassName="active-link">
                                <li>Web-Player</li>
                            </NavLink>
                        </>) : (
                            <>
                                <NavLink to="/Login" activeClassName="active-link">
                                    <li>Inloggen</li>
                                </NavLink>
                                <NavLink to="/Signup" activeClassName="active-link">
                                    <li>Registreer</li>
                                </NavLink> </>)}

                        <li>Help</li>
                        <li onClick={() => auth.signout()}>Uitloggen</li>
                    </ul>
                </nav>
            </header>
        </div>

    )
}