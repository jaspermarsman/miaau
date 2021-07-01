import React from "react";
import CountrySelect from "../components/CountrySelect/CountrySelect"
import SpotifyConnect from "../components/SpotifyConnect";
import GenreSelect from "../components/GenreSelect"


export default function Ontdekken() {

    return (
        <div>
            {localStorage.getItem("accessToken") ? (
                <div>
                <CountrySelect/>
                <GenreSelect/>
                </div>) : (
                <SpotifyConnect/>
            )}
        </div>
    );
};
