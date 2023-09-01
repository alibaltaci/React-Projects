import { styled, css } from "styled-components"
import theme from "../../../styles/theme"

const sharedTextStyles = css`

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
                color: ${props.color};
        `)  
    };

    ${ props => 
        props.fontSize &&
            css`
                font-size: ${ props.fontSize || '1.65rem'};
            `
    }

    ${ props => 
        props.margin && 
            css`
                margin: ${props.margin};
            `    
    }

    ${ props => 
        props.marginTop && 
            css`
                margin-top: ${props.marginTop};
            `    
    }

    ${ props => 
        props.marginBottom &&
            css`
                margin-bottom: ${props.marginBottom};
            `
    }

    ${ props => 
        props.marginLeft && 
            css`
                margin-left: ${props.marginLeft };
            `    
    }

    ${ props => 
        props.marginRight && 
            css`
                margin-right: ${props.marginRight };
            `    
    }

    ${ props => 
        props.opacity &&
            css`
                opacity: ${ props.opacity };
            `
    }

    word-wrap: break-word;
    
`;

const sharedTitleStyles = css`

    ${ props => 
        props.marginBottom ? 
            css`
                margin-bottom: ${props.marginBottom};
            `
            :css`
                margin-bottom: 2rem;
            ` 
    }

`

export const StyledParagraph = styled.p`
    ${ sharedTextStyles }
    line-height: 2rem;
    font-weight: 600;
    font-size: 1.5rem ;
`

export const StyledSpan = styled.span`
    ${ sharedTextStyles }
`

export const StyledH1 = styled.h1`
    ${ sharedTextStyles }
    ${ sharedTitleStyles }
    font-size: 6rem;
    font-weight: 900;
`

export const StyledH2 = styled.h2`
    ${ sharedTextStyles }
    ${ sharedTitleStyles }

    font-size: 4.4rem;
    font-weight: 600;
    white-space: normal;
    text-align: center;
`

export const StyledH3 = styled.h3`
    ${ sharedTextStyles }
    ${ sharedTitleStyles }
    /* font-size: 1.8rem; */
    font-weight: 300;
`