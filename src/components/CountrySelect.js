import React, {useState, useContext} from "react";
import Multiselect from 'multiselect-react-dropdown';
import { selectedOptionsContext} from "../context/SelectedOptionsProvider";

export default function Ontdekken() {
    const { selectedCountries, setSelectedCountries } = useContext(selectedOptionsContext);

    return(
        <div className="login">
            <Multiselect
                options = {selectedCountries}
                displayValue = "name"
                showCheckbox = {true}
                style={{
                    chips: {
                        background: 'red'
                    },
                    multiselectContainer: {
                        color: '#E9C46A',
                        width: "50%",
                        "border-color": "black",
                        "border-radius": "5px"
                    },
                    searchBox: {
                        border: 'none',
                        'border-radius': '5px',
                        background: "white"
                    },
                    optionContainer: {
                        background: "black"
                    },
                    option: {
                        display: "flex",
                        color: "#E9C46A"
                    },
                    "option:hover": {
                        color: "red"
                    }
                }}

            />
        </div>
    );
};