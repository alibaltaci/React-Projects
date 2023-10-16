// import { NavLink } from "react-router-dom";
import { Typography } from "../Typography/Typography";
import { StyledButton } from "./StyledButton";

export const Button = ({route, text, buttonType,  ...props}) =>  {

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