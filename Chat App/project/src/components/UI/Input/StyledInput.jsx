import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme"
import { hexToRGB } from "../../utils/function";

export const StyledInput = styled.input`

    border: none;
    outline: none;

    ${(props) => 
        props.id === "file" && 
        css`
            display: none;
        `
    }
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
        props.widthInput &&
        css`
            width: ${props.widthInput};
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

    /* ${(props) =>
        props.outline && 
        css`
            outline: ${props.inactiveOutlineColor
                ?`1px solid ${props.inactiveOutlineColor}`
                : `1px solid ${theme.colors.salmon}`
            };

            &:focus{
                outline: ${props.activeOutlineColor
                    ?`1px solid ${props.activeOutlineColor}`
                    :`1px solid ${theme.colors.salmon}`
                };
                box-shadow: 2px 2px 2px 2px 
                    ${hexToRGB(props.activeOutlineColor || theme.colors.salmon, 0,3)}
            }
        `
    } */

    ${(props) => 
        props.background && 
        css`
            background: ${props.background}
           
        `
    }

    ${(props) => 
        props.bgColor && 
        css`
            background-color: ${ props.bgOpacity
            ? hexToRGB(theme.colors[props.bgColor], props.bgOpacity)
            : theme.colors[props.bgColor]};
        `
    }

    color: ${({color}) => 
        theme.colors[color] || color || theme.colors.navy_blue
    };

    font-size: ${({textSize}) => 
        textSize 
        ? theme.screenFontSizes["mobile"][textSize] 
        : theme.screenFontSizes.laptop.s
    };
`

export const StyledLabel = styled.label`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    overflow: hidden;
`

// to change the label (input --> textarea): .attrs({as: "textarea"})
export const StyledTextArea = styled(StyledInput).attrs({as: "textarea"})`

/* ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `}
  color: ${({ color }) => color || theme.colors.black_default};
  font-size: ${({ textSize }) =>
    textSize ? theme.screenFontSizes.laptop[textSize] : theme.screenFontSizes.laptop.m};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ placeholderColor }) =>
      placeholderColor || theme.colors.black_default};
    opacity: ${({ placeholderOpacity }) => placeholderOpacity || 0.4};
  }
  :-ms-input-placeholder {
    color: ${({ placeholderColor }) =>
      placeholderColor || theme.colors.black_default};
    opacity: ${({ placeholderOpacity }) => placeholderOpacity || 0.6};
  } */

`
