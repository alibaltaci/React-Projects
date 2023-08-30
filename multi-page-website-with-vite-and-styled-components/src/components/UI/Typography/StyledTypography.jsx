import { styled, css } from "styled-components"
import theme from "../../../styles/theme"

export const sharedTextStyles = css`

    ${props =>
        (props.color === "heading" &&
        css`
            color: ${theme.colors.heading};
        `) ||
        (props.color === "text" &&

        css`
            color: ${theme.colors.text};
        `) ||
        (props.color  &&

        css`
            color: ${theme.colors.text};
        `)  
    };

    word-wrap: break-word;
    
`;

export const StyledParagraph = styled.p`
    ${ sharedTextStyles }
    opacity: .7;
    font-size: 1.65rem;
    line-height: 1.5rem;
    margin-top: 1rem;
    font-weight: 400;
`

export const StyledSpan = styled.span`
    ${ sharedTextStyles }
`

export const StyledH1 = styled.h1`
    ${ sharedTextStyles }
    font-size: 6rem;
    font-weight: 900;
`

export const StyledH2 = styled.h2`
    ${ sharedTextStyles }
    font-size: 4.4rem;
    font-weight: 300;
    white-space: normal;
    text-align: center;
`

export const StyledH3 = styled.h3`
    ${ sharedTextStyles }
    font-size: 1.8rem;
    font-weight: 400;
`