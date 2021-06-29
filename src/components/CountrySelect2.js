import React, {useEffect, useContext, useState} from "react";
import "./CountrySelect2.css"
import { selectedOptionsContext} from "../context/SelectedOptionsProvider";
import countries from  "../data/countries.json"
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form';


export default function CountrySelect2() {
    const {selectedCountries, setSelectedCountries} = useContext(selectedOptionsContext);
    const [checkedCountries, setCheckedCountries] = useState({});

    const methods = useForm();
    const { handleSubmit, register } = methods;

    function submitHandler(data) {
        console.log(data);
    }

    return(
        <div className="login">
            <form onSubmit={handleSubmit(submitHandler)}>
                <label htmlFor="countrylist"> Kies een land
                <Controller
                    control = {methods.control}
                    {...register("country-list")}
                    render={({
                        field: { onChange, value, }
                             }) => (
                        <Select
                            isMulti
                            options = {countries}
                            getOptionValue = {(option) => option.name}
                            getOptionLabel = {(option) => option.name}
                            />
                    )}
                    />
                 </label>
                <button type="submit">
                    versturen
                </button>
            </form>
        </div>
    )
}


// {countries.map((countries) => {
//     return <option getOptionValue={countries.name}  >{countries.name}</option>
//
// })};
