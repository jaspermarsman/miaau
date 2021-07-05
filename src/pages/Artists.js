import React, {useEffect, useState } from "react";
import { useOptionContext} from "../context/SelectedOptionsProvider";
import Multiselect from 'multiselect-react-dropdown';
import axios from "axios";
import ArtistInfo from "../components/ArtistInfo";

export default function ArtistList() {
    const { searchResults, selectedArtist, setSelectedArtist, selectedCountries, setArtistRelations } = useOptionContext();
    const [ search, setSearch ] = useState(false);
    const [ artistID, setArtistID ] = useState("");

    useEffect(() => {
        const searchArtistID = selectedArtist.replaceAll(" ", "%20");

        async function fetchData() {
            try {
                const result = await axios.get(`https://musicbrainz.org/ws/2/artist/?query=${searchArtistID}+AND+country:${selectedCountries}&fmt=json`);
                    setArtistID(result.data.artists.[0].id);
                    console.log(artistID);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [selectedArtist]);


useEffect(() => {
    if(search) {
        async function fetchArtistUrls() {
            try {
                const result = await axios.get(`http://musicbrainz.org/ws/2/artist/${artistID}?inc=url-rels&fmt=json`)
                console.log("Artist Relations arary: ", result.data.relations);
                setArtistRelations(result.data.relations);
            } catch (e) {
                console.error(e);
            }
        }
        fetchArtistUrls();
        setSearch(false);
    }

}, [search])


    function clickHandler() {
        console.log(searchResults);
    }

    function onSelect(e) {
        setSelectedArtist(e.[0].name);
    }

    function onRemove(e) {

        // setSelectedArtist(null);
        // console.log("onRemove", selectedArtist);
    }

    return (
        <div className="login">{ searchResults ? (
            <Multiselect
                options={searchResults}
                displayValue="name"
                showCheckbox={true}
                onSelect={onSelect}
                onRemove={onRemove}
                selectionLimit={1}
                // showArrow={true}
            />
        ) : (
            <p>Nee</p>
        )
        }
            <h1>TERLJTKLJLK</h1>
            <button onClick={() => {setSearch(true)}}>Searchguery</button>
            <ArtistInfo />
        </div>
    );

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
