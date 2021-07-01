import React, {createContext, useState} from "react";

export const selectedOptionsContext = createContext({})

export default function SelectedOptionsProvider({children}) {
    const [selectedCountries, setSelectedCountries, selectedGenres, setSelectedGenres] = useState(null);

    return (
        <selectedOptionsContext.Provider
            value={{
                selectedCountries: selectedCountries,
                setSelectedCountries: setSelectedCountries,
                selectedGenres: selectedGenres,
                setSelectedGenres: setSelectedGenres,
            }}
        >
            {children}
        </selectedOptionsContext.Provider>
    );
}
