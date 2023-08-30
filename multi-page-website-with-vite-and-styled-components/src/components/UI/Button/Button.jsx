import { NavLink } from "react-router-dom";
import { StyledButton } from "./StyledButton";

export default function Button({route, text}) {
  return (
    <NavLink to={ route } >
        <StyledButton  >
            { text }
        </StyledButton>
    </NavLink>
  )
}
