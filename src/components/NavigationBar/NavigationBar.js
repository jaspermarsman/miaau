import React from "react";
import {NavLink, Link} from "react-router-dom";
import "./NavigationBar.css"
import {useAuth} from "../../context/AuthContext";

export function NavigationBar() {
    const auth = useAuth();
    return (
        <div>
            <header className="navigation-bar">
                <nav>
                    <ul>
                        {auth.user ? (<>
                            <NavLink to="/" exact activeClassName="active-link">
                                <li>Ontdekken</li>
                            </NavLink>
                        </>) : (
                            <>
                                <NavLink to="/Login" activeClassName="active-link">
                                    <li>Inloggen</li>
                                </NavLink>
                                <NavLink to="/Registreer" activeClassName="active-link">
                                    <li>Registreren</li>
                                </NavLink> </>)}

                        <Link to="/Signout">
                            <li onClick={() => auth.signout()}>Uitloggen</li>
                        </Link>

                    </ul>
                </nav>
            </header>
        </div>

    )
}
