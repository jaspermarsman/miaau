import React, {useContext, useEffect, useState} from "react";
import { selectedOptionsContext} from "../context/SelectedOptionsProvider";
import axios from "axios";


export default function SearchMusicBrainz() {
    const {selectedCountries, setSelectedCountries} = useContext(selectedOptionsContext);
    const [searchResults, setSearchResults ] = useState(null);
    const countryQuery = "nl";
    const tagList = [];


    function createTagList(object) {
                console.log("object" ,object)
        object.map((artist) => {
            return tagList.push(artist.tags)
            // tagList.map((tag) => {
            //     console.log("second map", tag);
            //     // return newTagList.push(tag.name);
            // })
        })
        console.log(tagList);
    }

    function getArtistList() {

        const prefixedStudents = searchResults.map((searchResult) => {
            return searchResult.name;
        });
        console.log(prefixedStudents);
    }


    async function fetchData() {
               try {
            const result = await axios.get(`https://musicbrainz.org/ws/2/artist/?query=type:group%20AND%20country:${countryQuery}&fmt=json&limit=100`);
            console.log(result.data);
            console.log(result.data.count);
            setSearchResults(result.data.artists);
            // getArtistList();
                   createTagList(searchResults);

        } catch (e) {
            console.error(e);
        }
    }


    return (
        // <button onClick={() => {console.log("selected countries: ", selectedCountries[0].alpha2)}}>Bevestig</button>
        <button onClick={() => fetchData()}>MusicBrainz</button>
    )
}
