// import { NavLink } from "react-router-dom";
import { StyledButton } from "./StyledButton";
import Typography from "../Typography/Typography";

export default function Button({route, text, buttonType,  ...props}) {

    console.log(route)
    
        return (
            // <NavLink to={ route } >
                <StyledButton  variant={buttonType}  {...props} >
                    <Typography 
                        text={ text } 
                        variant="label_xs"
                        color= "white_default"
                    />
                </StyledButton>
            // </NavLink>
            )
}