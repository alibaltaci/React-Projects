import { useEffect, useState } from "react";
import { StyledDropdown } from "./StyledDropdown"
import { getCountries } from "../../api/api";
import { StyledFlexContainerColumn } from "../FlexContainer/StyledFlexContainer";

const Dropdown = () => {

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


  return (
        <StyledFlexContainerColumn width="50%" >

            <StyledDropdown  
                onChange={handleCountryChange} 
                value={selectedCountry}
            >
                { 
                    countries.map(  country =>( 
                        <option key={country} value={country.toLowerCase()}  >{country}</option>
                        ))
                        
                }
            </StyledDropdown>
        </StyledFlexContainerColumn>
  )
}

export default Dropdown