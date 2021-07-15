import React from "react";
import "../NavigationBar/NavigationBarMobile.css"
import { NavLink, Link } from "react-router-dom";
import { useAuth} from "../../context/AuthContext"
import "../../pages/PageStyling.css"

export default function SideMenu() {
    const auth = useAuth();
    return(

        <div className="side-menu">
            <ul className="ul-mobile">

                <Link to="/Signout">
                    <li onClick={() => auth.signout()}>Uitloggen</li>
                </Link>
                <li className="li-mobile">Test</li>

            </ul>
        </div>
    )
}
