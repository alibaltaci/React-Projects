import { useGlobalContext } from "../../contexts/GlobalContext";
import Form from "../Common/Form/Form";
import Typography from "../UI/Typography/Typography";

export default function FooterForm() {

    const {  formData  } = useGlobalContext().footer.contact
  
    return (
    <div>
        <Typography elementType="h3" text={formData.title}  color="white" align="center" />
        <Form formData={ formData } marginTop="0" />
    </div>
  )
}
