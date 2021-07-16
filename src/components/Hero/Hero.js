import React from "react";
import heelal from "../../assets/heelal.jpg"
import "./Hero.css"

export function Hero() {
    return (
        <div className="header-image">
            <img src={heelal} alt="Music Is All Around Us" className={"header-image"}/>
        </div>

    )
}
