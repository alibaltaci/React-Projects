import Container from "../Common/Container/Container";
import Button from "../UI/Button/Button";
import Typography from "../UI/Typography/Typography";
import { StyledFooterTop } from "./StyledFooter";
import { useGlobalContext } from "../../contexts/GlobalContext";

export default function FooterTop() {

    const { content, button } = useGlobalContext().footer.top
  
    return (
    <StyledFooterTop>
        <Container grid="2"  >
            <Container direction="column" gap="1rem" marginTop="2rem" >
                {
                    content.map( (el, index) => (
                        <Typography key={index} elementType="h3" text={el.text} />
                    ))
                }
            </Container>
            <Container direction="column" gap="1rem" >
                <Button route="/contact" text={button} />  
            </Container>
        </Container>
    </StyledFooterTop>
  )
}
