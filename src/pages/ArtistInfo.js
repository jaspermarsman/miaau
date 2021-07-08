import React, {useEffect, useState} from "react";
import {useOptionContext} from "../context/SelectedOptionsProvider";
import "./PageStyling.css"
import ArtistOnSpotify from "../components/ArtistOnSpotify";
import GetPlaylist from "../components/GetPlaylist";

export default function ArtistInfo() {
    const {
        selectedArtist,
        artistRelations,
    } = useOptionContext();
    console.log(artistRelations);



    return (
        <div className="general">
            <h1>{selectedArtist}</h1>
            <p>Ontdek meer over deze artiest met onderstaande bronnen:</p>

            { artistRelations.map((artistRelation) => {
                return <div>  <a href={artistRelation.url.resource} target="_blank">{artistRelation.type}</a> </div>
            })

            }
            <ArtistOnSpotify />
            <GetPlaylist />

        </div>
    )
}
// function createTagList(object) {
//             console.log("object" ,object)
//     object.map((artist) => {
//         return tagList.push(artist.tags)
//         // tagList.map((tag) => {
//         //     console.log("second map", tag);
//         //     // return newTagList.push(tag.name);
//         // })
//     })
//     console.log(tagList);
// }
