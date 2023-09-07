import StyledHeroSection from "./StyledHeroSection";
import  Button  from "../../UI/Button/Button";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import Typography from "../../UI/Typography/Typography"
import Container from "../Container/Container";

export default function HeroSection() {

    const { topContent, heading, content, button, imgUrl, route } = useGlobalContext().common.hero

  return (
    <StyledHeroSection>
        <Container grid="2">

            <div className="section-hero-data">
                <Typography text={ topContent } className="hero-top-data" />
                <Typography elementType="h1" text={ heading } className="hero-heading"  />
                <Typography text={ content } 
                    opacity=".9"  
                    margin="1.5rem 0 3.4rem 0"
                    max-width="60rem"
                    // align="center"
                />
                <Button route={route} text={button} />
            </div>
            {/* for image */}
            <div className="section-hero-image">
                <picture>
                    <img src={ imgUrl } className="hero-image" />
                </picture>
            </div>
        </Container>
    </StyledHeroSection>
  )
}


