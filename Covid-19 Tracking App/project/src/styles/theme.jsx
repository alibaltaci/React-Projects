import { ThemeProvider } from "styled-components"

export const theme = {

    colors:{
        black_default: "#000000",
        white_default: "#FFFFFF",
        red_default: "#FF0000",
        pastel_green: "#99CC99",
        deep_fuchsia: "#550055",
        aubergine: "#330033"
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
        s: "10px",
        m: "15px",
        l: "20px",
        xl: "25px",
      },

      screenFontSizes: {

        mobile: {
          min: "1.1rem",
          xs: "1.2rem",
          s: "1.3rem",
          m: "1.4rem",
          l: "1.5rem",
          xl: "1.6rem",
          "2xl": "1.7rem",
          "3xl": "1.8rem",
          "4xl": "1.9rem",
          "5xl": "2.0rem",
          max: "5.5rem",
        },

        // mobile: {
        //   min: "1.5rem",
        //   xs: "1.6rem",
        //   s: "1.7rem",
        //   m: "1.8rem",
        //   l: "1.9rem",
        //   xl: "2rem",
        //   "2xl": "1.7rem",
        //   "3xl": "2.2rem",
        //   "4xl": "2.4rem",
        //   "5xl": "2.6rem",
        //   max: "5.5rem",
        // },
    
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
