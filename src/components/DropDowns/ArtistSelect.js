import React, {useEffect, useState } from "react";
import { useOptionContext} from "../../context/SelectedOptionsProvider";
import Multiselect from 'multiselect-react-dropdown';
import "./MultiSelect.css"


export default function ArtistSelect() {
    const { searchResults, selectedArtist, setSelectedArtist, selectedCountries } = useOptionContext();

    function onSelect(e) {
        setSelectedArtist(e.[0].name);
    }

    function onRemove(e) {
        setSelectedArtist(null);
    }

    return (
        <div>
            { selectedArtist ? (
                <div>
                    <h2>Gekozen artiest:</h2>
                <label className="input-label"> {selectedArtist}
                    <input
                        className="checkbox"
                        type="checkbox"
                        value={selectedArtist}
                        checked={selectedCountries}
                        onChange={() => {setSelectedArtist(null)}}
                    />
                </label>
                </div>
            ) : (
                <div>
                    <Multiselect
                        options={searchResults}
                        displayValue="name"
                        showCheckbox={true}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        selectionLimit={1}
                        showArrow={true}
                    />
                </div>
            )}


        </div>
    )
}
