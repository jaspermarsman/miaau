import React, {useState, useContext} from "react";
import "./Ontdekken.css"
import Multiselect from 'multiselect-react-dropdown';
import { selectedOptionsContext} from "../context/SelectedOptionsProvider";

export default function Ontdekken() {
    // const [selected, setSelected] = useState(countries);
    const { selectedCountries, setSelectedCountries } = useContext(selectedOptionsContext);

    // useEffect(() => {
    //
    //         setSelected(selected);
    //     console.log("selected: ", selected)
    //
    // }, [selected])

    const onSelect = (selectedCountries) => {
        console.log("onSelect" ,selectedCountries)
    }

    const onRemove = (selectedCountries) => {
        console.log("nu geselecteerd: ", selectedCountries);
    }

    return(
        <div className="ontdekken">
            <Multiselect
                options={selectedCountries}
                displayValue="name"
                onSelect={onSelect}
                showCheckbox={true}
                onRemove={onRemove}

            />
            {/*{console.log("selected: ", selected)}*/}

        </div>
    );
};