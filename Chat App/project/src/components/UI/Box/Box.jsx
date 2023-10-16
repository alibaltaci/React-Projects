import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";
import { borderEditor, hexToRGB } from "../../utils/function";

export const Box = styled.div`

    display: block;
    
    ${({variant}) => 
        variant === "outline" && 
        css`
            border: 1px solid ${theme.colors.black_default};
            border-radius: ${theme.borderRadius.s};
        `
    }

    ${(props) => 
        props.horizonalPadding &&
        css`
            padding-left: ${props.horizonalPadding};
            padding-right: ${props.horizonalPadding};
        `
    }

    ${(props) => 
        props.border && 
        css`
            /* border: ${props.border}; */
            border: ${borderEditor(props.border)};
        `
    }

    ${(props) => 
        props.borderRadius && 
        css`
            border-radius: ${theme.borderRadius[props.borderRadius]};
        `
    } 

    ${(props) => 
        props.position && 
        css`
            position: ${props.position};
        `
    }

    ${(props) => 
        props.backgroundColor && 
        css`
            background-color: ${theme.colors[props.backgroundColor]};
            ${props.bgColorOpacity &&
            css`
                background-color: ${hexToRGB(theme.colors[props.backgroundColor], props.bgColorOpacity)};
        
            `}
        `
    }

    ${(props) =>
        props.opacity && 
        css`
            opacity: ${props.opacity};
        `
    }

    ${(props) => 
        props.marginTop && 
        css`
            margin-top: ${props.marginTop};
        `
    }

    ${(props) => 
        props.marginBottom && 
        css`
            margin-bottom: ${props.marginBottom};
        `
    }

    ${(props) => 
        props.margin && 
        css`
            margin: ${props.margin};
        `
    }
    
    ${(props) => 
        props.paddingTop && 
        css`
            padding-top: ${props.paddingTop};
        `
    }

    ${(props) => 
        props.paddingBottom && 
        css`
            padding-bottom: ${props.paddingBottom};
        `
    }
    
    ${(props) => 
        props.padding && 
        css`
            padding: ${props.padding};
        `
    }

    ${(props)  => 
        props.width && 
        css`
            width: ${props.width};
        `
    }

    ${(props) => 
        props.minWidth && 
        css`
            min-width: ${props.minWidth};
        `
    }

    ${(props) => 
        props.maxWidth && 
        css`
            max-width: ${props.maxWidth};
        `
    }

    ${(props) => 
        props.height && 
        css`
            height: ${props.height};
        `
    }

    ${(props) => 
        props.maxHeight && 
        css`
            max-height: ${props.maxHeight};
        `
    }

    ${(props) => 
        props.minHeight && 
        css`
            min-height: ${props.minHeight};
        `
    }

    ${(props) => 
        props.visibilityTransformOptions && 
        css`
            @media (max-width: ${theme.screen[props.visibilityTransformOptions[0]]};) {
                display: none;   
            }
        `
    }

`