import { ThemeProvider } from "styled-components"

export const theme = {

    colors:{
        black_default: "#000000",
        white_default: "#FFFFFF",
        red_default: "#FF0000",
    },

    font: {
        primary: "'Nunito', sans-serif",
        secondary: "'Poppins', sans-serif;",
    },

}

const Theme = ( {children} ) =>( 
    <ThemeProvider theme={ theme } >
        {children}
    </ThemeProvider>
)

export default  Theme;
