import React from "react";
import Multiselect from 'multiselect-react-dropdown';
import {useOptionContext} from "../../context/SelectedOptionsProvider"
import "./MultiSelect.css"
import countries from "../../data/countries.json"

export default function CountrySelect() {
    const {selectedCountries, setSelectedCountries, countryName, setCountryName} = useOptionContext();


    function onSelect(e) {
        setSelectedCountries(e.[0].alpha2);
        setCountryName(e.[0].name)
    }

    function onRemove(e) {
        setSelectedCountries(null);
    }

    return (
        <div>
            {selectedCountries ? (
                <div>
                    <div className="confirm-box">
                        <h2>Gekozen bestemming:</h2>
                        <label className="input-label"> {countryName}
                            <input
                                className="checkbox"
                                type="checkbox"
                                value={countryName}
                                checked={selectedCountries}
                                onChange={() => {
                                    setSelectedCountries(null)
                                }}
                            />
                        </label>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Kies je bestemming: </h2>
                    <Multiselect
                        options={countries}
                        displayValue="name"
                        showCheckbox={true}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        selectionLimit={1}
                        showArrow={true}
                        placeholder="Selecteer een land"
                    />
                </div>
            )}

        </div>
    );
};
