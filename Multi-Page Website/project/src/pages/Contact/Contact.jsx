import { StyledContact } from "./StyledContact";
import Typography from '../../components/UI/Typography/Typography'
import Form from "../../components/Common/Form/Form";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useEffect } from "react";
import GoogleMap from "../../components/Common/GoogleMap/GoogleMap";

export default function Contact() {
  
  const {  dispatchReturner, contactPage } = useGlobalContext()

  useEffect( () => {
    dispatchReturner("contact")
  }, [] )

  return (
    <StyledContact>
      <Typography elementType="h2" text={contactPage.pageTitle} />
      <GoogleMap location={contactPage.googleMapURL} />
      <Form />
    </StyledContact>
  )
}
