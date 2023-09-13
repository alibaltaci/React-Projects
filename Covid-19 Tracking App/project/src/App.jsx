import { FlexContainer } from "./components/FlexContainer/FlexContainer"
import Dropdown from "./components/Dropdown/Dropdown"

function App() {



  return (
    <>
    <FlexContainer type="row" align="center" justify="center" gap="1rem" marginTop="5rem" >
      <img src='./c-19.svg' alt='covid-19' style={{maxWidth:"3.3rem"}}  />
      <Dropdown />
    </FlexContainer>
    
    </>
  )
}

export default App
