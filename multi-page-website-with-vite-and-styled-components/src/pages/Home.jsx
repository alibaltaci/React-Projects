import { useEffect } from "react";
import HeroSection from "../components/Common/Hero/HeroSection";
import {  useGlobalContext } from "../contexts/GlobalContext";
import Services from "./Services/Services"
import Contact from "./Contact/Contact"

export default function Home() {

  const { dispatchReturner } = useGlobalContext()

  useEffect( () =>  dispatchReturner( "home" ), [] )

  return (
    // <HeroSection {...home.hero} />
    // <HeroSection pageName="home" />

    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  )
}
