import React, { useEffect, useState } from "react";
import { useOptionContext} from "../context/SelectedOptionsProvider";
import axios from "axios";
import { useHistory } from "react-router-dom";


export default function SearchMusicBrainz() {
    const { selectedCountries, selectedGenres, searchResults, setSearchResults } = useOptionContext();
    const [search, setSearch] = useState(false)
    let history = useHistory();


    useEffect(() => {
        if (search) {
            async function fetchData() {
                try {
                    const result = await axios.get(`http://musicbrainz.org/ws/2/artist/?query=tag:${selectedGenres}+AND+country:${selectedCountries}&fmt=json&limit=100&offset=0`);
                    if (result.data.artists.length >= 1) {
                        setSearchResults(result.data.artists);
                    }
                } catch (e) {
                    console.error(e);
                }
            }

            fetchData();
            setSearch(false);
            history.push("/Artist-page")
        }


    }, [search]);


    return (
        <div className="general">
        <button onClick={() => setSearch(true)}>Ontdek artiesten</button>
        </div>
    )
}
