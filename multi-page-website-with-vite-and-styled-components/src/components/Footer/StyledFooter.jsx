import { styled } from "styled-components"

export const StyledFooterWrapper = styled.section`



`

export const StyledFooterTop = styled.div`
    max-width: 60vw;
    margin: auto;
    padding: 2rem;
    background-color: ${({theme}) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({theme}) => theme.colors.shadowSupport};
    transform: translateY(50%);

    div:last-child{
        justify-self: end;
        align-self: center;
    }
`

export const StyledFooter = styled.footer`

    padding: 14rem 0 9rem 0;
    background-color: ${({theme}) => theme.colors.footer_bg};

`

export const StyledFooterBottom = styled.div`
    background-color: ${({theme}) => theme.colors.footer_bg};
    padding: 2rem 0 2rem;
`