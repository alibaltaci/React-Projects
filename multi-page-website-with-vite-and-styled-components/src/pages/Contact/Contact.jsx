import { StyledContact } from "./StyledContact";
import Typography from '../../components/UI/Typography/Typography'
import Form from "../../components/Common/Form/Form";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useEffect } from "react";

export default function Contact() {
  
  const {  dispatchReturner, contactPage } = useGlobalContext()

  useEffect( () => {
    dispatchReturner("contact")
  }, [] )

  return (
    <StyledContact>
      <Typography elementType="h2" text={contactPage.pageTitle} />
      <iframe 
        src={contactPage.googleMapURL} 
        width="100%" 
        height="400" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      <Form />
    </StyledContact>
  )
}
