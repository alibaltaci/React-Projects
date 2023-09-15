import { createContext, useContext, useEffect, useState } from "react";
import { getCountries } from "../api/api";


const AppContext = createContext()

const AppProvider = ( {children} ) => {

    const [selectedCountry, setSelectedCountry] = useState('turkey');
    const [countries, setCountries] = useState([])
    // const [ input, setInput ] = useState("")

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    useEffect( () => {
        
        const getCountryNames = async() => {
            try {
                const countryNames = await getCountries();
                const sortedCountryNames = countryNames.data.map( country => country.name ).sort()
                setCountries( sortedCountryNames );
                console.log(sortedCountryNames)
                // console.log("-->", countryNames.data[0].name)
            } catch (error) {
                console.log(error)
            }
            };

        getCountryNames()

    },[])

    return(
        <AppContext.Provider value={{selectedCountry, countries, handleCountryChange }}>
            { children }
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useGlobalContext }