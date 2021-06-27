import React, {createContext, useState} from "react";
import countries from  "../data/countries.json"

export const selectedOptionsContext = createContext({})

export default function SelectedOptionsProvider({children}) {
    const [selectedCountries, setSelectedCountries] = useState(countries);

    return (
        <selectedOptionsContext.Provider
            value={{
                selectedCountries: selectedCountries,
                setSelectedCountries: setSelectedCountries,
            }}
        >
            {children}
        </selectedOptionsContext.Provider>
    );
}