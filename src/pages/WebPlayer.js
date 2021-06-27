import React, {useEffect} from "react";
import "./Ontdekken.css"
import GetPlaylist from "../components/GetPlaylist";
import SearchSpotifyArtist from "../components/SearchSpotifyArtist";

// hier helper functie van maken
const clientID = "d4cc4c212e104c4bbfc05f6ac95e9bc1";
const authEndpoint = "https://accounts.spotify.com/authorize";
const redirect = "http://localhost:3000/WebPlayer/";
const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "playlist-read-private",
];
const scopesJoined = scopes.join("%20");

//helperfunctie maken:
const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
        console.log(currentValue);
        const [key, value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater;
    }, {});

    return paramsSplitUp;
};

export default function WebPlayer() {
    useEffect(() => {
        if (window.location.hash) {
            const { access_token, expires_in, token_type } =
                getReturnedParamsFromSpotifyAuth(window.location.hash);

            localStorage.clear();

            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("tokenType", token_type);
            localStorage.setItem("expiresIn", expires_in);
        }
    });

    const handleLogin = () => {
        window.location = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirect}&scope=${scopesJoined}&response_type=token&show_dialog=true`;
    }
    return (
        <div className="ontdekken">
            <h1>Test</h1>
            <p>fhsjkdhfksjahkjhfkjhkj</p>
            <button onClick={handleLogin}>Login bij Spotify</button>
            <GetPlaylist />
            <SearchSpotifyArtist />
        </div>
    )
}