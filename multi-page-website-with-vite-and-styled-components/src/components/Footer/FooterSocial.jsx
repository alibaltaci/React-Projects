import { useGlobalContext } from "../../contexts/GlobalContext";
import Typography from "../UI/Typography/Typography";

export default function FooterSocial() {

    const { title,  data } = useGlobalContext().footer.contact.social

    console.log(data)
    
  return (
    <div>
        <Typography elementType="h3" text={ title } color="white" marginBottom="2.4rem" />
    </div>
  )
}
