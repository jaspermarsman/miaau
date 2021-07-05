import React, { useEffect, useState } from "react";
import { useOptionContext} from "../context/SelectedOptionsProvider";
import axios from "axios";


export default function SearchMusicBrainz() {
    const { selectedCountries, selectedGenres, searchResults, setSearchResults } = useOptionContext();
    const [search, setSearch] = useState(false)


    useEffect(() => {
        if(search) {
            async function fetchData() {
                try {
                    const result = await axios.get(`http://musicbrainz.org/ws/2/artist/?query=tag:${selectedGenres}+AND+country:${selectedCountries}&fmt=json&limit=100&offset=0`);
                    setSearchResults(result.data.artists);
                    console.log("search result: ", searchResults);

                } catch (e) {
                    console.error(e);
                }
            }fetchData();
            setSearch(false);
        }


    }, [search]);


    return (
        <button onClick={() => setSearch(true)}>MusicBrainz</button>
    )
}
