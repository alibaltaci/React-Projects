  import axios from "axios"
  

  const BASE_URL = "https://covid-19-statistics.p.rapidapi.com"

  const KEY = "d69cb5bd09msha8f3eb3e66141c2p1c38eejsncf3170289181"


  export const getCountries = async() => {

      const options = {
        method: 'GET',
        url: `${BASE_URL}/regions`,
        headers: {
          'X-RapidAPI-Key': KEY,
          'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
        }
      };
        
      try {
        const { data } = await axios.request(options);
        console.log(data);
        return data
        // const response = await axios.request(options);
        // console.log(response);
      } catch (error) {
        console.error(error);
      }
  }

  export const getData = async(country) => {

      const options = {
        method: 'GET',
        url: `${BASE_URL}/reports?q=${country}`,
        headers: {
          'X-RapidAPI-Key': KEY,
          'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
        }
      };
        
      try {
        const { data } = await axios.request(options);
        return data
      } catch (error) {
        console.error(error);
      }
  }

  export const getTotalData = async() => {

      const options = {
        method: 'GET',
        url: `${BASE_URL}/reports/total`,
        headers: {
          'X-RapidAPI-Key': KEY,
          'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
        }
      };
        
      try {
        const { data } = await axios.request(options);
        return data
      } catch (error) {
        console.error(error);
      }
  }

  //   // country names
  //   // https://covid-19-statistics.p.rapidapi.com/regions

  //   // total
  //   // https://covid-19-statistics.p.rapidapi.com/reports/total

  //   // all countries
  //   // https://covid-19-statistics.p.rapidapi.com/reports

  //   // specific country
  //   // https://covid-19-statistics.p.rapidapi.com/reports?q=turkey