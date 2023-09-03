import { useGlobalContext } from "../../contexts/GlobalContext";
import Typography from "../UI/Typography/Typography";

export default function FooterForm() {

    const { title, action, data  } = useGlobalContext().footer.contact.formData
  
    console.log(action, data)
    
    return (
    <div>
        <Typography elementType="h3" text={title}  color="white" marginBottom="2.4rem" />
        {/* <Form /> */}
    </div>
  )
}
