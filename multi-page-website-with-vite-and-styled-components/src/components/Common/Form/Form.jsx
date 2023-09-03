import { useGlobalContext } from "../../../contexts/GlobalContext";
import Typography from "../../UI/Typography/Typography";
import Input from "../Input/Input";
import { StyledForm, StyledFormContainer } from "./StyledForm";

function Form() {

  // const { footerData, formData } = useGlobalContext().form

  // let { title, action, method, data } = type ? footerData : formData;

  const { title, action, method, data } = useGlobalContext().form
     
  return (
    <StyledFormContainer >
        { title && <Typography elementType="h2" text={title} /> }
        <StyledForm action={action} method={method} >
        {
            data.map( (el, index ) => <Input key={index} {...el} /> )
        }
        </StyledForm>
    </StyledFormContainer>
  )
}

export default Form