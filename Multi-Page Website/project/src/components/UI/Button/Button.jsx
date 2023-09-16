import { NavLink } from "react-router-dom";
import { StyledButton } from "./StyledButton";
import Typography from "../Typography/Typography";

export default function Button({route, text}) {
  return (
    <NavLink to={ route } >
        <StyledButton  >
            <Typography text={ text } />
        </StyledButton>
    </NavLink>
  )
}
