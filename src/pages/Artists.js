import React, {useEffect, useState} from "react";
import {useOptionContext} from "../context/SelectedOptionsProvider";
import axios from "axios";
import {useHistory} from "react-router-dom";
import ArtistSelect from "../components/DropDowns/ArtistSelect";
import "./PageStyling.css"

export default function ArtistList() {
    const {
        searchResults,
        selectedArtist,
        selectedCountries,
        setArtistRelations,
        selectedGenres,
        countryName
    } = useOptionContext();
    const [search, setSearch] = useState(false);
    const [artistID, setArtistID] = useState("");
    let history = useHistory();


    useEffect(() => {
        if (selectedArtist) {
            const searchArtistID = selectedArtist.replaceAll(" ", "%20");

            async function fetchData() {
                try {
                    const result = await axios.get(`https://musicbrainz.org/ws/2/artist/?query=${searchArtistID}+AND+country:${selectedCountries}&fmt=json`);
                    setArtistID(result.data.artists.[0].id);
                } catch (e) {
                    console.error(e);
                }
            }

            fetchData();
        }
    }, [selectedArtist, selectedCountries]);


    useEffect(() => {
        if (search) {
            async function fetchArtistUrls() {
                try {
                    const result = await axios.get(`http://musicbrainz.org/ws/2/artist/${artistID}?inc=url-rels&fmt=json`)
                    setArtistRelations(result.data.relations);
                    history.push("/Artist-info")
                } catch (e) {
                    console.error(e);
                }
            }

            fetchArtistUrls();
            setSearch(false);
        }

    }, [search, artistID, history, setArtistRelations])


    return (
        <div className="general">
            {searchResults ? (
                <div className="confirm-box">
                    <ArtistSelect/>
                    <button onClick={() => {
                        setSearch(true)
                    }}>Bevestig
                    </button>
                </div>
            ) : (
                <div>
                    <p>Helaas, in {countryName} zijn geen artiesten gevonden in het genre: {selectedGenres} </p>
                    <button onClick={() => history.push("/")}>Maak een nieuwe selectie</button>

                </div>
            )
            }


        </div>
    );

}



