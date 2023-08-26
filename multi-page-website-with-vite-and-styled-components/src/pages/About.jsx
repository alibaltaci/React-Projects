import { useEffect } from "react";
import HeroSection from "../components/Hero/HeroSection";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function About() {

  const { dispatchReturner } = useGlobalContext()

  useEffect( () =>  dispatchReturner( "about" ), [])

  return (
    <HeroSection />
  )
}
