import styled from "styled-components";
// import { theme } from "../../styles/theme"

export const StyledFlexContainerBasic = styled.div`

    display: flex;
    flex-wrap: ${({wrap}) => wrap};
    flex-direction: ${({direction}) => direction || "row"};
    justify-content: ${({justify}) => justify || "center"};
    align-items: ${({align}) => align || "center"};
    margin: ${({margin}) => margin || "0"};
    padding: ${({padding}) => padding || "0"};
    gap: ${({gap}) => gap || "0"};
    width: ${({width}) => width || "100%"};
    height: ${({height}) => height || "100%"};
    position: ${({position}) => position || "reletive"};
    opacity: ${({opacity}) => opacity || "1"};
    border: ${({border}) => border || "none"};
    border-radius: ${({radius}) => radius || "0"};
    z-index: ${({index}) => index || "0"};
    
`