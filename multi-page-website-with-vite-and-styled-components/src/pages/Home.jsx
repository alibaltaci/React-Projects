import HeroSection from "../components/Hero/HeroSection";
import {home} from "../data/data.json"

export default function Home() {
  return (
    <HeroSection {...home.hero} />
  )
}
