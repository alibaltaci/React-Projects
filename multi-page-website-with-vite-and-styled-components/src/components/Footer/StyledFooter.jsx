import { styled } from "styled-components"

export const StyledFooterWrapper = styled.section`

    max-width: 60vw;
    margin: auto;
    padding: 2rem;
    background-color: ${({theme}) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({theme}) => theme.colors.shadowSupport};

    div:last-child{
        justify-self: end;
        align-self: center;
    }

`

export const StyledFooter = styled.footer`


`