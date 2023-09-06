import { styled } from "styled-components";

const StyledNav = styled.nav`

    .navbar-list{
        display: flex;
        gap: 4.8rem;


        li{ 
            list-style: none;
            .navbar-link{
                /* list-style: none; */
                text-decoration: none;

                &:link,
                &:visited{
                    display: inline-block;
                    font-size: 1.8rem;
                    text-transform: uppercase;
                    color: ${({theme}) => theme.colors.black};
                    transition: color 0.3s linear;
                };

                &:hover,
                &:active{
                    color: ${({theme}) => theme.colors.helper};
                };
        }}
    }

    .mobile-navbar-btn{
        display: none;

        .close-outline{
            display: none;
        };

        svg{
            height: 2rem;
        };

    };

    .mobile-navbar-btn [name="close-outline"] {
        display: none;
    }


    @media ( max-width: ${({theme}) => theme.media.mobile} ) {
        .mobile-navbar-btn{
            display: inline-block;
            z-index: 999;
            border: ${({theme}) => theme.colors.black};

            .mobile-nav-icon{
                font-size: 4.2rem;
                color: ${({theme}) => theme.colors.black};
            }
        }
    }

`
export default StyledNav;