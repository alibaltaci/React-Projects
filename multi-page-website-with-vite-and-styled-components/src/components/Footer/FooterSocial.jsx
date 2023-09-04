import { useGlobalContext } from "../../contexts/GlobalContext";
import SocialIconContainer from "../Common/Icons/SocialIconContainer";
import Typography from "../UI/Typography/Typography";

export default function FooterSocial() {

    const { title,  data } = useGlobalContext().footer.contact.social
    
  return (
    <div>
        <Typography elementType="h3" text={ title } color="white" marginBottom="2.4rem" align="center" />
        <SocialIconContainer data={data} />
    </div>
  )
}
