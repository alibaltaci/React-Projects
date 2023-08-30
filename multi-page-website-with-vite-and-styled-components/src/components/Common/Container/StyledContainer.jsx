import { css, styled } from "styled-components"

export const StyledContainer = styled.div`

    max-width: 120rem;
    margin: 0 auto;

    ${ props => 
        props.grid && 
            css`
                display: grid;
                gap: 9rem;
                grid-template-columns: repeat( ${props.grid}, 1fr);
            `
    }
`