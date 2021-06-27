import React, { useEffect, useState} from "react";
import axios from "axios";

// const artist = artist
const artistEndpoint = "https://api.spotify.com/v1/search?query=nirvana&type=artist&offset=0&limit=20";

export default function SearchSpotifyArtist() {
    const [token, setToken] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        if(localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("accessToken"));
        }
    }, []);

    async function SearchSpotifyArtist() {
        try {
            const response = await axios.get(artistEndpoint, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            setData(response.data);
            console.log(response.data);
        } catch(error) {
            console.log(error);
        };
    };

    return (
        <>
            <button onClick={SearchSpotifyArtist}>Search Spotify Artist</button>
            {/*{data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}*/}
        </>
    )
}

