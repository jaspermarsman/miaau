import React, {useContext, useEffect} from "react";
import Multiselect from 'multiselect-react-dropdown';
import { useOptionContext } from "../context/SelectedOptionsProvider"
import genres from "../data/genres.json"
import axios from "axios";

export default function GenreSelect() {
    const {selectedGenres, setSelectedGenres} = useOptionContext();

    function onSelect(e) {
         setSelectedGenres(e.[0].value);
    }

    function onRemove(e) {
        setSelectedGenres(null);
    }

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const result = await axios.get(`http://musicbrainz.org/ws/2/artist/?query=tag:${selectedGenres}+AND+country:${selectedCountries}&fmt=json&limit=100&offset=0`);
    //             setSearchResults(result.data.artists);
    //
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     }
    //
    //     fetchData();
    // }, [selectedGenres]);


    return (
        <div className="login">
            <h2>Kies je genre: </h2>
            <Multiselect
                options={genres}
                displayValue="value"
                showCheckbox={true}
                onSelect={onSelect}
                onRemove={onRemove}
                selectionLimit={1}
                showArrow={true}
            />

        </div>
    );
};
