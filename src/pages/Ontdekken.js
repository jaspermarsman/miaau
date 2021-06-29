import React from "react";
import CountrySelect from "../components/CountrySelect"
import SpotifyConnect from "../components/SpotifyConnect";
import CountrySelect2 from "../components/CountrySelect2";

export default function Ontdekken() {

    return (
        <div>
            {localStorage.getItem("accessToken") ? (
                <CountrySelect/>) : (
                <SpotifyConnect/>
            )}
        </div>
    );
};
