import Container from "../Common/Container/Container"
import Button from "../UI/Button/Button"
import Typography from "../UI/Typography/Typography"
import Form from "../Common/Form/Form"
import { StyledFooter, StyledFooterBottom, StyledFooterTop, StyledFooterWrapper } from "./StyledFooter"

function Footer() {

  const date = new Date().getFullYear()
  return (
    <StyledFooterWrapper>
      <StyledFooterTop>
        <Container grid="2"  >
          <Container direction="column" gap="1rem" marginTop="2rem" >
            <Typography elementType="h3" text="Ready Go Get Started?" />
            <Typography elementType="h3" text="Talk To Us Today" />
          </Container>
          <Container direction="column" gap="1rem" >
            <Button route="/" text="Get Started" />  
            </Container>
        </Container>
      </StyledFooterTop>

      <StyledFooter>
        <Container grid="4">
          <div>
            <Typography elementType="h3" text="Sisyphus Soft" color="white" marginBottom="2.4rem" />
            <Typography text="Lorem ipsum dolor sit amet consectetur adipisicing elit."  color="white" />
          </div>
          <div>
            <Typography elementType="h3" text="Subscribe to get important updates"  color="white" marginBottom="2.4rem" />
            <Form />
          </div>
          {/* social icons */}
          <div>
            <Typography elementType="h3" text="Follow Us" color="white" marginBottom="2.4rem" />
          </div>
          <div>
            <Typography elementType="h3" text="Call Us" color="white" marginBottom="2.4rem" />
            <Typography elementType="h3" text="0 555 000 00 00" color="white" />
          </div>
        </Container>
      </StyledFooter>
      <hr />
      <StyledFooterBottom>
        <Container direction="row">
          <Container direction="row" >
            <Typography text={`${date} Sisyphus Soft. All Rights Reserved.`} color="white" />
          </Container>
          <Container>
            <Typography text="PRIVACY POLICY" color="white" />
            <Typography text="TERMS & CONDITIONS" color="white" />
          </Container>
        </Container>
      </StyledFooterBottom> 


    </StyledFooterWrapper>
  )
}

export default Footer