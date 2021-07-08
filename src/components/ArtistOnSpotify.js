import React, {useEffect, useState} from "react";
import axios from "axios";
import {useOptionContext} from "../context/SelectedOptionsProvider";


export default function ArtistOnSpotify() {
    const [token, setToken] = useState("");
    const [data, setData] = useState({});
    const {
        selectedArtist,
    } = useOptionContext();
    console.log("localstorage", localStorage);
    console.log("token", token);

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            console.log(localStorage);
            setToken(localStorage.getItem("accessToken"));
        }
    }, []);

    async function ArtistOnSpotify() {
        try {
            console.log(token);
            const response = await axios.get(`https://api.spotify.com/v1/search?query=${selectedArtist}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    Accept: 'application/json',
                    // "Content-Type" : "application/json",
                    // Content-Type : 'application/json',
        },
        })
            ;
            console.log(response.data);
            // setData(response.data);
        } catch (error) {
            console.log(error);
        }
        ;
    };

    return (
        <div>
            <button onClick={() => ArtistOnSpotify()}>klik</button>
        </div>
    )
}

