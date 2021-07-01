import React, { useContext, useState} from "react";
import Multiselect from 'multiselect-react-dropdown';
import { selectedOptionsContext } from "../context/SelectedOptionsProvider"
// import "../CountrySelect.css"
import genres from "../data/genres.json"

export default function GenreSelect() {
    const {selectedGenres, setSelectedGenres} = useContext(selectedOptionsContext);

    function onSelect(e) {
        console.log(e);
        // setSelectedGenres(e.[0].value);
        // console.log("onSelect: ",selectedGenres);
    }

    function onRemove(e) {
      console.log(e.[0].value);
        // setSelectedGenres(e);
        console.log("onSelect: ",selectedGenres);
    }

    // useEffect(() => {
    //     console.log("useffect2: " ,selectedCountries)
    //     setSelectedCountries(selectedCountries);
    //     console.log("useffect2: " ,selectedCountries)
    // }, [selectedCountries]);

    return (
        <div className="login">
            <Multiselect
                options={genres}
                displayValue="value"
                showCheckbox={true}
                onSelect={onSelect}
                onRemove={onRemove}
            />

        </div>
    );
};
