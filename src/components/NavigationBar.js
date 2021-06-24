import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css"

export function NavigationBar () {
    return (
        <div>
        <header className="navigation-bar">
            <nav>
                <ul className="navigation-list">
                    <NavLink to="/" exact activeClassName="active-link">
                        <li>Ontdekken</li>
                    </NavLink>
                    <NavLink to="/Login" activeClassName="active-link">
                        <li>Inloggen</li>
                    </NavLink>
                    <li>Help</li>
                    <li>Uitloggen</li>
                </ul>
            </nav>
        </header>
        </div>

    )
}