import { NavLink } from "react-router-dom";
import StyledHeroSection from "./StyledHeroSection";
import { Button } from "../UI/Button/Button";

export default function HeroSection() {
  return (
    <StyledHeroSection>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p className="hero-top-data" >THIS IS ME</p>
                <h1 className="hero-heading" >SISYPHUS SOFT</h1>
                <p className="hero-para" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex alias, 
                    provident quam, asperiores cupiditate nam eius iusto sint et error omnis 
                    voluptatibus praesentium tempora quisquam amet architecto. Rerum, sed.
                </p>
            <Button className="btn hireme-btn">
                <NavLink to="/contact" >Hire Me</NavLink>
            </Button>
            </div>
            {/* for image */}
            <div className="section-hero-image">
                <picture>
                    <img src="./images/hero.svg" className="hero-image" />
                </picture>
            </div>
        </div>
    </StyledHeroSection>
  )
}


