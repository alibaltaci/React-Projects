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

` 