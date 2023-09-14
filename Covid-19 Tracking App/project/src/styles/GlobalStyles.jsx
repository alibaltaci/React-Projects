import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({theme}) => `${theme.font.primary} , ${theme.font.secondary}` };
    }

    body{
        background: url("./endless-constellation.svg");
    }

    ::-webkit-scrollbar{
        width: .8rem;
    }

    ::-webkit-scrollbar-track{
        background-color: ${({theme}) => theme.colors.pastel_green};
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({theme}) => theme.colors.aubergine};
        border: 2px solid transparent;
        border-radius: 9px;
        background-clip: content-box;
    }

` 