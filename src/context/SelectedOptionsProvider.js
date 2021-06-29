import React, {createContext, useState} from "react";

export const selectedOptionsContext = createContext({})

export default function SelectedOptionsProvider({children}) {
    const [selectedCountries, setSelectedCountries] = useState(null);

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
