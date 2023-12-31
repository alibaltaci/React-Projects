import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export const BasicBox = styled.div`
    
    display: block;
    
    ${(props) =>
        props.width &&
        css`
            width: ${props.width};
    `}

    ${({ variant = "default" }) => {
        if (variant === "outline") {
            return css`
                border: 1px solid ${theme.colors.black_default};
                border-radius: ${theme.borderRadius.s};
        `;
        }
    }}

    ${(props) =>
        props.height &&
            css`
                height: ${props.height};
    `}
  
    ${(props) =>
        props.border &&
        css`
            border: ${props.border};
    `}

    ${(props) =>
        props.borderRadius&&
        css`
            border-radius: ${theme.borderRadius[props.borderRadius]};
    `}

    ${(props) =>
        props.position&&
            css`
            position: ${props.position};
    `}

    ${(props) =>
        props.backgroundColor &&
        css`
            background-color: ${theme.colors[props.backgroundColor]};
    `}

    ${(props) =>
        props.marginTop &&
        css`
            margin-top: ${props.marginTop};
    `}

    ${(props) =>
        props.marginBottom &&
        css`
        margin-bottom: ${props.marginBottom};
    `}

    ${(props) =>
        props.margin &&
        css`
        margin: ${props.margin};
    `}

    ${(props) =>
        props.paddingTop &&
        css`
        padding-top: ${props.paddingTop};
    `}

    ${(props) =>
        props.paddingBottom &&
        css`
        padding-bottom: ${props.paddingBottom};
    `}

    ${(props) =>
        props.padding &&
        css`
        padding: ${props.padding};
    `}

    ${(props) =>
        props.minWidth &&
        css`
        min-width: ${props.minWidth};
    `}

    ${(props) =>
        props.maxWidth &&
        css`
        max-width: ${props.maxWidth};
    `}

    ${(props) =>
        props.minHeight &&
        css`
        min-height: ${props.minHeight};
    `}

    ${(props) =>
        props.visibilityTransformOptions &&
        css`
            @media (max-width: ${theme.screen[props.visibilityTransformOptions[0]]}) {
            display: none;
        }
    `}
`;