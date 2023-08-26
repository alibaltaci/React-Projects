import { useEffect } from "react";
import HeroSection from "../components/Hero/HeroSection";
import {  useGlobalContext } from "../contexts/GlobalContext";

export default function Home() {

  const { dispatchReturner } = useGlobalContext()

  useEffect( () =>  dispatchReturner( "home" ), [] )

  return (
    // <HeroSection {...home.hero} />
    // <HeroSection pageName="home" />

    <>
     <HeroSection />
    </>
  )
}
