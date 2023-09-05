import { styled } from "styled-components"

export const StyledGoToTop = styled.section`
    
    display: flex;
    justify-content: center;
    align-items: center;

    width: 6rem;
    height: 6rem;
    padding: 1.4rem;
    color: white;
    background-color: ${({theme}) => theme.colors.btn };
    box-shadow: ${({theme}) => theme.colors.shadow };
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 9999;
    cursor: pointer;

    svg{
        animation: gototop 1s linear infinite alternate-reverse;
    }

    @keyframes gototop {
        0%{
            transform: translateY( -0.5rem );
        }
        100%{
            transform: translateY( 1rem );
        }
    }
    
`