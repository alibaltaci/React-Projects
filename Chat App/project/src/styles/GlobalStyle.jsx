import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({theme}) => `${theme.font.primary} , ${theme.font.secondary}` };
    }

    ::-webkit-scrollbar{
        width: .4rem;
    }

    ::-webkit-scrollbar-track{
        /* background-color: ${({theme}) => theme.colors.black_default}; */
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({theme}) => theme.colors.white_default};
        border: 2px solid transparent;
        border-radius: 9px;
        background-clip: content-box;
    }

` 
