import React from "react";
import CountrySelect from "../components/CountrySelect/CountrySelect"
import SpotifyConnect from "../components/SpotifyConnect";
import GenreSelect from "../components/GenreSelect"
import SearchMusicBrainz from "../components/SearchMusicBrainz";


export default function Ontdekken() {

    return (
        <div>
            {localStorage.getItem("accessToken") ? (
                <div >
                <CountrySelect/>
                <GenreSelect/>
                    <SearchMusicBrainz />
                </div>) : (
                    <div>
                        <p>Log in met je premium Spotify account: </p>
                        <SpotifyConnect/>
                    </div>

            )}
        </div>
    );
};
