import { StyledContact } from "./StyledContact";
import Typography from '../../components/UI/Typography/Typography'
import Form from "../../components/Common/Form/Form";
import {contactPage} from "../../data/data.json"
export default function Contact() {
  
  return (
    <StyledContact>
      <Typography elementType="h2" text="Feel Free To Contact Us " />
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.437795301157!2d28.5185426756796!3d38.36199257811797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b87b5fa092d6f9%3A0xd455a46cba1a8ea8!2sALAC%C4%B0TY%20AVM%20%26rezidanz!5e0!3m2!1str!2str!4v1693579164108!5m2!1str!2str" 
        width="100%" 
        height="400" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <Form formData={contactPage.formData} />

    </StyledContact>
  )
}
