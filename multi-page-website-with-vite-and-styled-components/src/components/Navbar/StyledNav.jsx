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
            z-index: 999999;
            border: ${({theme}) => theme.colors.black};

            .mobile-nav-icon{
                font-size: 4.2rem;
                color: ${({theme}) => theme.colors.black};
            }
        }

            /* hide te original nav menu */

        .navbar-list{
            width: 100vh;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #fff;

            transform: translateX(100%);

            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: column;
            text-align: center;

            visibility: hidden;
            opacity: 0;

            li{ 
                .navbar-link{

                    &:link,
                    &:visited{
                        font-size: 2.2rem;
                    };

                    &:hover,
                    &:active{
                        color: ${({theme}) => theme.colors.helper};
                    };
                }
            
            }
        }

        .active .mobile-nav-icon{
            display: none;
            font-size: 4.2rem;
            position: absolute;
            top: 3%;
            right: 10%;
            color: ${({theme}) => theme.colors.black};
            z-index: 99999;
        }

        .active .close-outline{
            display: inline-block;
        }

        .active .navbar-list{
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
            z-index: 999;
        }
    }


`
export default StyledNav;