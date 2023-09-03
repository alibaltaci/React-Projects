import { useGlobalContext } from "../../contexts/GlobalContext";
import Container from "../Common/Container/Container";
import Typography from "../UI/Typography/Typography";
import { StyledFooterBottom } from "./StyledFooter";

export default function FooterBottom() {

  const { right, policy, terms } = useGlobalContext().footer.bottom

  const date = new Date().getFullYear()

  return (
    <StyledFooterBottom>
        <Container direction="row">
          <Container direction="row" >
            <Typography text={`${date} ${right}`} color="white" />
          </Container>
          <Container >
            <Typography text={policy} color="white" />
            <Typography text={ terms } color="white" />
          </Container>
        </Container>
      </StyledFooterBottom> 
  )
}
