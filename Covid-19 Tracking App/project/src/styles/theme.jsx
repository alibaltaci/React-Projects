import { ThemeProvider } from "styled-components"

const theme = {

    colors:{
        black_default: "#000000",
        white_default: "#FFFFFF",
        red_default: "#FF0000",
    }
}

const Theme = ( {children} ) =>( 
    <ThemeProvider theme={ theme } >
        {children}
    </ThemeProvider>
)

export default  Theme;
