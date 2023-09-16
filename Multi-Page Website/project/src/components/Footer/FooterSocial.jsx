import { useGlobalContext } from "../../contexts/GlobalContext";
import Container from "../Common/Container/Container";
import SocialIconContainer from "../Common/Icons/SocialIconContainer";
import Typography from "../UI/Typography/Typography";

export default function FooterSocial() {

    const { title,  data } = useGlobalContext().footer.contact.social
    
  return (
    <Container direction="column" >
        <Typography elementType="h3" text={ title } color="white" marginBottom="2.4rem" />
        <SocialIconContainer data={data} />
    </Container>
  )
}
