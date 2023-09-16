import { useGlobalContext } from "../../contexts/GlobalContext";
import Container from "../Common/Container/Container";
import Form from "../Common/Form/Form";
import Typography from "../UI/Typography/Typography";

export default function FooterForm() {

    const {  formData  } = useGlobalContext().footer.contact
  
    return (
    <Container direction="column" >
        <Typography elementType="h3" text={formData.title}  color="white"  />
        <Form formData={ formData } marginTop="0" />
    </Container>
  )
}
