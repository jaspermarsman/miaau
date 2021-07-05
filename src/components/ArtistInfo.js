import React, {useEffect, useState } from "react";
import { useOptionContext} from "../context/SelectedOptionsProvider";
import axios from "axios";

export default function ArtistInfo() {
    const { artistRelations } = useOptionContext();



    const sources = artistRelations.map((artistRelation) => {
       console.log("relations: ", artistRelation.type, artistRelation.url);
    });

    const artistFilter = artistRelations.filter((artistRelation) => {
        return artistRelation.type === "wikidata";
    })
    console.log(artistFilter);

    return(
        <div>
            <p>De artiestienrelaties: </p>
        </div>
    )
}
