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
        (props.border || props.borderHover) && 
        css`
            /* border: ${props.border}; */
            border: ${ props.border && borderEditor(props.border)};

            &:hover{
                border: ${ props.borderHover && borderEditor(props.borderHover) }
            }
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
            background-color: ${ props.bgOpacity
            ? hexToRGB(theme.colors[props.backgroundColor], props.bgOpacity)
            : theme.colors[props.backgroundColor]
            };
            &:hover {
                background-color: ${props.bgOpacityHover
                ? hexToRGB(theme.colors[props.backgroundColor], props.bgOpacityHover)
                : hexToRGB(theme.colors[props.backgroundColor], props.bgOpacity)
            }}
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
        props.marginRight && 
        css`
            margin-right: ${props.marginRight};
        `
    }

    ${(props) => 
        props.marginLeft && 
        css`
            margin-left: ${props.marginLeft};
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