import { useGlobalContext } from "../../contexts/GlobalContext";
import Container from "../Common/Container/Container";
import Typography from "../UI/Typography/Typography";

export default function FooterPhone() {

    const { title, number } = useGlobalContext().footer.contact.phone
    
  return (
    <Container direction="column" >
        <Typography elementType="h3" text={ title } color="white" marginBottom="2.4rem" />
        <Typography elementType="h3" text={ number } color="white"  />
    </Container>
  )
}
