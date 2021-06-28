import React, {useState, useContext} from "react";
import Multiselect from 'multiselect-react-dropdown';
import { selectedOptionsContext} from "../context/SelectedOptionsProvider";

export default function Ontdekken() {
    // const [selected, setSelected] = useState(countries);
    const { selectedCountries, setSelectedCountries } = useContext(selectedOptionsContext);

    const onSelect = (selectedCountries) => {
        console.log("onSelect" ,selectedCountries)
    }

    const onRemove = (selectedCountries) => {
        console.log("nu geselecteerd: ", selectedCountries);
    }

    return(
        <div className="login">
            <Multiselect
                options = {selectedCountries}
                displayValue = "name"
                onSelect = {onSelect}
                showCheckbox = {true}
                onRemove = {onRemove}
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
            {/*{console.log("selected: ", selected)}*/}
<p>shdjfghjksdgh</p>
        </div>
    );
};