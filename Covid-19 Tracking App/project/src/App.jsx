import axios from 'axios';
import Typography from './components/Typography/Typography';
import { FlexContainer } from './components/FlexContainer/FlexContainer';

function App() {

  const MAIN_URL = "https://covid-19-statistics.p.rapidapi.com"

  const KEY = "d69cb5bd09msha8f3eb3e66141c2p1c38eejsncf3170289181"


  const getData = async() => {

    // country names
    // https://covid-19-statistics.p.rapidapi.com/regions

    // total
    // https://covid-19-statistics.p.rapidapi.com/reports/total

    // all countries
    // https://covid-19-statistics.p.rapidapi.com/reports

    // specific country
    // https://covid-19-statistics.p.rapidapi.com/reports?q=turkey

    const options = {
      method: 'GET',
      url: `${MAIN_URL}/reports?q=turkey`,
      headers: {
        'X-RapidAPI-Key': KEY,
        'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <>
    <FlexContainer>
      <h1>Covid-19 Tracking App</h1>
      <button onClick={ () => getData() } >Click</button>
    </FlexContainer>


      <Typography text="deneme" elementType="h1" variant="title_max" color="red_default" />
    </>
  )
}

export default App
