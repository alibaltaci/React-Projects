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


`
export default StyledNav;