import { useGlobalContext } from "../../contexts/GlobalContext";
import Container from "../Common/Container/Container";
import Typography from "../UI/Typography/Typography";

export default function FooterAbout() {

    const { title, description } = useGlobalContext().footer.contact.about

  return (
    <Container direction="column" >
        <Typography elementType="h3" text={title} color="white" marginBottom="2.4rem" align="center" />
        <Typography text={description}  color="white" align="center" />
    </Container>
  )
}
