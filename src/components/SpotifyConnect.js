import React, {useEffect} from "react";
import getReturnedParamsFromSpotifyAuth from "../helpers/getReturnedParamsFromSpotifyAuth";




export default function SpotifyConnect() {
    const clientID = process.env.REACT_APP_API_SPOTIFY_CLIENT_ID;
    const authEndpoint = "https://accounts.spotify.com/authorize";
    const redirect = "http://localhost:3000/";
    const scopes = [
        "user-read-private",
    ];
    const scopesJoined = scopes.join("%20");


    useEffect(() => {
        if (window.location.hash) {
            const {access_token, expires_in, token_type} =
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
        <div>
            <button onClick={handleLogin}>Login bij Spotify</button>
        </div>
    )
}
