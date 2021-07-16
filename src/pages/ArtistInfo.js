import React, {useEffect, useState} from "react";
import {useOptionContext} from "../context/SelectedOptionsProvider";
import "./PageStyling.css"
import ArtistOnSpotify from "../components/ArtistOnSpotify";
import axios from "axios";

export default function ArtistInfo() {
    const {
        selectedArtist,
        artistRelations,
        artistFoundOnSpotify,
        setArtistFoundOnSpotify,
    } = useOptionContext();
    const [token, setToken] = useState("");


    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("accessToken"));

            async function checkSpotify() {
                setArtistFoundOnSpotify(false);
                try {
                    const result = await axios.get(`https://api.spotify.com/v1/search?query=${selectedArtist}&type=artist`, {
                        headers: {
                            Authorization: "Bearer " + token,
                            Accept: 'application/json',

                        },
                    })
                    if (result.data.artists.items.length >= 1) {
                        setArtistFoundOnSpotify(true);
                    }

                } catch (error) {
                }
                ;
            };
            checkSpotify();
        }
    }, [token]);


    return (
        <div className="general">
            <h1>{selectedArtist}</h1>
            {artistFoundOnSpotify ? (
                <ArtistOnSpotify/>) : (
                <div>
                    <p>Helaas, {selectedArtist} is niet gevonden op Spotify!</p>
                    <p>Ontdek meer over deze artiest met onderstaande bronnen:</p>
                    <div className="external-sources">
                        <ol>
                            {artistRelations && artistRelations.map((artistRelation) => {
                                return <div>
                                    <li className="external-sources"><a href={artistRelation.url.resource}
                                                                        rel="noreferrer"
                                                                        target="_blank">{artistRelation.type}</a></li>
                                </div>
                            })

                            }
                        </ol>
                    </div>
                </div>
            )}
        </div>
    )
}

