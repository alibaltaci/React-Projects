import { FlexContainer } from "./components/FlexContainer/FlexContainer"
import Dropdown from "./components/Dropdown/Dropdown"
import AreaCharts from "./components/AreaChart/AreaCharts"

function App() {



  return (
    <>
    <FlexContainer type="column" gap="10rem" >
      <FlexContainer type="row" align="center" justify="center" gap="1rem" marginTop="5rem">
        <img src='./c-19.svg' alt='covid-19' style={{maxWidth:"3.3rem"}}  />
        <Dropdown />
      </FlexContainer >
      <AreaCharts />
    </FlexContainer>
    
    </>
  )
}

export default App
