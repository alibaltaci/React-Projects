import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";


// variant : title_min/xs/s/...   ,  paragraph_min/s/...

const calculateFontValues = ( variant, screen ) => {
  
    const key = variant.split("_")[0];
    const value = variant.split("_")[1];
    const fontSize = theme.screenFontSizes[screen][value];
    const fontWeight =
      key === "title"
        ? theme.fontWeight.semiBold
        : key === "paragraph"
        ? theme.fontWeight.regular
        : key === "label"
        ? theme.fontWeight.medium
        : null
  
    return css`
      font-size: ${fontSize};
      font-weight: ${fontWeight};
    `;
  };

export const sharedStyles =  css`

    color: ${({ color }) =>
        color ? theme.colors?.[color] : theme.colors.black_default
    };

    ${(props) =>
        props.lineHeight &&
        css`
        line-height: ${props.lineHeight};
    `}

    ${(props) =>
        props.padding &&
        css`
        padding: ${props.padding};
    `}

    ${(props) =>
        props.lineHeight &&
        css`
        line-height: ${props.lineHeight};
    `}
    
    ${(props) =>
        props.align &&
        css`
        text-align: ${props.align};
    `}
    
    ${(props) =>
        props.position &&
        css`
        position: ${props.position};
    `}
    
    ${(props) =>
        props.opacity &&
        css`
        opacity: ${props.opacity};
    `}
    
    ${(props) =>
        props.margin &&
        css`
        margin: ${props.margin};
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
        props.marginTrim &&
        css`
        margin-block-end: 0px;
        margin-block-start: 0px;
    `}
    
    ${(props) => 
        props.variant && 
            calculateFontValues(props.variant, "laptop")}

            &:hover {
                ${(props) =>
                props.hover &&
                css`
                    text-decoration: underline;
            `}
    }


    @media (max-width: ${theme.screen.tablet}) {
        ${(props) =>
        props.variant && calculateFontValues(props.variant, "tablet")}
    }

    @media (max-width: ${theme.screen.mobile}) {
        ${(props) =>
        props.variant && calculateFontValues(props.variant, "mobile")}
    }
`

export const StyledP = styled.p`
  ${sharedStyles}
`;

export const StyledSpan = styled.span`
  ${sharedStyles}
`;

export const StyledH1 = styled.h1`
  ${sharedStyles}
`;

export const StyledH2 = styled.h2`
  ${sharedStyles}
`;

export const StyledH3 = styled.h3`
  ${sharedStyles}
`;


// const elements = ["p", "span", "h1", "h2", "h3"];

// const StyledElements = {};

// elements.forEach(el => {
//     StyledElements[`Styled${el}`] = styled(el)`
//         ${sharedStyles}
//     `;
// });

// export { StyledElements };