import { useEffect } from "react";
import HeroSection from "../components/Hero/HeroSection";
import { useGlobalContext } from "../context";

export default function About() {

  const { updateAboutPage } = useGlobalContext()

  useEffect( () =>  updateAboutPage(), [])

  return (
    <HeroSection />
  )
}
