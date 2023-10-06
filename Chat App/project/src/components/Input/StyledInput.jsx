import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme"
import { hexToRGB } from "../utils/function";

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
                ?`1px solid ${props.inactiveOutlineColor}`
                : `1p solid #2661AB`
            };

            &:focus{
                outline: ${props.activeOutlineColor
                    ?`1px solid ${props.activeOutlineColor}`
                    :`1px solid #2661AB`
                };
                box-shadow: 2px 2px 2px 2px 
                    ${hexToRGB(props.activeOutlineColor || "#2661AB", 0,3)}
            }
        `
    }

    ${(props) => 
        props.background && 
        css`
            background: ${props.background};
        `
    }

    color: ${({color}) => 
        color || theme.colors.navy_blue
    };

    font-size: ${({textSize}) => 
        textSize 
        ? theme.screenFontSizes["mobile"][textSize] 
        : theme.screenFontSizes.laptop.s
    }    
`
