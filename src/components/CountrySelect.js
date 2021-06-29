import React, {useEffect, useContext, useState} from "react";
import Multiselect from 'multiselect-react-dropdown';
import { selectedOptionsContext} from "../context/SelectedOptionsProvider";
import "./CountrySelect.css"
import SearchMusicBrainz from "./SearchMusicBrainz";
import countries from  "../data/countries.json"


export default function Ontdekken() {
    const {selectedCountries, setSelectedCountries} = useContext(selectedOptionsContext);

    useEffect(() => {
        console.log("useffect2: " ,selectedCountries)
                setSelectedCountries(selectedCountries);
                console.log("useffect2: " ,selectedCountries)
       }, [selectedCountries]);

    function onSelect(e) {
        setSelectedCountries(e);
        console.log("onSelect: ",selectedCountries);
    }

    function onRemove(e) {
        setSelectedCountries(e);
        console.log("onRemove", selectedCountries);
    }

    return (
        <div className="login">
            <Multiselect
                options={countries}
                displayValue="name"
                showCheckbox={true}
                onSelect={onSelect}
                onRemove={onRemove}
            />
            <SearchMusicBrainz />

        </div>
    );
};
