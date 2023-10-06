import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme"

export const StyledInput = styled.input`

    border: none;

    ${(props) => 
        props.matchParent && 
        css`
            width: 100%;
            height: 100%;
        `
    }

    ${(props) => 
        props.width &&
        css`
            width: ${props.width};
        `
    }

    ${(props) => 
        props.height && 
        css`
            height: ${props.height};
        `
    }

    ${(props) => 
        props.paddingVertical &&
        css`
            padding-top: ${props.paddingVertical};
            padding-bottom: ${props.paddingVertical};
        `
    }

    ${(props) => 
        props.paddingHorizonal && 
        css`
            padding-left: ${props.paddingHorizonal};
            padding-right: ${props.paddingHorizonal};
        `
    }

    ${(props) => 
        props.paddingLeft &&
        css`
            padding-left: ${props.paddingLeft};
        `
    }

    ${(props) => 
        props.paddingRight &&
        css`
            padding-right: ${props.paddingRight};
        `
    }

    /* xs, s, m, l */
    ${({radius = "s"}) => 
        css`
            border-radius: ${theme.borderRadius[radius]};
        `
    }

    ${(props) =>
        props.outline && 
        css`
            outline: ${props.inactiveOutlineColor
                ?`1px solid ${props.about.inactiveOutlineColor}`
                : `1p solid #2661AB`
            };
        `
    }
    


`