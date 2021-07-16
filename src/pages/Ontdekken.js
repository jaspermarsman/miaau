import React from "react";
import CountrySelect from "../components/DropDowns/CountrySelect"
import SpotifyConnect from "../components/SpotifyConnect";
import GenreSelect from "../components/DropDowns/GenreSelect"
import SearchMusicBrainz from "../components/SearchMusicBrainz";
import "./PageStyling.css"


export default function Ontdekken() {

    return (
        <div className="general">
            {localStorage.getItem("accessToken") ? (
                <div>
                    <div className="genre-country-box">
                        <CountrySelect/>
                        <GenreSelect/>

                    </div>
                    <SearchMusicBrainz/>
                </div>) : (
                <div>
                    <p>Log in met je premium Spotify account: </p>
                    <SpotifyConnect/>
                </div>

            )}
        </div>
    );
};
