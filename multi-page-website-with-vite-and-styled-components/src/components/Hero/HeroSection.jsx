import { NavLink } from "react-router-dom";
import StyledHeroSection from "./StyledHeroSection";
import { Button } from "../UI/Button/Button";
import { useGlobalContext } from "../../context";

export default function HeroSection({pageName}) {

    const { topContent, heading, content, button, imgUrl } = useGlobalContext()[pageName].hero  // remove useContext and AppProvider
    
  return (
    <StyledHeroSection>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p className="hero-top-data" >{topContent}</p>
                <h1 className="hero-heading" >{ heading }</h1>
                <p className="hero-para" >{ content }</p>
            <Button className="btn hireme-btn">
                <NavLink to="/contact" >{ button }</NavLink>
            </Button>
            </div>
            {/* for image */}
            <div className="section-hero-image">
                <picture>
                    <img src={ imgUrl } className="hero-image" />
                </picture>
            </div>
        </div>
    </StyledHeroSection>
  )
}


