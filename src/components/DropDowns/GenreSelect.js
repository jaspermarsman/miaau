import React from "react";
import Multiselect from 'multiselect-react-dropdown';
import {useOptionContext} from "../../context/SelectedOptionsProvider"
import genres from "../../data/genres.json"

export default function GenreSelect() {
    const {selectedGenres, setSelectedGenres} = useOptionContext();

    function onSelect(e) {
        setSelectedGenres(e.[0].value);
    }

    function onRemove(e) {
        setSelectedGenres(null);
    }


    return (
        <div className="login">
            {selectedGenres ? (
                <div>
                    <div className="confirm-box">
                        <h2>Gekozen genre:</h2>
                        <label className="input-label"> {selectedGenres}
                            <input
                                type="checkbox"
                                value={selectedGenres}
                                checked={selectedGenres}
                                onChange={() => {
                                    setSelectedGenres(null)
                                }}
                            />
                        </label>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Kies je genre: </h2>
                    <Multiselect
                        options={genres}
                        displayValue="value"
                        showCheckbox={true}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        selectionLimit={1}
                        showArrow={true}
                        placeholder="Selecteer een genre"
                    />
                </div>
            )}


        </div>
    );
};
