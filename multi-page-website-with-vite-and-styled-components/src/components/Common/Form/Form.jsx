import Input from "../Input/Input";
import { StyledForm, StyledFormContainer } from "./StyledForm";

function Form({formData}) {

    console.log(formData)
  return (
    <StyledFormContainer >
        <StyledForm action="https://formspree.io/f/xrgwkppd" method="POST" >
        {
            formData.map( (el, index )=> {
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