import { useEffect } from "react";
import HeroSection from "../components/Hero/HeroSection";
import {  useGlobalContext } from "../context";

export default function Home() {

  const { updateHomePage } = useGlobalContext()

  useEffect( () =>  updateHomePage(), [] )

  return (
    // <HeroSection {...home.hero} />
    // <HeroSection pageName="home" />

    <>
     <HeroSection />
    </>
  )
}
