import React, {useState, } from "react";
import "./Ontdekken.css"
import countries from  "../data/countries.json"
import Multiselect from 'multiselect-react-dropdown';

export default function Ontdekken() {
    const [selected, setSelected] = useState(countries);

    // useEffect(() => {
    //
    //         setSelected(selected);
    //     console.log("selected: ", selected)
    //
    // }, [selected])

const onSelect = (selected) => {
        console.log("onSelect" ,selected)
}

const onRemove = (selected) => {
    console.log("nu geselecteerd: ", selected);
}

    return(
        <div className="ontdekken">
            <Multiselect
                options={selected}
                displayValue="name"
                onSelect={onSelect}
                showCheckbox={true}
                onRemove={onRemove}

                />
            {/*{console.log("selected: ", selected)}*/}

        </div>
    );
};