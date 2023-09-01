import { useGlobalContext } from "../../../contexts/GlobalContext";
import Input from "../Input/Input";
import { StyledForm, StyledFormContainer } from "./StyledForm";

function Form() {

    const { action, method, data } = useGlobalContext().form
    
  return (
    <StyledFormContainer >
        <StyledForm action={action} method={method} >
        {
            data.map( (el, index )=> {
                const { type, name, placeholder, value } = el
                
                return(
                    <Input key={index} type={type} placeholder={placeholder} name={name} value={value} />
                    )
                })
            }
        </StyledForm>
    </StyledFormContainer>
  )
}

export default Form