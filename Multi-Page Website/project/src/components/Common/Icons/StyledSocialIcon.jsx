import { styled } from "styled-components";

export const StyledSocialIcon = styled.div`

transition: .5s;

    &:hover{
        transform: scale(1.2);
        svg path{
            fill: ${({theme}) => theme.colors.helper}
        }
    }

`