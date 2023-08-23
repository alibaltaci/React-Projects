import HeroSection from "../components/Hero/HeroSection";
import { about } from "../data/data.json"

export default function About() {
  return (
    <HeroSection {...about.hero} />
  )
}
