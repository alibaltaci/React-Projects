import StyledHeroSection from "./StyledHeroSection";
import  Button  from "../UI/Button/Button";
import { useGlobalContext } from "../../contexts/GlobalContext";

export default function HeroSection() {

    // const { topContent, heading, content, button, imgUrl } = useGlobalContext()[pageName].hero  // remove useContext and AppProvider
    const { topContent, heading, content, button, imgUrl } = useGlobalContext().common.hero

  return (
    <StyledHeroSection>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
                <p className="hero-top-data" >{topContent}</p>
                <h1 className="hero-heading" >{ heading }</h1>
                <p className="hero-para" >{ content }</p>
                <Button route="/contact" text={button} />
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


