import { useGlobalContext } from "../../contexts/GlobalContext";
import Typography from "../UI/Typography/Typography";

export default function FooterPhone() {

    const { title, number } = useGlobalContext().footer.contact.phone
    
  return (
    <div>
        <Typography elementType="h3" text={ title } color="white" marginBottom="2.4rem" />
        <Typography elementType="h3" text={ number } color="white" />
    </div>
  )
}
