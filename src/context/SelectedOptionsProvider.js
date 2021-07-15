import React, {createContext, useContext, useState} from "react";

export const selectedOptionsContext = createContext({})

export function useOptionContext() {
    return useContext(selectedOptionsContext);
}

export default function SelectedOptionsProvider({children}) {
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [selectedGenres, setSelectedGenres] = useState(null);
    const [searchResults, setSearchResults] = useState(null);
    const [selectedArtist, setSelectedArtist] = useState("");
    const [artistRelations, setArtistRelations] = useState(null)
    const [countryName, setCountryName] = useState(null);
    const [artistFoundOnSpotify, setArtistFoundOnSpotify] = useState(false)
    const [showMenu, setShowMenu] = useState(false);

    return (
        <selectedOptionsContext.Provider
            value={{
                selectedCountries: selectedCountries,
                setSelectedCountries: setSelectedCountries,
                selectedGenres: selectedGenres,
                setSelectedGenres: setSelectedGenres,
                searchResults: searchResults,
                setSearchResults: setSearchResults,
                selectedArtist: selectedArtist,
                setSelectedArtist: setSelectedArtist,
                artistRelations: artistRelations,
                setArtistRelations: setArtistRelations,
                countryName: countryName,
                setCountryName: setCountryName,
                artistFoundOnSpotify: artistFoundOnSpotify,
                setArtistFoundOnSpotify: setArtistFoundOnSpotify,
                showMenu: showMenu,
                setShowMenu, setShowMenu,
            }}
        >
            {children}
        </selectedOptionsContext.Provider>
    );
}
