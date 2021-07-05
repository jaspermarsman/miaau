import React, { useContext } from "react";
import Multiselect from 'multiselect-react-dropdown';
import { useOptionContext } from "../../context/SelectedOptionsProvider"
import "./CountrySelect.css"
import countries from "../../data/countries.json"

export default function CountrySelect() {
    const { selectedCountries, setSelectedCountries } = useOptionContext();

    function onSelect(e) {
        setSelectedCountries(e.[0].alpha2);
    }

    function onRemove(e) {
        setSelectedCountries(null);
    }

    // useEffect(() => {
    //     console.log("useffect2: " ,selectedCountries)
    //     setSelectedCountries(selectedCountries);
    //     console.log("useffect2: " ,selectedCountries)
    // }, [selectedCountries]);

    return (
        <div className="login">
            <h2>Kies je bestemming: </h2>
            <Multiselect
                options={countries}
                displayValue="name"
                showCheckbox={true}
                onSelect={onSelect}
                onRemove={onRemove}
                selectionLimit={1}
                // showArrow={true}
            />

        </div>
    );
};
