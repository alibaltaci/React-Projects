import { useEffect } from "react";
import HeroSection from "../components/Hero/HeroSection";
import {  useGlobalContext } from "../contexts/GlobalContext";
import { MongoClient } from "mongodb";

export default function Home() {

  const { dispatchReturner } = useGlobalContext()

  
  async function connectDatabase(){
    
    const mongoClient = new MongoClient('mongodb+srv://alibaltaci13:g4MtCxMHwIgohwcA@cluster0.vzhdfac.mongodb.net/react_multi_page_website?retryWrites=true&w=majority')
    await mongoClient.connect();
    
    const data = await mongoClient.db().collection('services').find({}).toArray()
    mongoClient.close();

    return data;
    
  }

  // connectDatabase()

  useEffect( () =>  {dispatchReturner( "home" ); fetchData();
  }, [] )

  async function fetchData() {
    const mdbData = await connectDatabase();
    console.log(mdbData);
  }

  return (
    // <HeroSection {...home.hero} />
    // <HeroSection pageName="home" />

    <>
     <HeroSection />
    </>
  )
}
