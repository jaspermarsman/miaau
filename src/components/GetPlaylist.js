import React, { useEffect, useState} from "react";
import axios from "axios";

const playlistEndpoint = "https://api.spotify.com/v1/me/playlists";

export default function GetPlaylist() {
    const [token, setToken] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        if(localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("accessToken"));
        }
    }, []);

    async function GetPlaylists() {
        try {
            const response = await axios.get(playlistEndpoint, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
              setData(response.data);
            } catch(error) {
                console.log(error);
            };
    };

    return (
        <>
            <button onClick={GetPlaylists}>Get Playlists</button>
            {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
        </>
    )
}

