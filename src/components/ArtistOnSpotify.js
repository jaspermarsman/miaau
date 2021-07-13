import React, {useEffect, useState} from "react";
import axios from "axios";
import {useOptionContext} from "../context/SelectedOptionsProvider";


export default function ArtistOnSpotify() {
    const [token, setToken] = useState("");
    const [image, setImage] = useState("");
    const [spotifyURL, setSpotifyURl] = useState("");
    const [artistID, setArtistID] = useState("");
    const [topTracks, setTopTracks] = useState([])

    const {selectedArtist} = useOptionContext();


    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("accessToken"));

            async function getArtistOnSpotify() {
                try {
                    const response = await axios.get(`https://api.spotify.com/v1/search?query=${selectedArtist}&type=artist`, {
                        headers: {
                            Authorization: "Bearer " + token,
                            Accept: 'application/json',

                        },
                    })
                    console.log(response.data);
                    setImage(response.data.artists.items.[0].images.[1].url);
                    console.log(response.data.artists.items.[0].external_urls.spotify);
                    setSpotifyURl(response.data.artists.items.[0].external_urls.spotify);
                    setArtistID(response.data.artists.items.[0].id);

                } catch (error) {
                    console.log(error);
                }
                ;
            };
            getArtistOnSpotify();
        }
    }, [token]);

    useEffect(() => {
        async function getTopTracks() {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=nl`, {
                    headers: {
                        Authorization: "Bearer " + token,
                        Accept: 'application/json',

                    },
                })
                console.log("toptracks", response.data.tracks);
                setTopTracks(response.data.tracks);

            } catch (error) {
                console.log(error);
            }
            ;
        };
        getTopTracks();
    }, [artistID])


    return (
        <div>

            <button
                onClick={() => window.open(spotifyURL, "_blank")}
            >Ontdek in Spotify
            </button>
            <img src={image} alt={selectedArtist}/>
            <h2>Populaire nummers</h2>

            {topTracks.map((topTrack) => {
                return <div><a href={topTrack.external_urls.spotify} target="blank">{topTrack.name}</a></div>
            })

            }

        </div>
    )
}

