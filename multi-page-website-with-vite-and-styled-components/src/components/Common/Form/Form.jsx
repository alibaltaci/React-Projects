import { useGlobalContext } from "../../../contexts/GlobalContext";
import Input from "../Input/Input";
import { StyledForm, StyledFormContainer } from "./StyledForm";

function Form() {

    const { action, method, data } = useGlobalContext().form
    
  return (
    <StyledFormContainer >
        <StyledForm action={action} method={method} >
        {
            data.map( (el, index ) => <Input key={index} {...el} /> )
        }
        </StyledForm>
    </StyledFormContainer>
  )
}

export default Form