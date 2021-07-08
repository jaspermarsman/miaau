import React, {useEffect, useState } from "react";
import { useOptionContext} from "../context/SelectedOptionsProvider";
import axios from "axios";

export default function GetArtistInfo() {
    const { artistRelations } = useOptionContext();

    // function clickHandler() {
    //     console.log(artistRelations.[0].["target-type"]);
        for (let i = 0; i < artistRelations.length; i++) {
            if (artistRelations.[i].["target-type"] === "url") {
                console.log(artistRelations.[i].type);
                console.log(artistRelations.[i].url.resource);
            }

        }
    // }



//     return(
//         <div>
//             <p>De artiestienrelaties: </p>
//             <button onClick={() => {clickHandler()}}>test</button>
//         </div>
//     )
}
