import { useGlobalContext } from "../../../contexts/GlobalContext";
import Input from "../Input/Input";
import { StyledForm, StyledFormContainer } from "./StyledForm";

function Form({formData, ...props}) {

  const { form } = useGlobalContext()

  let { action, method, data } = formData ? formData : form;

  // const { title, action, method, data } = useGlobalContext().form

     
  return (
    <StyledFormContainer {...props}  >
        <StyledForm action={action} method={method} >
        {
          data && data.map( (el, index ) => <Input key={index} {...el} /> )
        }
        </StyledForm>
    </StyledFormContainer>
  )
}

export default Form