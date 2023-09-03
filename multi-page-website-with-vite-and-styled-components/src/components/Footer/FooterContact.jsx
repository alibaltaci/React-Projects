import Container from "../Common/Container/Container";
import FooterAbout from "./FooterAbout"
import FooterForm from "./FooterForm";
import FooterPhone from "./FooterPhone";
import FooterSocial from "./FooterSocial";
import { StyledFooter } from "./StyledFooter";

export default function FooterContact() {

    // const {} = useGlobalContext().footer.contact

  return (
    <StyledFooter>
        <Container grid="4">
            <FooterAbout />
            <FooterForm />
            <FooterSocial />
            <FooterPhone />
        </Container>
    </StyledFooter>
  )
}
