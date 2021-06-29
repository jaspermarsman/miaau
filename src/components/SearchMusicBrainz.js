import React, { useContext, useState } from "react";
import { selectedOptionsContext} from "../context/SelectedOptionsProvider";
import axios from "axios";



export default function SearchMusicBrainz() {
    const {selectedCountries, setSelectedCountries} = useContext(selectedOptionsContext);

    const [searchResult, setSearchResult ] = useState({});


    async function fetchData() {
        try {
            const result = await axios.get("https://musicbrainz.org/ws/2/artist/?query=type:group%20AND%20country:DE&fmt=json");
            console.log(result);
            console.log(result.data.count);
            setSearchResult(result.data);
            console.log("search result: ", searchResult);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        // <button onClick={() => {console.log("selected countries: ", selectedCountries[0].alpha2)}}>Bevestig</button>
        <button onClick={() => fetchData()}>MusicBrainz</button>
    )
}
