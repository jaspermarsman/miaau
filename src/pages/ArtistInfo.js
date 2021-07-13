import React, {useEffect, useState} from "react";
import {useOptionContext} from "../context/SelectedOptionsProvider";
import "./PageStyling.css"
import ArtistOnSpotify from "../components/ArtistOnSpotify";

export default function ArtistInfo() {
    const {
        selectedArtist,
        artistRelations,
    } = useOptionContext();
    console.log(artistRelations);


    return (
        <div className="general">
            <h1>{selectedArtist}</h1>
            <ArtistOnSpotify/>
            <p>Ontdek meer over deze artiest met onderstaande bronnen:</p>

            {artistRelations.map((artistRelation) => {
                return <div><a href={artistRelation.url.resource} target="_blank">{artistRelation.type}</a></div>
            })

            }


        </div>
    )
}

