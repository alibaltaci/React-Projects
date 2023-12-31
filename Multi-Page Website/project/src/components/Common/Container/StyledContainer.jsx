import { css, styled } from "styled-components"

export const StyledContainer = styled.div`

    display: flex;
    max-width: 120rem;
    margin: 0 auto;
    align-items: center;

    ${ props => 
        props.width && 
            css`
                width: ${props.width};
            `
    }

    ${ props => 
        props.marginTop && 
            css`
                margin-top: ${props.marginTop};
            `
    }

    ${ props => 
        props.grid && 
            css`
                display: grid;
                gap: 9rem;
                grid-template-columns: repeat( ${props.grid}, 1fr);
                justify-content: space-between;
            `
    }

    ${ props => 
        props.direction === "column" ? 
            css`
                display: flex;
                flex-direction: column;
            `
            : props.direction === "row" || undefined ? css`
                display: flex;
                flex-direction: row;
            `: null
    }

    ${ props => 
        props.gap && 
            css`
                gap: ${props.gap};
            `
    }

    ${ props => 
        props.padding && 
            css`
                padding: ${props.padding};
            `
    }

    ${ props => 
        props.align && 
            css`
                align-items: ${props.align};
            `
    }

    ${ props => 
        props.justify && 
            css`
                justify-content: ${props.justify};
            `
    }

    @media ( max-width: ${({theme}) => theme.media.tab} ) {
        ${ props => 
        props.grid && 
            css`
                grid-template-columns: 1fr 1fr;
            `
        }
    }

    @media ( max-width: ${({theme}) => theme.media.mobile} ) {
        ${ props => 
            props.grid && 
                css`
                    grid-template-columns: 1fr;
                `
        }

    }

`