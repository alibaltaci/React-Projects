// import { NavLink } from "react-router-dom";
import { StyledButton } from "./StyledButton";
import Typography from "../Typography/Typography";

export default function Button({route, text, ...props}) {

    console.log(route)

  return (
    // <NavLink to={ route } >
        <StyledButton {...props} >
            <Typography text={ text } />
        </StyledButton>
    // </NavLink>
  )
}