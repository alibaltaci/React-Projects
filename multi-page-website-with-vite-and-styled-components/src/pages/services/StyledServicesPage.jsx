import { styled } from 'styled-components'

const StyledServicesPage = styled.section`

    padding: 9rem 0;
    background-color: ${({theme}) => theme.colors.bg};

    .card{
        border: 0.1rem solid rgb(170 170 170 / 40%);
        .card-data{
            padding: 2rem;
        }
    }

    figure{
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        transition: all 0.5s linear;
        &::after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            cursor: pointer;
        }
        &:hover::after{
            width: 100%;
        }
        &:hover img{
            transform: scale(1.2);
        }
        img{
            max-width: 90%;
            margin-top: 1.5rem;
            height: 20rem;
            transition: all 0.2s linear;
        }

    }
`

export default StyledServicesPage