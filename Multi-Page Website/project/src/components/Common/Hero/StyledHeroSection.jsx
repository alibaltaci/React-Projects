import { styled } from "styled-components";

const StyledHeroSection = styled.section`

    padding: 9rem 2rem;

    .section-hero-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .section-hero-image{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    picture{
        text-align: center;
    }

    .hero-image{
        max-width: 80%;
    }

    @media ( max-width: ${({theme}) => theme.media.tab}) {

        /* .section-hero-data{
            align-items: center;
            margin: 0 3rem;
        } */
        .hero-image{
            max-width: 100%;
        }

    }

    @media ( max-width: ${({theme}) => theme.media.mobile}) {

        .section-hero-data{
            align-items: center;
            margin: 0 3rem;
        }

        .hero-image{
            max-width: 60%;
        }

    }

`

export default StyledHeroSection