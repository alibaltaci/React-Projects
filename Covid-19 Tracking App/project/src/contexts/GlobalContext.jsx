import { createContext, useContext, useEffect, useState } from "react";
import { getCountries, getData, getTotalData } from "../api/api";


const AppContext = createContext()

const AppProvider = ( {children} ) => {

    // Country Names 
    const [selectedCountry, setSelectedCountry] = useState('turkey');
    const [countries, setCountries] = useState([])

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
     

    // Covid Data

    const [ dailyData, setDailyData] = useState([])

    useEffect( () => {
        const getCountryData = async() => {
            try{
                const data = await getData(selectedCountry);
                setDailyData(data.data[0])
                console.log(data.data[0])
            }
            catch (error){
                console.log(error)
            }
        } 

        getCountryData()
        
    }, [selectedCountry])


    // total data

    const [ totalData, setTotalData] = useState([])

    useEffect( () => {
        const getWorldData = async() => {
            try{
                const data = await getTotalData()
                setTotalData(data.data)
            }catch(error){
                console.log(error)
            }
            
        }

        getWorldData()
    }, [])


    return(
        <AppContext.Provider value={{selectedCountry, countries, handleCountryChange, dailyData, totalData }}>
            { children }
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useGlobalContext }