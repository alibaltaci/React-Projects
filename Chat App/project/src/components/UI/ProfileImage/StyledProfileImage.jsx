import styled, { css } from "styled-components";
// import { StyledImage } from "../Image/StyledImage";

export const StyledProfileImage = styled.img`

    border-radius: 50%;
    
    ${(props) => 
        props.bgColor &&
        css`
            background-color: ${props.bgColor};
        `
    }

    ${(props) => 
        props.height &&
        css`
            height: ${props.height};
        `
    }

    ${(props) => 
        props.width &&
        css`
            width: ${props.width};
        `
    }

    ${(props) => 
        props.margin &&
        css`
            margin: ${props.margin};
        `
    }

    ${(props) => 
        props.marginLeft &&
        css`
            margin-left: ${props.marginLeft};
        `
    }

    ${(props) => 
        props.marginRight &&
        css`
            margin-right: ${props.marginRight};
        `
    }


`