import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Work Sans', sans-serif;
    }

    html{
        font-size: 62.5%;
        /* scroll-behavior: smooth; */
        overflow-x: hidden;
    }

    div{
        color: ${ ( {theme} ) => theme.colors.heading };
        font-weight: 900;
    }

    h1{
        color: ${ ( {theme} ) => theme.colors.heading };
        font-size: 6rem;
        font-weight: 900;
    }

    h2{
        color: ${({theme}) => theme.colors.heading};
        font-size: 4.4rem;
        font-weight: 300;
        white-space: normal;
        text-align: center;
    }

    h3{
        color: ${({theme}) => theme.colors.heading};
        font-size: 1.8rem;
        font-weight: 400;
    }
    
    p{
        color: ${ ( {theme} ) => theme.colors.text };
        opacity: .7;
        font-size: 1.65rem;
        line-height: 1.5rem;
        margin-top: 1rem;
        font-weight: 400;
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
    }
`

