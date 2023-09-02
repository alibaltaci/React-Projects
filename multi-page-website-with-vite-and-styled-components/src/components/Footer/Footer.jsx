import Container from "../Common/Container/Container"
import Button from "../UI/Button/Button"
import Typography from "../UI/Typography/Typography"
import { StyledFooterWrapper } from "./StyledFooter"

function Footer() {
  return (
    <StyledFooterWrapper>
      <Container grid="2"  >
        <Container direction="column" gap="1rem" marginTop="2rem" >
          <Typography elementType="h3" text="Ready Go Get Started?" />
          <Typography elementType="h3" text="Talk To Us Today" />
        </Container>
        <Container direction="column" gap="1rem" >
          <Button route="/" text="Get Started" />  
          </Container>
      </Container>  
    </StyledFooterWrapper>
  )
}

export default Footer