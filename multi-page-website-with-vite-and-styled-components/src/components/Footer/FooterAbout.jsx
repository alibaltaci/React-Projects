import { useGlobalContext } from "../../contexts/GlobalContext";
import Typography from "../UI/Typography/Typography";

export default function FooterAbout() {

    const { title, description } = useGlobalContext().footer.contact.about

  return (
    <div>
        <Typography elementType="h3" text={title} color="white" marginBottom="2.4rem" />
        <Typography text={description}  color="white" />
    </div>
  )
}
