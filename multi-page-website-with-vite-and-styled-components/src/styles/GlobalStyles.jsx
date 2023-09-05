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

    ::-webkit-scrollbar{
        width: 1.5rem;
    }

    ::-webkit-scrollbar-track{
        /* background-color: black; */
        background-color: white;
    }

    ::-webkit-scrollbar-thumb{
        /* background: ${({theme}) => theme.colors.heading}; */
        background: black;
        border: 3px solid transparent;
        border-radius: 9px;
        background-clip: content-box;
    }

    div{
        color: ${ ( {theme} ) => theme.colors.heading };
        font-weight: 900;
    }

    a{
        text-decoration: none;
    }
    
    li{
        list-style: none;
    }


    
    /* --> Typography */

    /* h1{
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
    } */

    /* --> StyledContainer */

    /* .container{
        max-width: 120rem;
        margin: 0 auto;
    }

    .grid{
        display: grid;
        gap: 9rem;
    }

    .grid-two-column{
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-three-column{
        grid-template-columns: repeat(3, 1fr);
    }

    .grid-four-column{
        grid-template-columns: repeat(4, 1fr);
    } */
`

