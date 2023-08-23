import { styled } from "styled-components";

const StyledHeroSection = styled.section`

    padding: 9rem 0;

    .section-hero-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .btn{
        max-width: 16rem;
    }

    .hero-top-data{
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.5rem;
        color: ${({theme}) => theme.colors.helper};
    }

    .hero-heading{
        text-transform: uppercase;
        font-size: 6.4rem;
    }

    .hero-para{
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 60rem;
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

`

export default StyledHeroSection