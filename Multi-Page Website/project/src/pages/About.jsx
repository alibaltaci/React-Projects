import { useEffect } from "react";
import HeroSection from "../components/Common/Hero/HeroSection";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function About() {

  const { dispatchReturner } = useGlobalContext()

  useEffect( () =>  dispatchReturner( "about" ), [])

  return (
    <HeroSection />
  )
}
