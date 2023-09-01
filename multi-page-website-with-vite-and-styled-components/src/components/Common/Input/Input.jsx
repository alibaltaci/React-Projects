import { StyledInputArea, StyledTextArea } from "./StyledInput"

function Input({type, name, placeholder, value}) {

    const SelectedComponent = 
    type === "textarea"
    ? StyledTextArea
    : StyledInputArea

    return (
        <SelectedComponent type={type} name={name} placeholder={placeholder} value={value} autoCoplete="off"  required />
  )
}

export default Input