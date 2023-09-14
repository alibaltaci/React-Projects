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
                setCountries(countryNames.data);
                console.log("-->", countryNames.data[0].name)
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
                    countries.map(  el =>( 
                        <option key={el.name} value={el.name.toLowerCase()}  >{el.name}</option>
                        ))
                        
                }

                <option key="deneme" value="deneme"  >
                    Deneme 1
                </option>
                <option key="deneme2" value="deneme"  >
                    Deneme 2
                </option>
                <option key="deneme3" value="deneme"  >
                    Deneme 3
                </option>
                <option key="deneme" value="deneme"  >
                    Deneme 1
                </option>
                <option key="deneme2" value="deneme"  >
                    Deneme 2
                </option>
                <option key="deneme3" value="deneme"  >
                    Deneme 3
                </option>
                <option key="deneme" value="deneme"  >
                    Deneme 1
                </option>
                <option key="deneme2" value="deneme"  >
                    Deneme 2
                </option>
                <option key="deneme3" value="deneme"  >
                    Deneme 3
                </option>
                <option key="deneme" value="deneme"  >
                    Deneme 1
                </option>
                <option key="deneme2" value="deneme"  >
                    Deneme 2
                </option>
                <option key="deneme3" value="deneme"  >
                    Deneme 3
                </option>
                <option key="deneme" value="deneme"  >
                    Deneme 1
                </option>
                <option key="deneme2" value="deneme"  >
                    Deneme 2
                </option>
                <option key="deneme3" value="deneme"  >
                    Deneme 3
                </option>
                <option key="deneme" value="deneme"  >
                    Deneme 1
                </option>
                <option key="deneme2" value="deneme"  >
                    Deneme 2
                </option>
                <option key="deneme3" value="deneme"  >
                    Deneme 3
                </option>
                <option key="deneme" value="deneme"  >
                    Deneme 1
                </option>
                <option key="deneme2" value="deneme"  >
                    Deneme 2
                </option>
                <option key="deneme3" value="deneme"  >
                    Deneme 3
                </option>
                <option key="deneme" value="deneme"  >
                    Deneme 1
                </option>
                <option key="deneme2" value="deneme"  >
                    Deneme 2
                </option>
                <option key="deneme3" value="deneme"  >
                    Deneme 3
                </option>
                <option key="deneme" value="deneme"  >
                    Deneme 1
                </option>
                <option key="deneme2" value="deneme"  >
                    Deneme 2
                </option>
                <option key="deneme3" value="deneme"  >
                    Deneme 3
                </option>
                <option key="deneme" value="deneme"  >
                    Deneme 1
                </option>
                <option key="deneme2" value="deneme"  >
                    Deneme 2
                </option>
                <option key="deneme3" value="deneme"  >
                    Deneme 3
                </option>
                <option key="deneme" value="deneme"  >
                    Deneme 1
                </option>
                <option key="deneme2" value="deneme"  >
                    Deneme 2
                </option>
                <option key="deneme3" value="deneme"  >
                    Deneme 3
                </option>
                <option key="deneme" value="deneme"  >
                    Deneme 1
                </option>
                <option key="deneme2" value="deneme"  >
                    Deneme 2
                </option>
                <option key="deneme3" value="deneme"  >
                    Deneme 3
                </option>
                <option key="deneme" value="deneme"  >
                    Deneme 1
                </option>
                <option key="deneme2" value="deneme"  >
                    Deneme 2
                </option>
                <option key="deneme3" value="deneme"  >
                    Deneme 3
                </option>
                <option key="deneme" value="deneme"  >
                    Deneme 1
                </option>
                <option key="deneme2" value="deneme"  >
                    Deneme 2
                </option>
                <option key="deneme3" value="deneme"  >
                    Deneme 3
                </option>
                <option key="deneme" value="deneme"  >
                    Deneme 1
                </option>
                <option key="deneme2" value="deneme"  >
                    Deneme 2
                </option>
                <option key="deneme3" value="deneme"  >
                    Deneme 3
                </option>


            </StyledDropdown>
        </StyledFlexContainerColumn>
  )
}

export default Dropdown