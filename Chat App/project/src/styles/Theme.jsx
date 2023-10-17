import { ThemeProvider } from "styled-components"

export const theme = {

    colors:{
        black_default: "#000000",
        white_default: "#FFFFFF",
        red_default: "#FF0000",
        merah: "#ab4e68",
        midnight_blue: "#101739",
        aubergine: "#382d36",
        
        vibrant_vermilion: "#fd5f00",
        navy_blue: "#06142E",
        dark_state_blue: "#473E66",
        thistle: "#BD83B8",
        plum: "#751189",
        salmon: "#F1916D"
    },

    font: {
        primary: "'Nunito', sans-serif",
        secondary: "'Poppins', sans-serif;",
    },

    btn: {
        small: "30px",
        medium: "40px",
        large: "50px",
        block: "100%",
      },
      
      screen: {
        mobile: "480px",
        tablet: "1200px",
        laptop: "1201px"
      },
    
      fontWeight: {
        bold: 700,
        semiBold: 600,
        medium: 500,
        regular: 400,
        light: 300,
        extraLight: 200,
        thin: 100,
      },

      borderRadius: {
        none:0,
        xs: "6px",
        s: "10px",
        m: "15px",
        l: "20px",
        xl: "25px",
      },

      screenFontSizes: {

        mobile: {
          min: "1rem",
          xs: "1.1rem",
          s: "1.2rem",
          m: "1.3rem",
          l: "1.4rem",
          xl: "1.5rem",
          "2xl": "1.6rem",
          "3xl": "1.7rem",
          "4xl": "1.8rem",
          "5xl": "2.2rem",
          max: "3rem",
        },
    
        tablet: {
          min: "1.2rem",
          xs: "1.3rem",
          s: "1.4rem",
          m: "1.5rem",
          l: "1.5rem",
          xl: "1.6rem",
          "2xl": "1.8rem",
          "3xl": "2rem",
          "4xl": "2.4rem",
          "5xl": "3.2rem",
          max: "5.5rem",
        },

        laptop: {
          min: "1rem",
          xs: "1.1rem",
          s: "1.2rem",
          m: "1.5rem",
          l: "1.5rem",
          xl: "1.6rem",
          "2xl": "1.8rem",
          "3xl": "2rem",
          "4xl": "2.4rem",
          "5xl": "3.2rem",
          max: "5.5rem",
        }

      },

}

const Theme = ( {children} ) =>( 
    <ThemeProvider theme={ theme } >
        {children}
    </ThemeProvider>
)

export default  Theme;