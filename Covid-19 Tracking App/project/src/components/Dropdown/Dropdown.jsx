import { StyledDropdown } from "./StyledDropdown"
import { StyledFlexContainerColumn } from "../FlexContainer/StyledFlexContainer";
import { useGlobalContext } from "../../contexts/GlobalContext"
 
const Dropdown = () => {

    const {selectedCountry, countries, handleCountryChange }  = useGlobalContext()

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